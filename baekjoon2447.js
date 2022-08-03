const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
recursion(["*"], 3);

function recursion(array, n) {
    const side = array.map((el) => {
        return el.concat(el).concat(el);
    });
    const middle = array.map((el) => {
        const blank = Array(n/3).fill(" ").join("");
        return el.concat(blank).concat(el);
    });

    const result = [...side, ...middle, ...side];

    if(n === N) {
        console.log(result.join("\n"));
        return;
    } else {
        recursion(result, n * 3);
    }
}