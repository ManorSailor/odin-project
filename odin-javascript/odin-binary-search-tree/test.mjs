import BBST from "./BBST.mjs";

const randomArray = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 50)
);

const tree = new BBST(randomArray);

console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());

tree.insert(300);
tree.insert(400);
tree.insert(500);

console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());

console.log(tree.levelOrder());
console.log(tree.inOrder());
console.log(tree.preOrder());
console.log(tree.postOrder());

tree.print();