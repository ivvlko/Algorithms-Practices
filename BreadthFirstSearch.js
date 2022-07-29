const {bst, node} = require("./BinarySearchTree.js");

let tree = new bst();
tree.root = new node(40);
tree.add(55);
tree.add(45);
tree.add(38);
tree.add(39);
tree.add(1);
tree.add(21);
tree.add(555);

//this uses BinarySearch tree but it works for any kind of tree;
function bfs(tree){
    let queue = [tree.root];
    let sortedResult = [];

    while (queue.length > 0){
        let node = queue.shift();
        sortedResult.push(node.value);
        Object.keys(node).map((k) => {
            if (k !== "value" && node[k]){
                queue.push(node[k]);
            }
        });
    }
    return sortedResult;
}
// https://www.cs.usfca.edu/~galles/visualization/BST.html >>> visualize trees to check if its sorted properly
let sortedBreadthFirst = bfs(tree);
console.log(sortedBreadthFirst);