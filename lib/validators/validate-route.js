const validateRoute = (route) => {
    const regex = /^\/((?![;?@=&"<>#%{}|\\^~[\]`]).)*$/;
    let formattedRoute = route;

    if (typeof formattedRoute !== "string") {
        throw new Error("ROUTE must be a string.");
    }

    if (formattedRoute.charAt(0) !== "/") {
        formattedRoute = `/${formattedRoute}`;
    }

    if (formattedRoute.substr(-1) === "/") {
        formattedRoute = formattedRoute.slice(0, -1);
    }

    if (regex.test(formattedRoute)) {
        return formattedRoute;
    }

    throw new Error("ROUTE must be a valid Joind route string.");
};

module.exports = validateRoute;
exports = validateRoute;
exports.default = validateRoute;
