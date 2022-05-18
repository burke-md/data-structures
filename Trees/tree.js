class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];
//This does not handle even length lists
const balanceInsert = (arr, min, max) => {
//Prevent infinant loop
  if (max < min) {
    return null;
  }
  const middleIndex = (min + max) / 2;

  const root = new Node(arr[middleIndex]);

  root.leftChild = balanceInsert(arr, min, middleIndex - 1);
  root.rightChild = balanceInsert(arr, middleIndex + 1, max);
  return root;
};

console.log(balanceInsert(array, 0, array.length - 1));
