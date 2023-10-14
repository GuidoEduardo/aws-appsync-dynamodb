export default interface RepositoryInterface<T> {
    create(options: object): Promise<T>

    get(id: string): Promise<T>

    find(search: object): Promise<T[]>
}
