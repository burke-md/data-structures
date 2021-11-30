/*Invert Binary Tree:
Return a mirror image of the input
*/ 

//Steps for iterative approach (BFS style traversal)

//-Create queue. Initiate queue w/ root node.
//-Remove node from queue(dequeue).
//-Use helper function to swap child nodes.
//-Add child nodes to queue.
//-Continue until the queue is empty


//Steps for recursive approach (DFS style traversal)
//O(n) Time & O(d) where d is the depth of the tree.

//-Define base case, if tree is null, return.
//-Swap children nodes (use helper function)
//-Call function recursively passing in child node X2 (left & right)

function invertBinaryTree(tree) {
  if (!tree) return
	
	swapChildren(tree);
	invertBinaryTree(tree.left)
	invertBinaryTree(tree.right)
}

const swapChildren = (tree) => {
	const tmp = tree.left;
	tree.left = tree.right;
	tree.right = tmp
}

