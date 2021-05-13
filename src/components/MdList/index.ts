import MdList from './MdList.vue'
import MdListItem from './MdListItem/MdListItem.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdList.name, MdList)
  Vue.component(MdListItem.name, MdListItem)
}