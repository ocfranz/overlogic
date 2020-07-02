import Axios from 'axios';
import BASE_URL from '../variables/API_ROUTES';
const signupUser =(body, handleCallBack) =>{
    console.log(body)
    let data = JSON.stringify(body);
    let config = {
        method: 'post',
        url: `${BASE_URL}users/signup`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    Axios(config)
    .then( (response) => {
        let data = JSON.parse(JSON.stringify(response.data));
        handleCallBack(data);
    })
    .catch( (error) => {
        handleCallBack({ auth :false, msg : 'Usuario no registrado', err : true});
    });
}

export default signupUser;