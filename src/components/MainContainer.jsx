import { defineComponent, computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'
import VideoTitle from './VideoTitle'
import VideoDescription from './VideoDescription'
import useMovieTrailer from '../composables/useMovieTrailer'

export default defineComponent({
  setup() {
    const movieStore = useMovieStore()
    const movies = movieStore.nowPlayingMovies
    if (!movieStore.hasNowPlayingMovies) return

    const mainMovie = movies[0]
    const { title, overview, id } = mainMovie
    useMovieTrailer(id)

    const isTrailerVideo = computed(() => movieStore.hasTrailerVideo)

    return () =>
      movieStore && (
        <div>
          <VideoTitle title={title} overview={overview} />
          {isTrailerVideo.value ? <VideoDescription /> : <div>Loading Main Container...</div>}
        </div>
      )
  }
})
