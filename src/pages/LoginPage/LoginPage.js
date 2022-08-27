import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from "./LoginPage.style"
import TopBar from "../../components/TopBar/TopBar"
import LRCard from "../../components/LRCard/LRCard"
import InputText from '../../components/InputText/InputText'

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password,setPassword]=useState("")
  const [error,setError]=useState(false)

  const handleSubmit=()=>{
    console.log(username +" "+password)
  }

  return (
    <View style={styles.container}>
      <TopBar title="Giriş Yap" navigation={navigation} />
      <View style={styles.content_container}>
        <LRCard btnName="Giriş Yap" onSubmit={handleSubmit}>
          <View style={styles.content}>
            <View style={styles.text_container}>
              <Text style={styles.title}><Text style={styles.title_span}>Karma</Text>’ya hoşgeldin!</Text>
              <Text style={styles.sub_title}>Haydi maceraya başlayalım!</Text>
            </View>
            <View>
              <InputText textValue={username} setValue={setUsername} placeholder="Kullanıcı adı" />
              <InputText textValue={password} setValue={setPassword} placeholder="Parola" password={true} />
            </View>
            {error &&<Text style={styles.errorText}>Hatalı kullanıcı adı ya da parola!</Text>}
          </View>
        </LRCard>
      </View>
    </View>
  )
}

export default LoginPage