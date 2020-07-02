const validateUserInfo = (data) =>{
    
    if(data.name == ""){
        return {status : false, msg : 'Tiene que indicar su nombre'};
    }
    if(data.username == ""){
        return {status : false, msg : 'Tiene que indicar su usuario'};
    }
    if(data.password == ""){
        return {status : false, msg : 'Tiene que indicar su contraseña'};
    }
    if(data.password.length < 6){
        
        return {status : false, msg : 'La contraseña debe ser mayor a 6'};
    }
    if(data.password_confirm.length < 6){
        return {status : false, msg : 'La contraseña debe ser mayor a 6'};
    }
    if(data.password_confirm == ""){
        return {status : false, msg : 'Tiene que indicar confirmar su constraseña'};
    }
    if(data.password_confirm != data.password){
        return {status : false, msg : 'Las contraseñas deben ser iguales'};
    }

    return {status : true, msg : 'Correcto'};

}
export default validateUserInfo;