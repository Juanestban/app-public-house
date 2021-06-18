import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Text from '../../Atomos/Text'

export const Productos = ({ icono = '', nombre = '', precio = '' }) => {
  return (
    <TouchableOpacity style={{ width: '100%' }}>
      <View style={{ flexDirection: 'row', padding: 5 }}>
        <Image source={{ uri: icono }} style={{ width: 200, height: 100, borderRadius: 20 }} />
        <View>
          <Text>{nombre}</Text>
          <Text>${precio}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}