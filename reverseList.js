class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    console.log(`\nThis linked list has ${count} nodes.`);
    return count;
  }

  listAllNodes() {
    let node = this.head;
    console.log(`\nList the data of each node:`);
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  reverseList() {
    let leftPointer = null;
    let centerPointer = this.head;
    let rightPointer;
    while (centerPointer !== null) {
      rightPointer = centerPointer.next;
      centerPointer.next = leftPointer;
      leftPointer = centerPointer;
      centerPointer = rightPointer;
    }

    this.head = leftPointer;

    return leftPointer;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node(`Apples`);

let groceryList = new LinkedList(node1);

let node2 = new Node(`Baguette`);
node1.next = node2;

let node3 = new Node(`Beans`);
node2.next = node3;

let node4 = new Node(`Milk`);
node3.next = node4;

let node5 = new Node(`Basil`);
node4.next = node5;

groceryList.listAllNodes();
groceryList.reverseList();
groceryList.listAllNodes();
