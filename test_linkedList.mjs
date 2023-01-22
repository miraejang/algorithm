import { LinkedList, Node } from "./LinkedList.mjs";

const node1 = new Node(0);
const node2 = new Node(1);
const node3 = new Node(2);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

const list = new LinkedList();
console.log("===== insertAt ======");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.insertAt(5, 5);
list.printAll();

console.log("===== insertLast ======");
list.insertLast(6);
list.printAll();

// console.log("===== clear ======");
// list.clear();
// list.printAll();

console.log("===== deleteAt ======");
list.deleteAt(2);
list.printAll();

console.log("===== deleteLast ======");
list.deleteLast();
list.printAll();

console.log("===== getNodeAt ======");
const secondNode = list.getNodeAt(2);
console.log(secondNode);
