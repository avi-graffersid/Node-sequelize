module.exports = (sequelize,DataTypes) =>{
    const Reviews = sequelize.define("reviews",{
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