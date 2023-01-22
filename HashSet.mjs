import { HashTable } from "./HashTable.mjs";

export class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hashTable.arr[i].head;
      while (currentNode !== null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }

  clear() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  add(data) {
    if (this.hashTable.get(data) === null) {
      this.hashTable.set(data, -1);
    }
  }

  isContain(data) {
    return this.hashTable.get(data) !== null;
  }

  remove(data) {
    return this.hashTable.remove(data);
  }

  isEmpty() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      if (this.hashTable.arr[i].count > 0) {
        return false;
      }
    }
    return true;
  }
}
