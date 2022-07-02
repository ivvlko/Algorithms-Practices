class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}


class DoublyLinkeList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(element){
        let newNode = new Node(element);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.previous = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    print(){
        let current = this.head;
        let res = [];
        while (current){
            res.push(current.value);
            current = current.next;
        }
        return res;
    }

    printReverse(){
        let current = this.tail;
        let res = [];

        while (current){
            res.push(current.value);
            current = current.previous;
        }
        return res;
    }
}

let arr = new DoublyLinkeList();

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(42);

console.log(arr.print());
console.log(arr.printReverse());
