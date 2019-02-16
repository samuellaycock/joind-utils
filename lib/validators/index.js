const validateHttpMethod = require("./validate-http-method");
const validatePort = require("./validate-port");
const validateRoute = require("./validate-route");

const EXPORTS = {
    validateHttpMethod,
    validatePort,
    validateRoute,
};

module.exports = EXPORTS;
exports = EXPORTS;
exports.default = EXPORTS;
