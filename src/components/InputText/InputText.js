import { TextInput } from 'react-native'
import React from 'react'
import styles from "./InputText.style"

const InputText = ({textValue,setValue,password,placeholder}) => {
  return (
    <TextInput style={styles.input} placeholder={placeholder} value={textValue} onChangeText={(text)=>setValue(text)} secureTextEntry={password} />
  )
}

export default InputText