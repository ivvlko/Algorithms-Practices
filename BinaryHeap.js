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

    print(){
        return this.store;
    }

}

mbh = new MaxBinaryHeap();
let valuesToPut = [50, 49, 29,  30, 35, 46, 55, 75]

valuesToPut.map(x => mbh.insert(x));

console.log(mbh.print());
