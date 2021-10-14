module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    timestamps: false, 
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsToMany(models.User,
      { foreignKey: 'categoryId', through: 'PostCategory', as: 'BlogPosts' });
  };

  return BlogPost;
};