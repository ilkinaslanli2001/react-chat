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

  var socket;

  var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_11__.default)(),
      width = _useWindowDimensions.width;

  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  var sendMessage = function sendMessage(message) {
    if (socket) {
      console.log(socket);
      socket.send(message);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {
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
      lineNumber: 61,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
          lineNumber: 67,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
        width: 50,
        height: 50,
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_4__.default, {
      divRef: divRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_5__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 14
  }, this);
}

_s(MessageField, "wb3+KPcsv/ziaewLv4CEGspc4CI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY4MzJjZTdmNGM5NzIxYzBmMGUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTaUIsWUFBVCxHQUF3QjtBQUFBOztBQUNwQixxQkFBcUJSLHdEQUFXLENBQUMsVUFBQVMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsZ0JBQVY7QUFBQSxHQUFOLENBQWhDO0FBQUEsTUFBT0MsVUFBUCxnQkFBT0EsVUFBUDs7QUFDQSxzQkFBZVgsd0RBQVcsQ0FBQyxVQUFBUyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRyxXQUFWO0FBQUEsR0FBTixDQUExQjtBQUFBLE1BQU9DLElBQVAsaUJBQU9BLElBQVA7O0FBQ0Esc0JBQWtCYix3REFBVyxDQUFDLFVBQUFTLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNLLGFBQVY7QUFBQSxHQUFOLENBQTdCO0FBQUEsTUFBT0MsT0FBUCxpQkFBT0EsT0FBUDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdqQix3REFBVyxFQUE1Qjs7QUFDQSxrQkFBZ0NOLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU93QixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQUlDLE1BQUo7O0FBQ0EsNkJBQWdCZCxvRUFBbUIsRUFBbkM7QUFBQSxNQUFPZSxLQUFQLHdCQUFPQSxLQUFQOztBQUNBLE1BQU1DLE1BQU0sR0FBRzNCLDZDQUFNLENBQUMsSUFBRCxDQUFyQjs7QUFLQSxNQUFNNEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFhO0FBQzdCLFFBQUlKLE1BQUosRUFBWTtBQUNSSyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sTUFBWjtBQUNBQSxNQUFBQSxNQUFN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QTZCekMsVUFBVSxDQUFDeUMsTUFBeEMsR0FBaUQ7QUFEN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKLGVBT0k7QUFBQSx3QkFBTXpDLFVBQVUsQ0FBQzZCLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUQwQyxlQVUxQywrREFBQyx1REFBRDtBQUFVLFlBQU0sRUFBRW5CLE1BQWxCO0FBQTBCLGNBQVEsRUFBRUo7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVYwQyxlQVcxQywrREFBQyx1REFBRDtBQUFVLGlCQUFXLEVBQUVLO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYMEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXJDLGdCQVlBO0FBQUssYUFBUyxFQUFFMUIsMEVBQWVvRDtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBYlQ7QUFlSDs7R0E5RFF4QztVQUNnQlIsc0RBQ05BLHNEQUNHQSxzREFDREQsc0RBR0RNOzs7S0FQWEc7QUFnRVQsK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tZXNzYWdlRmllbGQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4uL01lc3NhZ2VzL01lc3NhZ2VzXCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi4vSW5wdXRCb3gvSW5wdXRCb3hcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2F4aW9zSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHtzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9sZWZ0LWFycm93LnN2ZydcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHtjbGVhck90aGVyVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvb3RoZXJVc2VyQWN0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUZpZWxkKCkge1xyXG4gICAgY29uc3Qge290aGVyX3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUub3RoZXJVc2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGxldCBzb2NrZXRcclxuICAgIGNvbnN0IHt3aWR0aH0gPSB1c2VXaW5kb3dEaW1lbnNpb25zKCk7XHJcbiAgICBjb25zdCBkaXZSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcblxyXG4gICAgXHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc29ja2V0KVxyXG4gICAgICAgICAgICBzb2NrZXQuc2VuZChtZXNzYWdlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwICYmIHNvY2tldCkge1xyXG4gICAgICAgICAgICBzb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIEpTT04ucGFyc2UoZXZlbnQuZGF0YSldKVxyXG4gICAgICAgICAgICAgICAgZGl2UmVmLmN1cnJlbnQ9PT1udWxsfHxkaXZSZWYuY3VycmVudD8uc2Nyb2xsSW50b1ZpZXcoe2JlaGF2aW9yOiBcInNtb290aFwifSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFttZXNzYWdlc10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRfbWVzc2FnZXNfZnJvbV9kYigpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYGFwaS92MS9jaGF0LyR7dXNlci51c2VybmFtZX0vP290aGVyPSR7b3RoZXJfdXNlci51c2VybmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X21lc3NhZ2VzX2Zyb21fZGIoKVxyXG4gICAgfSwgW290aGVyX3VzZXJdKVxyXG4gICAgY29uc3Qgb25CYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmNsb3NlKClcclxuICAgICAgICBkaXNwYXRjaChjbGVhck90aGVyVXNlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmxvYWRpbmdfd3JhcHBlciwgXCJnbGFzc1wiXS5qb2luKCcgJyl9PjxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICA8L2Rpdj4gOiBPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAge3dpZHRoIDwgNjUwID9cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkJhY2tDbGljaygpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+PExlZnRBcnJvdy8+PC9pPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PXtvdGhlcl91c2VyLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgc3JjPXtvdGhlcl91c2VyLmF2YXRhciAhPT0gbnVsbCA/IG90aGVyX3VzZXIuYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfS8+XHJcbiAgICAgICAgICAgIDxoMT5Ae290aGVyX3VzZXIudXNlcm5hbWV9PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TWVzc2FnZXMgZGl2UmVmPXtkaXZSZWZ9IG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxJbnB1dEJveCBzZW5kTWVzc2FnZT17c2VuZE1lc3NhZ2V9Lz5cclxuICAgIDwvZGl2PiA6IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9Lz5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VGaWVsZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VNZW1vIiwiY2xhc3NlcyIsIk1lc3NhZ2VzIiwiSW5wdXRCb3giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiYXhpb3NJbnN0YW5jZSIsInNldExvYWRpbmciLCJMb2FkaW5nU3Bpbm5lciIsIkxlZnRBcnJvdyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJjbGVhck90aGVyVXNlciIsIkltYWdlIiwiTWVzc2FnZUZpZWxkIiwic3RhdGUiLCJvdGhlclVzZXJSZWR1Y2VyIiwib3RoZXJfdXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsInNpbXBsZVJlZHVjZXIiLCJsb2FkaW5nIiwiZGlzcGF0Y2giLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwic29ja2V0Iiwid2lkdGgiLCJkaXZSZWYiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJvbm1lc3NhZ2UiLCJldmVudCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImdldF9tZXNzYWdlc19mcm9tX2RiIiwiZ2V0IiwidXNlcm5hbWUiLCJ0aGVuIiwicmVzIiwiZXJyIiwib25CYWNrQ2xpY2siLCJjbG9zZSIsImxvYWRpbmdfd3JhcHBlciIsImpvaW4iLCJ3cmFwcGVyIiwidXNlcl9pbmZvIiwibGVmdCIsInVuZGVmaW5lZCIsImF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=