export type CardPostType = {
    title: string,
    subtitle?: string,
    cardImage?: string
}

export type SectionContextType = {
    name: string,
    context: NodeRequire
}

export type PostContextType = SectionContextType & CardPostType

export type ContextType  = {
    title: string,
    homePage: SectionContextType,
    posts: PostContextType[]
}