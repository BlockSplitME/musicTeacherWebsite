import { findChildPath, findParentPath, findBaseName } from '@/shared/utils/parseUtils'
import { titles } from './config'
export type SectionHomePageType = {
    name: string,
    context: NodeRequire
}

export type PostType = SectionHomePageType & {
    data?: Date
}

export type ContextType  = {
    title: string,
    homePage: SectionHomePageType,
    posts: PostType[]
}

// Add context
const contexts = [] as __WebpackModuleApi.RequireContext[]
contexts.push(require.context('./', true, /\.(vue|md)$/))

export function getSections(): Map<string, ContextType> {
    const returnContexts = new Map<string, ContextType>

    contexts.forEach(context => {
        context.keys().map(path => {
            const sectionName: string = findChildPath(path, '.')!
            const name: string = findBaseName(path)!
            const module: NodeRequire = context(path).default;

            if(!returnContexts.has(sectionName)) returnContexts.set(sectionName, new Object as ContextType)
            
            const linkSection = returnContexts.get(sectionName)
            if(isPost(path, name)) {
                if(!linkSection!.posts) linkSection!.posts = []
                linkSection!.posts.push({name: name, context: module } as PostType) 
            } else {
                linkSection!.homePage = {name: name, context: module } as SectionHomePageType
                titles.has(sectionName) ? linkSection!.title = titles.get(sectionName)! : console.log("Нет имени страницы");
            }
        })
    })
    return returnContexts
}

function isPost(path: string, name: string): boolean {
    return findParentPath(path, name) == 'posts' ? true : false  
}