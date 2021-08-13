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
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./settings.module.css */ "./pages/settings/settings.module.css");
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_settings_module_css__WEBPACK_IMPORTED_MODULE_13__);
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
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\pages\\settings\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












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
      _setData = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
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
    var _ref = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var params;
      return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
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
    var _ref2 = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
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
    var _ref3 = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(event) {
      var picture, form_data;
      return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
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
      className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().container), 'glass'].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().img_wrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: userData.avatar !== null ? userData.avatar : '/images/user.png',
            alt: userData.username,
            className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().profile_image), userData.avatar === undefined ? (_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().noProfileImage) : undefined].join(' ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().select_image),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: onImageChange,
              type: "file",
              id: "img",
              name: "img",
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this), errors.avatar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: ["error", (_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().img_error)].join(' '),
          children: ["* ", errors.avatar[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
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
          lineNumber: 86,
          columnNumber: 17
        }, this), errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: ["* ", errors.username[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
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
          lineNumber: 90,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onSaveClick,
          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 58
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SAVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 78
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onLogoutClick,
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_13___default().logoutBTN),
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiZXJyb3JzIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJhdmF0YXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsIm9uU2F2ZUNsaWNrIiwicGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNldExvYWRpbmciLCJ1cGRhdGVVc2VyIiwiaWQiLCJvbkxvZ291dENsaWNrIiwic2V0RnVsbExvYWRpbmciLCJsb2dvdXQiLCJSb3V0ZXIiLCJvbkltYWdlQ2hhbmdlIiwiZXZlbnQiLCJwaWN0dXJlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNsYXNzZXMiLCJqb2luIiwidW5kZWZpbmVkIiwidmFsdWUiLCJXaXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURrQixxQkFFS0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxXQUFWO0FBQUEsR0FBTixDQUZoQjtBQUFBLE1BRVhDLElBRlcsZ0JBRVhBLElBRlc7QUFBQSxNQUVMQyxNQUZLLGdCQUVMQSxNQUZLOztBQUFB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O0FBQUEsZ0JBQWxCLEdBQTRFZ0MsU0FmakYsZUFnQkk7QUFBTyxlQUFLLEVBQUU1QixRQUFRLENBQUNGLE1BQXZCO0FBQStCLGtCQUFRLEVBQUUsa0JBQUNtQixLQUFELEVBQVc7QUFDaERoQix1QkFBVyxpQ0FBS0QsUUFBTDtBQUFlRixvQkFBTSxFQUFFbUIsS0FBSyxDQUFDRSxNQUFOLENBQWFVO0FBQXBDLGVBQVg7QUFDSCxXQUZEO0FBR08scUJBQVcsRUFBRTtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCSixlQW9CSTtBQUFRLGlCQUFPLEVBQUV6QixXQUFqQjtBQUFBLG9CQUErQlYsT0FBTyxnQkFBRyw4REFBQywrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFILGdCQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXBCSixlQXFCSTtBQUFRLGlCQUFPLEVBQUVrQixhQUFqQjtBQUFnQyxtQkFBUyxFQUFFYyx3RUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUE4Qkg7O0dBeEZRMUMsSztVQUNZRyxvRCxFQUNNQyxvRCxFQUNMQSxvRDs7O0tBSGJKLEs7QUEwRlQsK0RBQWUsTUFBQThDLDhEQUFRLENBQUM5QyxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLjJmZGI5MGE2YzBlYTUwNDU0Y2UxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc2V0dGluZ3MubW9kdWxlLmNzcydcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvZ291dCwgdXBkYXRlVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyXCI7XHJcbmltcG9ydCBDaGFuZ2VMb2dvIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2NoYW5nZS5zdmcnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7c2V0RnVsbExvYWRpbmcsIHNldExvYWRpbmd9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnNcIjtcclxuaW1wb3J0IFdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV2l0aEF1dGgnXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHt1c2VyLCBlcnJvcnN9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCB7bG9hZGluZ30gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICAgIGF2YXRhcjogbnVsbFxyXG4gICAgfSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gc2V0RGF0YSgpIHtcclxuICAgICAgICAgICAgc2V0VXNlckRhdGEoe1xyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHVzZXIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VyLmF2YXRhcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXREYXRhKClcclxuICAgIH0sIFt1c2VyXSlcclxuXHJcblxyXG4gICAgY29uc3Qgb25TYXZlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9XHJcbiAgICAgICAgaWYgKHVzZXIudXNlcm5hbWUgIT09IHVzZXJEYXRhLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy51c2VybmFtZSA9IHVzZXJEYXRhLnVzZXJuYW1lXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyLnN0YXR1cyAhPT0gdXNlckRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5zdGF0dXMgPSB1c2VyRGF0YS5zdGF0dXNcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIuYXZhdGFyICE9PSB1c2VyRGF0YS5hdmF0YXIpIHtcclxuICAgICAgICAgICAgcGFyYW1zLmF2YXRhciA9IHVzZXJEYXRhLmF2YXRhclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy51c2VybmFtZSA9IHVzZXJEYXRhLnVzZXJuYW1lXHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHVwZGF0ZVVzZXIodXNlci5pZCwgcGFyYW1zKSlcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25Mb2dvdXRDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyh0cnVlKSlcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaChsb2dvdXQoKSlcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkltYWdlQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGljdHVyZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxyXG4gICAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgYXZhdGFyOiBVUkwuY3JlYXRlT2JqZWN0VVJMKHBpY3R1cmUpfSlcclxuICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgYXdhaXQgZm9ybV9kYXRhLmFwcGVuZCgnYXZhdGFyJywgcGljdHVyZSk7XHJcbiAgICAgICAgYXdhaXQgZm9ybV9kYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VyRGF0YS51c2VybmFtZSk7XHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyLmlkLCBmb3JtX2RhdGEpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8V3JhcHBlcj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5jb250YWluZXIsICdnbGFzcyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXJEYXRhLmF2YXRhciAhPT0gbnVsbCA/IHVzZXJEYXRhLmF2YXRhciA6ICcvaW1hZ2VzL3VzZXIucG5nJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlckRhdGEudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tjbGFzc2VzLnByb2ZpbGVfaW1hZ2UsIHVzZXJEYXRhLmF2YXRhciA9PT0gdW5kZWZpbmVkID8gY2xhc3Nlcy5ub1Byb2ZpbGVJbWFnZSA6IHVuZGVmaW5lZF0uam9pbignICcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VsZWN0X2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkltYWdlQ2hhbmdlfSB0eXBlPVwiZmlsZVwiIGlkPVwiaW1nXCIgbmFtZT1cImltZ1wiIGFjY2VwdD1cImltYWdlLypcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPjxDaGFuZ2VMb2dvLz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuYXZhdGFyID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tcImVycm9yXCIsIGNsYXNzZXMuaW1nX2Vycm9yXS5qb2luKCcgJyl9Pioge2Vycm9ycy5hdmF0YXJbMF19PC9zcGFuPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlckRhdGEudXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIHVzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgfX0gcGxhY2Vob2xkZXI9eydVc2VybmFtZSd9Lz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgPyA8c3BhbiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+KiB7ZXJyb3JzLnVzZXJuYW1lWzBdfTwvc3Bhbj4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJEYXRhLnN0YXR1c30gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgc3RhdHVzOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1N0YXR1cyd9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TYXZlQ2xpY2t9Pntsb2FkaW5nID8gPExvYWRpbmdTcGlubmVyLz4gOiA8c3Bhbj5TQVZFPC9zcGFuPn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dvdXRDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dEJUTn0+TE9HT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9XcmFwcGVyPlxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhBdXRoKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9