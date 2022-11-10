class Node {
  constructor(val) {
    (this.val = val), (this.next = null);
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return node;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let prev = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;
    }
    return true;
  }

  shift() {
    if (!this.head) return;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = this.head;
    }
    return true;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return newNode;
  }

  get(pos) {
    if (pos < 0 || pos > this.length) {
      return undefined;
    }
    let current = this.head;
    let count = 0;
    while (pos !== count) {
      count++;
      current = current.next;
    }
    return current;
  }

  set(val, pos) {
    let posi = this.get(pos);
    posi.val = val;
  }

  insertAt(pos, val) {
    let newNode = new Node(val);
    if (pos < 0 || pos > this.length) {
      return false;
    }
    if (pos === 0) {
      return !!this.unshift(val);
    }
    if (pos === this.length) {
      return !!this.push(val);
    } else {
      let prev = this.get(pos - 1);
      let current = this.get(pos);
      prev.next = newNode;
      newNode.next = current;
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) {
      return !!this.shift();
    }
    if (index === this.length - 1) {
      return !!this.pop();
    } else {
      let prev = this.get(index - 1);
      let current = this.get(index);
      let next = this.get(index + 1);
      current.next = null;
      prev.next = next;
      this.length--;
      return true;
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }

  getMiddle() {
    let position = Math.floor(this.length / 2);
    let node = this.get(position);
    return node.val;
  }

  convertArrayToLinkedList(arr) {
    let list = new SinglyLinkedList();
    arr.forEach((value) => list.push(value));
    return list;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.convertArrayToLinkedList([7, 8, 9, 10, 11, 12]);
