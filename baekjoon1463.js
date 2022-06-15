const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

let n = Number(input[0]);
let count = 0;

while(n !== 1) {
    console.log(n);
    if(n%3 === 0){
        n = n/3;
    } else if(n%3 === 1 && n%2 !== 0 || n%3 === 1 && ((n-1)%3)%3 === 0) {
        n = n-1;       
    } else if(n%2 === 0) {
        n = n/2;
    } else {
        n = n-1;
    }
    count++;
}

console.log(count);