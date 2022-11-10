class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enQueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push({ ...newNode });
    let pos = this.values.length - 1;
    let element = this.values[pos];
    while (pos > 0) {
      let parent = Math.floor((pos - 1) / 2);
      let temp = this.values[parent];
      if (element.priority <= temp.priority) break;
      this.values[parent] = element;
      this.values[pos] = temp;
      pos = parent;
    }
    return this.values;
  }

  deQueue() {
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
          console.log(leftChild);
          if (element.priority < leftChild.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > leftChild.priority)
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
    }
  }
}

let pQ = new PriorityQueue();
pQ.enQueue("work up", 7);
pQ.enQueue("bath", 5);
pQ.enQueue("gym", 4);
