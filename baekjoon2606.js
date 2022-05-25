const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

input.shift();

const numberSet = input.shift().split(" ").map((el) => Number(el));
const totalSum = input.shift();