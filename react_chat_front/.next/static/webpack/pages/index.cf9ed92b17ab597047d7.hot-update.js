self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_SideBox_SideBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideBox/SideBox */ "./components/SideBox/SideBox.js");
/* harmony import */ var _components_MessageField_MessageField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MessageField/MessageField */ "./components/MessageField/MessageField.js");
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var _components_HomeMobile_HomeMobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HomeMobile/HomeMobile */ "./components/HomeMobile/HomeMobile.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/WithAuth */ "./components/WithAuth.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\pages\\index.js",
    _s = $RefreshSig$();









function Home() {
  _s();

  var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_4__.default)(),
      width = _useWindowDimensions.width;

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

_s(Home, "dAXfqqb4RvvCmElffEkkL8escOs=", false, function () {
  return [_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_6__.default)(Home));

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsImNsYXNzZXMiLCJXaXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsNkJBQ0lDLG1FQUFtQixFQUR2QjtBQUFBLE1BQ0xDLEtBREssd0JBQ0xBLEtBREs7O0FBRVosc0JBQU8sOERBQUMsZ0VBQUQ7QUFBQSxjQUNGQSxLQUFLLEdBQUcsR0FBUixnQkFBYztBQUFLLGVBQVMsRUFBRUMsK0RBQWhCO0FBQUEsOEJBQ1gsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLGVBRVgsOERBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFkLGdCQUdRLDhEQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFNSDs7R0FSUUgsSTtVQUNXQywrRDs7O0tBRFhELEk7QUFVVCwrREFBZSxNQUFBSSw2REFBUSxDQUFDSixJQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmOWVkOTJiMTdhYjU5NzA0N2Q3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXJcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBTaWRlQm94IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGVCb3gvU2lkZUJveFwiO1xuaW1wb3J0IE1lc3NhZ2VGaWVsZCBmcm9tIFwiLi4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkXCI7XG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xuaW1wb3J0IEhvbWVNb2JpbGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvSG9tZU1vYmlsZS9Ib21lTW9iaWxlXCI7XG5pbXBvcnQgV2l0aEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9XaXRoQXV0aCdcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCB7d2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xuICAgIHJldHVybiA8V3JhcHBlcj5cbiAgICAgICAge3dpZHRoID4gNjUwID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaG9tZX0+XG4gICAgICAgICAgICA8U2lkZUJveC8+XG4gICAgICAgICAgICA8TWVzc2FnZUZpZWxkLz5cbiAgICAgICAgPC9kaXY+IDogPEhvbWVNb2JpbGUvPn1cbiAgICA8L1dyYXBwZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhBdXRoKEhvbWUpIl0sInNvdXJjZVJvb3QiOiIifQ==