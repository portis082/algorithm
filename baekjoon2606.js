const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

input.shift();
input.shift();

const linkSet = input.map((el) => {
    return el.split(" ").map(Number);
})

console.log(linkSet)

const stack = [1];

const current = stack.pop();

// linkSet.map((el) => {
//     if(stack.includes(el[0]) && !(stack.includes(el[1]))) {
//         stack.push(el[1]);
//     }
//     if(!(stack.includes(el[0])) && stack.includes(el[1])) {
//         stack.push(el[0]);
//     }
// })

// console.log(stack.length - 1);