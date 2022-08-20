class WeightedGraph{
    // directed graph, using adjacency list;
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(v){
        if(v in this.adjacencyList) return "Already exists";
        this.adjacencyList[v] = [];
        return this.adjacencyList;
    }

    addEdge(v1, v2, weight){
        if (!(v1 in this.adjacencyList) || !(v2 in this.adjacencyList)) return "Vertex not found";
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
        return this.adjacencyList;
    }

    removeEdge(v1, v2){
        if (!(v1 in this.adjacencyList) || !(v2 in this.adjacencyList)) return "Vertex not found";
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(el => el !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(el => el !== v1); 
        return this.adjacencyList;
    }

    removeVertex(v){
        for (let k in this.adjacencyList){
            this.removeEdge(k, v);
        }
        delete this.adjacencyList[v];
        return this.adjacencyList;
    }

    print(){
        console.log(this.adjacencyList);
    }

}

let wg = new WeightedGraph;
wg.addVertex("a");
wg.addVertex("b");
wg.addVertex("c");

wg.addEdge("a", "b", 3);
wg.addEdge("a", "c", 4);
wg.addEdge("c", "b", -4);

wg.print();