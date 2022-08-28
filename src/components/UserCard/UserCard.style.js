import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",
        alignItems:"flex-start",
    },
    image:{
        width:"100%",
        height:"100%",
    },
    image_container:{
        width:Dimensions.get("window").width*0.44,
        height:Dimensions.get("window").width*0.44,
        borderRadius:10,
        overflow:"hidden",
        marginHorizontal:10,
    },
    text_container:{
        height:50,
        width:"100%",
        justifyContent:"center",
        padding:10,
    },
    text_username:{
        fontSize:16,
        color:"white"
    },
    text_date:{
        fontSize:10,
        color:"white"
    }
})