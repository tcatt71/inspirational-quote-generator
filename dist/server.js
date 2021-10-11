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

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nif (!dotenv_1.default.config()) {\r\n    throw new Error(\"env values not found!\");\r\n}\r\nexports[\"default\"] = {\r\n    port: process.env.PORT,\r\n};\r\n\n\n//# sourceURL=webpack://starter_template/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express_1 = __webpack_require__(/*! express */ \"express\");\r\nvar router = (0, express_1.Router)();\r\nrouter.get(\"/api/hello\", function (req, res, next) {\r\n    res.json(\"World\");\r\n});\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://starter_template/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar routes_1 = __importDefault(__webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\"));\r\nvar path_1 = __webpack_require__(/*! path */ \"path\");\r\nvar config_1 = __importDefault(__webpack_require__(/*! ./config */ \"./src/server/config/index.ts\"));\r\nvar app = (0, express_1.default)();\r\napp.use(express_1.default.static(\"public\"));\r\napp.use(routes_1.default);\r\napp.use(\"*\", function (req, res, next) {\r\n    try {\r\n        res.sendFile((0, path_1.join)(__dirname, \"../../public/index.html\"));\r\n    }\r\n    catch (error) {\r\n        next(error);\r\n    }\r\n});\r\napp.use(function (err, req, res, next) {\r\n    res.status(err.status || 500).json({\r\n        err: err.name,\r\n        msg: err.message,\r\n        custom: \"An error occurred on the server\",\r\n    });\r\n});\r\napp.listen(config_1.default.port, function () {\r\n    return console.log(\"Server listening on port \" + config_1.default.port + \"...\");\r\n});\r\n\n\n//# sourceURL=webpack://starter_template/./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;