import HashMap from "./HashMap";

export default class HashCount{
    hashMap = new HashMap<number>();
    constructor(){};

    addKeyCount(key: string | number, value: number = 1) {
        const storagedValue = this.hashMap.getValue(key);
        if( !storagedValue ) {
            this.hashMap.addKeyValue(key, value);
        } else {
            this.hashMap.addKeyValue(key, value + storagedValue);
        }
    }

    getKeysCount(): Array<{ key: string | number, count: number }> {
        return this.hashMap.getMap().map((map) => ({ key: map.key, count: map.value }));
    }

    getAscendingKeysCount(): ReadonlyArray<{ key: string | number, count: number }> {
        return this.getKeysCount().sort((a, b) => a.count - b.count);
    }

    getDescendingKeysCount(): ReadonlyArray<{ key: string | number, count: number }> {
        return this.getKeysCount().sort((a, b) => b.count - a.count);
    }
}