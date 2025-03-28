import { useCallback, useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

export const App = () => {
  const [sort, SetSort] = useState(false)
  const { search, updateSearch, error}  = useSearch()
  const { movies, getMovies, loading } = useMovies({search, sort})
  // const inputRef = useRef() no se abusa de los refs
  
  


  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 1000), // Se aumenta a 500ms para evitar spam de peticiones
    []
  )
  

  // Vale la pena repasar esta forma de obtener los datos del formulario
  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch) // Asegurar que se usa la versión correcta
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    SetSort(!sort)
  }




  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name="search" placeholder="Avengers, Star Wars, The Matrix" type="text" />
          <input type="checkbox" onChange={handleSort} checked={sort}/>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color:'red'}} className='error'>{error}</p>}
      </header>

      <main>
        {/* Lo primero que hacemos es recorrer un JSON */}
        {/* Simulando la api */}
        {
          loading? <p>Cargando...</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}
