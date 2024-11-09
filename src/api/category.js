import axios from 'axios';

const baseurl = 'https://cookfordbackendserver-production.up.railway.app';
// const baseurl = 'http://localhost:5000';





async function GetCategory(data){
    try {
        const response = await axios.get(`${baseurl}/api/categories/get-category`);
        return response;
    }catch(error){
        return error.response;
    };
}


export {  GetCategory };
