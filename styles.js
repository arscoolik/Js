import { StyleSheet} from 'react-native';


export const gstyles = StyleSheet.create({
    title_day: {
        fontSize: 20,
        flex: 1,
        margin: 0,
        fontFamily: 'robo',
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#D9BBA0',
        padding: '10%',
        alignItems: 'center',
        paddingTop: '15%',
    },
    container2: {
        padding: '10%',
        alignItems: 'center',
        paddingTop: '15%',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    week:{
        paddingLeft: '5%',
        paddingRight: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: '#7777',
        flexDirection: "row",
        borderRadius: 100,
    },
    selector:{
        flex: 1,
        backgroundColor: '#ccc8',
        height: '100%',
        width: '12.5%',
        borderRadius: 100,
        position: 'relative',
        left: '826%',
    },
    logo:{
        alignSelf: 'center',
        width: 250,
        height: 250,
        marginTop: '12%',
        marginBottom: 0,
    },
    button:{
        marginHorizontal: '100%',
        width: '40%',
        height: 50,
        borderRadius: 5,
        borderWidth: 2.5,
        borderColor: "black",
        backgroundColor: '#80675E',
    },
    input:{
        borderWidth: 2.7,
        borderRadius: 30,
        borderColor: 'black',
        padding: 10,
        height: 60,
        marginVertical: 10,
        marginHorizontal: '20%',
        width: '110%',
        fontSize: 20,

    },
    reg: {
        marginTop: '5%',
        alignSelf: 'center',
        fontSize: 20,

    },
    day: {
        borderRadius: 40,
        backgroundColor: "#dddddd",
        marginVertical: 15,
        marginHorizontal: 10,
        width: "100%",
        height: "90%",
    },
    important_plan: {
        borderRadius: 10,
        backgroundColor: "#A388FA",
        width: "90%",
        height: 70,
        margin: 10,
        paddingLeft: 10,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    plan: {
        fontFamily: 'robo',
    },
    question: {
        fontFamily: 'robo',
    },
    company_name: {
        fontFamily: 'robo',
        width: '100%',
        fontSize: 50,
        marginBottom: 10,
        alignSelf: 'center',
        marginHorizontal: '15%',
        textAlign: "center",
    },
    paint:{
        position: 'absolute',
        alignSelf: 'center',
        width: 600,
        height: 650,
        marginBottom: '0%',
        opacity: 0.7,
        top: '-5%'
    },
    paint2: {
        position: 'absolute',
        alignSelf: 'center',
        top: "32%",
        width: 650,
        height: 650,
        marginBottom: '0%',
        opacity: 0.7,
    },
    buttontext:{
        fontSize: 35,
        alignSelf: "center"
    },
});