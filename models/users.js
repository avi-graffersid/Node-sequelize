module.exports = (sequelize,DataTypes) =>{
    const Users = sequelize.define("users",{
        cid:{
        type: DataTypes.INTEGER
            },
        name:{
            type: DataTypes.STRING
             }
    });
    return Users; 
}  