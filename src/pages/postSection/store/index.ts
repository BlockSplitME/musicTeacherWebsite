import { defineStore } from 'pinia'
import { LinkedList } from 'linked-list-ts';
import { findChildPath, findParentPath } from '@/shared/utils/parseUtils'

export type PostLinkType = {
    name: string,
    path: string,
    parentName: string
};

export const usePostsRoutesStore = defineStore('postsRoutes', {
    state: () => ({
        postLinks: new Map<string, LinkedList<PostLinkType>>(),
    }),
    actions: {
        addLink(directivName: string, name: string, path: string): void {
            let post: PostLinkType = {name: name, path: path, parentName: directivName}
            this.postLinks.has(directivName) 
                ? this.postLinks.get(directivName)!.append(post) 
                : this.postLinks.set(directivName, new LinkedList<PostLinkType>(post))
        },
        getNextLink(directivName: string, currentLink?: PostLinkType): PostLinkType | undefined {
            directivName = this.checkDirectiveName(directivName)
            if(currentLink) {
                return this.postLinks.get(directivName)?.get(currentLink)?.next?.data
            } return this.postLinks.get(directivName)?.first?.data
        },
        getPrevLink(directivName: string, currentLink?: PostLinkType): PostLinkType | undefined {
            directivName = this.checkDirectiveName(directivName)
            if(currentLink) {
                return this.postLinks.get(directivName)?.get(currentLink)?.prev?.data
            } return this.postLinks.get(directivName)?.first?.data
        },
        checkDirectiveName(path: string) {
            return findParentPath(path, 'post') as string
        },
        
        getCurrentPath(fullPath: string, nameItemLocalStorage: string) {
            let parentName = this.checkDirectiveName(fullPath)
            
            let route = this.getCurrentPathLocalStorage(nameItemLocalStorage)
            const postPath: string | null = findChildPath(fullPath, 'post')
            if(postPath) return this.searchNodeByPath(postPath, parentName);
            
            if(route) {
                let routeObj: PostLinkType = JSON.parse(route)
                if(routeObj.parentName == parentName) return this.searchNodeByPath(routeObj.path, parentName);
            } return this.getNextLink(fullPath)
        },
        
        searchNodeByPath(path: string, directivName: string) {
            let link: PostLinkType = {name: '', path: '', parentName: ''}
            this.postLinks.get(directivName)?.forEach((post) => {
                if (post.data.path == path) {
                    link = post.data;
                }
            })
            return link.name === '' ? undefined : link
        },

        getCurrentPathLocalStorage(name: string){
            return localStorage.getItem(name)
        },
        saveCurrentPathLocalStorage(name: string, route: PostLinkType) {
            localStorage.setItem(name, JSON.stringify(route))
        },
        deleteCurrentPathLocalStorage(name: string) {
            localStorage.removeItem(name)
        }
    },
    getters: {
        
    }
})