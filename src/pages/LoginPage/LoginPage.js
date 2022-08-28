import { View, Text,StatusBar } from 'react-native'
import React, { useState } from 'react'
import styles from "./LoginPage.style"
import TopBar from "../../components/TopBar/TopBar"
import LRCard from "../../components/LRCard/LRCard"
import InputText from '../../components/InputText/InputText'
import { usersAtom,activeUserAtom } from '../../store/jotaiStore'
import { useAtom } from 'jotai'

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [users]=useAtom(usersAtom)
  const [,setActiveUser]=useAtom(activeUserAtom)

  const userLogin=()=>{
    let user=null;
    users.forEach((item)=>{
        if (item.userName==username) {
            user=item
        }
    })
    if(user!=null){
        if (user.password==password) {
            setActiveUser(user);
            return;
        }
    }
    setError(true)
}

  const handleSubmit = () => {
      userLogin()
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle={'dark-content'} />
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
            {error && <Text style={styles.errorText}>Hatalı kullanıcı adı ya da parola!</Text>}
          </View>
        </LRCard>
      </View>
    </View>
  )
}

export default LoginPage