import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from "./TopBar.style"

const TopBar = ({ title,navigation }) => {

    const goBackPage = () => {
        navigation.goBack();
      }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon_container}>
                <TouchableWithoutFeedback onPress={goBackPage}>
                    <Image source={require("../../assets/icons/backIcon.png")} style={styles.icon} resizeMode="contain" />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default TopBar