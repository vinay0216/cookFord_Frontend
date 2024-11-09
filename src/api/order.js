import axios from 'axios';

const baseurl = 'https://cookfordbackendserver-production.up.railway.app';
// const baseurl = 'http://localhost:5000';





async function MakePayment(data){
    try {
        const response = await axios.post(`${baseurl}/api/orders/payment`,data);
        return response;
    }catch(error){
        return error.response;
    };
}


export {  MakePayment };
