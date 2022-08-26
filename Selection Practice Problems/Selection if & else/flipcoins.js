//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let heads=1;
let tails=2;
let coinFlip = Math.floor((Math.random()*2)+1); //random number 1 or 2
if(coinFlip == 1){
    console.log("Coin flipped: Heads");
}
else{
    console.log("Coin flipped: Tails")
}