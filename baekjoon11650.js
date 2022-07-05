const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
input.shift();

array = input.sort((a, b) => {
    if(Number(a.split(" ")[0]) === Number(b.split(" ")[0])) {
        return Number(a.split(" ")[1]) - Number(b.split(" ")[1]);
    } else {
        return Number(a.split(" ")[0]) - Number(b.split(" ")[0]);
    }
})

console.log(array.join("\n"));