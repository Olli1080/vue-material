import { plugin } from 'vue-material/material'
import MdIcon from './MdIcon.vue'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdIcon.name, MdIcon)
}