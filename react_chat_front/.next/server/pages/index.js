(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": function() { return /* binding */ axiosInstance; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "register": function() { return /* binding */ register; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const BASE_URL = 'http://127.0.0.1:8000';
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: BASE_URL
});
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('access');

  if (token) {
    config.headers['Authorization'] = 'JWT ' + token;
  }

  return config;
}, error => {
  Promise.reject(error);
});
axiosInstance.interceptors.response.use(response => {
  return response;
}, function (error) {
  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url === `/auth/jwt/refresh/`) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
    return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = localStorage.getItem('refresh');
    return axiosInstance.post('/auth/jwt/refresh/', {
      "refresh": refreshToken
    }).then(res => {
      if (res.status === 200) {
        localStorage.setItem('access', res.data.access);
        axiosInstance.defaults.headers.common['Authorization'] = 'JWT ' + res.data.access;
        return axiosInstance(originalRequest);
      } else next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
    });
  }

  return Promise.reject(error);
});
const login = async params => {
  return new Promise(async (resolve, reject) => {
    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/auth/jwt/create/`, params).then(async response => {
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('access', response.data.access);
      resolve({
        status: response.status
      });
    }).catch(error => {
      reject({
        status: error.response.status,
        message: error.response.data.detail
      });
    });
  });
};
const register = async params => {
  return new Promise(async (resolve, reject) => {
    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/auth/users/`, params).then(async response => {
      resolve({
        status: response.status
      });
    }).catch(error => {
      reject({
        status: error.response.status,
        errors: error.response.data
      });
    });
  });
};

/***/ }),

/***/ "./components/FullLoading/Loading.js":
/*!*******************************************!*\
  !*** ./components/FullLoading/Loading.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullLoading.module.css */ "./components/FullLoading/fullLoading.module.css");
/* harmony import */ var _fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\FullLoading\\Loading.js";




function Loading(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/HomeMobile/HomeMobile.js":
/*!*********************************************!*\
  !*** ./components/HomeMobile/HomeMobile.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _homeMobile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeMobile.module.css */ "./components/HomeMobile/homeMobile.module.css");
/* harmony import */ var _homeMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_homeMobile_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SideBox_SideBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SideBox/SideBox */ "./components/SideBox/SideBox.js");
/* harmony import */ var _MessageField_MessageField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MessageField/MessageField */ "./components/MessageField/MessageField.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\HomeMobile\\HomeMobile.js";






function HomeMobile(props) {
  const {
    other_user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.otherUserReducer);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_homeMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_homeMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: Object.keys(other_user).length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideBox_SideBox__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 57
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MessageField_MessageField__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 70
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HomeMobile);

/***/ }),

/***/ "./components/InputBox/InputBox.js":
/*!*****************************************!*\
  !*** ./components/InputBox/InputBox.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inputBox_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputBox.module.css */ "./components/InputBox/inputBox.module.css");
/* harmony import */ var _inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/send.svg */ "./src/assets/svg/send.svg");
/* harmony import */ var _src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/svg/smiling.svg */ "./src/assets/svg/smiling.svg");
/* harmony import */ var _src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\InputBox\\InputBox.js";





const EmojiPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! emoji-picker-react */ "emoji-picker-react", 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! emoji-picker-react */ "emoji-picker-react")],
    modules: ["..\\components\\InputBox\\InputBox.js -> " + 'emoji-picker-react']
  }
});

function InputBox({
  sendMessage
}) {
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    0: emojiActive,
    1: setEmojiActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: message,
    1: setMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const onEmojiClick = (event, emojiObject) => {
    const cursor = ref.current.selectionStart;
    const text = message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
    setMessage(text);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      sendMessage(message);
      setMessage("");
      setEmojiActive(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        onKeyDown: handleKeyDown,
        ref: ref,
        value: message,
        onChange: event => {
          setMessage(event.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: () => {
          setEmojiActive(!emojiActive);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().emoji_wrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: [(_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().emoji_container), emojiActive ? (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : undefined].join(' '),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmojiPicker, {
            onEmojiClick: onEmojiClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: () => {
          sendMessage(message), setMessage(""), setEmojiActive(false);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (InputBox);

/***/ }),

/***/ "./components/LoadingSpinner/LoadingSpinner.js":
/*!*****************************************************!*\
  !*** ./components/LoadingSpinner/LoadingSpinner.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingSpinner.module.css */ "./components/LoadingSpinner/loadingSpinner.module.css");
/* harmony import */ var _loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\LoadingSpinner\\LoadingSpinner.js";



function LoadingSpinner() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().loader)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./components/MessageField/MessageField.js":
/*!*************************************************!*\
  !*** ./components/MessageField/MessageField.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./messageField.module.css */ "./components/MessageField/messageField.module.css");
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_messageField_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Messages_Messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Messages/Messages */ "./components/Messages/Messages.js");
/* harmony import */ var _InputBox_InputBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InputBox/InputBox */ "./components/InputBox/InputBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/assets/svg/left-arrow.svg */ "./src/assets/svg/left-arrow.svg");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\MessageField\\MessageField.js";












function MessageField() {
  const {
    other_user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.otherUserReducer);
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.userReducer);
  const {
    loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.simpleReducer);
  const {
    0: socket,
    1: setSocket
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    0: messages,
    1: setMessages
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    width
  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_9__.default)();
  const myRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const sendMessage = message => {
    if (socket) socket.send(message);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (Object.keys(other_user).length > 0) {
      const b = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${other_user.username}/?${user.id}`);

      b.onmessage = function (event) {
        setMessages([...messages, JSON.parse(event.data)]);
        myRef.current.scrollIntoView({
          behavior: "smooth"
        });
        b.close();
      };

      setSocket(b);
    }
  }, [messages]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function get_messages_from_db() {
      dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_6__.setLoading)(true));
      await _api__WEBPACK_IMPORTED_MODULE_5__.axiosInstance.get(`api/v1/chat/${user.username}/?other=${other_user.username}`).then(res => {
        setMessages(res.data);
        dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_6__.setLoading)(false));
      }).catch(err => {
        dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_6__.setLoading)(false));
      });
    }

    get_messages_from_db();
  }, [other_user]);

  const onBackClick = () => {
    socket.close();
    dispatch((0,_store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_10__.clearOtherUser)());
  };

  return loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: [(_messageField_module_css__WEBPACK_IMPORTED_MODULE_11___default().loading_wrapper), "glass"].join(' '),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 22
  }, this) : Object.keys(other_user).length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_11___default().user_info),
      children: [width < 650 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: () => {
          onBackClick();
        },
        className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_11___default().left),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_2__.default, {
      myRef: myRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_3__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 14
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MessageField);

/***/ }),

/***/ "./components/Messages/Messages.js":
/*!*****************************************!*\
  !*** ./components/Messages/Messages.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messages_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.module.css */ "./components/Messages/messages.module.css");
/* harmony import */ var _messages_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_messages_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UserMessage_UserMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserMessage/UserMessage */ "./components/UserMessage/UserMessage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/types */ "./store/types.js");

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\Messages\\Messages.js";







function Messages({
  messages,
  myRef
}) {
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(state => state.userReducer);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    myRef.current.scrollIntoView();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messages_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
    children: [messages.length > 0 && (messages === null || messages === void 0 ? void 0 : messages.map((data, key) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserMessage_UserMessage__WEBPACK_IMPORTED_MODULE_2__.default, {
        timestamp: data.timestamp,
        avatar: data.author.avatar,
        message: data.content,
        sender: data.author.username === user.username ? _constants__WEBPACK_IMPORTED_MODULE_3__.USER : _constants__WEBPACK_IMPORTED_MODULE_3__.OTHER
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 24
      }, this);
    })), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: myRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Messages);

/***/ }),

/***/ "./components/SearchBox/SearchBox.js":
/*!*******************************************!*\
  !*** ./components/SearchBox/SearchBox.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _searchBox_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchBox.module.css */ "./components/SearchBox/searchBox.module.css");
/* harmony import */ var _searchBox_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_searchBox_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Users/Users */ "./components/Users/Users.js");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/svg/loupe.svg */ "./src/assets/svg/loupe.svg");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./api.js");

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\SearchBox\\SearchBox.js";






function SearchBox(props) {
  const {
    0: searchInput,
    1: setSearchInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const timeoutId = setTimeout(() => {
      if (searchInput.length >= 2) {
        _api__WEBPACK_IMPORTED_MODULE_4__.axiosInstance.get(`api/v1/users/?search=${searchInput}`).then(results => {
          setResults(results.data);
        }).catch(error => {});
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchInput]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_searchBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_searchBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().search_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: searchInput,
        onChange: event => {
          setSearchInput(event.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Users_Users__WEBPACK_IMPORTED_MODULE_2__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

/***/ }),

/***/ "./components/SideBox/SideBox.js":
/*!***************************************!*\
  !*** ./components/SideBox/SideBox.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sidebox_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebox.module.css */ "./components/SideBox/sidebox.module.css");
/* harmony import */ var _sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserProfile/UserProfile */ "./components/UserProfile/UserProfile.js");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/svg/loupe.svg */ "./src/assets/svg/loupe.svg");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/svg/messenger.svg */ "./src/assets/svg/messenger.svg");
/* harmony import */ var _src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _Users_Users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Users/Users */ "./components/Users/Users.js");
/* harmony import */ var _SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SearchBox/SearchBox */ "./components/SearchBox/SearchBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\SideBox\\SideBox.js";










function SideBox() {
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.userReducer);
  const {
    0: usersData,
    1: setUsersData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const {
    0: currentTab,
    1: setCurrentTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const socket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/?${user.id}`);

    socket.onmessage = function (event) {
      setUsersData(JSON.parse(event.data).users);
      socket.close();
    };
  }, [currentTab]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: [(_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper), "glass"].join(" "),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().line)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().tabs),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: () => {
          setCurrentTab(_constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE);
        },
        className: currentTab === _constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE ? (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().active) : undefined,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 87
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 84
        }, this), "Messages"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: () => {
          setCurrentTab(_constants__WEBPACK_IMPORTED_MODULE_5__.SEARCH);
        },
        className: currentTab === _constants__WEBPACK_IMPORTED_MODULE_5__.SEARCH ? (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().active) : undefined,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 86
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 83
        }, this), "Search"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), currentTab === _constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Users_Users__WEBPACK_IMPORTED_MODULE_6__.default, {
      results: usersData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 39
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 70
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (SideBox);

/***/ }),

/***/ "./components/UserMessage/UserMessage.js":
/*!***********************************************!*\
  !*** ./components/UserMessage/UserMessage.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userMessage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userMessage.module.css */ "./components/UserMessage/userMessage.module.css");
/* harmony import */ var _userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\UserMessage\\UserMessage.js";





function UserMessage({
  sender,
  message,
  avatar,
  timestamp
}) {
  const {
    0: userAvatar,
    1: setAvatar
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.userReducer);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (sender === _constants__WEBPACK_IMPORTED_MODULE_2__.USER) {
      if (user.avatar === null) {
        setAvatar('/images/user.png');
      } else setAvatar(user.avatar);
    } else {
      if (avatar !== null) {
        setAvatar(avatar);
      } else setAvatar('/images/user.png');
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: sender === _constants__WEBPACK_IMPORTED_MODULE_2__.USER ? (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().u_container) : (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().o_container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().message_wrapper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: sender === _constants__WEBPACK_IMPORTED_MODULE_2__.USER ? (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().u_timestamp) : (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().o_timestamp),
          children: timestamp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: 'profile',
        src: userAvatar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserMessage);

/***/ }),

/***/ "./components/UserProfile/UserProfile.js":
/*!***********************************************!*\
  !*** ./components/UserProfile/UserProfile.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userProfile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userProfile.module.css */ "./components/UserProfile/userProfile.module.css");
/* harmony import */ var _userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/cogwheel.svg */ "./src/assets/svg/cogwheel.svg");
/* harmony import */ var _src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\UserProfile\\UserProfile.js";






function UserProfile(props) {
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.userReducer);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().userProfile),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().block),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: user === null || user === void 0 ? void 0 : user.username,
        className: [(_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().profileImage), (user === null || user === void 0 ? void 0 : user.avatar) === null ? (_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().noProfileImage) : undefined].join(' '),
        src: (user === null || user === void 0 ? void 0 : user.avatar) !== null ? user === null || user === void 0 ? void 0 : user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().userInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["@", user === null || user === void 0 ? void 0 : user.username]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, this), (user === null || user === void 0 ? void 0 : user.status) !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: user === null || user === void 0 ? void 0 : user.status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 46
        }, this) : undefined]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: '/settings',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: (_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().settingBTN),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 38
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ }),

/***/ "./components/User/User.js":
/*!*********************************!*\
  !*** ./components/User/User.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.module.css */ "./components/User/user.module.css");
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_user_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/right-arrow.svg */ "./src/assets/svg/right-arrow.svg");
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\User\\User.js";








function User({
  data
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    other_user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.otherUserReducer);

  const onUserClick = () => {
    if (data.username !== other_user.username) {
      dispatch((0,_store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_4__.setOtherUser)(data));
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    onClick: onUserClick,
    className: (_user_module_css__WEBPACK_IMPORTED_MODULE_7___default().user),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      className: (data === null || data === void 0 ? void 0 : data.avatar) === null ? (_user_module_css__WEBPACK_IMPORTED_MODULE_7___default().noProfileImage) : undefined,
      src: (data === null || data === void 0 ? void 0 : data.avatar) !== null ? data === null || data === void 0 ? void 0 : data.avatar : '/images/user.png'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: ["@", data.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: data.status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./components/Users/Users.js":
/*!***********************************!*\
  !*** ./components/Users/Users.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.module.css */ "./components/Users/users.module.css");
/* harmony import */ var _users_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_users_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User/User */ "./components/User/User.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\Users\\Users.js";





function Users({
  results
}) {
  const {
    user
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.userReducer);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_users_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
    children: Object.keys(results).length !== 0 && (results === null || results === void 0 ? void 0 : results.map((u, key) => {
      if (user.id !== u.id) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_User_User__WEBPACK_IMPORTED_MODULE_2__.default, {
        data: u
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 28
      }, this);
    }))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./components/WithAuth.js":
/*!********************************!*\
  !*** ./components/WithAuth.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FullLoading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FullLoading/Loading */ "./components/FullLoading/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\WithAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const withAuth = (Component = null, options = {}) => {
  class AuthenticatedRoute extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        loading: true
      });
    }

    componentDidMount() {
      if (this.props.isLoggedIn) {
        this.setState({
          loading: false
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/login");
      }
    }

    render() {
      if (this.state.loading) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FullLoading_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 24
        }, this);
      }

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, this.props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, this);
    }

  }

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => ({
    isLoggedIn: Object.keys(state.userReducer.user).length > 0
  }))(AuthenticatedRoute);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./components/Wrapper/Wrapper.js":
/*!***************************************!*\
  !*** ./components/Wrapper/Wrapper.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wrapper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper.module.css */ "./components/Wrapper/wrapper.module.css");
/* harmony import */ var _wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\Wrapper\\Wrapper.js";



function Wrapper({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: [(_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper)],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER": function() { return /* binding */ USER; },
/* harmony export */   "OTHER": function() { return /* binding */ OTHER; },
/* harmony export */   "MESSAGE": function() { return /* binding */ MESSAGE; },
/* harmony export */   "SEARCH": function() { return /* binding */ SEARCH; },
/* harmony export */   "SUCCESS": function() { return /* binding */ SUCCESS; },
/* harmony export */   "ERROR": function() { return /* binding */ ERROR; }
/* harmony export */ });
const USER = 1;
const OTHER = 2;
const MESSAGE = 1;
const SEARCH = 2;
const SUCCESS = 1;
const ERROR = 2;

/***/ }),

/***/ "./hooks/useWindowDimensions.js":
/*!**************************************!*\
  !*** ./hooks/useWindowDimensions.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useWindowDimensions; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height
  } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const {
    0: windowDimensions,
    1: setWindowDimensions
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(getWindowDimensions());
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      ;
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = addBasePath(pathname);
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      const shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL( true ? 'http://n' : 0);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SideBox_SideBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideBox/SideBox */ "./components/SideBox/SideBox.js");
/* harmony import */ var _components_MessageField_MessageField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MessageField/MessageField */ "./components/MessageField/MessageField.js");
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var _components_HomeMobile_HomeMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeMobile/HomeMobile */ "./components/HomeMobile/HomeMobile.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WithAuth */ "./components/WithAuth.js");

var _jsxFileName = "F:\\react-chat\\react_chat_front\\pages\\index.js";








function Home() {
  const {
    width
  } = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: width > 650 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().home),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideBox_SideBox__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MessageField_MessageField__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 24
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HomeMobile_HomeMobile__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 18
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_6__.default)(Home));

/***/ }),

/***/ "./store/actions/otherUserAction.js":
/*!******************************************!*\
  !*** ./store/actions/otherUserAction.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setOtherUser": function() { return /* binding */ setOtherUser; },
/* harmony export */   "clearOtherUser": function() { return /* binding */ clearOtherUser; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");

const setOtherUser = data => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_OTHER_USER,
    payload: data
  });
};
const clearOtherUser = () => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__.CLEAR_OTHER_USER
  });
};

/***/ }),

/***/ "./store/actions/simpleActions.js":
/*!****************************************!*\
  !*** ./store/actions/simpleActions.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLoading": function() { return /* binding */ setLoading; },
/* harmony export */   "setFullLoading": function() { return /* binding */ setFullLoading; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");

const initialState = {
  loading: false
};
const setLoading = loadingState => async dispatch => {
  dispatch({
    type: loadingState ? _types__WEBPACK_IMPORTED_MODULE_0__.LOADING_TRUE : _types__WEBPACK_IMPORTED_MODULE_0__.LOADING_FALSE
  });
};
const setFullLoading = loadingState => async dispatch => {
  dispatch({
    type: loadingState ? _types__WEBPACK_IMPORTED_MODULE_0__.FULL_LOADING_TRUE : _types__WEBPACK_IMPORTED_MODULE_0__.FULL_LOADING_FALSE
  });
};

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

/***/ "./components/FullLoading/fullLoading.module.css":
/*!*******************************************************!*\
  !*** ./components/FullLoading/fullLoading.module.css ***!
  \*******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "fullLoading_wrapper__1CV_t"
};


/***/ }),

/***/ "./components/HomeMobile/homeMobile.module.css":
/*!*****************************************************!*\
  !*** ./components/HomeMobile/homeMobile.module.css ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "homeMobile_container__2fSZs",
	"wrapper": "homeMobile_wrapper__35zzz"
};


/***/ }),

/***/ "./components/InputBox/inputBox.module.css":
/*!*************************************************!*\
  !*** ./components/InputBox/inputBox.module.css ***!
  \*************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "inputBox_wrapper__27S-X",
	"input_wrapper": "inputBox_input_wrapper__3loQw",
	"emoji_container": "inputBox_emoji_container__3BZus",
	"active": "inputBox_active__2Wp8P"
};


/***/ }),

/***/ "./components/LoadingSpinner/loadingSpinner.module.css":
/*!*************************************************************!*\
  !*** ./components/LoadingSpinner/loadingSpinner.module.css ***!
  \*************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"loader": "loadingSpinner_loader__3oZ5b",
	"spin": "loadingSpinner_spin__33dX9"
};


/***/ }),

/***/ "./components/MessageField/messageField.module.css":
/*!*********************************************************!*\
  !*** ./components/MessageField/messageField.module.css ***!
  \*********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "messageField_wrapper__2SjqO",
	"loading_wrapper": "messageField_loading_wrapper__1jSE6",
	"left": "messageField_left__1gl49",
	"user_info": "messageField_user_info__17dTj"
};


/***/ }),

/***/ "./components/Messages/messages.module.css":
/*!*************************************************!*\
  !*** ./components/Messages/messages.module.css ***!
  \*************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "messages_wrapper__85Gl1"
};


/***/ }),

/***/ "./components/SearchBox/searchBox.module.css":
/*!***************************************************!*\
  !*** ./components/SearchBox/searchBox.module.css ***!
  \***************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "searchBox_wrapper__4Xw5o",
	"search_wrapper": "searchBox_search_wrapper__152bF"
};


/***/ }),

/***/ "./components/SideBox/sidebox.module.css":
/*!***********************************************!*\
  !*** ./components/SideBox/sidebox.module.css ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "sidebox_wrapper__32xIw",
	"line": "sidebox_line__1IgXV",
	"tabs": "sidebox_tabs__2dA7c",
	"active": "sidebox_active__AaxLy"
};


/***/ }),

/***/ "./components/UserMessage/userMessage.module.css":
/*!*******************************************************!*\
  !*** ./components/UserMessage/userMessage.module.css ***!
  \*******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "userMessage_wrapper__26Qst",
	"u_container": "userMessage_u_container__2TTSB",
	"message_wrapper": "userMessage_message_wrapper__25oNm",
	"o_container": "userMessage_o_container__1njl7",
	"u_timestamp": "userMessage_u_timestamp__3uXs9",
	"o_timestamp": "userMessage_o_timestamp__1lDQV"
};


/***/ }),

/***/ "./components/UserProfile/userProfile.module.css":
/*!*******************************************************!*\
  !*** ./components/UserProfile/userProfile.module.css ***!
  \*******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"profileImage": "userProfile_profileImage__1p7WW",
	"noProfileImage": "userProfile_noProfileImage__1kw4W",
	"userProfile": "userProfile_userProfile__1weAr",
	"userInfo": "userProfile_userInfo__67zHM",
	"block": "userProfile_block__2zkib",
	"settingBTN": "userProfile_settingBTN__3pEV-"
};


/***/ }),

/***/ "./components/User/user.module.css":
/*!*****************************************!*\
  !*** ./components/User/user.module.css ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"user": "user_user__3YNWG",
	"noProfileImage": "user_noProfileImage__1RixR"
};


/***/ }),

/***/ "./components/Users/users.module.css":
/*!*******************************************!*\
  !*** ./components/Users/users.module.css ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "users_wrapper__3ixMa"
};


/***/ }),

/***/ "./components/Wrapper/wrapper.module.css":
/*!***********************************************!*\
  !*** ./components/Wrapper/wrapper.module.css ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "wrapper_wrapper__r34Hp",
	"container": "wrapper_container__G-CMM"
};


/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"home": "index_home__3lYMY",
	"messageLogo": "index_messageLogo__2ecq1"
};


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/svg/cogwheel.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/cogwheel.svg ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Cogwheel (props) {
    return React.createElement("svg",props,[React.createElement("path",{"d":"m244.316406 362.667969c-58.816406 0-106.667968-47.851563-106.667968-106.667969s47.851562-106.667969 106.667968-106.667969c58.8125 0 106.664063 47.851563 106.664063 106.667969s-47.851563 106.667969-106.664063 106.667969zm0-181.335938c-41.175781 0-74.667968 33.496094-74.667968 74.667969s33.492187 74.667969 74.667968 74.667969c41.171875 0 74.664063-33.496094 74.664063-74.667969s-33.492188-74.667969-74.664063-74.667969zm0 0","key":0}),React.createElement("path",{"d":"m279.792969 512h-70.957031c-17.066407 0-32.148438-12.117188-35.859376-28.820312l-8.980468-39.9375c-14.636719-6.207032-28.589844-14.3125-41.6875-24.210938l-38.890625 12.285156c-16.683594 5.183594-34.816407-1.898437-43.179688-16.832031l-35.367187-61.160156c-8.472656-15.148438-5.613282-33.792969 6.847656-45.527344l30.140625-27.710937c-.914063-8.128907-1.363281-16.191407-1.363281-24.085938s.449218-15.957031 1.34375-24.085938l-29.972656-27.582031c-12.609376-11.863281-15.488282-30.507812-7.105469-45.460937l35.585937-61.546875c8.253906-14.765625 26.429688-21.78125 43.007813-16.683594l38.953125 12.308594c13.097656-9.898438 27.050781-18.003907 41.6875-24.214844l9-39.976563c3.691406-16.640624 18.773437-28.757812 35.839844-28.757812h70.957031c17.066406 0 32.148437 12.117188 35.859375 28.820312l8.980468 39.9375c14.636719 6.207032 28.589844 14.3125 41.6875 24.210938l38.890626-12.285156c16.726562-5.140625 34.816406 1.898437 43.179687 16.832031l35.371094 61.160156c8.46875 15.148438 5.609375 33.792969-6.851563 45.527344l-30.140625 27.710937c.894531 8.128907 1.34375 16.214844 1.34375 24.085938s-.449219 15.957031-1.34375 24.085938l29.992188 27.5625c.042969.042968.085937.085937.148437.128906 12.460938 11.730468 15.339844 30.378906 6.957032 45.332031l-35.585938 61.546875c-8.253906 14.761719-26.386719 21.824219-43.027344 16.660156l-38.957031-12.308594c-13.097656 9.898438-27.050781 18.003907-41.683594 24.214844l-9.003906 39.976563c-3.667969 16.683593-18.75 28.800781-35.816406 28.800781zm-154.21875-126.742188c3.667969 0 7.273437 1.257813 10.175781 3.648438 14.65625 12.054688 30.632812 21.355469 47.550781 27.585938 5.097657 1.875 8.875 6.207031 10.070313 11.496093l10.859375 48.214844c.488281 2.21875 2.429687 3.796875 4.628906 3.796875h70.953125c2.199219 0 4.140625-1.578125 4.609375-3.753906l10.878906-48.257813c1.195313-5.289062 4.972657-9.621093 10.070313-11.496093 16.894531-6.230469 32.894531-15.53125 47.550781-27.585938 4.183594-3.457031 9.8125-4.566406 15-2.921875l46.953125 14.828125c2.238281.703125 4.628906-.128906 5.652344-1.964844l35.585937-61.546875c1.066407-1.898437.679688-4.5-1.023437-6.164062l-36.011719-33.109375c-3.90625-3.585938-5.78125-8.898438-4.992187-14.144532 1.40625-9.449218 2.113281-18.835937 2.113281-27.902343 0-9.070313-.707031-18.457031-2.113281-27.90625-.789063-5.246094 1.085937-10.539063 4.992187-14.144531l36.09375-33.195313c1.621094-1.511719 2.007813-4.160156.832031-6.269531l-35.371094-61.164063c-1.148437-2.027343-3.582031-2.835937-5.800781-2.132812l-46.890625 14.804687c-5.164062 1.644532-10.792968.535156-14.996094-2.921875-14.65625-12.054687-30.636718-21.355469-47.554687-27.585937-5.097656-1.875-8.875-6.207032-10.066406-11.496094l-10.859375-48.214844c-.535156-2.175781-2.476563-3.753906-4.671875-3.753906h-70.957031c-2.195313 0-4.136719 1.578125-4.605469 3.753906l-10.882813 48.257813c-1.191406 5.289062-4.96875 9.597656-10.066406 11.496093-16.898438 6.230469-32.898438 15.53125-47.53125 27.585938-4.203125 3.457031-9.878906 4.542969-14.996094 2.921875l-46.957031-14.828125c-2.195313-.679688-4.628906.128906-5.652344 1.964844l-35.585937 61.523437c-1.066406 1.921875-.679688 4.566407 1.089844 6.230469l35.96875 33.046875c3.902343 3.582031 5.78125 8.894531 4.992187 14.144531-1.410156 9.449219-2.113281 18.835938-2.113281 27.902344s.703125 18.453125 2.113281 27.902344c.789063 5.25-1.089844 10.539062-4.992187 14.144531l-36.097657 33.195313c-1.621093 1.515624-2.003906 4.160156-.832031 6.273437l35.371094 61.160156c1.128906 2.027344 3.5625 2.816407 5.800781 2.136719l46.894531-14.808594c1.578125-.511718 3.199219-.746094 4.820313-.746094zm0 0","key":1})]);
}

Cogwheel.defaultProps = {"height":"512pt","viewBox":"-12 0 512 512","width":"512pt"};

module.exports = Cogwheel;

Cogwheel.default = Cogwheel;


/***/ }),

/***/ "./src/assets/svg/left-arrow.svg":
/*!***************************************!*\
  !*** ./src/assets/svg/left-arrow.svg ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function LeftArrow (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z"}));
}

LeftArrow.defaultProps = {"id":"Layer","enableBackground":"new 0 0 64 64","height":"512","viewBox":"0 0 64 64","width":"512"};

module.exports = LeftArrow;

LeftArrow.default = LeftArrow;


/***/ }),

/***/ "./src/assets/svg/loupe.svg":
/*!**********************************!*\
  !*** ./src/assets/svg/loupe.svg ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Loupe (props) {
    return React.createElement("svg",props,[React.createElement("g",{"key":0},React.createElement("g",null,React.createElement("path",{"d":"M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667\r\n\t\t\tS0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6\r\n\t\t\tc4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z\r\n\t\t\t M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"}))),React.createElement("g",{"key":1}),React.createElement("g",{"key":2}),React.createElement("g",{"key":3}),React.createElement("g",{"key":4}),React.createElement("g",{"key":5}),React.createElement("g",{"key":6}),React.createElement("g",{"key":7}),React.createElement("g",{"key":8}),React.createElement("g",{"key":9}),React.createElement("g",{"key":10}),React.createElement("g",{"key":11}),React.createElement("g",{"key":12}),React.createElement("g",{"key":13}),React.createElement("g",{"key":14}),React.createElement("g",{"key":15})]);
}

Loupe.defaultProps = {"version":"1.1","id":"Capa_1","x":"0px","y":"0px","viewBox":"0 0 512.005 512.005","style":{"enableBackground":"new 0 0 512.005 512.005"},"xmlSpace":"preserve"};

module.exports = Loupe;

Loupe.default = Loupe;


/***/ }),

/***/ "./src/assets/svg/messenger.svg":
/*!**************************************!*\
  !*** ./src/assets/svg/messenger.svg ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Messenger (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m256 0c-141.484375 0-256 114.496094-256 256 0 44.902344 11.710938 88.757812 33.949219 127.4375l-32.984375 102.429688c-2.300782 7.140624-.410156 14.96875 4.894531 20.273437 5.253906 5.253906 13.0625 7.214844 20.273437 4.894531l102.429688-32.984375c38.679688 22.238281 82.535156 33.949219 127.4375 33.949219 141.484375 0 256-114.496094 256-256 0-141.484375-114.496094-256-256-256zm0 472c-40.558594 0-80.09375-11.316406-114.332031-32.726562-4.925781-3.078126-11.042969-3.910157-16.734375-2.078126l-73.941406 23.8125 23.8125-73.941406c1.804687-5.609375 1.042968-11.734375-2.082032-16.734375-21.40625-34.238281-32.722656-73.773437-32.722656-114.332031 0-119.101562 96.898438-216 216-216s216 96.898438 216 216-96.898438 216-216 216zm25-216c0 13.804688-11.191406 25-25 25s-25-11.195312-25-25c0-13.808594 11.191406-25 25-25s25 11.191406 25 25zm100 0c0 13.804688-11.191406 25-25 25s-25-11.195312-25-25c0-13.808594 11.191406-25 25-25s25 11.191406 25 25zm-200 0c0 13.804688-11.191406 25-25 25-13.804688 0-25-11.195312-25-25 0-13.808594 11.195312-25 25-25 13.808594 0 25 11.191406 25 25zm0 0"}));
}

Messenger.defaultProps = {"height":"512pt","viewBox":"0 0 512 512.0002","width":"512pt"};

module.exports = Messenger;

Messenger.default = Messenger;


/***/ }),

/***/ "./src/assets/svg/right-arrow.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/right-arrow.svg ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function RightArrow (props) {
    return React.createElement("svg",props,[React.createElement("g",{"key":0},React.createElement("g",null,React.createElement("path",{"d":"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\r\n\t\t\tc-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\r\n\t\t\tc0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\r\n\t\t\tc5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}))),React.createElement("g",{"key":1}),React.createElement("g",{"key":2}),React.createElement("g",{"key":3}),React.createElement("g",{"key":4}),React.createElement("g",{"key":5}),React.createElement("g",{"key":6}),React.createElement("g",{"key":7}),React.createElement("g",{"key":8}),React.createElement("g",{"key":9}),React.createElement("g",{"key":10}),React.createElement("g",{"key":11}),React.createElement("g",{"key":12}),React.createElement("g",{"key":13}),React.createElement("g",{"key":14}),React.createElement("g",{"key":15})]);
}

RightArrow.defaultProps = {"version":"1.1","id":"Layer_1","x":"0px","y":"0px","viewBox":"0 0 492.004 492.004","style":{"enableBackground":"new 0 0 492.004 492.004"},"xmlSpace":"preserve"};

module.exports = RightArrow;

RightArrow.default = RightArrow;


/***/ }),

/***/ "./src/assets/svg/send.svg":
/*!*********************************!*\
  !*** ./src/assets/svg/send.svg ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Send (props) {
    return React.createElement("svg",props,[React.createElement("g",{"key":0},React.createElement("g",null,React.createElement("path",{"d":"M481.508,210.335L68.414,38.926c-17.403-7.222-37.063-4.045-51.309,8.287C2.859,59.547-3.099,78.55,1.557,96.808\r\n\t\t\tL42.151,256L1.557,415.192c-4.656,18.258,1.301,37.261,15.547,49.595c14.273,12.358,33.938,15.495,51.31,8.287l413.094-171.409\r\n\t\t\tC500.316,293.861,512,276.363,512,256C512,235.637,500.316,218.139,481.508,210.335z M470.009,273.955L56.916,445.364\r\n\t\t\tc-6.947,2.881-14.488,1.665-20.175-3.259c-5.686-4.923-7.971-12.212-6.113-19.501L69.287,271h149.065\r\n\t\t\tc8.285,0,15.001-6.716,15.001-15.001c0-8.285-6.716-15.001-15.001-15.001H69.288L30.628,89.396\r\n\t\t\tc-1.858-7.288,0.427-14.578,6.113-19.501c5.686-4.923,13.225-6.141,20.174-3.259l413.094,171.409\r\n\t\t\tc11.125,4.616,11.99,14.91,11.99,17.955S481.134,269.339,470.009,273.955z"}))),React.createElement("g",{"key":1}),React.createElement("g",{"key":2}),React.createElement("g",{"key":3}),React.createElement("g",{"key":4}),React.createElement("g",{"key":5}),React.createElement("g",{"key":6}),React.createElement("g",{"key":7}),React.createElement("g",{"key":8}),React.createElement("g",{"key":9}),React.createElement("g",{"key":10}),React.createElement("g",{"key":11}),React.createElement("g",{"key":12}),React.createElement("g",{"key":13}),React.createElement("g",{"key":14}),React.createElement("g",{"key":15})]);
}

Send.defaultProps = {"version":"1.1","id":"Capa_1","x":"0px","y":"0px","viewBox":"0 0 512 512","style":{"enableBackground":"new 0 0 512 512"},"xmlSpace":"preserve"};

module.exports = Send;

Send.default = Send;


/***/ }),

/***/ "./src/assets/svg/smiling.svg":
/*!************************************!*\
  !*** ./src/assets/svg/smiling.svg ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Smiling (props) {
    return React.createElement("svg",props,[React.createElement("circle",{"style":{"fill":"#FFCA28"},"cx":"256","cy":"256","r":"256","key":0}),React.createElement("g",{"key":1},[React.createElement("path",{"style":{"fill":"#6D4C41"},"d":"M399.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.336-32-32-32s-32,14.368-32,32\r\n\t\tc0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C415.68,201.184,408.512,208.32,399.68,208.32z","key":0}),React.createElement("path",{"style":{"fill":"#6D4C41"},"d":"M207.68,208.32c-8.832,0-16-7.168-16-16c0-17.632-14.368-32-32-32s-32,14.368-32,32\r\n\t\tc0,8.832-7.168,16-16,16s-16-7.168-16-16c0-35.296,28.704-64,64-64s64,28.704,64,64C223.68,201.184,216.512,208.32,207.68,208.32z","key":1})]),React.createElement("path",{"style":{"fill":"#FAFAFA"},"d":"M437.696,294.688c-3.04-4-7.744-6.368-12.736-6.368H86.4c-5.024,0-9.728,2.336-12.736,6.336\r\n\tc-3.072,4.032-4.032,9.184-2.688,14.016C94.112,390.88,170.08,448.32,255.648,448.32s161.536-57.44,184.672-139.648\r\n\tC441.696,303.84,440.736,298.688,437.696,294.688z","key":2}),React.createElement("g",{"key":3}),React.createElement("g",{"key":4}),React.createElement("g",{"key":5}),React.createElement("g",{"key":6}),React.createElement("g",{"key":7}),React.createElement("g",{"key":8}),React.createElement("g",{"key":9}),React.createElement("g",{"key":10}),React.createElement("g",{"key":11}),React.createElement("g",{"key":12}),React.createElement("g",{"key":13}),React.createElement("g",{"key":14}),React.createElement("g",{"key":15}),React.createElement("g",{"key":16}),React.createElement("g",{"key":17})]);
}

Smiling.defaultProps = {"version":"1.1","id":"Capa_1","x":"0px","y":"0px","viewBox":"0 0 512 512","style":{"enableBackground":"new 0 0 512 512"},"xmlSpace":"preserve"};

module.exports = Smiling;

Smiling.default = Smiling;


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "emoji-picker-react":
/*!*************************************!*\
  !*** external "emoji-picker-react" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("emoji-picker-react");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

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

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2FwaS5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9GdWxsTG9hZGluZy9Mb2FkaW5nLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL0hvbWVNb2JpbGUvSG9tZU1vYmlsZS5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9JbnB1dEJveC9JbnB1dEJveC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VzLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL1NlYXJjaEJveC9TZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvU2lkZUJveC9TaWRlQm94LmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL1VzZXJNZXNzYWdlL1VzZXJNZXNzYWdlLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL1VzZXIvVXNlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9Vc2Vycy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XaXRoQXV0aC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vaG9va3MvdXNlV2luZG93RGltZW5zaW9ucy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL2FjdGlvbnMvb3RoZXJVc2VyQWN0aW9uLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL3R5cGVzLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL0Z1bGxMb2FkaW5nL2Z1bGxMb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvSG9tZU1vYmlsZS9ob21lTW9iaWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvSW5wdXRCb3gvaW5wdXRCb3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9sb2FkaW5nU3Bpbm5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL01lc3NhZ2VGaWVsZC9tZXNzYWdlRmllbGQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9NZXNzYWdlcy9tZXNzYWdlcy5tb2R1bGUuY3NzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL1NlYXJjaEJveC9zZWFyY2hCb3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9TaWRlQm94L3NpZGVib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9Vc2VyTWVzc2FnZS91c2VyTWVzc2FnZS5tb2R1bGUuY3NzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL1VzZXJQcm9maWxlL3VzZXJQcm9maWxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvVXNlci91c2VyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvVXNlcnMvdXNlcnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XcmFwcGVyL3dyYXBwZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vcGFnZXMvaW5kZXgubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zcmMvYXNzZXRzL3N2Zy9jb2d3aGVlbC5zdmciLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3NyYy9hc3NldHMvc3ZnL2xlZnQtYXJyb3cuc3ZnIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zcmMvYXNzZXRzL3N2Zy9sb3VwZS5zdmciLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3NyYy9hc3NldHMvc3ZnL21lc3Nlbmdlci5zdmciLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3NyYy9hc3NldHMvc3ZnL3JpZ2h0LWFycm93LnN2ZyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vc3JjL2Fzc2V0cy9zdmcvc2VuZC5zdmciLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3NyYy9hc3NldHMvc3ZnL3NtaWxpbmcuc3ZnIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJlbW9qaS1waWNrZXItcmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2lnbm9yZWR8RjpcXHJlYWN0LWNoYXRcXHJlYWN0X2NoYXRfZnJvbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJCQVNFX1VSTCIsImF4aW9zSW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwib3JpZ2luYWxSZXF1ZXN0Iiwic3RhdHVzIiwidXJsIiwiUm91dGVyIiwiX3JldHJ5IiwicmVmcmVzaFRva2VuIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzZXRJdGVtIiwiZGF0YSIsImFjY2VzcyIsImRlZmF1bHRzIiwiY29tbW9uIiwibG9naW4iLCJwYXJhbXMiLCJyZXNvbHZlIiwicmVmcmVzaCIsImNhdGNoIiwibWVzc2FnZSIsImRldGFpbCIsInJlZ2lzdGVyIiwiZXJyb3JzIiwiTG9hZGluZyIsInByb3BzIiwiY2xhc3NlcyIsIkhvbWVNb2JpbGUiLCJvdGhlcl91c2VyIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm90aGVyVXNlclJlZHVjZXIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiRW1vamlQaWNrZXIiLCJkeW5hbWljIiwic3NyIiwiSW5wdXRCb3giLCJzZW5kTWVzc2FnZSIsInJlZiIsInVzZVJlZiIsImVtb2ppQWN0aXZlIiwic2V0RW1vamlBY3RpdmUiLCJ1c2VTdGF0ZSIsInNldE1lc3NhZ2UiLCJvbkVtb2ppQ2xpY2siLCJldmVudCIsImVtb2ppT2JqZWN0IiwiY3Vyc29yIiwiY3VycmVudCIsInNlbGVjdGlvblN0YXJ0IiwidGV4dCIsInNsaWNlIiwiZW1vamkiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsInRhcmdldCIsInZhbHVlIiwidW5kZWZpbmVkIiwiam9pbiIsIkxvYWRpbmdTcGlubmVyIiwibG9hZGVyIiwiTWVzc2FnZUZpZWxkIiwidXNlciIsInVzZXJSZWR1Y2VyIiwibG9hZGluZyIsInNpbXBsZVJlZHVjZXIiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIndpZHRoIiwidXNlV2luZG93RGltZW5zaW9ucyIsIm15UmVmIiwic2VuZCIsInVzZUVmZmVjdCIsImIiLCJXZWJTb2NrZXQiLCJ1c2VybmFtZSIsImlkIiwib25tZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImNsb3NlIiwiZ2V0X21lc3NhZ2VzX2Zyb21fZGIiLCJzZXRMb2FkaW5nIiwiZXJyIiwib25CYWNrQ2xpY2siLCJjbGVhck90aGVyVXNlciIsImF2YXRhciIsIndyYXBwZXIiLCJNZXNzYWdlcyIsIm1hcCIsInRpbWVzdGFtcCIsImF1dGhvciIsImNvbnRlbnQiLCJVU0VSIiwiT1RIRVIiLCJTZWFyY2hCb3giLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiU2lkZUJveCIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwiTUVTU0FHRSIsInVzZXJzIiwibGluZSIsIlNFQVJDSCIsIlVzZXJNZXNzYWdlIiwic2VuZGVyIiwidXNlckF2YXRhciIsInNldEF2YXRhciIsIlVzZXJQcm9maWxlIiwiVXNlciIsIm9uVXNlckNsaWNrIiwic2V0T3RoZXJVc2VyIiwiVXNlcnMiLCJ1Iiwid2l0aEF1dGgiLCJDb21wb25lbnQiLCJvcHRpb25zIiwiQXV0aGVudGljYXRlZFJvdXRlIiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsImlzTG9nZ2VkSW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsImNvbm5lY3QiLCJXcmFwcGVyIiwiY2hpbGRyZW4iLCJTVUNDRVNTIiwiRVJST1IiLCJnZXRXaW5kb3dEaW1lbnNpb25zIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0Iiwid2luZG93Iiwid2luZG93RGltZW5zaW9ucyIsInNldFdpbmRvd0RpbWVuc2lvbnMiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJ3aGljaCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJkZWZhdWx0IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInVzZUNhbGxiYWNrIiwiZWwiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsImhhc1ByZWZldGNoIiwibGluayIsImRvY3VtZW50IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzcGxpdCIsInNvbWUiLCJ0b0xvd2VyQ2FzZSIsInNwbGljZSIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiYmFjayIsImhpc3RvcnkiLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwieSIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwibG9hZEVycm9yRmFpbCIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0RGF0YUhyZWYiLCJfZ2V0RGF0YSIsIl9nZXRTdGF0aWNEYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzdWJzdHIiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJIb21lIiwiV2l0aEF1dGgiLCJTRVRfT1RIRVJfVVNFUiIsInBheWxvYWQiLCJDTEVBUl9PVEhFUl9VU0VSIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZ1N0YXRlIiwiTE9BRElOR19UUlVFIiwiTE9BRElOR19GQUxTRSIsInNldEZ1bGxMb2FkaW5nIiwiRlVMTF9MT0FESU5HX1RSVUUiLCJGVUxMX0xPQURJTkdfRkFMU0UiLCJTRVRfVVNFUl9TVUNDRVNTIiwiU0VUX1VTRVJfRVJST1IiLCJMT0dPVVQiLCJVUERBVEVf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QTJCLFFBQVEsMkJBQTJCLFNBQVMsMkJBQTJCLFNBQVMsMkJBQTJCLFNBQVMsMkJBQTJCLFNBQVMsMkJBQTJCLFNBQVMsMkJBQTJCLFNBQVM7QUFDdDVDOztBQUVBLHFCQUFxQixtRkFBbUYscUNBQXFDOztBQUU3STs7QUFFQTs7Ozs7Ozs7Ozs7QUNWQSxZQUFZLG1CQUFPLENBQUMsb0JBQU87O0FBRTNCO0FBQ0EsMEVBQTBFLFNBQVMsaUJBQWlCLHlDQUF5QywyQkFBMkIsUUFBUSw4QkFBOEIsU0FBUyxpQkFBaUIscU9BQXFPLDhCQUE4QixTQUFTLGlCQUFpQixxT0FBcU8sZ0NBQWdDLFNBQVMsaUJBQWlCLG1SQUFtUiwyQkFBMkIsUUFBUSwyQkFBMkIsUUFBUSwyQkFBMkIsUUFBUSwyQkFBMkIsUUFBUSwyQkFBMkIsUUFBUSwyQkFBMkIsUUFBUSwyQkFBMkIsUUFBUSwyQkFBMkIsU0FBUywyQkFBMkIsU0FBUywyQkFBMkIsU0FBUywyQkFBMkIsU0FBUywyQkFBMkIsU0FBUywyQkFBMkIsU0FBUywyQkFBMkIsU0FBUywyQkFBMkIsU0FBUztBQUM1a0Q7O0FBRUEsd0JBQXdCLG1GQUFtRixxQ0FBcUM7O0FBRWhKOztBQUVBOzs7Ozs7Ozs7Ozs7QUNWQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe2Jhc2VVUkw6IEJBU0VfVVJMfSlcclxuXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgY29uZmlnID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzJylcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdKV1QgJyArIHRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICB9KTtcclxuXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGVycm9yLmNvbmZpZztcclxuXHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgb3JpZ2luYWxSZXF1ZXN0LnVybCA9PT1cclxuICAgICAgICBgL2F1dGgvand0L3JlZnJlc2gvYCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSAmJiAhb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSkge1xyXG5cclxuICAgICAgICBvcmlnaW5hbFJlcXVlc3QuX3JldHJ5ID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaCcpXHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UucG9zdCgnL2F1dGgvand0L3JlZnJlc2gvJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWZyZXNoXCI6IHJlZnJlc2hUb2tlblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCByZXMuZGF0YS5hY2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NJbnN0YW5jZS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0pXVCAnICsgcmVzLmRhdGEuYWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlKG9yaWdpbmFsUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0VfVVJMfS9hdXRoL2p3dC9jcmVhdGUvYCwgcGFyYW1zKS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoJywgcmVzcG9uc2UuZGF0YS5yZWZyZXNoKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgcmVzcG9uc2UuZGF0YS5hY2Nlc3MpXHJcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogcmVzcG9uc2Uuc3RhdHVzfSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7c3RhdHVzOiBlcnJvci5yZXNwb25zZS5zdGF0dXMsIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0VfVVJMfS9hdXRoL3VzZXJzL2AsIHBhcmFtcykudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogcmVzcG9uc2Uuc3RhdHVzfSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7c3RhdHVzOiBlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yczogZXJyb3IucmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZnVsbExvYWRpbmcubW9kdWxlLmNzcydcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZyhwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9ob21lTW9iaWxlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBTaWRlQm94IGZyb20gXCIuLi9TaWRlQm94L1NpZGVCb3hcIjtcclxuaW1wb3J0IE1lc3NhZ2VGaWVsZCBmcm9tIFwiLi4vTWVzc2FnZUZpZWxkL01lc3NhZ2VGaWVsZFwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVNb2JpbGUocHJvcHMpIHtcclxuICAgIGNvbnN0IHtvdGhlcl91c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm90aGVyVXNlclJlZHVjZXIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5rZXlzKG90aGVyX3VzZXIpLmxlbmd0aCA9PT0gMCA/IDxTaWRlQm94Lz4gOiA8TWVzc2FnZUZpZWxkLz59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZU1vYmlsZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vaW5wdXRCb3gubW9kdWxlLmNzcydcclxuaW1wb3J0IFRlbGVncmFtSWNvbiBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9zZW5kLnN2ZydcclxuaW1wb3J0IEVtb2ppTG9nbyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9zbWlsaW5nLnN2ZydcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5cclxuXHJcbmNvbnN0IEVtb2ppUGlja2VyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2Vtb2ppLXBpY2tlci1yZWFjdCcpLCB7XHJcbiAgICBzc3I6IGZhbHNlLFxyXG59KVxyXG5cclxuZnVuY3Rpb24gSW5wdXRCb3goe3NlbmRNZXNzYWdlfSkge1xyXG5cclxuICAgIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcclxuICAgIGNvbnN0IFtlbW9qaUFjdGl2ZSwgc2V0RW1vamlBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICAgIGNvbnN0IG9uRW1vamlDbGljayA9IChldmVudCwgZW1vamlPYmplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJzb3IgPSByZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gbWVzc2FnZS5zbGljZSgwLCBjdXJzb3IpICsgZW1vamlPYmplY3QuZW1vamkgKyBtZXNzYWdlLnNsaWNlKGN1cnNvcik7XHJcbiAgICAgICAgc2V0TWVzc2FnZSh0ZXh0KTtcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBzZW5kTWVzc2FnZShtZXNzYWdlKVxyXG4gICAgICAgICAgICBzZXRNZXNzYWdlKFwiXCIpXHJcbiAgICAgICAgICAgIHNldEVtb2ppQWN0aXZlKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0X3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn0gcmVmPXtyZWZ9IHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RW1vamlBY3RpdmUoIWVtb2ppQWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgfX0+PEVtb2ppTG9nby8+PC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZW1vamlfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmVtb2ppX2NvbnRhaW5lciwgZW1vamlBY3RpdmUgPyBjbGFzc2VzLmFjdGl2ZSA6IHVuZGVmaW5lZF0uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEVtb2ppUGlja2VyIG9uRW1vamlDbGljaz17b25FbW9qaUNsaWNrfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZW5kTWVzc2FnZShtZXNzYWdlKSAsIHNldE1lc3NhZ2UoXCJcIiksIHNldEVtb2ppQWN0aXZlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgfX0+PFRlbGVncmFtSWNvbi8+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0Qm94OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvYWRpbmdTcGlubmVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTcGlubmVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbWVzc2FnZUZpZWxkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gXCIuLi9NZXNzYWdlcy9NZXNzYWdlc1wiO1xyXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4uL0lucHV0Qm94L0lucHV0Qm94XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtheGlvc0luc3RhbmNlfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7c2V0TG9hZGluZ30gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2ltcGxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvbGVmdC1hcnJvdy5zdmcnXHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcbmltcG9ydCB7Y2xlYXJPdGhlclVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL290aGVyVXNlckFjdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUZpZWxkKCkge1xyXG4gICAgY29uc3Qge290aGVyX3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUub3RoZXJVc2VyUmVkdWNlcilcclxuXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHtsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNpbXBsZVJlZHVjZXIpXHJcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoc29ja2V0KVxyXG4gICAgICAgICAgICBzb2NrZXQuc2VuZChtZXNzYWdlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXJfdXNlcikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiID0gbmV3IFdlYlNvY2tldChgd3M6Ly8xMjcuMC4wLjE6ODAwMC93cy9jaGF0LyR7b3RoZXJfdXNlci51c2VybmFtZX0vPyR7dXNlci5pZH1gKTtcclxuICAgICAgICAgICAgYi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgSlNPTi5wYXJzZShldmVudC5kYXRhKV0pXHJcbiAgICAgICAgICAgICAgICBteVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXHJcbiAgICAgICAgICAgICAgICBiLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTb2NrZXQoYilcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVzc2FnZXNdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRfbWVzc2FnZXNfZnJvbV9kYigpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYGFwaS92MS9jaGF0LyR7dXNlci51c2VybmFtZX0vP290aGVyPSR7b3RoZXJfdXNlci51c2VybmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X21lc3NhZ2VzX2Zyb21fZGIoKVxyXG4gICAgfSwgW290aGVyX3VzZXJdKVxyXG4gICAgY29uc3Qgb25CYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmNsb3NlKClcclxuICAgICAgICBkaXNwYXRjaChjbGVhck90aGVyVXNlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmxvYWRpbmdfd3JhcHBlciwgXCJnbGFzc1wiXS5qb2luKCcgJyl9PjxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICA8L2Rpdj4gOiBPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAge3dpZHRoIDwgNjUwID9cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkJhY2tDbGljaygpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+PExlZnRBcnJvdy8+PC9pPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPGltZyBhbHQ9e290aGVyX3VzZXIudXNlcm5hbWV9IHNyYz17b3RoZXJfdXNlci5hdmF0YXIgIT09IG51bGwgPyBvdGhlcl91c2VyLmF2YXRhciA6ICcvaW1hZ2VzL3VzZXIucG5nJ30vPlxyXG4gICAgICAgICAgICA8aDE+QHtvdGhlcl91c2VyLnVzZXJuYW1lfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1lc3NhZ2VzIG15UmVmPXtteVJlZn0gbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgPElucHV0Qm94IHNlbmRNZXNzYWdlPXtzZW5kTWVzc2FnZX0vPlxyXG4gICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0vPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUZpZWxkOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21lc3NhZ2VzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFVzZXJNZXNzYWdlIGZyb20gXCIuLi9Vc2VyTWVzc2FnZS9Vc2VyTWVzc2FnZVwiO1xyXG5pbXBvcnQge1VTRVIsIE9USEVSfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0xPR09VVH0gZnJvbSBcIi4uLy4uL3N0b3JlL3R5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlcyh7bWVzc2FnZXMsIG15UmVmfSkge1xyXG5cclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbXlSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIHttZXNzYWdlcy5sZW5ndGggPiAwICYmIG1lc3NhZ2VzPy5tYXAoKGRhdGEsIGtleSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiA8VXNlck1lc3NhZ2Uga2V5PXtrZXl9IHRpbWVzdGFtcD17ZGF0YS50aW1lc3RhbXB9IGF2YXRhcj17ZGF0YS5hdXRob3IuYXZhdGFyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtkYXRhLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlcj17ZGF0YS5hdXRob3IudXNlcm5hbWUgPT09IHVzZXIudXNlcm5hbWUgPyBVU0VSIDogT1RIRVJ9Lz5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtteVJlZn0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZXM7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zZWFyY2hCb3gubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uL1VzZXJzL1VzZXJzXCI7XHJcbmltcG9ydCBTZWFyY2hMb2dvIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2xvdXBlLnN2ZydcclxuaW1wb3J0IHtheGlvc0luc3RhbmNlfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCb3gocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dC5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgYXhpb3NJbnN0YW5jZS5nZXQoYGFwaS92MS91c2Vycy8/c2VhcmNoPSR7c2VhcmNoSW5wdXR9YCkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgfSwgW3NlYXJjaElucHV0XSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaF93cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17c2VhcmNoSW5wdXR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hJbnB1dChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgICAgICA8aT48U2VhcmNoTG9nby8+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFVzZXJzIHJlc3VsdHM9e3Jlc3VsdHN9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3NpZGVib3gubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVXNlclByb2ZpbGUgZnJvbSBcIi4uL1VzZXJQcm9maWxlL1VzZXJQcm9maWxlXCI7XHJcbmltcG9ydCBTZWFyY2hMb2dvIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2xvdXBlLnN2ZydcclxuaW1wb3J0IE1lc3NhZ2VMb2dvIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL21lc3Nlbmdlci5zdmcnXHJcbmltcG9ydCB7TUVTU0FHRSwgU0VBUkNIfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCBVc2VycyBmcm9tIFwiLi4vVXNlcnMvVXNlcnNcIjtcclxuaW1wb3J0IFNlYXJjaEJveCBmcm9tIFwiLi4vU2VhcmNoQm94L1NlYXJjaEJveFwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIFNpZGVCb3goKSB7XHJcblxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcblxyXG4gICAgY29uc3QgW3VzZXJzRGF0YSwgc2V0VXNlcnNEYXRhXSA9IHVzZVN0YXRlKHt9KVxyXG4gICAgY29uc3QgW2N1cnJlbnRUYWIsIHNldEN1cnJlbnRUYWJdID0gdXNlU3RhdGUoTUVTU0FHRSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vMTI3LjAuMC4xOjgwMDAvd3MvY2hhdC8/JHt1c2VyLmlkfWAsKVxyXG4gICAgICAgIHNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgc2V0VXNlcnNEYXRhKEpTT04ucGFyc2UoZXZlbnQuZGF0YSkudXNlcnMpXHJcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtjdXJyZW50VGFiXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy53cmFwcGVyLCBcImdsYXNzXCJdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgPFVzZXJQcm9maWxlLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGluZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJzfT5cclxuICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGFiKE1FU1NBR0UpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IE1FU1NBR0UgPyBjbGFzc2VzLmFjdGl2ZSA6IHVuZGVmaW5lZH0+PGk+PE1lc3NhZ2VMb2dvLz48L2k+TWVzc2FnZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFRhYihTRUFSQ0gpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IFNFQVJDSCA/IGNsYXNzZXMuYWN0aXZlIDogdW5kZWZpbmVkfT48aT48U2VhcmNoTG9nby8+PC9pPlNlYXJjaDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBNRVNTQUdFID8gPFVzZXJzIHJlc3VsdHM9e3VzZXJzRGF0YX0vPiA6IDxTZWFyY2hCb3gvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCb3g7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3VzZXJNZXNzYWdlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7VVNFUn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJNZXNzYWdlKHtzZW5kZXIsIG1lc3NhZ2UsIGF2YXRhciwgdGltZXN0YW1wfSkge1xyXG4gICAgY29uc3QgW3VzZXJBdmF0YXIsIHNldEF2YXRhcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChzZW5kZXIgPT09IFVTRVIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VyLmF2YXRhciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXZhdGFyKCcvaW1hZ2VzL3VzZXIucG5nJylcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRBdmF0YXIodXNlci5hdmF0YXIpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhdmF0YXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldEF2YXRhcihhdmF0YXIpXHJcbiAgICAgICAgICAgIH0gZWxzZSBzZXRBdmF0YXIoJy9pbWFnZXMvdXNlci5wbmcnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VuZGVyID09PSBVU0VSID8gY2xhc3Nlcy51X2NvbnRhaW5lciA6IGNsYXNzZXMub19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZV93cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzZW5kZXIgPT09IFVTRVIgPyBjbGFzc2VzLnVfdGltZXN0YW1wIDogY2xhc3Nlcy5vX3RpbWVzdGFtcH0+e3RpbWVzdGFtcH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsncHJvZmlsZSd9IHNyYz17dXNlckF2YXRhcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNZXNzYWdlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VzZXJQcm9maWxlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2NvZ3doZWVsLnN2ZydcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmZ1bmN0aW9uIFVzZXJQcm9maWxlKHByb3BzKSB7XHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlclByb2ZpbGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja30+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD17dXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W2NsYXNzZXMucHJvZmlsZUltYWdlLCB1c2VyPy5hdmF0YXIgPT09IG51bGwgPyBjbGFzc2VzLm5vUHJvZmlsZUltYWdlIDogdW5kZWZpbmVkXS5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlcj8uYXZhdGFyICE9PSBudWxsID8gdXNlcj8uYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkB7dXNlcj8udXNlcm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcj8uc3RhdHVzICE9PSBudWxsID8gPHA+e3VzZXI/LnN0YXR1c308L3A+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL3NldHRpbmdzJ30+PGE+PGkgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdCVE59PjxTZXR0aW5ncy8+PC9pPjwvYT48L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi91c2VyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSBcIi4uLy4uL3NyYy9hc3NldHMvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2V0T3RoZXJVc2VyfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9vdGhlclVzZXJBY3Rpb25cIjtcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyKHtkYXRhfSkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3Qge290aGVyX3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUub3RoZXJVc2VyUmVkdWNlcilcclxuICAgIGNvbnN0IG9uVXNlckNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLnVzZXJuYW1lICE9PSBvdGhlcl91c2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldE90aGVyVXNlcihkYXRhKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e29uVXNlckNsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMudXNlcn0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtkYXRhPy5hdmF0YXIgPT09IG51bGwgPyBjbGFzc2VzLm5vUHJvZmlsZUltYWdlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgIHNyYz17ZGF0YT8uYXZhdGFyICE9PSBudWxsID8gZGF0YT8uYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfS8+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+QHtkYXRhLnVzZXJuYW1lfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cD57ZGF0YS5zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGk+PFJpZ2h0QXJyb3cvPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlcnMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vVXNlci9Vc2VyXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZnVuY3Rpb24gVXNlcnMoe3Jlc3VsdHN9KSB7XHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggIT09IDAgJiYgcmVzdWx0cz8ubWFwKCh1LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLmlkICE9PSB1LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VXNlciBrZXk9e2tleX0gZGF0YT17dX0vPlxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiLCJpbXBvcnQge3VzZUNvbnRleHQsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0Z1bGxMb2FkaW5nL0xvYWRpbmdcIjtcclxuaW1wb3J0IFJvdXRlciwge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IHdpdGhBdXRoID0gKENvbXBvbmVudCA9IG51bGwsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY2xhc3MgQXV0aGVudGljYXRlZFJvdXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgICAgICBzdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaXNMb2dnZWRJbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXIoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUubG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nLz47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbm5lY3QoKHN0YXRlKSA9PiAoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpc0xvZ2dlZEluOiBPYmplY3Qua2V5cyhzdGF0ZS51c2VyUmVkdWNlci51c2VyKS5sZW5ndGggPiAwXHJcbiAgICAgICAgfSkpKEF1dGhlbnRpY2F0ZWRSb3V0ZSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vd3JhcHBlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBXcmFwcGVyKHtjaGlsZHJlbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLndyYXBwZXJdfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyOyIsImV4cG9ydCBjb25zdCBVU0VSID0gMVxyXG5leHBvcnQgY29uc3QgT1RIRVIgPSAyXHJcbmV4cG9ydCBjb25zdCBNRVNTQUdFID0gMVxyXG5leHBvcnQgY29uc3QgU0VBUkNIID0gMlxyXG5leHBvcnQgY29uc3QgU1VDQ0VTUyA9IDFcclxuZXhwb3J0IGNvbnN0IEVSUk9SID0gMiIsImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gZ2V0V2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IHtpbm5lcldpZHRoOiB3aWR0aCwgaW5uZXJIZWlnaHQ6IGhlaWdodH0gPSB3aW5kb3c7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoLFxyXG4gICAgICAgIGhlaWdodFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2luZG93RGltZW5zaW9ucygpIHtcclxuICAgIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKGdldFdpbmRvd0RpbWVuc2lvbnMoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgICAgICAgIHNldFdpbmRvd0RpbWVuc2lvbnMoZ2V0V2luZG93RGltZW5zaW9ucygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXJcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBTaWRlQm94IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGVCb3gvU2lkZUJveFwiO1xuaW1wb3J0IE1lc3NhZ2VGaWVsZCBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuaW1wb3J0IEhvbWVNb2JpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZU1vYmlsZS9Ib21lTW9iaWxlXCI7XG5pbXBvcnQgV2l0aEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9XaXRoQXV0aCdcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCB7d2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHJldHVybiA8V3JhcHBlcj5cbiAgICAgICAge3dpZHRoID4gNjUwID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZX0+XG4gICAgICAgICAgICA8U2lkZUJveC8+XG4gICAgICAgICAgICA8TWVzc2FnZUZpZWxkLz5cbiAgICAgICAgPC9kaXY+IDogPEhvbWVNb2JpbGUvPn1cbiAgICA8L1dyYXBwZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhBdXRoKEhvbWUpIiwiaW1wb3J0IHtcclxuICAgIENMRUFSX09USEVSX1VTRVIsXHJcblxyXG4gICAgU0VUX09USEVSX1VTRVJcclxuXHJcbn0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldE90aGVyVXNlciA9IChkYXRhKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFNFVF9PVEhFUl9VU0VSLFxyXG4gICAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBjbGVhck90aGVyVXNlciA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDTEVBUl9PVEhFUl9VU0VSLFxyXG4gICAgfSlcclxufVxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIEZVTExfTE9BRElOR19GQUxTRSxcclxuICAgIEZVTExfTE9BRElOR19UUlVFLFxyXG4gICAgTE9BRElOR19GQUxTRSxcclxuICAgIExPQURJTkdfVFJVRSxcclxuXHJcbn0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKGxvYWRpbmdTdGF0ZSkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBsb2FkaW5nU3RhdGUgPyBMT0FESU5HX1RSVUUgOiBMT0FESU5HX0ZBTFNFLFxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgY29uc3Qgc2V0RnVsbExvYWRpbmcgPSAobG9hZGluZ1N0YXRlKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGxvYWRpbmdTdGF0ZSA/IEZVTExfTE9BRElOR19UUlVFIDogRlVMTF9MT0FESU5HX0ZBTFNFLFxyXG4gICAgfSlcclxufSIsImV4cG9ydCBjb25zdCBMT0FESU5HX1RSVUUgPSAnTE9BRElOR19UUlVFJ1xyXG5leHBvcnQgY29uc3QgTE9BRElOR19GQUxTRSA9ICdMT0FESU5HX0ZBTFNFJ1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfU1VDQ0VTUyA9ICdTRVRfVVNFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfRVJST1IgPSAnU0VUX1VTRVJfRVJST1InXHJcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xyXG5leHBvcnQgY29uc3QgRlVMTF9MT0FESU5HX1RSVUUgPSAnRlVMTF9MT0FESU5HX1RSVUUnXHJcbmV4cG9ydCBjb25zdCBGVUxMX0xPQURJTkdfRkFMU0UgPSAnRlVMTF9MT0FESU5HX0ZBTFNFJ1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVIgPSAnVVBEQVRFX1VTRVInXHJcbmV4cG9ydCBjb25zdCBTRVRfT1RIRVJfVVNFUiA9ICdTRVRfT1RIRVJfVVNFUidcclxuZXhwb3J0IGNvbnN0IENMRUFSX09USEVSX1VTRVIgPSAnQ0xFQVJfT1RIRVJfVVNFUidcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImZ1bGxMb2FkaW5nX3dyYXBwZXJfXzFDVl90XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJob21lTW9iaWxlX2NvbnRhaW5lcl9fMmZTWnNcIixcblx0XCJ3cmFwcGVyXCI6IFwiaG9tZU1vYmlsZV93cmFwcGVyX18zNXp6elwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImlucHV0Qm94X3dyYXBwZXJfXzI3Uy1YXCIsXG5cdFwiaW5wdXRfd3JhcHBlclwiOiBcImlucHV0Qm94X2lucHV0X3dyYXBwZXJfXzNsb1F3XCIsXG5cdFwiZW1vamlfY29udGFpbmVyXCI6IFwiaW5wdXRCb3hfZW1vamlfY29udGFpbmVyX18zQlp1c1wiLFxuXHRcImFjdGl2ZVwiOiBcImlucHV0Qm94X2FjdGl2ZV9fMldwOFBcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlclwiOiBcImxvYWRpbmdTcGlubmVyX2xvYWRlcl9fM29aNWJcIixcblx0XCJzcGluXCI6IFwibG9hZGluZ1NwaW5uZXJfc3Bpbl9fMzNkWDlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJtZXNzYWdlRmllbGRfd3JhcHBlcl9fMlNqcU9cIixcblx0XCJsb2FkaW5nX3dyYXBwZXJcIjogXCJtZXNzYWdlRmllbGRfbG9hZGluZ193cmFwcGVyX18xalNFNlwiLFxuXHRcImxlZnRcIjogXCJtZXNzYWdlRmllbGRfbGVmdF9fMWdsNDlcIixcblx0XCJ1c2VyX2luZm9cIjogXCJtZXNzYWdlRmllbGRfdXNlcl9pbmZvX18xN2RUalwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIm1lc3NhZ2VzX3dyYXBwZXJfXzg1R2wxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic2VhcmNoQm94X3dyYXBwZXJfXzRYdzVvXCIsXG5cdFwic2VhcmNoX3dyYXBwZXJcIjogXCJzZWFyY2hCb3hfc2VhcmNoX3dyYXBwZXJfXzE1MmJGXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic2lkZWJveF93cmFwcGVyX18zMnhJd1wiLFxuXHRcImxpbmVcIjogXCJzaWRlYm94X2xpbmVfXzFJZ1hWXCIsXG5cdFwidGFic1wiOiBcInNpZGVib3hfdGFic19fMmRBN2NcIixcblx0XCJhY3RpdmVcIjogXCJzaWRlYm94X2FjdGl2ZV9fQWF4THlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJ1c2VyTWVzc2FnZV93cmFwcGVyX18yNlFzdFwiLFxuXHRcInVfY29udGFpbmVyXCI6IFwidXNlck1lc3NhZ2VfdV9jb250YWluZXJfXzJUVFNCXCIsXG5cdFwibWVzc2FnZV93cmFwcGVyXCI6IFwidXNlck1lc3NhZ2VfbWVzc2FnZV93cmFwcGVyX18yNW9ObVwiLFxuXHRcIm9fY29udGFpbmVyXCI6IFwidXNlck1lc3NhZ2Vfb19jb250YWluZXJfXzFuamw3XCIsXG5cdFwidV90aW1lc3RhbXBcIjogXCJ1c2VyTWVzc2FnZV91X3RpbWVzdGFtcF9fM3VYczlcIixcblx0XCJvX3RpbWVzdGFtcFwiOiBcInVzZXJNZXNzYWdlX29fdGltZXN0YW1wX18xbERRVlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJvZmlsZUltYWdlXCI6IFwidXNlclByb2ZpbGVfcHJvZmlsZUltYWdlX18xcDdXV1wiLFxuXHRcIm5vUHJvZmlsZUltYWdlXCI6IFwidXNlclByb2ZpbGVfbm9Qcm9maWxlSW1hZ2VfXzFrdzRXXCIsXG5cdFwidXNlclByb2ZpbGVcIjogXCJ1c2VyUHJvZmlsZV91c2VyUHJvZmlsZV9fMXdlQXJcIixcblx0XCJ1c2VySW5mb1wiOiBcInVzZXJQcm9maWxlX3VzZXJJbmZvX182N3pITVwiLFxuXHRcImJsb2NrXCI6IFwidXNlclByb2ZpbGVfYmxvY2tfXzJ6a2liXCIsXG5cdFwic2V0dGluZ0JUTlwiOiBcInVzZXJQcm9maWxlX3NldHRpbmdCVE5fXzNwRVYtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyXCI6IFwidXNlcl91c2VyX18zWU5XR1wiLFxuXHRcIm5vUHJvZmlsZUltYWdlXCI6IFwidXNlcl9ub1Byb2ZpbGVJbWFnZV9fMVJpeFJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJ1c2Vyc193cmFwcGVyX18zaXhNYVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIndyYXBwZXJfd3JhcHBlcl9fcjM0SHBcIixcblx0XCJjb250YWluZXJcIjogXCJ3cmFwcGVyX2NvbnRhaW5lcl9fRy1DTU1cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhvbWVcIjogXCJpbmRleF9ob21lX18zbFlNWVwiLFxuXHRcIm1lc3NhZ2VMb2dvXCI6IFwiaW5kZXhfbWVzc2FnZUxvZ29fXzJlY3ExXCJcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBDb2d3aGVlbCAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFtSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIm0yNDQuMzE2NDA2IDM2Mi42Njc5NjljLTU4LjgxNjQwNiAwLTEwNi42Njc5NjgtNDcuODUxNTYzLTEwNi42Njc5NjgtMTA2LjY2Nzk2OXM0Ny44NTE1NjItMTA2LjY2Nzk2OSAxMDYuNjY3OTY4LTEwNi42Njc5NjljNTguODEyNSAwIDEwNi42NjQwNjMgNDcuODUxNTYzIDEwNi42NjQwNjMgMTA2LjY2Nzk2OXMtNDcuODUxNTYzIDEwNi42Njc5NjktMTA2LjY2NDA2MyAxMDYuNjY3OTY5em0wLTE4MS4zMzU5MzhjLTQxLjE3NTc4MSAwLTc0LjY2Nzk2OCAzMy40OTYwOTQtNzQuNjY3OTY4IDc0LjY2Nzk2OXMzMy40OTIxODcgNzQuNjY3OTY5IDc0LjY2Nzk2OCA3NC42Njc5NjljNDEuMTcxODc1IDAgNzQuNjY0MDYzLTMzLjQ5NjA5NCA3NC42NjQwNjMtNzQuNjY3OTY5cy0zMy40OTIxODgtNzQuNjY3OTY5LTc0LjY2NDA2My03NC42Njc5Njl6bTAgMFwiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwibTI3OS43OTI5NjkgNTEyaC03MC45NTcwMzFjLTE3LjA2NjQwNyAwLTMyLjE0ODQzOC0xMi4xMTcxODgtMzUuODU5Mzc2LTI4LjgyMDMxMmwtOC45ODA0NjgtMzkuOTM3NWMtMTQuNjM2NzE5LTYuMjA3MDMyLTI4LjU4OTg0NC0xNC4zMTI1LTQxLjY4NzUtMjQuMjEwOTM4bC0zOC44OTA2MjUgMTIuMjg1MTU2Yy0xNi42ODM1OTQgNS4xODM1OTQtMzQuODE2NDA3LTEuODk4NDM3LTQzLjE3OTY4OC0xNi44MzIwMzFsLTM1LjM2NzE4Ny02MS4xNjAxNTZjLTguNDcyNjU2LTE1LjE0ODQzOC01LjYxMzI4Mi0zMy43OTI5NjkgNi44NDc2NTYtNDUuNTI3MzQ0bDMwLjE0MDYyNS0yNy43MTA5MzdjLS45MTQwNjMtOC4xMjg5MDctMS4zNjMyODEtMTYuMTkxNDA3LTEuMzYzMjgxLTI0LjA4NTkzOHMuNDQ5MjE4LTE1Ljk1NzAzMSAxLjM0Mzc1LTI0LjA4NTkzOGwtMjkuOTcyNjU2LTI3LjU4MjAzMWMtMTIuNjA5Mzc2LTExLjg2MzI4MS0xNS40ODgyODItMzAuNTA3ODEyLTcuMTA1NDY5LTQ1LjQ2MDkzN2wzNS41ODU5MzctNjEuNTQ2ODc1YzguMjUzOTA2LTE0Ljc2NTYyNSAyNi40Mjk2ODgtMjEuNzgxMjUgNDMuMDA3ODEzLTE2LjY4MzU5NGwzOC45NTMxMjUgMTIuMzA4NTk0YzEzLjA5NzY1Ni05Ljg5ODQzOCAyNy4wNTA3ODEtMTguMDAzOTA3IDQxLjY4NzUtMjQuMjE0ODQ0bDktMzkuOTc2NTYzYzMuNjkxNDA2LTE2LjY0MDYyNCAxOC43NzM0MzctMjguNzU3ODEyIDM1LjgzOTg0NC0yOC43NTc4MTJoNzAuOTU3MDMxYzE3LjA2NjQwNiAwIDMyLjE0ODQzNyAxMi4xMTcxODggMzUuODU5Mzc1IDI4LjgyMDMxMmw4Ljk4MDQ2OCAzOS45Mzc1YzE0LjYzNjcxOSA2LjIwNzAzMiAyOC41ODk4NDQgMTQuMzEyNSA0MS42ODc1IDI0LjIxMDkzOGwzOC44OTA2MjYtMTIuMjg1MTU2YzE2LjcyNjU2Mi01LjE0MDYyNSAzNC44MTY0MDYgMS44OTg0MzcgNDMuMTc5Njg3IDE2LjgzMjAzMWwzNS4zNzEwOTQgNjEuMTYwMTU2YzguNDY4NzUgMTUuMTQ4NDM4IDUuNjA5Mzc1IDMzLjc5Mjk2OS02Ljg1MTU2MyA0NS41MjczNDRsLTMwLjE0MDYyNSAyNy43MTA5MzdjLjg5NDUzMSA4LjEyODkwNyAxLjM0Mzc1IDE2LjIxNDg0NCAxLjM0Mzc1IDI0LjA4NTkzOHMtLjQ0OTIxOSAxNS45NTcwMzEtMS4zNDM3NSAyNC4wODU5MzhsMjkuOTkyMTg4IDI3LjU2MjVjLjA0Mjk2OS4wNDI5NjguMDg1OTM3LjA4NTkzNy4xNDg0MzcuMTI4OTA2IDEyLjQ2MDkzOCAxMS43MzA0NjggMTUuMzM5ODQ0IDMwLjM3ODkwNiA2Ljk1NzAzMiA0NS4zMzIwMzFsLTM1LjU4NTkzOCA2MS41NDY4NzVjLTguMjUzOTA2IDE0Ljc2MTcxOS0yNi4zODY3MTkgMjEuODI0MjE5LTQzLjAyNzM0NCAxNi42NjAxNTZsLTM4Ljk1NzAzMS0xMi4zMDg1OTRjLTEzLjA5NzY1NiA5Ljg5ODQzOC0yNy4wNTA3ODEgMTguMDAzOTA3LTQxLjY4MzU5NCAyNC4yMTQ4NDRsLTkuMDAzOTA2IDM5Ljk3NjU2M2MtMy42Njc5NjkgMTYuNjgzNTkzLTE4Ljc1IDI4LjgwMDc4MS0zNS44MTY0MDYgMjguODAwNzgxem0tMTU0LjIxODc1LTEyNi43NDIxODhjMy42Njc5NjkgMCA3LjI3MzQzNyAxLjI1NzgxMyAxMC4xNzU3ODEgMy42NDg0MzggMTQuNjU2MjUgMTIuMDU0Njg4IDMwLjYzMjgxMiAyMS4zNTU0NjkgNDcuNTUwNzgxIDI3LjU4NTkzOCA1LjA5NzY1NyAxLjg3NSA4Ljg3NSA2LjIwNzAzMSAxMC4wNzAzMTMgMTEuNDk2MDkzbDEwLjg1OTM3NSA0OC4yMTQ4NDRjLjQ4ODI4MSAyLjIxODc1IDIuNDI5Njg3IDMuNzk2ODc1IDQuNjI4OTA2IDMuNzk2ODc1aDcwLjk1MzEyNWMyLjE5OTIxOSAwIDQuMTQwNjI1LTEuNTc4MTI1IDQuNjA5Mzc1LTMuNzUzOTA2bDEwLjg3ODkwNi00OC4yNTc4MTNjMS4xOTUzMTMtNS4yODkwNjIgNC45NzI2NTctOS42MjEwOTMgMTAuMDcwMzEzLTExLjQ5NjA5MyAxNi44OTQ1MzEtNi4yMzA0NjkgMzIuODk0NTMxLTE1LjUzMTI1IDQ3LjU1MDc4MS0yNy41ODU5MzggNC4xODM1OTQtMy40NTcwMzEgOS44MTI1LTQuNTY2NDA2IDE1LTIuOTIxODc1bDQ2Ljk1MzEyNSAxNC44MjgxMjVjMi4yMzgyODEuNzAzMTI1IDQuNjI4OTA2LS4xMjg5MDYgNS42NTIzNDQtMS45NjQ4NDRsMzUuNTg1OTM3LTYxLjU0Njg3NWMxLjA2NjQwNy0xLjg5ODQzNy42Nzk2ODgtNC41LTEuMDIzNDM3LTYuMTY0MDYybC0zNi4wMTE3MTktMzMuMTA5Mzc1Yy0zLjkwNjI1LTMuNTg1OTM4LTUuNzgxMjUtOC44OTg0MzgtNC45OTIxODctMTQuMTQ0NTMyIDEuNDA2MjUtOS40NDkyMTggMi4xMTMyODEtMTguODM1OTM3IDIuMTEzMjgxLTI3LjkwMjM0MyAwLTkuMDcwMzEzLS43MDcwMzEtMTguNDU3MDMxLTIuMTEzMjgxLTI3LjkwNjI1LS43ODkwNjMtNS4yNDYwOTQgMS4wODU5MzctMTAuNTM5MDYzIDQuOTkyMTg3LTE0LjE0NDUzMWwzNi4wOTM3NS0zMy4xOTUzMTNjMS42MjEwOTQtMS41MTE3MTkgMi4wMDc4MTMtNC4xNjAxNTYuODMyMDMxLTYuMjY5NTMxbC0zNS4zNzEwOTQtNjEuMTY0MDYzYy0xLjE0ODQzNy0yLjAyNzM0My0zLjU4MjAzMS0yLjgzNTkzNy01LjgwMDc4MS0yLjEzMjgxMmwtNDYuODkwNjI1IDE0LjgwNDY4N2MtNS4xNjQwNjIgMS42NDQ1MzItMTAuNzkyOTY4LjUzNTE1Ni0xNC45OTYwOTQtMi45MjE4NzUtMTQuNjU2MjUtMTIuMDU0Njg3LTMwLjYzNjcxOC0yMS4zNTU0NjktNDcuNTU0Njg3LTI3LjU4NTkzNy01LjA5NzY1Ni0xLjg3NS04Ljg3NS02LjIwNzAzMi0xMC4wNjY0MDYtMTEuNDk2MDk0bC0xMC44NTkzNzUtNDguMjE0ODQ0Yy0uNTM1MTU2LTIuMTc1NzgxLTIuNDc2NTYzLTMuNzUzOTA2LTQuNjcxODc1LTMuNzUzOTA2aC03MC45NTcwMzFjLTIuMTk1MzEzIDAtNC4xMzY3MTkgMS41NzgxMjUtNC42MDU0NjkgMy43NTM5MDZsLTEwLjg4MjgxMyA0OC4yNTc4MTNjLTEuMTkxNDA2IDUuMjg5MDYyLTQuOTY4NzUgOS41OTc2NTYtMTAuMDY2NDA2IDExLjQ5NjA5My0xNi44OTg0MzggNi4yMzA0NjktMzIuODk4NDM4IDE1LjUzMTI1LTQ3LjUzMTI1IDI3LjU4NTkzOC00LjIwMzEyNSAzLjQ1NzAzMS05Ljg3ODkwNiA0LjU0Mjk2OS0xNC45OTYwOTQgMi45MjE4NzVsLTQ2Ljk1NzAzMS0xNC44MjgxMjVjLTIuMTk1MzEzLS42Nzk2ODgtNC42Mjg5MDYuMTI4OTA2LTUuNjUyMzQ0IDEuOTY0ODQ0bC0zNS41ODU5MzcgNjEuNTIzNDM3Yy0xLjA2NjQwNiAxLjkyMTg3NS0uNjc5Njg4IDQuNTY2NDA3IDEuMDg5ODQ0IDYuMjMwNDY5bDM1Ljk2ODc1IDMzLjA0Njg3NWMzLjkwMjM0MyAzLjU4MjAzMSA1Ljc4MTI1IDguODk0NTMxIDQuOTkyMTg3IDE0LjE0NDUzMS0xLjQxMDE1NiA5LjQ0OTIxOS0yLjExMzI4MSAxOC44MzU5MzgtMi4xMTMyODEgMjcuOTAyMzQ0cy43MDMxMjUgMTguNDUzMTI1IDIuMTEzMjgxIDI3LjkwMjM0NGMuNzg5MDYzIDUuMjUtMS4wODk4NDQgMTAuNTM5MDYyLTQuOTkyMTg3IDE0LjE0NDUzMWwtMzYuMDk3NjU3IDMzLjE5NTMxM2MtMS42MjEwOTMgMS41MTU2MjQtMi4wMDM5MDYgNC4xNjAxNTYtLjgzMjAzMSA2LjI3MzQzN2wzNS4zNzEwOTQgNjEuMTYwMTU2YzEuMTI4OTA2IDIuMDI3MzQ0IDMuNTYyNSAyLjgxNjQwNyA1LjgwMDc4MSAyLjEzNjcxOWw0Ni44OTQ1MzEtMTQuODA4NTk0YzEuNTc4MTI1LS41MTE3MTggMy4xOTkyMTktLjc0NjA5NCA0LjgyMDMxMy0uNzQ2MDk0em0wIDBcIixcImtleVwiOjF9KV0pO1xufVxuXG5Db2d3aGVlbC5kZWZhdWx0UHJvcHMgPSB7XCJoZWlnaHRcIjpcIjUxMnB0XCIsXCJ2aWV3Qm94XCI6XCItMTIgMCA1MTIgNTEyXCIsXCJ3aWR0aFwiOlwiNTEycHRcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ29nd2hlZWw7XG5cbkNvZ3doZWVsLmRlZmF1bHQgPSBDb2d3aGVlbDtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIExlZnRBcnJvdyAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwibTU0IDMwaC0zOS44OTlsMTUuMjc4LTE0LjU1MmMuOC0uNzYyLjgzMS0yLjAyOC4wNjktMi44MjgtLjc2MS0uNzk5LTIuMDI3LS44MzEtMi44MjgtLjA2OWwtMTcuNDQ4IDE2LjYyYy0uNzU1Ljc1Ni0xLjE3MiAxLjc2LTEuMTcyIDIuODI5IDAgMS4wNjguNDE3IDIuMDczIDEuMjA3IDIuODYybDE3LjQxNCAxNi41ODZjLjM4Ny4zNjkuODgzLjU1MiAxLjM3OS41NTIuNTI4IDAgMS4wNTYtLjIwOCAxLjQ0OS0uNjIxLjc2Mi0uOC43MzEtMi4wNjUtLjA2OS0yLjgyN2wtMTUuMzQyLTE0LjU1MmgzOS45NjJjMS4xMDQgMCAyLS44OTYgMi0ycy0uODk2LTItMi0yelwifSkpO1xufVxuXG5MZWZ0QXJyb3cuZGVmYXVsdFByb3BzID0ge1wiaWRcIjpcIkxheWVyXCIsXCJlbmFibGVCYWNrZ3JvdW5kXCI6XCJuZXcgMCAwIDY0IDY0XCIsXCJoZWlnaHRcIjpcIjUxMlwiLFwidmlld0JveFwiOlwiMCAwIDY0IDY0XCIsXCJ3aWR0aFwiOlwiNTEyXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExlZnRBcnJvdztcblxuTGVmdEFycm93LmRlZmF1bHQgPSBMZWZ0QXJyb3c7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBMb3VwZSAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFtSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjB9LFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsbnVsbCxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIk01MDUuNzQ5LDQ3NS41ODdsLTE0NS42LTE0NS42YzI4LjIwMy0zNC44MzcsNDUuMTg0LTc5LjEwNCw0NS4xODQtMTI3LjMxN2MwLTExMS43NDQtOTAuOTIzLTIwMi42NjctMjAyLjY2Ny0yMDIuNjY3XFxyXFxuXFx0XFx0XFx0UzAsOTAuOTI1LDAsMjAyLjY2OXM5MC45MjMsMjAyLjY2NywyMDIuNjY3LDIwMi42NjdjNDguMjEzLDAsOTIuNDgtMTYuOTgxLDEyNy4zMTctNDUuMTg0bDE0NS42LDE0NS42XFxyXFxuXFx0XFx0XFx0YzQuMTYsNC4xNiw5LjYyMSw2LjI1MSwxNS4wODMsNi4yNTFzMTAuOTIzLTIuMDkxLDE1LjA4My02LjI1MUM1MTQuMDkxLDQ5Ny40MTEsNTE0LjA5MSw0ODMuOTI4LDUwNS43NDksNDc1LjU4N3pcXHJcXG5cXHRcXHRcXHQgTTIwMi42NjcsMzYyLjY2OWMtODguMjM1LDAtMTYwLTcxLjc2NS0xNjAtMTYwczcxLjc2NS0xNjAsMTYwLTE2MHMxNjAsNzEuNzY1LDE2MCwxNjBTMjkwLjkwMSwzNjIuNjY5LDIwMi42NjcsMzYyLjY2OXpcIn0pKSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoyfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjozfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo0fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo1fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo2fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo3fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo4fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo5fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxMH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTF9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjEyfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxM30pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTR9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjE1fSldKTtcbn1cblxuTG91cGUuZGVmYXVsdFByb3BzID0ge1widmVyc2lvblwiOlwiMS4xXCIsXCJpZFwiOlwiQ2FwYV8xXCIsXCJ4XCI6XCIwcHhcIixcInlcIjpcIjBweFwiLFwidmlld0JveFwiOlwiMCAwIDUxMi4wMDUgNTEyLjAwNVwiLFwic3R5bGVcIjp7XCJlbmFibGVCYWNrZ3JvdW5kXCI6XCJuZXcgMCAwIDUxMi4wMDUgNTEyLjAwNVwifSxcInhtbFNwYWNlXCI6XCJwcmVzZXJ2ZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb3VwZTtcblxuTG91cGUuZGVmYXVsdCA9IExvdXBlO1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gTWVzc2VuZ2VyIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJtMjU2IDBjLTE0MS40ODQzNzUgMC0yNTYgMTE0LjQ5NjA5NC0yNTYgMjU2IDAgNDQuOTAyMzQ0IDExLjcxMDkzOCA4OC43NTc4MTIgMzMuOTQ5MjE5IDEyNy40Mzc1bC0zMi45ODQzNzUgMTAyLjQyOTY4OGMtMi4zMDA3ODIgNy4xNDA2MjQtLjQxMDE1NiAxNC45Njg3NSA0Ljg5NDUzMSAyMC4yNzM0MzcgNS4yNTM5MDYgNS4yNTM5MDYgMTMuMDYyNSA3LjIxNDg0NCAyMC4yNzM0MzcgNC44OTQ1MzFsMTAyLjQyOTY4OC0zMi45ODQzNzVjMzguNjc5Njg4IDIyLjIzODI4MSA4Mi41MzUxNTYgMzMuOTQ5MjE5IDEyNy40Mzc1IDMzLjk0OTIxOSAxNDEuNDg0Mzc1IDAgMjU2LTExNC40OTYwOTQgMjU2LTI1NiAwLTE0MS40ODQzNzUtMTE0LjQ5NjA5NC0yNTYtMjU2LTI1NnptMCA0NzJjLTQwLjU1ODU5NCAwLTgwLjA5Mzc1LTExLjMxNjQwNi0xMTQuMzMyMDMxLTMyLjcyNjU2Mi00LjkyNTc4MS0zLjA3ODEyNi0xMS4wNDI5NjktMy45MTAxNTctMTYuNzM0Mzc1LTIuMDc4MTI2bC03My45NDE0MDYgMjMuODEyNSAyMy44MTI1LTczLjk0MTQwNmMxLjgwNDY4Ny01LjYwOTM3NSAxLjA0Mjk2OC0xMS43MzQzNzUtMi4wODIwMzItMTYuNzM0Mzc1LTIxLjQwNjI1LTM0LjIzODI4MS0zMi43MjI2NTYtNzMuNzczNDM3LTMyLjcyMjY1Ni0xMTQuMzMyMDMxIDAtMTE5LjEwMTU2MiA5Ni44OTg0MzgtMjE2IDIxNi0yMTZzMjE2IDk2Ljg5ODQzOCAyMTYgMjE2LTk2Ljg5ODQzOCAyMTYtMjE2IDIxNnptMjUtMjE2YzAgMTMuODA0Njg4LTExLjE5MTQwNiAyNS0yNSAyNXMtMjUtMTEuMTk1MzEyLTI1LTI1YzAtMTMuODA4NTk0IDExLjE5MTQwNi0yNSAyNS0yNXMyNSAxMS4xOTE0MDYgMjUgMjV6bTEwMCAwYzAgMTMuODA0Njg4LTExLjE5MTQwNiAyNS0yNSAyNXMtMjUtMTEuMTk1MzEyLTI1LTI1YzAtMTMuODA4NTk0IDExLjE5MTQwNi0yNSAyNS0yNXMyNSAxMS4xOTE0MDYgMjUgMjV6bS0yMDAgMGMwIDEzLjgwNDY4OC0xMS4xOTE0MDYgMjUtMjUgMjUtMTMuODA0Njg4IDAtMjUtMTEuMTk1MzEyLTI1LTI1IDAtMTMuODA4NTk0IDExLjE5NTMxMi0yNSAyNS0yNSAxMy44MDg1OTQgMCAyNSAxMS4xOTE0MDYgMjUgMjV6bTAgMFwifSkpO1xufVxuXG5NZXNzZW5nZXIuZGVmYXVsdFByb3BzID0ge1wiaGVpZ2h0XCI6XCI1MTJwdFwiLFwidmlld0JveFwiOlwiMCAwIDUxMiA1MTIuMDAwMlwiLFwid2lkdGhcIjpcIjUxMnB0XCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NlbmdlcjtcblxuTWVzc2VuZ2VyLmRlZmF1bHQgPSBNZXNzZW5nZXI7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBSaWdodEFycm93IChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MH0sUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIixudWxsLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTM4Mi42NzgsMjI2LjgwNEwxNjMuNzMsNy44NkMxNTguNjY2LDIuNzkyLDE1MS45MDYsMCwxNDQuNjk4LDBzLTEzLjk2OCwyLjc5Mi0xOS4wMzIsNy44NmwtMTYuMTI0LDE2LjEyXFxyXFxuXFx0XFx0XFx0Yy0xMC40OTIsMTAuNTA0LTEwLjQ5MiwyNy41NzYsMCwzOC4wNjRMMjkzLjM5OCwyNDUuOWwtMTg0LjA2LDE4NC4wNmMtNS4wNjQsNS4wNjgtNy44NiwxMS44MjQtNy44NiwxOS4wMjhcXHJcXG5cXHRcXHRcXHRjMCw3LjIxMiwyLjc5NiwxMy45NjgsNy44NiwxOS4wNGwxNi4xMjQsMTYuMTE2YzUuMDY4LDUuMDY4LDExLjgyNCw3Ljg2LDE5LjAzMiw3Ljg2czEzLjk2OC0yLjc5MiwxOS4wMzItNy44NkwzODIuNjc4LDI2NVxcclxcblxcdFxcdFxcdGM1LjA3Ni01LjA4NCw3Ljg2NC0xMS44NzIsNy44NDgtMTkuMDg4QzM5MC41NDIsMjM4LjY2OCwzODcuNzU0LDIzMS44ODQsMzgyLjY3OCwyMjYuODA0elwifSkpKSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjF9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjJ9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjN9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjR9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjV9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjZ9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjd9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjh9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjl9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjEwfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxMX0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTJ9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjEzfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxNH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTV9KV0pO1xufVxuXG5SaWdodEFycm93LmRlZmF1bHRQcm9wcyA9IHtcInZlcnNpb25cIjpcIjEuMVwiLFwiaWRcIjpcIkxheWVyXzFcIixcInhcIjpcIjBweFwiLFwieVwiOlwiMHB4XCIsXCJ2aWV3Qm94XCI6XCIwIDAgNDkyLjAwNCA0OTIuMDA0XCIsXCJzdHlsZVwiOntcImVuYWJsZUJhY2tncm91bmRcIjpcIm5ldyAwIDAgNDkyLjAwNCA0OTIuMDA0XCJ9LFwieG1sU3BhY2VcIjpcInByZXNlcnZlXCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJpZ2h0QXJyb3c7XG5cblJpZ2h0QXJyb3cuZGVmYXVsdCA9IFJpZ2h0QXJyb3c7XG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBTZW5kIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MH0sUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIixudWxsLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwiTTQ4MS41MDgsMjEwLjMzNUw2OC40MTQsMzguOTI2Yy0xNy40MDMtNy4yMjItMzcuMDYzLTQuMDQ1LTUxLjMwOSw4LjI4N0MyLjg1OSw1OS41NDctMy4wOTksNzguNTUsMS41NTcsOTYuODA4XFxyXFxuXFx0XFx0XFx0TDQyLjE1MSwyNTZMMS41NTcsNDE1LjE5MmMtNC42NTYsMTguMjU4LDEuMzAxLDM3LjI2MSwxNS41NDcsNDkuNTk1YzE0LjI3MywxMi4zNTgsMzMuOTM4LDE1LjQ5NSw1MS4zMSw4LjI4N2w0MTMuMDk0LTE3MS40MDlcXHJcXG5cXHRcXHRcXHRDNTAwLjMxNiwyOTMuODYxLDUxMiwyNzYuMzYzLDUxMiwyNTZDNTEyLDIzNS42MzcsNTAwLjMxNiwyMTguMTM5LDQ4MS41MDgsMjEwLjMzNXogTTQ3MC4wMDksMjczLjk1NUw1Ni45MTYsNDQ1LjM2NFxcclxcblxcdFxcdFxcdGMtNi45NDcsMi44ODEtMTQuNDg4LDEuNjY1LTIwLjE3NS0zLjI1OWMtNS42ODYtNC45MjMtNy45NzEtMTIuMjEyLTYuMTEzLTE5LjUwMUw2OS4yODcsMjcxaDE0OS4wNjVcXHJcXG5cXHRcXHRcXHRjOC4yODUsMCwxNS4wMDEtNi43MTYsMTUuMDAxLTE1LjAwMWMwLTguMjg1LTYuNzE2LTE1LjAwMS0xNS4wMDEtMTUuMDAxSDY5LjI4OEwzMC42MjgsODkuMzk2XFxyXFxuXFx0XFx0XFx0Yy0xLjg1OC03LjI4OCwwLjQyNy0xNC41NzgsNi4xMTMtMTkuNTAxYzUuNjg2LTQuOTIzLDEzLjIyNS02LjE0MSwyMC4xNzQtMy4yNTlsNDEzLjA5NCwxNzEuNDA5XFxyXFxuXFx0XFx0XFx0YzExLjEyNSw0LjYxNiwxMS45OSwxNC45MSwxMS45OSwxNy45NTVTNDgxLjEzNCwyNjkuMzM5LDQ3MC4wMDksMjczLjk1NXpcIn0pKSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoyfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjozfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo0fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo1fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo2fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo3fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo4fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo5fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxMH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTF9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjEyfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxM30pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTR9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjE1fSldKTtcbn1cblxuU2VuZC5kZWZhdWx0UHJvcHMgPSB7XCJ2ZXJzaW9uXCI6XCIxLjFcIixcImlkXCI6XCJDYXBhXzFcIixcInhcIjpcIjBweFwiLFwieVwiOlwiMHB4XCIsXCJ2aWV3Qm94XCI6XCIwIDAgNTEyIDUxMlwiLFwic3R5bGVcIjp7XCJlbmFibGVCYWNrZ3JvdW5kXCI6XCJuZXcgMCAwIDUxMiA1MTJcIn0sXCJ4bWxTcGFjZVwiOlwicHJlc2VydmVcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2VuZDtcblxuU2VuZC5kZWZhdWx0ID0gU2VuZDtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIFNtaWxpbmcgKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxbUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLHtcInN0eWxlXCI6e1wiZmlsbFwiOlwiI0ZGQ0EyOFwifSxcImN4XCI6XCIyNTZcIixcImN5XCI6XCIyNTZcIixcInJcIjpcIjI1NlwiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MX0sW1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wic3R5bGVcIjp7XCJmaWxsXCI6XCIjNkQ0QzQxXCJ9LFwiZFwiOlwiTTM5OS42OCwyMDguMzJjLTguODMyLDAtMTYtNy4xNjgtMTYtMTZjMC0xNy42MzItMTQuMzM2LTMyLTMyLTMycy0zMiwxNC4zNjgtMzIsMzJcXHJcXG5cXHRcXHRjMCw4LjgzMi03LjE2OCwxNi0xNiwxNnMtMTYtNy4xNjgtMTYtMTZjMC0zNS4yOTYsMjguNzA0LTY0LDY0LTY0czY0LDI4LjcwNCw2NCw2NEM0MTUuNjgsMjAxLjE4NCw0MDguNTEyLDIwOC4zMiwzOTkuNjgsMjA4LjMyelwiLFwia2V5XCI6MH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wic3R5bGVcIjp7XCJmaWxsXCI6XCIjNkQ0QzQxXCJ9LFwiZFwiOlwiTTIwNy42OCwyMDguMzJjLTguODMyLDAtMTYtNy4xNjgtMTYtMTZjMC0xNy42MzItMTQuMzY4LTMyLTMyLTMycy0zMiwxNC4zNjgtMzIsMzJcXHJcXG5cXHRcXHRjMCw4LjgzMi03LjE2OCwxNi0xNiwxNnMtMTYtNy4xNjgtMTYtMTZjMC0zNS4yOTYsMjguNzA0LTY0LDY0LTY0czY0LDI4LjcwNCw2NCw2NEMyMjMuNjgsMjAxLjE4NCwyMTYuNTEyLDIwOC4zMiwyMDcuNjgsMjA4LjMyelwiLFwia2V5XCI6MX0pXSksUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJzdHlsZVwiOntcImZpbGxcIjpcIiNGQUZBRkFcIn0sXCJkXCI6XCJNNDM3LjY5NiwyOTQuNjg4Yy0zLjA0LTQtNy43NDQtNi4zNjgtMTIuNzM2LTYuMzY4SDg2LjRjLTUuMDI0LDAtOS43MjgsMi4zMzYtMTIuNzM2LDYuMzM2XFxyXFxuXFx0Yy0zLjA3Miw0LjAzMi00LjAzMiw5LjE4NC0yLjY4OCwxNC4wMTZDOTQuMTEyLDM5MC44OCwxNzAuMDgsNDQ4LjMyLDI1NS42NDgsNDQ4LjMyczE2MS41MzYtNTcuNDQsMTg0LjY3Mi0xMzkuNjQ4XFxyXFxuXFx0QzQ0MS42OTYsMzAzLjg0LDQ0MC43MzYsMjk4LjY4OCw0MzcuNjk2LDI5NC42ODh6XCIsXCJrZXlcIjoyfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjozfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo0fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo1fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo2fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo3fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo4fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjo5fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxMH0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTF9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjEyfSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxM30pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTR9KSxSZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLHtcImtleVwiOjE1fSksUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIix7XCJrZXlcIjoxNn0pLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIse1wia2V5XCI6MTd9KV0pO1xufVxuXG5TbWlsaW5nLmRlZmF1bHRQcm9wcyA9IHtcInZlcnNpb25cIjpcIjEuMVwiLFwiaWRcIjpcIkNhcGFfMVwiLFwieFwiOlwiMHB4XCIsXCJ5XCI6XCIwcHhcIixcInZpZXdCb3hcIjpcIjAgMCA1MTIgNTEyXCIsXCJzdHlsZVwiOntcImVuYWJsZUJhY2tncm91bmRcIjpcIm5ldyAwIDAgNTEyIDUxMlwifSxcInhtbFNwYWNlXCI6XCJwcmVzZXJ2ZVwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbWlsaW5nO1xuXG5TbWlsaW5nLmRlZmF1bHQgPSBTbWlsaW5nO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImVtb2ppLXBpY2tlci1yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9