import { View, Text, ImageBackground,StatusBar } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import styles from "./WelcomePage.style"
import Button from '../../components/WelcomePageButtons/LoginButton/LoginButton'
import RegisterButton from '../../components/WelcomePageButtons/RegisterButton/RegisterButton'

const WelcomePage = ({navigation}) => {

  return (
    <LinearGradient colors={["#EAE0FF", "#FFFFFF", "#FFFFFF"]} style={styles.container}>
      <StatusBar backgroundColor="#EAE0FF" barStyle={"dark-content"} />
      <View style={styles.image_container}>
      <ImageBackground source={require("../../assets/images/wp_background.png")} resizeMode="cover" style={styles.bg_image} >
        <View style={styles.title_container}>
          <Text style={styles.title}>Ruh eşini keşfetmeye hazır mısın?</Text>
          <Text style={styles.sub_title}>Doğum haritanda gizlenen sırları keşfet,{"\n"}kadim bilgiye kulak ver!</Text>
        </View>
      </ImageBackground>
      </View>
      <View style={styles.btn_container}>
        <Button navigation={navigation}/>
        <View style={styles.footer}>
          <RegisterButton navigation={navigation} />
          <Text style={styles.footer_text}>Devam ederek <Text style={styles.blue_text}>Kullanım Koşullarımızı</Text> ve <Text style={styles.blue_text}>Gizlilik Politikamızı</Text> kabul etmiş sayılırsınız.</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default WelcomePage