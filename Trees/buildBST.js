class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value){

  }
  contains(value){

  }
  remove(value){

  }
  getMinValue(){
    if (this.left === null){
      return this.value;
    }else {
      return this.left.getMinValue();
    }
  }
}