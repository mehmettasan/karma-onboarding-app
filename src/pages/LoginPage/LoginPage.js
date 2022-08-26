import { View, Text } from 'react-native'
import React from 'react'
import styles from "./LoginPage.style"
import TopBar from "../../components/TopBar/TopBar"
import LRCard from "../../components/LRCard/LRCard"

const LoginPage = ({ navigation }) => {

  const goBackPage = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TopBar onClick={goBackPage} />
      <View style={styles.content_container}>
        <LRCard />
      </View>
    </View>
  )
}

export default LoginPage