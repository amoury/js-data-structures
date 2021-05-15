/**
 * LinkedList - Nodes connected to each other. Doesn't have to be continuous. Each node has pointer to the next node.
 * Methods => push, pop, get index, delete, isEmpty
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;          // First node in the list
    this.tail = null;          // Last node in the list
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {               // No nodes in the list
      return null;
    } else if (this.length === 1) {     // 1 Node in the list
      const nodeToRemove = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } else {
      // while there are nodes in the list
          // if the next node in the list is the tail, update the tail pointer to point to the current node
          // set the new tail node to point to null
          // decrement the length of the list
          // return the previous tail element as removed
      let currentNode = this.head;
      const nodeToRemove = this.tail;
      let secondToLastNode;
      while (currentNode) {
        if (currentNode.next === this.tail) {
          secondToLastNode = currentNode;
          break;
        }
        currentNode = currentNode.next;
      }
      secondToLastNode.next = null;
      this.tail = secondToLastNode;
      this.length--;
      return nodeToRemove;
    }
  }

  get(index) {
    if (index < 0 || index > this.length || this.isEmpty()) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    let currentNode = this.head;
    let iterator = 0;
    while (iterator < index) {
      iterator++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}


// const newList = new LinkedList();

// newList.push('Ansar');
// newList.push('Memon');
// newList.push('is');
// newList.push('a');
// newList.push('ninja');

// newList.pop();

// console.log(newList.get(3));
