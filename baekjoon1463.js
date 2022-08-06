const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const result = [0, 0];

for(let i=2; i<=N; i++) {
    const array = [result[i-1]];
    if(i%3 === 0) {
        array.push(result[i/3]);
    }
    if(i%2 === 0) {
        array.push(result[i/2]);
    }
    const min = Math.min(...array);
    result.push(min+1);
}
console.log(result[N]);