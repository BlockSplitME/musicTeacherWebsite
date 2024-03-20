import { defineStore } from 'pinia'
import { LinkedList } from 'linked-list-ts';

import { findBaseName, findChildPath } from '@/shared/utils/parseUtils'
import postPathConfiguration from '@/pages/post/router'
import { PostType } from '../types';

export const usePostsRoutesStore = defineStore('postsRoutes', {
    state: () => ({
        postLinks: new Map<string, LinkedList<PostType>>(),
    }),
    actions: {
        addLink(directivName: string, name: string, path: string, title: string, subtitle?: string, cardImage?: string): void {
            let post: PostType = {name: name, path: path, sectionName: directivName, title: title, subtitle: subtitle, cardImage: cardImage}
            this.postLinks.has(directivName) 
                ? this.postLinks.get(directivName)!.append(post) 
                : this.postLinks.set(directivName, new LinkedList<PostType>(post))
        },
        getNextLink(directivName: string, currentLink?: PostType): PostType | undefined {
            directivName = this.checkDirectiveName(directivName)
            if(currentLink) {
                return this.postLinks.get(directivName)?.get(currentLink)?.next?.data
            } return this.postLinks.get(directivName)?.first?.data
        },
        getPrevLink(directivName: string, currentLink?: PostType): PostType | undefined {
            directivName = this.checkDirectiveName(directivName)
            if(currentLink) {
                return this.postLinks.get(directivName)?.get(currentLink)?.prev?.data
            } return this.postLinks.get(directivName)?.first?.data
        },
        checkDirectiveName(path: string) {
            return findChildPath(path, postPathConfiguration.path) as string
        },
        getCurrentPath(fullPath: string, nameItemLocalStorage: string) {
            let sectionName = this.checkDirectiveName(fullPath)
            
            let route = this.getCurrentPathLocalStorage(nameItemLocalStorage)
            const postPath: string | null = findBaseName(fullPath)

            if(postPath) return this.searchNodeByPath(postPath, sectionName);
            
            if(route) {
                let routeObj: PostType = JSON.parse(route)
                if(routeObj.sectionName == sectionName) return this.searchNodeByPath(routeObj.path, sectionName);
            } return this.getNextLink(fullPath)
        },
        
        searchNodeByPath(path: string, directivName: string) {
            let link: PostType = {name: '', path: '', sectionName: '', title: ''}
            this.postLinks.get(directivName)?.forEach((post) => {
                if (post.data.path == path) {
                    link = post.data;
                }
            })
            return link.name === '' ? undefined : link
        },

        getPostsFromSection(name: string) {
            return this.postLinks.get(name)
        },

        getCurrentPathLocalStorage(name: string){
            return localStorage.getItem(name)
        },
        saveCurrentPathLocalStorage(name: string, route: PostType) {
            localStorage.setItem(name, JSON.stringify(route))
        },
        deleteCurrentPathLocalStorage(name: string) {
            localStorage.removeItem(name)
        }
    },
})