"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImagePath = exports.getFileNameWithSize = exports.getThumbnailImagePath = exports.getFullSizeImagePath = exports.thumbnailImagePath = exports.fullSizeImagePath = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const convert_number_value_1 = require("./convert-number-value");
const is_thumbnail_image_1 = require("./is-thumbnail-image");
const resize_image_1 = require("./resize-image");
exports.fullSizeImagePath = path_1.default.resolve(__dirname, '../../images');
exports.thumbnailImagePath = path_1.default.resolve(__dirname, '../../images/thumbnails');
const getFullSizeImagePath = (filename) => {
    return path_1.default.resolve(exports.fullSizeImagePath, filename);
};
exports.getFullSizeImagePath = getFullSizeImagePath;
const getThumbnailImagePath = (filename) => {
    return path_1.default.resolve(exports.thumbnailImagePath, filename);
};
exports.getThumbnailImagePath = getThumbnailImagePath;
const getFileNameWithSize = (props) => {
    const { filename = '', width = '', height = '' } = props;
    const widthValue = (0, convert_number_value_1.convertNumberValue)(width);
    const heightValue = (0, convert_number_value_1.convertNumberValue)(height);
    if (filename && !(widthValue || heightValue)) {
        return `${filename}.jpg`;
    }
    else if (filename && widthValue && heightValue) {
        return `${filename}-thumbnail-${width}x${height}.jpg`;
    }
    else {
        return false;
    }
};
exports.getFileNameWithSize = getFileNameWithSize;
const getImagePath = (props) => __awaiter(void 0, void 0, void 0, function* () {
    const newFileName = (0, exports.getFileNameWithSize)(props);
    const isThumbnail = (0, is_thumbnail_image_1.isThumbnailImage)(newFileName);
    let filePath = '';
    try {
        if (newFileName && isThumbnail) {
            filePath = (0, exports.getThumbnailImagePath)(String(newFileName));
            yield fs_1.promises.access(filePath);
        }
    }
    catch (_a) {
        yield (0, resize_image_1.resizeImage)({
            inputBuffer: exports.fullSizeImagePath + '/' + props.filename + '.jpg',
            width: (0, convert_number_value_1.convertNumberValue)(props.width || ''),
            height: (0, convert_number_value_1.convertNumberValue)(props.height || ''),
            toFile: exports.thumbnailImagePath + '/' + newFileName,
        });
    }
    try {
        if (newFileName && !isThumbnail) {
            filePath = (0, exports.getFullSizeImagePath)(String(newFileName));
        }
        yield fs_1.promises.access(filePath);
    }
    catch (e) {
        console.log(e);
        return false;
    }
    return filePath;
});
exports.getImagePath = getImagePath;
