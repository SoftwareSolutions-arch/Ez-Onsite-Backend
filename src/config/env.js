require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 3000,
    db: 'mongodb+srv://user123:1GpJ1IR1d9ZO9IZe@cluster0.whnf4.mongodb.net/',
  },
  production: {
    port: process.env.PORT || 3000,
    db: 'mongodb+srv://user123:1GpJ1IR1d9ZO9IZe@cluster0.whnf4.mongodb.net/',
  }
};

module.exports = config[env];