require('dotenv').config();

module.exports = {

  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "minacoin_dev",
  host:     process.env.DB_HOST || "localhost",
  dialect:  process.env.DB_DIALECT || "mysql",
  define: {
    // Genera claves foraneas del tipo user_id en ves de userId
    //underscored = true
  }
}