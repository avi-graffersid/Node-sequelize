module.exports = (sequelize,DataTypes) =>{
    const Book = sequelize.define("Book",{
        cid:{
        type: DataTypes.INTEGER
            },
        name:{
            type: DataTypes.STRING
             }
    });
    return Book; 
}  