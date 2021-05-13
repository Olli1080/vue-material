import MdSpeedDial from './MdSpeedDial.vue'
import MdSpeedDialTarget from './MdSpeedDialTarget.vue'
import MdSpeedDialContent from './MdSpeedDialContent.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdSpeedDial.name, MdSpeedDial)
  Vue.component(MdSpeedDialTarget.name, MdSpeedDialTarget)
  Vue.component(MdSpeedDialContent.name, MdSpeedDialContent)
}