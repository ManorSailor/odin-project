class Node {
  #value;
  #next;

  constructor(value) {
    this.#value = value;
    this.#next = null;
  }

  get value() {
    return this.#value;
  }

  set value(newVal) {
    this.#value = newVal;
  }

  get next() {
    return this.#next;
  }

  set next(node) {
    this.#next = node;
  }
}

class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  constructor(node) {
    if (node instanceof Node) {
      this.#init(node);
    }
  }

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  get lastIndex() {
    return this.#size ? this.#size - 1 : null;
  }

  #init(node) {
    if (this.#size === 0) {
      this.#size = 1;
      this.#head = node;
      this.#tail = node;
    }
    return this;
  }

  clear() {
    this.#size = 0;
    this.#head = null;
    this.#tail = null;
    return this;
  }

  append(value) {
    const node = new Node(value);

    if (this.#size === 0) {
      this.#init(node);
    } else {
      this.#tail.next = node;
      this.#tail = node;
      this.#size++;
    }

    return this;
  }

  prepend(value) {
    const node = new Node(value);

    if (this.#size === 0) {
      this.#init(node);
    } else {
      node.next = this.#head;
      this.#head = node;
      this.#size++;
    }

    return this;
  }

  at(index) {
    if (index >= this.#size) return null;
    if (index < 0) {
      index += this.#size;
      if (index < 0) return null;
    }

    let nodeIndex = 0;
    let node = this.#head;

    while (nodeIndex !== index && node) {
      nodeIndex++;
      node = node.next;
    }

    return node;
  }

  pop() {
    if (this.#size === 0) return;
    if (this.#size === 1) return this.clear();

    const oldTail = this.#tail;
    const prevNode = this.at(-2);

    this.#tail = prevNode;
    this.#tail.next = null;
    this.#size--;

    return oldTail;
  }

  contains(value) {
    if (this.#size === 0) return false;

    let node = this.#head;

    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }

    return false;
  }

  indexOf(value) {
    if (this.#size === 0) return null;

    let nodeIndex = 0;
    let node = this.#head;

    while (node) {
      if (node.value === value) {
        return nodeIndex;
      }
      nodeIndex++;
      node = node.next;
    }

    return null;
  }

  toString() {
    if (this.#size === 0) return null;

    let listStr = '';
    let node = this.#head;

    while (node) {
      listStr += `( ${node.value} ) -> `;
      node = node.next;
    }

    listStr += 'null';

    return listStr;
  }

  insertAt(value, index) {
    if (index == null || index < 0 || index >= this.#size) return null;

    const node = new Node(value);

    if (index === 0) {
      node.next = this.#head;
      this.#head = node;
    } else {
      const prevNode = this.at(index - 1);
      node.next = prevNode.next;
      prevNode.next = node;
    }

    this.#size++;
    return this;
  }

  removeAt(index) {
    if (index == null || index < 0 || index >= this.#size) return null;

    let removedNode = null;

    if (index === 0) {
      removedNode = this.#head;
      this.#head = this.#head.next;
    } else if (index === this.lastIndex) {
      return this.pop();
    } else {
      const prevNode = this.at(index - 1);
      removedNode = prevNode.next;
      prevNode.next = prevNode.next.next;
    }

    this.#size--;
    return removedNode;
  }

  reverse() {}
}
