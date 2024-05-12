import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const UserCard = (props) => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.userName}>{props.username}</Text>
            <View>
              <Text>{props.name}</Text>
              <Text style = {styles.email}>{props.email}</Text>
            </View>
        </View>
    )
}

export default UserCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eceff1",
        marginVertical: 5,
        padding: 10
    },
    email: {
        fontSize: 12,
        fontStyle: "italic",
        color: "gray"
    },
    userName: {
        fontSize: 16,
        fontWeight: "bold"
    }

})