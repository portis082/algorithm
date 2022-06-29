const fs = require("fs");
let input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = input[0];

input = input.map((el) => {
    return el.split(" ").map(Number);
});

const result = {};
const queue = [1];
const visited = [];

while(queue.length>0) {
    const current = queue.shift();
    visited.push(current);

    array.map((el) => {
        if(el[0] === current && !visited.includes(el[1])) {
            queue.push(el[1]);
            result[el[1]] = el[0];
        }
        if(el[1] === current && !visited.includes(el[0])) {
            queue.push(el[0]);
            result[el[0]] = el[1];
        }
    });
}

for(let i=2; i<=N; i++){
    console.log(result[i]);
}