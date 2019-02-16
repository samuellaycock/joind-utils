const validateRoute = (route) => {
    const regex = /^\/((?![;?@=&"<>#%{}|\\^~[\]`]).)*$/;
    let formattedRoute = route;

    if (typeof formattedRoute !== "string") {
        throw new Error("ROUTE must be a string.");
    }

    if (formattedRoute.charAt(0) !== "/") {
        formattedRoute = `/${formattedRoute}`;
    }

    if (regex.test(formattedRoute)) {
        return formattedRoute;
    }

    throw new Error("ROUTE must be a valid Joind route string.");
};

module.exports = validateRoute;
exports = validateRoute;
exports.default = validateRoute;
