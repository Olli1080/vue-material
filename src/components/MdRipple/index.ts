import MdRipple from './MdRipple.vue'
import MdWave from './MdWave.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdRipple.name, MdRipple)
  Vue.component(MdWave.name, MdWave)
}