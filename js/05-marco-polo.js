let number = 1;
for (i = 0; i<100; i++) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Marco! Polo!");
    } else if (number % 3 === 0) {
        console.log("Marco!");
    } else if (number % 5 === 0) {
        console.log("Polo!");
    } else {
        console.log(number);
    }
    number++;    
}