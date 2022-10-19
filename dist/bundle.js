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

/***/ "./js/modules/filter.js":
/*!******************************!*\
  !*** ./js/modules/filter.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction filter() {\r\n\tconst allItem = document.querySelectorAll('.course-big__item .courses__type'), \r\n\t\t  marketing = document.querySelectorAll('.course-big__description .marketing'),\r\n\t\t  management = document.querySelectorAll('.course-big__description .management'),\r\n\t\t  recruting = document.querySelectorAll('.course-big__description .recruting'),\r\n\t\t  design = document.querySelectorAll('.course-big__description .design'),\r\n\t\t  development = document.querySelectorAll('.course-big__description .development');\r\n\tfunction numberFilter() {\r\n\t\tdocument.querySelector('#AllCourse').textContent = `${allItem.length}`;\r\n\t\tdocument.querySelector('#marketing').textContent = `${marketing.length}`;\r\n\t\tdocument.querySelector('#management').textContent = `${management.length}`;\r\n\t\tdocument.querySelector('#recruting').textContent = `${recruting.length}`;\r\n\t\tdocument.querySelector('#design').textContent = `${design.length}`;\r\n\t\tdocument.querySelector('#development').textContent = `${development.length}`;\r\n\t} \r\n\r\n\tfunction hideCourse() {\r\n\t\tdocument.querySelectorAll('.course-big__link').forEach(item => {\r\n\t\t\titem.classList.add('hide');\r\n\t\t})\r\n\t}\r\n\t\r\n\tfunction showCourse() {\r\n\t\tdocument.querySelectorAll('.course-big__link').forEach(item => {\r\n\t\t\titem.classList.remove('hide');\r\n\t\t})\r\n\t}\r\n\r\n\tfunction hideActiveButton() {\r\n\t\tfilterButtuns.forEach(button => {\r\n\t\t\tbutton.classList.remove('active');\r\n\t\t})\r\n\t} \r\n\r\n\thideCourse();\r\n\tshowCourse(); \r\n\tnumberFilter();\r\n\t\r\n\tconst filterButtuns = document.querySelectorAll('.filter__button');\r\n\tfilterButtuns.forEach(button => {\r\n\t\tbutton.addEventListener('click', (e) => {\r\n\t\t\thideActiveButton();\r\n\t\t\te.target.classList.add('active');\r\n\t\t\thideCourse();\r\n\t\t\tdocument.querySelectorAll('.course-big__link').forEach(item => {\r\n\t\t\t\tif(item.querySelector('.course-big__description .courses__type').classList.contains(button.value)) {\r\n\t\t\t\t\titem.classList.remove('hide');\r\n\t\t\t\t} else if (button.value == 'all') {\r\n\t\t\t\t\tshowCourse();\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t})\r\n\t})\r\n\r\n\t// --- search ---\r\n\tconst searchInput = document.querySelector('.form__search'),\r\n\t\t  searchButton = document.querySelector('.form__search-button');\r\n\t\r\n\tsearchInput.addEventListener('input' , e => {\r\n\t\tconsole.log(e.target.value);\r\n\t\tdocument.querySelectorAll('.course-big__link').forEach(item => {\r\n\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack:///./js/modules/filter.js?");

/***/ }),

/***/ "./js/modules/module.js":
/*!******************************!*\
  !*** ./js/modules/module.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction module(button, window, windowBody, buttonClose) {\r\n\t$(button).click((event) => {\r\n\t\t$('.sign').removeClass('active');\r\n\t\t$('.sign-up').removeClass('active');\r\n\t\t$(window).toggleClass('active');\r\n\t\t$('body').toggleClass('lock')\r\n\t\tdocument.onkeydown = function(evt) {\r\n\t\t\tif (evt.keyCode === 27) {\r\n\t\t\t\t$(window).removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t};\r\n\t\t$(buttonClose).click(event => {\r\n\t\t\t$(window).removeClass('active');\r\n\t\t\t$('body').removeClass('lock')\r\n\t\t})\r\n\t\t$(window).click(event => {\r\n\t\t\tif(event.target == document.querySelector(windowBody)) {\r\n\t\t\t\t$(window).removeClass('active');\r\n\t\t\t\t$('body').removeClass('lock')\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (module);\r\n\r\n\n\n//# sourceURL=webpack:///./js/modules/module.js?");

/***/ }),

/***/ "./js/modules/passwordView.js":
/*!************************************!*\
  !*** ./js/modules/passwordView.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction passwordView() {\r\n\t$('.password__view').click(event => {\r\n\t\tif( $('.password').attr('type') == 'password') {\r\n\t\t\t$('.password').attr('type', 'text'); \r\n\t\t} else {\r\n\t\t\t$('.password').attr('type', 'password');\r\n\t\t}\r\n\t})\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (passwordView); \n\n//# sourceURL=webpack:///./js/modules/passwordView.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction slider(parentSelector, arrowNext, arrowPrev, arrowSelector, adaptive = 'none', dots = 'none') {\r\n\tif(adaptive == 'active') {\r\n\t\t$(parentSelector).slick({\r\n\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\tnextArrow: $(arrowNext),\r\n\t\t\tappendArrows: arrowSelector,\r\n\t\t\tslidesToShow: 4,\r\n\t\t\tslidesToScroll: 1,\r\n\t\t\tvariableWidth: false,\r\n\t\t\tresponsive: [{\r\n\t\t\t\tbreakpoint: 768,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\t\t\tnextArrow: $(arrowNext),\r\n\t\t\t\t\tappendArrows: arrowSelector,\r\n\t\t\t\t\tslidesToShow: 3,\r\n\t\t\t\t\tslidesToScroll: 1,\r\n\t\t\t\t}\r\n\t\t\t},\r\n\t\t\t{\r\n\t\t\t\tbreakpoint: 500,\r\n\t\t\t\tsettings: {\r\n\t\t\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\t\t\tnextArrow: $(arrowNext),\r\n\t\t\t\t\tappendArrows: arrowSelector,\r\n\t\t\t\t\tslidesToShow: 2,\r\n\t\t\t\t\tslidesToScroll: 1,\r\n\t\t\t\t}\r\n\t\t\t}]\r\n\t\t});\r\n\t} else {\r\n\t\t$(parentSelector).slick({\r\n\t\t\tprevArrow: $(arrowPrev),\r\n\t\t\tnextArrow: $(arrowNext),\r\n\t\t\tdots: true,\r\n\t\t\tappendDots:$('.testim__dots'),\r\n\t\t\tautoplay: true,\r\n\t\t\tautoplaySpeed: 12000,\r\n\t\t\tpauseOnFocus: false,\r\n\t\t\tpauseOnHover: false,\r\n\t\t\tspeed: 500\r\n\t\t  });\r\n\t}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./js/modules/slider.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ \"./js/modules/burger.js\");\n/* harmony import */ var _modules_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/module */ \"./js/modules/module.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./js/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./js/modules/slider.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scroll */ \"./js/modules/scroll.js\");\n/* harmony import */ var _modules_passwordView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/passwordView */ \"./js/modules/passwordView.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/filter */ \"./js/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready( () => {\r\n\t// Burger\r\n\tif(document.querySelector('.header__burger')) {\r\n\t\t(0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('.header__burger', '.header__menu');\r\n\t}\r\n\t//-----\r\n\t// Scroll \r\n\tif(document.querySelector('.benefist__body')) {\r\n\t\t(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('.benefist__body', '.benefist__button', 'benefist__button--active');\r\n\t}\r\n\tif(document.querySelector('.team__list')) {\r\n\t\t(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.team__list', '.team__slick-next', '.team__slick-prev', '.team__arrow', 'active', 'none');\r\n\t}\r\n\tif(document.querySelector('.reviews__list')) {\r\n\t\t(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('.reviews__list', '.reviews__slick-next', '.reviews__slick-prev', 'none', '.reviews__dots');\r\n\t}\r\n\tif(document.querySelector('.footer__bottom-button')) {\r\n\t\t(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.footer__bottom-button', '.header');\r\n\t}\r\n\t//-----\r\n\t(0,_modules_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('.header__login', '.sign', '.sign__body', '.sign__close');\r\n\t(0,_modules_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('#sign-up', '.sign-up', '.sign-up .sign__body', '.sign__close');\r\n\t(0,_modules_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('#sign-in', '.sign', '.sign__body', '.sign__close');\r\n\t(0,_modules_passwordView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\t(0,_modules_filter__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n})\r\n\r\n\n\n//# sourceURL=webpack:///./js/script.js?");

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