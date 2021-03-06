class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  contains(value) {
    if (value < this.value){
      if(!this.left){
        return false;
      } else {
        return this.left.contains(value);
      }
    } else if (value > this.value){
      if (!this.right){
        return false;
      } else {
        return this.right.contains(value);
      }
    } else {
      return true;
    }
  }
  remove(value, parent = null) {
    if (value < this.value){
      if(this.left) {
        this.left.remove(value, this)
      }
    } else if (value > this.value){
      if (this.right){
        this.right.remove(value, this)
      }
    } else {
      if (this.left && this.right){
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent === null){
        if(this.left){
          this.value = this.left.value;
          this.right = this.left.value;
          this.left = this.left.left;
        }
      }
    }
  }
  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}
