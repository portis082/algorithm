const fs = require("fs");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N =  Number(input.shift());
const array = input.map((el) => {
    return el.split(" ").map(Number);
});
const member = [];
for(let i=0; i<N; i++) {
    member.push(i);
}
let result = undefined;

recursion([], N/2, 0);
console.log(result);

function recursion(pickup, n, index) {
    if(n === 0) {
        let team1 = 0;
        let team2 = 0;
        const opposite = member.filter((el) => {
            return !pickup.includes(el);
        });
        for(let i=0; i<pickup.length-1; i++) {
            for(let j=i+1; j<pickup.length; j++) {
                team1 += array[pickup[i]][pickup[j]];
                team1 += array[pickup[j]][pickup[i]];
                team2 += array[opposite[i]][opposite[j]];
                team2 += array[opposite[j]][opposite[i]];
            }
        }
        if(result === undefined) {
            result = Math.abs((team1-team2));
        } else if(Math.abs(team1-team2) < result) {
            result = Math.abs(team1-team2);
        }
        return;
    }

    for(let k=index; k<member.length; k++) {
        const pickupMember = [...pickup];
        pickupMember.push(k);
        recursion(pickupMember, n-1, k+1);
    }
}