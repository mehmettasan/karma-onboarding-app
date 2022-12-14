import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from "./LoginButton.style"

const LoginButton = ({navigation}) => {

    const goLoginPage=()=>{
        navigation.navigate("LoginPage");
      }

    return (
        <TouchableWithoutFeedback onPress={goLoginPage} >
            <View style={styles.button_container}>
                <Text style={styles.button_title}>Giriş Yap</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LoginButton