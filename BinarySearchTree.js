class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    add(value){
        let newNode = new Node(value);
        if (!this.root){
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (true){
            if(currentNode.value === value){ return "already in"};

            if(!currentNode.right && currentNode.value < value ){
                currentNode.right = newNode;
                break;
            } 
            if (!currentNode.left && currentNode.value > value ){
                currentNode.left = newNode;
                break;
            }
            currentNode = currentNode.value > value? currentNode.left : currentNode.right;
        }
    return this;
    }

    find(searchedValue){
        let current = this.root;
        let match = "not present";
        while(current){
            if (current.value === searchedValue){
                return current.value;
            }

            if (current.value > searchedValue){
                current = current.left;
            } else{
                current = current.right;
            }
        }
        return match;
    }
}

let bst = new BinarySearchTree();
bst.root = new Node(40);
bst.add(55);
bst.add(45);
bst.add(38);
bst.add(39);
// console.log(bst.add(39));
bst.add(1);

console.log(bst)
let s = bst.find(40);
// console.log(s);

module.exports = {bst: BinarySearchTree, node: Node};