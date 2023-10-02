import { createApp } from 'vue'
import './styles/main.scss'
import App from './App.vue'
import VueDragscroll from "vue-dragscroll";

createApp(App).use(VueDragscroll).mount('#app')
