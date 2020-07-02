import { StyleSheet} from 'react-native';
import { colors } from '../../styles/colors';
const styles = StyleSheet.create({
    title:{
        fontSize: 16,
       
        color: colors.dark,
        marginLeft: 10,
        fontFamily : 'gilroy_regular',

    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:21,
        paddingRight:21,
        alignItems:'center',
       
        opacity : 1,
    },
    parentHr:{
        
        color: colors.dark,
        width:'100%',
        
    },
    child:{
        paddingHorizontal:21,
    }
    
});

export default styles;