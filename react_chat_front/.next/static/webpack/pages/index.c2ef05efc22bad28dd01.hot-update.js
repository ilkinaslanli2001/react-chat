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
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Users_Users__WEBPACK_IMPORTED_MODULE_2__.default, {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
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

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/SearchBox/searchBox.module.css":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./components/SearchBox/searchBox.module.css ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".searchBox_wrapper__4Xw5o {\r\n\r\n    display: -moz-box;\r\n\r\n    display: flex;\r\n    -moz-box-orient: vertical;\r\n    -moz-box-direction: normal;\r\n         flex-direction: column;\r\n    height: inherit;\r\n    overflow: auto;\r\n}\r\n\r\n.searchBox_search_wrapper__152bF {\r\n    padding: 10px;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    display: -moz-box;\r\n    display: flex;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n    border-bottom: 1px solid rgba(33, 33, 33, 0.2);\r\n}\r\n\r\n.searchBox_search_wrapper__152bF input {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    padding: 5px;\r\n}\r\n\r\n.searchBox_search_wrapper__152bF i {\r\n    width: 30px;\r\n    height: 28px;\r\n    display: -moz-box;\r\n    display: flex;\r\n    -moz-box-pack: center;\r\n         justify-content: center;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.searchBox_search_wrapper__152bF svg {\r\n    width: 15px;\r\n    opacity: 0.5;\r\n    height: 15px;\r\n}", "",{"version":3,"sources":["webpack://components/SearchBox/searchBox.module.css"],"names":[],"mappings":"AAAA;;IAEI,iBAAa;;IAAb,aAAa;IACb,yBAAsB;IAAtB,0BAAsB;SAAtB,sBAAsB;IACtB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,iBAAa;IAAb,aAAa;IACb,sBAAmB;SAAnB,mBAAmB;IACnB,8CAA8C;AAClD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAa;IAAb,aAAa;IACb,qBAAuB;SAAvB,uBAAuB;IACvB,sBAAmB;SAAnB,mBAAmB;IACnB,eAAe;;AAEnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB","sourcesContent":[".wrapper {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: inherit;\r\n    overflow: auto;\r\n}\r\n\r\n.search_wrapper {\r\n    padding: 10px;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n    display: flex;\r\n    align-items: center;\r\n    border-bottom: 1px solid rgba(33, 33, 33, 0.2);\r\n}\r\n\r\n.search_wrapper input {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    padding: 5px;\r\n}\r\n\r\n.search_wrapper i {\r\n    width: 30px;\r\n    height: 28px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.search_wrapper svg {\r\n    width: 15px;\r\n    opacity: 0.5;\r\n    height: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "searchBox_wrapper__4Xw5o",
	"search_wrapper": "searchBox_search_wrapper__152bF"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hCb3gvU2VhcmNoQm94LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlYXJjaEJveC9zZWFyY2hCb3gubW9kdWxlLmNzcyJdLCJuYW1lcyI6WyJTZWFyY2hCb3giLCJwcm9wcyIsInVzZVN0YXRlIiwic2VhcmNoSW5wdXQiLCJzZXRTZWFyY2hJbnB1dCIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwidXNlRWZmZWN0IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImxlbmd0aCIsImF4aW9zSW5zdGFuY2UiLCJ0aGVuIiwiZGF0YSIsImVycm9yIiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NlcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUFBLGtCQUVnQkMsK0NBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFZkMsV0FGZTtBQUFBLE1BRUZDLGNBRkU7O0FBQUEsbUJBR1FGLCtDQUFRLENBQUMsRUFBRCxDQUhoQjtBQUFBLE1BR2ZHLE9BSGU7QUFBQSxNQUdOQyxVQUhNOztBQUl0QkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUMvQixVQUFJTixXQUFXLENBQUNPLE1BQVosSUFBc0IsQ0FBMUIsRUFBNkI7QUFDekJDLDJEQUFBLGdDQUEwQ1IsV0FBMUMsR0FBeURTLElBQXpELENBQThELFVBQUNQLE9BQUQsRUFBYTtBQUN2RUMsb0JBQVUsQ0FBQ0QsT0FBTyxDQUFDUSxJQUFULENBQVY7QUFDSCxTQUZELFdBRVMsVUFBQ0MsS0FBRCxFQUFXLENBQ25CLENBSEQ7QUFJSDtBQUNKLEtBUDJCLEVBT3pCLElBUHlCLENBQTVCO0FBUUEsV0FBTztBQUFBLGFBQU1DLFlBQVksQ0FBQ1AsU0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDSCxHQVZRLEVBVU4sQ0FBQ0wsV0FBRCxDQVZNLENBQVQ7QUFXQSxzQkFDSTtBQUFLLGFBQVMsRUFBRWEsc0VBQWhCO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUVBLDZFQUFoQjtBQUFBLDhCQUNJO0FBQU8sYUFBSyxFQUFFYixXQUFkO0FBQTJCLGdCQUFRLEVBQUUsa0JBQUNjLEtBQUQsRUFBVztBQUM1Q2Isd0JBQWMsQ0FBQ2EsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBZDtBQUNIO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBQSwrQkFBRyw4REFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0ksOERBQUMsaURBQUQ7QUFBTyxhQUFPLEVBQUVkO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztHQTFCUUwsUzs7S0FBQUEsUztBQTRCVCwrREFBZUEsU0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EscUVBQXFFLDhCQUE4QiwwQkFBMEIsa0NBQWtDLG1DQUFtQyxvQ0FBb0Msd0JBQXdCLHVCQUF1QixLQUFLLDBDQUEwQyxzQkFBc0IsbURBQW1ELDBCQUEwQixzQkFBc0IsK0JBQStCLGlDQUFpQyx1REFBdUQsS0FBSyxnREFBZ0Qsb0JBQW9CLHFCQUFxQixzQkFBc0Isc0NBQXNDLHFCQUFxQixLQUFLLDRDQUE0QyxvQkFBb0IscUJBQXFCLDBCQUEwQixzQkFBc0IsOEJBQThCLHFDQUFxQywrQkFBK0IsaUNBQWlDLHdCQUF3QixTQUFTLDhDQUE4QyxvQkFBb0IscUJBQXFCLHFCQUFxQixLQUFLLE9BQU8sMkdBQTJHLFlBQVksVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxZQUFZLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLG9DQUFvQywwQkFBMEIsK0JBQStCLHdCQUF3Qix1QkFBdUIsS0FBSyx5QkFBeUIsc0JBQXNCLG1EQUFtRCxzQkFBc0IsNEJBQTRCLHVEQUF1RCxLQUFLLCtCQUErQixvQkFBb0IscUJBQXFCLHNCQUFzQixzQ0FBc0MscUJBQXFCLEtBQUssMkJBQTJCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLFNBQVMsNkJBQTZCLG9CQUFvQixxQkFBcUIscUJBQXFCLEtBQUssbUJBQW1CO0FBQzM2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzJlZjA1ZWZjMjJiYWQyOGRkMDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc2VhcmNoQm94Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi9Vc2Vycy9Vc2Vyc1wiO1xyXG5pbXBvcnQgU2VhcmNoTG9nbyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9sb3VwZS5zdmcnXHJcbmltcG9ydCB7YXhpb3NJbnN0YW5jZX0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoQm94KHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXQubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgICAgIGF4aW9zSW5zdGFuY2UuZ2V0KGBhcGkvdjEvdXNlcnMvP3NlYXJjaD0ke3NlYXJjaElucHV0fWApLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHRzKHJlc3VsdHMuZGF0YSlcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3NlYXJjaElucHV0fSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoSW5wdXQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgICAgICAgPGk+PFNlYXJjaExvZ28vPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxVc2VycyByZXN1bHRzPXtyZXN1bHRzfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCb3g7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaEJveF93cmFwcGVyX180WHc1byB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xcclxcbiAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcXHJcXG4gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQm94X3NlYXJjaF93cmFwcGVyX18xNTJiRiB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC1tb3otYm94LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzMsIDMzLCAzMywgMC4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEJveF9zZWFyY2hfd3JhcHBlcl9fMTUyYkYgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQm94X3NlYXJjaF93cmFwcGVyX18xNTJiRiBpIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMjhweDtcXHJcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCb3hfc2VhcmNoX3dyYXBwZXJfXzE1MmJGIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIGhlaWdodDogMTVweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvU2VhcmNoQm94L3NlYXJjaEJveC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLGlCQUFhOztJQUFiLGFBQWE7SUFDYix5QkFBc0I7SUFBdEIsMEJBQXNCO1NBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsaUJBQWE7SUFBYixhQUFhO0lBQ2Isc0JBQW1CO1NBQW5CLG1CQUFtQjtJQUNuQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXVCO1NBQXZCLHVCQUF1QjtJQUN2QixzQkFBbUI7U0FBbkIsbUJBQW1CO0lBQ25CLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53cmFwcGVyIHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF93cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzMywgMzMsIDMzLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoX3dyYXBwZXIgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoX3dyYXBwZXIgaSB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI4cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hfd3JhcHBlciBzdmcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgICBoZWlnaHQ6IDE1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIndyYXBwZXJcIjogXCJzZWFyY2hCb3hfd3JhcHBlcl9fNFh3NW9cIixcblx0XCJzZWFyY2hfd3JhcHBlclwiOiBcInNlYXJjaEJveF9zZWFyY2hfd3JhcHBlcl9fMTUyYkZcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9