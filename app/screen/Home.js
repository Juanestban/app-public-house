import React, { useEffect } from 'react'
import {
  Image,
  Dimensions,
  ScrollView,
  Button,
  View as ViewDefault,
} from 'react-native'
import View from '../components/Atomos/View'
import Text from '../components/Atomos/Text'
import Navbar from '../components/Moleculas/Navbar'
import { useQuery } from '../hooks/useQuery'
import { modelCarrusel } from '../models/modelCarrusel'
import colors from '../config/colors'
import { obtenerTodasCategorias } from '../services/categoriasServicios'

const { width } = Dimensions.get('window')
const height = width * 0.6
const width2 = width * 0.8
const height2 = width * 0.2

export default function HomeScreen() {
  const { data, isError, isLoading, isErrorMsg, refresh } = useQuery(
    obtenerTodasCategorias
  )

  useEffect(() => {
    refresh()
    console.log(data, isError, isErrorMsg, isLoading)
  }, [])

  return (
    <>
      <Navbar />
      <ViewDefault style={{ width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled
          style={{ width, height }}
        >
          {modelCarrusel.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={{
                width,
                height,
                resizeMode: 'cover',
              }}
            />
          ))}
        </ScrollView>
      </ViewDefault>
      <View>
        <Text style={{ fontSize: 17, textAlign: 'center' }}>
          hagale{' '}
          <Text style={{ color: colors.textColorSecondary }}>sin pesares!</Text>{' '}
          selecciona una categoria.
        </Text>
      </View>
      <ViewDefault style={{ width: width2, height: height2 }}>
        <ScrollView
          style={{ width: width2, height: height2 }}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {!isLoading &&
            !isError &&
            data.map(({ id = 0, nombre = '', icono = '' }) => (
              <Button key={id} onPress={() => console.log('nice!')}>
                <Image
                  source={icono}
                  style={{
                    width: 150,
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: '50%',
                  }}
                />
                <Text>{nombre}</Text>
              </Button>
            ))}
        </ScrollView>
      </ViewDefault>
    </>
  )
}
