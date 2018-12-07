module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    dateJoined: DataTypes.DATE
  });

  User.associate = models => {
    User.hasMany(models.Book, {
      onDelete: 'cascade'
    });
  };
  return User;
};
