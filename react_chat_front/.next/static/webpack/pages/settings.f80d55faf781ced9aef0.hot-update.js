self["webpackHotUpdate_N_E"]("pages/settings",{

/***/ "./pages/settings/index.js":
/*!*********************************!*\
  !*** ./pages/settings/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./settings.module.css */ "./pages/settings/settings.module.css");
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_settings_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_userActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions/userActions */ "./store/actions/userActions.js");
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/assets/svg/change.svg */ "./src/assets/svg/change.svg");
/* harmony import */ var _src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/WithAuth */ "./components/WithAuth.js");
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "F:\\react-chat\\react_chat_front\\pages\\settings\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













function Index(props) {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector.user,
      errors = _useSelector.errors;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      loading = _useSelector2.loading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    username: "",
    password: "",
    status: "",
    avatar: null
  }),
      userData = _useState[0],
      setUserData = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function setData() {
      return _setData.apply(this, arguments);
    }

    function _setData() {
      _setData = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setUserData({
                  username: user.username,
                  status: user.status,
                  avatar: user.avatar,
                  password: ""
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _setData.apply(this, arguments);
    }

    setData();
  }, [user]);

  var onSaveClick = /*#__PURE__*/function () {
    var _ref = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var params;
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = {};

              if (user.username !== userData.username) {
                params.username = userData.username;
              }

              if (user.status !== userData.status) {
                params.status = userData.status;
              }

              if (user.avatar !== userData.avatar) {
                params.avatar = userData.avatar;
              }

              if (!(Object.keys(params).length !== 0)) {
                _context2.next = 12;
                break;
              }

              params.username = userData.username;
              _context2.next = 8;
              return dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__.setLoading)(true));

            case 8:
              _context2.next = 10;
              return dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_6__.updateUser)(user.id, params));

            case 10:
              _context2.next = 12;
              return dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__.setLoading)(false));

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSaveClick() {
      return _ref.apply(this, arguments);
    };
  }();

  var onLogoutClick = /*#__PURE__*/function () {
    var _ref2 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__.setFullLoading)(true));

            case 2:
              _context3.next = 4;
              return dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_6__.logout)());

            case 4:
              _context3.next = 6;
              return dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__.setFullLoading)(false));

            case 6:
              next_router__WEBPACK_IMPORTED_MODULE_9___default().push('/login');

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onLogoutClick() {
      return _ref2.apply(this, arguments);
    };
  }();

  var onImageChange = /*#__PURE__*/function () {
    var _ref3 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(event) {
      var picture, form_data;
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              picture = event.target.files[0];
              setUserData(_objectSpread(_objectSpread({}, userData), {}, {
                avatar: URL.createObjectURL(picture)
              }));
              form_data = new FormData();
              _context4.next = 5;
              return form_data.append('avatar', picture);

            case 5:
              _context4.next = 7;
              return form_data.append('username', userData.username);

            case 7:
              _context4.next = 9;
              return dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_6__.updateUser)(user.id, form_data));

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onImageChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_7__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().container), 'glass'].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().img_wrapper),
          children: [userData.avatar !== null ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
            quality: 100,
            alt: userData.username,
            width: 120,
            height: 120,
            className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().profile_image), userData.avatar === null ? (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().noProfileImage) : undefined].join(' '),
            src: userData.avatar !== null ? userData.avatar : '/images/user.png'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 49
          }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().select_image),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: onImageChange,
              type: "file",
              id: "img",
              name: "img",
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), errors.avatar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: ["error", (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().img_error)].join(' '),
          children: ["* ", errors.avatar[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          value: userData.username,
          onChange: function onChange(event) {
            setUserData(_objectSpread(_objectSpread({}, userData), {}, {
              username: event.target.value
            }));
          },
          placeholder: 'Username'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }, this), errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: ["* ", errors.username[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 36
        }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          value: userData.status,
          onChange: function onChange(event) {
            setUserData(_objectSpread(_objectSpread({}, userData), {}, {
              status: event.target.value
            }));
          },
          placeholder: 'Status'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onSaveClick,
          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 58
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SAVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 78
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onLogoutClick,
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().logoutBTN),
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 12
  }, this);
}

_s(Index, "xftBgTPFjGUd0VsyoDDpX9TXrr8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_11__.default)(Index));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiZXJyb3JzIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJhdmF0YXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsIm9uU2F2ZUNsaWNrIiwicGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNldExvYWRpbmciLCJ1cGRhdGVVc2VyIiwiaWQiLCJvbkxvZ291dENsaWNrIiwic2V0RnVsbExvYWRpbmciLCJsb2dvdXQiLCJSb3V0ZXIiLCJvbkltYWdlQ2hhbmdlIiwiZXZlbnQiLCJwaWN0dXJlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNsYXNzZXMiLCJqb2luIiwidW5kZWZpbmVkIiwidmFsdWUiLCJXaXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1Qjs7QUFEa0IscUJBRUtDLHdEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsV0FBVjtBQUFBLEdBQU4sQ0FGaEI7QUFBQSxNQUVYQyxJQUZXLGdCQUVYQSxJQUZXO0FBQUEsTUFFTEMsTUFGSyxnQkFFTEEsTUFG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QUFBO0FBQUE7QUFBQSxnQkFkSixFQWlCS3JDLE1BQU0sQ0FBQ0ksUUFBUCxnQkFBa0I7QUFBTSxtQkFBUyxFQUFFLE9BQWpCO0FBQUEsMkJBQTZCSixNQUFNLENBQUNJLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFsQixHQUE0RWdDLFNBakJqRixlQWtCSTtBQUFPLGVBQUssRUFBRTVCLFFBQVEsQ0FBQ0YsTUFBdkI7QUFBK0Isa0JBQVEsRUFBRSxrQkFBQ21CLEtBQUQsRUFBVztBQUNoRGhCLHVCQUFXLGlDQUFLRCxRQUFMO0FBQWVGLG9CQUFNLEVBQUVtQixLQUFLLENBQUNFLE1BQU4sQ0FBYVU7QUFBcEMsZUFBWDtBQUNILFdBRkQ7QUFHTyxxQkFBVyxFQUFFO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKLGVBc0JJO0FBQVEsaUJBQU8sRUFBRXpCLFdBQWpCO0FBQUEsb0JBQStCVixPQUFPLGdCQUFHLDhEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsZ0JBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJKLGVBdUJJO0FBQVEsaUJBQU8sRUFBRWtCLGFBQWpCO0FBQWdDLG1CQUFTLEVBQUVjLHdFQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZHO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQWdDSDs7R0F6RlExQyxLO1VBQ1lHLG9ELEVBQ01DLG9ELEVBQ0xBLG9EOzs7S0FIYkosSztBQTJGVCwrREFBZSxNQUFBOEMsOERBQVEsQ0FBQzlDLEtBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuZjgwZDU1ZmFmNzgxY2VkOWFlZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zZXR0aW5ncy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9nb3V0LCB1cGRhdGVVc2VyfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXJcIjtcclxuaW1wb3J0IENoYW5nZUxvZ28gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvY2hhbmdlLnN2ZydcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtzZXRGdWxsTG9hZGluZywgc2V0TG9hZGluZ30gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2ltcGxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgV2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaXRoQXV0aCdcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3Qge3VzZXIsIGVycm9yc30gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHtsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNpbXBsZVJlZHVjZXIpXHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICAgICAgYXZhdGFyOiBudWxsXHJcbiAgICB9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBzZXREYXRhKCkge1xyXG4gICAgICAgICAgICBzZXRVc2VyRGF0YSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdXNlci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldERhdGEoKVxyXG4gICAgfSwgW3VzZXJdKVxyXG5cclxuXHJcbiAgICBjb25zdCBvblNhdmVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgcGFyYW1zID0ge31cclxuICAgICAgICBpZiAodXNlci51c2VybmFtZSAhPT0gdXNlckRhdGEudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIuc3RhdHVzICE9PSB1c2VyRGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnN0YXR1cyA9IHVzZXJEYXRhLnN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5hdmF0YXIgIT09IHVzZXJEYXRhLmF2YXRhcikge1xyXG4gICAgICAgICAgICBwYXJhbXMuYXZhdGFyID0gdXNlckRhdGEuYXZhdGFyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyLmlkLCBwYXJhbXMpKVxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvZ291dENsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW1hZ2VDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwaWN0dXJlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCBhdmF0YXI6IFVSTC5jcmVhdGVPYmplY3RVUkwocGljdHVyZSl9KVxyXG4gICAgICAgIGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBhd2FpdCBmb3JtX2RhdGEuYXBwZW5kKCdhdmF0YXInLCBwaWN0dXJlKTtcclxuICAgICAgICBhd2FpdCBmb3JtX2RhdGEuYXBwZW5kKCd1c2VybmFtZScsIHVzZXJEYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIuaWQsIGZvcm1fZGF0YSkpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPFdyYXBwZXI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMuY29udGFpbmVyLCAnZ2xhc3MnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyRGF0YS5hdmF0YXIhPT1udWxsID8gICA8SW1hZ2UgIHF1YWxpdHk9ezEwMH0gYWx0PXt1c2VyRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY2xhc3Nlcy5wcm9maWxlX2ltYWdlLCB1c2VyRGF0YS5hdmF0YXIgPT09IG51bGwgPyBjbGFzc2VzLm5vUHJvZmlsZUltYWdlIDogdW5kZWZpbmVkXS5qb2luKCcgJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3VzZXJEYXRhLmF2YXRhciAhPT0gbnVsbCA/IHVzZXJEYXRhLmF2YXRhciA6ICcvaW1hZ2VzL3VzZXIucG5nJ30vPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3RfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uSW1hZ2VDaGFuZ2V9IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbWdcIiBuYW1lPVwiaW1nXCIgYWNjZXB0PVwiaW1hZ2UvKlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+PENoYW5nZUxvZ28vPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5hdmF0YXIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W1wiZXJyb3JcIiwgY2xhc3Nlcy5pbWdfZXJyb3JdLmpvaW4oJyAnKX0+KiB7ZXJyb3JzLmF2YXRhclswXX08L3NwYW4+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VyRGF0YS51c2VybmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICB9fSBwbGFjZWhvbGRlcj17J1VzZXJuYW1lJ30vPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSA/IDxzcGFuIGNsYXNzTmFtZT17XCJlcnJvclwifT4qIHtlcnJvcnMudXNlcm5hbWVbMF19PC9zcGFuPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlckRhdGEuc3RhdHVzfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCBzdGF0dXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU3RhdHVzJ30vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblNhdmVDbGlja30+e2xvYWRpbmcgPyA8TG9hZGluZ1NwaW5uZXIvPiA6IDxzcGFuPlNBVkU8L3NwYW4+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ291dENsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0QlROfT5MT0dPVVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1dyYXBwZXI+XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aEF1dGgoSW5kZXgpOyJdLCJzb3VyY2VSb290IjoiIn0=