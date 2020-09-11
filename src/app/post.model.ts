export interface Post {
    id: number,
    title: string,
    content: string,
}

export interface PostList {
    count: number,
    next: string,
    previous: string,
    results: {
        id: number,
        title: string,
        content: string,
    }[]
}