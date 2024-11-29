import axios from 'axios';

const baseurl = process.env.NEXT_PUBLIC_BASEURL;
console.log("baseurl:", baseurl);




async function MakePayment(data){
    try {
        const response = await axios.post(`${baseurl}/api/orders/payment`,data);
        return response;
    }catch(error){
        return error.response;
    };
}


export {  MakePayment };
