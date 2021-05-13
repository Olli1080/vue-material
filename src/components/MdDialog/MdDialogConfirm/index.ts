import MdDialog from '../MdDialog.vue'
import MdDialogConfirm from './MdDialogConfirm.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogConfirm.name, MdDialogConfirm)
}