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
    avatar: undefined
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

  console.log(userData);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_7__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().container), 'glass'].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().img_wrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
            quality: 100,
            src: userData.avatar !== undefined ? userData.avatar : '/images/user.png',
            alt: userData.username,
            width: 120,
            height: 120,
            className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().profile_image), userData.avatar === undefined ? (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().noProfileImage) : undefined].join(' ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().select_image),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: onImageChange,
              type: "file",
              id: "img",
              name: "img",
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this), errors.avatar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: ["error", (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().img_error)].join(' '),
          children: ["* ", errors.avatar[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
          lineNumber: 88,
          columnNumber: 17
        }, this), errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: ["* ", errors.username[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
          lineNumber: 92,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onSaveClick,
          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 58
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SAVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 78
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onLogoutClick,
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_14___default().logoutBTN),
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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

_s(Index, "nGbZrAIeKL7l09CVW14D2F/dDFA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiZXJyb3JzIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJhdmF0YXIiLCJ1bmRlZmluZWQiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsIm9uU2F2ZUNsaWNrIiwicGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNldExvYWRpbmciLCJ1cGRhdGVVc2VyIiwiaWQiLCJvbkxvZ291dENsaWNrIiwic2V0RnVsbExvYWRpbmciLCJsb2dvdXQiLCJSb3V0ZXIiLCJvbkltYWdlQ2hhbmdlIiwiZXZlbnQiLCJwaWN0dXJlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiam9pbiIsInZhbHVlIiwiV2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRGtCLHFCQUVLQyx3REFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFdBQVY7QUFBQSxHQUFOLENBRmhCO0FBQUEsTUFFWEMsSUFGVyxnQkFFWEEsSUFGVztBQUFBLE1BRUxD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QUE7QUFBQTtBQUFBLGdCQWRKLEVBaUJLdkMsTUFBTSxDQUFDSSxRQUFQLGdCQUFrQjtBQUFNLG1CQUFTLEVBQUUsT0FBakI7QUFBQSwyQkFBNkJKLE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQixDQUFoQixDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQWxCLEdBQTRFSSxTQWpCakYsZUFrQkk7QUFBTyxlQUFLLEVBQUVDLFFBQVEsQ0FBQ0gsTUFBdkI7QUFBK0Isa0JBQVEsRUFBRSxrQkFBQ29CLEtBQUQsRUFBVztBQUNoRGhCLHVCQUFXLGlDQUFLRCxRQUFMO0FBQWVILG9CQUFNLEVBQUVvQixLQUFLLENBQUNFLE1BQU4sQ0FBYVc7QUFBcEMsZUFBWDtBQUNILFdBRkQ7QUFHTyxxQkFBVyxFQUFFO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKLGVBc0JJO0FBQVEsaUJBQU8sRUFBRTFCLFdBQWpCO0FBQUEsb0JBQStCWCxPQUFPLGdCQUFHLDhEQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUgsZ0JBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJKLGVBdUJJO0FBQVEsaUJBQU8sRUFBRW1CLGFBQWpCO0FBQWdDLG1CQUFTLEVBQUVnQix3RUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFnQ0g7O0dBMUZRN0MsSztVQUNZRyxvRCxFQUNNQyxvRCxFQUNMQSxvRDs7O0tBSGJKLEs7QUE0RlQsK0RBQWUsTUFBQWdELDhEQUFRLENBQUNoRCxLQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLjJkNzg2YzgzYjY4MzM0NGQ0MDZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vc2V0dGluZ3MubW9kdWxlLmNzcydcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2xvZ291dCwgdXBkYXRlVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnNcIjtcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyXCI7XHJcbmltcG9ydCBDaGFuZ2VMb2dvIGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2NoYW5nZS5zdmcnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7c2V0RnVsbExvYWRpbmcsIHNldExvYWRpbmd9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnNcIjtcclxuaW1wb3J0IFdpdGhBdXRoIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvV2l0aEF1dGgnXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IHt1c2VyLCBlcnJvcnN9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCB7bG9hZGluZ30gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICAgIGF2YXRhcjogdW5kZWZpbmVkXHJcbiAgICB9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBzZXREYXRhKCkge1xyXG4gICAgICAgICAgICBzZXRVc2VyRGF0YSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdXNlci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldERhdGEoKVxyXG4gICAgfSwgW3VzZXJdKVxyXG5cclxuXHJcbiAgICBjb25zdCBvblNhdmVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgcGFyYW1zID0ge31cclxuICAgICAgICBpZiAodXNlci51c2VybmFtZSAhPT0gdXNlckRhdGEudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIuc3RhdHVzICE9PSB1c2VyRGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnN0YXR1cyA9IHVzZXJEYXRhLnN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5hdmF0YXIgIT09IHVzZXJEYXRhLmF2YXRhcikge1xyXG4gICAgICAgICAgICBwYXJhbXMuYXZhdGFyID0gdXNlckRhdGEuYXZhdGFyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyLmlkLCBwYXJhbXMpKVxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvZ291dENsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW1hZ2VDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwaWN0dXJlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCBhdmF0YXI6IFVSTC5jcmVhdGVPYmplY3RVUkwocGljdHVyZSl9KVxyXG4gICAgICAgIGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBhd2FpdCBmb3JtX2RhdGEuYXBwZW5kKCdhdmF0YXInLCBwaWN0dXJlKTtcclxuICAgICAgICBhd2FpdCBmb3JtX2RhdGEuYXBwZW5kKCd1c2VybmFtZScsIHVzZXJEYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIuaWQsIGZvcm1fZGF0YSkpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcclxuICAgIHJldHVybiA8V3JhcHBlcj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5jb250YWluZXIsICdnbGFzcyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHF1YWxpdHk9ezEwMH0gIHNyYz17dXNlckRhdGEuYXZhdGFyICE9PSB1bmRlZmluZWQgPyB1c2VyRGF0YS5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlckRhdGEudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tjbGFzc2VzLnByb2ZpbGVfaW1hZ2UsIHVzZXJEYXRhLmF2YXRhciA9PT0gdW5kZWZpbmVkID8gY2xhc3Nlcy5ub1Byb2ZpbGVJbWFnZSA6IHVuZGVmaW5lZF0uam9pbignICcpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VsZWN0X2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkltYWdlQ2hhbmdlfSB0eXBlPVwiZmlsZVwiIGlkPVwiaW1nXCIgbmFtZT1cImltZ1wiIGFjY2VwdD1cImltYWdlLypcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPjxDaGFuZ2VMb2dvLz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuYXZhdGFyID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tcImVycm9yXCIsIGNsYXNzZXMuaW1nX2Vycm9yXS5qb2luKCcgJyl9Pioge2Vycm9ycy5hdmF0YXJbMF19PC9zcGFuPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlckRhdGEudXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIHVzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgfX0gcGxhY2Vob2xkZXI9eydVc2VybmFtZSd9Lz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgPyA8c3BhbiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+KiB7ZXJyb3JzLnVzZXJuYW1lWzBdfTwvc3Bhbj4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJEYXRhLnN0YXR1c30gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgc3RhdHVzOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1N0YXR1cyd9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TYXZlQ2xpY2t9Pntsb2FkaW5nID8gPExvYWRpbmdTcGlubmVyLz4gOiA8c3Bhbj5TQVZFPC9zcGFuPn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dvdXRDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dEJUTn0+TE9HT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9XcmFwcGVyPlxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhBdXRoKEluZGV4KTsiXSwic291cmNlUm9vdCI6IiJ9