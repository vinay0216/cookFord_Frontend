import axios from 'axios';

const baseurl = process.env.NEXT_PUBLIC_BASEURL;
console.log("baseurl:", baseurl);



async function GetCategory(data){
    try {
        const response = await axios.get(`${baseurl}/api/categories/get-category`);
        return response;
    }catch(error){
        return error.response;
    };
}


export {  GetCategory };
