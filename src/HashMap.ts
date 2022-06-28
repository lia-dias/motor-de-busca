export default class HashMap<T> {
    protected _keys: Array<string | number> = [];
    protected _storage: {[key: string | number]: T} = {};
    constructor(){};

    addKeyValue(key: string | number, value: T) {
        if( !this.hasKey(key) ){
            this._keys = this._keys.concat(key);
        }
        this._storage[key] = value;
    }

    getValue(key: string | number) {
        return this._storage[key];
    }

    getMap() {
        return this._keys.map((key) => {
            return { key, value: this._storage[key] }
        });
    }

    hasKey(key: string | number): boolean {
        return this._keys.some((storaged_key) => storaged_key === key );
    }
}