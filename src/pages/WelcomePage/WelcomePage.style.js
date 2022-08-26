import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image_container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    bg_image: {
        width: "100%",
        height: 370,
        justifyContent: "center",
        alignItems: "center"
    },
    title_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    title: {
        color: "black",
        fontSize: 33,
        textAlign: "center",
        fontWeight: "bold"
    },
    sub_title: {
        fontSize: 18,
        textAlign: "center",
        color: "black",
    },
    btn_container: {
        width: "100%",
        height:200,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        width: "100%",
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 10,
        marginTop: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    footer_text:{
        fontSize:13,
        textAlign:"center",
        padding:20,
        color:"black"
    },
    blue_text:{
        fontSize:13,
        textAlign:"center",
        padding:20,
        color:"blue"
    }
})