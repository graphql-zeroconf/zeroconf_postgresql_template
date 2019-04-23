require('dotenv').config({ debug: process.env.DEBUG });

module.exports = {
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  option: {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    port: process.env.POSTGRES_PORT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    additional: {
      timestamps: false,
      // createdAt: 'cdate',
      // updatedAt: 'udate',
    },
  },
};
