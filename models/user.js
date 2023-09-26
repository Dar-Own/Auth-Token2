'use strict'
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        bio: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: (models) => {
                models.User.hasMany(models.Message)
            }
        }
    }
    )
    return User
}
