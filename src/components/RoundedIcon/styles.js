import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors';
const styles = StyleSheet.create({
    rounded_icon : {
        borderRadius : 100,
        height: 100,
        width : 100,
        
        backgroundColor : colors.dark,
        justifyContent : 'center',
        alignContent : 'center'
        
    },  
    icon_image : {
        width : 30,
        height: 30
    }
    
  });

  export default styles;