import { defineComponent } from 'vue'
import MdRipple from 'components/MdRipple/MdRipple.vue'

export default defineComponent({
  components: {
    MdRipple
  },
  props: {
    mdRipple: {
      type: Boolean,
      default: true
    }
  }
})
