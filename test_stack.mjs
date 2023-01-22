import { Stack } from "./Stack.mjs";

const stack = new Stack();

console.log("===== push & pop =====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log("===== peak =====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.peak().data);
stack.pop();
console.log(stack.peak().data);
console.log(`is empty? ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(`is empty? ${stack.isEmpty()}`);
console.log(stack.pop());
