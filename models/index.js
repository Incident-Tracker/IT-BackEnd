const { Sequelize } = require("sequelize/types");
const env = process.env.NODE_ENV || 'devleopment';
const config = require = ('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.User.hashMany(db.Post);
db.Post.belongs(db.User);
db.Post.belongsToMany(db.Hashtag, {through : 'PostHashtag'});
db.Hashtag.belongsToMany(db.Post, {hrough : 'PostHashTag'});

db.User.belongs('db.User', {
  foreignKey : 'followingId',
  as : 'Followers',
  through : 'Follow',
});

db.User.belongsToMany('db.User', {
  foreignKey : 'followingId',
  as : 'Followings',
  through : 'Follow',
});

module.exports = db;