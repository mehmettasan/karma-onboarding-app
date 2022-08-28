import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import styles from "./LRCard.style"

const LRCard = ({ children, btnName, onSubmit, disabled }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/star.png")} style={styles.image} resizeMode="contain" />
      <View style={styles.content_container}>
        {children}
      </View>
      <TouchableOpacity style={disabled ? styles.btn_disabled : styles.btn} onPress={onSubmit} disabled={disabled}>
        <Text style={styles.btn_text}>{btnName}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LRCard