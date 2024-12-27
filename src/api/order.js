import axios from 'axios';

const baseurl = process.env.NEXT_PUBLIC_BASEURL;


async function MakePayment(data){    
    try {
        const response = await axios.post(`${baseurl}/api/orders/payment`,data);
        return response;
    }catch(error){
        return error.response;
    };
}

// paymentStatus
async function PaymentStatus(id){  
    try {
        const response = await axios.post(`${baseurl}/api/orders/paymentStatus`,{ id });
        return response;
    }catch(error){
        return error.response;
    };
}


// create-order
async function CreateOrder(data,token){ 
    try {
        const response = await axios.post(`${baseurl}/api/orders/create-order`,{ data },{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    }catch(error){
        return error.response;
    };
}

// get-all-order

async function GetAllOrder(token){    

    console.log("getallorder==>",token)
    try {
        const response = await axios.get(`${baseurl}/api/orders/get-all-order`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    }catch(error){
        return error.response;
    };
}



export {  MakePayment,PaymentStatus,CreateOrder,GetAllOrder };
