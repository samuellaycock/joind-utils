const isObject = (obj) => obj && typeof obj === "object";

const transformMergeObjects = (...objects) =>
    objects.reduce((prev, obj) => {
        const result = prev;

        Object.keys(obj).forEach((key) => {
            const prevValue = prev[key];
            const objValue = obj[key];

            if (Array.isArray(prevValue) && Array.isArray(objValue)) {
                result[key] = prevValue.concat(...objValue);
            } else if (isObject(prevValue) && isObject(objValue)) {
                result[key] = transformMergeObjects(prevValue, objValue);
            } else {
                result[key] = objValue;
            }
        });

        return result;
    }, {});

module.exports = transformMergeObjects;
exports = transformMergeObjects;
exports.default = transformMergeObjects;
