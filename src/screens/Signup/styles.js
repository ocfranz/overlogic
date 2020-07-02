import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    signup_wrapper: {
        alignItems : 'center',
        paddingTop : 70
    },
    form :{
        width : '100%',
        paddingLeft : 30,
        paddingRight : 30,
        paddingTop : 20,
        alignItems : 'center',
        marginBottom : 50
    },
    form_optional : {
        fontSize : 17,
        fontFamily : 'gilroy_regular', 
        opacity : 0.8,
        marginTop: 15
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        marginTop : 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        width: 30
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    }
  });

  export default styles;