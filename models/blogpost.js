const Blog = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, { 
    timestamps: true,
    tableName: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'updated',
   });

   BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
       foreignKey: 'userId', as: 'user',
     });
   };

  return BlogPost;
};

module.exports = Blog;