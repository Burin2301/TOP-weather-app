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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/UI/style.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/UI/style.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-size: 18px;\r\n    font-family: 'Dosis', sans-serif;\r\n}\r\n:root{\r\n    --falu-red: hsla(1, 66%, 27%, 1);\r\n    --sandy-brown: hsla(30, 95%, 62%, 1);\r\n    --indigo-dye: hsla(216, 39%, 28%, 1);\r\n    --indigo-dye-lighter: hsl(216, 27%, 49%);\r\n    --dartmouth-green: hsla(161, 82%, 24%, 1);\r\n    --platinum: hsla(240, 3%, 88%, 1);\r\n    --platinum-darker: hsl(240, 4%, 73%);\r\n    --black: #000000;\r\n\r\n}\r\nbody{\r\n    position: relative;\r\n}\r\nmain{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: start;\r\n\r\n    height: 100vh;\r\n    width: 100%;\r\n    background:linear-gradient(var(--platinum-darker), var(--indigo-dye-lighter));\r\n}\r\na{\r\n    text-decoration: none;\r\n}\r\nul{\r\n    list-style-type: none;\r\n}\r\n\r\n/* MOBILE MENU */\r\n\r\n.mobile-menu{\r\n    position: absolute;\r\n    top: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 260px;\r\n    height: 100vh;\r\n    padding: 1.2rem 1.8rem;\r\n    background-color: var(--indigo-dye);\r\n    color: var(--platinum);\r\n    border-radius: 0 1rem 1rem 0;\r\n    z-index: 10;\r\n}\r\n.mobile-menu-h1{\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-size: 1.8rem;\r\n    margin: .8rem 0 1.2rem;\r\n}\r\n.mobile-menu-user-greeting{\r\n    font-size: 1.4rem;\r\n    margin-bottom: 1.2rem;\r\n}\r\n.span-user-name{\r\n    font-size: 1.4rem;\r\n    color: var(--sandy-brown);\r\n}\r\n.mobile-menu-options{\r\n    color: var(--platinum);\r\n}\r\n.mobile-menu-options li{\r\n    color: var(--platinum);\r\n    margin: 1rem;\r\n    padding: .2rem;\r\n    font-weight: 600;\r\n}\r\n.mobile-menu-options li:hover,\r\n.mobile-menu-options li:focus{\r\n    color: var(--indigo-dye);\r\n    background-color: var(--sandy-brown);\r\n    border-radius: .4rem;\r\n    transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    transform: translateX(.4rem);\r\n}\r\n\r\n\r\n/* DESKTOP MENU */\r\n\r\nheader{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    background-color: var(--indigo-dye);\r\n    color: var(--platinum);\r\n    height: 3rem;\r\n    width: 100%;\r\n    padding: 0 2rem;\r\n}\r\n.burger-menu{\r\n    display: none;\r\n    width: 1.6rem;\r\n    height: 1.6rem;\r\n    padding: .1rem;\r\n    border-radius: .4rem;\r\n    cursor: pointer;\r\n}\r\n.burger-menu:hover{\r\n    background-color: var(--sandy-brown);\r\n    transform: scale(1.1);\r\n    transition: .8s cubic-bezier();\r\n}\r\n.desktop-menu-options{\r\n    display: flex;\r\n}\r\n.desktop-menu-li{\r\n    color: var(--platinum);\r\n    font-weight: 600;\r\n    margin: .5rem;\r\n    padding: .2rem;\r\n}\r\n.desktop-menu-li:hover{\r\n    color: var(--indigo-dye);\r\n    background-color: var(--sandy-brown);\r\n    border-radius: .4rem;\r\n    transition: .5s cubic-bezier(0.075, 0.82, 0.165, 1);\r\n    transform: translateX(.4rem);\r\n}\r\nheader h1{\r\n    font-size: 1.8rem;\r\n}\r\n\r\n\r\n/* SEARCH BOX */\r\n.search-component{\r\n    width: 400px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.search-div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n\r\n    margin: 4rem 1rem 0;\r\n    width: 400px;\r\n}\r\n.search-input{\r\n    width: 300px;\r\n    height: 30px;\r\n}\r\n.submit-btn{\r\n    width: 80px;\r\n    height: 30px;\r\n    font-size: 1rem;\r\n    padding: .1rem;\r\n}\r\n\r\n.search-results{\r\n    width: 300px;\r\n    height: auto;\r\n    background-color: var(--sandy-brown);\r\n    color:  var(--indigo-dye);\r\n    font-weight: 600;\r\n    align-self: flex-start;\r\n    border-radius: 0 0 1rem 1rem;\r\n    z-index: 1000;\r\n}\r\n.search-results li{\r\n    padding: .6rem;\r\n    font-size: .8rem;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* TEMPERATURE TAB   */\r\n\r\n.temperature{\r\n    position: fixed;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n\r\n    padding: 3rem;\r\n    margin-top: 25vh;\r\n}\r\n.temperature-div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.temp-h3{\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    color:  var(--platinum);\r\n    margin-bottom: 1.2rem;\r\n}\r\n.temp-show{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n\r\n    width: 200px;\r\n    height: 200px;\r\n    color:  var(--platinum);\r\n\r\n}\r\n.temp-span{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 5rem;\r\n}\r\n.temp-image{\r\n    height: 100px;\r\n    width: 100px;\r\n}\r\n.temp-detail{\r\n    margin-bottom: .4rem;\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n}\r\n.temp-detail-div{\r\n    background-color: var(--indigo-dye);\r\n    padding: 1.2rem;\r\n    border-radius: .6rem;\r\n}\r\n\r\n.inactive{\r\n    display: none;\r\n}\r\n.flex{\r\n    display: flex;\r\n}\r\n\r\n\r\n/* MEDIA QUERY */\r\n\r\n@media(max-width: 768px){\r\n    .desktop-menu-options{\r\n        display: none;\r\n    }\r\n    .burger-menu{\r\n        display: block;\r\n    }\r\n    .search-div,\r\n    .search-component{\r\n        max-width: 300px;\r\n    }\r\n    .search-input,\r\n    .search-results{\r\n        max-width: 220px;\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-weather-app/./src/UI/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/UI/style.css":
/*!**************************!*\
  !*** ./src/UI/style.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/UI/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-weather-app/./src/UI/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI/UI_functions.js":
/*!********************************!*\
  !*** ./src/UI/UI_functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   OpenMobileMenu: () => (/* binding */ OpenMobileMenu)\n/* harmony export */ });\nfunction openMenu() {\n  const mobileMenu = document.querySelector('.mobile-menu');\n  mobileMenu.classList.toggle('inactive');\n}\n\nfunction OpenMobileMenu() {\n  const burgerBtn = document.querySelector('.burger-menu');\n  burgerBtn.addEventListener('click', openMenu);\n}\n\n\n//# sourceURL=webpack://top-weather-app/./src/UI/UI_functions.js?");

/***/ }),

/***/ "./src/UI/body.js":
/*!************************!*\
  !*** ./src/UI/body.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   mainBody: () => (/* binding */ mainBody),\n/* harmony export */   mobileMenu: () => (/* binding */ mobileMenu),\n/* harmony export */   renderTemperature: () => (/* binding */ renderTemperature)\n/* harmony export */ });\n/* harmony import */ var _icons_main_menu_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/main-menu.png */ \"./src/icons/main-menu.png\");\n// IMPORTS\n\n\n// MOBILE MENU\n\nconst mobileMenu = document.createElement('div');\nmobileMenu.classList.add('mobile-menu');\nmobileMenu.setAttribute('data-mobile', 'true');\nmobileMenu.classList.add('inactive');\n\nconst mobileMenuContent = `\n<h1 class=\"mobile-menu-h1\" data-mobile=\"true\">Weather App☀🌧</h1>\n<h2 class=\"mobile-menu-user-greeting\" data-mobile=\"true\">Hi! <a href=\"\"><span class=\"span-user-name\">User</s</h2>\n<ul class=\"mobile-menu-options\" data-mobile=\"true\">\n    <li data-mobile=\"true\">Temperature</li>\n    <li data-mobile=\"true\">Forecast</li>\n    <li data-mobile=\"true\">Marine Weather</li>\n    <li data-mobile=\"true\">Historical Weather</li>\n</ul>\n`;\nmobileMenu.innerHTML = mobileMenuContent;\n\n// HEADER\n\nconst header = document.createElement('header');\nheader.classList.add('header');\n\nconst headerContent = `\n<h1>Weather App☀🌧</h1>\n<ul class=\"desktop-menu-options\">\n    <li class=\"desktop-menu-li\">Temperature</li>\n    <li class=\"desktop-menu-li\">Forecast</li>\n    <li class=\"desktop-menu-li\">Marine Weather</li>\n    <li class=\"desktop-menu-li\">Historical Weather</li>\n</ul>\n<img src=\"${_icons_main_menu_png__WEBPACK_IMPORTED_MODULE_0__}\" class=\"burger-menu\" alt=\"\">\n`;\nheader.innerHTML = headerContent;\n\nconst mainBody = document.createElement('main');\n\nconst searchComponent = document.createElement('section');\nsearchComponent.classList.add('search-component');\n\nconst searchBox = document.createElement('div');\nsearchBox.classList.add('search-div');\n\nconst searchboxInput = document.createElement('input');\nsearchboxInput.classList.add('search-input');\nsearchboxInput.type = 'text';\nsearchboxInput.name = 'cityInput';\nsearchboxInput.id = 'inputCity';\nsearchboxInput.placeholder = 'Search for a City';\n\nconst searchBtn = document.createElement('button');\nsearchBtn.classList.add('submit-btn');\nsearchBtn.id = 'submitBtn';\nsearchBtn.innerText = ' 🔍';\n\nconst searchResults = document.createElement('div');\nsearchResults.classList.add('search-results');\n\nsearchComponent.appendChild(searchBox);\nsearchBox.appendChild(searchboxInput);\nsearchBox.appendChild(searchBtn);\nsearchComponent.appendChild(searchResults);\nmainBody.appendChild(searchComponent);\n\n// TEMPERATURE SECTION\n\nfunction renderTemperature(tempObject) {\n  const oldTempSections = document.querySelectorAll('.temperature');\n  oldTempSections.forEach((section) => {\n    section.remove();\n  });\n  const tempSection = document.createElement('section');\n  tempSection.classList.add('temperature');\n\n  const weatherIconFull = tempObject.conditionIcon;\n  const weatherIcon = weatherIconFull.slice(35);\n\n  const tempSectionContent = `\n    <h3  class=\"temp-h3\">${tempObject.city}<br>${tempObject.country}</h3>\n    <div class=\"temp-show\">\n        <div class=\"temperature-div\">\n            <span class=\"temp-span\">${tempObject.temperatureC}</span>\n            <span class=\"c-temp\">°C</span>\n        </div>\n        <img src=\"./dest/weather/64x64/${weatherIcon}\" alt=\"\" class=\"temp-image\">\n        <div class=\"temp-detail-div\">\n            <span class=\"temp-detail\">${tempObject.conditionText}</span>\n            <span class=\"temp-detail\">Humidity: ${tempObject.humidity}%</span>\n            <span class=\"temp-detail\">Wind: ${tempObject.windKph} km/h</span>\n        </div>\n    </div>\n    `;\n  tempSection.innerHTML = tempSectionContent;\n  mainBody.appendChild(tempSection);\n}\n\n\n\n// cdn.weatherapi.com/weather/64x64/night/116.png\n\n\n//# sourceURL=webpack://top-weather-app/./src/UI/body.js?");

/***/ }),

/***/ "./src/apiFunctions.js":
/*!*****************************!*\
  !*** ./src/apiFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentWeather: () => (/* binding */ currentWeather),\n/* harmony export */   getApiInfo: () => (/* binding */ getApiInfo),\n/* harmony export */   marineWeather: () => (/* binding */ marineWeather),\n/* harmony export */   searchCity: () => (/* binding */ searchCity),\n/* harmony export */   showForeCast: () => (/* binding */ showForeCast),\n/* harmony export */   showHistory: () => (/* binding */ showHistory)\n/* harmony export */ });\n/* harmony import */ var _UI_body__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/body */ \"./src/UI/body.js\");\n\n\nasync function getApiInfo(city, method) {\n  const apiKey = '62c43848c224459dbea190601230912';\n  const baseUrl = 'http://api.weatherapi.com/v1';\n  const cityName = city;\n  const apiMethod = method;\n  const forecastDays = 3;\n  const apiInfo = await fetch(`${baseUrl}${apiMethod}?key=${apiKey}&q=${cityName}&days=${forecastDays},{mode: 'cors'}`);\n  const response = await apiInfo.json();\n  return response;\n}\n\n// function createTime() {\n//   const newDate = new Date();\n//   const month = newDate.getMonth() + 1;\n//   const day = newDate.getDate();\n//   const year = newDate.getFullYear();\n//   // const formattedDate = `${year}-${month}-${day}`;\n//   // console.log(formattedDate);\n// }\n\nfunction showTemperature(response) {\n  const tempObject = {\n    city: response.location.name,\n    region: response.location.region,\n    country: response.location.country,\n    temperatureF: response.current.temp_f,\n    temperatureC: response.current.temp_c,\n    feelsLikeF: response.current.feelslike_f,\n    feelsLikeC: response.current.feelslike_c,\n    latitud: response.location.lat,\n    longitude: response.location.lon,\n    humidity: response.current.humidity,\n    windKph: response.current.wind_kph,\n    windMph: response.current.wind_mph,\n    conditionText: response.current.condition.text,\n    conditionIcon: response.current.condition.icon,\n  };\n  (0,_UI_body__WEBPACK_IMPORTED_MODULE_0__.renderTemperature)(tempObject);\n  return tempObject;\n}\n\nasync function searchCity(city) {\n  const apiMethod = '/search.json';\n  const response = await getApiInfo(city, apiMethod);\n  // createTime();\n  return response;\n}\n\nasync function currentWeather(city) {\n  const apiMethod = '/current.json';\n  const response = await getApiInfo(city, apiMethod);\n  showTemperature(response);\n}\n\n//---------------------------------------------------------------------------------------------\n\nasync function marineWeather(city) {\n  const apiMethod = '/marinet.json';\n  const response = await getApiInfo(city, apiMethod);\n  return (response);\n}\n\nasync function showForeCast(city) {\n  const apiMethod = '/forecast.json';\n  // const restrictDate = 'value';\n  const response = await getApiInfo(city, apiMethod);\n  return (response);\n}\n\nasync function showHistory(city) {\n  const apiMethod = '/history.json';\n  // const restrictDate = 'value';\n  const response = await getApiInfo(city, apiMethod);\n  return (response);\n}\n\n\n\n\n//# sourceURL=webpack://top-weather-app/./src/apiFunctions.js?");

/***/ }),

/***/ "./src/autocomplete.js":
/*!*****************************!*\
  !*** ./src/autocomplete.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   searchAndAutoComplete: () => (/* binding */ searchAndAutoComplete)\n/* harmony export */ });\n/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions */ \"./src/apiFunctions.js\");\n\n\nasync function searchAndAutoComplete() {\n  const resultBox = document.querySelector('.search-results');\n  const inputBox = document.querySelector('#inputCity');\n  const submitBtn = document.querySelector('#submitBtn');\n\n  function selectLi(city) {\n    inputBox.value = city.innerHTML;\n    resultBox.innerHTML = '';\n  }\n\n  document.addEventListener('click', (e) => {\n    if (e.target.tagName.toLowerCase() === 'li') {\n      const targetLi = e.target.className;\n      const liReceived = document.querySelector(`.${targetLi}`);\n      selectLi(liReceived);\n    }\n  });\n\n  function displayCityOptions(cityArray) {\n    try {\n      const content = cityArray.map((city) => `<li class=\"${city.name.replace(/\\s+/g, '')}-${city.country.replace(/\\s+/g, '')}\">${city.name} - ${city.region}, ${city.country}</li>`);\n      resultBox.innerHTML = `<ul>${content.join('')}</ul>`;\n    } catch (error) {\n      const showTemp = document.querySelector('.temp-show');\n      showTemp.innerHTML = ' ';\n    }\n  }\n\n  async function searchCityOptions() {\n    try {\n      const inputValue = inputBox.value;\n      const cityArray = await (0,_apiFunctions__WEBPACK_IMPORTED_MODULE_0__.searchCity)(inputValue);\n      displayCityOptions(cityArray);\n      if (!inputValue.length) {\n        resultBox.innerHTML = '';\n      }\n    } catch (error) {\n    }\n  }\n\n  inputBox.onkeyup = searchCityOptions;\n\n  submitBtn.addEventListener('click', () => {\n    (0,_apiFunctions__WEBPACK_IMPORTED_MODULE_0__.currentWeather)(inputBox.value);\n  });\n}\n\n\n\n\n//# sourceURL=webpack://top-weather-app/./src/autocomplete.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apiFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiFunctions */ \"./src/apiFunctions.js\");\n/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autocomplete */ \"./src/autocomplete.js\");\n/* harmony import */ var _UI_UI_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/UI_functions */ \"./src/UI/UI_functions.js\");\n/* harmony import */ var _UI_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI/body */ \"./src/UI/body.js\");\n/* harmony import */ var _UI_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI/style.css */ \"./src/UI/style.css\");\n\n\n\n\n\n\n\n\nconst contentDiv = document.querySelector('.content');\n\nfunction renderScreen() {\n  contentDiv.appendChild(_UI_body__WEBPACK_IMPORTED_MODULE_3__.header);\n  contentDiv.appendChild(_UI_body__WEBPACK_IMPORTED_MODULE_3__.mobileMenu);\n  contentDiv.appendChild(_UI_body__WEBPACK_IMPORTED_MODULE_3__.mainBody);\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  renderScreen();\n  (0,_UI_UI_functions__WEBPACK_IMPORTED_MODULE_2__.OpenMobileMenu)();\n  (0,_autocomplete__WEBPACK_IMPORTED_MODULE_1__.searchAndAutoComplete)();\n});\n\n\n//# sourceURL=webpack://top-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/icons/main-menu.png":
/*!*********************************!*\
  !*** ./src/icons/main-menu.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f98517b5fd3ee9d3ef2.png\";\n\n//# sourceURL=webpack://top-weather-app/./src/icons/main-menu.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;