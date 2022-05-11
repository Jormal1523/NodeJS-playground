// hello.js
//製作一個hello模組
const sayHello = () => {
    console.log('Hello!');
};
const sayGoodnight = () => {
    console.log('Good night!');
};
module.exports.say = sayHello;


//用物件形式製作hello模組
module.exports = {
    sayHello: sayHello,
    sayGoodnight:sayGoodnight,
    title: 'Hello Title'
};

//JS remarks 
module.exports = {
    sayHello,
    sayGoodnight,
    title: 'Hello Title'
};