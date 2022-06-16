const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0])
const stack = [];

let count = 0;
let head = 0;
let answer = "";

for(let i=1; i<N+1; i++) {
    if(input[i].includes("push")) {
        stack.push(Number(input[i].split(" ")[1]));
        count++;
    } else if(input[i] === "size") {
        answer += count + "\n";
    } else if(input[i] === "empty") {
        answer += Number(count === 0) + "\n"
    } else if(count === 0) {
        answer += -1 + "\n"
    } else if(input[i] === "front")  {
        answer += stack[head] + "\n"
    } else if(input[i] === "back") {
        answer += stack[head+count-1] + "\n"
    } else if(input[i] === "pop") {
        answer += stack[head] + "\n"
        head++;
        count--;
    }
}
console.log(answer.slice(0, -1));
