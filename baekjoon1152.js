const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

let string = input[0].split(" ");

if(string[0] === "" && string.length === 1) {
    string = [];
}

console.log(string.length);