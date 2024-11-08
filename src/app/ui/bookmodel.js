import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import TimeSlote from '../../utils/constants';
import Image from 'next/image';
import { MakePayment } from '../../api/order';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '../lib/hooks';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, setOpen }) {
  const [count, setCount] = React.useState(0);
  const isLogin = useAppSelector(state => state.auth.isAuthenticated);
  const router = useRouter();

  const handelpaynow = async (e) => {
    toast.success("Payment Success ");
  };

  return (
    <React.Fragment>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <AppBar className="bg-slate-300">
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
        <form className="pt-6 mt-5">
          <div
            className="flex flex-col md:flex-row p-6 mt-6 gap-6 object-cover bg-slate-500"
            style={{
              backgroundImage: `url(/images/photo.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '90vh',
            }}
          >
            <div className="basis-2/4 pt-60">
              <h1 className="text-3xl font-semibold text-center text-green-500 bg-white">
                Next Generation Cook Facilitator
              </h1>
              <p className="text-2xl text-center text-green-500 bg-white">
                Get a Trial of this cook
              </p>
            </div>
            <div className="basis-2/5 p-9 bg-slate-50 rounded-lg">
              <div className="mb-4">
                <h1 className="font-bold text-xl mb-3">Fill your requirements</h1>
                <p className="font-light mb-4">Let us find your perfect cook</p>
              </div>
              <div className="flex bg-white rounded-lg p-2 mb-4 justify-between items-center">
                <p>Select Total No. of People</p>
                <div className="flex items-center">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCount(count - 1);
                    }}
                    className="m-2 rounded"
                  >
                    -
                  </button>
                  <p className="bg-gray-100 m-2 mx-2 rounded">{count}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setCount(count + 1);
                    }}
                    className="m-2 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mb-4 rounded-lg">
                <p className="font-">Choose your meals and visits</p>
                <div className="bg-white p-2">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      Breakfast, Lunch (01 visit)
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      Breakfast, Lunch, Dinner (02 visits)
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      Dinner (01 visit)
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-sm">Select time for regular daily visit</p>
                <div className="bg-white p-2 flex justify-between rounded">
                  <p>{"Breakfast, Lunch (01 visit)"}</p>
                  <select>
                    {TimeSlote?.morning.map((item, index) => (
                      <option className="bg-white" key={index} value="">
                        {item?.startTime}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="bg-white">
                <p className="font-sm">Select your choice of cook</p>
                <div className="p-2 flex gap-4">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      any
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      Male
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-4 bg-white shadow-xl mt-3">
                <div className="gap-4">
                  <span className="font-light text-sm">Charges may be Differ from the Actual price</span>
                  <p className="font-normal text-base">
                    Total Amount to Pay <span className="font-bold"> ₹{"5000"}/Months</span>
                  </p>
                </div>
                {isLogin === true ? (
                  <button
                    onClick={handelpaynow}
                    className="bg-green-600 p-2 rounded hover:bg-green-800 text-white cursor-pointer"
                  >
                    Pay now
                  </button>
                ) : (
                  <div
                    onClick={() => router.push('/coustomers/login')}
                    className="bg-green-600 p-2 rounded hover:bg-green-800 text-white cursor-pointer"
                  >
                    Login to Pay
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
}