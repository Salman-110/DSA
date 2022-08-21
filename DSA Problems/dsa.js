// // Q1. Write a function to find min No. from an Array.

function minNum(array) {
    let currentMin = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < currentMin) {
            currentMin = array[i]
        }
    } return currentMin
}
let result = minNum([8, 5, 7, 2, 3, 9, 4])
// console.log(result)

// //********************************************************** */

// //Q2. finding min no.
// // [4,3,2,5]
function ascOrder(array) {
    for (let i = 1; i < array.length; i++) {
        let outerNo = array[i];

        for (let j = 0; j < i; j++) {
            let innerNo = array[j];

            if (outerNo < innerNo) {
                array[i] = innerNo
                array[j] = outerNo

            }
        }
    } return
}

// let results = [3,4,5,6,7,8,9,1,55,22,5,7,9,0,8,33]
// console.log(results.sort())

// // ****************************************

// var Arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// for (var i = 1; i < Arr.length; i++)

//     for (var j = 0; j < i; j++)

//         if (Arr[i] < Arr[j]) {

//             var x = Arr[i];

//             Arr[i] = Arr[j];

//             Arr[j] = x;
//         }

// // console.log(Arr);

// //************************************************* */

// // Q3. FInd the even numbers from 1-20

// function filterEvenNum(numbers) {
//     let evenNumbers = []

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i])
//         }
//     } return evenNumbers
// }

// let finalArray = filterEvenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

// // console.log(finalArray)

// //*********************************************************************** */

// //Q4. finding square of the numbers exist or not 
// // [1,2,3] -> [1,4,9]

// function isSquareExist(arr, arr1) {

//     for (let i = 0; i < arr.length; i++) {
//         let isSquare = false;
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr[i] * arr[i] === arr1[j]) {
//                 isSquare = true
//             }
//             if (j === arr1.length - 1) {
//                 if (!isSquare) {
//                     return false
//                 }
//             }
//         }
//     } return true
// }
// // let isSquareNum = isSquareExist([1, 2, 2, 3], [1, 9, 4, 4])
// // console.log(isSquareNum)


// /********************************************************* */

// // Q. is Square available in second array
// // [1,2,3] -> [1,4,9]   (counting frequency)

// function findSq(arr, arr1) {

//     for (let i = 0; i < arr.length; i++) {
//         let isSquare = false;
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr[i] * arr[i] == arr1[j]) {
//                 isSquare = true;
//             }
//             if (j === arr1.length - 1) {
//                 if (!isSquare) {
//                     return false
//                 }
//             }
//         }
//     }
//     return true
// }

// // let isSquareNum = findSq([1, 2, 2, 3],[1, 9, 4, 4])
// // console.log(isSquareNum)  


// // ***********************************************************************
// // Q4. Finding anagram
// // ->'hello' 'olleh'
function isAnagramm(string1, string2) {
    if (string1.length !== string2.length) {
        return "ITS NOT ANAGRAM"
    }
    let counter = {}
    for (let letter of string1) {
        counter[letter] = (counter[letter] || 0) + 1

    }
    for (let item of string2) {

        if (!counter[item]) {
            return "OOPPS!! IT NOT ANAGRAM"
        }
    }
    return "YEAH!!! ANAGRAMM."
}

let result5 = isAnagramm('hello', 'ollhh')
console.log(result5)

function isAnagram(a, b) {
    let str1 = a.split("").sort().join("")

    let str2 = b.split("").sort().join("")

    if (str1.length !== str2.length) {
        return "NO"
    }
    if (str1 = str2) {
        return "YES"
    }
    else {
        return "NO"
    }
}






// //*********************************************************************** */

// // Q. finding pair with sum zero in an unsorted array

function sumZero(array) {

    for (let numbers of array) {
        for (let i = 1; i < array.length; i++) {
            if (numbers + array[i] === 0) {
                return [numbers, array[i]]                     //time complexity is high due  to 2 for loops (quadratic time complaxity)
            }
        }
    }
}

let result6 = sumZero([-7, -8, -5, -4, -2, 0, 1, 3, 4, 8, 5])
// console.log(result6)

// // OutPut = [ -4, 4]

// // ***************************************************************
// // Q. finding pair with sum zero in an sorted array       2nd Solution for above problems
// // [-7,-8,-5,-4,-2,0,1,3,4,9]

function sumOfPairZero(array) {

    let left = 0;
    let right = array.length - 1;
    while (left < right) {


        if (array[left] + array[right] === 0) {
            return [array[left], array[right]]
        }
        else if (array[left] + array[right] > 0) {
            right--;
        }
        else {
            left++;
        }
    } return false
}

let result7 = sumOfPairZero([-9, -8, -5, -4, -2, 0, 1, 7, 8])
// console.log(result7)

//****************************************************************** */
findTriplets = (arr2, n) => {
    let arr = arr2.sort((a, b) => a - b)

    for (let left = 0; left < n - 2; left++) {
        let right = n - 1;
        let mid = left + 1

        while (mid < right) {
            if (arr[left] + arr[mid] + arr[right] > 0) {
                right--;
            }
            else if (arr[left] + arr[mid] + arr[right] < 0) {
                mid++;

            } else
                return true
        }
    }
    return false
}
// console.log(findTriplets([0, -1, 2, -3, ],5))   

// // **********************************************************************

// // Q. Sorting Unique number from an array.

// // [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,]

function sortUnique(array) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j]

        }

    }
    return array.splice(0, array[i])
}

// let result8 = sortUnique([1,1,2])
// console.log(result8)

// // OutPut - [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // *************************************************************************************
// var twoSum = function (numbers, target) {

//     let arr = []
//     for (let i = 0; i < numbers.length; i++) {

//         for (let j = 1; j < numbers.lenght; j++) {
//             console.log(numbers[i])
//             if (numbers[i] + numbers[j] == target) {
//                 arr.push(i + 1, j + 1)

//             }
//         }
//     }
//     return arr
// };

// // let result9 = twoSum([2,4,6,8],6)
// // console.log(result9)


// var twoSum = function (numbers, target, i = 0, j = numbers.length - 1) {
//     while (numbers[i] + numbers[j] !== target)
//         (numbers[i] + numbers[j] > target) ? j-- : i++
//     return [i, j]
// };

// // let result9 = twoSum([2,4,6,8],6)
// // console.log(result9)


// // **********************************************
// // Q. Counting largest sum of consecutive digits
// // [1,2,3,4,5,6,7,8,9] ,4

// // 10 - 4 = 5 + 1

// var romanToInt = function (s) {
//     var dict = {
//         'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
//     };

//     var result = 0;
//     var intVal = 0;
//     var nextIntVal = 0;
//     for (var i = 0; i < s.length; i++) {
//         intVal = dict[s[i]];

//         if (i != s.length - 1) {
//             nextIntVal = dict[s[i + 1]];
//             if (nextIntVal > intVal) {
//                 intVal = nextIntVal - intVal;
//                 i = i + 1;
//             }
//         }
//         result = result + intVal;
//     }
//     return result;
// }
// // let ok= romanToInt(X)
// // console.log(ok)


// // ********************************************
// // reverse an array


// function revStr(str) {

//     let arr = str.split("")

//     let s = arr.reverse();
//     str = s.join("")

//     return str
// }
// // console.log(revStr("123"))

// ///888888***************************************
//Q. find the odd number from an array
function print(arr, n) {
    //code here
    let arr1 = [];
    for (let i = 0; i < n; i = i + 2) {
        arr1.push(arr[i]);

    }
    return arr1
}
// let result10 = print([1,2,3,4,5,6,7,8,9], 9)
//  console.log(result10)



// // **************************************

function valueEqualToIndex(arr, k) {
    //code here
    let number = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            number.push(i)
        }
    }
    return number
}


// let result11 = valueEqualToIndex([2, 5, 5, 34, 22,45,4],8)
// console.log(result11)

// // **************************************************

function secondLargeNum(arr = []) {

    let temp = 0
    let temp2 = 0

    for (let i = 0; i < arr.length; i++) {
        if (temp < arr[i]) {
            temp2 = temp
            temp = arr[i]
        }
        else if (arr[i] > temp2) {
            temp2 = arr[i]
        }

    }
    return temp2
}
let result12 = secondLargeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 22, 67])
//  console.log(result12)

function getSecondLargest(nums) {
    var flarge = 0;
    var slarge = 0;

    for (var i = 0; i < nums.length; i++) {
        if (flarge < nums[i]) {
            slarge = flarge;
            flarge = nums[i];
        } else if (nums[i] > slarge) {
            slarge = nums[i]

        }
    }
    return slarge;
}

// let result12 = getSecondLargest([1,2,3,4,5,6,7,8,9,1,22,65,89,65])
//  console.log(result12)

// // ***********************************************************************

// // Q. Checking the number is palindromic or not 
// //  eg. rotor   madam  racecar

// function palindromicStr(str) {

//     let arr = str.split("").reverse().join("")

//     if (str === arr) {
//         return 1
//     }
//     return arr
// }

// console.log(palindromicStr(112))

// // ********************************************************************************************
// //   Q. Count of the smaller elements
// //  [1,2,2,4,5,6,8]  x= 7    output=> 6

// function smallCount(arr, x) {

//     let count = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= x) {
//             count++
//         }
//     }
//     return count
// }

// // console.log(smallCount([1,2,3,4,4,5,5,6,9],8))

// // ****************************************************************
// // Q.find the longest word in a string

// function longWord(str) {

//     let strr = str.split(' ')
//     let longestWord = 0
//     let word = null
//     for (let i = 0; i < strr.lenght; i++) {
//         if (strr[i].length > longestWord) {
//             longestWord = strr[i].lenght
//             word = strr[i]
//         }
//     }
//     return word
// }

// // console.log(longWord("salman is handsome boy"))

// // ******************************************************
// function findLongestWord(name) {
//     let names = name.split(' ')

//     var longestWord = 0;
//     let word = null
//     for (var i = 0; i < names.length; i++) {
//         if (names[i].length > longestWord) {
//             longestWord = names[i].length;
//             word = names[i]
//         }
//     }
//     return word;
// }
// //   console.log(findLongestWord("The, quick , brown ,fox, jumped , overrrr ,the ,lazy, dog"));

// //   ********************************************************************
// //Q. Swap the kth element

// function swapEle(arr, k) {

//     let left = k
//     // console.log(left)

//     let right = arr.length - k + 1
//     // console.log(right)
//     let temp = right
//     right = left
//     left = temp 


// }
// // console.log(swapEle([1,2,3,4,5,6,7,8],3))


// function swapKth(arr, n, k) {
//     let temp = arr[k - 1];
//     arr[k - 1] = arr[n - k];
//     arr[n - k] = temp;

// }

// // console.log(swapKth([1,2,3,4,5,6,7,8],8,3))

// // *********************************************************8
// // Q. Find the number greter then and less then the given number in an array

// function findL_G(arr, x) {

//     let less = 0
//     let great = 0


//     for (let i = 0; i < arr.length; i++) {

//         if (x >= arr[i]) {
//             less++

//         }
//         if (x <= arr[i]) {
//             great++
//         }

//     }
//     let output = []
//     output[0] = less
//     output[1] = great
//     return output
// }

// // console.log(findL_G([1, 2, 3, 4, 5, 6, 7, 8], 5))

// // 88888888********************************************************************\
// // Given an array of integers Arr of size N and a number K. Return the maximum sum of a subarray of size K.
// // SLIDING WINDOW
// // [1,2,3,4,5,6,7,8,9]  ,k=3



// // ****************************************************************
// // function upperCaseConvert(str){
// // let ch = str.split("");
// //         for (let i = 0; i < str.length; i++) {

// //             // If first character of a word is found
// //             if (i == 0 && ch[i] != ' ' ||
// //                 ch[i] != ' ' && ch[i - 1] == ' ') {

// //                 // If it is in lower-case
// //                 if (ch[i] >= 'a' && ch[i] <= 'z') {

// //                     // Convert into Upper-case
// //                     ch[i] = String.fromCharCode(ch[i].charCodeAt(0) - 'a'.charCodeAt(0) + 'A'.charCodeAt(0));
// //                 }
// //             }

// //             // If apart from first character
// //             // Any one is in Upper-case
// //             else if (ch[i] >= 'A' && ch[i] <= 'Z')

// //                 // Convert into Lower-Case
// //                 ch[i] = String.fromCharCode(ch[i].charCodeAt(0) + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));          
// //         }

// //         // Convert the char array to equivalent String
// //         let st = (ch).join("");
// //         return st;

// //     }

function palindromicStr(num) {

    let numm = String(num).split('').map(Number)         //Converted Number into string
    let arr = numm.reverse().join("")

    if (num == arr) {
        return 1
    }
    return 0
}

// console.log(palindromicStr(122))


duplicateArr = (array) => {
    for (let i = 1; i < array.length; i++) {
        let outerNo = array[i];

        for (let j = 0; j < i; j++) {
            let innerNo = array[j];


            if (outerNo = innerNo) {
                array[i] = innerNo
                array[j] = outerNo

            }
        }
    } return array
}
// console.log(duplicateArr([0,0,1,2,2,2,3,3,4,4,5,5]))
//                         [0,1,2,3,4,5]

swapEle = (arr) => {

}
//**************************************************************** */

printFirstNegativeInteger = (n, k, arr) => {
    // code here
    let arrr = [];
    let i = 0;
    let j = 0;
    while (j < arr.length) {
        if (j - i + 1 < k) {
            j++;
        }
        else if (j - i + 1 == k) {
            if (arr[j] < 0) {
                arrr.push([arr[j]])
                console.log(arrr)
                continue;
            }
        }
    }
}


//**********************************************************************/
// Q.Given an array of repeated elements, return the most repeated element from the array.  
//[1,5,7,2,8,3,9,2,8,3,8,1,6,8,3,8,4,8]

mostRepeated = (arr) => {
    let map = new Map()

    for (let i in arr) {
        if (map.get(arr[i]) == undefined) map.set(arr[i], 1)
        else map.set(arr[i], map.get(arr[i]) + 1)
    }
    let repeatedElem = 0
    let count = 0
    for (let elem of map) {
        if (elem[1] > count) {
            count = elem[1]
            repeatedElem = elem[0]
        }
    }
    return repeatedElem
}
// console.log(mostRepeated([1,5,7,2,8,3,9,2,8,3,8,1,6,8,3,8,4,8])) //  -> 8 most repeated


//Write a function to merge these two arrays & result should be like this -
let array1 = [
    { name: "a", value: 123 },
    { name: "b", value: 666 },
];
let array2 = [
    { name: "c", value: 444 },
    { name: "d", value: 999 },
    { name: "b", value: 111 },
];
// result: [
// { name: "a", value: 123 },
// { name: "b", value: 111 },
// { name: "c", value: 444 },
// { name: "d", value: 999 },
// ];
let result1 = [...array1, ...array2]

let result2 = result1.slice(0, 4)
result2[1].value = 111
// console.log(result2)







//************************************************************************** */

// Count array elements that divide sum of all other elements

// Given an array of integers, find the number of elements in the array, which divide the sum of all other elements.



// Input:

//     5

//     3 10 4 6 7  output -> 3

function solution(a, b) {
    //Write your solution here
    let sum = 0
    let count = 0
    for (let i in b) {
        sum += b[i]
    }
    for (let j in b) {
        if ((sum - b[j]) % b[j] == 0) {
            count++;
        }
    }
    return count
}


//******************************************************************************** */

//find index of given number from array
//[2,3,6,3,8,5,2]   N=5  outpu -> 5

isIndex = (arr, N) => {
    let index = ""
    for (let i in arr) {
        if (arr[i] == N) {
            index += i + "  "

        }
    }
    return index.length > 0 ? index : false
}
// console.log(isIndex([2,3,4,2,5,6,7],0))

//*******************************************************************8 */

//find missing number in an aaray with random numbers

var a = [5],
    count = 10,
    missing = [];

for (var i = 1; i <= count; i++) {
    if (a.indexOf(i) == -1) {
        missing.push(i);
    }
}
// console.log(missing)

//******************************************************************* */
// "listen"-> "silent"
checkAnagrams = (str, strr) => {

    if (str.length != strr.length) return false

    let map = {}
    for (let item of str) {
        map[item] = (map[item] || 0) + 1
    }
    console.log(map)
    for (let letter of strr) {
        if (!map[letter]) return false
    }
    return true
}
let outputt = checkAnagrams("leeeee", "eeeeee")
// console.log(outputt)

//********************** */
isAnagramm = (str1, strr2) => {

    let str = String(str1).split('')
    let strr = String(strr2).split('')

    if (str.length != strr.length) return false

    let map = new Map()
    for (let item in str) {
        if (map.get(str[item]) === undefined) map.set(str[item], 1)
        else (map.set(str[item], map.get(str[item]) + 1))
    }
    console.log(map)
    for (let elem in strr) {
        if (map.get(strr[elem]) == undefined) return false
        else (map.set(strr[elem], map.get(strr[elem]) - 1))
    }
    console.log(map)
    for (let i of map) {
        if (i[1] != 0) return false
    }
    return true
}

//  console.log(isAnagramm(121232,121232))




// GIven an array return elemnent by diffreene of arr size and its frequency
// [1,2,3,4,5,6,7,8]

lengthyFrqelem =(arr)=>{
     let map ={}
     for(let i of arr){
        map[i] = map[i] + 1 || 1
     }
     for(let i in arr){
        arr[i]= arr.length - map[arr[i]]
     }
     return arr
}
// console.log(lengthyFrqelem([1,2,5,2,2,5,4]))  //->  [6, 4, 5, 4,4, 5, 6]
//"salsal"
 isHalves=(str)=>{
    if(str.length%2 != 0)  return "no"

    let map ={}
    for(let i in str){
        if(i<str.length/2){
            map[str[i]] = map[str[i]] + 1 || 1
        }else{
            if(map[str[i]]){
                 map[str[i]]--;
            }else{
                return "no"
            }
        }
    }
    return "yes"
 }
//  console.log(isHalves("sa1sa1"))


reverse=(word)=>{
    let wordd = ""
    for(let i=word.length;i=0;i--){
        wordd+=word[i]
    }
return wordd
}
let result51 = reverse("heyy")
// console.log(result51)


class node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class LinkedList{
    constructor(data){
        this.head = data
        this.size = 0
    }

    addNode(data){                            // 1
        let newNode = new  node(data)
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
    add1st(data){                           // 1-->2-->3-->5-->6
         let newNode = new node(data)
         newNode.next = this.head
         this.head = newNode
         this.size++
    }
    transverse(required){
        let node = this.head
        let counter = 0
        while(counter != required){
            counter++
            node = node.next
        }
        return node
    }
    addAtIndex(data,index){
        let newNode = new node(data)
        let current = this.transverse(index-1)
        let nextNode = current.next
        current.next = newNode            
        newNode.next = nextNode
        this.size++
    }

    // reverseList(){                                // 1-->2-->3-->5-->6
    //      let first = this.head
    //      let second = first.next

    //      while(second){                          // 2-->1
    //         let temp = second.next
    //         second.next = first
    //         first = second
    //         second  = temp
    //     }
    //     this.head.next = null
    //     this.head = first
    // }
                                          // n  c  p 
     reverseList(){                      // 1--2--3--4--5
          let prev = null
          let current = this.head
          let next = null
          while(current != null){
              next= current.next
              current.next = prev
              prev = current
              current = next
          }
          this.head = prev
     }
    deleteNode(index){                           // 1-->2-->3-->5-->6
         let leaderNode = this.transverse(index-1)
        let  nextNode= leaderNode.next  
              let nextestNode = nextNode.next
              leaderNode.next = nextestNode
              this.size--
    }

    deleted1stNode(){                   // 1-->2-->3-->5-->6
         if(this.size == 0){
             return "Empty Stack!!!!!"
         }
         let current = this.head
         current= current.next
         current.next =  null
         this.size--
    }
     deleteLastNode(){ 
        if(this.size ==1){
             this.head = null
             this.size--
        } 
        if(this.size==0) return console.log("List Empty!!" )             //1--2--3--4--Null
        let current = this.head
        let prev;
        while(current.next){
              prev = current
              current = current.next
        }
         prev.next = null
         this.size--
    }


    printList(){
        let list = ""
        let node = this.head
      
        while(node != null){
            list+=node.data + " "
            node = node.next
        }
        console.log(list)
    }
}

const ll =new LinkedList()
ll.addNode(10)
ll.addNode(20)
ll.add1st(5)
ll.addAtIndex(15,2)
// ll.deleteNode(2)
ll.reverseList()
// ll.deleteLastNode()
// ll.deleteLastNode()
// ll.deleteLastNode()
// ll.deleteLastNode()

// ll.deleted1stNode()
ll.printList()
// console.log(ll)


// hi amit bro -->>  ih tima orb
reverseElem=(wordd)=>{
    let word = wordd.split("")
     let left = 0
     let right = word.length-1 
     while(left<right){
          [word[left],word[right]] = [word[right],word[left]]
          left++
          right--
     }
     return word.join("")
}
// console.log(reverseElem("word"))

function revrse(str){
     
    let str1 = str.split(" ")
    console.log(str1)
    for(let i=0;i<str1.length;i++){
       str1[i]=reverseElem(str1[i]) 
    }
    return str1.join(" ")
}
// console.log(revrse("hii amit bro"))

findMinMax=(array)=>{
    
     let great = array[0]
     let small=array[0]
     for(let i=0;i<array.length;i++){
        if(array[i]>great){
            great = array[i]
        }else if(array[i]<small){
            small = array[i]
        }
     }
       return  {small,great}
}
console.log(findMinMax([1,2,3,4,5,6,7,8,9]))


function subArray(n)
{
      
    // Pick starting point
    for(let i = 0; i < n; i++)
    {
           
        // Pick ending point
        for(let j = i; j < n; j++)
        {
              
            // Print subarray between current
            // starting and ending points
            for(let k = i; k <= j; k++)
                document.write(n[k] + " ");
                  
              document.write("</br>");
        }
    }
    return 
}
// console.log(subArray([1,2,3,4]))

let merge=(leftArr,rightArr)=>{
    let i=0;
    let j=0;
    let result=[]
    
      while(i<leftArr.length &&j<rightArr.length){
        let left = leftArr[i]
        let right = rightArr[i]
          if(left<right){
              result.push(left)
              left++
          }else{
              result.push(right)
              right++
          }
      }
      return [...result,...leftArr.slice(left),...rightArr.slice(right)]
}

sort=(arr)=>{
    if(arr.length <= 1) return arr
     let mid = parseInt(arr.length/2)
     let left = arr.slice(0,mid)
     let right = arr.slice(mid)
     
    return  merge(
        sort(left),
        sort(right)
   )
}
console.log(sort([6,7,8,5,4,3,9,0,2,1]))



























































































































































































































































































































































































































































