import { defineComponent } from 'vue'
import { useMovieStore } from '@/stores/movieStore'

export default defineComponent({
  setup() {
    const movieStore = useMovieStore()
    const trailerVideo = movieStore.trailerVideo
    const trailerKey = trailerVideo?.key
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`
    return () => (
      <div>
        <iframe
          className="w-screen aspect-video"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    )
  }
})
