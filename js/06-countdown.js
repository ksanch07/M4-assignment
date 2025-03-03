let countdown = prompt("Enter a number to countdown from:");
if (isNaN(countdown) || countdown < 0) {
    alert("Please enter a valid number greater than 0")
}
for (let i = countdown; i >= 0; i--) {
    console.log(i);
}