import React, { useState, useEffect } from 'react'
import {
  Image,
  Dimensions,
  ScrollView,
  View as ViewDefault,
} from 'react-native'
import Text from '../components/Atomos/Text'
import Navbar from '../components/Moleculas/Navbar'
import { useQuery } from '../hooks/useQuery'
import { modelCarrusel } from '../models/modelCarrusel'
import colors from '../config/colors'
import { obtenerTodasCategorias } from '../services/categoriasServicios'
import Categorias from '../components/Moleculas/Categorias'
import ProductosList from '../components/Moleculas/Productos'

const { width } = Dimensions.get('window')
const height = width * 0.6
const width2 = width * 0.8
const height2 = width * 0.2

export default function HomeScreen() {
  const { data, isError, isLoading, isErrorMsg, refresh } = useQuery(
    obtenerTodasCategorias
  )
  const [idCategoria, setIdCategoria] = useState(16)

  const handleChangeId = (id) =>
    setIdCategoria(id)

  useEffect(() => {
    refresh()
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
      <ViewDefault>
        <Text style={{ fontSize: 17, textAlign: 'center' }}>
          hagale{' '}
          <Text style={{ color: colors.textColorSecondary }}>sin pesares!</Text>{' '}
          selecciona una categoria.
        </Text>
      </ViewDefault>
      <Categorias
        width={width}
        data={data}
        isError={isError}
        isLoading={isLoading}
        onChangeId={handleChangeId} />
      <ProductosList idCategoria={idCategoria} />
    </>
  )
}
