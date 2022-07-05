const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input.shift());
const result = Array(N).fill(1);
const array = input.map((el) => {
    return el.split(" ").map(Number);
});

for(let i=0; i<N; i++) {
    for(let j=0; j<N; j++) {
        if(array[i][0] < array[j][0] && array[i][1] < array[j][1]) {
            result[i]++;
        }
    }
}

console.log(result.join(" "));