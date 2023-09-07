// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

var age=28;
let name= "manikanta";

if (age<25){
  console.log(" eligible for jobs");
}else if(age>25){
    console.log("not eligible for jobs");
}else{
console.log("last chance for jobs");
}

let i = 0;
for(i=0;i<name.length; i++);
{
  console.log(name[i]+":"+name.charAt(i));
}


// let g = 0;
// while (g < age && age <= 30) {
//     console.log(name);
//     g++;
// }
let j = 0;
do {
    console.log(name);
    j++;
} while (j === 1 || (j % 2 === 0 && age % 2 === 0))


