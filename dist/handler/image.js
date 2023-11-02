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
const logger_1 = require("../utilities/logger");
const get_image_path_1 = require("../utilities/get-image-path");
const imageRoutes = (app) => {
    app.get('/images', logger_1.logger, index);
};
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { filename, width, height } = req.query;
    const imagePath = yield (0, get_image_path_1.getImagePath)({ filename, width, height });
    if (imagePath)
        res.sendFile(imagePath);
    else
        res.send(`
		<script>
			function goBackHome() {
        window.location.href = '/'
			}
		</script>
		<div>Something wrong!</div>
		<button onclick="goBackHome()">Go back home image!</button>
	`);
    try {
    }
    catch (err) {
        res.status(400);
        res.json(err);
    }
});
exports.default = imageRoutes;
