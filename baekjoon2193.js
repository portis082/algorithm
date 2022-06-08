const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");



let N = Number(input[0]);
let num = 0;
let count = 0;

let queue = [[1, 1]];

for(let i=0; i<N ;i++) {
    const newQueue = [];
    while(queue.length !== 0){
        const current = queue.shift();
        count++;
        if(current[1] === 1){
            newQueue.push([current[0]*10, 0]);
        } else {
            newQueue.push([current[0]*10, 0]);
            newQueue.push([current[0]*10 + 1, 1]);
        }
    }
    console.log(newQueue);
    queue = newQueue;
}

console.log(count);