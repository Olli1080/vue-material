import MdBottomBar from './MdBottomBar.vue'
import MdBottomBarItem from './MdBottomBarItem.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdBottomBar.name, MdBottomBar)
  Vue.component(MdBottomBarItem.name, MdBottomBarItem)
}