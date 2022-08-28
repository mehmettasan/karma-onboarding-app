import { View, Text,StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar/TopBar'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import InputText from '../../components/InputText/InputText'
import TrackBar from '../../components/TrackBar/TrackBar'
import { useAtom } from 'jotai'
import { trackBarStatusAtom,newUserAtom } from '../../store/jotaiStore'

const RegisterPage1 = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [error,setError]=useState(false)
  const [trackBarStatus,setTrackBarStatus]=useAtom(trackBarStatusAtom)
  const [newUser]=useAtom(newUserAtom);
  useEffect(()=>{
    if (newUser.userName!="") {
      setUsername(newUser.userName)
    }
  },[])

   const handleSubmit=()=>{
    if (newUser.userName==""&&username!="") {
      setTrackBarStatus(trackBarStatus+25)
    }
    if (username!="") {
      navigation.navigate("RegisterPage2"),
      setError(false)
      newUser.userName=username
    }
    else{
      setError(true)
    }
   }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <TopBar navigation={navigation} title="Kayıt Ol" />
      <TrackBar width={`${trackBarStatus}%`} />
      <View style={styles.content_container}>
        <LRCard btnName="Devam Et" onSubmit={handleSubmit} >
          <View style={styles.text_container}>
            <Text style={styles.title}><Text style={styles.title_span}>Karma</Text>’ya hoşgeldin!</Text>
            <Text style={styles.sub_title}>Haydi maceraya başlayalım!</Text>
          </View>
          <InputText textValue={username} setValue={setUsername} placeholder="Kullanıcı adı" />
            {error && <Text style={styles.errorText}>Kullanıcı adı boş bırakılamaz!</Text>}
        </LRCard>
      </View>
    </View>
  )
}

export default RegisterPage1