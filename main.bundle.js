/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.login-page {\n  display: flex;\n  justify-content: center; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  height: 20rem;\n  width: 20rem; }\n\n.login-label {\n  padding-left: 1rem; }\n\n.login-input {\n  border-radius: 1rem;\n  padding: .8rem;\n  margin-bottom: 2rem; }\n\n.login-button {\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #FFFFFF;\n  padding: 16px 32px;\n  text-align: center;\n  display: inline-block;\n  margin: 4px 2px;\n  box-shadow: 0px 0px 10px #000000;\n  -webkit-transition-duration: 0.4s; }\n\n.login-button:hover {\n  background-color: #47B3A6; }\n\n.app-name {\n  padding-left: 1rem;\n  text-shadow: 0px 0px 10px #000000; }\n\n.traveler-details {\n  text-align: center; }\n\n.trips-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 0;\n  padding: 0; }\n\n.card {\n  height: 25rem;\n  width: 20rem;\n  border: 2px solid #FFFFFF;\n  border-radius: 1rem;\n  box-shadow: 0px 0px 10px #000000;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 1rem; }\n\n.destination-image {\n  display: flex;\n  justify-content: flex-end;\n  height: 50%;\n  border-top-left-radius: .75rem;\n  border-top-right-radius: .75rem;\n  background-size: cover; }\n\n.party-container {\n  padding-top: 15px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center; }\n\n.party-title {\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  line-height: 12px;\n  text-shadow: 2px 2px 2px #000000; }\n\n.party-count {\n  margin: 0;\n  padding: 0;\n  font-size: 36px;\n  line-height: 36px;\n  font-weight: 300;\n  text-shadow: 2px 2px 2px #000000; }\n\n.bottom-card-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 50%;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.trip-name {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  margin-bottom: 0;\n  margin-top: .7rem;\n  text-shadow: 2px 2px 7px black; }\n\n.trip-date {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin-top: 0;\n  color: #FBEEC1; }\n\n.duration-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-top: .5rem;\n  margin-bottom: 0; }\n\n.duration-time {\n  margin-top: 0;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  color: #DAAD86; }\n\n.trip-status {\n  text-transform: capitalize;\n  font-weight: bold;\n  font-size: 1.2rem;\n  text-align: center; }\n\n.hidden {\n  display: none !important; }\n\n@media screen and (max-width: 550px) {\n  .app-name {\n    padding-left: .2rem; } }\n\n.request-trip {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #FFFFFF;\n  padding: 16px 32px;\n  text-align: center;\n  display: inline-block;\n  margin: 4px 2px;\n  box-shadow: 0px 0px 10px #000000;\n  -webkit-transition-duration: 0.4s; }\n\n.request-trip:hover {\n  background-color: #47B3A6; }\n\n.request-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.request-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 30rem;\n  width: 20rem; }\n\n.request-input {\n  border-radius: .5rem;\n  padding: .5rem; }\n\n.request-date {\n  width: 94%;\n  border-radius: .5rem;\n  padding: .5rem; }\n\n.request-button {\n  background: transparent;\n  border: 2px solid #FFFFFF;\n  border-radius: 6px;\n  cursor: pointer;\n  color: #FFFFFF;\n  padding: 16px 32px;\n  text-align: center;\n  display: inline-block;\n  margin: 4px 2px;\n  box-shadow: 0px 0px 10px #000000;\n  -webkit-transition-duration: 0.4s;\n  width: 100%; }\n\n.request-button:hover {\n  background-color: #47B3A6; }\n\n.request-button:disabled {\n  border: 1px solid grey;\n  box-shadow: none;\n  color: darkgray;\n  background-color: grey; }\n\n.trip-cost {\n  text-align: center; }\n\n@media screen and (max-width: 550px) {\n  .request-trip {\n    right: .2rem;\n    padding: 8px 16px; }\n  .request-form {\n    height: 25rem; } }\n\nbody {\n  color: #FFFFFF;\n  font-family: 'Source Sans Pro', sans-serif;\n  background: #366786; }\n", "",{"version":3,"sources":["webpack://./src/css/_normalize.scss","webpack://./src/css/main.scss","webpack://./src/css/_loginPage.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_tripsPage.scss","webpack://./src/css/_requestTrip.scss"],"names":[],"mappings":"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","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}","@import \"./_normalize.scss\";\n@import \"./_variables.scss\";\n@import \"./_loginPage.scss\";\n@import \"./_tripsPage.scss\";\n@import \"./_requestTrip.scss\";\n\nbody {\n  color: $white;\n  font-family: 'Source Sans Pro', sans-serif;\n  background: $primary-background;\n}\n\n",".login-page {\n  display: flex;\n  justify-content: center;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  height: 20rem;\n  width: 20rem;\n}\n\n.login-label {\n  padding-left: 1rem;\n}\n\n.login-input {\n  border-radius: 1rem;\n  padding: .8rem;\n  margin-bottom: 2rem;\n}\n\n.login-button {\n  @include cool-button();\n}\n\n.login-button:hover {\n  background-color: $button-hover-color;\n}","$primary-background: #366786;\n$white: #FFFFFF;\n$drop-shadow: 0px 0px 10px #000000;\n$trip-text-shadow: 2px 2px 2px #000000;\n$button-hover-color: #47B3A6;\n\n@mixin cool-button(){\n    background: transparent;\n    border: 2px solid $white;\n    border-radius: 6px;\n    cursor: pointer;\n    color: $white;\n    padding: 16px 32px;\n    text-align: center;\n    display: inline-block;\n    margin: 4px 2px;\n    box-shadow: $drop-shadow;\n    -webkit-transition-duration: 0.4s;\n}\n\n",".app-name {\n  padding-left: 1rem;\n  text-shadow: $drop-shadow;\n}\n\n.traveler-details {\n  text-align: center;\n}\n\n.trips-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  margin: 0;\n  padding: 0;\n}\n\n.card {\n  height: 25rem;\n  width: 20rem;\n  border: 2px solid $white;\n  border-radius: 1rem;\n  box-shadow: $drop-shadow;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.destination-image {\n  display: flex;\n  justify-content: flex-end;\n  height: 50%;\n  border-top-left-radius: .75rem;\n  border-top-right-radius: .75rem;\n  background-size: cover;\n}\n\n.party-container {\n  padding-top: 15px;\n  padding-right: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.party-title {\n  margin: 0;\n  padding: 0;\n  font-size: 12px;\n  line-height: 12px;\n  text-shadow: $trip-text-shadow;\n}\n\n.party-count {\n  margin: 0;\n  padding: 0;\n  font-size: 36px;\n  line-height: 36px;\n  font-weight: 300;\n  text-shadow: $trip-text-shadow;\n}\n\n.bottom-card-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 50%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.trip-name {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  margin-bottom: 0;\n  margin-top: .7rem;\n  text-shadow: 2px 2px 7px black;\n}\n\n.trip-date {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin-top: 0;\n  color: #FBEEC1;\n}\n\n.duration-title {\n  font-size: 1.2rem;\n  font-weight: 800;\n  margin-top: .5rem;\n  margin-bottom: 0;\n}\n\n.duration-time {\n  margin-top: 0;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  color: #DAAD86;\n}\n\n.trip-status {\n  text-transform: capitalize;\n  font-weight: bold;\n  font-size: 1.2rem;\n  text-align: center;\n}\n\n.hidden {\n  display: none !important;\n}\n\n@media screen and (max-width: 550px) {\n  .app-name {\n    padding-left: .2rem;\n  }\n}",".request-trip {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  @include cool-button();\n}\n\n.request-trip:hover {\n  background-color: $button-hover-color;\n}\n\n.request-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.request-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 30rem;\n  width: 20rem;\n}\n\n.request-input {\n  border-radius: .5rem;\n  padding: .5rem;\n}\n\n.request-date {\n  width: 94%;\n  border-radius: .5rem;\n  padding: .5rem;\n}\n\n.request-button {\n  @include cool-button();\n  width: 100%\n}\n\n.request-button:hover {\n  background-color: $button-hover-color;\n}\n\n.request-button:disabled {\n  border: 1px solid grey;\n  box-shadow: none;\n  color: darkgray;\n  background-color: grey;\n}\n\n.trip-cost {\n  text-align: center;\n}\n\n@media screen and (max-width: 550px) {\n  .request-trip {\n    right: .2rem;\n    padding: 8px 16px;\n  }\n\n  .request-form {\n    height: 25rem;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/*! exports provided: getTraveler, travelersData, tripsData, destinationsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTraveler", function() { return getTraveler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelersData", function() { return travelersData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripsData", function() { return tripsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinationsData", function() { return destinationsData; });
const checkForError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong, please try again.');
  } else {
    return response.json();
  }
}

function getTraveler(id) {
  return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
    .then(response => checkForError(response))
    .catch(err => console.log(`Traveler API Error: ${err.message}`))
}

function travelersData() {
  return fetch("http://localhost:3001/api/v1/travelers")
    .then(response => checkForError(response))
    .catch(err => console.log(`Travelers API Error: ${err.message}`))
}

function tripsData() {
  return fetch("http://localhost:3001/api/v1/trips")
    .then(response => checkForError(response))
    .catch(err => console.log(`Trips API Error: ${err.message}`))
}

function destinationsData() {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then(response => checkForError(response))
    .catch(err => console.log(`Destinations API Error: ${err.message}`))
}


/***/ }),

/***/ "./src/DestinationsRepo.js":
/*!*********************************!*\
  !*** ./src/DestinationsRepo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DestinationsRepo {
  constructor(destinationData) {
    this.allDestinations = destinationData;
  }

  getTripCost() {
    const destinationsDropdown = document.querySelector("#destinationsDropdown");
    const numTravelers = document.querySelector("#numTravelers");
    const tripDuration = document.querySelector("#tripDuration");
    let matchedDest = this.allDestinations.find(dest => dest.id === parseInt(destinationsDropdown.value));
    let tripCost = (numTravelers.value * matchedDest.estimatedFlightCostPerPerson
                 + tripDuration.value * matchedDest.estimatedLodgingCostPerDay) * 1.1;
    return tripCost;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DestinationsRepo);

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

class Traveler {
  constructor(userDetails) {
    this.id = userDetails.id;
    this.name = userDetails.name;
    this.travelerType = userDetails.travelerType;
    this.trips = [];
  }

  getMyTrips(tripsData) {
    this.trips = tripsData.filter(trip => trip.userID === this.id);
  }

  sortMyTrips() {
    this.trips = this.trips.sort((a, b) => dayjs(b.date) - dayjs(a.date));
  }

  getTripDetails(destinationData) {
    this.trips.forEach(trip => {
      let matchedDest = destinationData.find(dest => dest.id === trip.destinationID);
      trip.destination = matchedDest.destination;
      trip.estimatedLodgingCostPerDay = matchedDest.estimatedLodgingCostPerDay;
      trip.estimatedFlightCostPerPerson = matchedDest.estimatedFlightCostPerPerson;
      trip.image = matchedDest.image;
      trip.alt = matchedDest.alt;
    });
  }

  calculateYearlySpent() {
    const pastYear = dayjs().subtract(1, "year").format("YYYY/MM/DD");
    const costWithoutFee = this.trips.reduce((sum, trip) => {
      if (trip.date > pastYear) {
        sum += (trip.travelers * trip.estimatedFlightCostPerPerson)
          + (trip.duration * trip.estimatedLodgingCostPerDay);
      }
      return sum;
    }, 0);
    const costPlusFee = costWithoutFee * 1.1;
    return costPlusFee;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/TripsRepo.js":
/*!**************************!*\
  !*** ./src/TripsRepo.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");

class TripsRepo {
  constructor(tripData) {
    this.allTrips = tripData;
  }

  completeOldTrips() {
    let today = dayjs().format("YYYY/MM/DD");
    this.allTrips.forEach(trip => {
      if (trip.date < today) {
        trip.status = "completed";
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TripsRepo);

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {
  greetUser(traveler) {
    const greeting = document.querySelector("#greeting");
    greeting.innerText = `Howdy, ${traveler.name}!`;
  },

  displayTripCards(trips) {
    const tripsContainer = document.querySelector("#tripsContainer");
    tripsContainer.innerHTML = "";
    trips.forEach(trip => {
      tripsContainer.innerHTML += 
      `<section class="card" id=${trip.id}>
        <div class="destination-image" style=
        "background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), 
        url(${trip.image}); background-size: cover" alt="${trip.alt}">
          <div class="party-container">
          <p class="party-title">Travelers</p>
          <p class="party-count">${trip.travelers}</p>
          </div>
        </div>
        <div class="bottom-card-container">
          <h4 class="trip-name">${trip.destination}</h4>
          <p class="trip-date">${trip.date}</p>
          <p class="duration-title">Duration</p>
          <p class="duration-time">${trip.duration} days</p>
          <p class="trip-status">Status: ${trip.status}</p>
        </div>
      </section>`
    })
  },

  displayAmountSpentThisYear(amountTotal) {
    const amountSpentLine = document.querySelector(".amount-spent");
    amountSpentLine.innerText = `You've spent $${amountTotal} this year.`
  },

  displayRequestForm() {
    const travelerContainer = document.querySelector("#travelerDetails");
    const tripsContainer = document.querySelector("#tripsContainer");
    const requestContainer = document.querySelector("#requestContainer");
    const requestButton = document.querySelector("#requestTrip");
    travelerContainer.classList.toggle("hidden");
    tripsContainer.classList.toggle("hidden");
    requestContainer.classList.toggle("hidden");
    this.setMinimumDate();
    if (requestButton.innerText === "Request a Trip!") {
      requestButton.innerText = "Return to Trips";
    } else {
      requestButton.innerText = "Request a Trip!";
    }
  },

  displayDestinationDropdown(destinationsData) {
    const destinationsDropdown = document.querySelector("#destinationsDropdown");
    destinationsData.map(dest => {
      destinationsDropdown.innerHTML += 
      `<option value="${dest.id}">${dest.destination}</option>`
    })
  },

  setMinimumDate() {
    const departDate = document.querySelector("#departDate");
    let today = new Date();
    let minDate = today.toISOString().substring(0, 10);
    departDate.setAttribute("min", minDate);
  },

  displayMainPage() {
    const loginPage = document.querySelector("#loginPage");
    const requestButton = document.querySelector("#requestTrip");
    const travelerDetails = document.querySelector("#travelerDetails");
    const tripsContainer = document.querySelector("#tripsContainer");
    loginPage.classList.add("hidden");
    requestButton.classList.remove("hidden");
    travelerDetails.classList.remove("hidden");
    tripsContainer.classList.remove("hidden");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ "./src/css/main.scss");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Traveler */ "./src/Traveler.js");
/* harmony import */ var _TripsRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TripsRepo */ "./src/TripsRepo.js");
/* harmony import */ var _DestinationsRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DestinationsRepo */ "./src/DestinationsRepo.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");







const calculateCostButton = document.querySelector("#calculateCost");
const departDate = document.querySelector("#departDate");
const destinationsDropdown = document.querySelector("#destinationsDropdown");
const loginPassword = document.querySelector("#loginPassword");
const loginSubmitButton = document.querySelector("#loginSubmit");
const loginUser = document.querySelector("#loginUser");
const numTravelers = document.querySelector("#numTravelers");
const requestButton = document.querySelector("#requestTrip");
const submitRequestButton = document.querySelector("#submitRequest");
const tripCostLine = document.querySelector("#tripCost");
const tripDuration = document.querySelector("#tripDuration");

window.addEventListener("load", getData(1));

calculateCostButton.addEventListener("click", calculateTripCost);
departDate.addEventListener("change", buttonEnabler);
loginSubmitButton.addEventListener("click", checkLogin);
numTravelers.addEventListener("change", buttonEnabler);
requestButton.addEventListener("click", displayRequest);
submitRequestButton.addEventListener("click", submitTripRequest);
tripDuration.addEventListener("change", buttonEnabler);

let traveler, allTravelers, destinations, allTrips;

function getData(id) {
  Promise.all([Object(_API__WEBPACK_IMPORTED_MODULE_1__["getTraveler"])(id), Object(_API__WEBPACK_IMPORTED_MODULE_1__["travelersData"])(), Object(_API__WEBPACK_IMPORTED_MODULE_1__["tripsData"])(), Object(_API__WEBPACK_IMPORTED_MODULE_1__["destinationsData"])()])
    .then(data => {
      dataSetter.setTraveler(data[0]);
      dataSetter.setAllTravelers(data[1]);
      dataSetter.setTrips(data[2], data[0]);
      dataSetter.setDestinations(data[3]);
      dataSetter.matchTripsToDestinations();
    })
}

let dataSetter = {
  setTraveler(travelerData) {
    traveler = new _Traveler__WEBPACK_IMPORTED_MODULE_2__["default"](travelerData);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].greetUser(traveler);
  },

  setAllTravelers(travelersData) {
    allTravelers = travelersData.travelers;
  },

  setTrips(tripsData) {
    allTrips = new _TripsRepo__WEBPACK_IMPORTED_MODULE_3__["default"](tripsData.trips);
    allTrips.completeOldTrips();
    traveler.getMyTrips(tripsData.trips);
    traveler.sortMyTrips();
  },

  setDestinations(destData) {
    destinations = new _DestinationsRepo__WEBPACK_IMPORTED_MODULE_4__["default"](destData.destinations);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayDestinationDropdown(destinations.allDestinations);
  },

  matchTripsToDestinations() {
    traveler.getTripDetails(destinations.allDestinations);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTripCards(traveler.trips);
    getAnnualSpent();
  },
}

function getAnnualSpent() {
  const cost = traveler.calculateYearlySpent(traveler.trips);
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayAmountSpentThisYear(cost.toFixed(2));
}

function displayRequest() {
  if (requestButton.innerText === "Return to Trips") {
    getData(traveler.id);
  }
  _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayRequestForm();
}

function buttonEnabler() {
  if (departDate.value && tripDuration.value && numTravelers.value) {
    calculateCostButton.disabled = false;
    submitRequestButton.disabled = false;
  }
}

function calculateTripCost() {
  event.preventDefault();
  tripCostLine.innerText = 
  `This trip will cost a total of $${destinations.getTripCost().toFixed(2)}.`;      
}

function submitTripRequest() {
  event.preventDefault();
  postTripRequest();
}

function postTripRequest() {
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify({
      "id": Date.now(),
      "userID": parseInt(traveler.id),
      "destinationID": parseInt(destinationsDropdown.value),
      "travelers": parseInt(numTravelers.value),
      "date": formatDate(departDate.value),
      "duration": parseInt(tripDuration.value),
      "status": "pending",
      "suggestedActivities": []
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => traveler.trips.push(data))
    .then(tripCostLine.innerText = "Trip request submitted! An agent will be in contact with you.")
    .catch(err => console.log(`POST Error: ${err.message}`))
}

function formatDate(dateValue) {
  let splitDate = dateValue.split("-");
  let joinedDate = splitDate.join("/");
  return joinedDate
}

function checkLogin() {
  event.preventDefault();
  if (checkUsername() && loginPassword.value === "travel2020") {
    getData(traveler.id);
    _domUpdates__WEBPACK_IMPORTED_MODULE_5__["default"].displayMainPage(); 
  } else {
    alert("Invalid username and/or password. Please try again.")
  }
}

function checkUsername() {
  if (loginUser.value.split("traveler")[1]) {
    const id = parseInt(loginUser.value.split("traveler")[1]);
    traveler.id = id;
    return allTravelers.find(trav => trav.id === id);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQVBJLmpzIiwid2VicGFjazovLy8uL3NyYy9EZXN0aW5hdGlvbnNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpcHNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWFpbi5zY3NzP2U5ZGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QVUsWUFBWSxpQkFBaUIsT0FBTyxLQUFLLE1BQU0sWUFBWSxXQUFXLFVBQVUsZ0JBQWdCLEtBQUssT0FBTyxRQUFRLEtBQUssTUFBTSxrQkFBa0IsUUFBUSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGlCQUFpQixNQUFNLE1BQU0sT0FBTyxrQkFBa0IsUUFBUSxNQUFNLFFBQVEsWUFBWSxXQUFXLFVBQVUsZ0JBQWdCLE1BQU0sTUFBTSxNQUFNLGdCQUFnQixRQUFRLE1BQU0sT0FBTyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsS0FBSyxRQUFRLFFBQVEsTUFBTSxNQUFNLGtCQUFrQixNQUFNLFFBQVEsU0FBUyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsT0FBTyxNQUFNLE9BQU8sVUFBVSxrQkFBa0IsUUFBUSxNQUFNLE9BQU8sVUFBVSxrQkFBa0IsT0FBTyxNQUFNLFNBQVMsa0JBQWtCLE9BQU8sTUFBTSxTQUFTLFlBQVksaUJBQWlCLE1BQU0sTUFBTSxTQUFTLGtCQUFrQixPQUFPLE1BQU0sTUFBTSxrQkFBa0IsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGlCQUFpQixNQUFNLE1BQU0sTUFBTSxrQkFBa0IsT0FBTyxNQUFNLE1BQU0sZ0JBQWdCLFFBQVEsTUFBTSxNQUFNLGFBQWEsV0FBVyxVQUFVLGdCQUFnQixNQUFNLE1BQU0sTUFBTSxpQkFBaUIsT0FBTyxNQUFNLEtBQUssYUFBYSxXQUFXLFlBQVksaUJBQWlCLE1BQU0sTUFBTSxLQUFLLG1CQUFtQixRQUFRLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxnQkFBZ0IsS0FBSyxRQUFRLFFBQVEsTUFBTSxNQUFNLGdCQUFnQixPQUFPLE1BQU0sTUFBTSxrQkFBa0IsTUFBTSxRQUFRLFFBQVEsTUFBTSxNQUFNLGdCQUFnQixNQUFNLE1BQU0sS0FBSyxpQkFB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFVLG1CO0FBQ2QsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDsgfVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAvKiAxICovXFxuICBoZWlnaHQ6IDA7XFxuICAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTsgfVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0OyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7XFxuICAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIC8qIDEgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovIH1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTsgfVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5sb2dpbi1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIHdpZHRoOiAyMHJlbTsgfVxcblxcbi5sb2dpbi1sYWJlbCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07IH1cXG5cXG4ubG9naW4taW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTsgfVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBwYWRkaW5nOiAxNnB4IDMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDRweCAycHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40czsgfVxcblxcbi5sb2dpbi1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3QjNBNjsgfVxcblxcbi5hcHAtbmFtZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7IH1cXG5cXG4udHJhdmVsZXItZGV0YWlscyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4udHJpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uY2FyZCB7XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcblxcbi5kZXN0aW5hdGlvbi1pbWFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogNTAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjc1cmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC43NXJlbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG5cXG4ucGFydHktY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5wYXJ0eS10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDEycHg7XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDAwMDsgfVxcblxcbi5wYXJ0eS1jb3VudCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4ICMwMDAwMDA7IH1cXG5cXG4uYm90dG9tLWNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4OyB9XFxuXFxuLnRyaXAtbmFtZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogLjdyZW07XFxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA3cHggYmxhY2s7IH1cXG5cXG4udHJpcC1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgY29sb3I6ICNGQkVFQzE7IH1cXG5cXG4uZHVyYXRpb24tdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luLXRvcDogLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuXFxuLmR1cmF0aW9uLXRpbWUge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuM3JlbTtcXG4gIGNvbG9yOiAjREFBRDg2OyB9XFxuXFxuLnRyaXAtc3RhdHVzIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5hcHAtbmFtZSB7XFxuICAgIHBhZGRpbmctbGVmdDogLjJyZW07IH0gfVxcblxcbi5yZXF1ZXN0LXRyaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogNHB4IDJweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwMDAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzOyB9XFxuXFxuLnJlcXVlc3QtdHJpcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdCM0E2OyB9XFxuXFxuLnJlcXVlc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnJlcXVlc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIHdpZHRoOiAyMHJlbTsgfVxcblxcbi5yZXF1ZXN0LWlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgcGFkZGluZzogLjVyZW07IH1cXG5cXG4ucmVxdWVzdC1kYXRlIHtcXG4gIHdpZHRoOiA5NCU7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIHBhZGRpbmc6IC41cmVtOyB9XFxuXFxuLnJlcXVlc3QtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgcGFkZGluZzogMTZweCAzMnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiA0cHggMnB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDAwMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5yZXF1ZXN0LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdCM0E2OyB9XFxuXFxuLnJlcXVlc3QtYnV0dG9uOmRpc2FibGVkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY29sb3I6IGRhcmtncmF5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgfVxcblxcbi50cmlwLWNvc3Qge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIC5yZXF1ZXN0LXRyaXAge1xcbiAgICByaWdodDogLjJyZW07XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4OyB9XFxuICAucmVxdWVzdC1mb3JtIHtcXG4gICAgaGVpZ2h0OiAyNXJlbTsgfSB9XFxuXFxuYm9keSB7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQ6ICMzNjY3ODY7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19ub3JtYWxpemUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luUGFnZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdHJpcHNQYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3JlcXVlc3RUcmlwLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQUE7QUFFQTsrRUNBK0U7QURHL0U7OztFQ0NFO0FESUY7RUFDRSxpQkFBaUI7RUFDakIsTUFBQTtFQUNBLDhCQUE4QjtFQUM5QixNQUFBLEVBQU87O0FB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eUJBUFc7RUFRWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBVlc7RUFXWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0NBZDhCO0VBZTlCLGlDQUFpQztFRXNCbkMsV0FDRixFQUFBOztBQUVBO0VBQ0UseUJGdkMwQixFQUFBOztBRTBDNUI7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRTtJQUNFLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGFBQWEsRUFBQSxFQUNkOztBSjNESDtFQUNFLGNFTmE7RUZPYiwwQ0FBMEM7RUFDMUMsbUJFVDBCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAvKiAxICovXFxuICBtYXJnaW46IDA7XFxuICAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG4gIC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xcbiAgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIixcIkBpbXBvcnQgXFxcIi4vX25vcm1hbGl6ZS5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL192YXJpYWJsZXMuc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwiLi9fbG9naW5QYWdlLnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcIi4vX3RyaXBzUGFnZS5zY3NzXFxcIjtcXG5AaW1wb3J0IFxcXCIuL19yZXF1ZXN0VHJpcC5zY3NzXFxcIjtcXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiAkd2hpdGU7XFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbn1cXG5cXG5cIixcIi5sb2dpbi1wYWdlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbn1cXG5cXG4ubG9naW4tbGFiZWwge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG4ubG9naW4taW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHBhZGRpbmc6IC44cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICBAaW5jbHVkZSBjb29sLWJ1dHRvbigpO1xcbn1cXG5cXG4ubG9naW4tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24taG92ZXItY29sb3I7XFxufVwiLFwiJHByaW1hcnktYmFja2dyb3VuZDogIzM2Njc4NjtcXG4kd2hpdGU6ICNGRkZGRkY7XFxuJGRyb3Atc2hhZG93OiAwcHggMHB4IDEwcHggIzAwMDAwMDtcXG4kdHJpcC10ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDAwMDtcXG4kYnV0dG9uLWhvdmVyLWNvbG9yOiAjNDdCM0E2O1xcblxcbkBtaXhpbiBjb29sLWJ1dHRvbigpe1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgJHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICR3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAzMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgbWFyZ2luOiA0cHggMnB4O1xcbiAgICBib3gtc2hhZG93OiAkZHJvcC1zaGFkb3c7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcXG59XFxuXFxuXCIsXCIuYXBwLW5hbWUge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgdGV4dC1zaGFkb3c6ICRkcm9wLXNoYWRvdztcXG59XFxuXFxuLnRyYXZlbGVyLWRldGFpbHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udHJpcHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5jYXJkIHtcXG4gIGhlaWdodDogMjVyZW07XFxuICB3aWR0aDogMjByZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCAkd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogJGRyb3Atc2hhZG93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uZGVzdGluYXRpb24taW1hZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC43NXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNzVyZW07XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ucGFydHktY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhcnR5LXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMTJweDtcXG4gIHRleHQtc2hhZG93OiAkdHJpcC10ZXh0LXNoYWRvdztcXG59XFxuXFxuLnBhcnR5LWNvdW50IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICB0ZXh0LXNoYWRvdzogJHRyaXAtdGV4dC1zaGFkb3c7XFxufVxcblxcbi5ib3R0b20tY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxufVxcblxcbi50cmlwLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IC43cmVtO1xcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggN3B4IGJsYWNrO1xcbn1cXG5cXG4udHJpcC1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgY29sb3I6ICNGQkVFQzE7XFxufVxcblxcbi5kdXJhdGlvbi10aXRsZSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5kdXJhdGlvbi10aW1lIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XFxuICBjb2xvcjogI0RBQUQ4NjtcXG59XFxuXFxuLnRyaXAtc3RhdHVzIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAuYXBwLW5hbWUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IC4ycmVtO1xcbiAgfVxcbn1cIixcIi5yZXF1ZXN0LXRyaXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxcmVtO1xcbiAgcmlnaHQ6IDFyZW07XFxuICBAaW5jbHVkZSBjb29sLWJ1dHRvbigpO1xcbn1cXG5cXG4ucmVxdWVzdC10cmlwOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRidXR0b24taG92ZXItY29sb3I7XFxufVxcblxcbi5yZXF1ZXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlcXVlc3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIHdpZHRoOiAyMHJlbTtcXG59XFxuXFxuLnJlcXVlc3QtaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnJlcXVlc3QtZGF0ZSB7XFxuICB3aWR0aDogOTQlO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnJlcXVlc3QtYnV0dG9uIHtcXG4gIEBpbmNsdWRlIGNvb2wtYnV0dG9uKCk7XFxuICB3aWR0aDogMTAwJVxcbn1cXG5cXG4ucmVxdWVzdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJ1dHRvbi1ob3Zlci1jb2xvcjtcXG59XFxuXFxuLnJlcXVlc3QtYnV0dG9uOmRpc2FibGVkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgY29sb3I6IGRhcmtncmF5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnRyaXAtY29zdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxuICAucmVxdWVzdC10cmlwIHtcXG4gICAgcmlnaHQ6IC4ycmVtO1xcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIH1cXG5cXG4gIC5yZXF1ZXN0LWZvcm0ge1xcbiAgICBoZWlnaHQ6IDI1cmVtO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOnQuZGF5anM9ZSgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtaWxsaXNlY29uZFwiLGU9XCJzZWNvbmRcIixuPVwibWludXRlXCIscj1cImhvdXJcIixpPVwiZGF5XCIscz1cIndlZWtcIix1PVwibW9udGhcIixhPVwicXVhcnRlclwiLG89XCJ5ZWFyXCIsZj1cImRhdGVcIixoPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW14wLTldKihcXGR7MSwyfSk/Oj8oXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT9bLjpdPyhcXGQrKT8kLyxjPS9cXFsoW15cXF1dKyldfFl7MSw0fXxNezEsNH18RHsxLDJ9fGR7MSw0fXxIezEsMn18aHsxLDJ9fGF8QXxtezEsMn18c3sxLDJ9fFp7MSwyfXxTU1MvZyxkPXtuYW1lOlwiZW5cIix3ZWVrZGF5czpcIlN1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5XCIuc3BsaXQoXCJfXCIpLG1vbnRoczpcIkphbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXJcIi5zcGxpdChcIl9cIil9LCQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByPVN0cmluZyh0KTtyZXR1cm4hcnx8ci5sZW5ndGg+PWU/dDpcIlwiK0FycmF5KGUrMS1yLmxlbmd0aCkuam9pbihuKSt0fSxsPXtzOiQsejpmdW5jdGlvbih0KXt2YXIgZT0tdC51dGNPZmZzZXQoKSxuPU1hdGguYWJzKGUpLHI9TWF0aC5mbG9vcihuLzYwKSxpPW4lNjA7cmV0dXJuKGU8PTA/XCIrXCI6XCItXCIpKyQociwyLFwiMFwiKStcIjpcIiskKGksMixcIjBcIil9LG06ZnVuY3Rpb24gdChlLG4pe2lmKGUuZGF0ZSgpPG4uZGF0ZSgpKXJldHVybi10KG4sZSk7dmFyIHI9MTIqKG4ueWVhcigpLWUueWVhcigpKSsobi5tb250aCgpLWUubW9udGgoKSksaT1lLmNsb25lKCkuYWRkKHIsdSkscz1uLWk8MCxhPWUuY2xvbmUoKS5hZGQocisocz8tMToxKSx1KTtyZXR1cm4rKC0ocisobi1pKS8ocz9pLWE6YS1pKSl8fDApfSxhOmZ1bmN0aW9uKHQpe3JldHVybiB0PDA/TWF0aC5jZWlsKHQpfHwwOk1hdGguZmxvb3IodCl9LHA6ZnVuY3Rpb24oaCl7cmV0dXJue006dSx5Om8sdzpzLGQ6aSxEOmYsaDpyLG06bixzOmUsbXM6dCxROmF9W2hdfHxTdHJpbmcoaHx8XCJcIikudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9zJC8sXCJcIil9LHU6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXR9fSx5PVwiZW5cIixNPXt9O01beV09ZDt2YXIgbT1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIFN9LEQ9ZnVuY3Rpb24odCxlLG4pe3ZhciByO2lmKCF0KXJldHVybiB5O2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KU1bdF0mJihyPXQpLGUmJihNW3RdPWUscj10KTtlbHNle3ZhciBpPXQubmFtZTtNW2ldPXQscj1pfXJldHVybiFuJiZyJiYoeT1yKSxyfHwhbiYmeX0sdj1mdW5jdGlvbih0LGUpe2lmKG0odCkpcmV0dXJuIHQuY2xvbmUoKTt2YXIgbj1cIm9iamVjdFwiPT10eXBlb2YgZT9lOnt9O3JldHVybiBuLmRhdGU9dCxuLmFyZ3M9YXJndW1lbnRzLG5ldyBTKG4pfSxnPWw7Zy5sPUQsZy5pPW0sZy53PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHYodCx7bG9jYWxlOmUuJEwsdXRjOmUuJHUseDplLiR4LCRvZmZzZXQ6ZS4kb2Zmc2V0fSl9O3ZhciBTPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZCh0KXt0aGlzLiRMPUQodC5sb2NhbGUsbnVsbCwhMCksdGhpcy5wYXJzZSh0KX12YXIgJD1kLnByb3RvdHlwZTtyZXR1cm4gJC5wYXJzZT1mdW5jdGlvbih0KXt0aGlzLiRkPWZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0ZSxuPXQudXRjO2lmKG51bGw9PT1lKXJldHVybiBuZXcgRGF0ZShOYU4pO2lmKGcudShlKSlyZXR1cm4gbmV3IERhdGU7aWYoZSBpbnN0YW5jZW9mIERhdGUpcmV0dXJuIG5ldyBEYXRlKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlJiYhL1okL2kudGVzdChlKSl7dmFyIHI9ZS5tYXRjaChoKTtpZihyKXt2YXIgaT1yWzJdLTF8fDAscz0ocls3XXx8XCIwXCIpLnN1YnN0cmluZygwLDMpO3JldHVybiBuP25ldyBEYXRlKERhdGUuVVRDKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpKTpuZXcgRGF0ZShyWzFdLGksclszXXx8MSxyWzRdfHwwLHJbNV18fDAscls2XXx8MCxzKX19cmV0dXJuIG5ldyBEYXRlKGUpfSh0KSx0aGlzLiR4PXQueHx8e30sdGhpcy5pbml0KCl9LCQuaW5pdD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJGQ7dGhpcy4keT10LmdldEZ1bGxZZWFyKCksdGhpcy4kTT10LmdldE1vbnRoKCksdGhpcy4kRD10LmdldERhdGUoKSx0aGlzLiRXPXQuZ2V0RGF5KCksdGhpcy4kSD10LmdldEhvdXJzKCksdGhpcy4kbT10LmdldE1pbnV0ZXMoKSx0aGlzLiRzPXQuZ2V0U2Vjb25kcygpLHRoaXMuJG1zPXQuZ2V0TWlsbGlzZWNvbmRzKCl9LCQuJHV0aWxzPWZ1bmN0aW9uKCl7cmV0dXJuIGd9LCQuaXNWYWxpZD1mdW5jdGlvbigpe3JldHVybiEoXCJJbnZhbGlkIERhdGVcIj09PXRoaXMuJGQudG9TdHJpbmcoKSl9LCQuaXNTYW1lPWZ1bmN0aW9uKHQsZSl7dmFyIG49dih0KTtyZXR1cm4gdGhpcy5zdGFydE9mKGUpPD1uJiZuPD10aGlzLmVuZE9mKGUpfSwkLmlzQWZ0ZXI9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdih0KTx0aGlzLnN0YXJ0T2YoZSl9LCQuaXNCZWZvcmU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5lbmRPZihlKTx2KHQpfSwkLiRnPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm4gZy51KHQpP3RoaXNbZV06dGhpcy5zZXQobix0KX0sJC51bml4PWZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkvMWUzKX0sJC52YWx1ZU9mPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQuZ2V0VGltZSgpfSwkLnN0YXJ0T2Y9ZnVuY3Rpb24odCxhKXt2YXIgaD10aGlzLGM9ISFnLnUoYSl8fGEsZD1nLnAodCksJD1mdW5jdGlvbih0LGUpe3ZhciBuPWcudyhoLiR1P0RhdGUuVVRDKGguJHksZSx0KTpuZXcgRGF0ZShoLiR5LGUsdCksaCk7cmV0dXJuIGM/bjpuLmVuZE9mKGkpfSxsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGcudyhoLnRvRGF0ZSgpW3RdLmFwcGx5KGgudG9EYXRlKFwic1wiKSwoYz9bMCwwLDAsMF06WzIzLDU5LDU5LDk5OV0pLnNsaWNlKGUpKSxoKX0seT10aGlzLiRXLE09dGhpcy4kTSxtPXRoaXMuJEQsRD1cInNldFwiKyh0aGlzLiR1P1wiVVRDXCI6XCJcIik7c3dpdGNoKGQpe2Nhc2UgbzpyZXR1cm4gYz8kKDEsMCk6JCgzMSwxMSk7Y2FzZSB1OnJldHVybiBjPyQoMSxNKTokKDAsTSsxKTtjYXNlIHM6dmFyIHY9dGhpcy4kbG9jYWxlKCkud2Vla1N0YXJ0fHwwLFM9KHk8dj95Kzc6eSktdjtyZXR1cm4gJChjP20tUzptKyg2LVMpLE0pO2Nhc2UgaTpjYXNlIGY6cmV0dXJuIGwoRCtcIkhvdXJzXCIsMCk7Y2FzZSByOnJldHVybiBsKEQrXCJNaW51dGVzXCIsMSk7Y2FzZSBuOnJldHVybiBsKEQrXCJTZWNvbmRzXCIsMik7Y2FzZSBlOnJldHVybiBsKEQrXCJNaWxsaXNlY29uZHNcIiwzKTtkZWZhdWx0OnJldHVybiB0aGlzLmNsb25lKCl9fSwkLmVuZE9mPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnN0YXJ0T2YodCwhMSl9LCQuJHNldD1mdW5jdGlvbihzLGEpe3ZhciBoLGM9Zy5wKHMpLGQ9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpLCQ9KGg9e30saFtpXT1kK1wiRGF0ZVwiLGhbZl09ZCtcIkRhdGVcIixoW3VdPWQrXCJNb250aFwiLGhbb109ZCtcIkZ1bGxZZWFyXCIsaFtyXT1kK1wiSG91cnNcIixoW25dPWQrXCJNaW51dGVzXCIsaFtlXT1kK1wiU2Vjb25kc1wiLGhbdF09ZCtcIk1pbGxpc2Vjb25kc1wiLGgpW2NdLGw9Yz09PWk/dGhpcy4kRCsoYS10aGlzLiRXKTphO2lmKGM9PT11fHxjPT09byl7dmFyIHk9dGhpcy5jbG9uZSgpLnNldChmLDEpO3kuJGRbJF0obCkseS5pbml0KCksdGhpcy4kZD15LnNldChmLE1hdGgubWluKHRoaXMuJEQseS5kYXlzSW5Nb250aCgpKSkuJGR9ZWxzZSAkJiZ0aGlzLiRkWyRdKGwpO3JldHVybiB0aGlzLmluaXQoKSx0aGlzfSwkLnNldD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmNsb25lKCkuJHNldCh0LGUpfSwkLmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpc1tnLnAodCldKCl9LCQuYWRkPWZ1bmN0aW9uKHQsYSl7dmFyIGYsaD10aGlzO3Q9TnVtYmVyKHQpO3ZhciBjPWcucChhKSxkPWZ1bmN0aW9uKGUpe3ZhciBuPXYoaCk7cmV0dXJuIGcudyhuLmRhdGUobi5kYXRlKCkrTWF0aC5yb3VuZChlKnQpKSxoKX07aWYoYz09PXUpcmV0dXJuIHRoaXMuc2V0KHUsdGhpcy4kTSt0KTtpZihjPT09bylyZXR1cm4gdGhpcy5zZXQobyx0aGlzLiR5K3QpO2lmKGM9PT1pKXJldHVybiBkKDEpO2lmKGM9PT1zKXJldHVybiBkKDcpO3ZhciAkPShmPXt9LGZbbl09NmU0LGZbcl09MzZlNSxmW2VdPTFlMyxmKVtjXXx8MSxsPXRoaXMuJGQuZ2V0VGltZSgpK3QqJDtyZXR1cm4gZy53KGwsdGhpcyl9LCQuc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sJC5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZighdGhpcy5pc1ZhbGlkKCkpcmV0dXJuXCJJbnZhbGlkIERhdGVcIjt2YXIgbj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIscj1nLnoodGhpcyksaT10aGlzLiRsb2NhbGUoKSxzPXRoaXMuJEgsdT10aGlzLiRtLGE9dGhpcy4kTSxvPWkud2Vla2RheXMsZj1pLm1vbnRocyxoPWZ1bmN0aW9uKHQscixpLHMpe3JldHVybiB0JiYodFtyXXx8dChlLG4pKXx8aVtyXS5zdWJzdHIoMCxzKX0sZD1mdW5jdGlvbih0KXtyZXR1cm4gZy5zKHMlMTJ8fDEyLHQsXCIwXCIpfSwkPWkubWVyaWRpZW18fGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj10PDEyP1wiQU1cIjpcIlBNXCI7cmV0dXJuIG4/ci50b0xvd2VyQ2FzZSgpOnJ9LGw9e1lZOlN0cmluZyh0aGlzLiR5KS5zbGljZSgtMiksWVlZWTp0aGlzLiR5LE06YSsxLE1NOmcucyhhKzEsMixcIjBcIiksTU1NOmgoaS5tb250aHNTaG9ydCxhLGYsMyksTU1NTTpoKGYsYSksRDp0aGlzLiRELEREOmcucyh0aGlzLiRELDIsXCIwXCIpLGQ6U3RyaW5nKHRoaXMuJFcpLGRkOmgoaS53ZWVrZGF5c01pbix0aGlzLiRXLG8sMiksZGRkOmgoaS53ZWVrZGF5c1Nob3J0LHRoaXMuJFcsbywzKSxkZGRkOm9bdGhpcy4kV10sSDpTdHJpbmcocyksSEg6Zy5zKHMsMixcIjBcIiksaDpkKDEpLGhoOmQoMiksYTokKHMsdSwhMCksQTokKHMsdSwhMSksbTpTdHJpbmcodSksbW06Zy5zKHUsMixcIjBcIiksczpTdHJpbmcodGhpcy4kcyksc3M6Zy5zKHRoaXMuJHMsMixcIjBcIiksU1NTOmcucyh0aGlzLiRtcywzLFwiMFwiKSxaOnJ9O3JldHVybiBuLnJlcGxhY2UoYyxmdW5jdGlvbih0LGUpe3JldHVybiBlfHxsW3RdfHxyLnJlcGxhY2UoXCI6XCIsXCJcIil9KX0sJC51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sJC5kaWZmPWZ1bmN0aW9uKHQsZixoKXt2YXIgYyxkPWcucChmKSwkPXYodCksbD02ZTQqKCQudXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkseT10aGlzLSQsTT1nLm0odGhpcywkKTtyZXR1cm4gTT0oYz17fSxjW29dPU0vMTIsY1t1XT1NLGNbYV09TS8zLGNbc109KHktbCkvNjA0OGU1LGNbaV09KHktbCkvODY0ZTUsY1tyXT15LzM2ZTUsY1tuXT15LzZlNCxjW2VdPXkvMWUzLGMpW2RdfHx5LGg/TTpnLmEoTSl9LCQuZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZih1KS4kRH0sJC4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIE1bdGhpcy4kTF19LCQubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9RCh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSwkLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIGcudyh0aGlzLiRkLHRoaXMpfSwkLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LCQudG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSwkLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sJC50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LGR9KCkscD1TLnByb3RvdHlwZTtyZXR1cm4gdi5wcm90b3R5cGU9cCxbW1wiJG1zXCIsdF0sW1wiJHNcIixlXSxbXCIkbVwiLG5dLFtcIiRIXCIscl0sW1wiJFdcIixpXSxbXCIkTVwiLHVdLFtcIiR5XCIsb10sW1wiJERcIixmXV0uZm9yRWFjaChmdW5jdGlvbih0KXtwW3RbMV1dPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLiRnKGUsdFswXSx0WzFdKX19KSx2LmV4dGVuZD1mdW5jdGlvbih0LGUpe3JldHVybiB0LiRpfHwodChlLFMsdiksdC4kaT0hMCksdn0sdi5sb2NhbGU9RCx2LmlzRGF5anM9bSx2LnVuaXg9ZnVuY3Rpb24odCl7cmV0dXJuIHYoMWUzKnQpfSx2LmVuPU1beV0sdi5Mcz1NLHYucD17fSx2fSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IGNoZWNrRm9yRXJyb3IgPSAocmVzcG9uc2UpID0+IHtcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcignU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uJyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhdmVsZXIoaWQpIHtcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycy8ke2lkfWApXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gY2hlY2tGb3JFcnJvcihyZXNwb25zZSkpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgVHJhdmVsZXIgQVBJIEVycm9yOiAke2Vyci5tZXNzYWdlfWApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVsZXJzRGF0YSgpIHtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiBjaGVja0ZvckVycm9yKHJlc3BvbnNlKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBUcmF2ZWxlcnMgQVBJIEVycm9yOiAke2Vyci5tZXNzYWdlfWApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJpcHNEYXRhKCkge1xuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gY2hlY2tGb3JFcnJvcihyZXNwb25zZSkpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhgVHJpcHMgQVBJIEVycm9yOiAke2Vyci5tZXNzYWdlfWApKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVzdGluYXRpb25zRGF0YSgpIHtcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9kZXN0aW5hdGlvbnNcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiBjaGVja0ZvckVycm9yKHJlc3BvbnNlKSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBEZXN0aW5hdGlvbnMgQVBJIEVycm9yOiAke2Vyci5tZXNzYWdlfWApKVxufVxuIiwiY2xhc3MgRGVzdGluYXRpb25zUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMuYWxsRGVzdGluYXRpb25zID0gZGVzdGluYXRpb25EYXRhO1xuICB9XG5cbiAgZ2V0VHJpcENvc3QoKSB7XG4gICAgY29uc3QgZGVzdGluYXRpb25zRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc3RpbmF0aW9uc0Ryb3Bkb3duXCIpO1xuICAgIGNvbnN0IG51bVRyYXZlbGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtVHJhdmVsZXJzXCIpO1xuICAgIGNvbnN0IHRyaXBEdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJpcER1cmF0aW9uXCIpO1xuICAgIGxldCBtYXRjaGVkRGVzdCA9IHRoaXMuYWxsRGVzdGluYXRpb25zLmZpbmQoZGVzdCA9PiBkZXN0LmlkID09PSBwYXJzZUludChkZXN0aW5hdGlvbnNEcm9wZG93bi52YWx1ZSkpO1xuICAgIGxldCB0cmlwQ29zdCA9IChudW1UcmF2ZWxlcnMudmFsdWUgKiBtYXRjaGVkRGVzdC5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uXG4gICAgICAgICAgICAgICAgICsgdHJpcER1cmF0aW9uLnZhbHVlICogbWF0Y2hlZERlc3QuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkpICogMS4xO1xuICAgIHJldHVybiB0cmlwQ29zdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbnNSZXBvOyIsImNvbnN0IGRheWpzID0gcmVxdWlyZShcImRheWpzXCIpO1xuXG5jbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJEZXRhaWxzKSB7XG4gICAgdGhpcy5pZCA9IHVzZXJEZXRhaWxzLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXJEZXRhaWxzLm5hbWU7XG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB1c2VyRGV0YWlscy50cmF2ZWxlclR5cGU7XG4gICAgdGhpcy50cmlwcyA9IFtdO1xuICB9XG5cbiAgZ2V0TXlUcmlwcyh0cmlwc0RhdGEpIHtcbiAgICB0aGlzLnRyaXBzID0gdHJpcHNEYXRhLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0aGlzLmlkKTtcbiAgfVxuXG4gIHNvcnRNeVRyaXBzKCkge1xuICAgIHRoaXMudHJpcHMgPSB0aGlzLnRyaXBzLnNvcnQoKGEsIGIpID0+IGRheWpzKGIuZGF0ZSkgLSBkYXlqcyhhLmRhdGUpKTtcbiAgfVxuXG4gIGdldFRyaXBEZXRhaWxzKGRlc3RpbmF0aW9uRGF0YSkge1xuICAgIHRoaXMudHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGxldCBtYXRjaGVkRGVzdCA9IGRlc3RpbmF0aW9uRGF0YS5maW5kKGRlc3QgPT4gZGVzdC5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKTtcbiAgICAgIHRyaXAuZGVzdGluYXRpb24gPSBtYXRjaGVkRGVzdC5kZXN0aW5hdGlvbjtcbiAgICAgIHRyaXAuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgPSBtYXRjaGVkRGVzdC5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICAgIHRyaXAuZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbiA9IG1hdGNoZWREZXN0LmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgICB0cmlwLmltYWdlID0gbWF0Y2hlZERlc3QuaW1hZ2U7XG4gICAgICB0cmlwLmFsdCA9IG1hdGNoZWREZXN0LmFsdDtcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVllYXJseVNwZW50KCkge1xuICAgIGNvbnN0IHBhc3RZZWFyID0gZGF5anMoKS5zdWJ0cmFjdCgxLCBcInllYXJcIikuZm9ybWF0KFwiWVlZWS9NTS9ERFwiKTtcbiAgICBjb25zdCBjb3N0V2l0aG91dEZlZSA9IHRoaXMudHJpcHMucmVkdWNlKChzdW0sIHRyaXApID0+IHtcbiAgICAgIGlmICh0cmlwLmRhdGUgPiBwYXN0WWVhcikge1xuICAgICAgICBzdW0gKz0gKHRyaXAudHJhdmVsZXJzICogdHJpcC5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uKVxuICAgICAgICAgICsgKHRyaXAuZHVyYXRpb24gKiB0cmlwLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMCk7XG4gICAgY29uc3QgY29zdFBsdXNGZWUgPSBjb3N0V2l0aG91dEZlZSAqIDEuMTtcbiAgICByZXR1cm4gY29zdFBsdXNGZWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXIiLCJjb25zdCBkYXlqcyA9IHJlcXVpcmUoXCJkYXlqc1wiKTtcblxuY2xhc3MgVHJpcHNSZXBvIHtcbiAgY29uc3RydWN0b3IodHJpcERhdGEpIHtcbiAgICB0aGlzLmFsbFRyaXBzID0gdHJpcERhdGE7XG4gIH1cblxuICBjb21wbGV0ZU9sZFRyaXBzKCkge1xuICAgIGxldCB0b2RheSA9IGRheWpzKCkuZm9ybWF0KFwiWVlZWS9NTS9ERFwiKTtcbiAgICB0aGlzLmFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBpZiAodHJpcC5kYXRlIDwgdG9kYXkpIHtcbiAgICAgICAgdHJpcC5zdGF0dXMgPSBcImNvbXBsZXRlZFwiO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcHNSZXBvOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImxldCBkb21VcGRhdGVzID0ge1xuICBncmVldFVzZXIodHJhdmVsZXIpIHtcbiAgICBjb25zdCBncmVldGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ3JlZXRpbmdcIik7XG4gICAgZ3JlZXRpbmcuaW5uZXJUZXh0ID0gYEhvd2R5LCAke3RyYXZlbGVyLm5hbWV9IWA7XG4gIH0sXG5cbiAgZGlzcGxheVRyaXBDYXJkcyh0cmlwcykge1xuICAgIGNvbnN0IHRyaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmlwc0NvbnRhaW5lclwiKTtcbiAgICB0cmlwc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICB0cmlwc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gXG4gICAgICBgPHNlY3Rpb24gY2xhc3M9XCJjYXJkXCIgaWQ9JHt0cmlwLmlkfT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRlc3RpbmF0aW9uLWltYWdlXCIgc3R5bGU9XG4gICAgICAgIFwiYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSksIFxuICAgICAgICB1cmwoJHt0cmlwLmltYWdlfSk7IGJhY2tncm91bmQtc2l6ZTogY292ZXJcIiBhbHQ9XCIke3RyaXAuYWx0fVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJ0eS1jb250YWluZXJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cInBhcnR5LXRpdGxlXCI+VHJhdmVsZXJzPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwicGFydHktY291bnRcIj4ke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDQgY2xhc3M9XCJ0cmlwLW5hbWVcIj4ke3RyaXAuZGVzdGluYXRpb259PC9oND5cbiAgICAgICAgICA8cCBjbGFzcz1cInRyaXAtZGF0ZVwiPiR7dHJpcC5kYXRlfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImR1cmF0aW9uLXRpdGxlXCI+RHVyYXRpb248L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkdXJhdGlvbi10aW1lXCI+JHt0cmlwLmR1cmF0aW9ufSBkYXlzPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwidHJpcC1zdGF0dXNcIj5TdGF0dXM6ICR7dHJpcC5zdGF0dXN9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5gXG4gICAgfSlcbiAgfSxcblxuICBkaXNwbGF5QW1vdW50U3BlbnRUaGlzWWVhcihhbW91bnRUb3RhbCkge1xuICAgIGNvbnN0IGFtb3VudFNwZW50TGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYW1vdW50LXNwZW50XCIpO1xuICAgIGFtb3VudFNwZW50TGluZS5pbm5lclRleHQgPSBgWW91J3ZlIHNwZW50ICQke2Ftb3VudFRvdGFsfSB0aGlzIHllYXIuYFxuICB9LFxuXG4gIGRpc3BsYXlSZXF1ZXN0Rm9ybSgpIHtcbiAgICBjb25zdCB0cmF2ZWxlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJhdmVsZXJEZXRhaWxzXCIpO1xuICAgIGNvbnN0IHRyaXBzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmlwc0NvbnRhaW5lclwiKTtcbiAgICBjb25zdCByZXF1ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1ZXN0Q29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHJlcXVlc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3JlcXVlc3RUcmlwXCIpO1xuICAgIHRyYXZlbGVyQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgdHJpcHNDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICByZXF1ZXN0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgdGhpcy5zZXRNaW5pbXVtRGF0ZSgpO1xuICAgIGlmIChyZXF1ZXN0QnV0dG9uLmlubmVyVGV4dCA9PT0gXCJSZXF1ZXN0IGEgVHJpcCFcIikge1xuICAgICAgcmVxdWVzdEJ1dHRvbi5pbm5lclRleHQgPSBcIlJldHVybiB0byBUcmlwc1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXF1ZXN0QnV0dG9uLmlubmVyVGV4dCA9IFwiUmVxdWVzdCBhIFRyaXAhXCI7XG4gICAgfVxuICB9LFxuXG4gIGRpc3BsYXlEZXN0aW5hdGlvbkRyb3Bkb3duKGRlc3RpbmF0aW9uc0RhdGEpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbnNEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzdGluYXRpb25zRHJvcGRvd25cIik7XG4gICAgZGVzdGluYXRpb25zRGF0YS5tYXAoZGVzdCA9PiB7XG4gICAgICBkZXN0aW5hdGlvbnNEcm9wZG93bi5pbm5lckhUTUwgKz0gXG4gICAgICBgPG9wdGlvbiB2YWx1ZT1cIiR7ZGVzdC5pZH1cIj4ke2Rlc3QuZGVzdGluYXRpb259PC9vcHRpb24+YFxuICAgIH0pXG4gIH0sXG5cbiAgc2V0TWluaW11bURhdGUoKSB7XG4gICAgY29uc3QgZGVwYXJ0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVwYXJ0RGF0ZVwiKTtcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtaW5EYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zdWJzdHJpbmcoMCwgMTApO1xuICAgIGRlcGFydERhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIG1pbkRhdGUpO1xuICB9LFxuXG4gIGRpc3BsYXlNYWluUGFnZSgpIHtcbiAgICBjb25zdCBsb2dpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvZ2luUGFnZVwiKTtcbiAgICBjb25zdCByZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1ZXN0VHJpcFwiKTtcbiAgICBjb25zdCB0cmF2ZWxlckRldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyYXZlbGVyRGV0YWlsc1wiKTtcbiAgICBjb25zdCB0cmlwc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdHJpcHNDb250YWluZXJcIik7XG4gICAgbG9naW5QYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgcmVxdWVzdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHRyYXZlbGVyRGV0YWlscy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHRyaXBzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJpbXBvcnQgXCIuL2Nzcy9tYWluLnNjc3NcIjtcbmltcG9ydCB7Z2V0VHJhdmVsZXIsIHRyYXZlbGVyc0RhdGEsIHRyaXBzRGF0YSwgZGVzdGluYXRpb25zRGF0YX0gZnJvbSBcIi4vQVBJXCI7XG5pbXBvcnQgVHJhdmVsZXIgZnJvbSBcIi4vVHJhdmVsZXJcIjtcbmltcG9ydCBUcmlwc1JlcG8gZnJvbSBcIi4vVHJpcHNSZXBvXCI7XG5pbXBvcnQgRGVzdGluYXRpb25zUmVwbyBmcm9tIFwiLi9EZXN0aW5hdGlvbnNSZXBvXCI7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tIFwiLi9kb21VcGRhdGVzXCI7XG5cbmNvbnN0IGNhbGN1bGF0ZUNvc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbGN1bGF0ZUNvc3RcIik7XG5jb25zdCBkZXBhcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXBhcnREYXRlXCIpO1xuY29uc3QgZGVzdGluYXRpb25zRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc3RpbmF0aW9uc0Ryb3Bkb3duXCIpO1xuY29uc3QgbG9naW5QYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW5QYXNzd29yZFwiKTtcbmNvbnN0IGxvZ2luU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpblN1Ym1pdFwiKTtcbmNvbnN0IGxvZ2luVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW5Vc2VyXCIpO1xuY29uc3QgbnVtVHJhdmVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1UcmF2ZWxlcnNcIik7XG5jb25zdCByZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZXF1ZXN0VHJpcFwiKTtcbmNvbnN0IHN1Ym1pdFJlcXVlc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdFJlcXVlc3RcIik7XG5jb25zdCB0cmlwQ29zdExpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RyaXBDb3N0XCIpO1xuY29uc3QgdHJpcER1cmF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0cmlwRHVyYXRpb25cIik7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnZXREYXRhKDEpKTtcblxuY2FsY3VsYXRlQ29zdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsY3VsYXRlVHJpcENvc3QpO1xuZGVwYXJ0RGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGJ1dHRvbkVuYWJsZXIpO1xubG9naW5TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrTG9naW4pO1xubnVtVHJhdmVsZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgYnV0dG9uRW5hYmxlcik7XG5yZXF1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UmVxdWVzdCk7XG5zdWJtaXRSZXF1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUcmlwUmVxdWVzdCk7XG50cmlwRHVyYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBidXR0b25FbmFibGVyKTtcblxubGV0IHRyYXZlbGVyLCBhbGxUcmF2ZWxlcnMsIGRlc3RpbmF0aW9ucywgYWxsVHJpcHM7XG5cbmZ1bmN0aW9uIGdldERhdGEoaWQpIHtcbiAgUHJvbWlzZS5hbGwoW2dldFRyYXZlbGVyKGlkKSwgdHJhdmVsZXJzRGF0YSgpLCB0cmlwc0RhdGEoKSwgZGVzdGluYXRpb25zRGF0YSgpXSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGRhdGFTZXR0ZXIuc2V0VHJhdmVsZXIoZGF0YVswXSk7XG4gICAgICBkYXRhU2V0dGVyLnNldEFsbFRyYXZlbGVycyhkYXRhWzFdKTtcbiAgICAgIGRhdGFTZXR0ZXIuc2V0VHJpcHMoZGF0YVsyXSwgZGF0YVswXSk7XG4gICAgICBkYXRhU2V0dGVyLnNldERlc3RpbmF0aW9ucyhkYXRhWzNdKTtcbiAgICAgIGRhdGFTZXR0ZXIubWF0Y2hUcmlwc1RvRGVzdGluYXRpb25zKCk7XG4gICAgfSlcbn1cblxubGV0IGRhdGFTZXR0ZXIgPSB7XG4gIHNldFRyYXZlbGVyKHRyYXZlbGVyRGF0YSkge1xuICAgIHRyYXZlbGVyID0gbmV3IFRyYXZlbGVyKHRyYXZlbGVyRGF0YSk7XG4gICAgZG9tVXBkYXRlcy5ncmVldFVzZXIodHJhdmVsZXIpO1xuICB9LFxuXG4gIHNldEFsbFRyYXZlbGVycyh0cmF2ZWxlcnNEYXRhKSB7XG4gICAgYWxsVHJhdmVsZXJzID0gdHJhdmVsZXJzRGF0YS50cmF2ZWxlcnM7XG4gIH0sXG5cbiAgc2V0VHJpcHModHJpcHNEYXRhKSB7XG4gICAgYWxsVHJpcHMgPSBuZXcgVHJpcHNSZXBvKHRyaXBzRGF0YS50cmlwcyk7XG4gICAgYWxsVHJpcHMuY29tcGxldGVPbGRUcmlwcygpO1xuICAgIHRyYXZlbGVyLmdldE15VHJpcHModHJpcHNEYXRhLnRyaXBzKTtcbiAgICB0cmF2ZWxlci5zb3J0TXlUcmlwcygpO1xuICB9LFxuXG4gIHNldERlc3RpbmF0aW9ucyhkZXN0RGF0YSkge1xuICAgIGRlc3RpbmF0aW9ucyA9IG5ldyBEZXN0aW5hdGlvbnNSZXBvKGRlc3REYXRhLmRlc3RpbmF0aW9ucyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5RGVzdGluYXRpb25Ecm9wZG93bihkZXN0aW5hdGlvbnMuYWxsRGVzdGluYXRpb25zKTtcbiAgfSxcblxuICBtYXRjaFRyaXBzVG9EZXN0aW5hdGlvbnMoKSB7XG4gICAgdHJhdmVsZXIuZ2V0VHJpcERldGFpbHMoZGVzdGluYXRpb25zLmFsbERlc3RpbmF0aW9ucyk7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcENhcmRzKHRyYXZlbGVyLnRyaXBzKTtcbiAgICBnZXRBbm51YWxTcGVudCgpO1xuICB9LFxufVxuXG5mdW5jdGlvbiBnZXRBbm51YWxTcGVudCgpIHtcbiAgY29uc3QgY29zdCA9IHRyYXZlbGVyLmNhbGN1bGF0ZVllYXJseVNwZW50KHRyYXZlbGVyLnRyaXBzKTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QW1vdW50U3BlbnRUaGlzWWVhcihjb3N0LnRvRml4ZWQoMikpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5UmVxdWVzdCgpIHtcbiAgaWYgKHJlcXVlc3RCdXR0b24uaW5uZXJUZXh0ID09PSBcIlJldHVybiB0byBUcmlwc1wiKSB7XG4gICAgZ2V0RGF0YSh0cmF2ZWxlci5pZCk7XG4gIH1cbiAgZG9tVXBkYXRlcy5kaXNwbGF5UmVxdWVzdEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gYnV0dG9uRW5hYmxlcigpIHtcbiAgaWYgKGRlcGFydERhdGUudmFsdWUgJiYgdHJpcER1cmF0aW9uLnZhbHVlICYmIG51bVRyYXZlbGVycy52YWx1ZSkge1xuICAgIGNhbGN1bGF0ZUNvc3RCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBzdWJtaXRSZXF1ZXN0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVHJpcENvc3QoKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRyaXBDb3N0TGluZS5pbm5lclRleHQgPSBcbiAgYFRoaXMgdHJpcCB3aWxsIGNvc3QgYSB0b3RhbCBvZiAkJHtkZXN0aW5hdGlvbnMuZ2V0VHJpcENvc3QoKS50b0ZpeGVkKDIpfS5gOyAgICAgIFxufVxuXG5mdW5jdGlvbiBzdWJtaXRUcmlwUmVxdWVzdCgpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcG9zdFRyaXBSZXF1ZXN0KCk7XG59XG5cbmZ1bmN0aW9uIHBvc3RUcmlwUmVxdWVzdCgpIHtcbiAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCIsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiaWRcIjogRGF0ZS5ub3coKSxcbiAgICAgIFwidXNlcklEXCI6IHBhcnNlSW50KHRyYXZlbGVyLmlkKSxcbiAgICAgIFwiZGVzdGluYXRpb25JRFwiOiBwYXJzZUludChkZXN0aW5hdGlvbnNEcm9wZG93bi52YWx1ZSksXG4gICAgICBcInRyYXZlbGVyc1wiOiBwYXJzZUludChudW1UcmF2ZWxlcnMudmFsdWUpLFxuICAgICAgXCJkYXRlXCI6IGZvcm1hdERhdGUoZGVwYXJ0RGF0ZS52YWx1ZSksXG4gICAgICBcImR1cmF0aW9uXCI6IHBhcnNlSW50KHRyaXBEdXJhdGlvbi52YWx1ZSksXG4gICAgICBcInN0YXR1c1wiOiBcInBlbmRpbmdcIixcbiAgICAgIFwic3VnZ2VzdGVkQWN0aXZpdGllc1wiOiBbXVxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgLnRoZW4oZGF0YSA9PiB0cmF2ZWxlci50cmlwcy5wdXNoKGRhdGEpKVxuICAgIC50aGVuKHRyaXBDb3N0TGluZS5pbm5lclRleHQgPSBcIlRyaXAgcmVxdWVzdCBzdWJtaXR0ZWQhIEFuIGFnZW50IHdpbGwgYmUgaW4gY29udGFjdCB3aXRoIHlvdS5cIilcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGBQT1NUIEVycm9yOiAke2Vyci5tZXNzYWdlfWApKVxufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVWYWx1ZSkge1xuICBsZXQgc3BsaXREYXRlID0gZGF0ZVZhbHVlLnNwbGl0KFwiLVwiKTtcbiAgbGV0IGpvaW5lZERhdGUgPSBzcGxpdERhdGUuam9pbihcIi9cIik7XG4gIHJldHVybiBqb2luZWREYXRlXG59XG5cbmZ1bmN0aW9uIGNoZWNrTG9naW4oKSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGlmIChjaGVja1VzZXJuYW1lKCkgJiYgbG9naW5QYXNzd29yZC52YWx1ZSA9PT0gXCJ0cmF2ZWwyMDIwXCIpIHtcbiAgICBnZXREYXRhKHRyYXZlbGVyLmlkKTtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlNYWluUGFnZSgpOyBcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIkludmFsaWQgdXNlcm5hbWUgYW5kL29yIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVXNlcm5hbWUoKSB7XG4gIGlmIChsb2dpblVzZXIudmFsdWUuc3BsaXQoXCJ0cmF2ZWxlclwiKVsxXSkge1xuICAgIGNvbnN0IGlkID0gcGFyc2VJbnQobG9naW5Vc2VyLnZhbHVlLnNwbGl0KFwidHJhdmVsZXJcIilbMV0pO1xuICAgIHRyYXZlbGVyLmlkID0gaWQ7XG4gICAgcmV0dXJuIGFsbFRyYXZlbGVycy5maW5kKHRyYXYgPT4gdHJhdi5pZCA9PT0gaWQpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==