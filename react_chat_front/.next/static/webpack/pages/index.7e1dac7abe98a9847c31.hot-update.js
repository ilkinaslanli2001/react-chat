self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/User/User.js":
/*!*********************************!*\
  !*** ./components/User/User.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.module.css */ "./components/User/user.module.css");
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_user_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/right-arrow.svg */ "./src/assets/svg/right-arrow.svg");
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\User\\User.js",
    _s = $RefreshSig$();









function User(_ref) {
  _s();

  var data = _ref.data;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.otherUserReducer;
  }),
      other_user = _useSelector.other_user;

  var onUserClick = function onUserClick() {
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

_s(User, "tI+MaQ2Ml7z2wA0t/NiwY4ghgoQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = User;
/* harmony default export */ __webpack_exports__["default"] = (User);

var _c;

$RefreshReg$(_c, "User");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL1VzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm90aGVyVXNlclJlZHVjZXIiLCJvdGhlcl91c2VyIiwib25Vc2VyQ2xpY2siLCJ1c2VybmFtZSIsInNldE90aGVyVXNlciIsImNsYXNzZXMiLCJhdmF0YXIiLCJ1bmRlZmluZWQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsSUFBVCxPQUFzQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURrQixxQkFHR0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxnQkFBVjtBQUFBLEdBQU4sQ0FIZDtBQUFBLE1BR1hDLFVBSFcsZ0JBR1hBLFVBSFc7O0FBSWxCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSVAsSUFBSSxDQUFDUSxRQUFMLEtBQWtCRixVQUFVLENBQUNFLFFBQWpDLEVBQTJDO0FBQ3ZDUCxjQUFRLENBQUNRLDRFQUFZLENBQUNULElBQUQsQ0FBYixDQUFSO0FBQ0g7QUFDSixHQUpEOztBQU1BLHNCQUNJO0FBQUssV0FBTyxFQUFFTyxXQUFkO0FBQTJCLGFBQVMsRUFBRUcsOERBQXRDO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUUsQ0FBQVYsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVXLE1BQU4sTUFBaUIsSUFBakIsR0FBd0JELHdFQUF4QixHQUFpREUsU0FBakU7QUFDSyxTQUFHLEVBQUUsQ0FBQVosSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVXLE1BQU4sTUFBaUIsSUFBakIsR0FBd0JYLElBQXhCLGFBQXdCQSxJQUF4Qix1QkFBd0JBLElBQUksQ0FBRVcsTUFBOUIsR0FBdUM7QUFEakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBR0k7QUFBQSw4QkFDSTtBQUFBLHdCQUFNWCxJQUFJLENBQUNRLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGtCQUFJUixJQUFJLENBQUNhO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLGVBT0k7QUFBQSw2QkFBRyw4REFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBckJRZCxJO1VBQ1lHLG9ELEVBRUlDLG9EOzs7S0FIaEJKLEk7QUF1QlQsK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2UxZGFjN2FiZTk4YTk4NDdjMzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3VzZXIubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tIFwiLi4vLi4vc3JjL2Fzc2V0cy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZXRPdGhlclVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL290aGVyVXNlckFjdGlvblwiO1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFVzZXIoe2RhdGF9KSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuXHJcbiAgICBjb25zdCB7b3RoZXJfdXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5vdGhlclVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qgb25Vc2VyQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEudXNlcm5hbWUgIT09IG90aGVyX3VzZXIudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0T3RoZXJVc2VyKGRhdGEpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgb25DbGljaz17b25Vc2VyQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2RhdGE/LmF2YXRhciA9PT0gbnVsbCA/IGNsYXNzZXMubm9Qcm9maWxlSW1hZ2UgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgc3JjPXtkYXRhPy5hdmF0YXIgIT09IG51bGwgPyBkYXRhPy5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMT5Ae2RhdGEudXNlcm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLnN0YXR1c308L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aT48UmlnaHRBcnJvdy8+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcjsiXSwic291cmNlUm9vdCI6IiJ9