import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors';
const styles = StyleSheet.create({
    btn_default: {
        alignItems : 'center'
    },
    btn_blue :{
        alignItems : 'center',
        alignContent : 'center',
        justifyContent : 'center',
        height: 45,
        width:'100%',
        borderRadius:5,
        backgroundColor : colors.blue,
    },
    btn_blue_text :{
        fontFamily : "gilroy_regular",
        fontSize: 18,
        color : colors.white
    }
  });

  export default styles;