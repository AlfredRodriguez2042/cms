import { Model, DataTypes } from 'sequelize'

const { UUID, UUIDV4 } = DataTypes

//  eslint-disable-next-line
class user_role extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4(),
        },
      },
      {
        sequelize,
      }
    )
  }
}
//  eslint-disable-next-line
export default user_role
