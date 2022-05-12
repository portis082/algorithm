// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const [N, L, R] = input.shift().split(" ").map(Number);
// const array = input.map((i) => {
//     return i.split(" ").map(Number);
// });





// const N = 2;
// const L = 20;
// const R = 50;

// let array = ["50 30",
//     "20 40"];

//     const N = 4;
// const L = 10;
// const R = 50;

// let array = [
//     "10 100 20 90",
//     "80 100 60 70",
//     "70 20 30 40",
//     "50 20 100 10"
// ];

const N = 3;
const L = 5;
const R = 10;

let array = [
    "10 15 20",
    "20 30 25",
    "40 22 10"]

array = array.map((el) => {
    return el.split(" ").map(Number)
})


let result = 0;
let boolean = true;

while(boolean) {
    const visited = Array.from(Array(N), () => Array(N).fill(0));
    const unionSet = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if(!visited[i][j]){
                const union = bfs(i, j, visited);
                if(union.length !== 0){
                    unionSet.push(union);
                }
            }
        }
    }

    unionSet.map((union) => {
        let sum = 0;
        union.map((el) => {
            sum += array[el[0]][el[1]];
        })
        const average = Math.trunc(sum/union.length)
        union.map((el) => {
            array[el[0]][el[1]] = average;
        })
    })
    result++;
    if(unionSet.length === 0) {
        boolean = false;
    }
}



function bfs(y, x, visited) {
    const queue = [];
    const union = [];

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    queue.push([y, x]);
    visited[y][x] = 1;

    while (queue.length) {
        const current = queue.shift();
        const currentValue = array[current[0]][current[1]];

        for (let i = 0; i < 4; i++) {
            const next = [current[0] + dx[i], current[1] + dy[i]];

            if (0 <= next[0] && next[0] < N && 0 <= next[1] && next[1] < N && !visited[next[0]][next[1]]) {
                if(Math.abs(currentValue-array[next[0]][next[1]]) >= L && Math.abs(currentValue-array[next[0]][next[1]]) <= R) {
                    if(!union.includes(next)) {
                        union.push(next);
                    }
                    if(!union.includes(current)) {
                        union.push(current);
                    }
                    visited[next[0]][next[1]] = 1;
                    queue.push(next);
                }
            }
        }
    }
    return union;
}

console.log(result-1)
