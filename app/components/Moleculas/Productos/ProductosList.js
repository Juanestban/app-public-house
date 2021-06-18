import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useQuery } from '../../../hooks/useQuery'
import { Productos } from './Productos'
import { obtenerProductosDeCategoria } from '../../../services/productosServicios'

export const ProductosList = ({ idCategoria }) => {
  const { data, isError, isLoading, isErrorMsg, refresh } = useQuery(
    obtenerProductosDeCategoria
  )

  useEffect(() => {
    refresh(idCategoria)
  }, [idCategoria])

  return (
    <ScrollView>
      {!isLoading && !isError && data.map((cat) => (
        <Productos key={cat.id} {...cat} />
      ))}
    </ScrollView>
  )
}