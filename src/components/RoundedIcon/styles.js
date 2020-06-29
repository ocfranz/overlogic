import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors';
const styles = StyleSheet.create({
    rounded_icon : {
        borderRadius : 50,
        height: 50,
        width : 50,
        alignItems: 'center',
        elevation : -1,
        backgroundColor : colors.dark,
        justifyContent : 'center',
        alignContent : 'center'
        
    },  
    icon_image : {
        width : 25,
        height: 25
    }
    
  });

  export default styles;