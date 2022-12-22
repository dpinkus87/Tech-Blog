const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.init(
{
    id:{
        type: DataTypes.INTEGER,
    },
    title:{

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
    modelName: 'blog',
  
}
)

module.exports = Blog;  