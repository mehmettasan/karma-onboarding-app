import { View, FlatList } from 'react-native'
import React from 'react'
import UserCard from '../../components/UserCard/UserCard'
import { useAtom } from 'jotai'
import { usersAtom } from '../../store/jotaiStore'
import styles from "./UsersPage.style"

const UsersPage = () => {
    const [users]=useAtom(usersAtom)

    const renderItem=({item})=>{
        return(
            <UserCard userName={item.userName} color="#844AFF" imageURL={item.imageURL} date={item.date} />
        )
    }

  return (
    <View style={styles.container}>
       <FlatList
       columnWrapperStyle={{justifyContent: 'space-between'}}
       ItemSeparatorComponent={
        () => <View style={{ height: 20}}/> }
       data={users}
       numColumns="2"
       renderItem={renderItem}
       keyExtractor={(item)=>item.id}
       showsVerticalScrollIndicator={false}
       ListFooterComponent={
        () => <View style={{ height: 20}}/> }
       /> 
    </View>
  )
}

export default UsersPage