const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const array = input.map(Number);
const stack = [];

for(let i=1; i<array.length; i++) {
    if(array[i] === 0) {
        stack.pop();
    } else {
        stack.push(array[i]);
    }
}

console.log(stack.reduce((sum, next) => {
    return sum + next;
}, 0));