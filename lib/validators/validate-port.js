const validateNumber = (number) => {
    if (typeof number !== "number" && Number.isNaN(number)) {
        throw new Error("PORT must be a number.");
    }

    const formattedNumber = Number.parseInt(number, 10);

    if (formattedNumber < 0 || formattedNumber > 65535) {
        throw new Error("PORT must be between 0 and 65535.");
    }

    return number;
};

module.exports = validateNumber;
exports = validateNumber;
exports.default = validateNumber;
