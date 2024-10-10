import { onMounted } from 'vue'
import { OPTIONS, NOW_PLAYING } from '../utilis/constant'
import { useMovieStore } from '@/stores/movieStore'

const useNowPlayingMovies = () => {
  // Access the movie store
  const movieStore = useMovieStore()

  const nowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING, OPTIONS)
    const json = await data.json()
    movieStore.addNowPlayingMovies(json.results)
  }

  onMounted(() => {
    !movieStore.hasNowPlayingMovies && nowPlayingMovies()
  })
}

export default useNowPlayingMovies
