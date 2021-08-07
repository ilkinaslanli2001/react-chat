self["webpackHotUpdate_N_E"]("pages/index",{

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
  console.log(messages);
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
        lineNumber: 20,
        columnNumber: 24
      }, _this);
    })), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: myRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlcy9NZXNzYWdlcy5qcyJdLCJuYW1lcyI6WyJNZXNzYWdlcyIsIm1lc3NhZ2VzIiwibXlSZWYiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwidXNlRWZmZWN0IiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJsZW5ndGgiLCJtYXAiLCJkYXRhIiwia2V5IiwidGltZXN0YW1wIiwiYXV0aG9yIiwiYXZhdGFyIiwiY29udGVudCIsInVzZXJuYW1lIiwiVVNFUiIsIk9USEVSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQXFDO0FBQUE7O0FBQUE7O0FBQUEsTUFBbEJDLFFBQWtCLFFBQWxCQSxRQUFrQjtBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFBQSxxQkFFbEJDLHdEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLEdBQU4sQ0FGTztBQUFBLE1BRTFCQyxJQUYwQixnQkFFMUJBLElBRjBCOztBQUlqQ0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ1pMLFNBQUssQ0FBQ00sT0FBTixDQUFjQyxjQUFkO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVYsUUFBWjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFFVyxxRUFBaEI7QUFBQSxlQUNLWCxRQUFRLENBQUNZLE1BQVQsR0FBa0IsQ0FBbEIsS0FBdUJaLFFBQXZCLGFBQXVCQSxRQUF2Qix1QkFBdUJBLFFBQVEsQ0FBRWEsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBRWpELDBCQUFPLDhEQUFDLDZEQUFEO0FBQXVCLGlCQUFTLEVBQUVELElBQUksQ0FBQ0UsU0FBdkM7QUFBa0QsY0FBTSxFQUFFRixJQUFJLENBQUNHLE1BQUwsQ0FBWUMsTUFBdEU7QUFDYSxlQUFPLEVBQUVKLElBQUksQ0FBQ0ssT0FEM0I7QUFFYSxjQUFNLEVBQUVMLElBQUksQ0FBQ0csTUFBTCxDQUFZRyxRQUFaLEtBQXlCZixJQUFJLENBQUNlLFFBQTlCLEdBQXlDQyw0Q0FBekMsR0FBZ0RDLDZDQUFLQTtBQUYxRSxTQUFrQlAsR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBR0gsS0FMdUIsQ0FBdkIsQ0FETCxlQU9JO0FBQUssU0FBRyxFQUFFZDtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztHQW5CUUYsUTtVQUVVRyxvRDs7O0tBRlZILFE7QUFxQlQsK0RBQWVBLFFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODliNjllZmU2MWRiYzVkZmJkNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21lc3NhZ2VzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFVzZXJNZXNzYWdlIGZyb20gXCIuLi9Vc2VyTWVzc2FnZS9Vc2VyTWVzc2FnZVwiO1xyXG5pbXBvcnQge1VTRVIsIE9USEVSfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge0xPR09VVH0gZnJvbSBcIi4uLy4uL3N0b3JlL3R5cGVzXCI7XHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlcyh7bWVzc2FnZXMsIG15UmVmfSkge1xyXG5cclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbXlSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldygpXHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2VzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAge21lc3NhZ2VzLmxlbmd0aCA+IDAgJiYgbWVzc2FnZXM/Lm1hcCgoZGF0YSwga2V5KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxVc2VyTWVzc2FnZSBrZXk9e2tleX0gdGltZXN0YW1wPXtkYXRhLnRpbWVzdGFtcH0gYXZhdGFyPXtkYXRhLmF1dGhvci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U9e2RhdGEuY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyPXtkYXRhLmF1dGhvci51c2VybmFtZSA9PT0gdXNlci51c2VybmFtZSA/IFVTRVIgOiBPVEhFUn0vPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPGRpdiByZWY9e215UmVmfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlczsiXSwic291cmNlUm9vdCI6IiJ9