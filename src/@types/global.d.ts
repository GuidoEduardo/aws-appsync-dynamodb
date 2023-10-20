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

    interface CustomLogger {
        log(message: string): void

        debug(message: string): void
    
        warn(message: string): void
    
        error(message: string): void
    }

    interface RepositoryInterface<T> {
        create(options: object): Promise<T>
    
        get(id: string): Promise<T>
    
        find(search: object): Promise<T[]>
    }
}
