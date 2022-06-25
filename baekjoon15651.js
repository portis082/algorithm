const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ");

let result = "";
const array = [];

for(let i=1; i<=N; i++) {
    array.push(i);
}

permutation("", M);
console.log(result.slice(0, -1));

function permutation(string, num) {
    if(num === 0) {
        result += string.slice(1) + "\n";
        return;
    }
    for(let i=0; i<array.length; i++){
        permutation(string + " " + array[i], num-1);
    }

}