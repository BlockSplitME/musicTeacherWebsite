import router from "@/app/providers/router"
import { useNavigationMenuStore } from '@/widgets/navbar/store'
import { RouteRecordRaw } from "vue-router";

type PageType = {
  module: any,
  childrens?: PageType[]
}

const registrationPage = (page: PageType) => {
  const moduleRoute = page.module.route as RouteRecordRaw | undefined
  if(moduleRoute) {
    router.addRoute(moduleRoute);
    useNavigationMenuStore().addLink(moduleRoute);
    
    if(page.childrens) registrationPageChildrens(moduleRoute, page.childrens)
  }
};

const registrationPageChildrens = (moduleRouteParent: RouteRecordRaw, childrens: PageType[]) => {
  childrens.forEach( childPage => {
    const moduleRouteChild = childPage.module.route as RouteRecordRaw | undefined
    if(moduleRouteChild) {
      router.addRoute(moduleRouteParent.name!, childPage.module.route)
    
      if(childPage.childrens) registrationPageChildrens(moduleRouteChild!, childPage.childrens)
    }
  })
}

export const registrationPages = (modules: any ) =>  {
  Object.keys(modules).forEach( moduleKey => {
    const page = modules[moduleKey] as PageType;
    registrationPage(page);
  });
};