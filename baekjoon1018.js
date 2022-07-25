const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
result = [];
const array = input.map((el) => {
    return el.split("");
});

for(let i=0; i<=N-8; i++) {
    for(let j=0; j<=M-8; j++) {
        result.push(check(i, j, array[i][j]));
    }
}

console.log(Math.min(...result));

function check(startI, startJ, string) {
    const result = [];
    let count = 0;
    const str1 = "BWBWBWBW";
    const str2 = "WBWBWBWB";
    for(let i=0; i<8; i++) {
        if(i%2 === 0) {
            for(let j=0; j<8; j++) {
                if(str1[j] !== array[startI + i][startJ + j]) {
                    count++;
                }
            }
        } else {
            for(let j=0; j<8; j++) {
                if(str2[j] !== array[startI + i][startJ + j]) {
                    count++;
                }
            }
        }
    }
    result.push(count);
    count = 0;
    for(let i=0; i<8; i++) {
        if(i%2 === 0) {
            for(let j=0; j<8; j++) {
                if(str2[j] !== array[startI + i][startJ + j]) {
                    count++;
                }
            }
        } else {
            for(let j=0; j<8; j++) {
                if(str1[j] !== array[startI + i][startJ + j]) {
                    count++;
                }
            }
        }
    }
    result.push(count);
    return Math.min(...result);
}