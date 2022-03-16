"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metircsConverter = void 0;
let metircsConverter = (value, unitBase, unit) => {
    let metrics = {
        km: 1000,
        hm: 100,
        dam: 10,
        m: 1,
        dm: 0.1,
        cm: 0.01,
        mm: 0.001,
    };
    return `${(value * metrics[unitBase]) / metrics[unit]} ${unit}`;
};
exports.metircsConverter = metircsConverter;
