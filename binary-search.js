class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (current) {
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val >= current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return undefined;
    } else {
      let current = this.root;
      while (current) {
        if (val === current.val) {
          return current;
        } else if (val < current.val) {
          current = current.left;
        } else if (val >= current.val) {
          current = current.right;
        }
      }
    }
    return -1;
  }
}

let tree = new BinarySearchTree();
tree.insert(5);
tree.insert(10);
tree.insert(7);
tree.insert(2);
tree.insert(5);
