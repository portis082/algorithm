const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

let array = [];
input.forEach((el) => {
    if(!Number(el) && el !== "0" && !(array.includes(el))) {
        array.push(el);
    }
});

array = array.sort((a, b) => {
    if(a.length === b.length) {
        return a.localeCompare(b);
    } else {
        return a.length - b.length;
    }
});

console.log(array.join("\n"));