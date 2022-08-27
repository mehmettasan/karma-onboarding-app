import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../../components/TopBar/TopBar'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import InputText from '../../components/InputText/InputText'
import TrackBar from '../../components/TrackBar/TrackBar'

const RegisterPage1 = ({ navigation }) => {
  const [username, setUsername] = useState("")

   const handleSubmit=()=>{
    navigation.navigate("RegisterPage2")
   }

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} title="Kayıt Ol" />
      <TrackBar width="0%" />
      <View style={styles.content_container}>
        <LRCard btnName="Devam Et" onSubmit={handleSubmit}>
          <View style={styles.text_container}>
            <Text style={styles.title}><Text style={styles.title_span}>Karma</Text>’ya hoşgeldin!</Text>
            <Text style={styles.sub_title}>Haydi maceraya başlayalım!</Text>
          </View>
          <InputText textValue={username} setValue={setUsername} placeholder="Kullanıcı adı" />
        </LRCard>
      </View>
    </View>
  )
}

export default RegisterPage1