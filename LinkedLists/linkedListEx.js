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

  removeDuplicate() {
    let allData = [];
    let node = this.head;
    while (node) {
      if (allData.includes(node.data)) {
        node.prev.next = node.next;
        console.log(`\nA duplicate has been removed -> ${node.data}`);
      } else {
        allData.push(node.data);
      }
      node = node.next;
    }
  }

  listAllNodes() {
    let node = this.head;
    console.log(`\nList the data of each node:`);
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
  insertAt(insertNode, index) {
    let indexTracker = 0;
    let node = this.head;
    while (indexTracker !== index) {
      indexTracker++;
      node = node.next;
      if (indexTracker === index) {
        node.prev.next = insertNode;
        insertNode.prev = node.prev;
        insertNode.next = node;
        node.prev = insertNode;
        console.log(`\n${insertNode.data} has been inserted at index ${index}`);
      }
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

let node1 = new Node(`Apples`);

let groceryList = new LinkedList(node1);

let node2 = new Node(`Baguette`);
node1.next = node2;
node2.prev = node1;

let node3 = new Node(`Beans`);
node2.next = node3;
node3.prev = node2;

let node4 = new Node(`Beans`);
node3.next = node4;
node4.prev = node3;

let node5 = new Node(`Milk`);
node4.next = node5;
node5.prev = node4;

let node6 = new Node(`Basil`);

groceryList.size();
groceryList.removeDuplicate();
groceryList.size();

groceryList.listAllNodes();
groceryList.insertAt(node6, 2);
groceryList.listAllNodes();
