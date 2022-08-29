import { View, FlatList, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserCard from '../../components/UserCard/UserCard'
import { useAtom } from 'jotai'
import { activeUserAtom } from '../../store/jotaiStore'
import styles from "./UsersPage.style"
import { getUsers } from '../../firebase/firebaseApi'

const UsersPage = () => {
  const [users, setUsers] = useState([])

  const uploadUsers = async () => {
    setUsers(await getUsers())
  }

  useEffect(() => {
    uploadUsers()
  }, [])

  const [activeUser] = useAtom(activeUserAtom)
  const filteredUsers = users.filter((item) => {
    if (item.id != activeUser.id) {
      return item
    }
  })

  const renderItem = ({ item }) => {
    return (
      <UserCard userName={item.userName} color="#844AFF" imageURL={item.imageURL} date={item.date} id={item.id} />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <View style={styles.flatlist_container}>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ItemSeparatorComponent={
            () => <View style={{ height: 20 }} />}
          data={filteredUsers}
          numColumns="2"
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            () => <View style={{ height: 20 }} />}
        />
      </View>
    </View>
  )
}

export default UsersPage