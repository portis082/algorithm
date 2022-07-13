const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);
const prefixSum = [array[0]];

for(let i=1; i<array.length; i++) {
    prefixSum.push(prefixSum[i-1] + array[i]);
}

const result = [prefixSum[K-1]];

for(let i=K; i<prefixSum.length; i++) {
    result.push(prefixSum[i] - prefixSum[i-K]);
}

console.log(Math.max(...result));