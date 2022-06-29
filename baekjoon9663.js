const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const array = Array(N).fill(Array(N).fill(true));
const axisArray = [];
let count = 0;
console.log(array);


recursion(axisArray, N);


function recursion(array, n) {
    if(n === 0) {
        count++;
        return;
    }

    for(let i=0; i<N; i++) {
        if(array.length === 0) {
            array.push(i);
            recursion(array, n-1);
        } else {
            // for(let j=0; j<array.length; j++) {
            //     array[j] !== i && array.length - i !== 
            // }
        }
        // if() {

        // }
        let boolean 
        recursion(array, n-1);
    }
}

console.log(count);