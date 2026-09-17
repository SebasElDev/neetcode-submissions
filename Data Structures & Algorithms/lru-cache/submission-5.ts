class LRUCache {
    capacity: number;
    cache: Map<number, number>;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, number>();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.cache.has(key)) {
            const v = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, v);
            return v;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
            this.cache.set(key, value)
            return;
        }

        if (this.cache.size === this.capacity) {
            const lastKey = this.cache.keys().next().value;
            this.cache.delete(lastKey);
        }

        this.cache.set(key, value);
    }
}
