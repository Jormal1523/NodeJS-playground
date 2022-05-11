//匯入hello這個模組（檔案）
const hello = require('./hello');

// hello.say();
hello.sayHello();
hello.sayGoodnight();
console.log(hello.title)

//顯示檔案位置
console.log('dirname',__dirname);
console.log('filename',__filename);
