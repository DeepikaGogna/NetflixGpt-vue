import { onMounted } from 'vue'
import { OPTIONS, POPULAR_PLAYING } from '../utilis/constant'
import { useMovieStore } from '@/stores/movieStore'

const usePopularMovies = () => {
  const movieStore = useMovieStore()
  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_PLAYING, OPTIONS)
    const json = await data.json()
    movieStore.addPopularMovies(json.results)
  }

  onMounted(() => {
    !movieStore.haspopularMovies && getPopularMovies()
  })
}

export default usePopularMovies
