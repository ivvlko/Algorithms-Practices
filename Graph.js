class Graph{
    // non-directed graph, using adjacency list;
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(v){
        if(v in this.adjacencyList) return "Already exists";
        this.adjacencyList[v] = [];
        return this.adjacencyList;
    }

    addEdge(v1, v2){
        if (!(v1 in this.adjacencyList) || !(v2 in this.adjacencyList)) return "Vertex not found";
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
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

let graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addEdge("b", "a");
graph.addEdge("c", "b");
graph.addEdge("a", "d");
graph.print();
graph.removeVertex("c");
graph.removeVertex("d");
graph.print();
