const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

input.shift();

const array = input.shift().split(" ").map((el) => Number(el));
const total = input.shift();

const b = array.reduce((sum, el) => {
    return sum += el;
})
const a = Math.max(...array);

console.log(b)
console.log(total)