module.exports = (sequelize, DataTypes) => {
  const book = sequelize.define("book", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.STRING,
  },
  {
    underscored: true,
    // timestamps: false,
  }
  );
  return book;
};
