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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nfunction typewriter({ element, text, delay }) {\n    let i = 0;\n    function type() {\n        if (i < text.length) {\n            element.textContent += text.charAt(i);\n            i++;\n            setTimeout(type, delay);\n        }\n    }\n    type();\n}\n// Manipulando os títulos:\nconst h2Element = document.querySelector('.informations h2');\nconst h3Element = document.querySelector('.informations h3');\ntypewriter({\n    element: h2Element,\n    text: 'Barber\\'s Club',\n    delay: 100,\n});\ntypewriter({\n    element: h3Element,\n    text: 'Um novo conceito em Barbearia',\n    delay: 200,\n});\n\n\n//# sourceURL=webpack://frontend/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;