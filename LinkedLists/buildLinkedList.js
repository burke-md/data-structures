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
  setHead(node) {}
  setTail(node) {}
  insertBefore(node, nodeToInsert) {}
  insertAfter(node, nodeToInsert) {}
  insertAt(node, index) {}
  remove(node) {}
  containsNodeWithValue(value) {}
}
