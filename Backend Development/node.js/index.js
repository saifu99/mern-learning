// var x='20';
// const arr = [2,4,7,5,6];
// console.log(arr[4]);



/*MODULES*/
// const app = require('./app.js')
// console.log(app.z())



// const app = require('./app.js')
// const arr = [2,4,7,5,6];
// arr.filter((item)=>{
//     console.log(item)
// })



// const app = require('./app.js')
// const arr = [2,4,7,5,6];
// let result=arr.filter((item)=>{
//     return item===2;
// })
// console.warn(result)



// var colors = require('colors');
// console.log("package.json".green)



// import chalk from 'chalk';
// console.log(chalk.bgGreen("hello! world"));



const {addToCart, changeQty} = require("./cartModule");

console.log(addToCart());
console.log(changeQty());
