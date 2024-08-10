//function is block of code, that get invoked when ever required
//it removes redundancy(repeatation)

function Hello(){                                       //Function without parameter
    console.log("Hello world");
}

Hello();


// function with single parameter

function myFunction(msg){
    console.log(msg)
}

myFunction("I Love JS");

//function with multi param

function Sum(x,y){
    
    console.log(`Sum of x and y: ${x+y}`);
}

Sum(2,3);

function Sum(x,y){
    
    s = x+y;
    return s;
}

Sum(2,3);
console.log(`sum of numbers: ${s}`);       //parameters of functios have block scope




//Arrow => function       : a variable in ehich a function is defined

let  arrowSum = (a,b) => {
    console.log(a+b);
}

arrowSum(2,3);

let arrowMulti = (a,b) => {
    console.log(a*b);

}

arrowMulti(2,3);

// arrow with return 

let arrowMul = (a,b) => {
    return a*b;
}
arrowMul(3,4);

//forEach loop method
//It is also known as higher order method or Function
//callback function : passing the function as param

arr5 = [1,2,3,4,5];
arr5.forEach(element => {
    console.log(element)
});


let arr6 = ["delhi", "mumbai","kolkata", "Chennai"];
function value()
{
    arr6.forEach(function(val){
    console.log(val);
}); 
}
value();

arr6.forEach((val,idx) => {
    console.log(val.toUpperCase(),idx);
});

function logValue (val){
    console.log(val);
}

arr6.forEach(logValue);



//Map method 
//similar to forEach, only difference is map creates a new array

arr6.map((val)=>
{
    console.log(val);
});

let newArray = arr6.map((val)=>
    {
        return val;
    });
    
    console.log(newArray);

//filter method  
//used to filter out the desired output

let arr7 = [1,2,3,4,5,6,7,8,9];

let newarr = arr7.filter((val) =>
{
    return val%2===0;
});

console.log(newarr);



//reduce method ; Performs some operations and reduces the array to a single value. eg. sum of array elements

let arr10 = [1,2,3,4,5,6,7,8,9,10];

// let output = arr10.reduce((res,val)=>
// {
// return res+val;
// });

// console.log(output);


let output1 = arr10.reduce((prev,curr)=>
    {
    return prev>curr ? prev:curr;
    });
    
    console.log(output1);