// LINKEDLIST
  class Node {
        constructor(data){
            this.value= data
            this.next = null
        }
    }
class LinkedList{
    constructor(data){
        if(data == undefined)  return "list is empty"
        this.head={
             value: data,
             next:null
         }
        this.tail= this.head
        this.length=1
    }
    insertFirst(data){
          const newNode = new Node(data)
          newNode.next = this.head;
          this.head=newNode
          this.length++
    }   
    insertLastNode(data){
        const newNode= new Node(data)
        
        this.tail.next = newNode;
        this.tail=newNode
        this.length++
    }

    transverse(req){
        let counter =0                  //1-->> 2-->> 3-->> 4
        let elem = this.head                   
        while(counter != req){
            counter++
            elem = elem.next
        }
        return elem
    }
    
    insertAt(index,data){  
        let newNode=new Node(data)   
        if(index == 0){ 
            newNode.next = this.head;
            this.head=newNode
            this.length++
        } else{
        let leaderNode = this.transverse(index-1)
        let nextNode = leaderNode.next
        leaderNode.next=newNode
        newNode.next = nextNode
        this.length++}
     }

     deletedNodeAt(index){                                // 2-->5-->10-->5
        const leaderNode = this.transverse(index-1)
         let unWantedNode = leaderNode.next
          let nextNode = unWantedNode.next
          leaderNode.next=nextNode
          this.length--
     }

     reverse(){
                        let prev=null
                        let current=this.head     // 5-->10-->15-->20
                        let next=null
                        // this.tail = this.head
                        while(current!=null){
                            next=current.next
                            // console.log(next)
                            current.next=prev
                            prev= current
                            // console.log(prev)
                            current=next
                            console.log(current)
                        }
                       this.head=prev
                    }
                    printList(){
                          var curr = this.head
                             while (curr) {
                             console.log(curr)
                             curr = curr.next
                                           
                        }
                   }

                  
}
const myList = new LinkedList(10)
//    myList.insertLastNode(16)
//    myList.insertLastNode(20)
   myList.insertLastNode(21)
//    myList.insertLastNode()
   myList.insertFirst(5)
   myList.insertFirst(2)
   myList.insertAt(0,55)
   myList.insertAt(3,75)
//    myList.deletedNodeAt(1)
   myList.printList()
    // myList.reverse()
    // myList.printList()
    //  console.log(myList)





 //********************************************************************************* */

     class Node {
        constructor(data){
            this.data = data
            this.next = null
        }
    }
    
    class LinkedList {
    
        constructor(){
            this.head= null;
            this.size = 0;
        }
        add(data) {//10
    
                    // create a new node
                    var node = new Node(data);
                    // to store current node
                    var current;
            
                    // if list is empty add the element and make it head
                    if(this.head == null)
                        this.head =  node;
                    else {
                        current = this.head;
                         // traverse till end of ll
                        while (current.next != null){
                            current = current.next
                        }
                        
                        current.next = node;
                    }
                    
                    this.size++;
                } 
                reverse(){
                    let prev=null
                    let current=this.head
                    let next=null
                    while(current!=null){
                        next=current.next
                        current.next=prev
                        prev= current
                        current=next
                    }
                   this.head=prev
                }
    
                printList(){
                    var curr = this.head
                    while (curr) {
                        console.log(curr)
                        curr = curr.next
                        // console.log(curr)
                    }
                }
                insertFirst(data){
                    const newNode = new Node(data)
                    if(this.head == null){
                        this.head =  newNode;
                    }
                    else{
                        newNode.next = this.head;
                        this.head=newNode
                    }
                    
                    this.size++                                // { 1-->2-->3}  --- { 1-->4-->2-->3}
              }
        //       insertAt(index,data){
        //         const newNode = new Node(data)
        //         if(this.head == null){
        //             this.head =  newNode;
        //         }else{
        //           newNode.next = index.next
        //           index.next = newNode
        //      } 
        //       this.size++
        // }
            
    }
    
    const li = new LinkedList()
    
    li.add(20)
    li.add(11)
    // li.add(13)
    // li.add(20)
    // li.add(23)
    // li.add(56)
    // li.insertFirst(10)
    // li.insertFirst(5)
    // li.insertFirst()
    // li.reverse()
    li.printList()
    // li.insertAt(1,1)
    console.log(li)

    // //************************************************** */

//     // [1,2,3,4,5]
// // [1,2,3,4]
// // [1,2,3]
// // [1,2,3,5]
// // Reverse linked list

// class Node{
//     constructor(data){
//        this.data = data
//        this.next = null  
//     }
// }

// class LinkedList{
//     constructor(){
//         this.head= null
//         this.size=0
//     }
//     addNode(data){
//         let node = new Node(data)
//         if(this.head==null)  this.head = node
//         else {
//             let current = this.head
//             while(current.next != null){
//                 current = current.next
//             }
//             current.next = node
//         }
//         this.size++
//     }
//     printList(){
//         let list = ""
//         let node = this.head
//         while(node != null){
//             list+=node.data + " "
//             node  = node.next
//         }
//         console.log(list)
//     }
//     reverseList(){
//         let prev = null
//         let next = null
//         let current = this.head     // 10 50 60 70 80
//         while(current != null){   //  10 N 
//             next = current.next
//             current.next = prev
//             prev = current 
//             console.log("prev:",prev)
//             console.log("next:",next)
//             current = next
//         }
//         this.head = prev
//     }

// }
// let linkeddata =new LinkedList()
// linkeddata.addNode(10)
// linkeddata.addNode(50)
// linkeddata.addNode(60)
// linkeddata.addNode(70)
// linkeddata.addNode(80)
// linkeddata.reverseList()
// linkeddata.printList()

// console.log(linkeddata)

   