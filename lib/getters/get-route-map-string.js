const getRouteMapString = (string) => {
    return string
        .substring(1)
        .split("/")
        .map((component, index, array) => {
            if (component.charAt(0) === ":") {
                return `__param__.${component.substring(1)}`;
            }

            if (component === "*" && index === array.length - 1) {
                return "__param__.__all__";
            }

            return component;
        })
        .join(".");
};

module.exports = getRouteMapString;
exports = getRouteMapString;
exports.default = getRouteMapString;
