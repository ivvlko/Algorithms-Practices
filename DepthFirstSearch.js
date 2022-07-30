const {bst, node} = require("./BinarySearchTree.js");

let tree = new bst();
tree.root = new node(40);
tree.add(55);
tree.add(45);
tree.add(38);
tree.add(39);
tree.add(1);
tree.add(21);
tree.add(72);
tree.add(65);
tree.add(99);
tree.add(42);
tree.add(19);
tree.add(24);


//https://visualgo.net/en/bst > use this nice web app to visualize your tree

function invoke(node, l, r, res){
    if(!node){
        return ;
    }
    res.push(node.value);
    invoke(node[l], l, r, res);
    invoke(node[r], l, r, res);
}

function dfs(tree){
    let result = [];
    invoke(tree.root, "left", "right", result);
    return result;
}

let sortedDepthFirst = dfs(tree);

console.log(`should be Final Pre-order: 40,38,1,21,19,24,39,55,45,42,72,65,99`)
console.log(sortedDepthFirst);