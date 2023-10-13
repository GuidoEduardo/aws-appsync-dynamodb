export default interface RepositoryInterface<T> {
    create(options: object): Promise<T>
}