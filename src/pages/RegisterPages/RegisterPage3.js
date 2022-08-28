import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import TopBar from '../../components/TopBar/TopBar'
import TrackBar from '../../components/TrackBar/TrackBar'
import { launchImageLibrary } from "react-native-image-picker"
import { useAtom } from 'jotai'
import { newUserAtom, trackBarStatusAtom } from '../../store/jotaiStore'

const RegisterPage3 = ({ navigation }) => {
    const [response, setResponse] = useState()
    const [newUser] = useAtom(newUserAtom)
    const [disabled, setDisabled] = useState(newUser.imageURL != "" ? false : true);
    const [imageUri, setImageUri] = useState("");
    const [trackBarStatus, setTrackBarStatus] = useAtom(trackBarStatusAtom)

    const handleSubmit = () => {
        navigation.navigate("RegisterPage4")
    }

    useEffect(() => {
        if (newUser.imageURL != "") {
            setImageUri(newUser.imageURL)
        }
    }, [])

    useEffect(() => {
        if (response && response.assets) {
            if (newUser.imageURL == "") {
                setTrackBarStatus(trackBarStatus + 25)
            }
            setImageUri(response.assets[0].uri)
            newUser.imageURL = response.assets[0].uri
            setDisabled(false)
        }
    }, [response])

    const handleSelect = () => {
        launchImageLibrary({
            mediaType: "photo",
            maxWidth: 300,
            maxHeight: 300,
        }, setResponse)
    }

    return (
        <View style={styles.container}>
            <TopBar title="Kayıt Ol" navigation={navigation} />
            <TrackBar width={`${trackBarStatus}%`} />
            <View style={styles.content_container}>
                <LRCard btnName="Devam Et" onSubmit={handleSubmit} disabled={disabled}>
                    <View style={{ ...styles.text_container, height: 50, }}>
                        <Text style={styles.sub_title}>Bir fotoğraf seçebilir misin?</Text>
                    </View>
                    <View style={styles.content}>
                        <TouchableOpacity onPress={() => handleSelect()} >
                            <View style={styles.image_container}>
                                {imageUri ?
                                    <Image source={{ uri: imageUri }} style={{ width: "100%", height: "100%" }} resizeMode="cover" />
                                    :
                                    <Image source={require("../../assets/icons/imageIcon.png")} />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                </LRCard>
            </View>
        </View>
    )
}

export default RegisterPage3