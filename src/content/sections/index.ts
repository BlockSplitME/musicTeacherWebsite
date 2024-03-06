import { findChildPath, findParentPath, findBaseName } from '@/shared/utils/parseUtils'
import { titles, POSTS_ROOT_NAME } from './config'
import { CardPostType } from '@/entities/post/types';

export type SectionHomePageType = {
    name: string,
    context: NodeRequire
}

export type PostType = SectionHomePageType & {
    data?: Date
} & CardPostType

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
                let cardPost = require(truncateStringToWordExcluding(path ,findBaseName(path)!) + 'index.ts').default as CardPostType
                linkSection!.posts.push({name: findParentPath(path, name), context: module, ...cardPost } as PostType)
            } else {
                linkSection!.homePage = {name: name, context: module } as SectionHomePageType
                titles.has(sectionName) ? linkSection!.title = titles.get(sectionName)! : console.log("Нет имени страницы");
            }
        })
    })
    return returnContexts
}

function isPost(path: string, name: string): boolean {
    return findParentPath(path, findParentPath(path, name)!) == POSTS_ROOT_NAME ? true : false  
}

function truncateStringToWordExcluding(inputString: string, word: string): string {
    const index = inputString.indexOf(word);
    if (index !== -1) {
        return inputString.substring(0, index).trim();
    } else {
        return inputString;
    }
}