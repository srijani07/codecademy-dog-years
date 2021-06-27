var readlineSync = require('readline-sync');

function toDogYears(humanYears) {
if(humanYears <= 2) 
    return humanYears*10.5;
else 
 return 2*10.5+(humanYears-2)*4;

}


var humanYears = readlineSync.question('Enter the age in human years :\n');
if (humanYears<=0)
 console.log("Sorry, invalid input.");
else
console.log(humanYears+" human years of age converted to dog years is : "+toDogYears(humanYears)+" dog years");
