// import withResults from '../mocks/with-result.json'
// import withoutResults from '../mocks/no-result.json'

const apiUrl= import.meta.env.VITE_API_MOVIES_KEY;

export const searchMovies = async({search}) => {



    try{
        // fetch(`https://www.omdbapi.com/?apikey=${apiUrl}&s=${search}`)
        // .then(res => res.json())
        // .then(json => {
        //     setResponseMovies(json)
        // })
        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiUrl}&s=${search}`)
        const json = await res.json()

        const movies = json.Search

        // Estos es bueno para no depende en todo el proyecto solo de la api
        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
          }))

    }
    catch(e) {
        throw new Error('Error en la búsqueda de películas. Por favor intente nuevamente.', e)
    }
}