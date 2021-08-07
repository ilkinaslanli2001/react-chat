self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Users/Users.js":
/*!***********************************!*\
  !*** ./components/Users/Users.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users.module.css */ "./components/Users/users.module.css");
/* harmony import */ var _users_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_users_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/right-arrow.svg */ "./src/assets/svg/right-arrow.svg");
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User/User */ "./components/User/User.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\Users\\Users.js",
    _s = $RefreshSig$();








function Users(_ref) {
  _s();

  var _this = this;

  var results = _ref.results;

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector.user;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_users_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
    children: Object.keys(results).length !== 0 && (results === null || results === void 0 ? void 0 : results.map(function (u, key) {
      if (user.id !== u.id) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_User_User__WEBPACK_IMPORTED_MODULE_3__.default, {
        data: u
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 28
      }, _this);
    }))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_s(Users, "Jxgif+QfY7+MStbF+F1uZ9ypUGY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector];
});

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/Users/users.module.css":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/Users/users.module.css ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".users_wrapper__3ixMa {\r\n    overflow: auto;\r\n    padding: 0 8px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://components/Users/users.module.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,cAAc;AAClB","sourcesContent":[".wrapper {\r\n    overflow: auto;\r\n    padding: 0 8px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "users_wrapper__3ixMa"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy9Vc2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy91c2Vycy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIlVzZXJzIiwicmVzdWx0cyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJjbGFzc2VzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm1hcCIsInUiLCJrZXkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBMEI7QUFBQTs7QUFBQTs7QUFBQSxNQUFWQyxPQUFVLFFBQVZBLE9BQVU7O0FBQUEscUJBQ1BDLHdEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLEdBQU4sQ0FESjtBQUFBLE1BQ2ZDLElBRGUsZ0JBQ2ZBLElBRGU7O0FBRXRCLHNCQUNJO0FBQUssYUFBUyxFQUFFQyxrRUFBaEI7QUFBQSxjQUNLQyxNQUFNLENBQUNDLElBQVAsQ0FBWVAsT0FBWixFQUFxQlEsTUFBckIsS0FBZ0MsQ0FBaEMsS0FBcUNSLE9BQXJDLGFBQXFDQSxPQUFyQyx1QkFBcUNBLE9BQU8sQ0FBRVMsR0FBVCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsR0FBSixFQUFZO0FBQzNELFVBQUlQLElBQUksQ0FBQ1EsRUFBTCxLQUFZRixDQUFDLENBQUNFLEVBQWxCLEVBQ0ksb0JBQU8sOERBQUMsK0NBQUQ7QUFBZ0IsWUFBSSxFQUFFRjtBQUF0QixTQUFXQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNQLEtBSHFDLENBQXJDO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBU0g7O0dBWFFaLEs7VUFDVUUsb0Q7OztLQURWRixLO0FBYVQsK0RBQWVBLEtBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLGlFQUFpRSx1QkFBdUIsdUJBQXVCLEtBQUssZUFBZSxrR0FBa0csVUFBVSxVQUFVLG9DQUFvQyx1QkFBdUIsdUJBQXVCLEtBQUssMkJBQTJCO0FBQzNXO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTZmYjkwMTc0OWZkMDQwM2Y1YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VzZXJzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvcmlnaHQtYXJyb3cuc3ZnJ1xyXG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vVXNlci9Vc2VyXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gVXNlcnMoe3Jlc3VsdHN9KSB7XHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhyZXN1bHRzKS5sZW5ndGggIT09IDAgJiYgcmVzdWx0cz8ubWFwKCh1LCBrZXkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLmlkICE9PSB1LmlkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8VXNlciBrZXk9e2tleX0gZGF0YT17dX0vPlxyXG4gICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyczsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudXNlcnNfd3JhcHBlcl9fM2l4TWEge1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMCA4cHg7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1VzZXJzL3VzZXJzLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAwIDhweDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInVzZXJzX3dyYXBwZXJfXzNpeE1hXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==