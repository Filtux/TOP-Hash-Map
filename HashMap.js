import { LinkedList } from "./linkedList.js";

class HashMap {

    constructor() {
        this.arraySize = 16;
        this.buckets = new Array(this.arraySize).fill(null);
        this.loadFactor = 0.75;
        this.size = 0;
      }
    
    hash(key) {
        let hashCode = 0; 
        const primeNumber = 17;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }
        return hashCode;
    }

    set(key, value) {
        const index = this.hash(key);
        if (!this.buckets[index]) {
            this.buckets[index] = new LinkedList();
        }
        this.buckets[index].add(key, value);
        this.size++;
        if (this.size / this.buckets.length > this.loadFactor) {
            this.resize(this.buckets.length * 2);
        }
    }

    resize(newCapacity) {
        const oldArray = this.buckets;
        this.arraySize = newCapacity;
        this.buckets = new Array(newCapacity).fill(null);
        this.size = 0;

        oldArray.forEach(bucket => {
            if (bucket) {
                let currentNode = buckets.headNode;
                while (currentNode != null) {
                    this.set(currentNode.key, currentNode.value);
                }
            }
        });
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (bucket) {
            return bucket.find(key);
        }
        return null;
    }

    has(key) {
        return this.get(key) !== null;
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = buckets[index];
        if (bucket) {
            const result = bucket.remove(key);
            if (result) {
                this.size--;
            }
            return result;
        }
        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = new Array(this.arraySize).fill(null);
        this.size = 0;
    }

    keys() {
        const keysArray = [];
        this.buckets.forEach(bucket => {
            if (bucket) {
                let currentNode = bucket.headNode;
                while (currentNode != null) {
                    keysArray.push(currentNode.key);
                    currentNode = currentNode.nextNode;
                }
            }
        });
        return keysArray;
    }

    values() {
        const valuesArray = [];
        this.buckets.forEach(bucket => {
            if (bucket) {
                let currentNode = bucket.headNode;
                while (currentNode != null) {
                    keysArray.push(currentNode.value);
                    currentNode = currentNode.nextNode;
                }
            }
        });
        return valuesArray;        
    }

    entries() {
        const entriesArray = [];
        this.bucket.forEach(bucket => {
          if (bucket) {
            let currentNode = bucket.headNode;
            while (currentNode !== null) {
              entriesArray.push([currentNode.key, currentNode.value]);
              currentNode = currentNode.nextNode;
            }
          }
        });
        return entriesArray;
      }
}

