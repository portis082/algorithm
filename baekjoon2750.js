const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

input.shift();
const array = input.map(Number);

console.log(array.sort((a, b) => {
    return a-b;
}).join("\n"));