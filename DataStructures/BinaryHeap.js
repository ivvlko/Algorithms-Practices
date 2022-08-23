class MaxBinaryHeap{

    constructor(){
        this.store = [];
    }

    insert(value){
        this.store.push(value);
        let currentInd = this.store.length - 1;
        let parentInd = Math.floor((currentInd -1)/ 2);

        while (value > this.store[parentInd]){
                [this.store[currentInd], this.store[parentInd]] = [this.store[parentInd], this.store[currentInd]];
                currentInd = parentInd;
                parentInd = Math.floor((currentInd -1) / 2);
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

mbh = new MaxBinaryHeap();
let valuesToPut = [50, 49, 29,  30, 35, 46, 55, 75]

valuesToPut.map(x => mbh.insert(x));
console.log(mbh.print());
mbh.extractMax();
console.log(mbh.print());
