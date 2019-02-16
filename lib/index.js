const getters = require("./getters");
const transformers = require("./transformers");
const validators = require("./validators");

const EXPORTS = {
    getters,
    transformers,
    validators,
};

module.exports = EXPORTS;
exports = EXPORTS;
exports.default = EXPORTS;
