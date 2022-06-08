const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

let N = Number(input[0]);

// let queue = [[1, 1]];

// for(let i=0; i<N-1 ;i++) {
//     const newQueue = [];

//     while(queue.length !== 0){
//         const current = queue.shift();

//         if(current[1] === 1){
//             newQueue.push([current[0]*10, 0]);
//         } else {
//             newQueue.push([current[0]*10, 0]);
//             newQueue.push([current[0]*10 + 1, 1]);
//         }
//     }
//     queue = newQueue;
// }

// console.log(queue.length);

const calculator = (n) => {
    const result = [BigInt(1), BigInt(1)];

    if(n < 3) {
        return 1;
    }
    
    for(let i=0; i<n-2; i++){
        result.push(BigInt(result[i] + result[i+1]));
    }

    console.log(result)
    return result[result.length - 1];
}

console.log(String(calculator(N)));