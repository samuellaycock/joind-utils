const { METHODS } = require("http");

const validateHttpMethod = (method) => {
    if (typeof method !== "string") {
        throw new Error("METHOD must be a string");
    }

    const formattedMethod = method.toUpperCase();
    const check = METHODS.indexOf(formattedMethod);

    if (check === -1) {
        throw new Error(`METHOD must be one of: "${METHODS.join(`", "`)}".`);
    }

    return formattedMethod;
};

module.exports = validateHttpMethod;
exports = validateHttpMethod;
exports.default = validateHttpMethod;
