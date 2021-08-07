self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UserMessage/UserMessage.js":
/*!***********************************************!*\
  !*** ./components/UserMessage/UserMessage.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userMessage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userMessage.module.css */ "./components/UserMessage/userMessage.module.css");
/* harmony import */ var _userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\UserMessage\\UserMessage.js",
    _s = $RefreshSig$();






function UserMessage(_ref) {
  _s();

  var sender = _ref.sender,
      message = _ref.message,
      avatar = _ref.avatar,
      timestamp = _ref.timestamp;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      userAvatar = _useState[0],
      setAvatar = _useState[1];

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector.user;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (sender === _constants__WEBPACK_IMPORTED_MODULE_2__.USER) {
      if (user.avatar === null) {
        console.log('he');
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
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: sender === _constants__WEBPACK_IMPORTED_MODULE_2__.USER ? (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().u_timestamp) : (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().o_timestamp),
          children: timestamp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: 'profile',
        src: userAvatar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

_s(UserMessage, "hQ/48KY9HRulkxrQUkKs9aIgUGw=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = UserMessage;
/* harmony default export */ __webpack_exports__["default"] = (UserMessage);

var _c;

$RefreshReg$(_c, "UserMessage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyTWVzc2FnZS9Vc2VyTWVzc2FnZS5qcyJdLCJuYW1lcyI6WyJVc2VyTWVzc2FnZSIsInNlbmRlciIsIm1lc3NhZ2UiLCJhdmF0YXIiLCJ0aW1lc3RhbXAiLCJ1c2VTdGF0ZSIsInVzZXJBdmF0YXIiLCJzZXRBdmF0YXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwidXNlRWZmZWN0IiwiVVNFUiIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBckNDLE1BQXFDLFFBQXJDQSxNQUFxQztBQUFBLE1BQTdCQyxPQUE2QixRQUE3QkEsT0FBNkI7QUFBQSxNQUFwQkMsTUFBb0IsUUFBcEJBLE1BQW9CO0FBQUEsTUFBWkMsU0FBWSxRQUFaQSxTQUFZOztBQUFBLGtCQUN2QkMsK0NBQVEsRUFEZTtBQUFBLE1BQ2hEQyxVQURnRDtBQUFBLE1BQ3BDQyxTQURvQzs7QUFBQSxxQkFFeENDLHdEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLEdBQU4sQ0FGNkI7QUFBQSxNQUVoREMsSUFGZ0QsZ0JBRWhEQSxJQUZnRDs7QUFHdkRDLGtEQUFTLENBQUMsWUFBTTtBQUVaLFFBQUlYLE1BQU0sS0FBS1ksNENBQWYsRUFBcUI7QUFFakIsVUFBSUYsSUFBSSxDQUFDUixNQUFMLEtBQWdCLElBQXBCLEVBQTBCO0FBQ3RCVyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaO0FBQ0FSLGlCQUFTLENBQUMsa0JBQUQsQ0FBVDtBQUNILE9BSEQsTUFJSUEsU0FBUyxDQUFDSSxJQUFJLENBQUNSLE1BQU4sQ0FBVDtBQUVQLEtBUkQsTUFRTztBQUNILFVBQUlBLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBQ2pCSSxpQkFBUyxDQUFDSixNQUFELENBQVQ7QUFDSCxPQUZELE1BRU9JLFNBQVMsQ0FBQyxrQkFBRCxDQUFUO0FBQ1Y7QUFFSixHQWhCUSxFQWdCTixFQWhCTSxDQUFUO0FBa0JBLHNCQUNJO0FBQUssYUFBUyxFQUFFUyx3RUFBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRWYsTUFBTSxLQUFLWSw0Q0FBWCxHQUFrQkcsNEVBQWxCLEdBQXdDQSw0RUFBeEQ7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLGdGQUFoQjtBQUFBLGdDQUNJO0FBQUEsb0JBQUlkO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQU0sbUJBQVMsRUFBRUQsTUFBTSxLQUFLWSw0Q0FBWCxHQUFrQkcsNEVBQWxCLEdBQXdDQSw0RUFBekQ7QUFBQSxvQkFBK0VaO0FBQS9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSTtBQUFLLFdBQUcsRUFBRSxTQUFWO0FBQXFCLFdBQUcsRUFBRUU7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztHQWhDUU4sVztVQUVVUSxvRDs7O0tBRlZSLFc7QUFrQ1QsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWIxODZiMjYzYWUzOThlZjBjYmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi91c2VyTWVzc2FnZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge1VTRVJ9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5mdW5jdGlvbiBVc2VyTWVzc2FnZSh7c2VuZGVyLCBtZXNzYWdlLCBhdmF0YXIsIHRpbWVzdGFtcH0pIHtcclxuICAgIGNvbnN0IFt1c2VyQXZhdGFyLCBzZXRBdmF0YXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoc2VuZGVyID09PSBVU0VSKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlci5hdmF0YXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZScpXHJcbiAgICAgICAgICAgICAgICBzZXRBdmF0YXIoJy9pbWFnZXMvdXNlci5wbmcnKVxyXG4gICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHNldEF2YXRhcih1c2VyLmF2YXRhcilcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGF2YXRhciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXZhdGFyKGF2YXRhcilcclxuICAgICAgICAgICAgfSBlbHNlIHNldEF2YXRhcignL2ltYWdlcy91c2VyLnBuZycpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZW5kZXIgPT09IFVTRVIgPyBjbGFzc2VzLnVfY29udGFpbmVyIDogY2xhc3Nlcy5vX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5tZXNzYWdlX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3NlbmRlciA9PT0gVVNFUiA/IGNsYXNzZXMudV90aW1lc3RhbXAgOiBjbGFzc2VzLm9fdGltZXN0YW1wfT57dGltZXN0YW1wfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9eydwcm9maWxlJ30gc3JjPXt1c2VyQXZhdGFyfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlck1lc3NhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==