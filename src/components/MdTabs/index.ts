import MdTabs from './MdTabs.vue'
import MdTab from './MdTab.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdTabs.name, MdTabs)
  Vue.component(MdTab.name, MdTab)
}