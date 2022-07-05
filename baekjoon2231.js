const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
let result = 0;

for(let i=0; i<N; i++){
    let sum = 0;

    sum += i;
    String(i).split("").forEach((el) => {
        sum += Number(el);
    });

    if(sum === N){
        result = i;
        break;
    }
}
console.log(result);