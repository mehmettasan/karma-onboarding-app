import { View, Text } from 'react-native'
import React from 'react'
import styles from "./TrackBar.style"

const TrackBar = ({width}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.bar,width:width}} />
    </View>
  )
}

export default TrackBar