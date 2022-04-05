

module.exports = function(app){
    const Thought = require("../controllers/thoughtController");

    app.route('/api/v1/thoughts')
    .get(Thought.thoughts)
    .post(Thought.add);


}
