module.exports = {
  DATABASE: {
    database: process.env.POSTGRES_DB || 'practica',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    options: {
      host: process.env.POSTGRES_HOST || 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
      },
      define: {
        underscored: true,
        timestamps: true,
      },
      logging: false,
    },
  },
}
