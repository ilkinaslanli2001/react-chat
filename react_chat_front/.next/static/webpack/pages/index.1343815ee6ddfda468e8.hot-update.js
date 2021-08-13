self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MessageField/MessageField.js":
/*!*************************************************!*\
  !*** ./components/MessageField/MessageField.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messageField.module.css */ "./components/MessageField/messageField.module.css");
/* harmony import */ var _messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_messageField_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Messages_Messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Messages/Messages */ "./components/Messages/Messages.js");
/* harmony import */ var _InputBox_InputBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBox/InputBox */ "./components/InputBox/InputBox.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/assets/svg/left-arrow.svg */ "./src/assets/svg/left-arrow.svg");
/* harmony import */ var _src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useWindowDimensions */ "./hooks/useWindowDimensions.js");
/* harmony import */ var _store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../store/actions/otherUserAction */ "./store/actions/otherUserAction.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\MessageField\\MessageField.js",
    _s = $RefreshSig$();














function MessageField() {
  _s();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.otherUserReducer;
  }),
      other_user = _useSelector.other_user;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.userReducer;
  }),
      user = _useSelector2.user;

  var _useSelector3 = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.simpleReducer;
  }),
      loading = _useSelector3.loading;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(),
      socket = _useState[0],
      setSocket = _useState[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useWindowDimensions = (0,_hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_12__.default)(),
      width = _useWindowDimensions.width;

  var myRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);

  var sendMessage = /*#__PURE__*/function () {
    var _ref = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(message) {
      return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (socket) {
                socket.send(message);
                console.log(myRef);
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendMessage(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (Object.keys(other_user).length > 0) {
      var b = new WebSocket("ws://127.0.0.1:8000/ws/chat/".concat(other_user.username, "/?").concat(user.id));

      b.onmessage = function (event) {
        setMessages([].concat((0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(messages), [JSON.parse(event.data)]));
        myRef.current.scrollIntoView({
          behavior: "smooth"
        });
        b.close();
      };

      setSocket(b);
    }
  }, [messages]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function get_messages_from_db() {
      return _get_messages_from_db.apply(this, arguments);
    }

    function _get_messages_from_db() {
      _get_messages_from_db = (0,C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Ilkin_Documents_GitHub_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__.setLoading)(true));
                _context2.next = 3;
                return _api__WEBPACK_IMPORTED_MODULE_8__.axiosInstance.get("api/v1/chat/".concat(user.username, "/?other=").concat(other_user.username)).then(function (res) {
                  setMessages(res.data);
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__.setLoading)(false));
                })["catch"](function (err) {
                  dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__.setLoading)(false));
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _get_messages_from_db.apply(this, arguments);
    }

    get_messages_from_db();
  }, [other_user]);

  var onBackClick = function onBackClick() {
    socket.close();
    dispatch((0,_store_actions_otherUserAction__WEBPACK_IMPORTED_MODULE_13__.clearOtherUser)());
  };

  return loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: [(_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().loading_wrapper), "glass"].join(' '),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 84
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 22
  }, this) : Object.keys(other_user).length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().user_info),
      children: [width < 650 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: function onClick() {
          onBackClick();
        },
        className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().left),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_left_arrow_svg__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 45
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_14___default()), {
        width: 50,
        height: 50,
        alt: other_user.username,
        src: other_user.avatar !== null ? other_user.avatar : '/images/user.png'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: ["@", other_user.username]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Messages_Messages__WEBPACK_IMPORTED_MODULE_5__.default, {
      myRef: myRef,
      messages: messages
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputBox_InputBox__WEBPACK_IMPORTED_MODULE_6__.default, {
      sendMessage: sendMessage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 51
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_messageField_module_css__WEBPACK_IMPORTED_MODULE_15___default().wrapper)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 14
  }, this);
}

_s(MessageField, "QCEZHAPUbhw++to0Cg01JjURxwU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch, _hooks_useWindowDimensions__WEBPACK_IMPORTED_MODULE_12__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NZXNzYWdlRmllbGQvTWVzc2FnZUZpZWxkLmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VGaWVsZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJvdGhlclVzZXJSZWR1Y2VyIiwib3RoZXJfdXNlciIsInVzZXJSZWR1Y2VyIiwidXNlciIsInNpbXBsZVJlZHVjZXIiLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJzb2NrZXQiLCJzZXRTb2NrZXQiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aWR0aCIsIm15UmVmIiwidXNlUmVmIiwic2VuZE1lc3NhZ2UiLCJtZXNzYWdlIiwic2VuZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiYiIsIldlYlNvY2tldCIsInVzZXJuYW1lIiwiaWQiLCJvbm1lc3NhZ2UiLCJldmVudCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImNsb3NlIiwiZ2V0X21lc3NhZ2VzX2Zyb21fZGIiLCJzZXRMb2FkaW5nIiwiYXhpb3NJbnN0YW5jZSIsInRoZW4iLCJyZXMiLCJlcnIiLCJvbkJhY2tDbGljayIsImNsZWFyT3RoZXJVc2VyIiwiY2xhc3NlcyIsImpvaW4iLCJ1bmRlZmluZWQiLCJhdmF0YXIiLCJ3cmFwcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEscUJBQ0NDLHdEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsZ0JBQVY7QUFB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d0IsY0FBUSxFQUFFSjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVDBDLGVBVTFDLDhEQUFDLHVEQUFEO0FBQVcsaUJBQVcsRUFBRU07QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVYwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBckMsZ0JBV0E7QUFBSyxhQUFTLEVBQUU4QiwwRUFBZUk7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVpUO0FBY0g7O0dBcEVRdEQsWTtVQUNnQkMsb0QsRUFFTkEsb0QsRUFDR0Esb0QsRUFFRFksb0QsRUFFREcsZ0U7OztLQVJYaEIsWTtBQXNFVCwrREFBZUEsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMzQzODE1ZWU2ZGRmZGE0NjhlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9tZXNzYWdlRmllbGQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTWVzc2FnZXMgZnJvbSBcIi4uL01lc3NhZ2VzL01lc3NhZ2VzXCI7XHJcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwiLi4vSW5wdXRCb3gvSW5wdXRCb3hcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge2F4aW9zSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuaW1wb3J0IHtzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9sZWZ0LWFycm93LnN2ZydcclxuaW1wb3J0IHVzZVdpbmRvd0RpbWVuc2lvbnMgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVdpbmRvd0RpbWVuc2lvbnNcIjtcclxuaW1wb3J0IHtjbGVhck90aGVyVXNlcn0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvb3RoZXJVc2VyQWN0aW9uXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5mdW5jdGlvbiBNZXNzYWdlRmllbGQoKSB7XHJcbiAgICBjb25zdCB7b3RoZXJfdXNlcn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5vdGhlclVzZXJSZWR1Y2VyKVxyXG5cclxuICAgIGNvbnN0IHt1c2VyfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IFtzb2NrZXQsIHNldFNvY2tldF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3Qge3dpZHRofSA9IHVzZVdpbmRvd0RpbWVuc2lvbnMoKTtcclxuICAgIGNvbnN0IG15UmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2UgPSBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoc29ja2V0KVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG15UmVmKVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob3RoZXJfdXNlcikubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBiID0gbmV3IFdlYlNvY2tldChgd3M6Ly8xMjcuMC4wLjE6ODAwMC93cy9jaGF0LyR7b3RoZXJfdXNlci51c2VybmFtZX0vPyR7dXNlci5pZH1gKTtcclxuICAgICAgICAgICAgYi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgSlNPTi5wYXJzZShldmVudC5kYXRhKV0pXHJcbiAgICAgICAgICAgICAgICBteVJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHtiZWhhdmlvcjogXCJzbW9vdGhcIn0pXHJcbiAgICAgICAgICAgICAgICBiLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRTb2NrZXQoYilcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVzc2FnZXNdKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRfbWVzc2FnZXNfZnJvbV9kYigpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYGFwaS92MS9jaGF0LyR7dXNlci51c2VybmFtZX0vP290aGVyPSR7b3RoZXJfdXNlci51c2VybmFtZX1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VzKHJlcy5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0X21lc3NhZ2VzX2Zyb21fZGIoKVxyXG4gICAgfSwgW290aGVyX3VzZXJdKVxyXG4gICAgY29uc3Qgb25CYWNrQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmNsb3NlKClcclxuICAgICAgICBkaXNwYXRjaChjbGVhck90aGVyVXNlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsb2FkaW5nID8gPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmxvYWRpbmdfd3JhcHBlciwgXCJnbGFzc1wiXS5qb2luKCcgJyl9PjxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICA8L2Rpdj4gOiBPYmplY3Qua2V5cyhvdGhlcl91c2VyKS5sZW5ndGggPiAwID8gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcl9pbmZvfT5cclxuICAgICAgICAgICAge3dpZHRoIDwgNjUwID9cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvbkJhY2tDbGljaygpXHJcbiAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMubGVmdH0+PExlZnRBcnJvdy8+PC9pPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PXtvdGhlcl91c2VyLnVzZXJuYW1lfSBzcmM9e290aGVyX3VzZXIuYXZhdGFyICE9PSBudWxsID8gb3RoZXJfdXNlci5hdmF0YXIgOiAnL2ltYWdlcy91c2VyLnBuZyd9Lz5cclxuICAgICAgICAgICAgPGgxPkB7b3RoZXJfdXNlci51c2VybmFtZX08L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxNZXNzYWdlcyBteVJlZj17bXlSZWZ9IG1lc3NhZ2VzPXttZXNzYWdlc30vPlxyXG4gICAgICAgIDxJbnB1dEJveCAgc2VuZE1lc3NhZ2U9e3NlbmRNZXNzYWdlfS8+XHJcbiAgICA8L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfS8+XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlRmllbGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==