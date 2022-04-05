module.exports = function(app){
    const User = require("../controllers/usersController");

    app.route('/api/v1/users')
    //.get(Thought.thoughts)
    .post(User.add);


}
