import axios from 'axios';

const baseurl = process.env.NEXT_PUBLIC_BASEURL;
console.log("baseurl:", baseurl);


 async function userRegister(data) {
    console.log(data)
    try {
        const response = await axios.post(`${baseurl}/api/users/signup `, data);
        return response;
    } catch (error) {
        return error.response;
    }
}

// api/cooks/cooklogin
 async function userLogin(data) {
    try {
        const response = await axios.post(`${baseurl}/api/users/login`, data);
        return response;
    } catch (error) {
        return error.response;
    }
}

async function currentUserProfile(token) {
    console.log("Token received:", token);
    try {
        const response = await axios.get(`${baseurl}/api/users/currentuser`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
}



async function createProfile(data, token) {
    try {
        const response = await axios.post(`${baseurl}/api/users/create-profile`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response;
    } catch (error) {
        return error.response;
    }
}



async function getUsersProfile(){
    try{
        const response = await axios.get(`${baseurl}/api/users/getAllprofile`)
        return response;
    }catch(error){
        return error.response;
    }
}
async function getUsersProfilbyid(obj){
    try{
        const response = await axios.post(`${baseurl}/api/users/profile`,obj)
        return response;
    }catch(error){
        return error.response;
    }
}

async function bookService(id){
    try {
        const response = await axios.post(`${baseurl}/api/users/bookservice/${id}`);
        return response;
    }catch(error){
        return error.response;
    };
}


export { userRegister, userLogin,createProfile,getUsersProfile ,getUsersProfilbyid,bookService,currentUserProfile };
