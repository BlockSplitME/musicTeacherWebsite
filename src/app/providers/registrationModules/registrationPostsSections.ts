import sectionRouteParent from "@/pages/postSection/router";
import postRoute from "@/widgets/postCard/router"

import router from "@/app/providers/router"
import { RouteRecordName, RouteRecordRaw } from "vue-router";

import { getSections, SectionHomePageType, PostType } from "@/content/sections";

import { useNavigationMenuStore } from "@/widgets/navbar/store";
import { usePostsRoutesStore } from "@/widgets/postCard/store";


const registrationPostSection = (name: string, title: string, homePage: SectionHomePageType,  posts: PostType[]) => {
    const sectionRoute = { name: name, path: name, component: homePage.context, meta: {title: title}} as RouteRecordRaw
    router.addRoute(sectionRouteParent.name, sectionRoute)
    sectionRoute.path = sectionRouteParent.path + '/' + sectionRoute.path

    const postParentComponentName = sectionRoute.name as string + "Post"
    // router.addRoute(sectionRoute.name!, {...postRoute, name: postParentComponentName} as RouteRecordRaw)
    router.addRoute(sectionRouteParent.name, {path: name + '/' + postRoute.path, component: postRoute.component, name: postParentComponentName} as RouteRecordRaw)
    useNavigationMenuStore().addLink(sectionRoute, sectionRouteParent.name);
    
    posts?.forEach(post => {
        registrationPostToRoute(sectionRoute.name!, post, postParentComponentName)
    })
};

const registrationPostToRoute = (routeName: RouteRecordName, post: PostType, postParentComponentName: string) => {
    const postLinkName = routeName.toString() + "_" + post.name;
    const postLinkPath = post.name;
    router.addRoute(postParentComponentName, { name: postLinkName, path: postLinkPath, component: post.context})
    usePostsRoutesStore().addLink(routeName.toString(), postLinkName, postLinkPath)
}
export const registrationPostsSections = () => {
    getSections().forEach( (value, key) => {
        registrationPostSection(key, value.title, value.homePage, value.posts)
    })
}