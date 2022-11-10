class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printStraight() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  printReverse() {
    let arr = [];
    let current = this.tail;
    while (current) {
      arr.push(current.val);
      current = current.prev;
    }
    return arr;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      //this.tail.prev = newNode.prev
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
      current.prev = null;
    }

    this.length--;
    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      let current = this.head;
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }

    length--;
    return current;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
  get(pos) {
    if (pos < 0 || pos > this.length) return undefined;
    // if(pos === 0) return this.head
    // if(pos === this.length) return this.tail
    else {
      let current = this.head;
      let count = 0;
      while (pos !== count) {
        current = current.next;
        count++;
      }
      return current;
    }
  }
  set(val, pos) {
    let position = this.get(pos);
    if (position) {
      position.val = val;
      return this;
    } else {
      return "index is out of range";
    }
  }
  insertAt(pos, val) {
    if (pos < 0 || pos > this.length) return undefined;
    if (pos === 0) {
      return this.unshift(val);
    }
    if (pos === this.length) {
      return this.push(val);
    } else {
      let current = this.get(pos);
      let prev = current.prev;
      let newNode = new Node(val);
      prev.next = newNode;
      newNode.next = current;
      newNode.prev = prev;
      current.prev = newNode;
      this.length++;
    }
    return this;
  }
  remove(pos) {
    let node = this.get(pos);
    if (!node) {
      return undefined;
    }
    if (pos === 0) {
      return this.shift();
    }
    if (pos === this.length) {
      return this.pop();
    } else {
      let prev = node.prev;
      let next = node.next;
      prev.next = next;
      next.prev = prev;
      node.prev = null;
      node.next = null;
      this.length--;
      return node;
    }
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.prev = next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
