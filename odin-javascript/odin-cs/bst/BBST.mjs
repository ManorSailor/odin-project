import TreeNode from './TreeNode.mjs';

class BBST {
  #height = -1;
  #depth = -1;
  #root = null;

  constructor(arr = []) {
    this.#root = this.buildTree([...new Set(arr.sort((a, b) => a - b))]);
  }

  static isLeafNode(node = null) {
    // Make sure node has no children
    return !node?.left && !node?.right;
  }

  static isInternalNode(node = null) {
    // make sure node has either left OR right child
    return (node?.left && !node?.right) || (node?.right && !node?.left);
  }

  get root() {
    return this.#root;
  }

  #init(node) {
    if (!this.#root) {
      this.#root = node;
    }
    return this;
  }

  clear() {
    this.#root = null;
    this.#height = -1;
    this.#depth = -1;
    return this;
  }

  buildTree(arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return TreeNode.of(arr[0]);

    const mid = arr.length / 2;
    const root = TreeNode.of(arr.at(mid));

    const left = arr.slice(0, mid);
    const right = arr.slice(mid + 1);

    root.left = this.buildTree(left);
    root.right = this.buildTree(right);

    return root;
  }

  insert(value) {
    if (value == null) return;
    if (!this.#root) return this.#init(TreeNode.of(value));

    const insert = (node) => {
      switch (true) {
        case value < node.value:
          return node.left
            ? insert(node.left)
            : (node.left = TreeNode.of(value));

        case value > node.value:
          return node.right
            ? insert(node.right)
            : (node.right = TreeNode.of(value));
      }
    };

    insert(this.#root, value);
    return this;
  }

  find(value, includeParent = false) {
    if (value == null) return null;

    const find = (node, branch = null, parent = null) => {
      if (!node) return null;
      if (value === node.value)
        return includeParent ? { parent, branch, node } : node;

      return value < node.value
        ? find(node.left, 'left', node)
        : find(node.right, 'right', node);
    };

    return find(this.#root);
  }

  successor(node) {
    if (!node) return null;
    // Find the smallest node in the left branch(es) of right branch
    node = node.right;

    while (node.left) {
      node = node.left;
    }
    return node;
  }

  delete(value) {
    if (value == null) return null;

    const { parent, branch, node } = this.find(value, true) ?? {};

    if (!node) return null;

    // Create a new instance of the node to be removed, in the 3rd removal case, we modify value of this node instead of removing it
    const removedNode = TreeNode.of(node.value);

    if (BBST.isLeafNode(node)) {
      node === this.#root
        ? this.clear()
        : (parent[branch] = null);
    } else if (BBST.isInternalNode(node)) {
      node === this.#root
        ? (this.#root = node.left || node.right)
        : (parent[branch] = node.left || node.right);
    } else {
      const successor = this.successor(node);
      // Remove the successor, if copied before removal, we get an infinite loop
      const removedNode = this.delete(successor.value);
      node.value = removedNode.value;
    }

    return removedNode;
  }

  levelOrder() {}
  preOrder() {}
  inOrder() {}
  postOrder() {}
  isBalanced() {}
  rebalance() {}
  height() {}
  depth() {}

  print(node = this.#root, prefix = '', isLeft = true) {
    if (!node) return null;
    if (node.right) {
      this.print(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left) {
      this.print(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}

const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const arr2 = [
  30, 20, 32, 40, 50, 60, 70, 65, 75, 80, 34, 36, 85, 28, 37, 19, 12, 13, 14,
];
const tree = new BBST(arr2);

tree.print();
tree.delete(36)
tree.print();

export default BBST;
