import axios from 'axios';

// const baseurl = 'http://16.171.133.152:5000';
const baseurl = 'http://localhost:5000';


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


async function createProfile(data, token) {
    try {
        const response = await axios.post(`${baseurl}/api/users/cookprofile`, data, {
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
async function getUsersProfilbyid(id){
    try{
        const response = await axios.get(`${baseurl}/api/users/profile/${id}`)
        return response;
    }catch(error){
        return error.response;
    }
}


export { userRegister, userLogin,createProfile,getUsersProfile ,getUsersProfilbyid };
