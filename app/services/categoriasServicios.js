import axios from 'axios'
import { API_URL } from './url'

export const obtenerTodasCategorias = () =>
  axios.get(`${API_URL}/categoriasProductos`)
