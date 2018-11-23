'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  User.checkUser = async (name, userEmail, userPassword) => {
    let arrOfUsers = await User.findAll({
      where: {
        name: name,
        email: userEmail,

        password: userPassword
      }
    })
    return arrOfUsers
  }

  User.getEmail = async (email) => {
    return await User.findAll({
      where: {
        email:email
      }
    })
  }
  return User;
};