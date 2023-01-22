import { Queue } from "./Queue.mjs";

const queue = new Queue();

console.log("===== enqueue =====");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());

console.log("===== dequeue =====");
console.log(`is empty? ${queue.isEmpty()}`);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`is empty? ${queue.isEmpty()}`);
