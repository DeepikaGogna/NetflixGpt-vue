import { useGPTStore } from '@/stores/gptStore'
import MovieList from './MovieList'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const gpt = useGPTStore()
    const { moviesResult, moviesName } = gpt
    if (!moviesName) return null
    return () => (
      <div className="bg-black text-white p-4 m-4 bg-opacity-70 mt-20">
        {moviesName.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={moviesResult[index]} />
        ))}
      </div>
    )
  }
})
