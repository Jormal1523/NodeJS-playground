//第一個區塊 內建模組
const path = require('path');
const http = require('http');

//第二個區塊 第三方模組（套件）
const cowsay = require('cowsay')

//第三個區塊 自建模組
const hello = require('./hello');

////////////////////////////////////////////////////////////////

hello.sayHello();

console.log(hello.title);

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

let sentences = ['Hello', 'World', 'I\'m a cow.'];

sentences.forEach((sentence) => {
    console.log(cowsay.say({
        text : sentence,
        e : "^^", 
        T : "U "
    }));
});