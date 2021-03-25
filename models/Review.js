module.exports = (sequelize,DataTypes) =>{
    const Reviews = sequelize.define("Reviews",{
        coid:{
        type: DataTypes.INTEGER
            },
        rating:{
            type: DataTypes.INTEGER
             },
             comment:{
                type: DataTypes.STRING
                 }
    });
    return Reviews; 
}  