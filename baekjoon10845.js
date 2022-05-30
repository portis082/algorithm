const fs = require("fs");
const array = fs.readFileSync("test.txt").toString().trim().split("\n");
const stack = [];

for(let i=1; i<array.length; i++) {
    if(array[i].includes("push")) {
        stack.push(array[i].split(" ")[1]);
    } else if(array[i] === "size") {
        console.log(stack.length);
    } else if(array[i] === "empty") {
        console.log(Number(stack.length === 0));
    } else if(stack.length === 0) {
        console.log(-1);
    } else if(array[i] === "front")  {
        console.log(stack[0]);
    } else if(array[i] === "back") {
        console.log(stack[stack.length - 1]);
    } else if(array[i] === "pop") {
        console.log(stack.shift());
    }
}
