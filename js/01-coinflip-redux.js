let coinFlip
let numFlips = parseInt(prompt("Enter a number of coin flips"))

if (isNaN(numFlips)|| numFlips < 0) {
    alert("Please enter a valid number greater than 0")
}
for (let i = 0; i < numFlips; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
    console.log('Heads');
    } 
    else {
    console.log('Tails');
    }
}