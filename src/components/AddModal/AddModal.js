import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./AddModal.style"

const AddModal = ({userName,setModalView}) => {
    return (
        <View style={styles.container} >
            <View style={styles.modal_content}>
                <View style={styles.text_container}>
                    <Text style={styles.text}>{userName} adlı kullanıcıya istek göndermek istediğine emin misin?</Text>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={()=>setModalView(false)} style={styles.send_button}>
                        <Text style={styles.send_button_text}>Gönder</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setModalView(false)} style={styles.close_button}>
                        <Text style={styles.close_button_text}>Vazgeç</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default AddModal