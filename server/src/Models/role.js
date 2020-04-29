import { Model, DataTypes } from 'sequelize'

const { UUID, UUIDV4, ENUM } = DataTypes

//  eslint-disable-next-line
class Role extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4(),
        },
        name: {
          type: ENUM,
          values: ['user', 'admin', 'disabled'],
          allowNull: false,
          defaultValue: 'user',
        },
      },
      {
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: {
        name: 'roleId',
        field: 'role_id',
      },

      through: 'user_role',
      as: 'user',
      onUpdate: 'CASCADE',
    })
  }
}
//  eslint-disable-next-line
export default Role
