import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as Font from 'expo-font'
import { Video } from 'expo-av'
import DrawerNavigator from './components/Layout/navigation'
import colors from './config/colors'
import fontLoader from './config/fonts'
import { styles } from './styles'

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
      <Video
        source={require('../assets/video.mp4')}
        isMuted
        isLooping
        shouldPlay
        resizeMode="cover"
        style={styles.backgroundVideo}
      />
      <View style={styles.overlay}>
        <DrawerNavigator />
      </View>
    </View>
  )
}
