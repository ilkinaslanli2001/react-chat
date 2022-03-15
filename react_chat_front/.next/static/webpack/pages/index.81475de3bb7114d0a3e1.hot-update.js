"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MessageField/MessageField.js":
/*!*************************************************!*\
  !*** ./components/MessageField/MessageField.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messageField.module.css */ "./components/MessageField/messageField.module.css");
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_messageField_module_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Messages_Messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Messages/Messages */ "./components/Messages/Messages.js");
/* harmony import */ var _InputBox_InputBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../InputBox/InputBox */ "./components/InputBox/InputBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/assets/svg/left-arrow.svg */ "./src/assets/svg/left-arrow.svg");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\MessageField\\MessageField.js",
    _s = $RefreshSig$();
















function MessageField() {
  _s();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.otherUserReducer;
  }),
      other_user = _useSelector.other_user;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector2.user;

  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      loading = _useSelector3.loading;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),
      messages = _useState[0],
      setMessages = _useState[1];

  var socket;

  var Ws = /*#__PURE__*/function () {
    function Ws() {
      (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Ws);
    }

    (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Ws, [{
      key: "newClientPromise",
      get: function get() {
        return new Promise(function (resolve, reject) {
          var wsClient = new WebSocket("ws://127.0.0.1:8000/ws/chat/".concat(other_user.username, "/?").concat(user.id));
          console.log(wsClient);

          wsClient.onopen = function () {
            console.log("connected");
            resolve(wsClient);
          };

          wsClient.onerror = function (error) {
            return reject(error);
          };
        });
      }
    }, {
      key: "clientPromise",
      get: function get() {
        if (!this.promise) {
          this.promise = this.newClientPromise;
        }

        return this.promise;
      }
    }]);

    return Ws;
  }();

  var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_13__.default)(),
      width = _useWindowDimensions.width;

  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);

  var sendMessage = function sendMessage(message) {
    window.wsSingleton.clientPromise.then(function (wsClient) {
      wsClient.send(message);
      console.log('sended');
    })["catch"](function (error) {
      return alert(error);
    }); // if (socket) {
    //     console.log(socket)
    //     socket.send(message)
    // }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function () {
    if (Object.keys(other_user).length > 0 && socket) {
      socket.onmessage = function (event) {
        var _divRef$current;

        setMessages([].concat((0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(messages), [JSON.parse(event.data)]));
        divRef.current === null || ((_divRef$current = divRef.current) === null || _divRef$current === void 0 ? void 0 : _divRef$current.scrollIntoView({
          behavior: "smooth"
        }));
      };
    }
  }, [messages]);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    window.wsSingleton = new Ws();

    function get_messages_from_db() {
      return _get_messages_from_db.apply(this, arguments);
    }

    function _get_messages_from_db() {
      _get_messages_from_db = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__.setLoading)(true));
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_9__.axiosInstance.get("api/v1/chat/".concat(user.username, "/?other=").concat(other_user.username)).then(function (res) {
                  setMessages(res.data);
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__.setLoading)(false));
                })["catch"](function (err) {
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_10__.setLoading)(false));
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _get_messages_from_db.apply(this, arguments);
    }

    get_messages_from_db();
  }, [other_user]);

  var onBackClick = function onBackClick() {
    socket.close();
    dispatch((0,_store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_14__.clearOtherUser)());
  };

  return loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    className: [(_messageField_module_css__WEBPACK_IMPORTED_MODULE_17___default().loading_wrapper), "glass"].join(' '),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 22
  }, this) : Object.keys(other_user).length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_17___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
      className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_17___default().user_info),
      children: [width < 650 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("i", {
        onClick: function onClick() {
          onBackClick();
        },
        className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_17___default().left),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_12___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_15___default()), {
        width: 50,
        height: 50,
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_6__.default, {
      divRef: divRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_7__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_17___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 14
  }, this);
}

_s(MessageField, "wb3+KPcsv/ziaewLv4CEGspc4CI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch, _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_13__.default];
});

_c = MessageField;
/* harmony default export */ __webpack_exports__["default"] = (MessageField);

var _c;

$RefreshReg$(_c, "MessageField");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODE0NzVkZTNiYjcxMTRkMGEzZTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU2lCLFlBQVQsR0FBd0I7QUFBQTs7QUFDcEIscUJBQXFCUix3REFBVyxDQUFDLFVBQUFTLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLGdCQUFWO0FBQUEsR0FBTixDQUFoQztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7O0FBQ0Esc0JBQWVYLHdEQUFXLENBQUMsVUFBQVMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csV0FBVjtBQUFBLEdBQU4sQ0FBMUI7QUFBQSxNQUFPQyxJQUFQLGlCQUFPQSxJQUFQOztBQUNBLHNCQUFrQmIsd0RBQVcsQ0FBQyxVQUFBUyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSyxhQUFWO0FBQUEsR0FBTixDQUE3QjtBQUFBLE1BQU9DLE9BQVAsaUJBQU9BLE9BQVA7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHakIsd0RBQVcsRUFBNUI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPd0IsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDRCxNQUFJQyxNQUFKOztBQU5xQixNQVFkQyxFQVJjO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQVNoQixlQUF1QjtBQUNuQixlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsY0FBSUMsUUFBUSxHQUFHLElBQUlDLFNBQUosdUNBQTZDZCxVQUFVLENBQUNlLFFBQXhELGVBQXFFYixJQUFJLENBQUNjLEVBQTFFLEVBQWY7QUFDQUMsVUFBQUEsT0FBTyxDQUFD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QUFBLHdCQUFNekQsVUFBVSxDQUFDZSxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEMEMsZUFVMUMsK0RBQUMsdURBQUQ7QUFBVSxZQUFNLEVBQUVVLE1BQWxCO0FBQTBCLGNBQVEsRUFBRW5CO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWMEMsZUFXMUMsK0RBQUMsdURBQUQ7QUFBVSxpQkFBVyxFQUFFb0I7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVgwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBckMsZ0JBWUE7QUFBSyxhQUFTLEVBQUV6QywwRUFBZW9FO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFiVDtBQWVIOztHQW5GUXhEO1VBQ2dCUixzREFDTkEsc0RBQ0dBLHNEQUNERCxzREF1QkRNOzs7S0EzQlhHO0FBcUZULCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWVzc2FnZUZpZWxkL01lc3NhZ2VGaWVsZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbWVzc2FnZUZpZWxkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IE1lc3NhZ2VzIGZyb20gXCIuLi9NZXNzYWdlcy9NZXNzYWdlc1wiO1xyXG5pbXBvcnQgSW5wdXRCb3ggZnJvbSBcIi4uL0lucHV0Qm94L0lucHV0Qm94XCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtheGlvc0luc3RhbmNlfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcbmltcG9ydCB7c2V0TG9hZGluZ30gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2ltcGxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvbGVmdC1hcnJvdy5zdmcnXHJcbmltcG9ydCB1c2VXaW5kb3dEaW1lbnNpb25zIGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dEaW1lbnNpb25zXCI7XHJcbmltcG9ydCB7Y2xlYXJPdGhlclVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL290aGVyVXNlckFjdGlvblwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmZ1bmN0aW9uIE1lc3NhZ2VGaWVsZCgpIHtcclxuICAgIGNvbnN0IHtvdGhlcl91c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm90aGVyVXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCB7dXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHtsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNpbXBsZVJlZHVjZXIpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgIGxldCBzb2NrZXQ7XHJcblxyXG4gICAgY2xhc3MgV3Mge1xyXG4gICAgICAgIGdldCBuZXdDbGllbnRQcm9taXNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdzQ2xpZW50ID0gbmV3IFdlYlNvY2tldChgd3M6Ly8xMjcuMC4wLjE6ODAwMC93cy9jaGF0LyR7b3RoZXJfdXNlci51c2VybmFtZX0vPyR7dXNlci5pZH1gKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdzQ2xpZW50KVxyXG4gICAgICAgICAgICAgICAgd3NDbGllbnQub25vcGVuID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUod3NDbGllbnQpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHdzQ2xpZW50Lm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQgY2xpZW50UHJvbWlzZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnByb21pc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbWlzZSA9IHRoaXMubmV3Q2xpZW50UHJvbWlzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qge3dpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgIGNvbnN0IGRpdlJlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICB3aW5kb3cud3NTaW5nbGV0b24uY2xpZW50UHJvbWlzZVxyXG4gICAgICAgICAgICAudGhlbiggd3NDbGllbnQgPT57d3NDbGllbnQuc2VuZChtZXNzYWdlKTsgY29uc29sZS5sb2coJ3NlbmRlZCcpfSlcclxuICAgICAgICAgICAgLmNhdGNoKCBlcnJvciA9PiBhbGVydChlcnJvcikgKVxyXG4gICAgICAgIC8vIGlmIChzb2NrZXQpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coc29ja2V0KVxyXG4gICAgICAgIC8vICAgICBzb2NrZXQuc2VuZChtZXNzYWdlKVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwICYmIHNvY2tldCkge1xyXG4gICAgICAgICAgICBzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIEpTT04ucGFyc2UoZXZlbnQuZGF0YSldKVxyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQ9PT1udWxsfHxkaXZSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFttZXNzYWdlc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cud3NTaW5nbGV0b24gPSBuZXcgV3MoKVxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldF9tZXNzYWdlc19mcm9tX2RiKCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCBheGlvc0luc3RhbmNlLmdldChgYXBpL3YxL2NoYXQvJHt1c2VyLnVzZXJuYW1lfS8/b3RoZXI9JHtvdGhlcl91c2VyLnVzZXJuYW1lfWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRfbWVzc2FnZXNfZnJvbV9kYigpXHJcbiAgICB9LCBbb3RoZXJfdXNlcl0pXHJcbiAgICBjb25zdCBvbkJhY2tDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzb2NrZXQuY2xvc2UoKVxyXG4gICAgICAgIGRpc3BhdGNoKGNsZWFyT3RoZXJVc2VyKCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMubG9hZGluZ193cmFwcGVyLCBcImdsYXNzXCJdLmpvaW4oJyAnKX0+PExvYWRpbmdTcGlubmVyLz5cclxuICAgIDwvZGl2PiA6IE9iamVjdC5rZXlzKG90aGVyX3VzZXIpLmxlbmd0aCA+IDAgPyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICB7d2lkdGggPCA2NTAgP1xyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQmFja0NsaWNrKClcclxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT48TGVmdEFycm93Lz48L2k+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9e290aGVyX3VzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICBzcmM9e290aGVyX3VzZXIuYXZhdGFyICE9PSBudWxsID8gb3RoZXJfdXNlci5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgPGgxPkB7b3RoZXJfdXNlci51c2VybmFtZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNZXNzYWdlcyBkaXZSZWY9e2RpdlJlZn0gbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgPElucHV0Qm94IHNlbmRNZXNzYWdlPXtzZW5kTWVzc2FnZX0vPlxyXG4gICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0vPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUZpZWxkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZU1lbW8iLCJjbGFzc2VzIiwiTWVzc2FnZXMiLCJJbnB1dEJveCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJheGlvc0luc3RhbmNlIiwic2V0TG9hZGluZyIsIkxvYWRpbmdTcGlubmVyIiwiTGVmdEFycm93IiwidXNlV2luZG93RGltZW5zaW9ucyIsImNsZWFyT3RoZXJVc2VyIiwiSW1hZ2UiLCJNZXNzYWdlRmllbGQiLCJzdGF0ZSIsIm90aGVyVXNlclJlZHVjZXIiLCJvdGhlcl91c2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJkaXNwYXRjaCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzb2NrZXQiLCJXcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid3NDbGllbnQiLCJXZWJTb2NrZXQiLCJ1c2VybmFtZSIsImlkIiwiY29uc29sZSIsImxvZyIsIm9ub3BlbiIsIm9uZXJyb3IiLCJlcnJvciIsInByb21pc2UiLCJuZXdDbGllbnRQcm9taXNlIiwid2lkdGgiLCJkaXZSZWYiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJ3aW5kb3ciLCJ3c1NpbmdsZXRvbiIsImNsaWVudFByb21pc2UiLCJ0aGVuIiwic2VuZCIsImFsZXJ0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZ2V0X21lc3NhZ2VzX2Zyb21fZGIiLCJnZXQiLCJyZXMiLCJlcnIiLCJvbkJhY2tDbGljayIsImNsb3NlIiwibG9hZGluZ193cmFwcGVyIiwiam9pbiIsIndyYXBwZXIiLCJ1c2VyX2luZm8iLCJsZWZ0IiwidW5kZWZpbmVkIiwiYXZhdGFyIl0sInNvdXJjZVJvb3QiOiIifQ==