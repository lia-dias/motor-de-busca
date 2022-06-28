import HashMap from "./HashMap";

export default class HashList<T> {

    hashMap = new HashMap<Array<T>>();

    constructor() {}

    concatPair(key: string | number, value: T) {
        const storagedValue = this.hashMap.getValue(key);
        if( !storagedValue ) {
            this.hashMap.addKeyValue(key, [value]);
        } else {
            this.hashMap.addKeyValue(key, storagedValue.concat(value));
        }
    }

    getList(key: string | number): ReadonlyArray<T> {
        return this.hashMap.getValue(key);
    }
}