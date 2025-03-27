import { Movies } from './components/movies'
import responseMovies from './mocks/with-result.json'

export const App = () => {
  const movies = responseMovies.Search

  // Estos es bueno para no depende en todo el proyecto solo de la api
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, The Matrix" type="text" />
        </form>
      </header>

      <main>
        {/* Lo primero que hacemos es recorrer un JSON */}
        {/* Simulando la api */}
        <Movies movies={movies}/>
      </main>
      <p>XD</p>
    </div>
  )
}
