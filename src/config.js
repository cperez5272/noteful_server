// module.exports = {
//     PORT: process.env.PORT || 8000,
//     NODE_ENV: process.env.NODE_ENV || 'development',
//   }

  module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_URL: process.env.DB_URL || 'postgresql://pawnee_parks_department@localhost/noteful_database',
  }