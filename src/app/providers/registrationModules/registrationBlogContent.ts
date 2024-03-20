import setionPageRoute from "@/pages/section/router";
import postPageRoute from "@/pages/post/router"
import blogPageRoute from "@/pages/blog/router"

import router from "@/app/providers/router"
import { getRouteByName } from "@/app/providers/router";

import { RouteRecordName, RouteRecordRaw } from "vue-router";

import { getSectionsContext} from "@/content/sections";
import { SectionContextType, PostContextType } from "@/content/sections/types";

import { useNavigationMenuStore } from "@/widgets/navbar/store";
import { usePostsRoutesStore } from "@/entities/post/store";

export const registrationPostsSections = () => {
    getSectionsContext().forEach( (value, key) => {
        registrationPostSection(key, value.title, value.homePage, value.posts)
    })
}

const registrationPostSection = (name: string, title: string, homePage: SectionContextType,  posts: PostContextType[]) => {
    router.addRoute(setionPageRoute.name, {name: name, path: name, component: homePage.context, meta: {title: title}} as RouteRecordRaw)
    useNavigationMenuStore().addLink(getRouteByName(name) as RouteRecordRaw, blogPageRoute.name);

    posts?.forEach(post => {
        registrationPostToRoute(name, post, title)
    })
};

const registrationPostToRoute = (parentRouteName: RouteRecordName, post: PostContextType, title: string) => {
    const postLinkName = parentRouteName.toString() + "_" + post.name;
    const postLinkPath = parentRouteName.toString() + "/" + post.name;
    router.addRoute(postPageRoute.name, { name: postLinkName, path: postLinkPath, component: post.context, meta: {title: title}})
    usePostsRoutesStore().addLink(parentRouteName.toString(), postLinkName, post.name, post.title, post.subtitle, post.cardImage)
}
