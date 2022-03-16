"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
let convert = (value, unitBase, unit) => {
    let metrics = {
        "km³": 1000,
        "hm³": 100,
        "dam³": 10,
        "m³": 1,
        "dm³": 0.1,
        "cm³": 0.01,
        "mm³": 0.001,
    };
    if (!(unit in metrics)) {
        throw new Error("Invalid metric");
    }
    return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`;
};
exports.convert = convert;
