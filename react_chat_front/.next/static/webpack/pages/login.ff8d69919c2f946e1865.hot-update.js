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
          lineNumber: 68,
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
            lineNumber: 70,
            columnNumber: 21
          }, this), errors.emptyUsername ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Username is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
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
              lineNumber: 75,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              onClick: function onClick() {
                setVisible(!visible);
              },
              children: visible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 39
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 21
          }, this), errors.emptyPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Password is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 46
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: loading === true ? (_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().inactive) : undefined,
          onClick: onLoginClick,
          children: loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 68
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 88
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this), errors.loginError === 401 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: "Login or password is incorrect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_16___default().links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Reset Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 38
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/register',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJsb2dpbkVycm9yIiwiZW1wdHlVc2VybmFtZSIsImVtcHR5UGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VFZmZlY3QiLCJzZXRGdWxsTG9hZGluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJSb3V0ZXIiLCJvbkxvZ2luQ2xpY2siLCJjaF9lcnJvcnMiLCJyZXBsYWNlQWxsIiwic2V0TG9hZGluZyIsImxvZ2luIiwidGhlbiIsImRhdGEiLCJzZXRVc2VyIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicHJldlN0YXRlIiwic3RhdHVzIiwiY2xhc3NlcyIsImpvaW4iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQyx5REFBVyxFQUE1Qjs7QUFEa0IscUJBRUFDLHlEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsYUFBakI7QUFBQSxHQUFELENBRlg7QUFBQSxNQUVYQyxPQUZXLGdCQUVYQSxPQUZXOztBQUFBLHNCQUdI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QTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQThCSDs7R0FoRlF6QyxLO1VBQ1lHLHFELEVBQ0NDLHFELEVBQ0hBLHFEOzs7S0FIVkosSztBQWtGVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5mZjhkNjk5MTljMmY5NDZlMTg2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXJcIjtcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbG9naW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUGFzc3dvcmRWaXNpYmxlIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL3ZpZXcuc3ZnJ1xyXG5pbXBvcnQgUGFzc3dvcmRIaWRlIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2hpZGUuc3ZnJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7bG9naW59IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NldEZ1bGxMb2FkaW5nLCBzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3NldFVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBQdWJsaWNSb3V0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1B1YmxpY1JvdXRlJ1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbG9naW5FcnJvcjogMCxcclxuICAgICAgICBlbXB0eVVzZXJuYW1lOiBmYWxzZSxcclxuICAgICAgICBlbXB0eVBhc3N3b3JkOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1c2VyKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyhmYWxzZSkpXHJcbiAgICB9LCBbdXNlcl0pXHJcbiAgICBjb25zdCBvbkxvZ2luQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGNoX2Vycm9ycyA9IHtcclxuICAgICAgICAgICAgbG9naW5FcnJvcjogMCxcclxuICAgICAgICAgICAgZW1wdHlVc2VybmFtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGVtcHR5UGFzc3dvcmQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VybmFtZS5yZXBsYWNlQWxsKCcgJywgJycpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjaF9lcnJvcnMuZW1wdHlVc2VybmFtZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLnJlcGxhY2VBbGwoJyAnLCAnJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNoX2Vycm9ycy5lbXB0eVBhc3N3b3JkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFcnJvcnMoY2hfZXJyb3JzKVxyXG5cclxuICAgICAgICBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgIWNoX2Vycm9ycy5lbXB0eVBhc3N3b3JkICYmICFjaF9lcnJvcnMuZW1wdHlVc2VybmFtZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCBsb2dpbih7dXNlcm5hbWUsIHBhc3N3b3JkfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoKSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoaCcpXHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3JzKChwcmV2U3RhdGUpID0+ICh7Li4ucHJldlN0YXRlLCBsb2dpbkVycm9yOiBlcnJvci5zdGF0dXN9KSlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFdyYXBwZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5jb250YWluZXIsIFwiZ2xhc3NcIl0uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIH19IHBsYWNlaG9sZGVyPXtcInVzZXJuYW1lXCJ9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtcHR5VXNlcm5hbWUgPyA8c3BhbiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+VXNlcm5hbWUgaXMgZW1wdHk8L3NwYW4+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhc3N3b3JkX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQYXNzd29yZChldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IHBsYWNlaG9sZGVyPXtcInBhc3N3b3JkXCJ9IHR5cGU9e3Zpc2libGUgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKCF2aXNpYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT57dmlzaWJsZSA/IDxQYXNzd29yZFZpc2libGUvPiA6IDxQYXNzd29yZEhpZGUvPn08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5lbXB0eVBhc3N3b3JkICYmIDxzcGFuIGNsYXNzTmFtZT17XCJlcnJvclwifT5QYXNzd29yZCBpcyBlbXB0eTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtsb2FkaW5nID09PSB0cnVlID8gY2xhc3Nlcy5pbmFjdGl2ZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25Mb2dpbkNsaWNrfT57bG9hZGluZyA9PT0gdHJ1ZSA/IDxMb2FkaW5nU3Bpbm5lci8+IDogPHNwYW4+TG9naW48L3NwYW4+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5sb2dpbkVycm9yID09PSA0MDEgJiYgPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9PkxvZ2luIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdDwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT48YT5SZXNldCBQYXNzd29yZDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9yZWdpc3Rlcid9PjxhPlNpZ24gSW48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9XcmFwcGVyPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=