module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 300]
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 300]
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 300]
    },
    isbn: {
      type: DataTypes.INT,
      allowNull: true
    },
    coverimg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pubdate: {
      type: DataTypes.DATEONLY
    }
  });
};
