import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import * as Font from 'expo-font'
import Text from './components/Atomos/Text'
import colors from './config/colors'
import fontLoader from './config/fonts'

export default function App() {
  const [loadFont, setLoadFont] = useState(false)

  const handleLoadFont = async () => {
    await Font.loadAsync(fontLoader)
    setLoadFont(true)
  }

  useEffect(() => {
    if (!loadFont) handleLoadFont()
  }, [])

  if (!loadFont) return <View></View>

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.statusBarColor} />
      <Text>Hagale sin pesares! selecciona una categoria.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
})
