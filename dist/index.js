(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("VueDataLoading", [], factory);
	else if(typeof exports === 'object')
		exports["VueDataLoading"] = factory();
	else
		root["VueDataLoading"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vue_data_loading_vue__ = __webpack_require__(1);


if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('vue-data-loading', __WEBPACK_IMPORTED_MODULE_0__components_vue_data_loading_vue__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__components_vue_data_loading_vue__["a" /* default */]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_data_loading_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7077e82d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_data_loading_vue__ = __webpack_require__(9);
function injectStyle (ssrContext) {
  __webpack_require__(2)
}
var normalizeComponent = __webpack_require__(7)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vue_data_loading_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7077e82d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vue_data_loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(5)("40f15f87", content, true);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "\n.pull-down-before, .pull-down, .pull-down-loading, .pull-up-before, .pull-up, .pull-up-loading, .infinite-scroll-loading, .completed {\n    font-size: 0.8em;\n    padding: 0.4em;\n    color: #868e96;\n}\n.d-table {\n    display: table;\n    width: 100%;\n    height: 100%;\n}\n.d-cell {\n    display: table-cell;\n    text-align: center;\n    vertical-align: middle;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: {
        loading: {
            type: Boolean,
            default: false
        },
        completed: {
            type: Boolean,
            default: false
        },
        distance: {
            type: Number,
            default: 60
        },
        offset: {
            type: Number,
            default: 0
        },
        listens: {
            type: Array,
            default: function _default() {
                return ['infinite-scroll', 'pull-down', 'pull-up'];
            }
        },
        container: {
            type: String
        }
    },
    data: function data() {
        return {
            margin: {
                top: 0,
                bottom: 0
            },
            pull: {
                from: -1,
                to: -1,
                distance: 0,
                type: null,
                available: false
            },
            loadingType: null,

            PULL_UP: 'pull-up',
            PULL_DOWN: 'pull-down',
            INFINITE_SCROLL: 'infinite-scroll'
        };
    },

    computed: {
        _container: function _container() {
            return this.container ? this.$parent.$refs[this.container] : window.window;
        },
        pullHeight: function pullHeight() {
            return this.pull.distance > this.distance ? this.distance : this.pull.distance;
        }
    },
    watch: {
        loading: function loading(val, oldVal) {
            if (oldVal && !val) {
                this.setLoadingType();
            }
        }
    },
    methods: {
        updateView: function updateView() {
            var _$el$getBoundingClien = this.$el.getBoundingClientRect(),
                top = _$el$getBoundingClien.top,
                height = _$el$getBoundingClien.height;

            this.margin = {
                top: top,
                bottom: window.innerHeight - (height + top + this.offset)
            };
        },
        setLoadingType: function setLoadingType() {
            var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            this.loadingType = type;
        },
        handleScroll: function handleScroll() {
            if (this.loading || this.completed) {
                return;
            }
            this.updateView();
            if (this.margin.bottom >= 0) {
                this.$emit(this.INFINITE_SCROLL);
                this.setLoadingType(this.INFINITE_SCROLL);
            }
        },
        handleTouchStart: function handleTouchStart(e) {
            if (this.loading || !(this.hasListen(this.PULL_UP) || this.hasListen(this.PULL_DOWN)) || this.margin.top < 0 && this.margin.bottom < 0) {
                return;
            }

            this.pull.from = e.touches.item(0).pageY;
        },
        handleTouchMove: function handleTouchMove(e) {
            if (this.loading || this.pull.from < 0) {
                return;
            }
            this.pull.to = e.touches.item(0).pageY;
            var distance = this.pull.to - this.pull.from;

            if (distance > 0 && this.margin.top > 0 && this.hasListen(this.PULL_DOWN)) {
                // pull down
                this.pull.type = this.PULL_DOWN;
            } else if (distance < 0 && this.margin.bottom > 0 && this.hasListen(this.PULL_UP)) {
                // pull up
                this.pull.type = this.PULL_UP;
            } else {
                this.pull.type = null;
            }

            this.pull.distance = Math.abs(distance);
            this.pull.available = this.pull.distance >= this.distance;
        },
        handleTouchEnd: function handleTouchEnd() {
            if (this.pull.distance >= this.distance) {
                if (this.PULL_UP === this.pull.type || this.PULL_DOWN === this.pull.type) {
                    this.$emit(this.pull.type);
                    this.setLoadingType(this.pull.type);
                }
            }
            this.resetPull();
        },
        resetPull: function resetPull() {
            this.pull = {
                from: -1,
                to: -1,
                distance: 0,
                type: null,
                available: false
            };
        },
        bindEvents: function bindEvents() {
            var _this = this;

            // scroll
            if (this.hasListen(this.INFINITE_SCROLL)) {
                ['scroll', 'resize'].forEach(function (e) {
                    _this._container.addEventListener(e, _this.handleScroll);
                });
            }

            // touch
            if (this.hasListen(this.PULL_UP) || this.hasListen(this.PULL_DOWN)) {
                this._container.addEventListener('touchstart', this.handleTouchStart);
                this._container.addEventListener('touchmove', this.handleTouchMove);
                this._container.addEventListener('touchend', this.handleTouchEnd);
            }
        },
        hasListen: function hasListen(event) {
            return this.listens.indexOf(event) >= 0;
        },
        init: function init() {
            this.bindEvents();
            this.updateView();
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {
            _this2.init();
        });
    }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.PULL_DOWN === _vm.pull.type && !_vm.pull.available),expression:"PULL_DOWN === pull.type && !pull.available"}],style:({height: _vm.pullHeight + 'px'})},[_vm._t(_vm.PULL_DOWN + '-before',[_c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell",class:_vm.PULL_DOWN + '-before'},[_vm._v("下拉刷新数据")])])])],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.PULL_DOWN === _vm.pull.type && _vm.pull.available),expression:"PULL_DOWN === pull.type && pull.available"}],style:({height: _vm.pullHeight + 'px'})},[_vm._t(_vm.PULL_DOWN,[_c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell",class:_vm.PULL_DOWN},[_vm._v("松开刷新数据")])])])],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading && _vm.PULL_DOWN === _vm.loadingType),expression:"loading && PULL_DOWN === loadingType"}],style:({height: _vm.distance + 'px'})},[_vm._t(_vm.PULL_DOWN + '-loading',[_c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell",class:_vm.PULL_DOWN + '-loading'},[_vm._v("加载中...")])])])],2),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.PULL_UP === _vm.pull.type && !_vm.pull.available),expression:"PULL_UP === pull.type && !pull.available"}],style:({height: _vm.pullHeight + 'px'})},[_vm._t(_vm.PULL_UP + '-before',[_c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell",class:_vm.PULL_UP + '-before'},[_vm._v("上拉加载数据")])])])],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.PULL_UP === _vm.pull.type && _vm.pull.available),expression:"PULL_UP === pull.type && pull.available"}],style:({height: _vm.pullHeight + 'px'})},[_vm._t(_vm.PULL_UP,[_c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell",class:_vm.PULL_UP},[_vm._v("松开加载数据")])])])],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading && _vm.PULL_UP === _vm.loadingType),expression:"loading && PULL_UP === loadingType"}],style:({height: _vm.distance + 'px'})},[_vm._t(_vm.PULL_UP + '-loading',[_c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell",class:_vm.PULL_UP + '-loading'},[_vm._v("加载中...")])])])],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading && _vm.INFINITE_SCROLL === _vm.loadingType),expression:"loading && INFINITE_SCROLL === loadingType"}],style:({height: _vm.distance + 'px'})},[_vm._t(_vm.INFINITE_SCROLL + '-loading',[_c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell",class:_vm.INFINITE_SCROLL + '-loading'},[_vm._v("加载中...")])])])],2),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.loading && _vm.completed),expression:"!loading && completed"}],style:({height: _vm.distance + 'px'})},[_vm._t("completed",[_vm._m(0)])],2)],2)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-table"},[_c('div',{staticClass:"d-cell completed"},[_vm._v("加载完毕")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});