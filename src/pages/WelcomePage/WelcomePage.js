import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from "./WelcomePage.style"

const WelcomePage = () => {
  return (
    <LinearGradient colors={["#EAE0FF","#FFFFFF"]} style={styles.container}>
      <Text>WelcomePage</Text>
    </LinearGradient>
  )
}

export default WelcomePage