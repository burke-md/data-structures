var Graph = require("./Graph");
var Queue = require("./Queue");

var checkRoute = function (val1, val2, graph) {
  let q1 = new Queue();
  let q2 = new Queue();
  //We could impliment a 'visited' list here...
  for (const edge in graph.findEdges(val1)) {
    q1.enqueue(edge);
  }
  for (const edge in graph.findEdges(val2)) {
    q2.enqueue(edge);
  }

  let current1;
  let current2;

  while (!q1.isEmpty() || !q2.isEmpty()) {
    if (!q1.isEmpty()) {
      current1 = q1.dequeue();
      if (current1 === val2) {
        return true;
      }

      for (const edge in graph.findEdges(current1)) {
        q1.add(edge);
      }
    }

    if (!q2.isEmpty()) {
      current2 = q2.dequeue();
      if (current2 === val1) {
        return true;
      }

      for (const edge in graph.findEdges(current2)) {
        q2.add(edge);
      }
    }
  }

  return false;
};

var graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

//Uncomment below to test traversing multiple nodes
// graph.addEdge('C', 'E');

graph.addEdge("D", "E");

console.log(checkRoute("A", "C", graph), true);
console.log(checkRoute("A", "E", graph), false);
console.log(checkRoute("B", "A", graph), true);
console.log(checkRoute("D", "E", graph), true);
