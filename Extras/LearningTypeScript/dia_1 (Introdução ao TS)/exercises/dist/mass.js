"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
let convert = (value, unitBase, unit) => {
    let metrics = {
        kg: 1000,
        hg: 100,
        dag: 10,
        g: 1,
        dg: 0.1,
        cg: 0.01,
        mg: 0.001,
    };
    if (!(unit in metrics)) {
        throw new Error("Invalid metric");
    }
    return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`;
};
exports.convert = convert;
