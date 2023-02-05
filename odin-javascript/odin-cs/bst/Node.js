class Node {
  value = null;
  #left = null;
  #right = null;

  constructor(value) {
    this.value = value;
  }

  get left() {
    return this.#left;
  }

  set left(node) {
    this.#left = node;
  }

  get right() {
    return this.#right;
  }

  set right(node) {
    this.#right = node;
  }
}

export default Node;
