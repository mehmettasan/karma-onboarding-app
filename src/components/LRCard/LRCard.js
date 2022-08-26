import { View, Image, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import styles from "./LRCard.style"

const LRCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/star.png")} style={styles.image} resizeMode="contain"/>
      <View style={styles.content_container}>

      </View>
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.btn_text}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LRCard