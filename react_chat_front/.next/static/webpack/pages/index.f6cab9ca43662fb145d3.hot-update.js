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
  "ws://127.0.0.1:8000/ws/chat/".concat(other_user.username, "/?").concat(user.id);

  var Ws = /*#__PURE__*/function () {
    function Ws() {
      (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Ws);
    }

    (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Ws, [{
      key: "newClientPromise",
      get: function get() {
        return new Promise(function (resolve, reject) {
          var wsClient = new WebSocket("ws://demos.kaazing.com/echo");
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
    if (socket) {
      console.log(socket);
      socket.send(message);
    }
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
      lineNumber: 78,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
          lineNumber: 84,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_15___default()), {
        width: 50,
        height: 50,
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_6__.default, {
      divRef: divRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_7__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_17___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjZjYWI5Y2E0MzY2MmZiMTQ1ZDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU2lCLFlBQVQsR0FBd0I7QUFBQTs7QUFDcEIscUJBQXFCUix3REFBVyxDQUFDLFVBQUFTLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLGdCQUFWO0FBQUEsR0FBTixDQUFoQztBQUFBLE1BQU9DLFVBQVAsZ0JBQU9BLFVBQVA7O0FBQ0Esc0JBQWVYLHdEQUFXLENBQUMsVUFBQVMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csV0FBVjtBQUFBLEdBQU4sQ0FBMUI7QUFBQSxNQUFPQyxJQUFQLGlCQUFPQSxJQUFQOztBQUNBLHNCQUFrQmIsd0RBQVcsQ0FBQyxVQUFBUyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDSyxhQUFWO0FBQUEsR0FBTixDQUE3QjtBQUFBLE1BQU9DLE9BQVAsaUJBQU9BLE9BQVA7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHakIsd0RBQVcsRUFBNUI7O0FBQ0Esa0JBQWdDTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQSxNQUFPd0IsUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDRCxNQUFJQyxNQUFKO0FBQ0Msd0NBQStCUixVQUFVLENBQUNTLFFBQTFDLGVBQXVEUCxJQUFJLENBQUNRLEVBQTVEOztBQVBvQixNQVFkQyxFQVJjO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxXQVNoQixlQUF1QjtBQUNuQixlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsY0FBSUMsUUFBUSxHQUFHLElBQUlDLFNBQUosQ0FBYyw2QkFBZCxDQUFmO0FBQ0FD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REFBQyx1REFBRDtBQUFVLGlCQUFXLEVBQUVvQjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWDBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFyQyxnQkFZQTtBQUFLLGFBQVMsRUFBRXpDLDBFQUFlZ0U7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQWJUO0FBZUg7O0dBL0VRcEQ7VUFDZ0JSLHNEQUNOQSxzREFDR0Esc0RBQ0RELHNEQXVCRE07OztLQTNCWEc7QUFpRlQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tZXNzYWdlRmllbGQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4uL01lc3NhZ2VzL01lc3NhZ2VzXCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi4vSW5wdXRCb3gvSW5wdXRCb3hcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2F4aW9zSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHtzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9sZWZ0LWFycm93LnN2ZydcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHtjbGVhck90aGVyVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvb3RoZXJVc2VyQWN0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUZpZWxkKCkge1xyXG4gICAgY29uc3Qge290aGVyX3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUub3RoZXJVc2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgbGV0IHNvY2tldDtcclxuICAgIGB3czovLzEyNy4wLjAuMTo4MDAwL3dzL2NoYXQvJHtvdGhlcl91c2VyLnVzZXJuYW1lfS8/JHt1c2VyLmlkfWBcclxuICAgIGNsYXNzIFdzIHtcclxuICAgICAgICBnZXQgbmV3Q2xpZW50UHJvbWlzZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB3c0NsaWVudCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2RlbW9zLmthYXppbmcuY29tL2VjaG9cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3c0NsaWVudClcclxuICAgICAgICAgICAgICAgIHdzQ2xpZW50Lm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbm5lY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHdzQ2xpZW50KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3c0NsaWVudC5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0IGNsaWVudFByb21pc2UoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2UgPSB0aGlzLm5ld0NsaWVudFByb21pc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBkaXZSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb2NrZXQpXHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kKG1lc3NhZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG90aGVyX3VzZXIpLmxlbmd0aCA+IDAgJiYgc29ja2V0KSB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgSlNPTi5wYXJzZShldmVudC5kYXRhKV0pXHJcbiAgICAgICAgICAgICAgICBkaXZSZWYuY3VycmVudD09PW51bGx8fGRpdlJlZi5jdXJyZW50Py5zY3JvbGxJbnRvVmlldyh7YmVoYXZpb3I6IFwic21vb3RoXCJ9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lc3NhZ2VzXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldF9tZXNzYWdlc19mcm9tX2RiKCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCBheGlvc0luc3RhbmNlLmdldChgYXBpL3YxL2NoYXQvJHt1c2VyLnVzZXJuYW1lfS8/b3RoZXI9JHtvdGhlcl91c2VyLnVzZXJuYW1lfWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMocmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRfbWVzc2FnZXNfZnJvbV9kYigpXHJcbiAgICB9LCBbb3RoZXJfdXNlcl0pXHJcbiAgICBjb25zdCBvbkJhY2tDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzb2NrZXQuY2xvc2UoKVxyXG4gICAgICAgIGRpc3BhdGNoKGNsZWFyT3RoZXJVc2VyKCkpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMubG9hZGluZ193cmFwcGVyLCBcImdsYXNzXCJdLmpvaW4oJyAnKX0+PExvYWRpbmdTcGlubmVyLz5cclxuICAgIDwvZGl2PiA6IE9iamVjdC5rZXlzKG90aGVyX3VzZXIpLmxlbmd0aCA+IDAgPyA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyX2luZm99PlxyXG4gICAgICAgICAgICB7d2lkdGggPCA2NTAgP1xyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQmFja0NsaWNrKClcclxuICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0fT48TGVmdEFycm93Lz48L2k+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICA8SW1hZ2Ugd2lkdGg9ezUwfSBoZWlnaHQ9ezUwfSBhbHQ9e290aGVyX3VzZXIudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICBzcmM9e290aGVyX3VzZXIuYXZhdGFyICE9PSBudWxsID8gb3RoZXJfdXNlci5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgPGgxPkB7b3RoZXJfdXNlci51c2VybmFtZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNZXNzYWdlcyBkaXZSZWY9e2RpdlJlZn0gbWVzc2FnZXM9e21lc3NhZ2VzfS8+XHJcbiAgICAgICAgPElucHV0Qm94IHNlbmRNZXNzYWdlPXtzZW5kTWVzc2FnZX0vPlxyXG4gICAgPC9kaXY+IDogPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0vPlxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVzc2FnZUZpZWxkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZU1lbW8iLCJjbGFzc2VzIiwiTWVzc2FnZXMiLCJJbnB1dEJveCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJheGlvc0luc3RhbmNlIiwic2V0TG9hZGluZyIsIkxvYWRpbmdTcGlubmVyIiwiTGVmdEFycm93IiwidXNlV2luZG93RGltZW5zaW9ucyIsImNsZWFyT3RoZXJVc2VyIiwiSW1hZ2UiLCJNZXNzYWdlRmllbGQiLCJzdGF0ZSIsIm90aGVyVXNlclJlZHVjZXIiLCJvdGhlcl91c2VyIiwidXNlclJlZHVjZXIiLCJ1c2VyIiwic2ltcGxlUmVkdWNlciIsImxvYWRpbmciLCJkaXNwYXRjaCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJzb2NrZXQiLCJ1c2VybmFtZSIsImlkIiwiV3MiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIndzQ2xpZW50IiwiV2ViU29ja2V0IiwiY29uc29sZSIsImxvZyIsIm9ub3BlbiIsIm9uZXJyb3IiLCJlcnJvciIsInByb21pc2UiLCJuZXdDbGllbnRQcm9taXNlIiwid2lkdGgiLCJkaXZSZWYiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZW5kIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZ2V0X21lc3NhZ2VzX2Zyb21fZGIiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZXJyIiwib25CYWNrQ2xpY2siLCJjbG9zZSIsImxvYWRpbmdfd3JhcHBlciIsImpvaW4iLCJ3cmFwcGVyIiwidXNlcl9pbmZvIiwibGVmdCIsInVuZGVmaW5lZCIsImF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=