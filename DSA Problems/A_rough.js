// Checking Anangram

const e = require("express")

const anagram =(str1,str2)=>{
    let string1 = str1.split("").sort()
    let string2 = str2.split("").sort()

    if(string1.length != string2.length) return false

    for(let i in string1){
        if(string1[i] != string2[i]){
            return false
        }
        return true
    }
}
// console.log(anagram("silent","listan"))

// isAnagram Using Hashmap

isAnagram=(str1,str2)=>{
    if(str1.length != str2.length)  return "no anagram"
   let obj = {}
   for(let i of str1){
    if(obj[i]==undefined) obj[i]=1
    else obj[i]+=1
   }
   for(let i of str2){
    if(obj[i]== undefined) return false
    else obj[i]-=1
   }
   for(let i in obj){
    if(obj[i]==0){
        return true
    }
    return false
   }
}
// console.log(isAnagram("silent","lisaaan"))


/// BUBBLE SORT

 bubbleSort =(array)=>{
      for(let i=0;i<array.length;i++){
           let swap = true

           for(let j =0 ;j<array.length-2;j++){
            if(array[j]>array[j+1]){
                array[j] = array[j]+array[j+1]
                array[j+1] = array[j]-array[j+1]
                array[j] = array[j]-array[j+1]
                swap = true
            }
         
           }
           if(swap == false) break;
      }
      return array
 }
//  console.log(bubbleSort([3,4,5,6,7,8,3,2,1,8,4,8]))

// Q. FInd thet Unique Pairs of elem from an array with Sum K
// [1,2,3,4,5,6,7] , 6
// 1->5 , 2->4 

getPairsWithSumK = (arr , k)=>{
    let map = new Map()

    for(let i in arr){
     if(map.get(arr[i])== undefined) map.set(arr[i] , 1)
    else map.set(arr[i] , map.get(arr[i])+ 1)
    }
    console.log(map)
    let pair = new Map()
    for(let [key,value]  of map){
        if(map.get(k-key) && !(pair.has(key) || pair.has(k-key))){
            pair.set(key,k-key)
        }
  }
  return pair
}
// console.log(getPairsWithSumK([1,2,3,4,4,5,6,7],6))
// find most frequent elem and their count
let array = [2,3,3,3,4,5,6,3,7,5]
let obj ={}
let maxCount=0
let mostFreq=0

// for(let  i of array){
//     if(map[i]== undefined) map[i] = 1
//     else map[i]++

// if(map[i]>maxCount)
//   mostFreq= i
// }

// console.log(`most frequent elem:${mostFreq},maxCount:${maxCount}`)

// find elem freq > 1

function  highfre(str){
     let map = new Map()
   let result =""
     for(let i in str){
        if(map.get(str[i])== undefined)  map.set(str[i],1)
        else map.set(str[i], map.get(str[i])+1)
     }
     for(let pairs of map){
        if(pairs[1]>1) result+=pairs[0]
     }
     return result
}
// console.log(highfre("lssnsn"))

// second most freq elem

secfreq=(arr)=>{
  let map = new Map()
  
  for(let i in arr){
    if(map.get(arr[i])== undefined)  map.set(arr[i],1)
    else map.set(arr[i], map.get(arr[i])+ 1)
  }
  console.log(map)
  let prevMax =0
  let max =0
  for(let i of map){
    if(i[1]>max){
    prevMax = max
    max = i[1]
    }
  if(i[1]>prevMax && i[1]<max){
       prevMax = i[1]
  }}
  for(let pair of map){
    if(pair[1]==prevMax) prevMax = pair[0]
  }
  return prevMax
}
// console.log(secfreq([2,3,2,4,5,6,4,5,3,2,4,2,3,4,5,4,]))

missingElem=(arr)=>{
    let n =Math.max(...arr)
    let totalSum = n*(n+1)/2
    let sum =0
    for(let i=0;i<arr.length;i++){
       sum +=arr[[i]]
    }
    let missingNo = totalSum - sum
    return missingNo
}
// console.log(missingElem([1,2,3,4,5,7,8]))


missingNum =(arr)=>{
     let n = arr.length
     let total = ((n+2)*(n+1))/2
     for(let i=0;i<n;i++){
         total -= arr[i]
     }
     return total
}
// console.log(missingNum([1,2,3,4,5,6,7,8]))

let arr = [1,2,[3,4],5,6,[7,[8,9,[8]]]]

// arry =[]
flattenArr=(arr)=>{
 let arry =[]
  for(let i=0;i<arr.length;i++){
    if(arr[i] === undefined) continue;
    if(Array.isArray(arr[i])){
      flattenArr(arr[i])
      continue;
    }
    else{
      arry.push(arr[i])
      continue;
    }
  }
  return arry
}
// console.log(flattenArr([1,2,[3,4],5,6,[7,[8,9,[8]]]]))

// finding missing number from an array

function missNum(arr){
    let n = arr.length+1
    console.log(n)
    let totalSum = n*(n+1)/2

    let arrSum = 0
    for(let i=0;i<arr.length;i++){
       arrSum +=arr[i]
    }
    console.log(totalSum)
    console.log(arrSum)
    let missingNum = totalSum - arrSum
    return missingNum
}
// console.log(missNum([1,2,3,4,5,7,8,9]))

const arry = [1, 2, 1, 3, 8,7,9,4,7,9,6,9,0,4, 3, 5];

let unique = [...new Set(arry)]
// console.log(unique)

// filter out duplicate

const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const set = new Set(numbers);

const duplicates = numbers.filter(item => {
    if (set.has(item)) {
        set.delete(item);
    } else {
        return item;
    }
});

// console.log(duplicates);

// 
// How do you find all pairs of an integer array whose sum is equal to a given number?

const pairsWithSumK=(arr,k)=>{
    let map = new Map()

    for(let i in arr){
      if(map.get(arr[i])== undefined) map.set(arr[i],1)
      else map.set(arr[i],map.get(arr[i])+1)
}      
       let pairs = new Map()
     for(let [key,value] of map){
            if(map.get(k-key) && !(pairs.has(k-key) || pairs.has(key))){
              pairs.set(key,k-key)
            }
     }
     return pairs
}
// console.log(pairsWithSumK([1,2,3,4,5,3,2,6,7],9))

// Missing number from the array

function missno(arr){
  let n = arr.length
  let totalSum = n*(n+1)/2
  let sum =0
  for(let i=0;i<arr.length;i++){
     sum+=arr[i]
  }
  let result = totalSum-sum
  return result
}
// console.log(missingElem([1,2,3,4,6,5,8,9]))

// Sort arry without using inbuilt fumction  (bubble sort)
// [7,5,3,4,7,9,8,2,3,1]
let sortArry=(arr)=>{
    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
          if(arr[j]>arr[j+1]){
              arr[j]= arr[j]+arr[j+1]
              arr[j+1]=arr[j]-arr[j+1]
              arr[j]= arr[j]-arr[j+1]
          }
      }
    }
    return arr
}
// console.log(sortArry([7,5,3,4,7,9,8,2,3,1]))


//[1,2,[3,4],5,[6,[7,8],9],10]
let parentFlat=()=>{
let result=[]
let flattenArray=(arr)=>{

   for(let i=0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
      flattenArray(arr[i])
     }else{
      result.push(arr[i])
     }
   }
  }
  flattenArray(arr)
   return result
}
// console.log(parentFlat([1,2,[3,4],5,[6,[7,8],9],10]))


// filter out duplicate

let removeDuplicate=(arr)=>{
    let obj={}
    let result=[]
    for(let i in arr ){
      obj[arr[i]]=true
    }
    for(let key in obj){
      result.push(key)
    }
    return result
}
// console.log(removeDuplicate([1,2,4,6,7,8,9,3,2,4,5,6,7,8,9,11,100]))

//Flatten array

function flattenArray3(arr){
  let res=[]
  function helper(arr){
      for(let el of arr){
          if(Array.isArray(el))
          helper(el)
          else res.push(el)
      }
  }
  helper(arr)
  return res
}
// console.log(flattenArray3([1,2,[3,4],5,[6,[7,8],9],10]))

let flattenArr4=(arr)=>{
  result=[]
    let helper=(arr)=>{
        for(let i of arr){
          if(Array.isArray(arr[i]))
            helper(arr[i])
            else result.push(arr[i])
          }
    }
    helper(arr)
    return result
}
// console.log(flattenArray3([1,2,[3,4],5,[6,[7,8],9],10]))

// DSA  -- 6am - 10am
// Sliding window
// Array
// String
// recursion
// Linked list
// Hash map
// sorting - binary , bubble, merge

// CRUD Opration
// Api's Using Mongoose
// Api's Without mongoose
// Api's for SQL

// Theory        -- 11 am - 1pm  - 2pm - 5pm
// React           
// Javascript       
// Nodejs
// mongoDb
// Redis
// AWS-S3
// MySQL

const EventManage=()=>{
  console.log("start")

  setTimeout(()=>{
    console.log("Aftrer 2 sec")
  },2000)
  setTimeout(()=>{
    console.log("Aftrer 1 sec")
  },1000)
  setTimeout(()=>{
    console.log("Aftrer 5 sec")
  },5000)
  console.log("end")
}
// EventManage()

// Anagram string

const Anagram=(str,strr)=>{
  if(str.length != strr.length) return false
  let map = new Map()

  for(let i in str){
       if(map.get(str[i])==undefined) map.set(str[i],1)
       else(map.set(str[i], map.get(str[i])+1))
  }
  for(let i in strr){
    if(map.get(strr[i])==undefined)  return false
    else(map.set(strr[i], map.get(strr[i])-1))
  }

  for(let i of map){
    if(i[1]!=0) return false
  }
  return true
}
// console.log(Anagram('sslint','listen'))

// Number with max Frequency

const duplicateFreq=(arr)=>{
     let map = new Map()
     let maxFreq=0
     let prevmax=0
     let value =''
     for(let i in arr){
         if(map.get(arr[i])== undefined) map.set(arr[i],1)
         else map.set(arr[i],map.get(arr[i])+1)
     }
     console.log(map)
      for(let i of map){
        if(i[1]>maxFreq){
           prevmax=maxFreq
           maxFreq = i[1]
        }
      }
      for(let pairs of map){
         if(pairs[1] == prevmax) return pairs[0]
      }

     }
// console.log(duplicateFreq('aaabbbbcccccc'))

const maxSameElem=(str,strr)=>{
     let map= new Map()
     let count=0
     let value;
     for(let i in str){
         if(map.get(str[i])==undefined) map.set(str[i],1)
         else (map.set(str[i] , map.get(str[i])+1))
     }
     console.log(map)
      for(let i of map){
        if(i[1]>count){
          value = i[0]
          count=i[1]
        }
      }
      let obj = new Map()
      let count2 =0, value2;
    for(let i in strr){
      if(obj.get(strr[i])==undefined) obj.set(strr[i],1)
      else (obj.set(strr[i] , obj.get(strr[i])+1)) 
    }
    console.log(obj)
    for(let i of obj){
      if(i[1]>count2){
        value2 = i[0]
        count2=i[1]
      }
    }
    if(count == count2 && value == value2) return true
     return false

    }
    // console.log(maxSameElem('Yahoo', 'oohay'))

    // Merge Sort

    const mergeArr=(leftArr,rightArr)=>{
         let i =0
         let j = 0
         let result = []
         while(i<leftArr.length && j<rightArr.length){
               let left = leftArr[i]
               let right = rightArr[j]
               if(left<right){
                  result.push(left)
                  i++
               }else{
                result.push(right)
                j++
               }
         }
        //  console.log(result)
        //  console.log(leftArr)
        //  console.log(rightArr)
      
         return [...result,...leftArr.slice(i),...rightArr.slice(j)]
    }
    function divideArr(arr){
          if(arr.length<=1) return arr

          let middleElem = parseInt(arr.length/2)
          let leftArr = arr.slice(0,middleElem)
          let rightArr = arr.slice(middleElem)

          return mergeArr(
               divideArr(leftArr),
               divideArr(rightArr)
          )
    }
    // console.log(divideArr([9,8,7,6,5,4,3,2,1,0,10]))

  
// Linked List 

class Node{
     constructor(data){
       this.data = data
       this.next = null
     }
}

class LinkedList{
       constructor(){
        this.head = null
        this.size=0                            //  1-->2-->
       }
       addNode(data){
          let node = new Node(data)
        
          if(this.head == null){
                this.head = node
          }else{
              let current = this.head
              while(current.next != null){
                current = current.next
              }
              current.next = node
          }
          this.size++
       }
       insertFirst(data){
        const node = new Node(data)
          if(this.head = null){
            this.head = node
          }else{
            node.next =  this.head
            this.head= node
          }
          this.size++
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
            this.size++
        } else{
        let leaderNode = this.transverse(index-1)
        let nextNode = leaderNode.next
        leaderNode.next=newNode
        newNode.next = nextNode
        this.size++
       }
     } 
     
     deleteNode(index){                                  // 1 5 2 10 50 20
        let leaderNode = this.transverse(index-1)
        let unWantedNode = leaderNode.next
        let nextNode = unWantedNode.next
        leaderNode.next = nextNode
        this.size--
     }
     
     reverseList(){                     // 1 5 2 10 50 20
           let first = this.head        // 5 1 2
           let second = first.next
          while(second){
            let temp = second.next
              second.next = first
              first = second
              second = temp
          }
          this.head.next = null
          this.head = first
}
     printList(){
              let list = ""
              let node = this.head
              while(node != null){
                  list+=node.data + " "
                  node  = node.next
              }
              console.log(list)
          }
}
const ll = new LinkedList()

ll.insertFirst(5)
ll.addNode(10)
ll.addNode(20)
ll.insertAt(0,1)
ll.insertAt(2,2)
ll.insertAt(4,50)
ll.deleteNode(2)
ll.deleteNode(4)
ll.reverseList()
ll.printList()
// console.log(ll)

function insertionSort(arr,n)
{
    let i, key, j;
    for (i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;
  
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
            console.log("j",arr[j])
            console.log("J+1",arr[j+1])
        }

        arr[j + 1] = key;

    }
    return arr
}
// console.log(insertionSort([7,6,5,4,3,2,1],7))


 secondLargestElem =(arr)=>{
    let largest=0
    let secondLarge = 0

    for(let i=0;i<arr.length;i++){
      if(arr[i]>largest){
        secondLarge = largest
        largest= arr[i]
      }else if(arr[i]<largest && arr[i]>secondLarge){
        secondLarge = arr[i]
      }
    }
    return secondLarge
}
// console.log(secondLargestElem([7,8,9,6,5,4,3,6,8,9]))

class node{
   constructor(data){
    this.data = data
    this.next =null
  }
}

class newnode{
   constructor(data){
       this.data = data
       this.next = null
   }
}

class linkedlist{
    constructor(data){
        this.head =null
        this.size =0
    }

    addNode(data){
      let newNode = new newnode(data)
      if(this.head == null){
         this.head = newNode
      }else{
         let current = this.head
          while(current.next != null){
             current = current.next
          }
          current.next = newNode
      }
      this.size++
    }

    reverselist(){                                // 1-->2-->3-->4
       let first = this.head
       let second =first.next

       while(second){
        let temp =second.next
           second.next = first
           first = second
           second = temp
       }
       this.head.next = null
       this.head = first
    }

    print(){
        let list =" "
        let current=this.head
        while(current != null){
            list+=current.data + " "
            current = current.next
        }
        console.log(list)
    }
}

let LINKEDLIST = new linkedlist()
 LINKEDLIST.addNode(10)
 LINKEDLIST.addNode(20)
 LINKEDLIST.addNode(30)
 LINKEDLIST.addNode(40)
 LINKEDLIST.reverselist()
 LINKEDLIST.print()
//  console.log(LINKEDLIST)

const isPlaindromem=(str1,str2)=>{
    let map = new Map()

    for(let i in str1){
      if(map.get(str1[i]) == undefined) map.set(str1[i], 1)
      else map.set(str1[i], map.get(str1[i] + 1))
    }
    console.log(map)
    let Mapp = new Map()
    for(let i in str2){
      if(Mapp.get(str2[i]) == undefined) Mapp.set(str2[i], 1)
      else Mapp.set(str2[i], Mapp.get(str2[i] + 1))
    }
    console.log(Mapp)
    for(let i of map){
       
    }
} 
console.log(isPlaindromem('silnnt','listnn'))








