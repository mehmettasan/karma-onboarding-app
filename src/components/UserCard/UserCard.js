import { View, Text, ImageBackground, TouchableWithoutFeedback,Modal } from 'react-native'
import React, { useState } from 'react'
import styles from "./UserCard.style"
import LinearGradient from 'react-native-linear-gradient'
import AddModal from '../AddModal/AddModal'

const UserCard = ({ userName, date, imageURL, color }) => {
    const [modalView,setModalView]=useState(false)

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>{setModalView(true)}} >
            <View style={styles.image_container}>
                <ImageBackground source={{ uri: imageURL }} style={styles.image} >
                    <LinearGradient start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={[color, "transparent", "transparent"]} style={styles.container}>
                        <View style={styles.text_container}>
                            <Text style={styles.text_username}>{userName}</Text>
                            <Text style={styles.text_date}>{date}</Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
        <Modal
        transparent={true}
        visible={modalView}
        onRequestClose={()=>setModalView(false)}
        animationType={"slide"}
        >
            <AddModal userName={userName} setModalView={setModalView}/>
        </Modal>
        </>
    )
}

export default UserCard