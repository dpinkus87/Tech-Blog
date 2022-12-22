const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



class Comments extends Model {}

Comments.init(
{
    id:{
        type: DataTypes.INTEGER,
    },
    blog_id:{

    },
    text: {
        
    },
    date_created: {

    },
    user_id: {
        
    }
   
},

{
sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  
}
)

module.exports = Comments;  