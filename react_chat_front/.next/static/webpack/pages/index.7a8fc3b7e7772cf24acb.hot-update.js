self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/SideBox/SideBox.js":
/*!***************************************!*\
  !*** ./components/SideBox/SideBox.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sidebox_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebox.module.css */ "./components/SideBox/sidebox.module.css");
/* harmony import */ var _sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserProfile/UserProfile */ "./components/UserProfile/UserProfile.js");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/svg/loupe.svg */ "./src/assets/svg/loupe.svg");
/* harmony import */ var _src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/svg/messenger.svg */ "./src/assets/svg/messenger.svg");
/* harmony import */ var _src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _Users_Users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Users/Users */ "./components/Users/Users.js");
/* harmony import */ var _SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SearchBox/SearchBox */ "./components/SearchBox/SearchBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\SideBox\\SideBox.js",
    _s = $RefreshSig$();











function SideBox() {
  _s();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      usersData = _useState[0],
      setUsersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE),
      currentTab = _useState2[0],
      setCurrentTab = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var socket = new WebSocket("ws://127.0.0.1:8000/ws/chat/?".concat(user.id));

    socket.onmessage = function (event) {
      setUsersData(JSON.parse(event.data).users);
      socket.close();
    };
  }, [currentTab]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: [(_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper), "glass"].join(" "),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserProfile_UserProfile__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().line)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().tabs),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: function onClick() {
          setCurrentTab(_constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE);
        },
        className: currentTab === _constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE ? (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().active) : undefined,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_messenger_svg__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 87
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 84
        }, this), "Messages"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        onClick: function onClick() {
          setCurrentTab(_constants__WEBPACK_IMPORTED_MODULE_5__.SEARCH);
        },
        className: currentTab === _constants__WEBPACK_IMPORTED_MODULE_5__.SEARCH ? (_sidebox_module_css__WEBPACK_IMPORTED_MODULE_9___default().active) : undefined,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_loupe_svg__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 86
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 83
        }, this), "Search"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), currentTab === _constants__WEBPACK_IMPORTED_MODULE_5__.MESSAGE ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Users_Users__WEBPACK_IMPORTED_MODULE_6__.default, {
      results: usersData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 39
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 70
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

_s(SideBox, "TrkrL4P51fhqqzrmdFFQdHqE0OI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector];
});

_c = SideBox;
/* harmony default export */ __webpack_exports__["default"] = (SideBox);

var _c;

$RefreshReg$(_c, "SideBox");

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
___CSS_LOADER_EXPORT___.push([module.id, ".searchBox_wrapper__4Xw5o {\r\n\r\n    display: -moz-box;\r\n\r\n    display: flex;\r\n    -moz-box-orient: vertical;\r\n    -moz-box-direction: normal;\r\n         flex-direction: column;\r\n    height: inherit;\r\n    overflow: auto;\r\n}\r\n\r\n.searchBox_search_wrapper__152bF {\r\n    padding: 10px;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n\r\n    display: -moz-box;\r\n\r\n    display: flex;\r\n\r\n    -moz-box-align: center;\r\n\r\n         align-items: center;\r\n    border-bottom: 1px solid rgba(33, 33, 33, 0.2);\r\n\r\n}\r\n\r\n.searchBox_search_wrapper__152bF input {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    padding: 5px;\r\n}\r\n\r\n.searchBox_search_wrapper__152bF i {\r\n    width: 30px;\r\n    height: 28px;\r\n    display: -moz-box;\r\n    display: flex;\r\n    -moz-box-pack: center;\r\n         justify-content: center;\r\n    -moz-box-align: center;\r\n         align-items: center;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.searchBox_search_wrapper__152bF svg {\r\n    width: 15px;\r\n    opacity: 0.5;\r\n    height: 15px;\r\n}", "",{"version":3,"sources":["webpack://components/SearchBox/searchBox.module.css"],"names":[],"mappings":"AAAA;;IAEI,iBAAa;;IAAb,aAAa;IACb,yBAAsB;IAAtB,0BAAsB;SAAtB,sBAAsB;IACtB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,0CAA0C;;IAE1C,iBAAa;;IAAb,aAAa;;IAEb,sBAAmB;;SAAnB,mBAAmB;IACnB,8CAA8C;;AAElD;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAa;IAAb,aAAa;IACb,qBAAuB;SAAvB,uBAAuB;IACvB,sBAAmB;SAAnB,mBAAmB;IACnB,eAAe;;AAEnB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,YAAY;AAChB","sourcesContent":[".wrapper {\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: inherit;\r\n    overflow: auto;\r\n}\r\n\r\n.search_wrapper {\r\n    padding: 10px;\r\n    background-color: rgba(255, 255, 255, 0.2);\r\n\r\n    display: flex;\r\n\r\n    align-items: center;\r\n    border-bottom: 1px solid rgba(33, 33, 33, 0.2);\r\n\r\n}\r\n\r\n.search_wrapper input {\r\n    width: 100%;\r\n    border: none;\r\n    outline: none;\r\n    background-color: transparent;\r\n    padding: 5px;\r\n}\r\n\r\n.search_wrapper i {\r\n    width: 30px;\r\n    height: 28px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.search_wrapper svg {\r\n    width: 15px;\r\n    opacity: 0.5;\r\n    height: 15px;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": "searchBox_wrapper__4Xw5o",
	"search_wrapper": "searchBox_search_wrapper__152bF"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlQm94L1NpZGVCb3guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2VhcmNoQm94L3NlYXJjaEJveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIlNpZGVCb3giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwidXNlU3RhdGUiLCJ1c2Vyc0RhdGEiLCJzZXRVc2Vyc0RhdGEiLCJNRVNTQUdFIiwiY3VycmVudFRhYiIsInNldEN1cnJlbnRUYWIiLCJ1c2VFZmZlY3QiLCJzb2NrZXQiLCJXZWJTb2NrZXQiLCJpZCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsInVzZXJzIiwiY2xvc2UiLCJjbGFzc2VzIiwiam9pbiIsImxpbmUiLCJ1bmRlZmluZWQiLCJTRUFSQ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBLHFCQUVBQyx3REFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFdBQVY7QUFBQSxHQUFOLENBRlg7QUFBQSxNQUVSQyxJQUZRLGdCQUVSQSxJQUZROztBQUFBLGtCQUltQkMsK0NBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJUkMsU0FKUTtBQUFBLE1BSUdDLFlBSkg7O0FBQUEsbUJBS3FCRiwrQ0FBUSxDQUFDRywrQ0FBRCxDQUw3QjtBQUFBLE1BS1JDLFVBTFE7QUFBQSxNQUtJQyxhQUxKOztBQU9mQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxNQUFNLEdBQUcsSUFBSUMsU0FBSix3Q0FBOENULElBQUksQ0FBQ1UsRUFBbkQsRUFBZjs7QUFDQUYsVUFBTSxDQUFDRyxTQUFQLEdBQW1CLFVBQVVDLEtBQVYs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LCtCQUErQixvQkFBb0IscUJBQXFCLHNCQUFzQixzQ0FBc0MscUJBQXFCLEtBQUssMkJBQTJCLG9CQUFvQixxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsd0JBQXdCLFNBQVMsNkJBQTZCLG9CQUFvQixxQkFBcUIscUJBQXFCLEtBQUssbUJBQW1CO0FBQ2g5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2E4ZmMzYjdlNzc3MmNmMjRhY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc2lkZWJveC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGVcIjtcclxuaW1wb3J0IFNlYXJjaExvZ28gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvbG91cGUuc3ZnJ1xyXG5pbXBvcnQgTWVzc2FnZUxvZ28gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvbWVzc2VuZ2VyLnN2ZydcclxuaW1wb3J0IHtNRVNTQUdFLCBTRUFSQ0h9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi9Vc2Vycy9Vc2Vyc1wiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi9TZWFyY2hCb3gvU2VhcmNoQm94XCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZnVuY3Rpb24gU2lkZUJveCgpIHtcclxuXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuXHJcbiAgICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShNRVNTQUdFKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8xMjcuMC4wLjE6ODAwMC93cy9jaGF0Lz8ke3VzZXIuaWR9YCwpXHJcbiAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBzZXRVc2Vyc0RhdGEoSlNPTi5wYXJzZShldmVudC5kYXRhKS51c2VycylcclxuICAgICAgICAgICAgc29ja2V0LmNsb3NlKClcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2N1cnJlbnRUYWJdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLndyYXBwZXIsIFwiZ2xhc3NcIl0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICA8VXNlclByb2ZpbGUvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5lfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYnN9PlxyXG4gICAgICAgICAgICAgICAgPHAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRUYWIoTUVTU0FHRSlcclxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17Y3VycmVudFRhYiA9PT0gTUVTU0FHRSA/IGNsYXNzZXMuYWN0aXZlIDogdW5kZWZpbmVkfT48aT48TWVzc2FnZUxvZ28vPjwvaT5NZXNzYWdlczwvcD5cclxuICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGFiKFNFQVJDSClcclxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17Y3VycmVudFRhYiA9PT0gU0VBUkNIID8gY2xhc3Nlcy5hY3RpdmUgOiB1bmRlZmluZWR9PjxpPjxTZWFyY2hMb2dvLz48L2k+U2VhcmNoPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2N1cnJlbnRUYWIgPT09IE1FU1NBR0UgPyA8VXNlcnMgcmVzdWx0cz17dXNlcnNEYXRhfS8+IDogPFNlYXJjaEJveC8+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJveDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoQm94X3dyYXBwZXJfXzRYdzVvIHtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XFxyXFxuICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xcclxcbiAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCb3hfc2VhcmNoX3dyYXBwZXJfXzE1MmJGIHtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzMywgMzMsIDMzLCAwLjIpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoQm94X3NlYXJjaF93cmFwcGVyX18xNTJiRiBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hCb3hfc2VhcmNoX3dyYXBwZXJfXzE1MmJGIGkge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLW1vei1ib3gtcGFjazogY2VudGVyO1xcclxcbiAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAtbW96LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaEJveF9zZWFyY2hfd3JhcHBlcl9fMTUyYkYgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9TZWFyY2hCb3gvc2VhcmNoQm94Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksaUJBQWE7O0lBQWIsYUFBYTtJQUNiLHlCQUFzQjtJQUF0QiwwQkFBc0I7U0FBdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQzs7SUFFMUMsaUJBQWE7O0lBQWIsYUFBYTs7SUFFYixzQkFBbUI7O1NBQW5CLG1CQUFtQjtJQUNuQiw4Q0FBOEM7O0FBRWxEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF1QjtTQUF2Qix1QkFBdUI7SUFDdkIsc0JBQW1CO1NBQW5CLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2hfd3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzMsIDMzLCAzMywgMC4yKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF93cmFwcGVyIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaF93cmFwcGVyIGkge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAyOHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoX3dyYXBwZXIgc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgaGVpZ2h0OiAxNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic2VhcmNoQm94X3dyYXBwZXJfXzRYdzVvXCIsXG5cdFwic2VhcmNoX3dyYXBwZXJcIjogXCJzZWFyY2hCb3hfc2VhcmNoX3dyYXBwZXJfXzE1MmJGXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==