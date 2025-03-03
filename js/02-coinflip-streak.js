let coinFlip2;
do {
    coinFlip2 = Math.round(Math.random());
    if (coinFlip2 === 0) {
        console.log('Heads');
    } else {
        console.log('Tails');
    }
} while (coinFlip2 === 0);