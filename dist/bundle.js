/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/color-analysis.js":
/*!******************************!*\
  !*** ./js/color-analysis.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ColorAnalysis {\r\n  constructor(imageUrl) {\r\n    this.imageUrl = imageUrl\r\n    this.canvas = document.createElement(\"canvas\")\r\n    this.context = this.canvas.getContext(\"2d\")\r\n    this.image = new Image()\r\n  }\r\n\r\n  getDominantColorScheme() {\r\n    return new Promise((resolve, reject) => {\r\n      this.image.onload = () => {\r\n        this.canvas.width = this.image.width\r\n        this.canvas.height = this.image.height\r\n        this.context.drawImage(\r\n          this.image,\r\n          0,\r\n          0,\r\n          this.canvas.width,\r\n          this.canvas.height\r\n        )\r\n\r\n        const imageData = this.context.getImageData(\r\n          0,\r\n          0,\r\n          this.canvas.width,\r\n          this.canvas.height\r\n        )\r\n        const pixels = imageData.data\r\n        const pixelCount = pixels.length / 4\r\n\r\n        const colorCounts = {}\r\n        for (let i = 0; i < pixelCount; i++) {\r\n          const red = pixels[i * 4]\r\n          const green = pixels[i * 4 + 1]\r\n          const blue = pixels[i * 4 + 2]\r\n          const alpha = pixels[i * 4 + 3]\r\n\r\n          if (alpha === 0) {\r\n            continue // Ignore transparent pixels\r\n          }\r\n\r\n          const color = `${red},${green},${blue}`\r\n          colorCounts[color] = (colorCounts[color] || 0) + 1\r\n        }\r\n\r\n        const colors = Object.keys(colorCounts)\r\n        let dominantColorCount = 0\r\n        let dominantColorScheme = []\r\n\r\n        // Loop through each color to find the most dominant ones\r\n        colors.forEach(color => {\r\n          const count = colorCounts[color]\r\n          if (count > dominantColorCount) {\r\n            dominantColorCount = count\r\n            dominantColorScheme = [color]\r\n          } else if (count === dominantColorCount) {\r\n            dominantColorScheme.push(color)\r\n          }\r\n        })\r\n\r\n        resolve(dominantColorScheme)\r\n      }\r\n\r\n      this.image.onerror = error => {\r\n        reject(error)\r\n      }\r\n\r\n      console.log(\"this.imageUrl\", this.imageUrl)\r\n\r\n      this.image.src = this.imageUrl\r\n    })\r\n  }\r\n}\r\n\r\nconsole.log(\"ColorAnalysis instantiated\")\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorAnalysis);\r\n\n\n//# sourceURL=webpack://sketchtocss/./js/color-analysis.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color_analysis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-analysis.js */ \"./js/color-analysis.js\");\n\r\nconst colorContainr = document.querySelector(\".dominant_color__container\")\r\n\r\nlet imageUrl = \"\"\r\n\r\nconst imageUpload = document.querySelector(\"#image-upload\")\r\nconst imagePreview = document.querySelector(\"#image-preview\")\r\nconsole.log(\"imageUpload\", imageUpload)\r\nimageUpload.addEventListener(\"change\", event => {\r\n  console.log(\"event\", event)\r\n  imageUrl = URL.createObjectURL(event.target.files[0])\r\n  imagePreview.src = imageUrl\r\n  imagePreview.onload = () => {\r\n    URL.revokeObjectURL(imageUrl)\r\n  }\r\n\r\n  const colorAnalysis = new _color_analysis_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](imageUrl)\r\n  colorAnalysis\r\n    .getDominantColorScheme()\r\n    .then(colors => {\r\n      console.log(\"Dominant color scheme:\", colors)\r\n      let convertColors = `rgb(${colors})`\r\n\r\n      console.log(\"convertColors\", convertColors)\r\n      colorContainr.style.backgroundColor = convertColors\r\n    })\r\n    .catch(error => {\r\n      console.error(error)\r\n    })\r\n})\r\n\n\n//# sourceURL=webpack://sketchtocss/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;