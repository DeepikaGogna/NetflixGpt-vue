import { defineComponent, computed } from 'vue'
import useNowPlayingMovies from '../composables/useNowPlayingMovies'
import usePopularMovies from '../composables/usePopularMovies'
import useTopRatedMovies from '../composables/useTopRatedMovies'
import useUpComingMovies from '../composables/useUpComingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useMovieStore } from '@/stores/movieStore'
import { useGPTStore } from '@/stores/gptStore'
import GptSearch from './GptSearch'

export default defineComponent({
  setup() {
    const movieStore = useMovieStore()
    const gptStore = useGPTStore()
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpComingMovies()
    const isNowPlayingLoaded = computed(() => movieStore.hasNowPlayingMovies)

    return () => (
      <div>
        {gptStore.showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            {/* Conditionally render MainContainer only when nowPlayingMovies are loaded */}
            {isNowPlayingLoaded.value ? <MainContainer /> : <div>Loading Main Container...</div>}
            <SecondaryContainer />
          </>
        )}
      </div>
    )
  }
})
