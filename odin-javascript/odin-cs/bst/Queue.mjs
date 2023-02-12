class ListNode {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  static of(value, next) {
    return new ListNode(value, next);
  }
}

class Queue {
  #length = 0;
  #head = null;
  #tail = null;

  constructor(...values) {
    this.push(...values);
  }

  get length() {
    return this.#length;
  }

  get first() {
    return this.#head?.value;
  }

  empty() {
    return this.#length === 0;
  }

  clear() {
    this.#length = 0;
    this.#head = null;
    this.#tail = null;
    return this;
  }

  push(...values) {
    values.forEach((val) => {
      const node = ListNode.of(val);

      if (this.#length === 0) {
        this.#init(node);
      } else {
        this.#tail.next = node;
        this.#tail = node;
        this.#length++;
      }
    });

    return this;
  }

  pop() {
    if (this.#length === 0) return;

    const oldHead = this.#head;

    if (this.#length === 1) {
      this.clear();
    } else {
      this.#head = this.#head.next;
      this.#length--;
    }

    return oldHead?.value;
  }

  #init(node) {
    if (this.#length === 0) {
      this.#length = 1;
      this.#head = node;
      this.#tail = node;
    }
    return this;
  }

  static of(...values) {
    return new Queue(...values);
  }
}

export default Queue;
