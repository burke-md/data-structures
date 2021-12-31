const newStackItem = (stack, node) => {
  //Establish stack head
  if(!stack.head){
    stack.head = node;
    stack.min = node.data
  } else {
    //Stacks head already exists -> bump head, reassign and fix stack.min
    let temp = stack.head
    stack.head = node
    node.next = temp

    if(node.data <= temp.data){
      stack.min = node.data
    }
  }    
}



class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.min = null
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

////////////////////////////////////
///Create a stack that tracks min///
////////////////////////////////////

let specialStack = new LinkedList();


let node1 = new Node(5);
newStackItem(specialStack, node1);
specialStack.listAllNodes();
console.log(`Stack Min: ${specialStack.min}`);


let node2 = new Node(6);
newStackItem(specialStack, node2);
specialStack.listAllNodes();
console.log(`Stack Min: ${specialStack.min}`);


let node3 = new Node(4);
newStackItem(specialStack, node3);
specialStack.listAllNodes();
console.log(`Stack Min: ${specialStack.min}`);


let node4 = new Node(10);
newStackItem(specialStack, node4);
specialStack.listAllNodes();
console.log(`Stack Min: ${specialStack.min}`);


let node5 = new Node(4);
newStackItem(specialStack, node5);
specialStack.listAllNodes();
console.log(`Stack Min: ${specialStack.min}`);
















