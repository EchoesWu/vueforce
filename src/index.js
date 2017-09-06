
import Page from '../components/Page/index.js'
import PageHeader from '../components/PageHeader/index.js'
import Form from '../components/Form/index.js'
import FormElement from '../components/FormElement/index.js'
import Panel from '../components/Panel/index.js'
import PanelSection from '../components/PanelSection/index.js'
import DatePicker from '../components/DatePicker/index.js'
import Icon from '../components/Icon/index.js'
import DockedFooter from '../components/DockedFooter/index.js'
import Button from '../components/Button/index.js'
import Loading from '../components/Loading/index.js'
import Table from '../components/Table/index.js'
import TableColumn from '../components/TableColumn/index.js'
import Alert from '../components/Alert/index.js'

import store from './store'

const components = [
  Page,
  PageHeader,
  Form,
  FormElement,
  Panel,
  PanelSection,
  DatePicker,
  Icon,
  DockedFooter,
  Button,
  Loading,
  Table,
  TableColumn,
  Alert
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  /* Auto install */
  install(window.Vue)
  /* Loading off */
  window.store = store
}

export default install
