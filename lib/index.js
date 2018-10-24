(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("reactcomponent", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["reactcomponent"] = factory(require("react"), require("react-dom"));
	else
		root["reactcomponent"] = factory(root["React"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/componentes/Hello.js":
/*!*************************************!*\
  !*** ./client/componentes/Hello.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hello; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hello_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hello.scss */ "./client/componentes/Hello.scss");
/* harmony import */ var _Hello_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Hello_scss__WEBPACK_IMPORTED_MODULE_1__);


class Hello extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Hello_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hello
    }, "Hola");
  }

}

/***/ }),

/***/ "./client/componentes/Hello.scss":
/*!***************************************!*\
  !*** ./client/componentes/Hello.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/sass-loader/lib/loader.js??ref--6-2!./Hello.scss */ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./client/componentes/Hello.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./client/componentes/base/menu.js":
/*!*****************************************!*\
  !*** ./client/componentes/base/menu.js ***!
  \*****************************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.scss */ "./client/componentes/base/menu.scss");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_menu_scss__WEBPACK_IMPORTED_MODULE_2__);



const menu = (items, e) => {
  e.stopPropagation();

  const onscroll = z => {
    const boundingRect = target.getBoundingClientRect();
    let top = boundingRect.top + boundingRect.height;
    let left = boundingRect.left;

    if (!derecha) {
      left = boundingRect.left + boundingRect.width - div.offsetWidth;
    }

    if (!abajo) {
      top = boundingRect.top - div.offsetHeight;
    }

    div.style.top = `${top}px`;
    div.style.left = `${left}px`;
  };

  const close = () => {
    window.removeEventListener('scroll', onscroll, true);
    window.removeEventListener('click', close, true);
    div.style.opacity = 0;
    setTimeout(() => {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(div);
      body.removeChild(div);
    }, 300);
  };

  const body = document.getElementsByTagName('body')[0];
  const div = document.createElement("div");
  const target = e.target;
  body.appendChild(div);
  div.classList.add(_menu_scss__WEBPACK_IMPORTED_MODULE_2___default.a.t);
  window.addEventListener('scroll', onscroll, true);
  window.addEventListener('click', close, true);
  const cmp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, items.map(it => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: it.t,
    className: _menu_scss__WEBPACK_IMPORTED_MODULE_2___default.a.li,
    onClick: e => {
      it.cb(e);
    }
  }, it.t)));
  let derecha = true;
  let abajo = true;
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(cmp, div, () => {
    const boundingRect = target.getBoundingClientRect();
    const x = div.offsetWidth + boundingRect.left;
    const y = div.offsetHeight + boundingRect.top + boundingRect.height;

    if (x > window.innerWidth) {
      derecha = false;
    }

    if (y > window.innerHeight) {
      abajo = false;
    }

    onscroll();
  });
};

/***/ }),

/***/ "./client/componentes/base/menu.scss":
/*!*******************************************!*\
  !*** ./client/componentes/base/menu.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!./menu.scss */ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./client/componentes/base/menu.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./client/componentes/base/modal.js":
/*!******************************************!*\
  !*** ./client/componentes/base/modal.js ***!
  \******************************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.scss */ "./client/componentes/base/modal.scss");
/* harmony import */ var _modal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_scss__WEBPACK_IMPORTED_MODULE_2__);



const modal = comp => {
  const body = document.getElementsByTagName('body')[0];
  const div = document.createElement("div");
  body.appendChild(div);
  div.style.position = 'fixed';
  div.style.top = '0px';
  div.style.height = '100%';
  div.style.width = '100%';
  const cmp = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.t,
    style: {
      position: 'absolute',
      top: '0px',
      width: '100%',
      height: '100%',
      backgroundColor: 'white'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: cerrar,
    style: {
      position: 'absolute',
      top: '0px',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _modal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.popup,
    onClick: e => e.stopPropagation()
  }, comp)));
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(cmp, div);
  const velo = div.firstChild.firstChild;
  const popup = div.firstChild.children[1].firstChild;

  function cerrar() {
    velo.style.opacity = 0;
    popup.style.transform = "scale(0.1)";
    setTimeout(() => {
      react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.unmountComponentAtNode(div);
      body.removeChild(div);
    }, 300);
  }

  return cerrar;
};

/***/ }),

/***/ "./client/componentes/base/modal.scss":
/*!********************************************!*\
  !*** ./client/componentes/base/modal.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/sass-loader/lib/loader.js??ref--6-2!./modal.scss */ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./client/componentes/base/modal.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./client/index-component.js":
/*!***********************************!*\
  !*** ./client/index-component.js ***!
  \***********************************/
/*! exports provided: modal, menu, Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cmp_base_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cmp/base/modal */ "./client/componentes/base/modal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return cmp_base_modal__WEBPACK_IMPORTED_MODULE_0__["modal"]; });

/* harmony import */ var cmp_base_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cmp/base/menu */ "./client/componentes/base/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return cmp_base_menu__WEBPACK_IMPORTED_MODULE_1__["menu"]; });

/* harmony import */ var cmp_Hello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cmp/Hello */ "./client/componentes/Hello.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return cmp_Hello__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./client/componentes/Hello.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js??ref--6-2!./client/componentes/Hello.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".Hello__hello___18Px2 {\n  background-color: red; }\n", "", {"version":3,"sources":["C:/Users/A153865/Desktop/base/client/componentes/Hello.scss"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAE","file":"Hello.scss","sourcesContent":[".hello {\n  background-color: red; }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"hello": "Hello__hello___18Px2"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./client/componentes/base/menu.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js??ref--6-2!./client/componentes/base/menu.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".menu__li___3WInv {\n  padding: 5px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #fff;\n  color: #555;\n  cursor: pointer;\n  transition: background-color .3s ease-out; }\n  .menu__li___3WInv:hover {\n    background-color: #e0e0e0; }\n\n.menu__t___Izuyp {\n  position: fixed;\n  border-radius: 3px;\n  box-shadow: 2px 7px 5px #888;\n  border: 1px solid #aaa;\n  background-color: #e5e5e5;\n  padding: 3px;\n  transform: translate3D(0, 0, 0);\n  animation: menu__tr___WQuE9 .3s ease-in-out;\n  transition: opacity .3s ease-in-out;\n  opacity: 1; }\n\n@keyframes menu__tr___WQuE9 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n", "", {"version":3,"sources":["C:/Users/A153865/Desktop/base/client/componentes/base/menu.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,8BAA8B;EAC9B,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,0CAA0C,EAAE;EAC5C;IACE,0BAA0B,EAAE;;AAEhC;EACE,gBAAgB;EAChB,mBAAmB;EACnB,6BAA6B;EAC7B,uBAAuB;EACvB,0BAA0B;EAC1B,aAAa;EACb,gCAAgC;EAChC,4CAA8B;EAC9B,oCAAoC;EACpC,WAAW,EAAE;;AAEf;EACE;IACE,WAAW,EAAE;EACf;IACE,WAAW,EAAE,EAAE","file":"menu.scss","sourcesContent":[".li {\n  padding: 5px 15px;\n  border-bottom: 1px solid #eee;\n  background-color: #fff;\n  color: #555;\n  cursor: pointer;\n  transition: background-color .3s ease-out; }\n  .li:hover {\n    background-color: #e0e0e0; }\n\n.t {\n  position: fixed;\n  border-radius: 3px;\n  box-shadow: 2px 7px 5px #888;\n  border: 1px solid #aaa;\n  background-color: #e5e5e5;\n  padding: 3px;\n  transform: translate3D(0, 0, 0);\n  animation: tr .3s ease-in-out;\n  transition: opacity .3s ease-in-out;\n  opacity: 1; }\n\n@keyframes tr {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"li": "menu__li___3WInv",
	"t": "menu__t___Izuyp",
	"tr": "menu__tr___WQuE9"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/sass-loader/lib/loader.js?!./client/componentes/base/modal.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/sass-loader/lib/loader.js??ref--6-2!./client/componentes/base/modal.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".modal__t___4aaGl {\n  transform: translate3D(0, 0, 0);\n  animation: modal__tr___NrVhs .7s ease-in-out;\n  transition: opacity .3s ease-in-out;\n  opacity: 0.7; }\n\n@keyframes modal__tr___NrVhs {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.8; } }\n\n.modal__popup___h0K2F {\n  border: 1px solid #aaa;\n  border-radius: 3px;\n  background-color: #f0f0f0;\n  padding: 15px;\n  animation: modal__pop___3fpQa .7s;\n  animation-timing-function: cubic-bezier(0.71, 0.55, 0.62, 1.57);\n  transform: translate3D(0, 0, 0);\n  transition: transform .3s ease-in-out;\n  box-shadow: 0px 0px 50px 20px #bbb; }\n\n@keyframes modal__pop___3fpQa {\n  0% {\n    transform: scale(0.1); }\n  100% {\n    transform: scale(1); } }\n", "", {"version":3,"sources":["C:/Users/A153865/Desktop/base/client/componentes/base/modal.scss"],"names":[],"mappings":"AAAA;EACE,gCAAgC;EAChC,6CAA8B;EAC9B,oCAAoC;EACpC,aAAa,EAAE;;AAEjB;EACE;IACE,WAAW,EAAE;EACf;IACE,aAAa,EAAE,EAAE;;AAErB;EACE,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,cAAc;EACd,kCAAmB;EACnB,gEAAgE;EAChE,gCAAgC;EAChC,sCAAsC;EACtC,mCAAmC,EAAE;;AAEvC;EACE;IACE,sBAAsB,EAAE;EAC1B;IACE,oBAAoB,EAAE,EAAE","file":"modal.scss","sourcesContent":[".t {\n  transform: translate3D(0, 0, 0);\n  animation: tr .7s ease-in-out;\n  transition: opacity .3s ease-in-out;\n  opacity: 0.7; }\n\n@keyframes tr {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 0.8; } }\n\n.popup {\n  border: 1px solid #aaa;\n  border-radius: 3px;\n  background-color: #f0f0f0;\n  padding: 15px;\n  animation: pop .7s;\n  animation-timing-function: cubic-bezier(0.71, 0.55, 0.62, 1.57);\n  transform: translate3D(0, 0, 0);\n  transition: transform .3s ease-in-out;\n  box-shadow: 0px 0px 50px 20px #bbb; }\n\n@keyframes pop {\n  0% {\n    transform: scale(0.1); }\n  100% {\n    transform: scale(1); } }\n"],"sourceRoot":""}]);

// exports
exports.locals = {
	"t": "modal__t___4aaGl",
	"tr": "modal__tr___NrVhs",
	"popup": "modal__popup___h0K2F",
	"pop": "modal__pop___3fpQa"
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./client/index-component.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./client/index-component.js */"./client/index-component.js");


/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"commonjs2":"react","commonjs":"react","amd":"react","root":"React"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom","root":"ReactDOM"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map