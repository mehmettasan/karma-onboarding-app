import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center"
    },
    flatlist_container:{
        width:Dimensions.get("window").width*0.88 +40,
    },
    header_container:{
        width:"100%",
        height:40,
        alignItems:"flex-end",
        justifyContent:"center"
    },
    btn_logout:{
        width:80,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#844AFF",
        marginRight:20,
        borderRadius:5,
    },
    btn_logout_text:{
        color:"white"
    }
})