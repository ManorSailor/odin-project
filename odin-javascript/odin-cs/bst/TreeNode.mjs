class TreeNode {
  #left = null;
  #right = null;

  constructor(value = null) {
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

  static of(value) {
    return new TreeNode(value);
  }
}

export default TreeNode;
