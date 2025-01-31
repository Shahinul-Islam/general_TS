"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var name = (0, readline_sync_1.question)("What is your name?\n");
    console.log("Hello, ".concat(name, "!"));
}
// main();
function isNumber(value) {
    var myNumber = parseInt(value);
    // console.log( isNaN(myNumber));
    return isNaN(myNumber) ? true : false;
}
var getValue = isNumber((0, readline_sync_1.question)("Enter a number: "));
console.log(getValue);
