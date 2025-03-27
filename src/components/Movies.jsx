// import responseMovies from '../mocks/with-result.json'
// import withoutResults from '../mocks/no-result.json' 
const ListOfMovies = ({ movies }) => {

  return (
    <>
      <ul className="movies">
        {/* No hay que atarse a la api */}
        {movies.map((movie) => (
          <li className="movie" key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))}
      </ul>

    </>
  );
};

const NoMoviesResult = () => {
    return (
        <p style={{textAlign: 'center'}}>No hay peliculas para la busqueda</p>
    )
}

export const Movies = ({ movies }) => {
    const hasMovies = movies?.length > 0

    return (   
      hasMovies
      ? <ListOfMovies movies={movies}/>
      : <NoMoviesResult/>   
    )
} 