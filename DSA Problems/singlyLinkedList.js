//node
class Node {
    //constructor

    constructor(element){
        this.element = element
        this.next = null
    }
}
class LinkedList {

    constructor(){
        this.head= null;
        this.size = 0;
    }
     add(element) {//10

        // create a new node
        var node = new Node(element);

        node = (20, null)

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
    
    printList(){
        var curr = this.head
        while (curr) {
            console.log(curr.element)
            curr = curr.next
        }
    }

    size_of_list(){
        console.log(this.size)
    }

    isEmpty() {
        return this.size === 0;
    }


    removeElement(element){
        var current = this.head;
        var prev = null;

        while(current != null){
            //compare the element with node.element
            if(current.element === element){
                if (prev == null){
                    this.head = current.next
                    current.next = null
                } else {
                    prev.next = current.next
                }

                this.size--;
                return current.element
            }
            prev = current;
            current = current.next
         }
    }
}

var l1 = new LinkedList();

console.log(l1.add(10))
