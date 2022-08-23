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

    pop(){
        if (this.tail){
            let element = this.tail.value;
            this.tail = this.tail.previous;
            this.tail.next = null;
            return element
        }
        
    }

    shift(){
            let result = this.head.value;
            this.head = this.head.next;
            this.head.previous = null;
            this.length --;
            return result;
        }
    
    unshift(element){
        let newNode = new Node(element);
        if (!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let nextNode = this.head;
            this.head = newNode;
            this.head.next = nextNode;
            nextNode.previous = newNode;
        }
        this.length ++;
        return this
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

    get(index){
        if (!this.head) { return undefined };
        if (index < 0 || index >= this.length){ return "Out of range" };
        let current = this.head;
        let count = 0;
        let result;
        while (current){
            if (count === index){
                result = current.value;
                break;
            }
            count ++;
            current = current.next;

        }
        return result;
    }

    set(index, value){
        if (index < 0 || index >= this.length){ return "Out of range" };
        let current = this.head;
        let count = 0;

        while(index !== count){
            count ++;
            current = current.next;
        }
        current.value = value;
        return this;

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
arr.unshift(42);
arr.push(1);
arr.unshift(2);
console.log(arr.print());
console.log(arr.get(2))
console.log(arr.set(2, 222))
console.log(arr.print());