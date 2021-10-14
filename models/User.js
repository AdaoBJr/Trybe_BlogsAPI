// Como dito anteriormente, não iremos trabalhar com classes,
// mas sim com a função sequelize.define() , então substitua
// este código pelo seguinte:
// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogPost' });
  };

  return User;
};
