export default class Resource<T> {
    constructor(readonly id: string | number, readonly valor: T){}
}