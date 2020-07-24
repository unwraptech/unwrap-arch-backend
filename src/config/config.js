require('dotenv').config()

module.exports = {
    secret: process.env.jwt_secret,
    jwtTokenExpireIn: process.env.jwt_jwtTokenExpireIn,
    encDecPerUser: process.env.encDecPerUser,
    db: {
        name: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        host: process.env.DB_HOST,
    },
    url: {
        front_url: process.env.front_url
    },

}