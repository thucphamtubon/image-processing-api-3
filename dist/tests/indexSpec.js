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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const get_image_path_1 = require("../utilities/get-image-path");
describe('GET /', function () {
    it('respond with root endpoint', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(index_1.default).get('/').set('Accept', 'application/json');
            expect(response.status).toEqual(200);
        });
    });
});
describe('GET /images', function () {
    it('respond with images endpoint success', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(index_1.default).get('/images').set('Accept', 'application/json');
            expect(response.status).toEqual(200);
        });
    });
    it('respond with images endpoint with filename is encenadaport', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(index_1.default).get('/images?filename=encenadaport').set('Accept', 'application/json');
            expect(response.status).toEqual(200);
        });
    });
    it('respond with images endpoint with filename is encenadaport, width is 300, height is 300', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(index_1.default)
                .get('/images?filename=encenadaport&width=300&height=300')
                .set('Accept', 'application/json');
            expect(response.status).toEqual(200);
        });
    });
    it(`path image: failed`, () => __awaiter(this, void 0, void 0, function* () {
        const imagePath = yield (0, get_image_path_1.getImagePath)({ filename: '12345', height: '200', width: '200' });
        expect(imagePath).toBeFalse();
    }));
    it(`path image: success`, () => __awaiter(this, void 0, void 0, function* () {
        const imagePath = yield (0, get_image_path_1.getImagePath)({ filename: 'icelandwaterfall', height: '500', width: '500' });
        expect(imagePath).not.toBeFalse();
    }));
});
