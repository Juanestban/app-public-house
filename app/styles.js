import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
})
