const {bst, node} = require("./BinarySearchTree.js");

let tree = new bst();
tree.root = new node(40);
let elementsToAdd = [55, 45, 38, 39, 1, 21, 55]
elementsToAdd.map((x) => tree.add(x));

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