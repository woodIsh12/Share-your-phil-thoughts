module.exports = function(app){
    //controller for user athentification
    const UserAuthen = require("../controllers/usersController");

    app.route('/api/v1/sign-in')
        .post(UserAuthen.signIn);

    app.route('/api/v1/log-in')
    .post(UserAuthen.logIn);


}
