
var db = require('../models')
//var bodyParser = require("body-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const Users = db.users;
const Reviews = db.reviews;
const Review = db.Review;

const Book = db.Book;


const {Sequelize,Op,QueryTypes} = require('sequelize');
const {response} = require('express');
const { sequelize } = require('../models');
const reviews = require('../models/reviews');
//const Book = require('../models/Book');
// var addUser =async (req,resp) =>{

//     let data = await Users.create({cid:'2',name:'cogni '});
//     console.log(data.dataValues);

//     let response = {
//         data:"ok"
//     }
//     resp.status(200).json(response);

// }



// var addUser = async (req,resp) =>{
//     console.log(req.body);
 
    
//         let data = await Users.create({
//             cid:req.body.cid,
//             name:req.body.name,
//          //   comment:req.body.comment
//         })

//         resp.status(200).json(data);
        
//     };


var addUser = async (req,resp) =>{
    console.log(req.body);
 
    
        let data = await Book.create({
            cid:req.body.cid,
            name:req.body.name,
         //   comment:req.body.comment
        })

        resp.status(200).json(data);
        
    };





// var addReview = async (req,resp) =>{
//     console.log(req.body);
 
    
//         let data = await Reviews.create({
//             coid:req.body.coid,
//             rating:req.body.rating,
//             comment:req.body.comment
//         })

//         resp.status(200).json(data);
        
//     };



var addReview = async (req,resp) =>{
    console.log(req.body);
 
    
        let data = await Review.create({
            coid:req.body.coid,
            rating:req.body.rating,
            comment:req.body.comment
        })

        resp.status(200).json(data);
        
    };







var crudOperation = async (req,resp) =>{

//     insert
//    let data = await Users.create({cid:'105',name:'cogni '});
  
//     update
//      let data = await Users.update({name:'final'},{
//          where:{
//              id:2
//          } 
//      }); 

    //delete
    // let data = await Users.destroy({
    //     where:{
    //         id:2
    //     }
    // });


    //truncate
    // let data = await Users.destroy({
    // truncate:true
    // });
     


    //bulk Insert
    // let data = Users.bulkCreate([
    //     {cid:201,name:'aaaa'},
    //     {cid:202,name:'bbbb'}
    // ])


    let data = await Users.findAll({});

    let response = {
        data: data
    }  
    resp.status(200).json(response);
}



var queryData = async (rq,resp) =>{

    //select
    // let data = await Users.findAll({
    //     attributes: [
    //         'name',
    //     [Sequelize.fn('Count',Sequelize.col('cid')),'cidCount']
    //         ]
    //         });


    let data = await Review.findAll({
        attributes:{exclude:['createdAt'],
        include:[
            [Sequelize.fn('Count',Sequelize.col('rating')),'ratCount']
           
        ],
            
    },
        
        
    });

    let response = {
        data: data
    }
    resp.status(200).json(response);
}




var finderData = async (req,resp) =>{
    let data = await Users.findAndCountAll({
        where:{
        },
        group:['cid']
    });

    let response = {
        data:data
    }
    resp.status(200).json(response);
}

var rawQ =  async (req,resp)=>{
    const users = await db.sequelize.query("SELECT reviews.coid,books.name,COUNT(reviews.rating) as count FROM nodemysql.books LEFT JOIN reviews ON books.cid=reviews.coid group by nodemysql.reviews.coid",{
        type: QueryTypes.SELECT,
     //   model:Users,
     //   mpaToModel: true,
     //   raw:true ,
     //   replacements:{cid:'201'}
    });
    resp.status(200).json(users);
}

// var oneToOne = async (req,res)=>{
   
//     let data = await Users.findAll({
//         attributes:['cid','name'],   
//         include:[{
//             model:Reviews,
//         attributes:['rating','comment']
//         }] 
//       //  where:{cid:201} 
//     })
//    res.status(200).json(data);
//    // console.log(data);
// }


var oneToOne = async (req,res)=>{
   
    let data = await Book.findAll({
        attributes:['cid','name'] ,
        include:[{
            model:Review,
            
        attributes:['rating','comment'],
        }],

       //  attributes: [
  //  'rating', 'comment',
    //[Sequelize.literal('COUNT((coid))'), 'count']
  //],
  //group:'cid'
      //  group:['coid']
        //[Sequelize.fn('Count',Sequelize.col('cid')),'cidCount'] 
      //  where:{cid:201} 
    })
   res.status(200).json(data);
   // console.log(data);
}


var one = async (req,res)=>{
   
    let data = await Book.findAll({
        
        
       // [Sequelize.fn('Count',Sequelize.col('cid')),'cidCount'] 
      //  where:{cid:201} 
    })
   res.status(200).json(data);
   // console.log(data);
}



module.exports ={
    addUser,
    crudOperation,
    queryData,
    finderData,
    rawQ,
    addReview,
    //addReview1,
    oneToOne,
    one
};