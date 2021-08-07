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
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login.module.css */ "./pages/login/login.module.css");
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_16__);
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
/* harmony import */ var _components_PublicRoute__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/PublicRoute */ "./components/PublicRoute.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "F:\\react-chat\\react_chat_front\\pages\\login\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















function Index(props) {
  _s();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      full_loading = _useSelector.full_loading;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      loading = _useSelector2.loading;

  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector3.user;

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
    var _ref = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var ch_errors;
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
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
                _context.next = 8;
                break;
              }

              dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(true));
              _context.next = 8;
              return (0,_api__WEBPACK_IMPORTED_MODULE_9__.login)({
                username: username,
                password: password
              }).then(function (data) {
                dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_14__.setUser)());
                console.log('hh');
                next_router__WEBPACK_IMPORTED_MODULE_13___default().push('/');
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_11__.setLoading)(false));
              })["catch"](function (error) {
                setErrors(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    loginError: error.status
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

    return function onLoginClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().container), "glass"].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().inputs),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
            value: username,
            onChange: function onChange(event) {
              setUsername(event.target.value);
            },
            placeholder: "username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, this), errors.emptyUsername ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Username is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 45
          }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().password_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: function onChange(event) {
                setPassword(event.target.value);
              },
              placeholder: "password",
              type: visible ? "text" : "password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              onClick: function onClick() {
                setVisible(!visible);
              },
              children: visible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 39
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, this), errors.emptyPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Password is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 46
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: loading === true ? (_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().inactive) : undefined,
          onClick: onLoginClick,
          children: loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 68
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 88
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, this), errors.loginError === 401 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: "Login or password is incorrect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Reset Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 38
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/register',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 13
  }, this);
}

_s(Index, "Upruh2NZPN5LKb3i1pDjWSNEU7U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzaW1wbGVSZWR1Y2VyIiwiZnVsbF9sb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImxvYWRpbmciLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJsb2dpbkVycm9yIiwiZW1wdHlVc2VybmFtZSIsImVtcHR5UGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VFZmZlY3QiLCJzZXRGdWxsTG9hZGluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJSb3V0ZXIiLCJvbkxvZ2luQ2xpY2siLCJjaF9lcnJvcnMiLCJyZXBsYWNlQWxsIiwic2V0TG9hZGluZyIsImxvZ2luIiwidGhlbiIsImRhdGEiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicHJldlN0YXRlIiwic3RhdHVzIiwiY2xhc3NlcyIsImpvaW4iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFBQSxxQkFDS0MseURBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxhQUFWO0FBQUEsR0FBTixDQURoQjtBQUFBLE1BQ1hDLFlBRFcsZ0JBQ1hBLFlBRFc7O0FBRWxCLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsRUFB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O0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUErQkg7O0dBckZRMUMsSztVQUNrQkUscUQsRUFDTksscUQsRUFDQ0wscUQsRUFDSEEscUQ7OztLQUpWRixLO0FBdUZULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmRiZDM2NTFlNTBmM2I4MTQyYjRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlclwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9sb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBQYXNzd29yZFZpc2libGUgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvdmlldy5zdmcnXHJcbmltcG9ydCBQYXNzd29yZEhpZGUgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvaGlkZS5zdmcnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgbG9naW59IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NldEZ1bGxMb2FkaW5nLCBzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3NldFVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBQdWJsaWNSb3V0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1B1YmxpY1JvdXRlJ1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIGNvbnN0IHtmdWxsX2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbG9naW5FcnJvcjogMCxcclxuICAgICAgICBlbXB0eVVzZXJuYW1lOiBmYWxzZSxcclxuICAgICAgICBlbXB0eVBhc3N3b3JkOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyh0cnVlKSlcclxuICAgICAgICBpZihPYmplY3Qua2V5cyh1c2VyKS5sZW5ndGg+MClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyhmYWxzZSkpXHJcbiAgICB9LFt1c2VyXSlcclxuICAgIGNvbnN0IG9uTG9naW5DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgY2hfZXJyb3JzID0ge1xyXG4gICAgICAgICAgICBsb2dpbkVycm9yOiAwLFxyXG4gICAgICAgICAgICBlbXB0eVVzZXJuYW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgZW1wdHlQYXNzd29yZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJuYW1lLnJlcGxhY2VBbGwoJyAnLCAnJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNoX2Vycm9ycy5lbXB0eVVzZXJuYW1lID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocGFzc3dvcmQucmVwbGFjZUFsbCgnICcsICcnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY2hfZXJyb3JzLmVtcHR5UGFzc3dvcmQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9ycyhjaF9lcnJvcnMpXHJcblxyXG4gICAgICAgIGlmIChsb2FkaW5nID09PSBmYWxzZSAmJiAhY2hfZXJyb3JzLmVtcHR5UGFzc3dvcmQgJiYgIWNoX2Vycm9ycy5lbXB0eVVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgICAgIGF3YWl0IGxvZ2luKHt1c2VybmFtZSwgcGFzc3dvcmR9KS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcigpKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hoJylcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoKHByZXZTdGF0ZSkgPT4gKHsuLi5wcmV2U3RhdGUsIGxvZ2luRXJyb3I6IGVycm9yLnN0YXR1c30pKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICA8V3JhcHBlcj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5jb250YWluZXIsIFwiZ2xhc3NcIl0uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19IHBsYWNlaG9sZGVyPXtcInVzZXJuYW1lXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtcHR5VXNlcm5hbWUgPyA8c3BhbiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+VXNlcm5hbWUgaXMgZW1wdHk8L3NwYW4+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhc3N3b3JkX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IHBsYWNlaG9sZGVyPXtcInBhc3N3b3JkXCJ9IHR5cGU9e3Zpc2libGUgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT57dmlzaWJsZSA/IDxQYXNzd29yZFZpc2libGUvPiA6IDxQYXNzd29yZEhpZGUvPn08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbXB0eVBhc3N3b3JkICYmIDxzcGFuIGNsYXNzTmFtZT17XCJlcnJvclwifT5QYXNzd29yZCBpcyBlbXB0eTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtsb2FkaW5nID09PSB0cnVlID8gY2xhc3Nlcy5pbmFjdGl2ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Mb2dpbkNsaWNrfT57bG9hZGluZyA9PT0gdHJ1ZSA/IDxMb2FkaW5nU3Bpbm5lci8+IDogPHNwYW4+TG9naW48L3NwYW4+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5sb2dpbkVycm9yID09PSA0MDEgJiYgPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9PkxvZ2luIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdDwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT48YT5SZXNldCBQYXNzd29yZDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9yZWdpc3Rlcid9PjxhPlNpZ24gSW48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9XcmFwcGVyPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=