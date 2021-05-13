import MdChips from './MdChips.vue'
import MdChip from './MdChip.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdChips.name, MdChips)
  Vue.component(MdChip.name, MdChip)
}