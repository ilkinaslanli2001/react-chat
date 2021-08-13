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
                  status: user.status !== null ? user.status : "",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwiZXJyb3JzIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJhdmF0YXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsIm9uU2F2ZUNsaWNrIiwicGFyYW1zIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInNldExvYWRpbmciLCJ1cGRhdGVVc2VyIiwiaWQiLCJvbkxvZ291dENsaWNrIiwic2V0RnVsbExvYWRpbmciLCJsb2dvdXQiLCJSb3V0ZXIiLCJvbkltYWdlQ2hhbmdlIiwiZXZlbnQiLCJwaWN0dXJlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImNsYXNzZXMiLCJqb2luIiwidW5kZWZpbmVkIiwidmFsdWUiLCJXaXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURrQixxQkFFS0Msd0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxXQUFWO0FBQUEsR0FBTixDQUZoQjtBQUFBLE1BRVhDLElBRlcsZ0JBRVhBLElBRlc7QUFBQSxNQUVMQyxNQUZLLGdCQUVMQSxNQUZLOztBQUFB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QUNJLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFsQixHQUE0RWdDLFNBZmpGLGVBZ0JJO0FBQU8sZUFBSyxFQUFFNUIsUUFBUSxDQUFDRixNQUF2QjtBQUErQixrQkFBUSxFQUFFLGtCQUFDbUIsS0FBRCxFQUFXO0FBQ2hEaEIsdUJBQVcsaUNBQUtELFFBQUw7QUFBZUYsb0JBQU0sRUFBRW1CLEtBQUssQ0FBQ0UsTUFBTixDQUFhVTtBQUFwQyxlQUFYO0FBQ0gsV0FGRDtBQUdPLHFCQUFXLEVBQUU7QUFIcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkosZUFvQkk7QUFBUSxpQkFBTyxFQUFFekIsV0FBakI7QUFBQSxvQkFBK0JWLE9BQU8sZ0JBQUcsOERBQUMsK0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBSCxnQkFBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwQkosZUFxQkk7QUFBUSxpQkFBTyxFQUFFa0IsYUFBakI7QUFBZ0MsbUJBQVMsRUFBRWMsd0VBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkc7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBOEJIOztHQXhGUTFDLEs7VUFDWUcsb0QsRUFDTUMsb0QsRUFDTEEsb0Q7OztLQUhiSixLO0FBMEZULCtEQUFlLE1BQUE4Qyw4REFBUSxDQUFDOUMsS0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy4zNzU1ZGFlZThkMWY2YjQ2ZmZhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3NldHRpbmdzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2dvdXQsIHVwZGF0ZVVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlclwiO1xyXG5pbXBvcnQgQ2hhbmdlTG9nbyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9jaGFuZ2Uuc3ZnJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3NldEZ1bGxMb2FkaW5nLCBzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBXaXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dpdGhBdXRoJ1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCB7dXNlciwgZXJyb3JzfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICBhdmF0YXI6IG51bGxcclxuICAgIH0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldERhdGEoKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJEYXRhKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB1c2VyLnN0YXR1cyE9PW51bGw/dXNlci5zdGF0dXM6XCJcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0RGF0YSgpXHJcbiAgICB9LCBbdXNlcl0pXHJcblxyXG5cclxuICAgIGNvbnN0IG9uU2F2ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7fVxyXG4gICAgICAgIGlmICh1c2VyLnVzZXJuYW1lICE9PSB1c2VyRGF0YS51c2VybmFtZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMudXNlcm5hbWUgPSB1c2VyRGF0YS51c2VybmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5zdGF0dXMgIT09IHVzZXJEYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgICBwYXJhbXMuc3RhdHVzID0gdXNlckRhdGEuc3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyLmF2YXRhciAhPT0gdXNlckRhdGEuYXZhdGFyKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5hdmF0YXIgPSB1c2VyRGF0YS5hdmF0YXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBwYXJhbXMudXNlcm5hbWUgPSB1c2VyRGF0YS51c2VybmFtZVxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIuaWQsIHBhcmFtcykpXHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uTG9nb3V0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0RnVsbExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2gobG9nb3V0KCkpXHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0RnVsbExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25JbWFnZUNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBpY3R1cmUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIGF2YXRhcjogVVJMLmNyZWF0ZU9iamVjdFVSTChwaWN0dXJlKX0pXHJcbiAgICAgICAgbGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGF3YWl0IGZvcm1fZGF0YS5hcHBlbmQoJ2F2YXRhcicsIHBpY3R1cmUpO1xyXG4gICAgICAgIGF3YWl0IGZvcm1fZGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlckRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHVwZGF0ZVVzZXIodXNlci5pZCwgZm9ybV9kYXRhKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFdyYXBwZXI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMuY29udGFpbmVyLCAnZ2xhc3MnXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1nX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyRGF0YS5hdmF0YXIgIT09IG51bGwgPyB1c2VyRGF0YS5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXJEYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY2xhc3Nlcy5wcm9maWxlX2ltYWdlLCB1c2VyRGF0YS5hdmF0YXIgPT09IHVuZGVmaW5lZCA/IGNsYXNzZXMubm9Qcm9maWxlSW1hZ2UgOiB1bmRlZmluZWRdLmpvaW4oJyAnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlbGVjdF9pbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25JbWFnZUNoYW5nZX0gdHlwZT1cImZpbGVcIiBpZD1cImltZ1wiIG5hbWU9XCJpbWdcIiBhY2NlcHQ9XCJpbWFnZS8qXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aT48Q2hhbmdlTG9nby8+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmF2YXRhciA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbXCJlcnJvclwiLCBjbGFzc2VzLmltZ19lcnJvcl0uam9pbignICcpfT4qIHtlcnJvcnMuYXZhdGFyWzBdfTwvc3Bhbj4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJEYXRhLnVzZXJuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCB1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICAgICAgICAgIH19IHBsYWNlaG9sZGVyPXsnVXNlcm5hbWUnfS8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lID8gPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9Pioge2Vycm9ycy51c2VybmFtZVswXX08L3NwYW4+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VyRGF0YS5zdGF0dXN9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIHN0YXR1czogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTdGF0dXMnfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU2F2ZUNsaWNrfT57bG9hZGluZyA/IDxMb2FkaW5nU3Bpbm5lci8+IDogPHNwYW4+U0FWRTwvc3Bhbj59PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0Q2xpY2t9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXRCVE59PkxPR09VVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvV3JhcHBlcj5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRoQXV0aChJbmRleCk7Il0sInNvdXJjZVJvb3QiOiIifQ==