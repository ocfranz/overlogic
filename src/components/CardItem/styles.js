import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
    card : {
        flexDirection: 'row',
        height : 68
    },
    card_wrapper_icon :{
        width: '20%',
        justifyContent : 'center',
        alignItems: 'center'
    },
    card_icon:{
        backgroundColor: colors.white,
        height: 40,
        width:40,
        borderRadius: 40,
        justifyContent : 'center',
        alignItems: 'center'
    },
    card_icon_letter:{
        fontFamily : 'gilroy_bold',
        fontSize: 20,
        opacity: 0.6
    },
    card_wrapper_content :{
        width: '60%',
        justifyContent : 'center',
        paddingLeft: 10
    },
    card_wrapper_action :{
        width: '20%',
        justifyContent : 'center',
        alignItems : 'flex-end',
        paddingRight: 20

    },
    card_title:{
        fontSize: 16,
        fontFamily : 'gilroy_regular',
        lineHeight : 19,
        color : colors.white
    },
    card_subtitle :{
        fontFamily : 'gilroy_regular',
        fontSize: 14,
        lineHeight: 16,
        opacity : 0.6,
        color : colors.white
    }
  });

export default styles;