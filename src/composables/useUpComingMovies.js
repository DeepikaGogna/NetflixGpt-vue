import { onMounted } from 'vue'
import { OPTIONS, UPCOMING_MOVIE } from '../utilis/constant'
import { useMovieStore } from '@/stores/movieStore'

const useUpComingMovies = () => {
  const movieStore = useMovieStore()
  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIE, OPTIONS)
    const json = await data.json()
    movieStore.addUpcomingMovies(json.results)
  }

  onMounted(() => {
    !movieStore.hasUpcomingMovies && getUpcomingMovies()
  })
}

export default useUpComingMovies
