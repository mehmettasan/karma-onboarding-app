import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import TopBar from '../../components/TopBar/TopBar'
import TrackBar from '../../components/TrackBar/TrackBar'
import InputText from "../../components/InputText/InputText"
import CheckBox from '../../components/CheckBox/CheckBox'
import { useAtom } from 'jotai'
import { newUserAtom,trackBarStatusAtom } from '../../store/jotaiStore'
import bcrypt from 'react-native-bcrypt';
import { addUser } from '../../firebase/firebaseCommands'



const RegisterPage4 = ({ navigation }) => {
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false)
    const [newUser] = useAtom(newUserAtom)
    const [error,setError]=useState(false)
    const [errorText,setErrorText]=useState("")
    const [trackBarStatus]=useAtom(trackBarStatusAtom)

    const newUserClear=()=>{
        newUser.id=0
        newUser.date=""
        newUser.password=""
        newUser.userName=""
        newUser.imageURL=""
    }

    const handleSubmit = async() => {
        if (password.length >= 6 && checked) {
            navigation.navigate("LoginPage")
            const hash = bcrypt.hashSync(password, 2);           
            newUser.id=Math.floor(Math.random()*100000)
            newUser.password = hash;
            newUser.likes=[0]
            addUser(newUser)
            newUserClear()
        } else {
            if (password=="") {
                setErrorText("Parola boş bırakılamaz!")
            }
            else if(password.length < 6){
                setErrorText("Parola en az 6 karakter olmalı!")
            }
            else if( !checked ){
                setErrorText("Kullanım koşullarını onaylamalısınız!")
            }
            setError(true)
        }
    }

    return (
        <View style={styles.container}>
            <TopBar title="Kayıt Ol" navigation={navigation} />
            <TrackBar width={`${trackBarStatus}%`} />
            <View style={styles.content_container}>
                <LRCard btnName="Tamamla" onSubmit={handleSubmit}>
                    <View style={styles.text_container}>
                        <Text style={styles.title}>En az 6 karakterden oluşan bir parola girmelisin</Text>
                    </View>
                    <View style={{ ...styles.content, justifyContent: "flex-start" }}>
                        <InputText textValue={password} setValue={setPassword} placeholder="Parola" password={true} />
                        {error&&<Text style={styles.errorText}>{errorText}</Text>}
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