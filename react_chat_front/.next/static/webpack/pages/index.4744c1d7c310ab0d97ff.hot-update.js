self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UserProfile/UserProfile.js":
/*!***********************************************!*\
  !*** ./components/UserProfile/UserProfile.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _userProfile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userProfile.module.css */ "./components/UserProfile/userProfile.module.css");
/* harmony import */ var _userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/cogwheel.svg */ "./src/assets/svg/cogwheel.svg");
/* harmony import */ var _src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\UserProfile\\UserProfile.js",
    _s = $RefreshSig$();







function UserProfile(props) {
  _s();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector.user;

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
        lineNumber: 11,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().userInfo),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["@", user === null || user === void 0 ? void 0 : user.username]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, this), (user === null || user === void 0 ? void 0 : user.status) !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: user === null || user === void 0 ? void 0 : user.status
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 43
        }, this) : undefined]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
      href: '/settings',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: (_userProfile_module_css__WEBPACK_IMPORTED_MODULE_5___default().settingBTN),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_cogwheel_svg__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 75
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 41
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 38
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_s(UserProfile, "Jxgif+QfY7+MStbF+F1uZ9ypUGY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInByb3BzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlciIsImNsYXNzZXMiLCJ1c2VybmFtZSIsImF2YXRhciIsInVuZGVmaW5lZCIsImpvaW4iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQSxxQkFDVEMsd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxXQUFWO0FBQUEsR0FBTixDQURGO0FBQUEsTUFDakJDLElBRGlCLGdCQUNqQkEsSUFEaUI7O0FBRXhCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyw0RUFBaEI7QUFBQSw0QkFDRztBQUFLLGVBQVMsRUFBRUEsc0VBQWhCO0FBQUEsOEJBQ0s7QUFBSyxXQUFHLEVBQUVELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRSxRQUFoQjtBQUEwQixpQkFBUyxFQUFFLENBQUNELDZFQUFELEVBQXNCLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxNQUFOLE1BQWUsSUFBZixHQUFvQkYsK0VBQXBCLEdBQTJDRyxTQUFqRSxFQUE0RUMsSUFBNUUsQ0FBaUYsR0FBakYsQ0FBckM7QUFBNEgsV0FBRyxFQUFFLENBQUFMLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxNQUFOLE1BQWUsSUFBZixHQUFvQkgsSUFBcEIsYUFBb0JBLElBQXBCLHVCQUFvQkEsSUFBSSxDQUFFRyxNQUExQixHQUFpQztBQUFsSztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREwsZUFFSztBQUFLLGlCQUFTLEVBQUVGLHlFQUFoQjtBQUFBLGdDQUNJO0FBQUEsMEJBQU1ELElBQU4sYUFBTUEsSUFBTix1QkFBTUEsSUFBSSxDQUFFRSxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVLLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFTSxNQUFOLE1BQWUsSUFBZixnQkFBcUI7QUFBQSxvQkFBSU4sSUFBSixhQUFJQSxJQUFKLHVCQUFJQSxJQUFJLENBQUVNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBckIsR0FBMkNGLFNBRmhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURILGVBUUksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUUsV0FBWjtBQUFBLDZCQUF5QjtBQUFBLCtCQUFHO0FBQUcsbUJBQVMsRUFBRUgsMkVBQWQ7QUFBQSxpQ0FBa0MsOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FkUU4sVztVQUNVRSxvRDs7O0tBRFZGLFc7QUFnQlQsK0RBQWVBLFdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDc0NGMxZDdjMzEwYWIwZDk3ZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VzZXJQcm9maWxlLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2NvZ3doZWVsLnN2ZydcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuZnVuY3Rpb24gVXNlclByb2ZpbGUocHJvcHMpIHtcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyUHJvZmlsZX0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBhbHQ9e3VzZXI/LnVzZXJuYW1lfSBjbGFzc05hbWU9e1tjbGFzc2VzLnByb2ZpbGVJbWFnZSx1c2VyPy5hdmF0YXI9PT1udWxsP2NsYXNzZXMubm9Qcm9maWxlSW1hZ2U6dW5kZWZpbmVkXS5qb2luKCcgJyl9IHNyYz17dXNlcj8uYXZhdGFyIT09bnVsbD91c2VyPy5hdmF0YXI6Jy9pbWFnZXMvdXNlci5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VySW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkB7dXNlcj8udXNlcm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlcj8uc3RhdHVzIT09bnVsbCA/PHA+e3VzZXI/LnN0YXR1c308L3A+OnVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXsnL3NldHRpbmdzJ30+PGE+PGkgY2xhc3NOYW1lPXtjbGFzc2VzLnNldHRpbmdCVE59PjxTZXR0aW5ncyAvPjwvaT48L2E+PC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==