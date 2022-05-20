const express = require('express');

////////////////////////////////////////////////////////////

const router = express.Router();

router.get('*', (req, res) => { //404 not found 頁面  要放到最後面，不然全部都會是404
    res.status(404)
    .render('404',{ //直接改成ejs檔
        path:'/*',
        pageTitle:'404 not found'
    }) 
    // .sendFile(path.join(__dirname, 'views', '404.html'));
});


module.exports = router;