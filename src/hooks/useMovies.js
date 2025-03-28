import { useCallback, useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies";

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  //useMemo
  // const getMovies = useMemo( () => {
  //     return async ({search}) => {
  //         if(search === previousSearch.current) return

  //         try {
  //             setLoading(true)
  //             setError(null)
  //             previousSearch.current = search
  //             const response = await searchMovies({search})
  //             setMovies(response)
  //         }
  //         catch(e) {
  //             setError('Error en la búsqueda de películas. Por favor intente nuevamente.', e)
  //             setError(e.message)
  //         }
  //         finally {
  //             setLoading(false)
  //         }
  //     }

  // } , [search])

  const getMovies = useCallback(
    async ({search}) => {
      if (search === previousSearch.current) return;

      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const response = await searchMovies({ search });
        setMovies(response);
      } catch (e) {
        setError(
          "Error en la búsqueda de películas. Por favor intente nuevamente.",
          e
        );
        setError(e.message);
      } finally {
        setLoading(false);
      }
    },[search]);

    
  //Use Memo para no ejecutarlo cada rato
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, sortedMovies };
};
