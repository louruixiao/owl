import { faHeart, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { addIcon, Owl } from '@owl';
import '@owl/themes/styles/index.scss';
import { createApp } from 'vue';
import App from './App.vue';

addIcon(faHeartbeat, faHeart);

const main = createApp(App);
main.use(Owl);
main.mount('#app');
