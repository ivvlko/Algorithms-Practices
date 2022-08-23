class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    push(value){
        let newNode = new Node(value);
        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length ++;
        return this
    }

    pop(){
        if(!this.first){ return undefined };
        let res = this.first.value;
        this.first = this.first.next;
        return res;

    }

    print(){
        let resAsArr = [];
        let current = this.first;
        while (current){
            resAsArr.push(current.value);
            current = current.next;
        }
        return resAsArr;
    }
}

let queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.print())
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.print())
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.print())
