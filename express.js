const express = require('express');
const path = require('path');

const app = express();

app.use((req,res,next)=>{
console.log('Hello');
next();
})

app.use((req,res,next)=>{
console.log('World');
next();
})

app.get('/', (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<head><meta charset="utf-8" /></head>')
//     res.write('<body>')
//     res.write('<h1>這是首頁</h1>')
//     res.write('</body>')
    res.status(200).sendFile(path.join(__dirname,'view','index.html'))
});
app.listen(3001, () => {
	console.log('Web Server is running on port 3001');
});