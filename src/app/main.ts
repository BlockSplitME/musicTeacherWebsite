import { createApp } from 'vue';
import App from './App.vue';
import '@/app/styles/index.scss'

const app = createApp(App);

// ** Icons from Shared **
import icons from '@/shared/assets/';
const iconsObject = icons as any
Object.keys(iconsObject).forEach( name => {
    app.component(name, iconsObject[name]);
});

// ** Pinia **
import store from '@/app/providers/store';
app.use(store);

// ** Between store and router **

    // ** Pages **
    import HomePage from "@/pages/home";
    import BlogPage from '@/pages/blog';
    import SectionPage from '@/pages/section/';
    import PostPage from '@/pages/post'

    import { registrationPages } from "@/app/providers/registrationModules/registrationPages";
    registrationPages({
        home: {
            module: HomePage
        },
        blog: {
            module: BlogPage,
            childrens: [
                {
                    module: SectionPage, 
                },
                {
                    module: PostPage
                }
            ]
        }
    });

    // ** Posts Sections **
    import { registrationPostsSections } from "@/app/providers/registrationModules/registrationBlogContent";
    registrationPostsSections()

// **

// ** VueRouter **
import router from '@/app/providers/router';
app.use(router);

// ** Vuetify **
import vuetify from '@/app/plugins/vuetify';
app.use(vuetify);

app.mount('#app');
