const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    DB_SYNC: process.env.DB_SYNC,
    FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH,
    UPDATE_FLIGHT_SERVICE_PATH: process.env.UPDATE_FLIGHT_SERVICE_PATH,
    AUTH_SERVICE_PATH: process.env.AUTH_SERVICE_PATH,
}