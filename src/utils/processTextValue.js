const processTextValue = (value) =>{
    switch(value){
        case 'algebra' :
            return true;
        case 'teorema de pitagoras':
            return true;
        case 'debug' :
            return true;
        default:
            return false;
    }
}

export default processTextValue;
