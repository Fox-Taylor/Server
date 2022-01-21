const {sequelize, Sequelize, DataTypes, Model} = require('../sequelize_index');

//Topic Class ------------------------
class Topic extends Model {
}

Topic.init({

   name: DataTypes.STRING

},{
   sequelize,
   timestamps: false,
});


module.exports = {Topic};
