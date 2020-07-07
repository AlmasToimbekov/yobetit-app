module.exports = {
    HOST: process.env.PG_HOST || "localhost",
    PORT: process.env.PG_PORT || "55432",
    USER: process.env.PG_USER || "postgres",
    PASSWORD: process.env.PG_PASSWORD || "123",
    DB: process.env.PG_DB || "postgres",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };