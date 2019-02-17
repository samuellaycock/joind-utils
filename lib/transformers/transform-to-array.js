const transformToArray = (value) => {
    if (Array.isArray(value)) {
        return value;
    }

    return [value];
};

module.exports = transformToArray;
exports = transformToArray;
exports.default = transformToArray;
