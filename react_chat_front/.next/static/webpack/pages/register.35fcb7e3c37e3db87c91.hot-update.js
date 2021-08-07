self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register/index.js":
/*!*********************************!*\
  !*** ./pages/register/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _register_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register.module.css */ "./pages/register/register.module.css");
/* harmony import */ var _register_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_register_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/assets/svg/view.svg */ "./src/assets/svg/view.svg");
/* harmony import */ var _src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/assets/svg/hide.svg */ "./src/assets/svg/hide.svg");
/* harmony import */ var _src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_PublicRoute__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/PublicRoute */ "./components/PublicRoute.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "F:\\react-chat\\react_chat_front\\pages\\register\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function Index(props) {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      loading = _useSelector.loading;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector2.user;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      visible = _useState3[0],
      setVisible = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    loginError: 0,
    usernameErrors: [],
    passwordErrors: []
  }),
      errors = _useState4[0],
      setErrors = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setFullLoading)(true));

    if (Object.keys(user).length > 0) {
      dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setFullLoading)(false));
      next_router__WEBPACK_IMPORTED_MODULE_13___default().push('/');
    }

    dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setFullLoading)(false));
  }, [user]);

  var onRegisterClick = /*#__PURE__*/function () {
    var _ref = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var ch_errors;
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ch_errors = {
                loginError: 0,
                usernameErrors: [],
                passwordErrors: []
              };

              if (username.replaceAll(' ', '').length === 0) {
                ch_errors.usernameErrors = ["Username is empty"];
              }

              if (password.replaceAll(' ', '').length === 0) {
                ch_errors.passwordErrors = ["Password is empty"];
              }

              setErrors(ch_errors);

              if (!(loading === false && ch_errors.passwordErrors.length === 0 && ch_errors.usernameErrors.length === 0)) {
                _context.next = 8;
                break;
              }

              dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(true));
              _context.next = 8;
              return (0,_api__WEBPACK_IMPORTED_MODULE_12__.register)({
                username: username,
                password: password
              }).then(function (res) {
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(false));
                if (res.status === 201) next_router__WEBPACK_IMPORTED_MODULE_13___default().push('/login');
              })["catch"](function (error) {
                console.log(error.errors);
                setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    usernameErrors: error.errors.username !== undefined ? error.errors.username : [],
                    passwordErrors: error.errors.password !== undefined ? error.errors.password : []
                  });
                });
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(false));
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onRegisterClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_register_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_register_module_css__WEBPACK_IMPORTED_MODULE_15___default().container), "glass"].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_register_module_css__WEBPACK_IMPORTED_MODULE_15___default().inputs),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            value: username,
            onChange: function onChange(event) {
              setUsername(event.target.value);
            },
            placeholder: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 25
          }, this), errors.usernameErrors ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: errors.usernameErrors[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 50
          }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_register_module_css__WEBPACK_IMPORTED_MODULE_15___default().password_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: function onChange(event) {
                setPassword(event.target.value);
              },
              placeholder: "password",
              type: visible ? "text" : "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              onClick: function onClick() {
                setVisible(!visible);
              },
              children: visible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 43
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 25
          }, this), errors.passwordErrors.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: errors.passwordErrors[0]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 60
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: function onClick() {
            onRegisterClick();
          },
          className: loading === true ? (_register_module_css__WEBPACK_IMPORTED_MODULE_15___default().inactive) : undefined,
          children: loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 143
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Register"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 163
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this), errors.loginError === 401 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: "Login or password is incorrect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 51
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_register_module_css__WEBPACK_IMPORTED_MODULE_15___default().links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
            href: '/',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Reset Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 42
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
            href: '/login',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 47
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 9
  }, this);
}

_s(Index, "Er64Xz/saLHj0uSKsVKWYYHsazg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_components_PublicRoute__WEBPACK_IMPORTED_MODULE_14__.default)(Index));

var _c, _c2;

$RefreshReg$(_c, "Index");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJsb2dpbkVycm9yIiwidXNlcm5hbWVFcnJvcnMiLCJwYXNzd29yZEVycm9ycyIsImVycm9ycyIsInNldEVycm9ycyIsInVzZUVmZmVjdCIsInNldEZ1bGxMb2FkaW5nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIlJvdXRlciIsIm9uUmVnaXN0ZXJDbGljayIsImNoX2Vycm9ycyIsInJlcGxhY2VBbGwiLCJzZXRMb2FkaW5nIiwicmVnaXN0ZXIiLCJ0aGVuIiwicmVzIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwicHJldlN0YXRlIiwidW5kZWZpbmVkIiwiY2xhc3NlcyIsImpvaW4iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiUHVibGljUm91dGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUVsQixNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLEVBQTVCOztBQUZrQixxQkFHQUMseURBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxhQUFqQjtBQUFBLEdBQUQsQ0FIWDtBQUFBLE1BR1hDLE9BSFcsZ0JBR1hBLE9BSFc7O0FB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QUFFLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCbEMsZUFtQkk7QUFBSyxtQkFBUyxFQUFFd0Isb0VBQWhCO0FBQUEsa0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFFLEdBQVo7QUFBQSxtQ0FBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRSxRQUFaO0FBQUEsbUNBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztHQXZGUXpDLEs7VUFFWUcscUQsRUFDQ0MscUQsRUFDSEEscUQ7OztLQUpWSixLO0FBeUZULCtEQUFlLE1BQUM4QyxpRUFBVyxDQUFDOUMsS0FBRCxDQUEzQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4zNWZjYjdlM2MzN2UzZGI4N2M5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9yZWdpc3Rlci5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlclwiO1xyXG5pbXBvcnQgUGFzc3dvcmRWaXNpYmxlIGZyb20gXCIuLi8uLi9zcmMvYXNzZXRzL3N2Zy92aWV3LnN2Z1wiO1xyXG5pbXBvcnQgUGFzc3dvcmRIaWRlIGZyb20gXCIuLi8uLi9zcmMvYXNzZXRzL3N2Zy9oaWRlLnN2Z1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2V0RnVsbExvYWRpbmcsIHNldExvYWRpbmd9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnNcIjtcclxuaW1wb3J0IHtyZWdpc3Rlcn0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUHVibGljUm91dGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHVibGljUm91dGVcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCB7bG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNpbXBsZVJlZHVjZXIpXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBsb2dpbkVycm9yOiAwLFxyXG4gICAgICAgIHVzZXJuYW1lRXJyb3JzOiBbXSxcclxuICAgICAgICBwYXNzd29yZEVycm9yczogW11cclxuICAgIH0pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyh0cnVlKSlcclxuICAgICAgICBpZihPYmplY3Qua2V5cyh1c2VyKS5sZW5ndGg+MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyhmYWxzZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuICAgIGNvbnN0IG9uUmVnaXN0ZXJDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgY2hfZXJyb3JzID0ge1xyXG4gICAgICAgICAgICBsb2dpbkVycm9yOiAwLFxyXG4gICAgICAgICAgICB1c2VybmFtZUVycm9yczogW10sXHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyb3JzOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlcm5hbWUucmVwbGFjZUFsbCgnICcsICcnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2hfZXJyb3JzLnVzZXJuYW1lRXJyb3JzID0gW1wiVXNlcm5hbWUgaXMgZW1wdHlcIl1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLnJlcGxhY2VBbGwoJyAnLCAnJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNoX2Vycm9ycy5wYXNzd29yZEVycm9ycyA9IFtcIlBhc3N3b3JkIGlzIGVtcHR5XCJdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9ycyhjaF9lcnJvcnMpXHJcblxyXG4gICAgICAgIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiBjaF9lcnJvcnMucGFzc3dvcmRFcnJvcnMubGVuZ3RoPT09MCAmJiBjaF9lcnJvcnMudXNlcm5hbWVFcnJvcnMubGVuZ3RoPT09MCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCByZWdpc3Rlcih7dXNlcm5hbWUsIHBhc3N3b3JkfSkudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cz09PTIwMSlcclxuICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5lcnJvcnMpXHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoKHByZXZTdGF0ZSkgPT4gKHsuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICB1c2VybmFtZUVycm9yczogZXJyb3IuZXJyb3JzLnVzZXJuYW1lIT09dW5kZWZpbmVkP2Vycm9yLmVycm9ycy51c2VybmFtZTpbXSxcclxuICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3JzOiBlcnJvci5lcnJvcnMucGFzc3dvcmQhPT11bmRlZmluZWQ/ZXJyb3IuZXJyb3JzLnBhc3N3b3JkOltdLFxyXG5cclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcmFwcGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5jb250YWluZXIsIFwiZ2xhc3NcIl0uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gcGxhY2Vob2xkZXI9e1widXNlcm5hbWVcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lRXJyb3JzID8gPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9PntlcnJvcnMudXNlcm5hbWVFcnJvcnNbMF19PC9zcGFuPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFzc3dvcmRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gcGxhY2Vob2xkZXI9e1wicGFzc3dvcmRcIn0gdHlwZT17dmlzaWJsZSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZSghdmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19Pnt2aXNpYmxlID8gPFBhc3N3b3JkVmlzaWJsZS8+IDogPFBhc3N3b3JkSGlkZS8+fTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmRFcnJvcnMubGVuZ3RoPjAgJiYgPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9PntlcnJvcnMucGFzc3dvcmRFcnJvcnNbMF19PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57b25SZWdpc3RlckNsaWNrKCl9fSBjbGFzc05hbWU9e2xvYWRpbmcgPT09IHRydWUgPyBjbGFzc2VzLmluYWN0aXZlIDogdW5kZWZpbmVkfT57bG9hZGluZyA9PT0gdHJ1ZSA/IDxMb2FkaW5nU3Bpbm5lci8+IDogPHNwYW4+UmVnaXN0ZXI8L3NwYW4+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubG9naW5FcnJvciA9PT0gNDAxICYmIDxzcGFuIGNsYXNzTmFtZT17XCJlcnJvclwifT5Mb2dpbiBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3Q8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT48YT5SZXNldCBQYXNzd29yZDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvbG9naW4nfT48YT5Mb2dpbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvV3JhcHBlcj5cclxuKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIFB1YmxpY1JvdXRlKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9