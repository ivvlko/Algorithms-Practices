class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length++;
        return this;
    }

    pop() {
        let current = this.head;

        if(!current) {return this}

        if(!current.next){
            this.length = 0;
            this.head = null;
            this.tail = null;
            return
        }

        while (current.next) {
            if (current.next.next) {
                current = current.next;
            } else {
                current.next = null;
                break
            };

        }
        this.tail = current;
        return this;
    }

    shift(){
        if (this.head){
            let currentHead = this.head.value;
            this.head = this.head.next;
            this.length --;
            return currentHead;
        }
        return;

    }

}


let list = new SinglyLinkedList();
console.log(list.shift())
list.pop();
list.push(3);
list.push(4);
list.push(5);


console.log(list.shift())
console.log(list)
