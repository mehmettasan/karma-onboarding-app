import { Text,View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const CheckBox = ({ value, setValue }) => {

    return (
        <TouchableWithoutFeedback onPress={()=>setValue(!value)} >
            <View style={{ backgroundColor: "white", borderRadius: 5, width: 25, height: 25, justifyContent: 'center', alignItems: "center",margin:5, }}>
                {value == true ? <Text style={{fontSize:20,color:"blue"}}>✓</Text> : <Text></Text>}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CheckBox