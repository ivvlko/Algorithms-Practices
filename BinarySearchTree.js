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
            console.log(`current: ${currentNode.value}; to add ${value}`)
            if(!currentNode.right && currentNode.value < value ){
                currentNode.right = newNode;
                console.log(`adding ${value} on right to  ${currentNode.value}`)
                break;
            } 
            if (!currentNode.left && currentNode.value > value ){
                currentNode.left = newNode;
                console.log(`adding ${value} on left to  ${currentNode.value}`)
                break;
            }
            console.log(`switching ${currentNode.value}`)
            currentNode = currentNode.value > value? currentNode.left : currentNode.right;
            console.log(`to ${currentNode}`)
        }
    return this;
    }
}

let bst = new BinarySearchTree();
bst.root = new Node(40);
bst.add(55);
bst.add(45);
bst.add(38);
bst.add(39);
console.log(bst)