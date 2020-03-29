import { Model, DataTypes } from 'sequelize'
const { UUID, UUIDV4, TEXT } = DataTypes

class Category_Group extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4()
        }
      },
      {
        sequelize
      }
    )
  }
}

export default Category_Group
