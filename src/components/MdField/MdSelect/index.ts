import MdSelect from './MdSelect.vue'
import MdOption from './MdOption.vue'
import MdOptgroup from './MdOptgroup.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdSelect.name, MdSelect)
  Vue.component(MdOption.name, MdOption)
  Vue.component(MdOptgroup.name, MdOptgroup)
}