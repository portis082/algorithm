const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const axisArray = [];
let count = 0;

recursion(axisArray, N);
console.log(count);

function recursion(array, n) {
    if(n === 0) {
        count++;
        return;
    }

    for(let i=0; i<N; i++) {
        const newArray = [...array];
        if(newArray.length === 0) {
            newArray.push(i);
            recursion(newArray, n-1);
        } else {
            let boolean = true;
            for(let j=0; j<newArray.length; j++) {
                if(newArray[j] === i) {
                    boolean = false;
                    break;
                }
                if(newArray.length - j === newArray[j] - i) {
                    boolean = false;
                    break;
                }
                if(newArray.length - j === i - newArray[j]) {
                    boolean = false;
                    break;
                }
            }
            if(boolean) {
                newArray.push(i);
                recursion(newArray, n-1);
            }
        }
    }
}