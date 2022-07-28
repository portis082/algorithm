const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
let result = 1;

if(N === 0) {
    console.log(result);
} else {
    recursion(1);
}

function recursion(n) {
    result *= n;

    if(n === N) {
        console.log(result);
        return;
    } else {
        recursion(n + 1);
    }
}