import User from '../Models/user'
import { client } from '../Utils/Redis'
require('dotenv').config()

export const email = async (req, res) => {
  const { id } = req.params

  const userId = await client.get(id)
  console.log(userId)
  if (!userId) {
    return res.send('invalid session')
  }
  await User.update({ active: true }, { where: { id: userId } })
  await client.del(id)
  res.redirect(`${process.env.CLIENT_HOST}`)
  // res.send('thank you')
}
