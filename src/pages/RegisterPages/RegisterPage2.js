import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from "./RegisterPage.style"
import LRCard from '../../components/LRCard/LRCard'
import TopBar from '../../components/TopBar/TopBar'
import TrackBar from '../../components/TrackBar/TrackBar'
import DatePickerInput from '../../components/DatePicker/DatePickerInput'

const RegisterPage2 = ({ navigation }) => {
    const [date, setDate] = useState(new Date())
    const dateString= `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;

    const handleSubmit = () => {
        navigation.navigate("RegisterPage3")
    }

    return (
        <View style={styles.container}>
            <TopBar title="Kayıt Ol" navigation={navigation} />
            <TrackBar width="25%" />
            <View style={styles.content_container}>
                <LRCard btnName="Devam Et" onSubmit={handleSubmit} >
                    <View style={{...styles.text_container,justifyContent:"center"}}>
                        <Text style={styles.sub_title}>Doğum tarihin nedir?</Text>
                    </View>
                    <DatePickerInput date={date} setDate={setDate} text={dateString} />
                </LRCard>
            </View>
        </View>
    )
}

export default RegisterPage2