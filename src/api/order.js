import axios from 'axios';

// const baseurl = 'http://16.171.133.152:5000';
const baseurl = 'http://localhost:5000';





async function MakePayment(data){
    try {
        const response = await axios.post(`${baseurl}/api/orders/payment`,data);
        return response;
    }catch(error){
        return error.response;
    };
}


export {  MakePayment };
