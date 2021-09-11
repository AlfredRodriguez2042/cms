import Sequelize from 'sequelize'
import Article from './article'
import User from './user'
import Category from './category'
import categoryGroup from './categoryGroup'
import Tag from './tag'
import Reply from './reply'
import Comment from './comment'
import Role from './role'
import Likes from './likes'
import userRole from './userRole'
import Message from './messaje'
import Channel from './channel'

import { DATABASE } from '../Config'

const { username, password, database, options } = DATABASE

const sequelize = new Sequelize(database, username, password, options)

const defaultAdmin = {
  name: 'admin',
  username: 'admin',
  email: 'admin@email.com',
  password: 'admin1234',
  roles: {
    name: 'admin',
  },
}
const defaultValue = async () => {
  try {
    await User.findOrCreate(defaultAdmin, {
      include: [{ association: 'roles' }],
    })
  } catch (error) {
    console.log(error)
  }
}
//  init
Article.init(sequelize)
User.init(sequelize)
Category.init(sequelize)
categoryGroup.init(sequelize)
Tag.init(sequelize)
Reply.init(sequelize)
Comment.init(sequelize)
Role.init(sequelize)
userRole.init(sequelize)
Likes.init(sequelize)
Message.init(sequelize)
Channel.init(sequelize)
//  Associations
Article.associate(sequelize.models)
User.associate(sequelize.models)
Category.associate(sequelize.models)
//  categoryGroup.init(sequelize.models)
Tag.associate(sequelize.models)
Reply.associate(sequelize.models)
Comment.associate(sequelize.models)
Role.associate(sequelize.models)
Likes.associate(sequelize.models)
Message.associate(sequelize.models)
Channel.associate(sequelize.models)

defaultValue()
module.exports = sequelize
