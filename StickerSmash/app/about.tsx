import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>style={styles.text}Tela Sobre</style></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    Text: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color:'#fff'
    }
})