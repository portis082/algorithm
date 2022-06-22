const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");
input.shift();

let preorderResult = "";
let inorderResult = "";
let postorderResult = "";

const array = input.map((el) => {
    return el.split(" ").map((char) => {
        if(char !== "."){
            return char.charCodeAt() - 65;
        } else {
            return -1;
        }
    });
}).sort((a, b) => {
    return a[0] - b[0]
});

order(0);
console.log(preorderResult);
console.log(inorderResult);
console.log(postorderResult);

function order(root) {
    preorderResult += String.fromCharCode(root + 65);
    if(array[root][1] !== -1) {
        order(array[root][1]);
    }
    inorderResult += String.fromCharCode(root + 65);
    if(array[root][2] !== -1) {
        order(array[root][2]);
    }
    postorderResult += String.fromCharCode(root + 65);
}