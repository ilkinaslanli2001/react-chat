self["webpackHotUpdate_N_E"]("pages/index",{

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
      lineNumber: 60,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_5__.default, {
      myRef: myRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_6__.default, {
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
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_14___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
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


/***/ }),

/***/ "./components/Messages/Messages.js":
/*!*****************************************!*\
  !*** ./components/Messages/Messages.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _messages_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.module.css */ "./components/Messages/messages.module.css");
/* harmony import */ var _messages_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_messages_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UserMessage_UserMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserMessage/UserMessage */ "./components/UserMessage/UserMessage.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/types */ "./store/types.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\Messages\\Messages.js",
    _s = $RefreshSig$();








function Messages(_ref) {
  _s();

  var _this = this;

  var messages = _ref.messages,
      myRef = _ref.myRef;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector.user;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    myRef.current.scrollIntoView();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messages_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
    children: [messages.length > 0 && (messages === null || messages === void 0 ? void 0 : messages.map(function (data, key) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserMessage_UserMessage__WEBPACK_IMPORTED_MODULE_2__.default, {
        timestamp: data.timestamp,
        avatar: data.author.avatar,
        message: data.content,
        sender: data.author.username === user.username ? _constants__WEBPACK_IMPORTED_MODULE_3__.USER : _constants__WEBPACK_IMPORTED_MODULE_3__.OTHER
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 24
      }, _this);
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

_s(Messages, "gpVVcjNBKaWiSBMv61rkpmqM/hk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});

_c = Messages;
/* harmony default export */ __webpack_exports__["default"] = (Messages);

var _c;

$RefreshReg$(_c, "Messages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lc3NhZ2VzL01lc3NhZ2VzLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VGaWVsZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJvdGhlclVzZXJSZWR1Y2VyIiwib3RoZXJfdXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsInNpbXBsZVJlZHVjZXIiLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsIm15UmVmIiwidXNlUmVmIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwic2VuZCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJiIiwiV2ViU29ja2V0IiwidXNlcm5hbWUiLCJpZCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiY2xvc2UiLCJnZXRfbWVzc2FnZXNfZnJvbV9kYiIsInNldExvYWRpbmciLCJheGlvc0luc3RhbmNlIiwidGhlbiIsInJlcyIsImVyciIsIm9uQmFja0NsaWNrIiwiY2xlYXJPdGhlclVzZXIiLCJjbGFzc2VzIiwiam9pbiIsInVuZGVmaW5lZCIsImF2YXRhciIsIndyYXBwZXIiLCJNZXNzYWdlcyIsIm1hcCIsImtleSIsInRpbWVzdGFtcCIsImF1dGhvciIsImNvbnRlbnQiLCJVU0VSIiwiT1RIRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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aEIsSUFBSSxDQUFDdUIsT0FEM0I7QUFFYSxjQUFNLEVBQUV2QixJQUFJLENBQUNzQixNQUFMLENBQVk1QixRQUFaLEtBQXlCdkIsSUFBSSxDQUFDdUIsUUFBOUIsR0FBeUM4Qiw0Q0FBekMsR0FBZ0RDLDZDQUFLQTtBQUYxRSxTQUFrQkwsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBR0gsS0FMdUIsQ0FBdkIsQ0FETCxlQU9JO0FBQUssU0FBRyxFQUFFckM7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFXSDs7R0FsQlFtQyxRO1VBRVVwRCxvRDs7O0tBRlZvRCxRO0FBb0JULCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlODk0YmQzNTM0N2YwYTI5MDUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21lc3NhZ2VGaWVsZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiLi4vTWVzc2FnZXMvTWVzc2FnZXNcIjtcclxuaW1wb3J0IElucHV0Qm94IGZyb20gXCIuLi9JbnB1dEJveC9JbnB1dEJveFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YXhpb3NJbnN0YW5jZX0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQge3NldExvYWRpbmd9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnNcIjtcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5pbXBvcnQgTGVmdEFycm93IGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2xlZnQtYXJyb3cuc3ZnJ1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5pbXBvcnQge2NsZWFyT3RoZXJVc2VyfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9vdGhlclVzZXJBY3Rpb25cIjtcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VGaWVsZCgpIHtcclxuICAgIGNvbnN0IHtvdGhlcl91c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm90aGVyVXNlclJlZHVjZXIpXHJcblxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCB7bG9hZGluZ30gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3QgW3NvY2tldCwgc2V0U29ja2V0XSA9IHVzZVN0YXRlKCk7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCB7d2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgbXlSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldClcclxuICAgICAgICAgICAgc29ja2V0LnNlbmQobWVzc2FnZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG90aGVyX3VzZXIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYiA9IG5ldyBXZWJTb2NrZXQoYHdzOi8vMTI3LjAuMC4xOjgwMDAvd3MvY2hhdC8ke290aGVyX3VzZXIudXNlcm5hbWV9Lz8ke3VzZXIuaWR9YCk7XHJcbiAgICAgICAgICAgIGIub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIEpTT04ucGFyc2UoZXZlbnQuZGF0YSldKVxyXG4gICAgICAgICAgICAgICAgbXlSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KVxyXG4gICAgICAgICAgICAgICAgYi5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0U29ja2V0KGIpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lc3NhZ2VzXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0X21lc3NhZ2VzX2Zyb21fZGIoKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGBhcGkvdjEvY2hhdC8ke3VzZXIudXNlcm5hbWV9Lz9vdGhlcj0ke290aGVyX3VzZXIudXNlcm5hbWV9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldF9tZXNzYWdlc19mcm9tX2RiKClcclxuICAgIH0sIFtvdGhlcl91c2VyXSlcclxuICAgIGNvbnN0IG9uQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5jbG9zZSgpXHJcbiAgICAgICAgZGlzcGF0Y2goY2xlYXJPdGhlclVzZXIoKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5sb2FkaW5nX3dyYXBwZXIsIFwiZ2xhc3NcIl0uam9pbignICcpfT48TG9hZGluZ1NwaW5uZXIvPlxyXG4gICAgPC9kaXY+IDogT2JqZWN0LmtleXMob3RoZXJfdXNlcikubGVuZ3RoID4gMCA/IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgIHt3aWR0aCA8IDY1MCA/XHJcbiAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25CYWNrQ2xpY2soKVxyXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PjxMZWZ0QXJyb3cvPjwvaT4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PXtvdGhlcl91c2VyLnVzZXJuYW1lfSBzcmM9e290aGVyX3VzZXIuYXZhdGFyICE9PSBudWxsID8gb3RoZXJfdXNlci5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgPGgxPkB7b3RoZXJfdXNlci51c2VybmFtZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNZXNzYWdlcyBteVJlZj17bXlSZWZ9IG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxJbnB1dEJveCBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9Lz5cclxuICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9Lz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VGaWVsZDsiLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tZXNzYWdlcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VyTWVzc2FnZSBmcm9tIFwiLi4vVXNlck1lc3NhZ2UvVXNlck1lc3NhZ2VcIjtcclxuaW1wb3J0IHtVU0VSLCBPVEhFUn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtMT0dPVVR9IGZyb20gXCIuLi8uLi9zdG9yZS90eXBlc1wiO1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZXMoe21lc3NhZ2VzLCBteVJlZn0pIHtcclxuXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIG15UmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICB7bWVzc2FnZXMubGVuZ3RoID4gMCAmJiBtZXNzYWdlcz8ubWFwKChkYXRhLCBrZXkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFVzZXJNZXNzYWdlIGtleT17a2V5fSB0aW1lc3RhbXA9e2RhdGEudGltZXN0YW1wfSBhdmF0YXI9e2RhdGEuYXV0aG9yLmF2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT17ZGF0YS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXI9e2RhdGEuYXV0aG9yLnVzZXJuYW1lID09PSB1c2VyLnVzZXJuYW1lID8gVVNFUiA6IE9USEVSfS8+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17bXlSZWZ9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzOyJdLCJzb3VyY2VSb290IjoiIn0=