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
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().container), "glass"].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
            lineNumber: 68,
            columnNumber: 21
          }, this), errors.emptyUsername ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Username is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
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
              lineNumber: 73,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              onClick: function onClick() {
                setVisible(!visible);
              },
              children: visible ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_view_svg__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 39
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_hide_svg__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 60
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, this), errors.emptyPassword && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "error",
            children: "Password is empty"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 46
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: loading === true ? (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().inactive) : undefined,
          onClick: onLoginClick,
          children: loading === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 68
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 88
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this), errors.loginError === 401 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: "Login or password is incorrect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 47
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_15___default().links),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Reset Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 38
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
            href: '/register',
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              children: "Sign In"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 46
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4vaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJsb2dpbkVycm9yIiwiZW1wdHlVc2VybmFtZSIsImVtcHR5UGFzc3dvcmQiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJ1c2VFZmZlY3QiLCJzZXRGdWxsTG9hZGluZyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJSb3V0ZXIiLCJvbkxvZ2luQ2xpY2siLCJjaF9lcnJvcnMiLCJyZXBsYWNlQWxsIiwic2V0TG9hZGluZyIsImxvZ2luIiwidGhlbiIsImRhdGEiLCJzZXRVc2VyIiwiZXJyb3IiLCJwcmV2U3RhdGUiLCJzdGF0dXMiLCJjbGFzc2VzIiwiam9pbiIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLEVBQTVCOztBQURrQixxQkFFQUMseURBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxhQUFqQjtBQUFBLEdBQUQsQ0FGWDtBQUFBLE1BRVhDLE9BRlcsZ0JBRVhBLE9BRlc7O0FBQUEsc0JBR0hILHlEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csV0FBVjtBQUFBLEdBQU4sQ0FIUjtBQUFBLE1BR1hDLElBSFcsaUJBR1hBLElBSFc7O0FBQUEsa0JBSWNDLCtDQUFRLENBQUMsRUFBRCxDQUp0QjtBQUFBLE1BSVhDLFFBSlc7QUFBQSxNQUlEQyxXQUpDOztBQUFBLG1CQUtjRiwrQ0FBUSxDQUFDLEVBQUQsQ0FMdEI7QUFBQSxNQUtYRyxRQUxXO0FBQUEsTUFLREMsV0FMQzs7QUFBQSxtQkFNWUosK0NBQVEsQ0FBQyxLQUFELENBTnBCO0FBQUEsTUFNWEssT0FOVztBQUFBLE1BTUZDLFVBTkU7O0FBQUEsbUJBT1VOLCtDQUFRLENBQUM7QUFDakNPLGNBQVUsRUFBRSxDQURxQjtBQUVqQ0MsaUJBQWEsRUFBRSxLQUZrQjtBQUdqQ0MsaUJBQWEsRUFBRTtBQUhrQixHQUFELENBUGxCO0FBQUEsTUFPWEMsTUFQVztBQUFBLE1BT0hDLFNBUEc7O0FBYWxCQyxrREFBUyxDQUFDLFlBQU07QUFDWnBCLFlBQVEsQ0FBQ3FCLDZFQUFjLENBQUMsSUFBRCxDQUFmLENBQVI7O0FBQ0EsUUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVloQixJQUFaLEVBQWtCaUIsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUJ4QixjQUFRLENBQUNxQiw2RUFBYyxDQUFDLEtBQUQsQ0FBZixDQUFSO0FBQ0FJLDhEQUFBLENBQVksR0FBWjtBQUNIOztBQUNEekIsWUFBUSxDQUFDcUIsNkVBQWMsQ0FBQyxLQUFELENBQWYsQ0FBUjtBQUNILEdBUFEsRUFPTixDQUFDZCxJQUFELENBUE0sQ0FBVDs7QUFRQSxNQUFNbUIsWUFBWTtBQUFBLDZRQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNiQyx1QkFEYSxHQUNEO0FBQ1paLDBCQUFVLEVBQUUsQ0FEQTtBQUVaQyw2QkFBYSxFQUFFLEtBRkg7QUFHWkMsNkJBQWEsRUFBRTtBQUhILGVBREM7O0FBTWpCLGtCQUFJUixRQUFRLENBQUNtQixVQUFULENBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLEVBQTZCSixNQUE3QixLQUF3QyxDQUE1QyxFQUErQztBQUMzQ0cseUJBQVMsQ0FBQ1gsYUFBVixHQUEwQixJQUExQjtBQUNIOztBQUNELGtCQUFJTCxRQUFRLENBQUNpQixVQUFULENBQW9CLEdBQXBCLEVBQXlCLEVBQXpCLEVBQTZCSixNQUE3QixLQUF3QyxDQUE1QyxFQUErQztBQUMzQ0cseUJBQVMsQ0FBQ1YsYUFBVixHQUEwQixJQUExQjtBQUNIOztBQUNERSx1QkFBUyxDQUFDUSxTQUFELENBQVQ7O0FBWmlCLG9CQWNidEIsT0FBTyxLQUFLLEtBQVosSUFBcUIsQ0FBQ3NCLFNBQVMsQ0FBQ1YsYUFBaEMsSUFBaUQsQ0FBQ1UsU0FBUyxDQUFDWCxhQWQvQztBQUFBO0FBQUE7QUFBQTs7QUFlYmhCLHNCQUFRLENBQUM2Qix5RUFBVSxDQUFDLElBQUQsQ0FBWCxDQUFSO0FBZmE7QUFBQSxxQkFnQlBDLDJDQUFLLENBQUM7QUFBQ3JCLHdCQUFRLEVBQVJBLFFBQUQ7QUFBV0Usd0JBQVEsRUFBUkE7QUFBWCxlQUFELENBQUwsQ0FBNEJvQixJQUE1QixDQUFpQyxVQUFBQyxJQUFJLEVBQUk7QUFDM0NoQyx3QkFBUSxDQUFDaUMsb0VBQU8sRUFBUixDQUFSO0FBQ0FSLHdFQUFBLENBQVksR0FBWjtBQUNBekIsd0JBQVEsQ0FBQzZCLHlFQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7QUFFSCxlQUxLLFdBS0csVUFBQ0ssS0FBRCxFQUFXO0FBQ2hCZix5QkFBUyxDQUFDLFVBQUNnQixTQUFEO0FBQUEseURBQW9CQSxTQUFwQjtBQUErQnBCLDhCQUFVLEVBQUVtQixLQUFLLENBQUNFO0FBQWpEO0FBQUEsaUJBQUQsQ0FBVDtBQUNBcEMsd0JBQVEsQ0FBQzZCLHlFQUFVLENBQUMsS0FBRCxDQUFYLENBQVI7QUFDSCxlQVJLLENBaEJPOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVpILFlBQVk7QUFBQTtBQUFBO0FBQUEsS0FBbEI7O0FBNEJBLHNCQUFPLDhEQUFDLGdFQUFEO0FBQUEsMkJBQ0g7QUFBSyxlQUFTLEVBQUVXLG1FQUFoQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRSxDQUFDQSxxRUFBRCxFQUFvQixPQUFwQixFQUE2QkMsSUFBN0IsQ0FBa0MsR0FBbEMsQ0FBaEI7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBRUQsa0VBQWhCO0FBQUEsa0NBQ0k7QUFBTyxpQkFBSyxFQUFFNUIsUUFBZDtBQUF3QixvQkFBUSxFQUFFLGtCQUFDOEIsS0FBRCxFQUFXO0FBQ3pDN0IseUJBQVcsQ0FBQzZCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVg7QUFDSCxhQUZEO0FBRUcsdUJBQVcsRUFBRTtBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBSUt2QixNQUFNLENBQUNGLGFBQVAsZ0JBQXVCO0FBQU0scUJBQVMsRUFBRSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBdkIsR0FBNEUwQixTQUpqRixlQUtJO0FBQUsscUJBQVMsRUFBRUwsOEVBQWhCO0FBQUEsb0NBQ0k7QUFBTyxzQkFBUSxFQUFFLGtCQUFDRSxLQUFELEVBQVc7QUFDeEIzQiwyQkFBVyxDQUFDMkIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBWDtBQUNILGVBRkQ7QUFFRyx5QkFBVyxFQUFFLFVBRmhCO0FBRTRCLGtCQUFJLEVBQUU1QixPQUFPLEdBQUcsTUFBSCxHQUFZO0FBRnJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFJSTtBQUFHLHFCQUFPLEVBQUUsbUJBQU07QUFDZEMsMEJBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFDSCxlQUZEO0FBQUEsd0JBRUlBLE9BQU8sZ0JBQUcsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBSCxnQkFBd0IsOERBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZuQztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixFQWFLSyxNQUFNLENBQUNELGFBQVAsaUJBQXdCO0FBQU0scUJBQVMsRUFBRSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFiN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBaUJJO0FBQVEsbUJBQVMsRUFBRVosT0FBTyxLQUFLLElBQVosR0FBbUJnQyxvRUFBbkIsR0FBc0NLLFNBQXpEO0FBQ1EsaUJBQU8sRUFBRWhCLFlBRGpCO0FBQUEsb0JBQ2dDckIsT0FBTyxLQUFLLElBQVosZ0JBQW1CLDhEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQW5CLGdCQUF1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUR2RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWpCSixFQW1CS2EsTUFBTSxDQUFDSCxVQUFQLEtBQXNCLEdBQXRCLGlCQUE2QjtBQUFNLG1CQUFTLEVBQUUsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJsQyxlQW9CSTtBQUFLLG1CQUFTLEVBQUVzQixpRUFBaEI7QUFBQSxrQ0FDSSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUUsR0FBWjtBQUFBLG1DQUFpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBRUksOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFFLFdBQVo7QUFBQSxtQ0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUE4Qkg7O0dBL0VRdkMsSztVQUNZRyxxRCxFQUNDQyxxRCxFQUNIQSxxRDs7O0tBSFZKLEs7QUFpRlQsK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uM2MwZjhmMmI0MjZiYjE4NjJmNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvZ2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFBhc3N3b3JkVmlzaWJsZSBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy92aWV3LnN2ZydcclxuaW1wb3J0IFBhc3N3b3JkSGlkZSBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9oaWRlLnN2ZydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQge2xvZ2lufSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZXRGdWxsTG9hZGluZywgc2V0TG9hZGluZ30gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2ltcGxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtzZXRVc2VyfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbG9naW5FcnJvcjogMCxcclxuICAgICAgICBlbXB0eVVzZXJuYW1lOiBmYWxzZSxcclxuICAgICAgICBlbXB0eVBhc3N3b3JkOiBmYWxzZVxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1c2VyKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyhmYWxzZSkpXHJcbiAgICB9LCBbdXNlcl0pXHJcbiAgICBjb25zdCBvbkxvZ2luQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdmFyIGNoX2Vycm9ycyA9IHtcclxuICAgICAgICAgICAgbG9naW5FcnJvcjogMCxcclxuICAgICAgICAgICAgZW1wdHlVc2VybmFtZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGVtcHR5UGFzc3dvcmQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VybmFtZS5yZXBsYWNlQWxsKCcgJywgJycpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjaF9lcnJvcnMuZW1wdHlVc2VybmFtZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLnJlcGxhY2VBbGwoJyAnLCAnJykubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNoX2Vycm9ycy5lbXB0eVBhc3N3b3JkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRFcnJvcnMoY2hfZXJyb3JzKVxyXG5cclxuICAgICAgICBpZiAobG9hZGluZyA9PT0gZmFsc2UgJiYgIWNoX2Vycm9ycy5lbXB0eVBhc3N3b3JkICYmICFjaF9lcnJvcnMuZW1wdHlVc2VybmFtZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCBsb2dpbih7dXNlcm5hbWUsIHBhc3N3b3JkfSkudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoKSlcclxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG5cclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRFcnJvcnMoKHByZXZTdGF0ZSkgPT4gKHsuLi5wcmV2U3RhdGUsIGxvZ2luRXJyb3I6IGVycm9yLnN0YXR1c30pKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8V3JhcHBlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmNvbnRhaW5lciwgXCJnbGFzc1wiXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgfX0gcGxhY2Vob2xkZXI9e1widXNlcm5hbWVcIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1wdHlVc2VybmFtZSA/IDxzcGFuIGNsYXNzTmFtZT17XCJlcnJvclwifT5Vc2VybmFtZSBpcyBlbXB0eTwvc3Bhbj4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFzc3dvcmRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0gcGxhY2Vob2xkZXI9e1wicGFzc3dvcmRcIn0gdHlwZT17dmlzaWJsZSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZpc2libGUoIXZpc2libGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Pnt2aXNpYmxlID8gPFBhc3N3b3JkVmlzaWJsZS8+IDogPFBhc3N3b3JkSGlkZS8+fTwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtcHR5UGFzc3dvcmQgJiYgPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9PlBhc3N3b3JkIGlzIGVtcHR5PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2xvYWRpbmcgPT09IHRydWUgPyBjbGFzc2VzLmluYWN0aXZlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxvZ2luQ2xpY2t9Pntsb2FkaW5nID09PSB0cnVlID8gPExvYWRpbmdTcGlubmVyLz4gOiA8c3Bhbj5Mb2dpbjwvc3Bhbj59PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmxvZ2luRXJyb3IgPT09IDQwMSAmJiA8c3BhbiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+TG9naW4gb3IgcGFzc3dvcmQgaXMgaW5jb3JyZWN0PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtzfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PjxhPlJlc2V0IFBhc3N3b3JkPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3JlZ2lzdGVyJ30+PGE+U2lnbiBJbjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1dyYXBwZXI+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==