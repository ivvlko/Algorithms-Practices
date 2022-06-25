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

    get(index){
        let current = 0;
        let result = this.head;
        let outOfRange = false;

        while (current !== index){
            if (current >= this.length -1){
                outOfRange = true;
                break;
            }
            result = result.next;
            current++;
        }
        return outOfRange ? "Out Of Range" : result.value;
    }

    set(ind, newVal){
        let current = 0;
        let result = this.head;
        let outOfRange = false;

        while (current !== ind){
            if (current >= this.length -1){
                outOfRange = true;
                break;
            }
            result = result.next;
            current++;
        }
        if (!outOfRange){ result.value = newVal }
        return outOfRange ? "Out Of Range" : result.value;
    }

}


let list = new SinglyLinkedList();
list.unshift(5);
list.unshift(2);
list.shift();

list.pop();
list.push(3);
list.pop();
list.push(4);
list.push(5);

list.push(77);
list.push(14);
list.push(42);
list.unshift(422);
console.log(list.set(6, 11111111))
console.log(list)