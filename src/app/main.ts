import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// ** Components from Shared **
// import components from '@/shared';
// components.forEach((component: any): void => {
//     app.component(component.name, component);
// });

// ** Pinia **
import store from '@/app/providers/store';
app.use(store);

// ** Between store and router **

    // ** Pages **
    import HomePage from "@/pages/home";
    import PostSection from '@/pages/postSection';

    import { registrationPages } from "@/app/providers/registrationModules/registrationPages";
    registrationPages({
        home: HomePage,
        postSection: PostSection
    });

    // ** Posts Sections **
    import { registrationPostsSections } from "@/app/providers/registrationModules/registrationPostsSections";
    registrationPostsSections()

// **

// ** VueRouter **
import router from '@/app/providers/router';
app.use(router);

// ** Vuetify **
import vuetify from '@/app/plugins/vuetify';
app.use(vuetify);

app.mount('#app');
