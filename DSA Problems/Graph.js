// NON_DIRECTIONAL GRAPH
class graph{
    constructor(data){
        this.data=data
        this.adjList=new Map()
    }

    addVertex(v){
        this.adjList.set(v,[])
    }

    addEdgwe(v,target){
        this.adjList.get(v).push(target)

        this.adjList.get(target).push(v)
    }
    
    printGraph(){
        const keys=this.adjList.keys()
        for(let key of keys){
            console.log(key,'->',this.adjList.get(key))
        }
    }
}
    //BFS(node) 
    {
   // Create a Queue and add our initial node in it
   let q = new Queue(this.data.length);
   let explored = new Set();
   q.enqueue(data);

   // Mark the first node as explored explored.
   add(node);

   // We'll continue till our queue gets empty
   while (!q.isEmpty()) {
      let t = q.dequeue();

      // Log every element that comes out of the Queue
      console.log(t);

      // 1. In the edges object, we search for nodes this node is directly connected to.
      // 2. We filter out the nodes that have already been explored.
      // 3. Then we mark each unexplored node as explored and add it to the queue.
      this.edges[t]
      .filter(n => !explored.has(n))
      .forEach(n => {
         explored.add(n);
         q.enqueue(n);
      });
   }
}

const myGraph = new graph(10)
myGraph.addVertex("a")
myGraph.addVertex("b")
myGraph.addVertex("1")
myGraph.addEdgwe("a","b")
myGraph.addEdgwe("b","1")
myGraph.printGraph()
console.log(myGraph)