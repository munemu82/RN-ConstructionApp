import React from 'react'
//import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { firebase } from '../../firebase/config'
import { Avatar, Accessory } from 'react-native-elements';


import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
//import { Avatar } from "@/components/avatar";

export const ProfileScreen = (props) => {
  const user = props.userData;

  console.log(user)
  return (
    <SafeAreaView className="w-full flex-1 bg-gray-950">
      <View className="flex-1 items-center justify-center">
        <View className="gap-2 items-center">
          <Text className="text-gray-50 text-3xl font-bold">
          {user.fullName}
          </Text>
          <Text className="text-gray-50 text-lg">{user.email}</Text>
          
        </View>
      </View>
      <View className="flex-1 justify-center gap-4">
        <Pressable className="flex-row items-center gap-2 px-8">
          <Ionicons name="settings-outline" size={24} color="#fff" />
          <Text className="text-gray-50 text-lg">Settings</Text>
        </Pressable>
        <Pressable className="flex-row items-center gap-2 px-8">
          <Ionicons name="help-buoy-outline" size={24} color="#fff" />
          <Text className="text-gray-50 text-lg">Help</Text>
        </Pressable>
        <Pressable className="flex-row items-center gap-2 px-8">
          <MaterialIcons name="logout" size={24} color="#fff" />
          <Text className="text-gray-50 text-lg">Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen
