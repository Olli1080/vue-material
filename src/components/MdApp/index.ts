import MdApp from './MdApp.vue'
import MdAppToolbar from './MdAppToolbar.vue'
import MdAppContent from './MdAppContent.vue'
import MdAppDrawer from './MdAppDrawer.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdApp.name, MdApp)
  Vue.component(MdAppToolbar.name, MdAppToolbar)
  Vue.component(MdAppContent.name, MdAppContent)
  Vue.component(MdAppDrawer.name, MdAppDrawer)
}