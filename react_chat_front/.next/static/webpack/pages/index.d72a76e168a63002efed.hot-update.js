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
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messageField.module.css */ "./components/MessageField/messageField.module.css");
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_messageField_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Messages_Messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Messages/Messages */ "./components/Messages/Messages.js");
/* harmony import */ var _InputBox_InputBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBox/InputBox */ "./components/InputBox/InputBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/assets/svg/left-arrow.svg */ "./src/assets/svg/left-arrow.svg");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\MessageField\\MessageField.js",
    _s = $RefreshSig$();
















function MessageField() {
  _s();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.otherUserReducer;
  }),
      other_user = _useSelector.other_user;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector2.user;

  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      loading = _useSelector3.loading;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      messages = _useState[0],
      setMessages = _useState[1];

  var socket = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
    if (other_user.username !== undefined) return new WebSocket("ws://127.0.0.1:8000/ws/chat/".concat(other_user.username, "/?").concat(user.id));
  }, [other_user]);

  var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_11__.default)(),
      width = _useWindowDimensions.width;

  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  var sendMessage = function sendMessage(message) {
    if (socket) {
      socket.send(message);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
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
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function get_messages_from_db() {
      return _get_messages_from_db.apply(this, arguments);
    }

    function _get_messages_from_db() {
      _get_messages_from_db = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_8__.setLoading)(true));
                _context.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_7__.axiosInstance.get("api/v1/chat/".concat(user.username, "/?other=").concat(other_user.username)).then(function (res) {
                  setMessages(res.data);
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_8__.setLoading)(false));
                })["catch"](function (err) {
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_8__.setLoading)(false));
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
    dispatch((0,_store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_12__.clearOtherUser)());
  };

  return loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: [(_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().loading_wrapper), "glass"].join(' '),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 22
  }, this) : Object.keys(other_user).length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().user_info),
      children: [width < 650 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("i", {
        onClick: function onClick() {
          onBackClick();
        },
        className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().left),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_10___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
        width: 50,
        height: 50,
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_4__.default, {
      divRef: divRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_5__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 14
  }, this);
}

_s(MessageField, "fqkJZOW41K28Zxy2xndAdQF5snA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch, _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_11__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDcyYTc2ZTE2OGE2MzAwMmVmZWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTaUIsWUFBVCxHQUF3QjtBQUFBOztBQUNwQixxQkFBcUJSLHdEQUFXLENBQUMsVUFBQVMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsZ0JBQVY7QUFBQSxHQUFOLENBQWhDO0FBQUEsTUFBT0MsVUFBUCxnQkFBT0EsVUFBUDs7QUFDQSxzQkFBZVgsd0RBQVcsQ0FBQyxVQUFBUyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRyxXQUFWO0FBQUEsR0FBTixDQUExQjtBQUFBLE1BQU9DLElBQVAsaUJBQU9BLElBQVA7O0FBQ0Esc0JBQWtCYix3REFBVyxDQUFDLFVBQUFTLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNLLGFBQVY7QUFBQSxHQUFOLENBQTdCO0FBQUEsTUFBT0MsT0FBUCxpQkFBT0EsT0FBUDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdqQix3REFBVyxFQUE1Qjs7QUFDQSxrQkFBZ0NOLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU93QixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR3hCLDhDQUFPLENBQUMsWUFBTTtBQUN6QixRQUFJZ0IsVUFBVSxDQUFDUyxRQUFYLEtBQXdCQyxTQUE1QixFQUF1QyxPQUFPLElBQUlDLFNBQUosdUNBQTZDWCxVQUFVLENBQUNTLFFBQXhELGVBQXFFUCxJQUFJLENBQUNVLEVBQTFFLEVBQVA7QUFDMUMsR0FGcUIsRUFFbkIsQ0FBQ1osVUFBRCxDQUZtQixDQUF0Qjs7QUFHQSw2QkFBZ0JOLG9FQUFtQixFQUFuQztBQUFBLE1BQU9tQixLQUFQLHdC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ZUFLSSwrREFBQyxvREFBRDtBQUFPLGFBQUssRUFBRSxFQUFkO0FBQWtCLGNBQU0sRUFBRSxFQUExQjtBQUE4QixXQUFHLEVBQUVWLFVBQVUsQ0FBQ1MsUUFBOUM7QUFDTyxXQUFHLEVBQUVULFVBQVUsQ0FBQ3lDLE1BQVgsS0FBc0IsSUFBdEIsR0FBNkJ6QyxVQUFVLENBQUN5QyxNQUF4QyxHQUFpRDtBQUQ3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFPSTtBQUFBLHdCQUFNekMsVUFBVSxDQUFDUyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEMEMsZUFVMUMsK0RBQUMsdURBQUQ7QUFBVSxZQUFNLEVBQUVLLE1BQWxCO0FBQTBCLGNBQVEsRUFBRVI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVYwQyxlQVcxQywrREFBQyx1REFBRDtBQUFVLGlCQUFXLEVBQUVTO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXJDLGdCQVlBO0FBQUssYUFBUyxFQUFFOUIsMEVBQWVxRDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBYlQ7QUFlSDs7R0E1RFF6QztVQUNnQlIsc0RBQ05BLHNEQUNHQSxzREFDREQsc0RBS0RNOzs7S0FUWEc7QUE4RFQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tZXNzYWdlRmllbGQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4uL01lc3NhZ2VzL01lc3NhZ2VzXCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi4vSW5wdXRCb3gvSW5wdXRCb3hcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2F4aW9zSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHtzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9sZWZ0LWFycm93LnN2ZydcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHtjbGVhck90aGVyVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvb3RoZXJVc2VyQWN0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUZpZWxkKCkge1xyXG4gICAgY29uc3Qge290aGVyX3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUub3RoZXJVc2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHNvY2tldCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGlmIChvdGhlcl91c2VyLnVzZXJuYW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgV2ViU29ja2V0KGB3czovLzEyNy4wLjAuMTo4MDAwL3dzL2NoYXQvJHtvdGhlcl91c2VyLnVzZXJuYW1lfS8/JHt1c2VyLmlkfWApO1xyXG4gICAgfSwgW290aGVyX3VzZXJdKTtcclxuICAgIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBkaXZSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZSA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldCkge1xyXG4gICAgICAgICAgICBzb2NrZXQuc2VuZChtZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwICYmIHNvY2tldCkge1xyXG4gICAgICAgICAgICBzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIEpTT04ucGFyc2UoZXZlbnQuZGF0YSldKVxyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQ9PT1udWxsfHxkaXZSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFttZXNzYWdlc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRfbWVzc2FnZXNfZnJvbV9kYigpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYGFwaS92MS9jaGF0LyR7dXNlci51c2VybmFtZX0vP290aGVyPSR7b3RoZXJfdXNlci51c2VybmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X21lc3NhZ2VzX2Zyb21fZGIoKVxyXG4gICAgfSwgW290aGVyX3VzZXJdKVxyXG4gICAgY29uc3Qgb25CYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmNsb3NlKClcclxuICAgICAgICBkaXNwYXRjaChjbGVhck90aGVyVXNlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmxvYWRpbmdfd3JhcHBlciwgXCJnbGFzc1wiXS5qb2luKCcgJyl9PjxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICA8L2Rpdj4gOiBPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAge3dpZHRoIDwgNjUwID9cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkJhY2tDbGljaygpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+PExlZnRBcnJvdy8+PC9pPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PXtvdGhlcl91c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPXtvdGhlcl91c2VyLmF2YXRhciAhPT0gbnVsbCA/IG90aGVyX3VzZXIuYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfS8+XHJcbiAgICAgICAgICAgIDxoMT5Ae290aGVyX3VzZXIudXNlcm5hbWV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TWVzc2FnZXMgZGl2UmVmPXtkaXZSZWZ9IG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxJbnB1dEJveCBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9Lz5cclxuICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9Lz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VGaWVsZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VNZW1vIiwiY2xhc3NlcyIsIk1lc3NhZ2VzIiwiSW5wdXRCb3giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiYXhpb3NJbnN0YW5jZSIsInNldExvYWRpbmciLCJMb2FkaW5nU3Bpbm5lciIsIkxlZnRBcnJvdyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjbGVhck90aGVyVXNlciIsIkltYWdlIiwiTWVzc2FnZUZpZWxkIiwic3RhdGUiLCJvdGhlclVzZXJSZWR1Y2VyIiwib3RoZXJfdXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsInNpbXBsZVJlZHVjZXIiLCJsb2FkaW5nIiwiZGlzcGF0Y2giLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic29ja2V0IiwidXNlcm5hbWUiLCJ1bmRlZmluZWQiLCJXZWJTb2NrZXQiLCJpZCIsIndpZHRoIiwiZGl2UmVmIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwic2VuZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJvbm1lc3NhZ2UiLCJldmVudCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImdldF9tZXNzYWdlc19mcm9tX2RiIiwiZ2V0IiwidGhlbiIsInJlcyIsImVyciIsIm9uQmFja0NsaWNrIiwiY2xvc2UiLCJsb2FkaW5nX3dyYXBwZXIiLCJqb2luIiwid3JhcHBlciIsInVzZXJfaW5mbyIsImxlZnQiLCJhdmF0YXIiXSwic291cmNlUm9vdCI6IiJ9