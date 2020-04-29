import { Op } from 'sequelize'
import DataLoader from 'dataloader'
import User from '../Models/user'

export const userLoader = new DataLoader(
  async (ids) =>
    await User.findAll({
      where: { id: { [Op.in]: ids } }, //  Op.in = $in
    })
)
