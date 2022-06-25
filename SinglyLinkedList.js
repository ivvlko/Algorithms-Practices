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
        return this;

    }

    unshift(val){
        let newHead = new Node(val);
        if (!this.head){
            this.head = newHead;
            this.tail = newHead;
            
        } else{
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length ++;
        return this;
    
    }

}


let list = new SinglyLinkedList();
list.unshift(5);
list.unshift(2);
list.shift();
console.log(list);
console.log(list.shift())
list.pop();
console.log(list)
list.push(3);
list.push(4);
list.push(5);


console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)
