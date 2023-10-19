import { createApp } from "vue"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import ConfirmationService from "primevue/confirmationservice"
import ToastService from "primevue/toastservice"
import "./index.css"
import "primevue/resources/themes/md-light-indigo/theme.css"

import { library as faLib } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faCaretRight,
  faCaretDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons"
faLib.add(faCaretRight, faCaretDown, faTrashCan)

createApp(App)
  .use(PrimeVue)
  .use(ConfirmationService)
  .use(ToastService)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
