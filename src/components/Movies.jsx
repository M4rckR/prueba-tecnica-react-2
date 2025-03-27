// import responseMovies from '../mocks/with-result.json'
// import withoutResults from '../mocks/no-result.json' 
const ListOfMovies = ({ movies }) => {




  return (
    <>
      {/* No hay que atarse a la api */}
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </>
  );
};

const NoMoviesResult = () => {
    return (
        <p>Hola</p>
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