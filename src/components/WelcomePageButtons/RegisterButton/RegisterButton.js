import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from "./RegisterButton.style"

const RegisterButton = () => {
    return (
        <TouchableWithoutFeedback >
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#434343","#0E091B"]} style={styles.button_container}>
                <Text style={styles.title}>Kayıt Ol</Text>
            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}

export default RegisterButton