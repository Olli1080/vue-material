import MdAutocomplete from './MdAutocomplete.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdAutocomplete.name, MdAutocomplete)
}