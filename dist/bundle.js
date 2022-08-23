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

/***/ "./js/modules/burger.js":
/*!******************************!*\
  !*** ./js/modules/burger.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction burger(burgerItem, burgerMenu) {\r\n\t$(burgerItem).click((event) => {\r\n\t\t$(`${burgerItem}, ${burgerMenu}`).toggleClass('active');\r\n\t\t$('body').toggleClass('lock')\r\n\t\tdocument.onkeydown = function(evt) {\r\n\t\t\tif (evt.keyCode === 27) {\r\n\t\t\t\t$(`${burgerItem}, ${burgerMenu}`).removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t};\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack:///./js/modules/burger.js?");

/***/ }),

/***/ "./js/modules/module.js":
/*!******************************!*\
  !*** ./js/modules/module.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction module() {\r\n\t$('.header__login').click((event) => {\r\n\t\t$('.sign').toggleClass('active');\r\n\t\t$('body').toggleClass('lock')\r\n\t\tdocument.onkeydown = function(evt) {\r\n\t\t\tif (evt.keyCode === 27) {\r\n\t\t\t\t$('.sign').removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t};\r\n\t\t$('.sign__close').click(event => {\r\n\t\t\t$('.sign').removeClass('active');\r\n\t\t\t$('body').removeClass('lock')\r\n\t\t})\r\n\t\t$('.sign').click(event => {\r\n\t\t\tif(event.target == document.querySelector('.sign__body')) {\r\n\t\t\t\t$('.sign').removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\t$('#sign-up').click((event) => {\r\n\t\t$('.sign').removeClass('active');\r\n\t\t$('.sign-up').toggleClass('active');\r\n\t\t$('body').toggleClass('lock');\r\n\t\tdocument.onkeydown = function(evt) {\r\n\t\t\tif (evt.keyCode === 27) {\r\n\t\t\t\t$('.sign-up').removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t};\r\n\t\t$('.sign__close').click(event => {\r\n\t\t\t$('.sign-up').removeClass('active');\r\n\t\t\t$('body').removeClass('lock')\r\n\t\t})\r\n\t\t$('.sign-up').click(event => {\r\n\t\t\tif(event.target == document.querySelector('.sign-up .sign__body')) {\r\n\t\t\t\t$('.sign-up').removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\t$('#sign-in').click(event => {\r\n\t\t$('.sign-up').removeClass('active');\r\n\t\t$('.sign').toggleClass('active');\r\n\t\t$('body').toggleClass('lock');\r\n\t\tdocument.onkeydown = function(evt) {\r\n\t\t\tif (evt.keyCode === 27) {\r\n\t\t\t\t$('.sign').removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t};\r\n\t\t$('.sign__close').click(event => {\r\n\t\t\t$('.sign').removeClass('active');\r\n\t\t\t$('body').removeClass('lock')\r\n\t\t})\r\n\t\t$('.sign').click(event => {\r\n\t\t\tif(event.target == document.querySelector('.sign__body')) {\r\n\t\t\t\t$('.sign').removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n\r\n\tconsole.log($('password').attr('type'))\r\n\t$('.password__view').click(event => {\r\n\t\tif( $('.password').attr('type') == 'password') {\r\n\t\t\t$('.password').attr('type', 'text'); \r\n\t\t} else {\r\n\t\t\t$('.password').attr('type', 'password');\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (module);\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/module.js?");

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction scroll(button, selection) {\r\n\t$(button).click(() => {\r\n\t\t$('html, body').animate({\r\n\t\t\tscrollTop: $(selection).offset().top\r\n\t\t}, 2000);\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./js/modules/scroll.js?");

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction slider(parentSelector, arrowNext, arrowPrev, arrowSelector, adaptive = 'none', dots = 'none') {\r\n\tif(adaptive == 'active') {\r\n\t\tif(document.documentElement.clientWidth > 768) {\r\n\t\t\t$(parentSelector).slick(\r\n\t\t\t\t{\r\n\t\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\t\tnextArrow: $(arrowNext),\r\n\t\t\t\tappendArrows: arrowSelector,\r\n\t\t\t\tslidesToShow: 4,\r\n\t\t\t\tslidesToScroll: 1,\r\n\t\t\t\tvariableWidth: false\r\n\t\t\t  });\r\n\t\t} else if(document.documentElement.clientWidth < 768 && document.documentElement.clientWidth > 500) {\r\n\t\t\t$(parentSelector).slick(\r\n\t\t\t\t{\r\n\t\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\t\tnextArrow: $(arrowNext),\r\n\t\t\t\tappendArrows: arrowSelector,\r\n\t\t\t\tslidesToShow: 3,\r\n\t\t\t\tslidesToScroll: 1,\r\n\t\t\t  });\r\n\t\t} else {\r\n\t\t\t$(parentSelector).slick(\r\n\t\t\t\t{\r\n\t\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\t\tnextArrow: $(arrowNext),\r\n\t\t\t\tappendArrows: arrowSelector,\r\n\t\t\t\tslidesToShow: 2,\r\n\t\t\t\tslidesToScroll: 1,\r\n\t\t\t  });\r\n\t\t}\r\n\t} else {\r\n\t\t$(parentSelector).slick({\r\n\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\tnextArrow: $(arrowNext),\r\n\t\t\tdots: true,\r\n\t\t\tappendDots:$('.reviews__dots'),\r\n\t\t\tautoplay: true,\r\n\t\t\tautoplaySpeed: 12000,\r\n\t\t\tpauseOnFocus: false,\r\n\t\t\tpauseOnHover: false,\r\n\t\t\tspeed: 500\r\n\t\t  });\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./js/modules/slider.js?");

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction tabs(parentSelector, button, active = 'active') {\r\n\tfunction hideTab() {\r\n\t\t$(parentSelector).each((index, item) => {\r\n\t\t\titem.classList.remove('active');\r\n\t\t\t$(button)[index].classList.remove(active);\r\n\t\t})\r\n\t}\r\n\tfunction showTab(i = 0) {\r\n\t\t$(parentSelector)[i].classList.add('active');\r\n\t\t$(button)[i].classList.add(active)\r\n\t}\r\n\thideTab();\r\n\tshowTab();\r\n\r\n\t$(button).click(e => {\r\n\t\t$(button).each((i, btn) => {\r\n\t\t\tif(e.currentTarget == btn) {\r\n\t\t\t\thideTab();\r\n\t\t\t\tshowTab(i)\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./js/modules/tabs.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./js/modules/burger.js\");\n/* harmony import */ var _modules_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/module */ \"./js/modules/module.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready( () => {\r\n\t(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.header__burger', '.header__menu');\r\n\t(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.benefist__body', '.benefist__button', 'benefist__button--active');\r\n\t(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.team__list', '.team__slick-next', '.team__slick-prev', '.team__arrow', 'active', 'none');\r\n\t(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.reviews__list', '.reviews__slick-next', '.reviews__slick-prev', 'none', '.reviews__dots');\r\n\t(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.footer__bottom-button', '.header');\r\n\t(0,_modules_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;