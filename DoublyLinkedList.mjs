export class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    for (let i = 0; i < this.count; i++) {
      text += i === this.count - 1 ? currentNode.data : `${currentNode.data}, `;
      currentNode = currentNode.next;
    }
    text += "]";

    console.log(text);
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 벗어났습니다.");
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.prev = currentNode;
      newNode.next = currentNode.next;
      newNode.next.prev = newNode;
      currentNode.next = newNode;
    }
    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index > this.count || index < 0) {
      throw new Error("데이터가 존재하지 않아 삭제할 수 없습니다.");
    }

    if (index === 0) {
      const deleteNode = this.head;
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      this.count--;
      return deleteNode;
    } else if (index === this.count - 1) {
      const deleteNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.count--;
      return deleteNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count--;
      return deleteNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 벗어났습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}
