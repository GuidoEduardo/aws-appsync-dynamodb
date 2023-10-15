export {}

declare global {
    type SearchOptions<T> = {
        options: {
            offset: number
            limit: number
        }
        by: T
    }
}
