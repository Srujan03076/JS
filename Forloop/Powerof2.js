//Print the power of 2 table
const prompt = require("prompt-sync")();
let num = prompt("Enter a number");
let res=1;
for(let i =1;i<=num;i++)
{
    let pow2=Math.pow(2,i);
    res=res+"2 ^ "+ i + " = "+ pow2 +"\n";
}     
console.log(res);