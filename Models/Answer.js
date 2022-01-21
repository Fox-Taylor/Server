const {sequelize, Sequelize, DataTypes, Model} = require('../sequelize_index');

//Answer Class ------------------------
class Answer extends Model {
}

Answer.init({

   text: DataTypes.STRING

},{
   sequelize,
   timestamps: false,
});

module.exports = {Answer};