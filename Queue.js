/**
 * Queue - FIFO (first in, first out)
 * Methods - enqueue, dequeue, length, isEmpty, peek
 */

class Queue {
  constructor() {
    this.queue = [];
  }

  get length() {
    return this.queue.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(item) {
    this.queue.push(item)
  }

  dequeue() {
    this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}