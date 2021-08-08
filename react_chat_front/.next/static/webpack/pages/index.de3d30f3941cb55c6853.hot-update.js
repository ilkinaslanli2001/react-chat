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
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messageField.module.css */ "./components/MessageField/messageField.module.css");
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_messageField_module_css__WEBPACK_IMPORTED_MODULE_15__);
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
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
    className: [(_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().loading_wrapper), "glass"].join(' '),
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
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().user_info),
      children: [width < 650 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: function onClick() {
          onBackClick();
        },
        className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().left),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
        width: 50,
        height: 50,
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
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper)
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VGaWVsZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJvdGhlclVzZXJSZWR1Y2VyIiwib3RoZXJfdXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsInNpbXBsZVJlZHVjZXIiLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsIm15UmVmIiwidXNlUmVmIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwic2VuZCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJiIiwiV2ViU29ja2V0IiwidXNlcm5hbWUiLCJpZCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiY2xvc2UiLCJnZXRfbWVzc2FnZXNfZnJvbV9kYiIsInNldExvYWRpbmciLCJheGlvc0luc3RhbmNlIiwidGhlbiIsInJlcyIsImVyciIsIm9uQmFja0NsaWNrIiwiY2xlYXJPdGhlclVzZXIiLCJjbGFzc2VzIiwiam9pbiIsInVuZGVmaW5lZCIsImF2YXRhciIsIndyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxxQkFDQ0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxnQkFBVjtBQUFBLEdBQU4sQ0FEWjtBQUFB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LGdCQVdBO0FBQUssYUFBUyxFQUFFNEIsMEVBQWVJO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFaVDtBQWNIOztHQTdEUXBELFk7VUFDZ0JDLG9ELEVBRU5BLG9ELEVBQ0dBLG9ELEVBRURZLG9ELEVBRURHLGdFOzs7S0FSWGhCLFk7QUErRFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGUzZDMwZjM5NDFjYjU1YzY4NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbWVzc2FnZUZpZWxkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gXCIuLi9NZXNzYWdlcy9NZXNzYWdlc1wiO1xyXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4uL0lucHV0Qm94L0lucHV0Qm94XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtheGlvc0luc3RhbmNlfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7c2V0TG9hZGluZ30gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2ltcGxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvbGVmdC1hcnJvdy5zdmcnXHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcbmltcG9ydCB7Y2xlYXJPdGhlclVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL290aGVyVXNlckFjdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuZnVuY3Rpb24gTWVzc2FnZUZpZWxkKCkge1xyXG4gICAgY29uc3Qge290aGVyX3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUub3RoZXJVc2VyUmVkdWNlcilcclxuXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHtsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNpbXBsZVJlZHVjZXIpXHJcbiAgICBjb25zdCBbc29ja2V0LCBzZXRTb2NrZXRdID0gdXNlU3RhdGUoKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBteVJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAoc29ja2V0KVxyXG4gICAgICAgICAgICBzb2NrZXQuc2VuZChtZXNzYWdlKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXJfdXNlcikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiID0gbmV3IFdlYlNvY2tldChgd3M6Ly8xMjcuMC4wLjE6ODAwMC93cy9jaGF0LyR7b3RoZXJfdXNlci51c2VybmFtZX0vPyR7dXNlci5pZH1gKTtcclxuICAgICAgICAgICAgYi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgSlNPTi5wYXJzZShldmVudC5kYXRhKV0pXHJcbiAgICAgICAgICAgICAgICBteVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXHJcbiAgICAgICAgICAgICAgICBiLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTb2NrZXQoYilcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVzc2FnZXNdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRfbWVzc2FnZXNfZnJvbV9kYigpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYGFwaS92MS9jaGF0LyR7dXNlci51c2VybmFtZX0vP290aGVyPSR7b3RoZXJfdXNlci51c2VybmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X21lc3NhZ2VzX2Zyb21fZGIoKVxyXG4gICAgfSwgW290aGVyX3VzZXJdKVxyXG4gICAgY29uc3Qgb25CYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmNsb3NlKClcclxuICAgICAgICBkaXNwYXRjaChjbGVhck90aGVyVXNlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmxvYWRpbmdfd3JhcHBlciwgXCJnbGFzc1wiXS5qb2luKCcgJyl9PjxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICA8L2Rpdj4gOiBPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAge3dpZHRoIDwgNjUwID9cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkJhY2tDbGljaygpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+PExlZnRBcnJvdy8+PC9pPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PXtvdGhlcl91c2VyLnVzZXJuYW1lfSBzcmM9e290aGVyX3VzZXIuYXZhdGFyICE9PSBudWxsID8gb3RoZXJfdXNlci5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgPGgxPkB7b3RoZXJfdXNlci51c2VybmFtZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNZXNzYWdlcyBteVJlZj17bXlSZWZ9IG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxJbnB1dEJveCBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9Lz5cclxuICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9Lz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VGaWVsZDsiXSwic291cmNlUm9vdCI6IiJ9