const {sequelize, Sequelize, DataTypes, Model} = require('../sequelize_index');

//Quiz Class ------------------------
class Quiz extends Model {
}

Quiz.init({

   name: DataTypes.STRING,
   highScore: DataTypes.STRING,

},{
   sequelize,
   timestamps: false,
});

module.exports = {Quiz};



