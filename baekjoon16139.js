const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const string = input.shift();
const N = Number(input.shift());
const result = [];
const prefixSumObj = {};

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

array.forEach((el) => {
    if(!(el[0] in prefixSumObj)) {
        let count = 0;
        const prefixSum = [];
        for(let i=0; i<string.length; i++) {
            if(string[i] === el[0]) {
                count++;
            }
            prefixSum.push(count);
        }
        prefixSumObj[el[0]] = prefixSum;
    }

    if(el[1] === 0) {
        result.push(prefixSumObj[el[0]][el[2]]);
    } else {
        result.push(prefixSumObj[el[0]][el[2]] - prefixSumObj[el[0]][el[1]-1]);
    }
});
console.log(result.join("\n"));