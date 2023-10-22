const chalk = require('chalk');
const readline = require('readline');
const data = require('./src/data.js')
const { getSalesByDay } = require('./src/methods.js');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
})


// console.log(getSalesByDay(data, 5220, "2023-01-01", "2023-01-30", 1));
console.log();
console.log(chalk.black.bgRed.bold("============================= this is Daily sales calc ============================="));
console.log();

  rl.question("Enter first month :- ",(firstMonth)=>{
console.log();

    rl.question("Enter second month :- ",(secondMonth)=>{
      // const filtered = data.filter((item)=>item.id >= 1 && item.id <= 12)
      // if(!filtered){
      //   console.log(getSalesByDay(data, 5220, firstMonth, secondMonth, 1));
      // }else{
      //   console.log(chalk.bgMagentaBright("no such date is availibe.. "))
      // }
      console.log(getSalesByDay(data, 5220, firstMonth, secondMonth, 1));
      process.exit(1);
    });
  });


