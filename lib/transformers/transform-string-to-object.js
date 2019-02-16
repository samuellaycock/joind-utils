/* eslint no-return-assign: 0, no-param-reassign: 0 */

const writeObject = (string, value, object, character) => {
    const path = string.split(character);
    const last = path.pop();

    path.reduce((root, key) => (root[key] = root[key] || {}), object)[
        last
    ] = value;

    return object;
};

const transformStringToObject = (string, value = {}, character = ".") => {
    let result = {};

    if (typeof string === "string") {
        result = writeObject(string, value, result, character);
    } else if (Array.isArray(string)) {
        string.forEach((item, index) => {
            const itemValue = value[index] || value[0] || value;

            result = writeObject(item, itemValue, result, character);
        });
    }

    return result;
};

module.exports = transformStringToObject;
exports = transformStringToObject;
exports.default = transformStringToObject;
