import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase/config'

const UserScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>User Landing screen</Text>
           {/*  <TouchableOpacity 
                onPress={()=>navigation.navigate('Home')} 
                style={styles.button}
            >
                <Text style={styles.buttonText}>Go Home!</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    screen:{
        flex:1,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00000025',
    },
    text:{
        color:'#000',
        fontWeight:'700',
        fontSize:30
    },
    button:{
        backgroundColor:'#0275d8',
        paddingVertical: 5,
        paddingHorizontal: 10
        
    },
    buttonText:{
        color:'#fff',
        fontSize:25
    }
})