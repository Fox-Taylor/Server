
const {sequelize, Sequelize, DataTypes, Model} = require('../sequelize_index');

//MultipleChoiceQuiz Class ------------------------
class MultipleChoiceQuiz extends Model {
}

MultipleChoiceQuiz.init({

},{
   sequelize,
   timestamps: false,
});

module.exports = {MultipleChoiceQuiz};

