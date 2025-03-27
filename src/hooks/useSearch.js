import { useEffect, useState, useRef } from "react"

export const useSearch = () => {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState('')
    const isFirstRender = useRef(true)
  
    useEffect(() => {
      
      // Este es importantisimo para las validaciones
      if(isFirstRender.current) {
        isFirstRender.current = search === ''
        return
      }

      if(search === '') {
        setError('No se puede buscar una pelicula vacia')
        return
      }
  
      if(search.match(/^\d+$/)) {
        setError('No se puede buscar una pelicula con un numero')
        return
      }
  
      if(search.length < 3) {
        setError('La busqueda debe tener al menos 3 caracteres')
        return
      }
  
      setError(null)
    }, [search])
  
  
    return {search, updateSearch, error}
  }