import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors';
const styles = StyleSheet.create({
    header_wrapper : {
        height : 50,
        alignItems : 'center',
        justifyContent : 'center',
        alignContent : 'center',
        
    },
    header_btn_wrapper :{
        borderColor: 'red',
        borderWidth : 1,
        position: 'absolute',
        left: 21
    },  
    header_back_img_left : {
        width: 30,
        height : 30,

    },
    header_back_img_rigth : {
        
        width: 30,
        height : 30,
    },
    header_title :{
        fontFamily: 'gilroy_bold',
        fontSize: 18
    }
});

  export default styles;