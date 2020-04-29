import DataLoader from 'dataloader'
import User from '../Models/user'
import { Op } from 'sequelize'

export const userLoader = new DataLoader(async (ids) => {
  const users = await User.findAll({
    where: { id: { [Op.in]: ids } }, //  Op.in = $in
  })
  return users
})
