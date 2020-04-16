import Sequelize from "sequelize"
import { DATABASE } from "../Config"

import Article from "./article"
import User from "./user"
import Category from "./category"
import categoryGroup from "./categoryGroup"
import Tag from "./tag"
import Reply from "./reply"
import Comment from "./comment"
import Role from "./role"
import Likes from "./likes"
import user_role from "./userRole"

const { username, password, database, options } = DATABASE

const sequelize = new Sequelize(database, username, password, options)

// Init tables
Article.init(sequelize)
User.init(sequelize)
Category.init(sequelize)
categoryGroup.init(sequelize)
Tag.init(sequelize)
Reply.init(sequelize)
Comment.init(sequelize)
Role.init(sequelize)
user_role.init(sequelize)
Likes.init(sequelize)

// Associations
Article.associate(sequelize.models)
User.associate(sequelize.models)
Category.associate(sequelize.models)
//categoryGroup.init(sequelize.models)
Tag.associate(sequelize.models)
Reply.associate(sequelize.models)
Comment.associate(sequelize.models)
Role.associate(sequelize.models)
Likes.associate(sequelize.models)

module.exports = sequelize
