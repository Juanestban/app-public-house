import React from 'react'
import { StyleSheet, Text as Txt } from 'react-native'
import colors from '../../../config/colors'
import { fontsName } from '../../../config/fonts'

export const Text = ({ style, children }) => {
  const { textStyle } = styles
  return <Txt style={[textStyle, style]}>{children}</Txt>
}

const styles = StyleSheet.create({
  textStyle: {
    color: colors.white,
    fontFamily: fontsName.RobotoBold,
    textTransform: 'uppercase',
    fontSize: 16,
  },
})
