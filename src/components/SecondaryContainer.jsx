import { defineComponent } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import MovieList from './MovieList'

export default defineComponent({
  setup() {
    const movies = useMovieStore()
    return () =>
      movies && (
        <div className="bg-black">
          <div className="-mt-32 relative z-20">
            <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
            <MovieList title={'Popular'} movies={movies.popularMovies} />
            <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
            <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
          </div>
        </div>
      )
  }
})
