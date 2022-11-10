class MaxBinaryTree {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);
    let pos = this.values.length - 1;
    let parent = Math.floor((pos - 1) / 2);
    if (val < this.values[parent]) {
      return this.values;
    } else {
      while (parent >= 0) {
        let temp = this.values[parent];
        this.values[parent] = this.values[pos];
        this.values[pos] = temp;
        pos = parent;
        parent = Math.floor((pos - 1) / 2);
      }
      return this.values;
    }
  }

  remove() {
    let idx = 0;
    let length = this.values.length;
    let max = this.values[0];
    let end = this.values.pop();
    if (length > 0) {
      this.values[0] = end;
      let element = this.values[0];

      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let rightChild, leftChild;
        let swap = null;
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (element < leftChild) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
      return this.values;
    } else {
      return undefined;
    }
  }
}

maxBinaryTree = new MaxBinaryTree();
maxBinaryTree.insert(41);
maxBinaryTree.insert(39);
maxBinaryTree.insert(33);
maxBinaryTree.insert(18);
maxBinaryTree.insert(27);
maxBinaryTree.insert(12);
