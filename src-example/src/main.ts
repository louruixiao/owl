import { faHeart, faHeartbeat } from '@fortawesome/pro-solid-svg-icons';
import Owl, { addIcon } from '@owl/index';
import '@owl/themes/styles/index.scss';
import { createApp } from 'vue';
import App from './App.vue';

addIcon(faHeartbeat, faHeart);

const main = createApp(App);
main.use(Owl);
main.mount('#app');
