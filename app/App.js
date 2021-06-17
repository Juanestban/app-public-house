import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font'
import DrawerNavigator from './components/Layout/navigation'
import colors from './config/colors'
import fontLoader from './config/fonts'
import View from './components/Atomos/View'

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
    <View>
      <StatusBar style="light" backgroundColor={colors.statusBarColor} />
      <DrawerNavigator />
    </View>
  )
}
