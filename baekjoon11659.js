const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const array = input[1].split(" ").map(Number);
const result = [];
const prefixSum = [array[0]];

for(let i=1; i<array.length; i++) {
    prefixSum.push(prefixSum[i-1] + array[i]);
}

for(let i=2; i<input.length; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    if(start === 1) {
        result.push(prefixSum[end-1]);
    } else {
        result.push(prefixSum[end-1] - prefixSum[start-2]);
    }
}

console.log(result.join("\n"));