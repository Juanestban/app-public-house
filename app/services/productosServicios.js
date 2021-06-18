import axios from 'axios'
import { API_URL } from './url'

export const obtenerProductosDeCategoria = (idCategoria) =>
  axios.get(`${API_URL}/productosConCategorias/${idCategoria}`)