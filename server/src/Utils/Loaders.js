import DataLoader from 'dataloader'
import User from '../Models/user'
import Article from '../Models/article'
import { Op } from 'sequelize'

export const userLoader = new DataLoader(async (ids) => {
  const users = await User.findAll({
    where: { id: { [Op.in]: ids } }, //  Op.in = $in
  })
  return users
})
export const articleLoader = new DataLoader(async (ids) => {
  const articles = await Article.findAll({
    where: { id: { $in: ids } }, //  Op.in = $in
  })
  return articles
})
