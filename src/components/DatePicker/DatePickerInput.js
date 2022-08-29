import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import styles from "./DatePickerInput.style"

const DatePickerInput = ({date,setDate,text,setDisabled,setDateString}) => {
  const [open, setOpen] = useState(false)

  return (
    <View>
      <TouchableOpacity style={styles.btn_container} onPress={()=>setOpen(true)}>
        <Text style={styles.btn_text}>{text}</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setDateString(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)
          setDisabled(false)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </View >
  )
}

export default DatePickerInput