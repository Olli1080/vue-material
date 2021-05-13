import MdSteppers from './MdSteppers.vue'
import MdStep from './MdStep.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdSteppers.name, MdSteppers)
  Vue.component(MdStep.name, MdStep)
}