import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        paddingTop:10,
        backgroundColor:"white",
        alignItems:"center"
    },
    flatlist_container:{
        width:Dimensions.get("window").width*0.88 +40,
    }
})