import React from 'react'
import { Image, View } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
// import View from '../../Atomos/View'
import colors from '../../../config/colors'

export const Navbar = () => {
  const nav = useNavigation()
  const { openDrawer } = DrawerActions

  const handleDrawer = () => nav.dispatch(openDrawer())

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
      }}
    >
      <Feather name="headphones" size={50} color={colors.textColorSecondary} />
      <Image
        height={2}
        style={{ width: 50, height: 50 }}
        source={require('../../../../assets/img/logoWithoutborders.png')}
      />
      <Feather
        name="menu"
        onPress={handleDrawer}
        size={50}
        color={colors.textColorSecondary}
      />
    </View>
  )
}
