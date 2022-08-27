import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import TopBar from '../../components/TopBar/TopBar'
import TrackBar from '../../components/TrackBar/TrackBar'

const RegisterPage3 = ({ navigation }) => {

    const handleSubmit = () => {
        navigation.navigate("RegisterPage4")
    }

    return (
        <View style={styles.container}>
            <TopBar title="Kayıt Ol" navigation={navigation} />
            <TrackBar width="50%" />
            <View style={styles.content_container}>
                <LRCard btnName="Devam Et" onSubmit={handleSubmit} >
                    <View style={{ ...styles.text_container, height: 50, }}>
                        <Text style={styles.sub_title}>Bir fotoğraf seçebilir misin?</Text>
                    </View>
                    <View style={styles.content}>
                        <TouchableOpacity >
                            <View style={styles.image_container}>
                                <Image source={require("../../assets/icons/imageIcon.png")} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </LRCard>
            </View>
        </View>
    )
}

export default RegisterPage3