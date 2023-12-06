import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Logo(props) {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/e-Myubako-logo.png')} style={props.styles} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 125,
      height: 100,
    },
  });