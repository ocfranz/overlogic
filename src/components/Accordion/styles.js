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
        //paddingHorizontal:21,
        width: '100%',
        backgroundColor: '#F0F0F5'
    },
    switchContainer: {
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'center',
        height: 40,
        paddingLeft: 50,
    },
    botones: {
        height : 40,
        paddingTop: 9.5,
        paddingLeft: 50,
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
    }
});

export default styles;