import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

const styles = StyleSheet.create({
    character_card :{
       borderRadius: 5, marginBottom: 15,
        alignItems: "center",
        width: '50%',
        paddingHorizontal :10,
        marginBottom: 15

        
    },
    card_content :{
        backgroundColor : '#fafafa',
        paddingVertical: 15,
        borderRadius : 5,
        width: '100%',
        
        alignItems: "center",
        height: 100,
    },
    card_content_selected :{
        backgroundColor : '#fafafa',
        paddingVertical: 15,
        borderRadius : 5,
        width: '100%',
        borderColor : colors.yellow_overlogic,
        backgroundColor : colors.yellow_overlogic,
        borderWidth : 3,
        alignItems: "center",
        height: 100,
    },
    character_name:{
        fontFamily :'gilroy_regular',
        fontSize: 17,
        marginTop: 10
    },
    character_img :{
        width : 40,
        height: 40
    }

  });

export default styles;