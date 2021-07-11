//=== FUNCTIONS ===//
const Factorial = (num) => {
  let returns = 1
  for (let i = 1; i <= num; i++) {
    returns *= i
  }

  return returns
}

//=== REQUIRES ===//
const inquirer = require('inquirer')
const chalk = require('chalk')
const clear = require('clear')

//=== CODE ===//
clear()

inquirer.prompt([
  {
    type: 'number',
    name: 'number',
    message: "What number do you want to find it's factorial?:"
  }
]).then(({ number }) => {
  if (number == NaN) {
    console.log(chalk.redBright('Error: Input is supposed to be a number but got NaN'))
    process.exit(1)
  } else {
    console.log(chalk.cyanBright(`✨ Factorial: ${chalk.bold(Factorial(number))}`))
  }
}).catch(e => {
  console.log(chalk.redBright(`Error: ${e}`))
})
