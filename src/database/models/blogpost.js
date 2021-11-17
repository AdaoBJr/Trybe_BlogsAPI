const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
      
    blogPost.hasMany(models.PostCategory, {
      foreignKey: 'id', as: 'postId',
    });
  };

  return blogPost;
};

module.exports = BlogPost;
