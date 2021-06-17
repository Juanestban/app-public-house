import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import HomeScreen from '../../../screen/Home'
import colors from '../../../config/colors'
import { drawerIconLabel, drawerContent, drawerStyle } from './styles'
import modelDrawerLabel from '../../../models/modelDrawerLabel'

const IconArrow = () => (
  <AntDesign name="arrowleft" size={24} color={colors.white} />
)

const Drawer = createDrawerNavigator()
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {modelDrawerLabel.map((text, index) => (
        <DrawerItem
          key={index}
          labelStyle={drawerIconLabel}
          label={text}
          icon={IconArrow}
        />
      ))}
    </DrawerContentScrollView>
  )
}

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={drawerStyle}
        drawerContentOptions={drawerContent}
        drawerPosition="right"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            drawerIcon: IconArrow,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
