var chalk = require('chalk');
var _ = require('lodash');
var logger = require('./lib/logger');
var logs= require('./data/logs');

/*
console.log(chalk.red("Hello World!"));
console.log(chalk.yellow("Hello Alice!"));
console.log(chalk.green("Hello Bob!"));

 var testArr= ["item1", "carrots", "zed"]
_.each(testArr, function(i){
	console.log(i)
}); */
//logger.test();

_.each(logs, function(log){
	logger.log(log.message, log.level);
});


