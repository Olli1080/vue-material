import MdTable from './MdTableContainer'
import MdTableToolbar from './MdTableToolbar.vue'
import MdTableEmptyState from './MdTableEmptyState.vue'
import MdTableRow from './MdTableRow.vue'
import MdTableHead from './MdTableHead.vue'
import MdTableCell from './MdTableCell.vue'
import MdTablePagination from './MdTablePagination.vue'

import { plugin } from 'vue-material/material'
import type { CreateAppFunction } from 'vue'

export default (Vue: ReturnType<CreateAppFunction<Element>>) => {
  Vue.use(plugin);
  Vue.component('MdTable', MdTable)
  Vue.component(MdTableToolbar.name, MdTableToolbar)
  Vue.component(MdTableEmptyState.name, MdTableEmptyState)
  Vue.component(MdTableRow.name, MdTableRow)
  Vue.component(MdTableHead.name, MdTableHead)
  Vue.component(MdTableCell.name, MdTableCell)
  Vue.component(MdTablePagination.name, MdTablePagination)
}