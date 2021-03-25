const {Sequelize,DataTypes} =require("sequelize");

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const db = {};

var sequelize  = new Sequelize('nodemysql','root','root',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5}
});

sequelize.authenticate()
.then(()=>{
    console.log("Connected to the database");
})
.catch(err=>{
    console.log("Error",+err );
});


db.Sequelize = Sequelize;
db.sequelize = sequelize;
   
db.sequelize.sync({force:false})
.then(()=>{
    console.log("Yes in syncccccc");
});

db.Review = require('./Review')(sequelize,DataTypes);
db.Book = require('./Book')(sequelize,DataTypes);
db.users = require('./users')(sequelize,DataTypes);
db.reviews = require('./reviews')(sequelize,DataTypes);



db.Book.hasMany(db.Review,{foreignKey:'coid'});
db.Review.belongsTo(db.Book,{foreignKey:'coid'});

db.users.hasMany(db.reviews,{foreignKey:'coid'});
db.reviews.belongsTo(db.users,{foreignKey:'coid'});

module.exports =db;