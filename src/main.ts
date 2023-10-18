import { createApp } from "vue"
import App from "./App.vue"
import PrimeVue from "primevue/config"
import ToastService from "primevue/toastservice"
import "./index.css"
import "primevue/resources/themes/md-light-indigo/theme.css"

/* import the fontawesome */
import { library as faLib } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import {
  faCaretRight,
  faCaretDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons"

/* add icons to fontawesome library */
faLib.add(faCaretRight, faCaretDown, faTrashCan)

createApp(App)
  .use(PrimeVue)
  .use(ToastService)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
