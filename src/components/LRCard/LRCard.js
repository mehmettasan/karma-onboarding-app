import { View, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import styles from "./LRCard.style"

const LRCard = ({ children, btnName, onSubmit, disabled, loading }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/star.png")} style={styles.image} resizeMode="contain" />
      <View style={styles.content_container}>
        {children}
      </View>
      <TouchableOpacity style={disabled ? styles.btn_disabled : styles.btn} onPress={onSubmit} disabled={disabled}>
        {loading
          ?
          <ActivityIndicator size={'large'} color="#844AFF"/>
          :
          <Text style={styles.btn_text}>{btnName}</Text>
        }
      </TouchableOpacity>
    </View>
  )
}

export default LRCard