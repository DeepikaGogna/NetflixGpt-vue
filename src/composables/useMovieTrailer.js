import { onMounted } from 'vue'
import { OPTIONS, MOVIE_VIDEO } from '../utilis/constant'
import { useMovieStore } from '@/stores/movieStore'

const useMovieTrailer = (movieId) => {
  const movieStore = useMovieStore()
  const url = MOVIE_VIDEO.replace('movieId', movieId)
  const getMovieVideo = async () => {
    const data = await fetch(url, OPTIONS)
    const json = await data.json()
    const filterData = json.results.filter((video) => video.type === 'Trailer')
    const trailer = filterData.length ? filterData[0] : json.results[0]
    movieStore.addTrailerVideo(trailer)
  }

  onMounted(() => {
    !movieStore.hasTrailerVideo && getMovieVideo()
  })
}

export default useMovieTrailer
