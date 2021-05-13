import MdMenu from './MdMenu.vue'
import MdMenuContent from './MdMenuContent.vue'
import MdMenuItem from './MdMenuItem.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdMenu.name, MdMenu)
  Vue.component(MdMenuContent.name, MdMenuContent)
  Vue.component(MdMenuItem.name, MdMenuItem)
}