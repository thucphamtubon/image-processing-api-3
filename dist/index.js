"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = require("./utilities/logger");
const image_1 = __importDefault(require("./handler/image"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', logger_1.logger, (req, res) => {
    res.send(`
<script>
 	function onViewImage() {
    const imageEvent = document.getElementById('image');
    const widthEvent = document.getElementById('width');
    const heightEvent = document.getElementById('height');
    
    const filename = imageEvent.value;
    const width = widthEvent.value;
    const height = heightEvent.value;
    
    const filenameParam = filename ? ['filename=', filename] : []
    const widthParam = width ? ['&', 'width=', width] : []
    const heightParam = height ? ['&', 'height=', height] : []
    
    const href = ['/images?', ...filenameParam, ...widthParam, ...heightParam].join('');
    window.open(href, '_blank')
 	}
</script>

<div>
	<h1>Welcome to Image Processing API!</h1>
	<h3>You can choose image and input height, width!</h3>
	
	<select
		id="image"
		name="image"
		onChange="onSelectImage()"
	>
		<option>encenadaport</option>
		<option>fjord</option>
		<option>icelandwaterfall</option>
		<option>palmtunnel</option>
		<option>santamonica</option>
	</select>
	
	<input id="width" name="width" placeholder="width" />
	<input id="height" name="height" placeholder="height" />
	<button onclick="onViewImage()">View image</button>
</div>
`);
});
(0, image_1.default)(app);
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
