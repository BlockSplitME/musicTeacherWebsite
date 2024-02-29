import router from "@/app/providers/router"
import { useNavigationMenuStore } from '@/widgets/navbar/store'
import { RouteRecordName, RouteRecordRaw } from "vue-router";

const registrationPage = (module: any) => {
  const moduleRoute = module.route as RouteRecordRaw | undefined
  if(moduleRoute) {
    router.addRoute(moduleRoute);
    useNavigationMenuStore().addLink(moduleRoute);
  }
};

export const registrationPages = (modules: any) =>  {
  Object.keys(modules).forEach(moduleKey => {
    const module = modules[moduleKey];
    registrationPage(module);
  });
};