const fs = require("fs");
const string = fs.readFileSync("test.txt").toString().trim().split("\n")[0];

const obj = {};
const result = Array(26).fill(-1);

for(let i=0; i<string.length; i++) {
    if(!(string[i] in obj)) {
        obj[string[i]] = i;
    }
}

for(let key in obj) {
    result[key.charCodeAt() - 97] = obj[key];
}

console.log(result.join(" "));