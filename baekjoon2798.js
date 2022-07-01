const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, MAX] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);
let result = 0;

for(let i=0; i<N-2; i++){
    for(let j=i+1; j<N-1; j++){
        for(let k=j+1; k<N; k++){
            let sum = array[i] + array[j] + array[k];
            if(sum <= MAX && result < sum) {
                result = sum;
            }
        }
    }
}

console.log(result);