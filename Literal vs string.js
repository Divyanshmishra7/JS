let obj = {
    item : "Book",
    Price : 10
};
console.log("Price of ", obj.item, "is", obj.Price, "Rupees");   //Simple way of accessing value of obj

let output = (`The Price of ${obj.item} is ${obj.Price} Rupees`);    //using Backtick (Template literals)

console.log(output);

console.log(`Sum of 2+5 = ${2+5}`);   //string Interpolation

document.write(output);
