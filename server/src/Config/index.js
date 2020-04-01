module.exports = {
  DATABASE: {
    database: 'practica',
    username: 'postgres',
    password: 'postgres',
    options: {
      host: process.env.POSTGRES_DB || 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0
      },
      define: {
        underscored: true,
        timestamps: true
      },
      logging: false
    }
  }
}
