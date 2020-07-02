import Axios from 'axios';
import API_ROUTE_PATH from '../variables/API_ROUTES';
const signupUser =(body) =>{
    Axios.post(`${API_ROUTE_PATH}/users/signup`, body)
    .then(function (response) {
        if(response.hasOwnProperty('id')){
            return ({id : response.id, auth : true});
        }else{
            return ({msg : response.message,auth : false});
        }
    })
    .catch(function (error) {
        return error;
    });
}

export default signupUser;