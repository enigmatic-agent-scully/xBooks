module.exports = (sequelize, DataTypes) => {
  var Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 254]
    },
    author: {
      type: DataTypes.STRING,
      len: [1, 300]
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 300]
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: true,
      len: [1, 15]
    },
    coverimg: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pubdate: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Book;
};
