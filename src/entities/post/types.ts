export type CardPostType = {
    title: string,
    subtitle?: string,
    cardImage?: string
}

export type PostLinkType = {
    name: string,
    path: string,
    sectionName: string 
}

export type PostType = CardPostType & PostLinkType
