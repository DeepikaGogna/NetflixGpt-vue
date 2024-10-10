import { defineComponent, computed } from 'vue'
import { BK_IMG } from '../utilis/constant'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'
import { useGPTStore } from '@/stores/gptStore'

export default defineComponent({
  setup() {
    const gpt = useGPTStore()
    const isSearchedLoaded = computed(() => gpt.moviesResult.length > 0)
    return () => (
      <div>
        <div className="fixed -z-10">
          <img src={BK_IMG} alt="bg-Image" />
        </div>
        <GptSearchBar />
        {isSearchedLoaded.value ? <GptMovieSuggestion /> : <div>Loading Main Container...</div>}
      </div>
    )
  }
})
