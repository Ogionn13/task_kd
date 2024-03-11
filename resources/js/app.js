import './bootstrap';
import {createApp} from 'vue';
import Router from "@/router/router.js";
import Index from "@/components/Index.vue";


const app = createApp({});

app.use(Router);
app.component('Index', Index);
app.mount('#app');
