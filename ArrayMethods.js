let array = ["apple","banana","papaya","grapes"];

//adding items at end
array.push("apple");            //adding items at end
console.log(array);

//adding multiple items
array.push("rose","marrygold","lemon");
console.log("after multiple item addition in array:", array);

//deleting items at end

array.pop();
console.log(array);

//toString()

console.log(array.toString());

//concatenation = It joins multiple arrays of any type 
//Sequence is followed in this

arr1=["John","amit","shyam"];
arr2=["Ram","Ajay"];

arr3 = arr1.concat(arr2);

console.log(arr3);

console.log(arr1+arr2);     //this function concat and convert them to string

//deletion from start

let val = arr1.shift();
console.log(val);
console.log(arr1);

//addition at start 

let val1 =arr1.unshift("John");
console.log(arr1);

//slice() : it does not make changes in original array

let val3 =arr1.slice(1,2);
console.log(val3);

//splice() : make changes in original array

arr1.splice(0,2,101,102);
console.log(arr1);



