var chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.red("Hello World!"));
console.log(chalk.yellow("Hello Alice!"));
console.log(chalk.green("Hello Bob!"));

var testArr= ["item1", "carrots", "zed"]
_.each(testArr, function(i){
	console.log(i)
})