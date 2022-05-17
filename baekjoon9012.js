const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = input.shift();
const array = input;

for(let i=0; i<N; i++){
    const string = array[i].split("");
    const stack = [];

    while(string.length > 0) {
        if(string[0] === "(") {
            stack.push(string.shift());
        } else if(stack[stack.length-1] === "(") {
            stack.pop();
            string.shift();
        } else {
            break;
        }
        
    }

    if(stack.length === 0 && string.length === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}