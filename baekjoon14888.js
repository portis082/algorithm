const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
const operator = input[2].split(" ").map(Number);

let max = undefined;
let min = undefined;

recursion(array[0], operator, 1)
console.log(max);
console.log(min);

function recursion(num, operArray, index) {
    if(index === N) {
        if(max === undefined) {
            max = num;
            min = num;
        }
        if(max < num) {
            max = num;
        }
        if(min > num) {
            min = num;
        }
        return;
    }
    
    for(let i=0; i<4; i++) {
        if(operArray[i] !== 0) {
            const newOperArray = [...operArray];
            newOperArray[i]--;
            if(i === 0) {
                recursion(num + array[index], newOperArray, index+1);
            }else if(i === 1) {
                recursion(num - array[index], newOperArray, index+1);
            }else if(i === 2) {
                recursion(num * array[index], newOperArray, index+1);
            }else if(i === 3) {
                let result = Math.trunc(num / array[index]);
                if(result === -0){
                    result = 0;
                }
                recursion(result, newOperArray, index+1);
            }
        }
    }
}