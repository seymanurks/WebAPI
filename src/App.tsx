import '../ReactotronConfig'; 
import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const App = () => {

  const url = "https://jsonplaceholder.typicode.com/users"

  const [userList, setUserList] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const response = await axios.get(url)
    setLoading(false)

    setUserList(response.data)
  }

  const renderUser = ({item}) => <UserCard name = {item.name} username = {item.username} email = {item.email} />

  useEffect(() => {
    fetchData()
  }, [])
  
  return(
    <SafeAreaView>
      {
        loading ? <ActivityIndicator size="large" />
        :
        <FlatList data = {userList} renderItem={renderUser}/>
      }
    </SafeAreaView>
  )
}

export default App;
