class Element{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    
    constructor(){
        this.store = [];
    }

    insert(element){
        this.store.push(element);
        let currentInd = this.store.length - 1;
        let parentInd = Math.floor((currentInd -1)/ 2);
        if (parentInd < 0) { return };
        while (element.priority > this.store[parentInd].priority){
                [this.store[currentInd], this.store[parentInd]] = [this.store[parentInd], this.store[currentInd]];
                currentInd = parentInd;
                parentInd = Math.floor((currentInd -1) / 2);
                if (currentInd < 0 || parentInd < 0){ break };
        }
        return this.store;
    }

    extractMax(){
        this.store.unshift();
        this.store[0] = this.store.pop();
        let current = 0;
        let child1 = current * 2 + 1;
        let child2 = current * 2 + 2;   
        
        while (this.store[current] < this.store[child1] || this.store[current] < this.store[child2] ){
            let bigger = this.store[child1] > this.store[child2] ? child1 : child2;
            [this.store[current], this.store[bigger]] = [this.store[bigger], this.store[current]];
            current = bigger;
            child1 = current * 2 + 1;
            child2 = current * 2 + 2;   
        }

        return this.store;
    }

    print(){
        return this.store;
    }


}

let pq = new PriorityQueue();
let valuesToPut = [new Element(42, 2), new Element(5, 1), new Element(77, 7), new Element(55, 5), new Element(123321123, 6)];

valuesToPut.map(x => pq.insert(x));

console.log(pq.print());