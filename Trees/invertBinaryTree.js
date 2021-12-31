//Invert Binary Tree:

//Steps for recursive approach (DFS style traversal)
//O(n) Time & O(d) where d is the depth of the tree.

function invertBinaryTree(tree) {
  //Define base case, if tree is null, return.
  if (!tree) return;

  //Swap children nodes (use helper function)
  swapChildren(tree);
  //Call function recursively passing in child node X2 (left & right)
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

const swapChildren = (tree) => {
  const tmp = tree.left;
  tree.left = tree.right;
  tree.right = tmp;
};
