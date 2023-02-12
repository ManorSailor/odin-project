import Queue from './Queue.mjs';
import TreeNode from './TreeNode.mjs';

class BBST {
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

  static childNodesOf(node = null) {
    const children = [];
    if (node.left) children.push(node.left);
    if (node.right) children.push(node.right);
    return children;
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

  levelOrder(callback) {
    if (!this.#root) return null;

    const hasCallback = typeof callback === 'function';
    const Q = Queue.of(this.#root);
    const lvlValues = [];

    const processNode = (node) =>
      hasCallback ? callback(node) : lvlValues.push(node.value);

    while (!Q.empty()) {
      const node = Q.pop();
      processNode(node);
      Q.push(...BBST.childNodesOf(node));
    }

    return hasCallback ? undefined : lvlValues;
  }

  inOrder(callback) {
    if (!this.#root) return null;

    const hasCallback = typeof callback === 'function';

    const inOrder = (node) => {
      if (!node) return [];

      const leftVals = inOrder(node.left);
      if (hasCallback) callback(node);
      const rightVals = inOrder(node.right);

      // left -> root -> right
      return [...leftVals, node.value, ...rightVals];
    };

    const inOrderVals = inOrder(this.#root);
    return hasCallback ? undefined : inOrderVals;
  }

  preOrder(callback) {
    if (!this.#root) return null;

    const hasCallback = typeof callback === 'function';

    const preOrder = (node) => {
      if (!node) return [];

      if (hasCallback) callback(node);
      const leftVals = preOrder(node.left);
      const rightVals = preOrder(node.right);

      // root -> left -> right
      return [node.value, ...leftVals, ...rightVals];
    };

    const preOrderVals = preOrder(this.#root);
    return hasCallback ? undefined : preOrderVals;
  }

  postOrder(callback) {
    if (!this.#root) return null;

    const hasCallback = typeof callback === 'function';

    const postOrder = (node) => {
      if (!node) return [];

      const leftVals = postOrder(node.left);
      const rightVals = postOrder(node.right);
      if (hasCallback) callback(node);

      // left -> right -> root
      return [...leftVals, ...rightVals, node.value];
    };

    const postOrderVals = postOrder(this.#root);
    return hasCallback ? undefined : postOrderVals;
  }

  height(node) {
    if (!node) return -1;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  depth(node) {
    if (!this.#root || !node) return -1;

    const depth = (root, counter = 0) => {
      if (!root) return -1;
      if (node === root) return counter;

      return node.value < root.value
        ? (counter = depth(root.left, counter + 1))
        : (counter = depth(root.right, counter + 1));
    };

    return depth(this.#root);
  }

  isBalanced() {
    if (!this.#root) return false;

    const isBalanced = (node) => {
      if (!node) return true;

      const leftHeight = this.height(node.left);
      const rightHeight = this.height(node.right);

      if (Math.abs(leftHeight - rightHeight) > 1) return false;
      return isBalanced(node.left) && isBalanced(node.right);
    };

    return isBalanced(this.#root);
  }

  rebalance() {
    if (!this.isBalanced()) {
      const sortedVals = this.inOrder();
      this.#root = this.buildTree(sortedVals);
    }
    return this;
  }

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

export default BBST;
