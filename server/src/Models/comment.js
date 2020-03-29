import { Model, DataTypes } from 'sequelize'
const { UUID, UUIDV4, TEXT } = DataTypes

class Comment extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: UUID,
          primaryKey: true,
          defaultValue: UUIDV4()
        },
        content: {
          type: TEXT,
          allowNull: false
        }
      },
      {
        sequelize
      }
    )
  }
  static associate(models) {
    this.belongsTo(models.Article, {
      foreignKey: 'article_id',
      as: 'article'
    })
    this.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    })
    // this.hasMany(models.Reply)
  }
}

export default Comment

// export default (
//   sequelize,
//   { UUID, STRING, BOOLEAN, TEXT, DATE, NOW, UUIDV4 }
// ) => {
//   const Comment = sequelize.define('Comment', {
//     id: {
//       type: UUID,
//       primaryKey: true,
//       defaultValue: UUIDV4()
//     },
//     content: {
//       type: TEXT,
//       allowNull: false
//     }
//   })
//   Comment.associate = models => {
//     Comment.belongsTo(models.Article, {
//       foreignKey: 'article_id',
//       as: 'article'
//     })
//     Comment.belongsTo(models.User, {
//       foreignKey: 'user_id',
//       as: 'user'
//     })
//     Comment.hasMany(models.Reply)
//   }

//   return Comment
// }
