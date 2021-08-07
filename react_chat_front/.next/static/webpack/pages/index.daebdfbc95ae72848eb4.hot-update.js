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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJVc2VyUHJvZmlsZSIsInByb3BzIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXJSZWR1Y2VyIiwidXNlciIsImNsYXNzZXMiLCJ1c2VybmFtZSIsImF2YXRhciIsInVuZGVmaW5lZCIsImpvaW4iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQSxxQkFDVEMsd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxXQUFWO0FBQUEsR0FBTixDQURGO0FBQUEsTUFDakJDLElBRGlCLGdCQUNqQkEsSUFEaUI7O0FBRXhCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyw0RUFBaEI7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBRUEsc0VBQWhCO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUVELElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRSxRQUFoQjtBQUNLLGlCQUFTLEVBQUUsQ0FBQ0QsNkVBQUQsRUFBdUIsQ0FBQUQsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVHLE1BQU4sTUFBaUIsSUFBakIsR0FBd0JGLCtFQUF4QixHQUFpREcsU0FBeEUsRUFBbUZDLElBQW5GLENBQXdGLEdBQXhGLENBRGhCO0FBRUssV0FBRyxFQUFFLENBQUFMLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRyxNQUFOLE1BQWlCLElBQWpCLEdBQXdCSCxJQUF4QixhQUF3QkEsSUFBeEIsdUJBQXdCQSxJQUFJLENBQUVHLE1BQTlCLEdBQXVDO0FBRmpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUlJO0FBQUssaUJBQVMsRUFBRUYseUVBQWhCO0FBQUEsZ0NBQ0k7QUFBQSwwQkFBTUQsSUFBTixhQUFNQSxJQUFOLHVCQUFNQSxJQUFJLENBQUVFLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUssQ0FBQUYsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVNLE1BQU4sTUFBaUIsSUFBakIsZ0JBQXdCO0FBQUEsb0JBQUlOLElBQUosYUFBSUEsSUFBSix1QkFBSUEsSUFBSSxDQUFFTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXhCLEdBQWdERixTQUZyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVVJLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFFLFdBQVo7QUFBQSw2QkFBeUI7QUFBQSwrQkFBRztBQUFHLG1CQUFTLEVBQUVILDJFQUFkO0FBQUEsaUNBQWtDLDhEQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBY0g7O0dBaEJRTixXO1VBQ1VFLG9EOzs7S0FEVkYsVztBQWtCVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kYWViZGZiYzk1YWU3Mjg0OGViNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlclByb2ZpbGUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvY29nd2hlZWwuc3ZnJ1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZnVuY3Rpb24gVXNlclByb2ZpbGUocHJvcHMpIHtcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyUHJvZmlsZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXt1c2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY2xhc3Nlcy5wcm9maWxlSW1hZ2UsIHVzZXI/LmF2YXRhciA9PT0gbnVsbCA/IGNsYXNzZXMubm9Qcm9maWxlSW1hZ2UgOiB1bmRlZmluZWRdLmpvaW4oJyAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgc3JjPXt1c2VyPy5hdmF0YXIgIT09IG51bGwgPyB1c2VyPy5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJJbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+QHt1c2VyPy51c2VybmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyPy5zdGF0dXMgIT09IG51bGwgPyA8cD57dXNlcj8uc3RhdHVzfTwvcD4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvc2V0dGluZ3MnfT48YT48aSBjbGFzc05hbWU9e2NsYXNzZXMuc2V0dGluZ0JUTn0+PFNldHRpbmdzLz48L2k+PC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=