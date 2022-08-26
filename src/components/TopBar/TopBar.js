import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from "./TopBar.style"

const TopBar = ({ onClick }) => {
    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Giriş Yap</Text>
            <View style={styles.icon_container}>
                <TouchableWithoutFeedback onPress={onClick}>
                    <Image source={require("../../assets/icons/backIcon.png")} style={styles.icon} resizeMode="contain" />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default TopBar