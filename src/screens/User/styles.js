import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    user_info :{
        alignItems : 'center', 
        justifyContent : 'center', 
        backgroundColor: '#F6F9FF',
        paddingBottom : 20,
        paddingTop : 20
    },
    user_name : {
        marginTop : 10, 
        fontFamily: 'gilroy_bold', 
        fontSize: 20
    },
    user_details :{
        width: '70%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom : 20
    },
    user_detail_content :{
        width: '50%', alignItems: "center"
    },
    user_detail_info : {
        fontSize: 20, fontFamily: 'gilroy_bold'
    },
    user_detail_label : {
        fontSize: 16, fontFamily: 'gilroy_regular', opacity : 0.5
    }
  });

  export default styles;