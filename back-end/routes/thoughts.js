

module.exports = function(app){
    const Thought = require("../controllers/thoughtController");

    app.route('/api/v1/thoughts')
    .get(Thought.thoughts)
    .post(Thought.add);

    app.route('/api/v1/thoughts/:id')
    .delete(Thought.delete)
    .put(Thought.modify)
    .get(Thought.getThought);


}
