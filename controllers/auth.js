const User = require('../model/user');

////////////////////////////////////////////////////////////////

const getLogin = (req, res) => {
    const errorMessage = req.flash('errorMessage')[0];
    res.status(200)
    .render('auth/login',{  //直接改成ejs檔
        path:'/login',
        pageTitle:'Login Books', //HTML可以透過<%= pageTitle %>取得
        errorMessage
    }) 
    // .sendFile(path.join(__dirname,'views','login.html'))
};

const getSignup = (req, res) => {
    res.status(200)
        .render('auth/signup', {
            pageTitle: 'Signup',
        });
}

const postLogin = (req, res) => {
    const { email, password } = req.body;
    console.log('login email',email);
    console.log('login password',password);

    User.findOne({ where: { email }})
    .then((user) => {
        if (!user) {
            req.flash('errorMessage', '錯誤的 Email 或 Password。');
            return res.redirect('/login');
        }
        if (user.password === password) {
            console.log('login: 成功');
            req.session.isLogin = true;
            return res.redirect('/')
        } 
        req.flash('errorMessage', '錯誤的 Email 或 Password。');
        res.redirect('/login');
    })
    .catch((err) => {
        console.log('login error:', err);
    });
};

const postLogout = (req, res) => {
    req.session.destroy((err) => {
        console.log('session destroy() error: ', err);
        res.redirect('/login');
    });
};

module.exports = {
    getLogin,
    getSignup,
    postLogin,
    postLogout,
};