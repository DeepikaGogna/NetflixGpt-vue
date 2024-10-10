import { defineComponent } from 'vue'
import MovieCard from './MovieCard'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    movies: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div className="p-4">
        <h1 className="text-2xl my-2 py-2 text-white">{props.title}</h1>
        <div className="flex overflow-x-scroll">
          <div className="flex">
            {props.movies
              ? props.movies.map((movie) => (
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))
              : ''}
          </div>
        </div>
      </div>
    )
  }
})
