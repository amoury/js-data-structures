/**
 * STACKS - LIFO
 * Primary Methods => Pop, push, peek, isEmpty and length
 */

class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}