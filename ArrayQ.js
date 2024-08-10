// let marks = [10,20,30,40,50];
// let length= marks.length;
// let sum=0;
// for(let i=0; i<length;i++ )
// {
// sum=sum+marks[i];
// }
// average = sum/length;
// console.log(average);


//for of

// for(let mark of marks)
// {
//     sum=sum+mark;
// }
// average=sum/length;
// console.log(average);

let itemprice = [250,645,300,900,50];

for(let i=0; i<itemprice.length;i++)
{
        let totalprice = itemprice[i]/10;
        console.log(totalprice);
        discountedPrice = itemprice[i] - totalprice;
        console.log(`total discounted price = ${discountedPrice}`);
}