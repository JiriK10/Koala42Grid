import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"

/* import the fontawesome */
import { library as faLib } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons"

/* add icons to fontawesome library */
faLib.add(faCaretRight, faCaretDown)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app")
