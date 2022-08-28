import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import TopBar from '../../components/TopBar/TopBar'
import TrackBar from '../../components/TrackBar/TrackBar'
import DatePickerInput from '../../components/DatePicker/DatePickerInput'
import { useAtom } from 'jotai'
import { newUserAtom,trackBarStatusAtom } from '../../store/jotaiStore'

const RegisterPage2 = ({ navigation }) => {
    const [newUser,setNewUser] = useAtom(newUserAtom)
    const [disabled, setDisabled] = useState(newUser.date==""?true:false)
    const [trackBarStatus,setTrackBarStatus]=useAtom(trackBarStatusAtom)
    const [date, setDate] = useState(new Date())
    const [dateString,setDateString] = useState(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);

    useEffect(()=>{
        if (newUser.date!="") {
            setDateString(newUser.date)
        }
    },[])

    const handleSubmit = () => {
        if (newUser.date=="") {
            setTrackBarStatus(trackBarStatus+25)
            newUser.date=dateString
        }
        if (disabled==false) {
            newUser.date=dateString
            navigation.navigate("RegisterPage3")
        }     
    }

    return (
        <View style={styles.container}>
            <TopBar title="Kayıt Ol" navigation={navigation} />
            <TrackBar width={`${trackBarStatus}%`} />
            <View style={styles.content_container}>
                <LRCard btnName="Devam Et" onSubmit={handleSubmit} disabled={disabled} >
                    <View style={{ ...styles.text_container, justifyContent: "center" }}>
                        <Text style={styles.sub_title}>Doğum tarihin nedir?</Text>
                    </View>
                    <DatePickerInput setDateString={setDateString} date={date} setDate={setDate} text={disabled ? "Seçiniz" : dateString} setDisabled={setDisabled} />
                </LRCard>
            </View>
        </View>
    )
}

export default RegisterPage2