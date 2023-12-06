import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import TopNavigator from '../../components/TopNavigator'
import UserScreen from './UserScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])

    // Getting records from firebase database
    const entityRef = firebase.firestore().collection('entities')
    const user = props.extraData

console.log(user)
    useEffect(() => {
        // Get some data based on the logged in user
    }, [])


    return (
       <SafeAreaView style={styles.container}>
       <View style={styles.welcome}><Text style={styles.welcomeText}>Welcome {user.fullName}</Text></View>
        <TopNavigator 
            initialRouteName=""
            activeColor="blue"
            inactiveColor="darkblue"
            
  //barStyle={{ backgroundColor: '#694fad' }}
            screens={[
                 {
                    name: "UserScreen", component:UserScreen, 
                    Focusedicon:<Icon name="home" size={25} color="blue" />,
                    icon:<Icon name="home" size={25} color="black" />,
                    tabBarLabel:()=> {return null}
                },
            {   
                name: "Profile", 
                component:ProfileScreen,
                Focusedicon:<FontAwesomeIcon name="user-circle" size={25} color="blue" />,
                icon:<FontAwesomeIcon name="user-circle" size={25} color="black" />,
                tabBarLabel:()=> {return null}
            },
            {   
                name: "Settings", 
                component:SettingsScreen,
                Focusedicon:<Ionicons name="settings-outline" size={25} color="blue" />,
                icon:<Ionicons name="settings-outline" size={25} color="black" />,
                tabBarLabel:()=> {return null}
            },
            ]
            
        }/>
        </SafeAreaView>

       
    )
}


