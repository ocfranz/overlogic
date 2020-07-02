import Axios from 'axios';
import BASE_URL from '../variables/API_ROUTES';

const autenticateUser = (body, _callBack) =>{
    let data = JSON.stringify(body);
    let config = {
        method: 'post',
        url: `${BASE_URL}users/login`,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
    };

    Axios(config)
    .then( (response) => {
        let data = JSON.parse(JSON.stringify(response.data));
        _callBack(data);
       
    })
    .catch( (error) => {
        _callBack({ auth :false, msg : 'Usuario no registrado', err : error});
    });
}

export default autenticateUser;