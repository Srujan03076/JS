//Read a digit and display in words (Using case statement)
const prompt = require("prompt-sync")();
const number= parseInt(prompt("Enter a single digit number:"));

switch (number) {
    case 1:
        console.log('ONE')
        break;
    case 2:
        console.log('TWO')
        break;
    case 3:
        console.log('THREE')
        break;
    case 4:
        console.log('FOUR')
        break;
    case 5:
        console.log('FIVE')
        break;
    case 6:
        console.log('SIX')
        break;
    case 7:
        console.log('SEVEN')
        break;
    case 8:
        console.log('EIGHT')
        break;
    case 9:
        console.log('NINE')
        break;
    case 0:
        console.log('ZERO')
        break;
    default:
        console.log('Single Digit only!')
        break;
}