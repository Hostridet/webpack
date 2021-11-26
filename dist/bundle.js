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

/***/ "./src/method.js":
/*!***********************!*\
  !*** ./src/method.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Method\": () => (/* binding */ Method)\n/* harmony export */ });\n\r\n\r\nclass Method {\r\n    constructor(token)\r\n    {\r\n       this.token = token;\r\n    }\r\n\r\n    getWeather(city)\r\n    {\r\n        let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=' + this.token + '&units=metric';\r\n        fetch(url)\r\n            .then(function (resp){\r\n                return resp.json();\r\n            })\r\n            .then(function (data) {\r\n                console.log(data);\r\n                function showText(data, string)\r\n                {\r\n                    let name = document.querySelector(string);\r\n                    name.innerHTML = data;\r\n                }\r\n                showText(data.name, '.country');\r\n                showText('Current temperature: ' + data.main.temp + ' C°', '.temperature');\r\n                showText('Temperature feels: ' + data.main.feels_like + ' C°', '.feels_temperature');\r\n                showText('Max temperature: ' + data.main.temp_max + ' C°', '.max_temperature');\r\n                showText('Min temperature: ' + data.main.temp_min + ' C°', '.min_temperature');\r\n                showText('Humidity: ' + data.main.humidity + ' m/s', '.humidity');\r\n                showText('Clouds: ' + data.main.humidity + ' %', '.clouds');\r\n            })\r\n            .catch(function (){\r\n            })\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/method.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./method */ \"./src/method.js\");\n\r\nlet button = document.querySelector('.get');\r\nconst method = new _method__WEBPACK_IMPORTED_MODULE_0__.Method('7daa9527746f554b7acdcce2ea914f59');\r\n\r\n\r\nfunction getWeather() {\r\n    let city = document.querySelector('.city');\r\n    method.getWeather(city.value);\r\n}\r\n\r\nbutton.addEventListener(\"click\", () => {\r\n    getWeather();\r\n})\n\n//# sourceURL=webpack://webpack/./src/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;