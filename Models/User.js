const {sequelize, Sequelize, DataTypes, Model} = require('../sequelize_index');


//User Class ------------------------
class User extends Model {
}

User.init({

   name: DataTypes.STRING,
   score: DataTypes.STRING

},{
   sequelize,
   timestamps: false,
});


module.exports = {User};

/*
(async () => {
    await sequelize.sync({ force: true });
    const m = await User.create({ name: 'Fox'})
    console.log("Inserted user:" + m.name);
})();
*/
