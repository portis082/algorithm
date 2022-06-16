const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0])
const queue = [];

let count = 0;
let answer = "";

for(let i=1; i<N+1; i++) {
    if(input[i].includes("push")) {
        queue.push(Number(input[i].split(" ")[1]));
        count++;
    } else if(input[i] === "size") {
        answer += count + "\n";
    } else if(input[i] === "empty") {
        answer += Number(count === 0) + "\n";
    } else if(count === 0) {
        answer += -1 + "\n";
    } else if(input[i] === "top") {
        answer += queue[count-1] + "\n";
    } else if(input[i] === "pop") {
        answer += queue.pop() + "\n";
        count--;
    }
}
console.log(answer.slice(0, -1));
