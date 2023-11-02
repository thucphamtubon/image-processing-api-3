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
Object.defineProperty(exports, "__esModule", { value: true });
const convert_number_value_1 = require("../../utilities/convert-number-value");
describe('test convert number value', function () {
    it('convert number value success', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const actualValue = (0, convert_number_value_1.convertNumberValue)('10');
            expect(actualValue).toEqual(10);
        });
    });
    it('convert number value false', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const actualValue = (0, convert_number_value_1.convertNumberValue)('abc');
            expect(actualValue).toEqual(false);
        });
    });
});
