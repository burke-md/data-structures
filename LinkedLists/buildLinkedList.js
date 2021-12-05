class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return;
    }
    //Call insertBerfore here when code is complete.
  }
  setTail(node) {
    if (!this.tail) {
      this.setHead(node);
      return;
    }
    //Call insertAfter here when code is complete.
  }
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    
    if(node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }
  insertAfter(node, nodeToInsert) {}
  insertAt(node, index) {}
  remove(node) {}
  containsNodeWithValue(value) {}
}
