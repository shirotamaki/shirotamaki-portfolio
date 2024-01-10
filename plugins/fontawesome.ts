import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// eslint-disable-next-line no-undef
export default defineNuxtPlugin((nuxtApp) => {
  config.autoAddCss = false
  library.add(fas, fab)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
