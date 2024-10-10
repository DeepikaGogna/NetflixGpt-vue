import { IMAGE_CDN_URL } from '../utilis/constant'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    posterPath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    return () => (
      <div className="w-40 pr-2">
        <img src={IMAGE_CDN_URL + props.posterPath} alt="" />
      </div>
    )
  }
})
