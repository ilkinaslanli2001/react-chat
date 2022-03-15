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
    if (other_user.username !== undefined) {
      console.log('Hello');
      return new WebSocket("ws://127.0.0.1:8000/ws/chat/".concat(other_user.username, "/?").concat(user.id));
    }
  }, [other_user]);

  var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_11__.default)(),
      width = _useWindowDimensions.width;

  var divRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  var sendMessage = function sendMessage(message) {
    if (socket) {
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
      lineNumber: 63,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
          lineNumber: 69,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_13___default()), {
        width: 50,
        height: 50,
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_4__.default, {
      divRef: divRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_5__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 14
  }, this);
}

_s(MessageField, "vZgPPzKoGEzMV8yrUJEfr/H2nKo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjQwYTFjNWRjZGJlNzFkMTQyYjEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTaUIsWUFBVCxHQUF3QjtBQUFBOztBQUNwQixxQkFBcUJSLHdEQUFXLENBQUMsVUFBQVMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsZ0JBQVY7QUFBQSxHQUFOLENBQWhDO0FBQUEsTUFBT0MsVUFBUCxnQkFBT0EsVUFBUDs7QUFDQSxzQkFBZVgsd0RBQVcsQ0FBQyxVQUFBUyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRyxXQUFWO0FBQUEsR0FBTixDQUExQjtBQUFBLE1BQU9DLElBQVAsaUJBQU9BLElBQVA7O0FBQ0Esc0JBQWtCYix3REFBVyxDQUFDLFVBQUFTLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNLLGFBQVY7QUFBQSxHQUFOLENBQTdCO0FBQUEsTUFBT0MsT0FBUCxpQkFBT0EsT0FBUDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdqQix3REFBVyxFQUE1Qjs7QUFDQSxrQkFBZ0NOLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBLE1BQU93QixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR3hCLDhDQUFPLENBQUMsWUFBTTtBQUN6QixRQUFJZ0IsVUFBVSxDQUFDUyxRQUFYLEtBQXdCQyxTQUE1QixFQUNBO0FBQ0lDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQSxhQUFPLElBQUlDLFNBQUosdUNBQTZDYixVQUFVLENBQUNTLFFBQXhELGVBQXFFUCxJQUFJLENBQUNZLEVBQTFFLEVBQVA7QUFDSDtBQUNKLEdBTnFCLEVBTW5CLENBQUNkLFVBQUQsQ0FObUIsQ0FBdEI7O0FBT0EsNkJBQWdCTixvRUFBbUIsRUFBbkM7QUFBQSxNQUFPcUIsS0FBUCx3QkFBT0EsS0FBUDs7QUFDQSxNQUFNQyxNQUFNLEdBQUdqQyw2Q0FBTSxDQUFDLElBQUQsQ0FBckI7O0FBRUEsTUFBTWtDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTtBQUM3QixRQUFJVixNQUFKLEVBQVk7QUFDUkEsTUFBQUEsTUFBTSxDQUFDVyxJQUFQLENBQVlELE9BQVo7QUFDSDtBQUNKLEdBSkQ7O0FBTURsQyxFQUFBQSw4Q0FBTyxDQUFDLFlBQU07QUFDVCxRQUFJb0MsTUFBTSxDQUFDQyxJQUFQLENBQVlyQixVQUFaLEVBQXdCc0IsTUFBeEIsR0FBaUMsQ0FBakMsSUFBc0NkLE1BQTFDLEVBQWtEO0FBQzlDQSxNQUFBQSxNQUFNLENBQUNlLFNBQVAsR0FBbUIsVUFBVUMsS0FBVixFQUFpQjtBQUFBOztBQUNoQ2pCLFFBQUFBLFdBQVcsMExBQUtELFFBQUwsSUFBZW1CLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixLQUFLLENBQUNHLElBQWpCLENBQWYsR0FBWDtBQUNBWCxRQUFBQSxNQUFNLENBQUNZLE9BQVAsS0FBaUIsSUFBakIsd0JBQXVCWixNQUFNLENBQUNZLE9BQTlCLG9EQUF1QixnQkFBZ0JDLGNBQWhCLENBQStCO0FBQUNDLFVBQUFBLFFBQVEsRUFBRTtBQUFYLFNBQS9CLENBQXZCO0FBQ0gsT0FIRDtBQUlIO0FBQ0osR0FQSyxFQU9ILENBQUN4QixRQUFELENBUEcsQ0FBUDtBQVNDekIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR2tELG9CQURIO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBYQUNaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTFCLGdCQUFBQSxRQUFRLENBQUNkLHdFQUFVLENBQUMsSUFBRCxDQUFYLENBQVI7QUFESjtBQUFBLHVCQUVVRCxtREFBQSx1QkFBaUNZLElBQUksQ0FBQ08sUUFBdEMscUJBQXlEVCxVQUFVLENBQUNTLFFBQXBFLEdBQWdGd0IsSUFBaEYsQ0FBcUYsVUFBQ0MsR0FBRCxFQUFTO0FBQ2hHM0Isa0JBQUFBLFdBQVcsQ0FBQzJCLEdBQUcsQ0FBQ1AsSUFBTCxDQUFYO0FBQ0F0QixrQkFBQUEsUUFBUSxDQUFDZCx3RUFBVSxDQUFDLEtBQUQsQ0FBWCxDQUFSO0FBQ0gsaUJBSEssV0FHRyxVQUFDNEMsR0FBRCxFQUFTO0FBQ2Q5QixrQkFBQUEsUUFBUSxDQUFDZCx3RUFBVSxDQUFDLEtBQUQsQ0FBWCxDQUFSO0FBQ0gsaUJBTEssQ0FGVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURZO0FBQUE7QUFBQTs7QUFXWndDLElBQUFBLG9CQUFvQjtBQUN2QixHQVpRLEVBWU4sQ0FBQy9CLFVBQUQsQ0FaTSxDQUFUOztBQWFBLE1BQU1vQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCNUIsSUFBQUEsTUFBTSxDQUFDNkIsS0FBUDtBQUNBaEMsSUFBQUEsUUFBUSxDQUFDViwrRUFBYyxFQUFmLENBQVI7QUFDSCxHQUhEOztBQUtBLFNBQU9TLE9BQU8sZ0JBQUc7QUFBSyxhQUFTLEVBQUUsQ0FBQ25CLGtGQUFELEVBQTBCLE9BQTFCLEVBQW1Dc0QsSUFBbkMsQ0FBd0MsR0FBeEMsQ0FBaEI7QUFBQSwyQkFBOEQsK0RBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUgsR0FDTG5CLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZckIsVUFBWixFQUF3QnNCLE1BQXhCLEdBQWlDLENBQWpDLGdCQUFxQztBQUFLLGFBQVMsRUFBRXJDLDBFQUFoQjtBQUFBLDRCQUMxQztBQUFLLGVBQVMsRUFBRUEsNEVBQWhCO0FBQUEsaUJBQ0s4QixLQUFLLEdBQUcsR0FBUixnQkFDRztBQUFHLGVBQU8sRUFBRSxtQkFBTTtBQUNkcUIsVUFBQUEsV0FBVztBQUNkLFNBRkQ7QUFFRyxpQkFBUyxFQUFFbkQsdUVBRmQ7QUFBQSwrQkFFNEIsK0RBQUMsd0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsR0FHa0R5QixTQUp2RCxlQUtJLCtEQUFDLG9EQUFEO0FBQU8sYUFBSyxFQUFFLEVBQWQ7QUFBa0IsY0FBTSxFQUFFLEVBQTFCO0FBQThCLFdBQUcsRUFBRVYsVUFBVSxDQUFDUyxRQUE5QztBQUNPLFdBQUcsRUFBRVQsVUFBVSxDQUFDMkMsTUFBWCxLQUFzQixJQUF0QixHQUE2QjNDLFVBQVUsQ0FBQzJDLE1BQXhDLEdBQWlEO0FBRDdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixlQU9JO0FBQUEsd0JBQU0zQyxVQUFVLENBQUNTLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUQwQyxlQVUxQywrREFBQyx1REFBRDtBQUFVLFlBQU0sRUFBRU8sTUFBbEI7QUFBMEIsY0FBUSxFQUFFVjtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVjBDLGVBVzFDLCtEQUFDLHVEQUFEO0FBQVUsaUJBQVcsRUFBRVc7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVgwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBckMsZ0JBWUE7QUFBSyxhQUFTLEVBQUVoQywwRUFBZXVEO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFiVDtBQWVIOztHQWhFUTNDO1VBQ2dCUixzREFDTkEsc0RBQ0dBLHNEQUNERCxzREFTRE07OztLQWJYRztBQWtFVCwrREFBZUEsWUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lc3NhZ2VGaWVsZC9NZXNzYWdlRmllbGQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL21lc3NhZ2VGaWVsZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBNZXNzYWdlcyBmcm9tIFwiLi4vTWVzc2FnZXMvTWVzc2FnZXNcIjtcclxuaW1wb3J0IElucHV0Qm94IGZyb20gXCIuLi9JbnB1dEJveC9JbnB1dEJveFwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7YXhpb3NJbnN0YW5jZX0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQge3NldExvYWRpbmd9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnNcIjtcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5pbXBvcnQgTGVmdEFycm93IGZyb20gJy4uLy4uL3NyYy9hc3NldHMvc3ZnL2xlZnQtYXJyb3cuc3ZnJ1xyXG5pbXBvcnQgdXNlV2luZG93RGltZW5zaW9ucyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93RGltZW5zaW9uc1wiO1xyXG5pbXBvcnQge2NsZWFyT3RoZXJVc2VyfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9vdGhlclVzZXJBY3Rpb25cIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcblxyXG5mdW5jdGlvbiBNZXNzYWdlRmllbGQoKSB7XHJcbiAgICBjb25zdCB7b3RoZXJfdXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5vdGhlclVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge3VzZXJ9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlclJlZHVjZXIpXHJcbiAgICBjb25zdCB7bG9hZGluZ30gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3Qgc29ja2V0ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYgKG90aGVyX3VzZXIudXNlcm5hbWUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbycpXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgV2ViU29ja2V0KGB3czovLzEyNy4wLjAuMTo4MDAwL3dzL2NoYXQvJHtvdGhlcl91c2VyLnVzZXJuYW1lfS8/JHt1c2VyLmlkfWApO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtvdGhlcl91c2VyXSk7XHJcbiAgICBjb25zdCB7d2lkdGh9ID0gdXNlV2luZG93RGltZW5zaW9ucygpO1xyXG4gICAgY29uc3QgZGl2UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXQpIHtcclxuICAgICAgICAgICAgc29ja2V0LnNlbmQobWVzc2FnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICB1c2VNZW1vKCgpID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXJfdXNlcikubGVuZ3RoID4gMCAmJiBzb2NrZXQpIHtcclxuICAgICAgICAgICAgc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCBKU09OLnBhcnNlKGV2ZW50LmRhdGEpXSlcclxuICAgICAgICAgICAgICAgIGRpdlJlZi5jdXJyZW50PT09bnVsbHx8ZGl2UmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVzc2FnZXNdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0X21lc3NhZ2VzX2Zyb21fZGIoKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zSW5zdGFuY2UuZ2V0KGBhcGkvdjEvY2hhdC8ke3VzZXIudXNlcm5hbWV9Lz9vdGhlcj0ke290aGVyX3VzZXIudXNlcm5hbWV9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRNZXNzYWdlcyhyZXMuZGF0YSlcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldF9tZXNzYWdlc19mcm9tX2RiKClcclxuICAgIH0sIFtvdGhlcl91c2VyXSlcclxuICAgIGNvbnN0IG9uQmFja0NsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5jbG9zZSgpXHJcbiAgICAgICAgZGlzcGF0Y2goY2xlYXJPdGhlclVzZXIoKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbG9hZGluZyA/IDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5sb2FkaW5nX3dyYXBwZXIsIFwiZ2xhc3NcIl0uam9pbignICcpfT48TG9hZGluZ1NwaW5uZXIvPlxyXG4gICAgPC9kaXY+IDogT2JqZWN0LmtleXMob3RoZXJfdXNlcikubGVuZ3RoID4gMCA/IDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJfaW5mb30+XHJcbiAgICAgICAgICAgIHt3aWR0aCA8IDY1MCA/XHJcbiAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25CYWNrQ2xpY2soKVxyXG4gICAgICAgICAgICAgICAgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnR9PjxMZWZ0QXJyb3cvPjwvaT4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NTB9IGhlaWdodD17NTB9IGFsdD17b3RoZXJfdXNlci51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgIHNyYz17b3RoZXJfdXNlci5hdmF0YXIgIT09IG51bGwgPyBvdGhlcl91c2VyLmF2YXRhciA6ICcvaW1hZ2VzL3VzZXIucG5nJ30vPlxyXG4gICAgICAgICAgICA8aDE+QHtvdGhlcl91c2VyLnVzZXJuYW1lfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE1lc3NhZ2VzIGRpdlJlZj17ZGl2UmVmfSBtZXNzYWdlcz17bWVzc2FnZXN9Lz5cclxuICAgICAgICA8SW5wdXRCb3ggc2VuZE1lc3NhZ2U9e3NlbmRNZXNzYWdlfS8+XHJcbiAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfS8+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRmllbGQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlTWVtbyIsImNsYXNzZXMiLCJNZXNzYWdlcyIsIklucHV0Qm94IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImF4aW9zSW5zdGFuY2UiLCJzZXRMb2FkaW5nIiwiTG9hZGluZ1NwaW5uZXIiLCJMZWZ0QXJyb3ciLCJ1c2VXaW5kb3dEaW1lbnNpb25zIiwiY2xlYXJPdGhlclVzZXIiLCJJbWFnZSIsIk1lc3NhZ2VGaWVsZCIsInN0YXRlIiwib3RoZXJVc2VyUmVkdWNlciIsIm90aGVyX3VzZXIiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJzaW1wbGVSZWR1Y2VyIiwibG9hZGluZyIsImRpc3BhdGNoIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInNvY2tldCIsInVzZXJuYW1lIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsIldlYlNvY2tldCIsImlkIiwid2lkdGgiLCJkaXZSZWYiLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJzZW5kIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiZ2V0X21lc3NhZ2VzX2Zyb21fZGIiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZXJyIiwib25CYWNrQ2xpY2siLCJjbG9zZSIsImxvYWRpbmdfd3JhcHBlciIsImpvaW4iLCJ3cmFwcGVyIiwidXNlcl9pbmZvIiwibGVmdCIsImF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=