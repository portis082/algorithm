const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const string = input[0].toUpperCase();
const obj = {};
let max = 0;
let result = [];

for(let i=0; i<string.length; i++) {
    if(!(string[i] in obj)) {
        obj[string[i]] = 0;
    }
    obj[string[i]]++;
}

for(let key in obj) {
    if(obj[key] > max) {
        max = obj[key];
        result = [key];
    } else if (obj[key] === max) {
        result.push(key);
    }
}

if(result.length > 1) {
    console.log("?");
} else {
    console.log(result[0]);
}