import { defineStore } from 'pinia'
import { RouteRecordName, RouteRecordRaw } from 'vue-router';

type LinkType = {
    level: number,
    link: RouteRecordRaw,
    childrens?: Map<string, LinkType> 
}
type ViewLinkType = Omit<LinkType, 'childrens'> & {
    name: string,
    isActiv: boolean
}

export const useNavigationMenuStore = defineStore('navigationMenu', {
    state: () => ({
        links: new Map<string, LinkType>,
        viewLinks: [] as ViewLinkType[]
    }),
    actions: {
        addLink(route: RouteRecordRaw, parentName?: RouteRecordName): void {
            let link = {level: 1, link: route} as LinkType
            if(parentName) {
                const parent = this.findLinkParent(parentName)
                link.level = parent.level + 1
                if(!parent.childrens) parent.childrens = new Map<string, LinkType>
                parent.childrens.has(route.name as string) ? console.log("Уже есть путь" + route) : parent.childrens.set(route.name as string, link)
            } else {
                this.links.has(route.name as string) ? console.log("Уже есть путь" + route) : this.links.set(route.name as string, link)
            }
            
        },
        findLinkParent(parentName: RouteRecordName) {
            return this.__deepSearch(parentName as string, this.links)
        },
        __deepSearch(parentName: string, linkLevel: Map<string, LinkType>): LinkType {
            let parent = new Object as LinkType
            if(linkLevel.has(parentName)) return linkLevel.get(parentName)!
            else {
                linkLevel.forEach( link => {
                    if(link.childrens) parent = this.__deepSearch(parentName, link.childrens)
                })
                
            }
            return parent
        },
        updateLinks() {
            this.viewLinks = []
            this.__deepUpdateLinks(this.links)
        },
        __deepUpdateLinks(linkLevel: Map<string, LinkType>) {
            linkLevel.forEach((value, key) => {
                this.viewLinks.push({name: key, link: value.link, level: value.level, isActiv: value.childrens ? false : true})
                if(value.childrens) this.__deepUpdateLinks(value.childrens)
            })
        }
    },
})


