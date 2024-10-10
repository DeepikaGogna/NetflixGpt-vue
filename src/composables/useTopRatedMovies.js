import { onMounted } from 'vue'
import { OPTIONS, TOP_RATED } from '../utilis/constant'
import { useMovieStore } from '@/stores/movieStore'

const useTopRatedMovies = () => {
  const movieStore = useMovieStore()

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED, OPTIONS)
    const json = await data.json()
    movieStore.addTopRatedMovies(json.results)
  }

  onMounted(() => {
    !movieStore.hastopRatedMovies && getTopRatedMovies()
  })
}

export default useTopRatedMovies
