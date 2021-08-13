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


var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\SideBox\\SideBox.js",
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
      setUsersData(JSON.parse(event.data).users.reverse());
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlQm94L1NpZGVCb3guanMiXSwibmFtZXMiOlsiU2lkZUJveCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJ1c2VTdGF0ZSIsInVzZXJzRGF0YSIsInNldFVzZXJzRGF0YSIsIk1FU1NBR0UiLCJjdXJyZW50VGFiIiwic2V0Q3VycmVudFRhYiIsInVzZUVmZmVjdCIsInNvY2tldCIsIldlYlNvY2tldCIsImlkIiwib25tZXNzYWdlIiwiZXZlbnQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwidXNlcnMiLCJyZXZlcnNlIiwiY2xvc2UiLCJjbGFzc2VzIiwiam9pbiIsImxpbmUiLCJ1bmRlZmluZWQiLCJTRUFSQ0giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBLHFCQUVBQyx3REFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFdBQVY7QUFBQSxHQUFOLENBRlg7QUFBQSxNQUVSQyxJQUZRLGdCQUVSQSxJQUZROztBQUFBLGtCQUltQkMsK0NBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJUkMsU0FKUTtBQUFBLE1BSUdDLFlBSkg7O0FBQUEsbUJBS3FCRiwrQ0FBUSxDQUFDRywrQ0FBRCxDQUw3QjtBQUFBLE1BS1JDLFVBTFE7QUFBQSxNQUtJQyxhQUxKOztBQU9mQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxNQUFNLEdBQUcsSUFBSUMsU0FBSix3Q0FBOENULElBQUksQ0FBQ1UsRUFBbkQsRUFBZjs7QUFDQUYsVUFBTSxDQUFDRyxTQUFQLEdBQW1CLFVBQVVDLEtBQVYsRUFBaUI7QUFDaENULGtCQUFZLENBQUNVLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixLQUFLLENBQUNHLElBQWpCLEVBQXVCQyxLQUF2QixDQUE2QkMsT0FBN0IsRUFBRCxDQUFaO0FBQ0FULFlBQU0sQ0FBQ1UsS0FBUDtBQUNILEtBSEQ7QUFJSCxHQU5RLEVBTU4sQ0FBQ2IsVUFBRCxDQU5NLENBQVQ7QUFRQSxzQkFDSTtBQUFLLGFBQVMsRUFBRSxDQUFDYyxvRUFBRCxFQUFrQixPQUFsQixFQUEyQkMsSUFBM0IsQ0FBZ0MsR0FBaEMsQ0FBaEI7QUFBQSw0QkFDSSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFLLGVBQVMsRUFBRUQsaUVBQVlFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQUdJO0FBQUssZUFBUyxFQUFFRixpRUFBaEI7QUFBQSw4QkFDSTtBQUFHLGVBQU8sRUFBRSxtQkFBTTtBQUNkYix1QkFBYSxDQUFDRiwrQ0FBRCxDQUFiO0FBQ0gsU0FGRDtBQUVHLGlCQUFTLEVBQUVDLFVBQVUsS0FBS0QsK0NBQWYsR0FBeUJlLG1FQUF6QixHQUEwQ0csU0FGeEQ7QUFBQSxnQ0FFbUU7QUFBQSxpQ0FBRyw4REFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFHLGVBQU8sRUFBRSxtQkFBTTtBQUNkaEIsdUJBQWEsQ0FBQ2lCLDhDQUFELENBQWI7QUFDSCxTQUZEO0FBRUcsaUJBQVMsRUFBRWxCLFVBQVUsS0FBS2tCLDhDQUFmLEdBQXdCSixtRUFBeEIsR0FBeUNHLFNBRnZEO0FBQUEsZ0NBRWtFO0FBQUEsaUNBQUcsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRmxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBV0tqQixVQUFVLEtBQUtELCtDQUFmLGdCQUF5Qiw4REFBQyxpREFBRDtBQUFPLGFBQU8sRUFBRUY7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF6QixnQkFBd0QsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVg3RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztHQTlCUU4sTztVQUVVQyxvRDs7O0tBRlZELE87QUFnQ1QsK0RBQWVBLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDIyZDdjZTI2Yjk5ZjE2NTY2NDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vc2lkZWJveC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBVc2VyUHJvZmlsZSBmcm9tIFwiLi4vVXNlclByb2ZpbGUvVXNlclByb2ZpbGVcIjtcclxuaW1wb3J0IFNlYXJjaExvZ28gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvbG91cGUuc3ZnJ1xyXG5pbXBvcnQgTWVzc2FnZUxvZ28gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvbWVzc2VuZ2VyLnN2ZydcclxuaW1wb3J0IHtNRVNTQUdFLCBTRUFSQ0h9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IFVzZXJzIGZyb20gXCIuLi9Vc2Vycy9Vc2Vyc1wiO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gXCIuLi9TZWFyY2hCb3gvU2VhcmNoQm94XCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZnVuY3Rpb24gU2lkZUJveCgpIHtcclxuXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuXHJcbiAgICBjb25zdCBbdXNlcnNEYXRhLCBzZXRVc2Vyc0RhdGFdID0gdXNlU3RhdGUoe30pXHJcbiAgICBjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZShNRVNTQUdFKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ja2V0ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8xMjcuMC4wLjE6ODAwMC93cy9jaGF0Lz8ke3VzZXIuaWR9YCwpXHJcbiAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBzZXRVc2Vyc0RhdGEoSlNPTi5wYXJzZShldmVudC5kYXRhKS51c2Vycy5yZXZlcnNlKCkpXHJcbiAgICAgICAgICAgIHNvY2tldC5jbG9zZSgpXHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtjdXJyZW50VGFiXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy53cmFwcGVyLCBcImdsYXNzXCJdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgPFVzZXJQcm9maWxlLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGluZX0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJzfT5cclxuICAgICAgICAgICAgICAgIDxwIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VGFiKE1FU1NBR0UpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IE1FU1NBR0UgPyBjbGFzc2VzLmFjdGl2ZSA6IHVuZGVmaW5lZH0+PGk+PE1lc3NhZ2VMb2dvLz48L2k+TWVzc2FnZXM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFRhYihTRUFSQ0gpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2N1cnJlbnRUYWIgPT09IFNFQVJDSCA/IGNsYXNzZXMuYWN0aXZlIDogdW5kZWZpbmVkfT48aT48U2VhcmNoTG9nby8+PC9pPlNlYXJjaDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjdXJyZW50VGFiID09PSBNRVNTQUdFID8gPFVzZXJzIHJlc3VsdHM9e3VzZXJzRGF0YX0vPiA6IDxTZWFyY2hCb3gvPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==