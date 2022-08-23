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

    depthFirstTraverse(startingPoint){
        let seen = [];
        let ordered = [];
        const adjacencyList = this.adjacencyList;

        function dfs(currentPoint){

            if (!(seen.includes(currentPoint))){
                seen.push(currentPoint);
                ordered.push(currentPoint);
            }

            adjacencyList[currentPoint].forEach(element => {
                if (!(seen.includes(element))){
                     dfs(element)
                }
            });
            
        }
        dfs(startingPoint);
        return ordered;
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
graph.addVertex("f");
graph.addVertex("g");
graph.addEdge("b", "a");
graph.addEdge("c", "a");
graph.addEdge("f", "b");
graph.addEdge("d", "b");
graph.addEdge("a", "g");
graph.print();
let dft = graph.depthFirstTraverse("a");
console.log(dft);

///////////////////////////////////////////

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

console.log(g);
let asd = g.depthFirstTraverse("A");
console.log(asd);

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
