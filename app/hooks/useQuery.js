import { useState } from 'react'

export const useQuery = (fetchAxios) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isErrorMsg, setIsErrorMsg] = useState('')

  const fetchQuery = async () => {
    try {
      setIsError(false)
      setIsLoading(true)
      const { data } = await fetchAxios()
      setData(data)
      setIsLoading(false)
    } catch ({ response: { mensaje = '' } }) {
      setIsLoading(false)
      setIsError(true)
      console.log(mensaje)
      setIsErrorMsg(mensaje)
    }
  }

  const fetchApiId = async (id) => {
    try {
      setIsError(false)
      setIsLoading(true)
      const { data } = await fetchAxios(id)
      setData(data)
      setIsLoading(false)
    } catch ({ response: { mensaje = '' } }) {
      setIsLoading(false)
      setIsError(true)
      console.log(mensaje)
      setIsErrorMsg(mensaje)
    }
  }
  
  const refresh = async (esPorId) => {
    if (esPorId)
      return await fetchApiId(esPorId)
    return await fetchQuery()
  }

  return { data, isLoading, isError, isErrorMsg, refresh }
}
