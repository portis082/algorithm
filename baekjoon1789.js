const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const max = Number(input.shift());

let result = 0;
let idx = 0;

while(max >= result) {
    idx++;
    result += idx;
}
console.log(idx-1);