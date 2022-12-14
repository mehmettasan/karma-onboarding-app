import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        width:"95%",
        height:450,
        borderRadius:20,
        backgroundColor:"#1A1624",
        alignItems:"center",
        padding:15,
    },
    content_container:{
        flex:1,
        width:"100%",
    },  
    btn:{
        backgroundColor:"white",
        width:"100%",
        height:57,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"
    },
    btn_disabled:{
        backgroundColor:"white",
        width:"100%",
        height:57,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        opacity:0.5,
    },
    btn_text:{
        color:"black",
        fontSize:18
    }
})