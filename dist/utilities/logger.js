"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    let url = req.url;
    console.log(`${url} was visited`);
    next();
};
exports.logger = logger;
