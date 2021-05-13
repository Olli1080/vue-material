import MdDialog from './MdDialog.vue'
import MdDialogTitle from './MdDialogTitle.vue'
import MdDialogContent from './MdDialogContent.vue'
import MdDialogActions from './MdDialogActions.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component(MdDialog.name, MdDialog)
  Vue.component(MdDialogTitle.name, MdDialogTitle)
  Vue.component(MdDialogContent.name, MdDialogContent)
  Vue.component(MdDialogActions.name, MdDialogActions)
}