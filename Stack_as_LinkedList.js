class Node{
    constructor(value){
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class Stack{

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
        } else {
            let prev = this.last;
            this.last.next = newNode;
            this.last = newNode;
            this.last.previous = prev;
        }
        this.length ++;
        return this
    }

    pop(){
        let value = this.last.value;
        if (this.last.previous){
            this.last.previous.next = null;
            this.last = this.last.previous;
            this.length --;
        }
        return value;
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
let stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();

console.log(stack.print());
stack.push(5);
stack.push(6);
console.log(stack.print())
stack.pop();
stack.pop();
console.log(stack.print())
console.log(stack)
