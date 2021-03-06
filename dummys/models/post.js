module.exports = (sequelize, DataTypes) => (
    sequelize.define('post', {
        content: {
            type : DataTypes.STRING(40),
            allowNull : false,
        },
        img: {
            type : DataTypes.STRING(200),
            allowNull : false,
        },
    },
    {
        timestamps : true,
        paranoid : true,
    })
);