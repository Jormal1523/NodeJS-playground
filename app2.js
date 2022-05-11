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

// console.log(cowsay.say({
//     text : "I'm a moooodule",
//     e : "oO",
//     T : "U "
// }));

// let sentences = ['Hello', 'World', 'I\'m a cow.'];

// sentences.forEach((sentence) => {
//     console.log(cowsay.say({
//         text : sentence,
//         e : "^^", 
//         T : "U "
//     }));
// });


const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    console.log('req url:',req.url);
    if(req.url==='/login'){
        return res.end('This is login page');
    }
	res.end();
});

server.listen(3000, () => {
	console.log('running server on port 3000');
});