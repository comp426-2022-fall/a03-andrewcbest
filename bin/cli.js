#!/usr/bin/env node

import minimist from "minimist";
import roll from "../lib/roll.js"

// pass in arguments
const args = minimist(process.argv.slice(2));

// set defaults
let sides = 6;
let dice = 2;
let rolls = 1;

// read in args
if(args.sides > 0){
    sides = args.sides
}
if(args.dice > 0){
    dice = args.dice
}
if(args.rolls > 0){
    rolls = args.rolls
}

// call function
console.log(JSON.stringify(roll(sides, dice, rolls)))
process.exit(0)



