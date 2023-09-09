import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebookF, faTwitter, faInstagram);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// Register the FontAwesomeIcon component globally
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
