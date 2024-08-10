let btn1 = document.querySelector("#btn1");
console.dir(btn1);
let a = 0;
btn1.onclick = () =>{
    console.log("button was clicked");
    a++;
    console.log(a);
}
let box = document.querySelector("#on");
let count = 0;
box.onmouseover =() => {
     count++;
     console.log(`count : ${count}`);
}