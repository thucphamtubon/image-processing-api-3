"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumberValue = void 0;
const convertNumberValue = (value) => {
    let numberValue = +value;
    if (isNaN(numberValue))
        return false;
    numberValue = Math.floor(numberValue);
    if (numberValue < 1)
        return false;
    return numberValue;
};
exports.convertNumberValue = convertNumberValue;
