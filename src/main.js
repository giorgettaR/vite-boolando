import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import { faUser, faHeart, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faFacebook, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faHeart, faShoppingBag, faXTwitter, faFacebook, faInstagram, faPinterest, faYoutube)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
