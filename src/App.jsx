import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'



export const App = () => {
  const { search, updateSearch, error}  = useSearch()
  const { movies, getMovies, loading } = useMovies({search})
  // const inputRef = useRef() no se abusa de los refs
  

  // Vale la pena repasar esta forma de obtener los datos del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
    // Validacion
  }



  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} name="search" placeholder="Avengers, Star Wars, The Matrix" type="text" />
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
