const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const result = [0, 1];

if(N === 0) {
    console.log(result[0]);
} else if(N === 1) {
    console.log(result[1]);
} else {
    recursion(2);
}

function recursion(n) {
    result.push(result[n-1] + result[n-2])

    if(n === N) {
        console.log(result[n]);
        return;
    } else {
        recursion(n + 1);
    }
}