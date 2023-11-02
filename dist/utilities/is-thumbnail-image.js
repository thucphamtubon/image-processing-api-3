"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isThumbnailImage = void 0;
const isThumbnailImage = (filename) => {
    return `${filename}`.includes('thumbnail');
};
exports.isThumbnailImage = isThumbnailImage;
