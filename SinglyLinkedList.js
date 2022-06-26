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

    insert(index, value){
        
        if (index < 0 || index > this.length){
            return "Out Of Range";
        }

        let newNode = new Node(value);
        let result = this.head;

        if (index === 0){
            this.head = newNode;
            this.head.next = result;
            this.length ++;
            return this.head.value;
        }

        if (index === this.length){
            this.tail.next = newNode;
            this.tail = newNode;
            this.length ++;
            return this.tail.value;
        }
        
        let current = 0;
        let previous = null;

        while (current !== index){

            previous = result;
            result = result.next;
            current ++;
        }

        previous.next = newNode;
        newNode.next = result;
        this.length ++;
        return newNode.value;
    }

    reverse(){
        let currentNode = this.head;
        let nextTail = new Node(this.head.value);
        
        for (let i = 0; i < this.length - 1; i++){
            let previousNext = this.tail.next;
            let newNext = new Node(currentNode.value);
            newNext.next = previousNext;
            this.tail.next = newNext;
            currentNode = currentNode.next;
        }
        this.head = this.tail;
        this.tail = nextTail;
        return this;

    }

    print(){
        let currentNode = this.head;
        let result = [];
        while(currentNode){
            result.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return result;
    }

}


let list = new SinglyLinkedList();
list.push(2);
list.push(5);
list.push(6);
list.push(44);
list.push(55);
console.log(list.print())
list = list.reverse();
console.log(list.print())
console.log(list)