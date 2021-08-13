self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login/index.js":
/*!******************************!*\
  !*** ./pages/login/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login.module.css */ "./pages/login/login.module.css");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/assets/svg/view.svg */ "./src/assets/svg/view.svg");
/* harmony import */ var _src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/assets/svg/hide.svg */ "./src/assets/svg/hide.svg");
/* harmony import */ var _src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_actions_userActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/userActions */ "./store/actions/userActions.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\pages\\login\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














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
    emptyUsername: false,
    emptyPassword: false
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

  var onLoginClick = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var ch_errors;
      return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ch_errors = {
                loginError: 0,
                emptyUsername: false,
                emptyPassword: false
              };

              if (username.replaceAll(' ', '').length === 0) {
                ch_errors.emptyUsername = true;
              }

              if (password.replaceAll(' ', '').length === 0) {
                ch_errors.emptyPassword = true;
              }

              setErrors(ch_errors);

              if (!(loading === false && !ch_errors.emptyPassword && !ch_errors.emptyUsername)) {
                _context2.next = 8;
                break;
              }

              dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(true));
              _context2.next = 8;
              return (0,_api__WEBPACK_IMPORTED_MODULE_9__.login)({
                username: username,
                password: password
              }).then( /*#__PURE__*/function () {
                var _ref2 = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(data) {
                  return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_14__.setUser)());

                        case 2:
                          _context.next = 4;
                          return next_router__WEBPACK_IMPORTED_MODULE_13___default().push('/');

                        case 4:
                          _context.next = 6;
                          return dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(false));

                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }())["catch"](function (error) {
                setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    loginError: error.status
                  });
                });
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(false));
              });

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onLoginClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().container), "glass"].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().inputs),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            value: username,
            onChange: function onChange(event) {
              setUsername(event.target.value);
            },
            placeholder: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 21
          }, this), errors.emptyUsername ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Username is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 45
          }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().password_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: function onChange(event) {
                setPassword(event.target.value);
              },
              placeholder: "password",
              type: visible ? "text" : "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              onClick: function onClick() {
                setVisible(!visible);
              },
              children: visible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 39
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, this), errors.emptyPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Password is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 46
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: loading === true ? (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().inactive) : undefined,
          onClick: onLoginClick,
          children: loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 68
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 88
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this), errors.loginError === 401 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: "Login or password is incorrect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Reset Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 38
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/register',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 12
  }, this);
}

_s(Index, "U/OPgcstQZdZcAS2zVpZJxBKq/s=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJsb2dpbkVycm9yIiwiZW1wdHlVc2VybmFtZSIsImVtcHR5UGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VFZmZlY3QiLCJzZXRGdWxsTG9hZGluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJSb3V0ZXIiLCJvbkxvZ2luQ2xpY2siLCJjaF9lcnJvcnMiLCJyZXBsYWNlQWxsIiwic2V0TG9hZGluZyIsImxvZ2luIiwidGhlbiIsImRhdGEiLCJzZXRVc2VyIiwiZXJyb3IiLCJwcmV2U3RhdGUiLCJzdGF0dXMiLCJjbGFzc2VzIiwiam9pbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLEVBQTVCOztBQURrQixxQkFFQUMseURBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxhQUFqQjtBQUFBLEdBQUQsQ0FGWDtBQUFBLE1BRVhDLE9BRlcsZ0JBRVhBLE9BRlc7O0FBQUEsc0JBSUhILHlEQUFXLENBQUMsVUFBQUMsS0FB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QUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBOEJIOztHQWxGUXZDLEs7VUFDWUcscUQsRUFDQ0MscUQsRUFFSEEscUQ7OztLQUpWSixLO0FBb0ZULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmZkOTE4Y2QyM2UyMGExMTkwNWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlclwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBQYXNzd29yZFZpc2libGUgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvdmlldy5zdmcnXHJcbmltcG9ydCBQYXNzd29yZEhpZGUgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvaGlkZS5zdmcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHtsb2dpbn0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2V0RnVsbExvYWRpbmcsIHNldExvYWRpbmd9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnNcIjtcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7c2V0VXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHtsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBsb2dpbkVycm9yOiAwLFxyXG4gICAgICAgIGVtcHR5VXNlcm5hbWU6IGZhbHNlLFxyXG4gICAgICAgIGVtcHR5UGFzc3dvcmQ6IGZhbHNlXHJcbiAgICB9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0RnVsbExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHVzZXIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0RnVsbExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgIH0sIFt1c2VyXSlcclxuICAgIGNvbnN0IG9uTG9naW5DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgY2hfZXJyb3JzID0ge1xyXG4gICAgICAgICAgICBsb2dpbkVycm9yOiAwLFxyXG4gICAgICAgICAgICBlbXB0eVVzZXJuYW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgZW1wdHlQYXNzd29yZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lLnJlcGxhY2VBbGwoJyAnLCAnJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNoX2Vycm9ycy5lbXB0eVVzZXJuYW1lID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFzc3dvcmQucmVwbGFjZUFsbCgnICcsICcnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2hfZXJyb3JzLmVtcHR5UGFzc3dvcmQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9ycyhjaF9lcnJvcnMpXHJcblxyXG4gICAgICAgIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiAhY2hfZXJyb3JzLmVtcHR5UGFzc3dvcmQgJiYgIWNoX2Vycm9ycy5lbXB0eVVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgICAgIGF3YWl0IGxvZ2luKHt1c2VybmFtZSwgcGFzc3dvcmR9KS50aGVuKGFzeW5jIGRhdGEgPT4gIHtcclxuXHJcbiAgICAgICAgICAgICAgYXdhaXQgIGRpc3BhdGNoKHNldFVzZXIoKSlcclxuICAgICAgICAgICAgICBhd2FpdCAgUm91dGVyLnB1c2goJy8nKVxyXG5cclxuICAgICAgICAgICAgICBhd2FpdCAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEVycm9ycygocHJldlN0YXRlKSA9PiAoey4uLnByZXZTdGF0ZSwgbG9naW5FcnJvcjogZXJyb3Iuc3RhdHVzfSkpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxXcmFwcGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMuY29udGFpbmVyLCBcImdsYXNzXCJdLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICB9fSBwbGFjZWhvbGRlcj17XCJ1c2VybmFtZVwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbXB0eVVzZXJuYW1lID8gPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9PlVzZXJuYW1lIGlzIGVtcHR5PC9zcGFuPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXNzd29yZF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0UGFzc3dvcmQoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fSBwbGFjZWhvbGRlcj17XCJwYXNzd29yZFwifSB0eXBlPXt2aXNpYmxlID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmlzaWJsZSghdmlzaWJsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+e3Zpc2libGUgPyA8UGFzc3dvcmRWaXNpYmxlLz4gOiA8UGFzc3dvcmRIaWRlLz59PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1wdHlQYXNzd29yZCAmJiA8c3BhbiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+UGFzc3dvcmQgaXMgZW1wdHk8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17bG9hZGluZyA9PT0gdHJ1ZSA/IGNsYXNzZXMuaW5hY3RpdmUgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9naW5DbGlja30+e2xvYWRpbmcgPT09IHRydWUgPyA8TG9hZGluZ1NwaW5uZXIvPiA6IDxzcGFuPkxvZ2luPC9zcGFuPn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMubG9naW5FcnJvciA9PT0gNDAxICYmIDxzcGFuIGNsYXNzTmFtZT17XCJlcnJvclwifT5Mb2dpbiBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3Q8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+PGE+UmVzZXQgUGFzc3dvcmQ8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcmVnaXN0ZXInfT48YT5TaWduIEluPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvV3JhcHBlcj5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9