import { View, FlatList,StatusBar } from 'react-native'
import React from 'react'
import UserCard from '../../components/UserCard/UserCard'
import { useAtom } from 'jotai'
import { usersAtom,activeUserAtom } from '../../store/jotaiStore'
import styles from "./UsersPage.style"

const UsersPage = () => {
    const [users]=useAtom(usersAtom)
    const [activeUser]=useAtom(activeUserAtom)
    const filteredUsers=users.filter((item)=>{
      if (item.id!=activeUser.id) {
        return item
      }
    })

    const renderItem=({item})=>{
        return(
          <UserCard userName={item.userName} color="#844AFF" imageURL={item.imageURL} date={item.date} />
          )
    }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
       <FlatList
       columnWrapperStyle={{justifyContent: 'space-between'}}
       ItemSeparatorComponent={
        () => <View style={{ height: 20}}/> }
       data={filteredUsers}
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