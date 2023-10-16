export { }

declare global {
    type OptionalProperties<T> = {
        [K in keyof T]?: T[K]
    }

    type SearchOptions<T> = {
        options?: {
            offset?: number
            limit?: number
        }
        by: OptionalProperties<T>
    }
}
