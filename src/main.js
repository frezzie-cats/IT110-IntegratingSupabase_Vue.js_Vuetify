import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify'; 
import { loadFonts } from './plugins/webfontloader'; 

loadFonts();

createApp(App)
  .use(router) // Add the router here
  .use(vuetify)
  .mount('#app');
