import TreeNode from './TreeNode.mjs';

class BBST {
  #height = 0;
  #depth = 0;
  #root = null;

  constructor(arr = []) {
    this.#root = this.buildTree([...new Set(arr.sort((a, b) => a - b))]);
  }

  get root() {
    return this.#root;
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

  insert() {}
  delete() {}
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
const tree = new BBST(arr);

tree.print();

export default BBST;
