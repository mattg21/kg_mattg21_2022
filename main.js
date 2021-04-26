let numberToPhonetic = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight",9: "nine",0: "zero"};

for(i=0; i <= 9; i++) {
    console.log(numberToPhonetic[i])
}
let myArgs = process.argv.slice(2)
console.log(myArgs)