const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

input.shift();
const array = input.shift().split(" ");
input.shift();
const target = input.shift().split(" ");

target.map((el) => {
    console.log(Number(array.includes(el)));
})