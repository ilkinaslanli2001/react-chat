self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SearchBox/SearchBox.js":
/*!*******************************************!*\
  !*** ./components/SearchBox/SearchBox.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _searchBox_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./searchBox.module.css */ "./components/SearchBox/searchBox.module.css");
/* harmony import */ var _searchBox_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_searchBox_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Users/Users */ "./components/Users/Users.js");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/svg/loupe.svg */ "./src/assets/svg/loupe.svg");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./api.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\SearchBox\\SearchBox.js",
    _s = $RefreshSig$();







function SearchBox(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      searchInput = _useState[0],
      setSearchInput = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      results = _useState2[0],
      setResults = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timeoutId = setTimeout(function () {
      if (searchInput.length >= 2) {
        _api__WEBPACK_IMPORTED_MODULE_4__.axiosInstance.get("api/v1/users/?search=".concat(searchInput)).then(function (results) {
          setResults(results.data);
        })["catch"](function (error) {});
      }
    }, 1000);
    return function () {
      return clearTimeout(timeoutId);
    };
  }, [searchInput]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_searchBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_searchBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().search_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        value: searchInput,
        onChange: function onChange(event) {
          setSearchInput(event.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Users_Users__WEBPACK_IMPORTED_MODULE_2__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

_s(SearchBox, "oDpgrvW685Z1VuKicYw4CKgV3wA=");

_c = SearchBox;
/* harmony default export */ __webpack_exports__["default"] = (SearchBox);

var _c;

$RefreshReg$(_c, "SearchBox");

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
          lineNumber: 30,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: sender === _constants__WEBPACK_IMPORTED_MODULE_2__.USER ? (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().u_timestamp) : (_userMessage_module_css__WEBPACK_IMPORTED_MODULE_4___default().o_timestamp),
          children: timestamp
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        alt: 'profile',
        src: userAvatar
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvU2VhcmNoQm94LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1VzZXJNZXNzYWdlL1VzZXJNZXNzYWdlLmpzIl0sIm5hbWVzIjpbIlNlYXJjaEJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJ1c2VFZmZlY3QiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwibGVuZ3RoIiwiYXhpb3NJbnN0YW5jZSIsInRoZW4iLCJkYXRhIiwiZXJyb3IiLCJjbGVhclRpbWVvdXQiLCJjbGFzc2VzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIlVzZXJNZXNzYWdlIiwic2VuZGVyIiwibWVzc2FnZSIsImF2YXRhciIsInRpbWVzdGFtcCIsInVzZXJBdmF0YXIiLCJzZXRBdmF0YXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiVVNFUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUEsa0JBRWdCQywrQ0FBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUVmQyxXQUZlO0FBQUEsTUFFRkMsY0FGRTs7QUFBQSxtQkFHUUYsK0NBQVEsQ0FBQyxFQUFELENBSGhCO0FBQUEsTUFHZkcsT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBSXRCQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQy9CLFVBQUlOLFdBQVcsQ0FBQ08sTUFBWixJQUFzQixDQUExQixFQUE2QjtBQUN6QkMsMkRBQUEsZ0NBQTBDUixXQUExQyxHQUF5RFMsSUFBekQsQ0FBOEQsVUFBQ1AsT0FBRCxFQUFh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QUFFQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0dBL0JRTCxXO1VBRVVPLG9EOzs7S0FGVlAsVztBQWlDVCwrREFBZUEsV0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNjU5NjE4MDBjYWVhOTBkMTA4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zZWFyY2hCb3gubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgVXNlcnMgZnJvbSBcIi4uL1VzZXJzL1VzZXJzXCI7XHJcbmltcG9ydCBTZWFyY2hMb2dvIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2xvdXBlLnN2ZydcclxuaW1wb3J0IHtheGlvc0luc3RhbmNlfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCb3gocHJvcHMpIHtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dC5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICAgICAgYXhpb3NJbnN0YW5jZS5nZXQoYGFwaS92MS91c2Vycy8/c2VhcmNoPSR7c2VhcmNoSW5wdXR9YCkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdHMocmVzdWx0cy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3NlYXJjaElucHV0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPGk+PFNlYXJjaExvZ28vPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxVc2VycyByZXN1bHRzPXtyZXN1bHRzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3VzZXJNZXNzYWdlLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7VVNFUn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmZ1bmN0aW9uIFVzZXJNZXNzYWdlKHtzZW5kZXIsIG1lc3NhZ2UsIGF2YXRhciwgdGltZXN0YW1wfSkge1xyXG4gICAgY29uc3QgW3VzZXJBdmF0YXIsIHNldEF2YXRhcl0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChzZW5kZXIgPT09IFVTRVIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VyLmF2YXRhciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QXZhdGFyKCcvaW1hZ2VzL3VzZXIucG5nJylcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZXRBdmF0YXIodXNlci5hdmF0YXIpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhdmF0YXIgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldEF2YXRhcihhdmF0YXIpXHJcbiAgICAgICAgICAgIH0gZWxzZSBzZXRBdmF0YXIoJy9pbWFnZXMvdXNlci5wbmcnKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c2VuZGVyID09PSBVU0VSID8gY2xhc3Nlcy51X2NvbnRhaW5lciA6IGNsYXNzZXMub19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWVzc2FnZV93cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzZW5kZXIgPT09IFVTRVIgPyBjbGFzc2VzLnVfdGltZXN0YW1wIDogY2xhc3Nlcy5vX3RpbWVzdGFtcH0+e3RpbWVzdGFtcH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgYWx0PXsncHJvZmlsZSd9IHNyYz17dXNlckF2YXRhcn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJNZXNzYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=