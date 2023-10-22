const chalk = require('chalk');
const readline = require('readline');
const data = require('./src/data.js')
const { getSalesByDay } = require('./src/methods.js');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})


console.log();
console.log(chalk.black.bgRed.bold("============================= this is Daily sales calc ============================="));
console.log();

  rl.question("Enter first month :- ",(firstMonth)=>{
console.log();

    rl.question("Enter second month :- ",(secondMonth)=>{
     
      console.log(getSalesByDay(data, 5220, firstMonth, secondMonth, 1));
      process.exit(1);
    });
  });


