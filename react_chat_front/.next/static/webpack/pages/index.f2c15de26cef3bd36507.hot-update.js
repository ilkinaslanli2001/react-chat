self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/InputBox/InputBox.js":
/*!*****************************************!*\
  !*** ./components/InputBox/InputBox.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inputBox_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inputBox.module.css */ "./components/InputBox/inputBox.module.css");
/* harmony import */ var _inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/assets/svg/send.svg */ "./src/assets/svg/send.svg");
/* harmony import */ var _src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/assets/svg/smiling.svg */ "./src/assets/svg/smiling.svg");
/* harmony import */ var _src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\InputBox\\InputBox.js",
    _s = $RefreshSig$();






var EmojiPicker = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "node_modules_emoji-picker-react_dist_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! emoji-picker-react */ "./node_modules/emoji-picker-react/dist/index.js", 23));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! emoji-picker-react */ "./node_modules/emoji-picker-react/dist/index.js")];
    },
    modules: ["..\\components\\InputBox\\InputBox.js -> " + 'emoji-picker-react']
  }
});
_c2 = EmojiPicker;

function InputBox(_ref) {
  _s();

  var sendMessage = _ref.sendMessage;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      emojiActive = _useState[0],
      setEmojiActive = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      message = _useState2[0],
      setMessage = _useState2[1];

  var onEmojiClick = function onEmojiClick(event, emojiObject) {
    var cursor = ref.current.selectionStart;
    var text = message.slice(0, cursor) + emojiObject.emoji + message.slice(cursor);
    setMessage(text);
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.key === 'Enter') {
      sendMessage(message);
      setEmojiActive(false);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().input_wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        onKeyDown: handleKeyDown,
        ref: ref,
        value: message,
        onChange: function onChange(event) {
          setMessage(event.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: function onClick() {
          setEmojiActive(!emojiActive);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_smiling_svg__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().emoji_wrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: [(_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().emoji_container), emojiActive ? (_inputBox_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : undefined].join(' '),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(EmojiPicker, {
            onEmojiClick: onEmojiClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        onClick: function onClick() {
          sendMessage(message), setMessage(""), setEmojiActive(false);
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_send_svg__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 20
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(InputBox, "q0cH2PZDF4VTT3aEHu3NKqLtbLA=");

_c3 = InputBox;
/* harmony default export */ __webpack_exports__["default"] = (InputBox);

var _c, _c2, _c3;

$RefreshReg$(_c, "EmojiPicker$dynamic");
$RefreshReg$(_c2, "EmojiPicker");
$RefreshReg$(_c3, "InputBox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dEJveC9JbnB1dEJveC5qcyJdLCJuYW1lcyI6WyJFbW9qaVBpY2tlciIsImR5bmFtaWMiLCJzc3IiLCJJbnB1dEJveCIsInNlbmRNZXNzYWdlIiwicmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJlbW9qaUFjdGl2ZSIsInNldEVtb2ppQWN0aXZlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJvbkVtb2ppQ2xpY2siLCJldmVudCIsImVtb2ppT2JqZWN0IiwiY3Vyc29yIiwiY3VycmVudCIsInNlbGVjdGlvblN0YXJ0IiwidGV4dCIsInNsaWNlIiwiZW1vamkiLCJoYW5kbGVLZXlEb3duIiwiZSIsImtleSIsImNsYXNzZXMiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSw2TkFBTjtBQUFBLENBQUQsRUFBcUM7QUFDNURDLEtBQUcsRUFBRSxLQUR1RDtBQUFBO0FBQUE7QUFBQSxrQ0FBdkIsMkVBQXVCO0FBQUE7QUFBQSw0REFBdkIsb0JBQXVCO0FBQUE7QUFBQSxDQUFyQyxDQUEzQjtNQUFNRixXOztBQUlOLFNBQVNHLFFBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7QUFFN0IsTUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxDQUFDLElBQUQsQ0FBbEI7O0FBRjZCLGtCQUdTQywrQ0FBUSxDQUFDLEtBQUQsQ0FIakI7QUFBQSxNQUd0QkMsV0FIc0I7QUFBQSxNQUdUQyxjQUhTOztBQUFBLG1CQUlDRiwrQ0FBUSxDQUFDLEVBQUQsQ0FKVDtBQUFBLE1BSXRCRyxPQUpzQjtBQUFBLE1BSWJDLFVBSmE7O0FBTTdCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBUUMsV0FBUixFQUF3QjtBQUN6QyxRQUFNQyxNQUFNLEdBQUdWLEdBQUcsQ0FBQ1csT0FBSixDQUFZQyxjQUEzQjtBQUNBLFFBQU1DLElBQUksR0FBR1IsT0FBTyxDQUFDUyxLQUFSLENBQWMsQ0FBZCxFQUFpQkosTUFBakIsSUFBMkJELFdBQVcsQ0FBQ00sS0FBdkMsR0FBK0NWLE9BQU8sQ0FBQ1MsS0FBUixDQUFjSixNQUFkLENBQTVEO0FBQ0FKLGNBQVUsQ0FBQ08sSUFBRCxDQUFWO0FBQ0gsR0FKRDs7QUFLQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBTztBQUN6QixRQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ25CbkIsaUJBQVcsQ0FBQ00sT0FBRCxDQUFYO0FBRUFELG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0g7QUFDSixHQU5EOztBQU9BLHNCQUNJO0FBQUssYUFBUyxFQUFFZSxxRUFBaEI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBRUEsMkVBQWhCO0FBQUEsOEJBQ0k7QUFBTyxpQkFBUyxFQUFFSCxhQUFsQjtBQUFpQyxXQUFHLEVBQUVoQixHQUF0QztBQUEyQyxhQUFLLEVBQUVLLE9BQWxEO0FBQTJELGdCQUFRLEVBQUUsa0JBQUNHLEtBQUQsRUFBVztBQUM1RUYsb0JBQVUsQ0FBQ0UsS0FBSyxDQUFDWSxNQUFOLENBQWFDLEtBQWQsQ0FBVjtBQUNIO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBRyxlQUFPLEVBQUUsbUJBQU07QUFDZGpCLHdCQUFjLENBQUMsQ0FBQ0QsV0FBRixDQUFkO0FBQ0gsU0FGRDtBQUFBLCtCQUVHLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFPSTtBQUFLLGlCQUFTLEVBQUVnQiwyRUFBaEI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUUsQ0FBQ0EsNkVBQUQsRUFBMEJoQixXQUFXLEdBQUdnQixvRUFBSCxHQUFvQkcsU0FBekQsRUFBb0VDLElBQXBFLENBQXlFLEdBQXpFLENBQWhCO0FBQUEsaUNBQ0ksOERBQUMsV0FBRDtBQUFhLHdCQUFZLEVBQUVoQjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSixlQVdJO0FBQUcsZUFBTyxFQUFFLG1CQUFNO0FBQ2RSLHFCQUFXLENBQUNNLE9BQUQsQ0FBWCxFQUF1QkMsVUFBVSxDQUFDLEVBQUQsQ0FBakMsRUFBdUNGLGNBQWMsQ0FBQyxLQUFELENBQXJEO0FBQ0gsU0FGRDtBQUFBLCtCQUVHLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztHQXJDUU4sUTs7TUFBQUEsUTtBQXVDVCwrREFBZUEsUUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMmMxNWRlMjZjZWYzYmQzNjUwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2lucHV0Qm94Lm1vZHVsZS5jc3MnXHJcbmltcG9ydCBUZWxlZ3JhbUljb24gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvc2VuZC5zdmcnXHJcbmltcG9ydCBFbW9qaUxvZ28gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvc21pbGluZy5zdmcnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuXHJcblxyXG5jb25zdCBFbW9qaVBpY2tlciA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdlbW9qaS1waWNrZXItcmVhY3QnKSwge1xyXG4gICAgc3NyOiBmYWxzZSxcclxufSlcclxuXHJcbmZ1bmN0aW9uIElucHV0Qm94KHtzZW5kTWVzc2FnZX0pIHtcclxuXHJcbiAgICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbZW1vamlBY3RpdmUsIHNldEVtb2ppQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBjb25zdCBvbkVtb2ppQ2xpY2sgPSAoZXZlbnQsIGVtb2ppT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3Vyc29yID0gcmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IG1lc3NhZ2Uuc2xpY2UoMCwgY3Vyc29yKSArIGVtb2ppT2JqZWN0LmVtb2ppICsgbWVzc2FnZS5zbGljZShjdXJzb3IpO1xyXG4gICAgICAgIHNldE1lc3NhZ2UodGV4dCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgc2VuZE1lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0RW1vamlBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXRfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufSByZWY9e3JlZn0gdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFbW9qaUFjdGl2ZSghZW1vamlBY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB9fT48RW1vamlMb2dvLz48L2k+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbW9qaV93cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMuZW1vamlfY29udGFpbmVyLCBlbW9qaUFjdGl2ZSA/IGNsYXNzZXMuYWN0aXZlIDogdW5kZWZpbmVkXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RW1vamlQaWNrZXIgb25FbW9qaUNsaWNrPXtvbkVtb2ppQ2xpY2t9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRNZXNzYWdlKG1lc3NhZ2UpICwgc2V0TWVzc2FnZShcIlwiKSwgc2V0RW1vamlBY3RpdmUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICB9fT48VGVsZWdyYW1JY29uLz48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCb3g7Il0sInNvdXJjZVJvb3QiOiIifQ==