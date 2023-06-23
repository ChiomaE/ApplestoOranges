/*
There are two baskets - one filled with appls, the other with oranges. 
Write code that will exchange the apples for the oranges until they are all replaced.


if(apples.length>orangesLength){
        oranges.push(apples[i]);
    }
*/

let apples = ["a","b","c","d","e"];
let oranges = ["f","g","h","i","j"];

let applesLength = apples.length;
let orangesLength = oranges.length;

oranges.length

for(let i=0;i<applesLength;i++){
    apples.push(oranges[i]);
}

for(let m=0;m<orangesLength;m++){
    oranges.push(apples[m]);
    oranges.shift();
}

while(apples.length>orangesLength){
    apples.shift();
}




console.log("apples: ", apples, "oranges: ", oranges);