(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {
    store: _store_store__WEBPACK_IMPORTED_MODULE_4__.store,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__.PersistGate, {
      loading: null,
      persistor: _store_store__WEBPACK_IMPORTED_MODULE_4__.persistor,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 12
  }, this);
}

const makeStore = () => _store_store__WEBPACK_IMPORTED_MODULE_4__.store;

const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore);
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(MyApp));

/***/ }),

/***/ "./store/reducers/index.js":
/*!*********************************!*\
  !*** ./store/reducers/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _simpleReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simpleReducer */ "./store/reducers/simpleReducer.js");
/* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userReducer */ "./store/reducers/userReducer.js");
/* harmony import */ var _otherUserReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otherUserReducer */ "./store/reducers/otherUserReducer.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5__);






const persistConfig = {
  key: 'root',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_5___default()),
  whitelist: ['userReducer']
};
const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  simpleReducer: _simpleReducer__WEBPACK_IMPORTED_MODULE_1__.simpleReducer,
  userReducer: _userReducer__WEBPACK_IMPORTED_MODULE_2__.userReducer,
  otherUserReducer: _otherUserReducer__WEBPACK_IMPORTED_MODULE_3__.otherUserReducer
});
/* harmony default export */ __webpack_exports__["default"] = ((0,redux_persist__WEBPACK_IMPORTED_MODULE_4__.persistReducer)(persistConfig, rootReducer));

/***/ }),

/***/ "./store/reducers/otherUserReducer.js":
/*!********************************************!*\
  !*** ./store/reducers/otherUserReducer.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "otherUserReducer": function() { return /* binding */ otherUserReducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  other_user: {}
};
const otherUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.SET_OTHER_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        other_user: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.CLEAR_OTHER_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        other_user: {}
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/reducers/simpleReducer.js":
/*!*****************************************!*\
  !*** ./store/reducers/simpleReducer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "simpleReducer": function() { return /* binding */ simpleReducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  loading: false,
  full_loading: false
};
const simpleReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.LOADING_TRUE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.LOADING_FALSE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.FULL_LOADING_TRUE:
      return _objectSpread(_objectSpread({}, state), {}, {
        full_loading: true
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.FULL_LOADING_FALSE:
      return _objectSpread(_objectSpread({}, state), {}, {
        full_loading: false
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/reducers/userReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/userReducer.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userReducer": function() { return /* binding */ userReducer; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var next_dist_build_output_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/build/output/log */ "./node_modules/next/dist/build/output/log.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  user: {},
  errors: {}
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload,
        errors: {}
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_ERROR:
      return _objectSpread(_objectSpread({}, state), {}, {
        errors: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_USER:
      return _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; },
/* harmony export */   "persistor": function() { return /* binding */ persistor; }
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./store/reducers/index.js");




const initialState = {};
const middleware = [(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default())];
const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_3__.default, (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)(...middleware));
const persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistStore)(store);
/* harmony default export */ __webpack_exports__["default"] = ({
  store,
  persistor
});

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOADING_TRUE": function() { return /* binding */ LOADING_TRUE; },
/* harmony export */   "LOADING_FALSE": function() { return /* binding */ LOADING_FALSE; },
/* harmony export */   "SET_USER_SUCCESS": function() { return /* binding */ SET_USER_SUCCESS; },
/* harmony export */   "SET_USER_ERROR": function() { return /* binding */ SET_USER_ERROR; },
/* harmony export */   "LOGOUT": function() { return /* binding */ LOGOUT; },
/* harmony export */   "FULL_LOADING_TRUE": function() { return /* binding */ FULL_LOADING_TRUE; },
/* harmony export */   "FULL_LOADING_FALSE": function() { return /* binding */ FULL_LOADING_FALSE; },
/* harmony export */   "UPDATE_USER": function() { return /* binding */ UPDATE_USER; },
/* harmony export */   "SET_OTHER_USER": function() { return /* binding */ SET_OTHER_USER; },
/* harmony export */   "CLEAR_OTHER_USER": function() { return /* binding */ CLEAR_OTHER_USER; }
/* harmony export */ });
const LOADING_TRUE = 'LOADING_TRUE';
const LOADING_FALSE = 'LOADING_FALSE';
const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
const SET_USER_ERROR = 'SET_USER_ERROR';
const LOGOUT = 'LOGOUT';
const FULL_LOADING_TRUE = 'FULL_LOADING_TRUE';
const FULL_LOADING_FALSE = 'FULL_LOADING_FALSE';
const UPDATE_USER = 'UPDATE_USER';
const SET_OTHER_USER = 'SET_OTHER_USER';
const CLEAR_OTHER_USER = 'CLEAR_OTHER_USER';

/***/ }),

/***/ "./node_modules/next/dist/build/output/log.js":
/*!****************************************************!*\
  !*** ./node_modules/next/dist/build/output/log.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.wait=wait;exports.error=error;exports.warn=warn;exports.ready=ready;exports.info=info;exports.event=event;exports.prefixes=void 0;var _chalk=_interopRequireDefault(__webpack_require__(/*! chalk */ "chalk"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const prefixes={wait:_chalk.default.cyan('wait')+'  -',error:_chalk.default.red('error')+' -',warn:_chalk.default.yellow('warn')+'  -',ready:_chalk.default.green('ready')+' -',info:_chalk.default.cyan('info')+'  -',event:_chalk.default.magenta('event')+' -'};exports.prefixes=prefixes;function wait(...message){console.log(prefixes.wait,...message);}function error(...message){console.error(prefixes.error,...message);}function warn(...message){console.warn(prefixes.warn,...message);}function ready(...message){console.log(prefixes.ready,...message);}function info(...message){console.log(prefixes.info,...message);}function event(...message){console.log(prefixes.event,...message);}
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("chalk");;

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist");;

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/integration/react");;

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-persist/lib/storage");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("redux-thunk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vc3RvcmUvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL3JlZHVjZXJzL290aGVyVXNlclJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL3JlZHVjZXJzL3NpbXBsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vc3RvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvb3V0cHV0L2xvZy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwiY2hhbGtcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJwZXJzaXN0b3IiLCJtYWtlU3RvcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsIndpdGhSZWR1eCIsInBlcnNpc3RDb25maWciLCJrZXkiLCJzdG9yYWdlIiwid2hpdGVsaXN0Iiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzaW1wbGVSZWR1Y2VyIiwidXNlclJlZHVjZXIiLCJvdGhlclVzZXJSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJpbml0aWFsU3RhdGUiLCJvdGhlcl91c2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX09USEVSX1VTRVIiLCJwYXlsb2FkIiwiQ0xFQVJfT1RIRVJfVVNFUiIsImxvYWRpbmciLCJmdWxsX2xvYWRpbmciLCJMT0FESU5HX1RSVUUiLCJMT0FESU5HX0ZBTFNFIiwiRlVMTF9MT0FESU5HX1RSVUUiLCJGVUxMX0xPQURJTkdfRkFMU0UiLCJ1c2VyIiwiZXJyb3JzIiwiU0VUX1VTRVJfU1VDQ0VTUyIsIlNFVF9VU0VSX0VSUk9SIiwiTE9HT1VUIiwiVVBEQVRFX1VTRVIiLCJtaWRkbGV3YXJlIiwidGh1bmsiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInBlcnNpc3RTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxDQUFlO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFmLEVBQXVDO0FBQ25DLHNCQUFPLDhEQUFDLGlEQUFEO0FBQVUsU0FBSyxFQUFFQywrQ0FBakI7QUFBQSwyQkFDSCw4REFBQyx3RUFBRDtBQUFh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QkFBMkIsd0NBQXdDLDBCQUEwQix1Q0FBdUMsMkJBQTJCO0FBQzE3QiwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREEsbUM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB7c3RvcmUsIHBlcnNpc3Rvcn0gZnJvbSAnLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQge1BlcnNpc3RHYXRlfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0J1xuXG5cbmZ1bmN0aW9uIE15QXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcbiAgICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxQZXJzaXN0R2F0ZSBsb2FkaW5nPXtudWxsfSBwZXJzaXN0b3I9e3BlcnNpc3Rvcn0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUGVyc2lzdEdhdGU+XG4gICAgPC9Qcm92aWRlcj5cbn1cblxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmVcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSlcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKVxuIiwiaW1wb3J0IHtjb21iaW5lUmVkdWNlcnN9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge3NpbXBsZVJlZHVjZXJ9IGZyb20gJy4vc2ltcGxlUmVkdWNlcidcclxuaW1wb3J0IHt1c2VyUmVkdWNlcn0gZnJvbSAnLi91c2VyUmVkdWNlcidcclxuaW1wb3J0IHtvdGhlclVzZXJSZWR1Y2VyfSBmcm9tICcuL290aGVyVXNlclJlZHVjZXInXHJcbmltcG9ydCB7cGVyc2lzdFJlZHVjZXJ9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5OiAncm9vdCcsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgd2hpdGVsaXN0OiBbJ3VzZXJSZWR1Y2VyJ11cclxufVxyXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7c2ltcGxlUmVkdWNlciwgdXNlclJlZHVjZXIsIG90aGVyVXNlclJlZHVjZXJ9KVxyXG5leHBvcnQgZGVmYXVsdCBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcikiLCJpbXBvcnQge1xyXG4gICAgQ0xFQVJfT1RIRVJfVVNFUixcclxuICAgIFNFVF9PVEhFUl9VU0VSXHJcblxyXG59IGZyb20gJy4uL3R5cGVzJ1xyXG5cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG90aGVyX3VzZXI6IHt9LFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3RoZXJVc2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgU0VUX09USEVSX1VTRVIgOlxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgb3RoZXJfdXNlcjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBDTEVBUl9PVEhFUl9VU0VSOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBvdGhlcl91c2VyOiB7fVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIEZVTExfTE9BRElOR19GQUxTRSxcclxuICAgIEZVTExfTE9BRElOR19UUlVFLFxyXG4gICAgTE9BRElOR19GQUxTRSxcclxuICAgIExPQURJTkdfVFJVRSxcclxufSBmcm9tICcuLi90eXBlcydcclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGZ1bGxfbG9hZGluZzogZmFsc2VcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpbXBsZVJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICBjYXNlIExPQURJTkdfVFJVRTpcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRElOR19GQUxTRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRlVMTF9MT0FESU5HX1RSVUU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZ1bGxfbG9hZGluZzogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGVUxMX0xPQURJTkdfRkFMU0U6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZ1bGxfbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtcclxuICAgIFNFVF9VU0VSX1NVQ0NFU1MsIFNFVF9VU0VSX0VSUk9SLCBMT0dPVVQsIFVQREFURV9VU0VSXHJcblxyXG59IGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQge2Vycm9yfSBmcm9tIFwibmV4dC9kaXN0L2J1aWxkL291dHB1dC9sb2dcIjtcclxuXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcblxyXG4gICAgdXNlcjoge30sXHJcbiAgICBlcnJvcnM6e31cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcblxyXG4gICAgICAgIGNhc2UgU0VUX1VTRVJfU1VDQ0VTUyA6XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICAgIGVycm9yczoge31cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIFNFVF9VU0VSX0VSUk9SOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcnM6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICBMT0dPVVQ6XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgVVBEQVRFX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge3BlcnNpc3RTdG9yZX0gZnJvbSAncmVkdXgtcGVyc2lzdCdcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VycydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XHJcbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtdXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpXHJcbmV4cG9ydCBkZWZhdWx0IHtzdG9yZSwgcGVyc2lzdG9yfSIsImV4cG9ydCBjb25zdCBMT0FESU5HX1RSVUUgPSAnTE9BRElOR19UUlVFJ1xyXG5leHBvcnQgY29uc3QgTE9BRElOR19GQUxTRSA9ICdMT0FESU5HX0ZBTFNFJ1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfU1VDQ0VTUyA9ICdTRVRfVVNFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfRVJST1IgPSAnU0VUX1VTRVJfRVJST1InXHJcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xyXG5leHBvcnQgY29uc3QgRlVMTF9MT0FESU5HX1RSVUUgPSAnRlVMTF9MT0FESU5HX1RSVUUnXHJcbmV4cG9ydCBjb25zdCBGVUxMX0xPQURJTkdfRkFMU0UgPSAnRlVMTF9MT0FESU5HX0ZBTFNFJ1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVIgPSAnVVBEQVRFX1VTRVInXHJcbmV4cG9ydCBjb25zdCBTRVRfT1RIRVJfVVNFUiA9ICdTRVRfT1RIRVJfVVNFUidcclxuZXhwb3J0IGNvbnN0IENMRUFSX09USEVSX1VTRVIgPSAnQ0xFQVJfT1RIRVJfVVNFUidcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy53YWl0PXdhaXQ7ZXhwb3J0cy5lcnJvcj1lcnJvcjtleHBvcnRzLndhcm49d2FybjtleHBvcnRzLnJlYWR5PXJlYWR5O2V4cG9ydHMuaW5mbz1pbmZvO2V4cG9ydHMuZXZlbnQ9ZXZlbnQ7ZXhwb3J0cy5wcmVmaXhlcz12b2lkIDA7dmFyIF9jaGFsaz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjaGFsa1wiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBwcmVmaXhlcz17d2FpdDpfY2hhbGsuZGVmYXVsdC5jeWFuKCd3YWl0JykrJyAgLScsZXJyb3I6X2NoYWxrLmRlZmF1bHQucmVkKCdlcnJvcicpKycgLScsd2FybjpfY2hhbGsuZGVmYXVsdC55ZWxsb3coJ3dhcm4nKSsnICAtJyxyZWFkeTpfY2hhbGsuZGVmYXVsdC5ncmVlbigncmVhZHknKSsnIC0nLGluZm86X2NoYWxrLmRlZmF1bHQuY3lhbignaW5mbycpKycgIC0nLGV2ZW50Ol9jaGFsay5kZWZhdWx0Lm1hZ2VudGEoJ2V2ZW50JykrJyAtJ307ZXhwb3J0cy5wcmVmaXhlcz1wcmVmaXhlcztmdW5jdGlvbiB3YWl0KC4uLm1lc3NhZ2Upe2NvbnNvbGUubG9nKHByZWZpeGVzLndhaXQsLi4ubWVzc2FnZSk7fWZ1bmN0aW9uIGVycm9yKC4uLm1lc3NhZ2Upe2NvbnNvbGUuZXJyb3IocHJlZml4ZXMuZXJyb3IsLi4ubWVzc2FnZSk7fWZ1bmN0aW9uIHdhcm4oLi4ubWVzc2FnZSl7Y29uc29sZS53YXJuKHByZWZpeGVzLndhcm4sLi4ubWVzc2FnZSk7fWZ1bmN0aW9uIHJlYWR5KC4uLm1lc3NhZ2Upe2NvbnNvbGUubG9nKHByZWZpeGVzLnJlYWR5LC4uLm1lc3NhZ2UpO31mdW5jdGlvbiBpbmZvKC4uLm1lc3NhZ2Upe2NvbnNvbGUubG9nKHByZWZpeGVzLmluZm8sLi4ubWVzc2FnZSk7fWZ1bmN0aW9uIGV2ZW50KC4uLm1lc3NhZ2Upe2NvbnNvbGUubG9nKHByZWZpeGVzLmV2ZW50LC4uLm1lc3NhZ2UpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFsa1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=