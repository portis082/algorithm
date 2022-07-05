const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
input.shift();

array = input.sort((a, b) => {
    if(a.split(" ")[0] === b.split(" ")[0]) {
        return a.split(" ")[1] - b.split(" ")[1];
    } else {
        return a.split(" ")[0] - b.split(" ")[0];
    }
})

console.log(array.join("\n"));