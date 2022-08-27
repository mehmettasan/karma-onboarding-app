import { View, Text } from 'react-native'
import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'

const RegisterPage1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} title="Kayıt Ol" />
      <View style={styles.content_container}>
        <LRCard btnName="Devam Et" />
      </View>
    </View>
  )
}

export default RegisterPage1