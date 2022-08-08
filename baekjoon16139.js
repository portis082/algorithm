const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const string = input.shift();
const N = Number(input.shift());
const result = [];
const prefixSum = [];

const array = input.map((el) => {
    const element = el.split(" ").map((innerEl, idx) => {
        if(idx !== 0) {
            return Number(innerEl);
        } else {
            return innerEl;
        }
    });
    return element;
});

let count = 0;
for(let i=0; i<string.length; i++) {
    if(string[i] === array[0][0]) {
        count++;
    }
    prefixSum.push(count);
}

array.forEach((el) => {
    if(el[1] === 0) {
        result.push(prefixSum[el[2]]);
    } else {
        result.push(prefixSum[el[2]] - prefixSum[el[1]-1]);
    }
});
console.log(result.join("\n"));