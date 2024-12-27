import * as React from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"
import TimeSlote from "../../utils/constants"
import { CreateOrder, MakePayment } from "../../api/order"
import { useForm } from 'react-hook-form';
import { useParams } from "next/navigation"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog({ open, setOpen }) {
  const [count, setCount] = React.useState(0);
  const {register, handleSubmit,formState: { errors },} = useForm();
  const { id } = useParams();

  const onSubmit = async (data) => {
    const formData = { ...data, id };
    let token = localStorage.getItem("accessToken")
    try {
      const response = await CreateOrder(formData,token);
      if (response.status === 201) {
        const res = await MakePayment();
        if (res.data.success) {
          window.location.href = res.data.redirectUrl;
        } else {
          console.error("Payment initiation failed:", res.data.message);
        }
      }
    } catch (error) {
      console.error("Error occurred during payment:", error.message);
    }
  };
  

  return (
    <React.Fragment>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar className="bg-orange-600">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpen(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography className="ml-2 flex-1" variant="h6" component="div">
              Select Your Preference
            </Typography>
            <Button autoFocus color="inherit" onClick={() => setOpen(false)}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <form onSubmit={handleSubmit(onSubmit)} className="pt-6 mt-5">
          <div
            className="flex flex-col md:flex-row p-9 mt-6 gap-6 object-cover bg-blend-normal "
            style={{
              backgroundImage: `url(/images/foods.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "90vh",
              width: "99vw"
            }}
          >
            <div className="basis-2/4">
              <h1 className="text-2xl font-semibold">Part 1</h1>
            </div>
            <div className="basis-2/5 p-9 bg-slate-50  rounded-lg">
              <div className="mb-4">
                <h1 className="font-bold text-xl mb-3">Fill your requirements</h1>
                <p className="font-light  mb-4">Let us find your perfect cook</p>
              </div>
              <div className="flex shadow-2xl bg-white rounded-lg p-2 mb-4 justify-between items-center">
                <p>Select Total No. of People</p>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 0))}
                    className="m-2 rounded"
                  >
                    -
                  </button>
                  <p className="bg-gray-100 m-2 mx-2 rounded">{count}</p>
                  <input type="hidden" value={count} {...register("Gaust_Count", { required: true })} />
                  <button
                    type="button"
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                    className="m-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mb-4">
                <p className="font- ">Choose your meals and visits</p>
                <div className="bg-white  p-2">
                  <div className="flex items-center gap-x-3">
                      <input
                          {...register("Meals_and_visits", { required: "This field is required" })}
                          value="Breakfast, Lunch (01 visit)"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900"> Breakfast, Lunch (01 visit)</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                      <input
                        {...register("Meals_and_visits", { required: "This field is required" })}
                        value="Breakfast, Lunch, Dinner (02 visits)"
                        type="radio"
                       className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label className="text-sm">Breakfast, Lunch, Dinner (02 visits)</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                      <input
                        {...register("Meals_and_visits")}
                        value=" Dinner (01 visit)"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900" >Dinner (01 visit)</label>
                  </div>
                  {errors.Meals_and_visits && (
                    <p className="text-red-600 text-sm">{errors.Meals_and_visits.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <p className="font-sm">Select time for Selected visit</p>
                  <div className="bg-white p-2 flex justify-between rounded shadow-lg">
                    <p>{"Breakfast, Lunch (01 visit)"}</p>
                    <select>
                      {TimeSlote?.morning.map((item, index) => (
                        <>
                          <p>Select time for vesit </p>
                          <option className="bg-white" key={index} value="">
                            {item?.startTime}
                          </option>
                        </>
                      ))}
                    </select>
                  </div>
              </div>
              <div className="bg-white mb-4">
                <p className="font-sm">Select your choice of cook</p>
                <div className="p-2 flex gap-4">
                  <div className="flex items-center gap-x-3">
                    <input
                      {...register("gender", { required: "Gender selection is required" })}
                      value="any"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label className="text-sm">Any</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      {...register("gender", { required: "Gender selection is required" })}
                      value="Male"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label className="text-sm">Male</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      {...register("gender", { required: "Gender selection is required" })}
                      value="Female"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label className="text-sm">Female</label>
                  </div>
                </div>
                {errors.gender && (
                  <p className="text-red-600 text-sm">{errors.gender.message}</p>
                )}
              </div>

              <div className="flex justify-between p-4 bg-white shadow-xl mt-3 ">
              <div className="flex flex-col gap-4">
                  <span className="font-light text-sm text-gray-600">
                    Charges may differ from the actual price
                  </span>
                  <p className="font-normal text-base text-gray-800">
                    Total Amount to Pay{" "}
                    <span className="font-bold text-green-600">₹{5000}/Month</span>
                  </p>
                  <input type="hidden" value={5000} {...register("amount", { required: true })} />
              </div>
              <div className="flex justify-end">
                  <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800" >
                    Submit
                  </button>
              </div>
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  )
}