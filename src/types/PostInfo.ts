export interface PostInfo {
    frontmatter: {
        cover: string,
        title: string,
        slug: string,
        date: string,
        tags: string[],
        repository: string,
    }
}