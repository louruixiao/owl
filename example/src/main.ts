import { createApp } from 'vue';
import { Owl } from '@yiird/owl';
import App from './App.vue';
const main = createApp(App);
main.use(Owl);
main.mount('#app');
