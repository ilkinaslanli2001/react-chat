self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/InputBox/InputBox.js":
/*!*****************************************!*\
  !*** ./components/InputBox/InputBox.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inputBox_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputBox.module.css */ "./components/InputBox/inputBox.module.css");
/* harmony import */ var _inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/send.svg */ "./src/assets/svg/send.svg");
/* harmony import */ var _src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/svg/smiling.svg */ "./src/assets/svg/smiling.svg");
/* harmony import */ var _src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\InputBox\\InputBox.js",
    _s = $RefreshSig$();






var EmojiPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_emoji-picker-react_dist_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! emoji-picker-react */ "./node_modules/emoji-picker-react/dist/index.js", 23));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! emoji-picker-react */ "./node_modules/emoji-picker-react/dist/index.js")];
    },
    modules: ["..\\components\\InputBox\\InputBox.js -> " + 'emoji-picker-react']
  }
});
_c2 = EmojiPicker;

function InputBox(_ref) {
  _s();

  var sendMessage = _ref.sendMessage;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      emojiActive = _useState[0],
      setEmojiActive = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      message = _useState2[0],
      setMessage = _useState2[1];

  var onEmojiClick = function onEmojiClick(event, emojiObject) {
    var cursor = ref.current.selectionStart;
    var text = message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
    setMessage(text);
  };

  var handleKeyDown = function handleKeyDown(e) {
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
        onChange: function onChange(event) {
          setMessage(event.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: function onClick() {
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
        onClick: function onClick() {
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

_s(InputBox, "q0cH2PZDF4VTT3aEHu3NKqLtbLA=");

_c3 = InputBox;
/* harmony default export */ __webpack_exports__["default"] = (InputBox);

var _c, _c2, _c3;

$RefreshReg$(_c, "EmojiPicker$dynamic");
$RefreshReg$(_c2, "EmojiPicker");
$RefreshReg$(_c3, "InputBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/MessageField/MessageField.js":
/*!*************************************************!*\
  !*** ./components/MessageField/MessageField.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messageField.module.css */ "./components/MessageField/messageField.module.css");
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_messageField_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Messages_Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Messages/Messages */ "./components/Messages/Messages.js");
/* harmony import */ var _InputBox_InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBox/InputBox */ "./components/InputBox/InputBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/assets/svg/left-arrow.svg */ "./src/assets/svg/left-arrow.svg");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\MessageField\\MessageField.js",
    _s = $RefreshSig$();













function MessageField() {
  _s();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.otherUserReducer;
  }),
      other_user = _useSelector.other_user;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector2.user;

  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      loading = _useSelector3.loading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      socket = _useState[0],
      setSocket = _useState[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_12__.default)(),
      width = _useWindowDimensions.width;

  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);

  var sendMessage = function sendMessage(message) {
    if (socket) socket.send(message);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (Object.keys(other_user).length > 0) {
      var b = new WebSocket("ws://127.0.0.1:8000/ws/chat/".concat(other_user.username, "/?").concat(user.id));

      b.onmessage = function (event) {
        setMessages([].concat((0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__.default)(messages), [JSON.parse(event.data)]));
        myRef.current.scrollIntoView({
          behavior: "smooth"
        });
        b.close();
      };

      setSocket(b);
    }
  }, [messages]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function get_messages_from_db() {
      return _get_messages_from_db.apply(this, arguments);
    }

    function _get_messages_from_db() {
      _get_messages_from_db = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__.setLoading)(true));
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_8__.axiosInstance.get("api/v1/chat/".concat(user.username, "/?other=").concat(other_user.username)).then(function (res) {
                  setMessages(res.data);
                  console.log(res.data);
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__.setLoading)(false));
                })["catch"](function (err) {
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__.setLoading)(false));
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _get_messages_from_db.apply(this, arguments);
    }

    get_messages_from_db();
  }, [other_user]);

  var onBackClick = function onBackClick() {
    socket.close();
    dispatch((0,_store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_13__.clearOtherUser)());
  };

  return loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: [(_messageField_module_css__WEBPACK_IMPORTED_MODULE_14___default().loading_wrapper), "glass"].join(' '),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 22
  }, this) : Object.keys(other_user).length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_14___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_info),
      children: [width < 650 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: function onClick() {
          onBackClick();
        },
        className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_14___default().left),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_5__.default, {
      myRef: myRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_6__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_14___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 14
  }, this);
}

_s(MessageField, "QCEZHAPUbhw++to0Cg01JjURxwU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch, _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_12__.default];
});

_c = MessageField;
/* harmony default export */ __webpack_exports__["default"] = (MessageField);

var _c;

$RefreshReg$(_c, "MessageField");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEJveC9JbnB1dEJveC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIl0sIm5hbWVzIjpbIkVtb2ppUGlja2VyIiwiZHluYW1pYyIsInNzciIsIklucHV0Qm94Iiwic2VuZE1lc3NhZ2UiLCJyZWYiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImVtb2ppQWN0aXZlIiwic2V0RW1vamlBY3RpdmUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm9uRW1vamlDbGljayIsImV2ZW50IiwiZW1vamlPYmplY3QiLCJjdXJzb3IiLCJjdXJyZW50Iiwic2VsZWN0aW9uU3RhcnQiLCJ0ZXh0Iiwic2xpY2UiLCJlbW9qaSIsImhhbmRsZUtleURvd24iLCJlIiwia2V5IiwiY2xhc3NlcyIsInRhcmdldCIsInZhbHVlIiwidW5kZWZpbmVkIiwiam9pbiIsIk1lc3NhZ2VGaWVsZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJvdGhlclVzZXJSZWR1Y2VyIiwib3RoZXJfdXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsInNpbXBsZVJlZHVjZXIiLCJsb2FkaW5nIiwic29ja2V0Iiwic2V0U29ja2V0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwid2lkdGgiLCJteVJlZiIsInNlbmQiLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYiIsIldlYlNvY2tldCIsInVzZXJuYW1lIiwiaWQiLCJvbm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImNsb3NlIiwiZ2V0X21lc3NhZ2VzX2Zyb21fZGIiLCJzZXRMb2FkaW5nIiwiYXhpb3NJbnN0YW5jZSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwi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QUtJO0FBQUssV0FBRyxFQUFFTSxVQUFVLENBQUNxQixRQUFyQjtBQUErQixXQUFHLEVBQUVyQixVQUFVLENBQUN3QyxNQUFYLEtBQXNCLElBQXRCLEdBQTZCeEMsVUFBVSxDQUFDd0MsTUFBeEMsR0FBaUQ7QUFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBTUk7QUFBQSx3QkFBTXhDLFVBQVUsQ0FBQ3FCLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUQwQyxlQVMxQyw4REFBQyx1REFBRDtBQUFVLFdBQUssRUFBRVIsS0FBakI7QUFBd0IsY0FBUSxFQUFFSjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVDBDLGVBVTFDLDhEQUFDLHVEQUFEO0FBQVUsaUJBQVcsRUFBRXRDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXJDLGdCQVdBO0FBQUssYUFBUyxFQUFFb0IsMEVBQWVrRDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBWlQ7QUFjSDs7R0E5RFE3QyxZO1VBQ2dCQyxvRCxFQUVOQSxvRCxFQUNHQSxvRCxFQUVEVyxvRCxFQUVERyxnRTs7O0tBUlhmLFk7QUFnRVQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTIyNDMyNmJhMDhhNjc0MDA1ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9pbnB1dEJveC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgVGVsZWdyYW1JY29uIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL3NlbmQuc3ZnJ1xyXG5pbXBvcnQgRW1vamlMb2dvIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL3NtaWxpbmcuc3ZnJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5cclxuY29uc3QgRW1vamlQaWNrZXIgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnZW1vamktcGlja2VyLXJlYWN0JyksIHtcclxuICAgIHNzcjogZmFsc2UsXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBJbnB1dEJveCh7c2VuZE1lc3NhZ2V9KSB7XHJcblxyXG4gICAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xyXG4gICAgY29uc3QgW2Vtb2ppQWN0aXZlLCBzZXRFbW9qaUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gICAgY29uc3Qgb25FbW9qaUNsaWNrID0gKGV2ZW50LCBlbW9qaU9iamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnNvciA9IHJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBtZXNzYWdlLnNsaWNlKDAsIGN1cnNvcikgKyBlbW9qaU9iamVjdC5lbW9qaSArIG1lc3NhZ2Uuc2xpY2UoY3Vyc29yKTtcclxuICAgICAgICBzZXRNZXNzYWdlKHRleHQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHNldE1lc3NhZ2UoXCJcIilcclxuICAgICAgICAgICAgc2V0RW1vamlBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSByZWY9e3JlZn0gdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFbW9qaUFjdGl2ZSghZW1vamlBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fT48RW1vamlMb2dvLz48L2k+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbW9qaV93cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMuZW1vamlfY29udGFpbmVyLCBlbW9qaUFjdGl2ZSA/IGNsYXNzZXMuYWN0aXZlIDogdW5kZWZpbmVkXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RW1vamlQaWNrZXIgb25FbW9qaUNsaWNrPXtvbkVtb2ppQ2xpY2t9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpICwgc2V0TWVzc2FnZShcIlwiKSwgc2V0RW1vamlBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9fT48VGVsZWdyYW1JY29uLz48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3g7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tZXNzYWdlRmllbGQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4uL01lc3NhZ2VzL01lc3NhZ2VzXCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi4vSW5wdXRCb3gvSW5wdXRCb3hcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2F4aW9zSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHtzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9sZWZ0LWFycm93LnN2ZydcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHtjbGVhck90aGVyVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvb3RoZXJVc2VyQWN0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlRmllbGQoKSB7XHJcbiAgICBjb25zdCB7b3RoZXJfdXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5vdGhlclVzZXJSZWR1Y2VyKVxyXG5cclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3Qge3dpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgIGNvbnN0IG15UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXQpXHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kKG1lc3NhZ2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBuZXcgV2ViU29ja2V0KGB3czovLzEyNy4wLjAuMTo4MDAwL3dzL2NoYXQvJHtvdGhlcl91c2VyLnVzZXJuYW1lfS8/JHt1c2VyLmlkfWApO1xyXG4gICAgICAgICAgICBiLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXSlcclxuICAgICAgICAgICAgICAgIG15UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSlcclxuICAgICAgICAgICAgICAgIGIuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFNvY2tldChiKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFttZXNzYWdlc10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldF9tZXNzYWdlc19mcm9tX2RiKCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCBheGlvc0luc3RhbmNlLmdldChgYXBpL3YxL2NoYXQvJHt1c2VyLnVzZXJuYW1lfS8/b3RoZXI9JHtvdGhlcl91c2VyLnVzZXJuYW1lfWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldF9tZXNzYWdlc19mcm9tX2RiKClcclxuICAgIH0sIFtvdGhlcl91c2VyXSlcclxuICAgIGNvbnN0IG9uQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5jbG9zZSgpXHJcbiAgICAgICAgZGlzcGF0Y2goY2xlYXJPdGhlclVzZXIoKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5sb2FkaW5nX3dyYXBwZXIsIFwiZ2xhc3NcIl0uam9pbignICcpfT48TG9hZGluZ1NwaW5uZXIvPlxyXG4gICAgPC9kaXY+IDogT2JqZWN0LmtleXMob3RoZXJfdXNlcikubGVuZ3RoID4gMCA/IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgIHt3aWR0aCA8IDY1MCA/XHJcbiAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25CYWNrQ2xpY2soKVxyXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PjxMZWZ0QXJyb3cvPjwvaT4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PXtvdGhlcl91c2VyLnVzZXJuYW1lfSBzcmM9e290aGVyX3VzZXIuYXZhdGFyICE9PSBudWxsID8gb3RoZXJfdXNlci5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgPGgxPkB7b3RoZXJfdXNlci51c2VybmFtZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNZXNzYWdlcyBteVJlZj17bXlSZWZ9IG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxJbnB1dEJveCBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9Lz5cclxuICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9Lz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VGaWVsZDsiXSwic291cmNlUm9vdCI6IiJ9