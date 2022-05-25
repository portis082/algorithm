const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

input.shift();

const numberSet = input.shift().split(" ").map((el) => Number(el));
const totalSum = input.shift();


const calculator = (array, total) => {
    let max = Math.max(...array);
    let min = 0;
    let mid = Math.ceil((max + min)/2);
    let result = 0;

    let sum = array.reduce((pre, el) => {
        return pre += el;
    }, 0)

    if(sum < total) {
        return max;
    }

    while(max > min && max !== min + 1) {
        mid = Math.ceil((max + min)/2);
        sum = array.reduce((pre, el) => {
            if(el <= mid) {
                return pre += el;
            } else {
                return pre += mid;
            }
        }, 0);

        if(sum <= total) {
            min = mid;
            result = mid;
        } else {
            max = mid;
        }
    }
    console.log(result);
}

calculator(numberSet, totalSum);