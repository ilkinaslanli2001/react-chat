self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/WithAuth.js":
/*!********************************!*\
  !*** ./components/WithAuth.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _FullLoading_Loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FullLoading/Loading */ "./components/FullLoading/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);








var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\WithAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var withAuth = function withAuth() {
  var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var AuthenticatedRoute = /*#__PURE__*/function (_React$Component) {
    (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(AuthenticatedRoute, _React$Component);

    var _super = _createSuper(AuthenticatedRoute);

    function AuthenticatedRoute() {
      var _this;

      (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, AuthenticatedRoute);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), "state", {
        loading: true
      });

      return _this;
    }

    (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(AuthenticatedRoute, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isLoggedIn) {
          this.setState({
            loading: false
          });
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_11___default().push("/login");
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (this.state.loading) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FullLoading_Loading__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 24
          }, this);
        }

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, this.props), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 20
        }, this);
      }
    }]);

    return AuthenticatedRoute;
  }((react__WEBPACK_IMPORTED_MODULE_8___default().Component));

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.connect)(function (state) {
    return {
      isLoggedIn: Object.keys(state.userReducer.user).length > 0
    };
  })(AuthenticatedRoute);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaXRoQXV0aC5qcyJdLCJuYW1lcyI6WyJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJBdXRoZW50aWNhdGVkUm91dGUiLCJsb2FkaW5nIiwicHJvcHMiLCJpc0xvZ2dlZEluIiwic2V0U3RhdGUiLCJSb3V0ZXIiLCJzdGF0ZSIsIlJlYWN0IiwiY29ubmVjdCIsIk9iamVjdCIsImtleXMiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQW9DO0FBQUEsTUFBbkNDLFNBQW1DLHVFQUF2QixJQUF1QjtBQUFBLE1BQWpCQyxPQUFpQix1RUFBUCxFQUFPOztBQUFBLE1BQzNDQyxrQkFEMkM7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQSx3UkFFckM7QUFDSkMsZUFBTyxFQUFFO0FBREwsT0FGcUM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMENBTXpCO0FBQ2hCLFlBQUksS0FBS0MsS0FBTCxDQUFXQyxVQUFmLEVBQTJCO0FBQ3ZCLGVBQUtDLFFBQUwsQ0FBYztBQUFDSCxtQkFBTyxFQUFFO0FBQVYsV0FBZDtBQUNILFNBRkQsTUFFTztBQUNISSxrRUFBQSxDQUFZLFFBQVo7QUFDSDtBQUNKO0FBWjRDO0FBQUE7QUFBQSwrQkFjcEM7QUFHTCxZQUFJLEtBQUtDLEtBQUwsQ0FBV0wsT0FBZixFQUF3QjtBQUNwQiw4QkFBTyw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ0g7O0FBRUQsNEJBQU8sOERBQUMsU0FBRCxvQkFBZSxLQUFLQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0g7QUF0QjRDOztBQUFBO0FBQUEsSUFDaEJLLHdEQURnQjs7QUF5QmpELFNBQU9DLG9EQUFPLENBQUMsVUFBQ0YsS0FBRDtBQUFBLFdBQ1g7QUFDSUgsZ0JBQVUsRUFBRU0sTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsSUFBOUIsRUFBb0NDLE1BQXBDLEdBQTZDO0FBRDdELEtBRFc7QUFBQSxHQUFELENBQVAsQ0FHQ2Isa0JBSEQsQ0FBUDtBQUlILENBN0JEOztBQStCQSwrREFBZUgsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNmUxMTk2N2UyNjI0MzVkMDhkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9GdWxsTG9hZGluZy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCB3aXRoQXV0aCA9IChDb21wb25lbnQgPSBudWxsLCBvcHRpb25zID0ge30pID0+IHtcclxuICAgIGNsYXNzIEF1dGhlbnRpY2F0ZWRSb3V0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICAgICAgc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyKCkge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8TG9hZGluZy8+O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb25uZWN0KChzdGF0ZSkgPT4gKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaXNMb2dnZWRJbjogT2JqZWN0LmtleXMoc3RhdGUudXNlclJlZHVjZXIudXNlcikubGVuZ3RoID4gMFxyXG4gICAgICAgIH0pKShBdXRoZW50aWNhdGVkUm91dGUpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=