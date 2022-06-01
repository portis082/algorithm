const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = input[0].split(" ")[0];
const K = input[0].split(" ")[1];

const queue = [];
const result = [];

for(let i=1; i<=N; i++) {
    queue.push(i);
}

while(queue.length > 0) {
    for(let i=0; i<K-1; i++) {
        queue.push(queue.shift());
    }
    result.push(queue.shift());
}

console.log(`<${result.join(", ")}>`);