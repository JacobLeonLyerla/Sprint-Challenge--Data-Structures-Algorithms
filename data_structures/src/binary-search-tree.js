class Queue{
  constructor(){
    this.storage =[]
  }
  enqueue(element){
    this.storage.push
  }
  dequeue(){
    return this.storage.shift()
  }
  isEmpty(){
    return this.storage.length === 0;
  }
}


class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  depthFirstForEach(cb) {
    /* Your code here */
    cb(this.value)
    if(this.left){
      this.left.depthFirstForEach(cb);

    }
    if(this.right){
      this.right.depthFirstForEach(cb)
    }
    
  }

  breadthFirstForEach(cb) {
    /* Your code here */
//seans
// const queue =[]
// queue.push(this)
// while(queue.length){
//   const node = queue.shift()
//   if(node.left){
//     queue.push(node.left)
//   }
//   if(node.right){
//     queue.push(node.right)
//   }

//   cb(node.value)
// }
//my solution don't work
//change to array
   const queue =[]
   //changed enqueue to push code works now
    queue.push(this)
    while(queue.length){
     const newNode = queue.shift();
    
    if(newNode.left){
      queue.push(newNode.left)
    }
    if(newNode.right){
      queue.push(newNode.right)
    }
    cb(newNode.value)
 }
}
  insert(value) {
    const newNode = new BinarySearchTree(value);
    if (value < this.value) {
      if (!this.left) {
        this.left = newNode;
      } else {
        this.left.insert(value);
      }
    } else if (value >= this.value) {
      if (!this.right) {
        this.right = newNode;
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.left) {
      if (this.left.contains(target)) {
        return true;
      }
    }
    if (this.right) {
      if (this.right.contains(target)) {
        return true;
      }
    }
    return false;
  }

  getMax() {
    if (!this) return null;

    let max = this.value;
    let current = this;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.right;
    }

    return max;
  }
}

module.exports = BinarySearchTree;