"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
let convert = (value, unitBase, unit) => {
    let metrics = {
        kl: 1000,
        hl: 100,
        dal: 10,
        l: 1,
        dl: 0.1,
        cl: 0.01,
        ml: 0.001,
    };
    if (!(unit in metrics)) {
        throw new Error("Invalid metric");
    }
    return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`;
};
exports.convert = convert;
