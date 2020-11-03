const logger = require('../middleware/logger');

module.exports = function() {
    
    // Handle exception
    process.on('uncaughtException', (ex) => {
        logger.error(ex.message, ex)
        process.exit(1);
    })

    // Handle rejection
    process.on('unhandleRejection', (ex) => {
        throw(ex);
    })

}