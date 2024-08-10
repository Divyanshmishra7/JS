function Vowels(word)
{
    let count =0;
for(const vowel of word)
{
    if(vowel==="a"||vowel==="e"||vowel==="i"||vowel==="o"||vowel==="u")
    {
    count++;
    }
}
console.log(count);

}

Vowels("Hello")


let func= (str) => {
    let count =0;
for(const vowel of str)
{
    if(vowel==="a"||vowel==="e"||vowel==="i"||vowel==="o"||vowel==="u")
    {
    count++;
    }
}
console.log(count);
}

func("hello")



//square of each number using forEach

let arr9 = [1,2,3,4];

arr9.forEach((val) => {
    let square = val*val;
    console.log(square);
});


//max of an array 

let array = [99,96,25,88,76,97];
let new_array = array.filter((val) =>
{
return val>90;
});

console.log(`Max values array is ${new_array}`);




// let n = prompt("Enter Size of an Array : ");

// let Array3= [];
// for(let i=1; i<n;i++)
// {
//     Array3[i-1]=i;
// }
// console.log(Array3);

// let array3 = [10,10,10];
// let sumofarray = array3.reduce((prev,curr)=>
// {
// return prev*curr;
// });

// console.log(sumofarray);

//factorial of a number

let number = prompt("enter a number :");
let fact_arr = [];
for(let i=1;i<=number;i++)
{
    fact_arr[i]=i;
}

let fact = fact_arr.reduce((prev,curr) =>
{
return prev*curr;
})

console.log(fact);