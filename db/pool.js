const { Pool } = require("pg")

module.exports = new Pool({
    host: "localhost",
    user: "john",
    database: "top_users",
    password: "karrde",
    port: 5432 // default port
})