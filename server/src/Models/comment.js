import { Model, DataTypes } from 'sequelize'

const { UUID, UUIDV4, TEXT } = DataTypes

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4(),
        },
        content: {
          type: TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Article, {
      foreignKey: {
        name: 'articleId',
        field: 'article_id',
      },
      as: 'article',
    })
    this.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
      as: 'user',
    })
    //  this.hasMany(models.Reply)
  }
}

export default Comment
