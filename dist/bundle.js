/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (() => {

eval("// const ColorAnalysis = require(\"./color-analysis.js\")\r\n\r\n// const colors = [\"#ffffff\", \"#000000\", \"#ff0000\"]\r\n// const dominantColorScheme = \"monochromatic\"\r\n// const hasTextures = false\r\n\r\n// const analysis = new ColorAnalysis(colors, dominantColorScheme, hasTextures)\r\n// console.log(\"analysis\", analysis)\r\n\r\n// const imageUrl =\r\n//   \"https://images.unsplash.com/photo-1556740732-6a0f7b0b2a9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80\"\r\n// const colorAnalysis = new ColorAnalysis(imageUrl)\r\n// colorAnalysis\r\n//   .getDominantColorScheme()\r\n//   .then(colors => {\r\n//     console.log(\"Dominant color scheme:\", colors)\r\n//   })\r\n//   .catch(error => {\r\n//     console.error(error)\r\n//   })\r\n\r\n// console.log(\"colorAnalysis\", colorAnalysis)\r\n\r\nconst imageUpload = document.querySelector(\"#image-upload\")\r\nconst imagePreview = document.querySelector(\"#image-preview\")\r\nconsole.log(\"imageUpload\", imageUpload)\r\nimageUpload.addEventListener(\"change\", event => {\r\n  console.log(\"event\", event)\r\n  const imageUrl = URL.createObjectURL(event.target.files[0])\r\n  imagePreview.src = imageUrl\r\n  imagePreview.onload = () => {\r\n    URL.revokeObjectURL(imageUrl)\r\n  }\r\n})\r\n\n\n//# sourceURL=webpack://sketchtocss/./js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/index.js"]();
/******/ 	
/******/ })()
;