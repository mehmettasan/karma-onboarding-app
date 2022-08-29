import { View, Text,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import styles from "./LikesPage.style"
import { useAtom } from 'jotai'
import { activeUserAtom } from '../../store/jotaiStore'
import UserCard from '../../components/UserCard/UserCard'
import { getUsers } from '../../firebase/firebaseApi'

const LikesPage = () => {
  const [users,setUsers]=useState([])

  const uploadUsers = async () => {
     setUsers(await getUsers())
  }
  
  useEffect(()=>{
    uploadUsers()
  },[])

  const [activeUser]=useAtom(activeUserAtom)
  const filteredUsers=users.filter((item)=>{
    if (activeUser.likes) {
      if (activeUser.likes.includes(item.id)) {
        return item;
      }
    }
  })

  const renderItem=({item})=>{
    return(
      <UserCard userName={item.userName} color="#D6052B" imageURL={item.imageURL} date={item.date} />
      )
}

  return (
    <View style={styles.container}>
      {filteredUsers.length==0
      ?
      <Text>Hiç Beğeni Yok</Text>
      :
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
      }
    </View>
  )
}

export default LikesPage