import { OPTIONS, SEARCH_MOVIE } from '../utilis/constant'
import { useGPTStore } from '@/stores/gptStore'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const searchText = ref(null)
    const gptStore = useGPTStore()

    //Search movie from TMDB

    const searchMovie = async (movie) => {
      const url = SEARCH_MOVIE.replace('movie_name', movie)
      const data = await fetch(url, OPTIONS)
      const json = await data.json()
      return json?.results
    }

    const handleSearchClick = async () => {
      /*   const searchQuery =
        'Act as a Movie Recommendation system and suggest some movies for the query' +
        searchText.value.current.value +
        ' . only give me details of 5 movies'
     
            Calling Chat GPT API
            const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchQuery }],
            model: 'gpt-3.5-turbo',
          });
          if(!chatCompletion.choices){
            const dummyResult = "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan";
          } 
            const movies = chatCompletion.choices[0]?.message?.content.split(",");  
          */

      const movies = [
        'Andaz Apna Apna',
        'Hera Pheri',
        'Chupke Chupke',
        'Jaane Bhi Do Yaaro',
        'Padosan'
      ]
      const promiseArray = movies.map((movie) => searchMovie(movie))
      const result = await Promise.all(promiseArray)
      gptStore.addGPTSearchedMovies({ moviesName: movies, moviesResult: result })
    }

    return () => (
      <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
          <input type="text" ref={searchText} className="p-4 m-4 col-span-9" placeholder="Search" />
          <button
            className="bg-red-700 m-4 text-white rounded-lg col-span-3"
            onClick={handleSearchClick}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
})
