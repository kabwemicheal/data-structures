class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class TreeTraversal {
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

  bfs() {
    if (!this.root) {
      return undefined;
    }
    let queue = [];
    let arr = [];
    let current = this.root;

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      arr.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return arr;
  }

  dfsPreOrder() {
    if (!this.root) {
      return undefined;
    }
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }

  dfsPostOrder() {
    if (!this.root) {
      return undefined;
    }
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
    };
    traverse(current);
    return data;
  }

  dfsInOrder() {
    if (!this.root) {
      return undefined;
    }
    let data = [];
    let current = this.root;
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(current);
    return data;
  }
}

let tree = new TreeTraversal();
tree.insert(4);
tree.insert(10);
tree.insert(7);
tree.insert(2);
tree.insert(5);
tree.insert(1);
