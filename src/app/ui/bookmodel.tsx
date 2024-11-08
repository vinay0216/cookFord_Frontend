import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import TimeSlote from './../../utils/constants';
import Image from 'next/image';
import {MakePayment} from './../../api/order';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ open, setOpen }) {
  const [count, setCount] = React.useState(0);
  console.log("open click in dialog count", count);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };



const handelpaynow= async(e)=>{
  
  console.log("pay now clicked");
 
  try{
    let order = { 
      CustomerName:"vinay kumar", 
      OrderID: "Order_ID",
      OrderAmount: 100,
      // CurrencyCode: Currency_Code,
      number:"",
      MID:"MID"+Date.now(),
      TransectionID:"t"+Date.now()
    }

    const res = MakePayment(order)
    console.log("res",res)

  }catch(e){
console.log(e)
  }
}

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
      >
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
        <form className="pt-6 mt-5" >
          <div className="flex flex-col md:flex-row p-9 mt-6 gap-6 object-cover bg-blend-normal "
          style={{ backgroundImage: `url(/images/foods.png)`, backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '90vh',
            width: '99vw',}}
         
          >
            <div className='basis-2/4'>
              <h1 className="text-2xl font-semibold">Part 1</h1>
            </div>
            <div className='basis-2/5 p-9 bg-slate-50  rounded-lg'>
              <div className='mb-4'>
                <h1 className="font-bold text-xl mb-3">Fill your requirements</h1>
                <p className='font-light  mb-4'>Let us find your perfect cook</p>
              </div>
              <div className="flex shadow-2xl bg-white rounded-lg  p-2 mb-4 justify-between items-center">
                <p>Select Total No. of People</p>
                <div className='flex items-center'>
                  <button onClick={handleDec} className='m-2 rounded'>-</button>
                  <p className='bg-gray-100 m-2 mx-2 rounded'>{count}</p>
                  <button onClick={handleInc} className='m-2  rounded'>+</button>
                </div>
              </div>
              <div className='mb-4'>
                <p className="font- ">Choose your meals and visits</p>
                <div className="bg-white  p-2">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      // {...register("userType")}
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
                      // {...register("userType")}
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
                      // {...register("userType")}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      Dinner (01 visit)
                    </label>
                  </div>
                </div>
              </div>
              <div className='mb-4'>
                <p className="font-sm">Select time for regular daily visit</p>
                <div className="bg-white p-2 flex justify-between rounded shadow-lg">
                      <p>{ "Breakfast, Lunch (01 visit)"}</p>
                  <select>
                    {TimeSlote?.morning.map((item, index) => (
                      <>
                      <p>Select time for vesit </p>
                      <option className='bg-white' key={index} value="">{item?.startTime}</option>
                      {console.log( "inside select=>",item.startTime)}
                     
                      </>
                    ))}
                  </select>
                </div>
              </div>
              <div className='bg-white'>
                <p className="font-sm">Select your choice of cook</p>
                <div className=" p-2 flex gap-4">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="user"
                      value="user"
                      // {...register("userType")}
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
                      // {...register("userType")}
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
                      // {...register("userType")}
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      Female
                    </label>
                  </div>
                </div>
                
              </div>
              <div className='flex justify-between p-4 bg-white shadow-xl mt-3 '>
                    <div className=' gap-4'>
                      <span className='font-light text-sm'>Charges may be Differ from the Actual price</span>
                      <p className='font-normal text-base'>Total Amount to Pay  <span className='font-bold'> ₹{"5000"}/Months</span> </p>
                    </div>
                    
                
                    <button onClick={handelpaynow} className='bg-green-600 p-2 rounded hover:bg-green-800 text-white'>Pay now</button>
                </div>
                
            </div>
          </div>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
