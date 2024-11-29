import axios from 'axios';

const baseurl = process.env.NEXT_PUBLIC_BASEURL;
console.log("baseurl:", baseurl);



async function Cusion(data){
    try {
        const response = await axios.get(`${baseurl}/api/utils/cusion`);
        return response;
    }catch(error){
        return error.response;
    };
}

async function Language(data){
    try {
        const response = await axios.get(`${baseurl}/api/utils/language`);
        return response;
    }catch(error){
        return error.response;
    };
}

async function CookPrefrence(data){
    try {
        const response = await axios.get(`${baseurl}/api/utils/cook-prefrence`);
        return response;
    }catch(error){
        return error.response;
    };
}


export { Cusion,Language,CookPrefrence };
