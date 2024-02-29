function getMatch(regExp: RegExp, string: string) {
    const match = string.match(regExp);
    return match ? match[1] : null;
}

export function findChildPath(fullPath: string, parent: string) {
    return getMatch(new RegExp(parent + '\/([^\/\. ]+)'), fullPath)
}

export function findParentPath(fullPath: string, child: string) {
    return getMatch(new RegExp('([^\/\. ]+)\/' + child), fullPath)
}

export function findBaseName(fullPath: string) {
    return getMatch(new RegExp(/\/([^/]+)\.[^.]+$/), fullPath)
}