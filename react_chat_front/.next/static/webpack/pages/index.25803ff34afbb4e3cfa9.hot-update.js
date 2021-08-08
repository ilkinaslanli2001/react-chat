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
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.module.css */ "./components/User/user.module.css");
/* harmony import */ var _user_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_user_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/right-arrow.svg */ "./src/assets/svg/right-arrow.svg");
/* harmony import */ var _src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
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
    className: (_user_module_css__WEBPACK_IMPORTED_MODULE_6___default().user),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
      alt: data.username,
      width: 50,
      height: 50,
      quality: 100,
      className: (data === null || data === void 0 ? void 0 : data.avatar) === null ? (_user_module_css__WEBPACK_IMPORTED_MODULE_6___default().noProfileImage) : undefined,
      src: (data === null || data === void 0 ? void 0 : data.avatar) !== null ? data === null || data === void 0 ? void 0 : data.avatar : '/images/user.png'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_user_module_css__WEBPACK_IMPORTED_MODULE_6___default().info),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: ["@", data.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: data.status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_right_arrow_svg__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL1VzZXIuanMiXSwibmFtZXMiOlsiVXNlciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIm90aGVyVXNlclJlZHVjZXIiLCJvdGhlcl91c2VyIiwib25Vc2VyQ2xpY2siLCJ1c2VybmFtZSIsInNldE90aGVyVXNlciIsImNsYXNzZXMiLCJhdmF0YXIiLCJ1bmRlZmluZWQiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxPQUFzQjtBQUFBOztBQUFBLE1BQVBDLElBQU8sUUFBUEEsSUFBTztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURrQixxQkFHR0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxnQkFBVjtBQUFBLEdBQU4sQ0FIZDtBQUFBLE1BR1hDLFVBSFcsZ0JBR1hBLFVBSFc7O0FBSWxCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSVAsSUFBSSxDQUFDUSxRQUFMLEtBQWtCRixVQUFVLENBQUNFLFFBQWpDLEVBQTJDO0FBQ3ZDUCxjQUFRLENBQUNRLDRFQUFZLENBQUNULElBQUQsQ0FBYixDQUFSO0FBQ0g7QUFDSixHQUpEOztBQU1BLHNCQUNJO0FBQUssV0FBTyxFQUFFTyxXQUFkO0FBQTJCLGFBQVMsRUFBRUcsOERBQXRDO0FBQUEsNEJBQ0ksOERBQUMsbURBQUQ7QUFBTyxTQUFHLEVBQUVWLElBQUksQ0FBQ1EsUUFBakI7QUFBMkIsV0FBSyxFQUFFLEVBQWxDO0FBQXNDLFlBQU0sRUFBRSxFQUE5QztBQUFrRCxhQUFPLEVBQUUsR0FBM0Q7QUFDTyxlQUFTLEVBQUUsQ0FBQVIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVXLE1BQU4sTUFBaUIsSUFBakIsR0FBd0JELHdFQUF4QixHQUFpREUsU0FEbkU7QUFFTyxTQUFHLEVBQUUsQ0FBQVosSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVXLE1BQU4sTUFBaUIsSUFBakIsR0FBd0JYLElBQXhCLGFBQXdCQSxJQUF4Qix1QkFBd0JBLElBQUksQ0FBRVcsTUFBOUIsR0FBdUM7QUFGbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUk7QUFBSyxlQUFTLEVBQUVELDhEQUFoQjtBQUFBLDhCQUNJO0FBQUEsd0JBQU1WLElBQUksQ0FBQ1EsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsa0JBQUlSLElBQUksQ0FBQ2E7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFRSTtBQUFBLDZCQUFHLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0F0QlFkLEk7VUFDWUcsb0QsRUFFSUMsb0Q7OztLQUhoQkosSTtBQXdCVCwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNTgwM2ZmMzRhZmJiNGUzY2ZhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vdXNlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSaWdodEFycm93IGZyb20gXCIuLi8uLi9zcmMvYXNzZXRzL3N2Zy9yaWdodC1hcnJvdy5zdmdcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NldE90aGVyVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvb3RoZXJVc2VyQWN0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gVXNlcih7ZGF0YX0pIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG5cclxuICAgIGNvbnN0IHtvdGhlcl91c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm90aGVyVXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCBvblVzZXJDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS51c2VybmFtZSAhPT0gb3RoZXJfdXNlci51c2VybmFtZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRPdGhlclVzZXIoZGF0YSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtvblVzZXJDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJ9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgYWx0PXtkYXRhLnVzZXJuYW1lfSB3aWR0aD17NTB9IGhlaWdodD17NTB9IHF1YWxpdHk9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17ZGF0YT8uYXZhdGFyID09PSBudWxsID8gY2xhc3Nlcy5ub1Byb2ZpbGVJbWFnZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YT8uYXZhdGFyICE9PSBudWxsID8gZGF0YT8uYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PlxyXG4gICAgICAgICAgICAgICAgPGgxPkB7ZGF0YS51c2VybmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+e2RhdGEuc3RhdHVzfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxpPjxSaWdodEFycm93Lz48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=