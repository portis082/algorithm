const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = [Array(N+1).fill(0)];
const find = [];
const prefixSum = [];
const result = [];

for(let i=1; i<1+N; i++) {
    array.push([0].concat(input[i].split(" ").map(Number)));    
}
for(let i=1+N; i<1+N+M; i++) {
    find.push(input[i].split(" ").map(Number));
}

for(let i=0; i<N+1; i++) {
    const line = [];
    for(let j=0; j<N+1; j++) {
        if(i === 0) {
            if(j === 0) {
                line.push(array[i][j]);
            } else {
                line.push(line[j-1] + array[i][j]);
            }
        } else {
            if(j === 0) {
                line.push(prefixSum[i-1][j] + array[i][j]);
            } else {
                line.push(prefixSum[i-1][j] + line[j-1] + array[i][j] - prefixSum[i-1][j-1]);
            }
        }
    }
    prefixSum.push(line);
}

find.forEach((el) => {
    result.push(prefixSum[el[0]-1][el[1]-1] + prefixSum[el[2]][el[3]] - prefixSum[el[0]-1][el[3]] - prefixSum[el[2]][el[1]-1]);
});
console.log(result.join("\n"));