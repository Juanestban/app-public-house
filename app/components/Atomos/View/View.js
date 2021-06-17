import React from 'react'
import { View as Vw } from 'react-native'
import { styles } from './styles'

export const View = ({ style, children }) => {
  const { viewStyle } = styles
  return <Vw style={[viewStyle, style]}>{children}</Vw>
}
