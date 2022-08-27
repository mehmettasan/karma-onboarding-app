import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import TopBar from '../../components/TopBar/TopBar'
import TrackBar from '../../components/TrackBar/TrackBar'
import InputText from "../../components/InputText/InputText"
import CheckBox from '../../components/CheckBox/CheckBox'

const RegisterPage4 = ({ navigation }) => {
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)

    return (
        <View style={styles.container}>
            <TopBar title="Kayıt Ol" navigation={navigation} />
            <TrackBar width="75%" />
            <View style={styles.content_container}>
                <LRCard btnName="Tamamla" >
                    <View style={styles.text_container}>
                        <Text style={styles.title}>En az 6 karakterden oluşan bir parola girmelisin</Text>
                    </View>
                    <View style={{ ...styles.content, justifyContent: "flex-start" }}>
                        <InputText textValue={password} setValue={setPassword} placeholder="Parola" password={true} />
                    </View>
                    <View style={styles.policy_container}>
                        <CheckBox value={checked} setValue={setChecked} />
                        <View>
                            <Text style={styles.policy_text}><Text style={styles.policy_text_span}>Kullanım Koşulları, Gizlilik Politikası</Text> ve <Text style={styles.policy_text_span}>KVKK Metnini</Text> okudum onaylıyorum.</Text>
                        </View>
                    </View>
                </LRCard>
            </View>
        </View>
    )
}

export default RegisterPage4