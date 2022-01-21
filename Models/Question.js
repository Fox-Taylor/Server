const {sequelize, Sequelize, DataTypes, Model} = require('../sequelize_index');

//Question Class ------------------------
class Question extends Model {
}

Question.init({

   text: DataTypes.STRING

},{
   sequelize,
   timestamps: false,
});

module.exports = {Question};
