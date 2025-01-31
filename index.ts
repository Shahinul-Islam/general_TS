import { question } from "readline-sync";


function main():void {
  const name:string = question("What is your name?\n");
  console.log(`Hello, ${name}!`);
}

// main();

function isNumber(value: string):boolean{
    const myNumber: number = parseInt(value)
    // console.log( isNaN(myNumber));
    return isNaN(myNumber) ? true : false;
}

const getValue = isNumber(question("Enter a number: "));
console.log(getValue);