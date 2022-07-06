const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const array = input[1].split(" ").map(Number).sort((a, b) => {
    return a-b;
});
const target = input[3].split(" ").map(Number);
const result = Array(M).fill(0);

for(let i=0; i<M; i++) {
    let start = 0;
    let end = N-1;
    let mid = Math.trunc((start+end)/2);

    while(end >= start) {
        if(array[mid] === target[i]) {
            result[i] = 1;
            break;
        } else if(array[mid] > target[i]) {
            end = mid - 1;
        } else if(array[mid] < target[i]) {
            start = mid + 1;
        }
        mid = Math.trunc((start+end)/2);
    }
}

console.log(result.join("\n"));