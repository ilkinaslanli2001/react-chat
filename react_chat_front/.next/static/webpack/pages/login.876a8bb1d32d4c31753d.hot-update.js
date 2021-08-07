self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./store/actions/userActions.js":
/*!**************************************!*\
  !*** ./store/actions/userActions.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUser": function() { return /* binding */ setUser; },
/* harmony export */   "logout": function() { return /* binding */ logout; },
/* harmony export */   "updateUser": function() { return /* binding */ updateUser; }
/* harmony export */ });
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api */ "./api.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var setUser = function setUser() {
  return /*#__PURE__*/function () {
    var _ref = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(dispatch) {
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _api__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.get('/auth/users/me').then( /*#__PURE__*/function () {
                var _ref2 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(response) {
                  return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _api__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.get("/api/v1/users/profile/".concat(response.data.id)).then( /*#__PURE__*/function () {
                            var _ref3 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(result) {
                              return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return dispatch({
                                        type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_USER_SUCCESS,
                                        payload: result.data
                                      });

                                    case 2:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee);
                            }));

                            return function (_x3) {
                              return _ref3.apply(this, arguments);
                            };
                          }());

                        case 2:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }())["catch"](function (error) {
                if (error.response) {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_USER_ERROR,
                    payload: {
                      status: error.response.status,
                      message: error.response.data.detail
                    }
                  });
                } else {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_USER_ERROR,
                    payload: {
                      error: error
                    }
                  });
                }
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var logout = function logout() {
  return /*#__PURE__*/function () {
    var _ref4 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(dispatch) {
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              localStorage.removeItem('access');
              localStorage.removeItem('refresh');
              dispatch({
                type: _types__WEBPACK_IMPORTED_MODULE_2__.LOGOUT,
                payload: {}
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }();
};
var updateUser = function updateUser(id, params) {
  return /*#__PURE__*/function () {
    var _ref5 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(dispatch) {
      return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _api__WEBPACK_IMPORTED_MODULE_3__.axiosInstance.put("/api/v1/users/profile/".concat(id, "/"), params).then(function (response) {
                dispatch({
                  type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_USER_SUCCESS,
                  payload: response.data
                });
              })["catch"](function (error) {
                if (error.response) {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_USER_ERROR,
                    payload: error.response.data
                  });
                } else {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__.SET_USER_ERROR,
                    payload: {
                      error: error
                    }
                  });
                }
              });

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function (_x5) {
      return _ref5.apply(this, arguments);
    };
  }();
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRVc2VyIiwiZGlzcGF0Y2giLCJheGlvc0luc3RhbmNlIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImlkIiwicmVzdWx0IiwidHlwZSIsIlNFVF9VU0VSX1NVQ0NFU1MiLCJwYXlsb2FkIiwiZXJyb3IiLCJTRVRfVVNFUl9FUlJPUiIsInN0YXR1cyIsIm1lc3NhZ2UiLCJkZXRhaWwiLCJsb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwidXBkYXRlVXNlciIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBR08sSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQTtBQUFBLDZRQUFNLGtCQUFNQyxRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVuQkMsbURBQUEsQ0FBa0IsZ0JBQWxCLEVBQW9DQyxJQUFwQztBQUFBLDBSQUF5QyxrQkFBT0MsUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FFckNGLG1EQUFBLGlDQUEyQ0UsUUFBUSxDQUFDQyxJQUFULENBQWNDLEVBQXpELEdBQStESCxJQUEvRDtBQUFBLHNTQUFvRSxpQkFBT0ksTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FFaEVOLFFBQVEsQ0FBQztBQUNYTyw0Q0FBSSxFQUFFQyxvREFESztBQUVYQywrQ0FBTyxFQUFFSCxNQUFNLENBQUNGO0FBRkwsdUNBQUQsQ0FGd0Q7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXBFOztBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUZxQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBekM7O0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBVUcsVUFBQU0sS0FBSyxFQUFJO0FBRVYsb0JBQUlBLEtBQUssQ0FBQ1AsUUFBVixFQUFvQjtBQUNoQkgsMEJBQVEsQ0FBQztBQUNMTyx3QkFBSSxFQUFFSSxrREFERDtBQUVMRiwyQkFBTyxFQUFFO0FBQUNHLDRCQUFNLEVBQUVGLEtBQUssQ0FBQ1AsUUFBTixDQUFlUyxNQUF4QjtBQUFnQ0MsNkJBQU8sRUFBRUgsS0FBSyxDQUFDUCxRQUFOLENBQWVDLElBQWYsQ0FBb0JVO0FBQTdEO0FBRkosbUJBQUQsQ0FBUjtBQUtILGlCQU5ELE1BTU87QUFDSGQsMEJBQVEsQ0FBQztBQUNMTyx3QkFBSSxFQUFFSSxrREFERDtBQUVMRiwyQkFBTyxFQUFFO0FBQUNDLDJCQUFLLEVBQUVBO0FBQVI7QUFGSixtQkFBRCxDQUFSO0FBSUg7QUFFSixlQXpCQyxDQUZtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBaEI7QUFnQ0EsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQTtBQUFBLDhRQUFNLGtCQUFNZixRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeEJnQiwwQkFBWSxDQUFDQyxVQUFiLENBQXdCLFFBQXhCO0FBQ0FELDBCQUFZLENBQUNDLFVBQWIsQ0FBd0IsU0FBeEI7QUFFQWpCLHNCQUFRLENBQUM7QUFDTE8sb0JBQUksRUFBRVcsMENBREQ7QUFFTFQsdUJBQU8sRUFBRTtBQUZKLGVBQUQsQ0FBUjs7QUFKd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQWY7QUFVQSxJQUFNVSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDZCxFQUFELEVBQUtlLE1BQUw7QUFBQTtBQUFBLDhRQUFnQixrQkFBTXBCLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV0Q0MsaUVBQUEsaUNBQTJDSSxFQUEzQyxRQUFrRGUsTUFBbEQsRUFDS2xCLElBREwsQ0FDVSxVQUFDQyxRQUFELEVBQWM7QUFFaEJILHdCQUFRLENBQUM7QUFDTE8sc0JBQUksRUFBRUMsb0RBREQ7QUFFTEMseUJBQU8sRUFBRU4sUUFBUSxDQUFDQztBQUZiLGlCQUFELENBQVI7QUFJSCxlQVBMLFdBT2EsVUFBQU0sS0FBSyxFQUFJO0FBRWxCLG9CQUFJQSxLQUFLLENBQUNQLFFBQVYsRUFBb0I7QUFDaEJILDBCQUFRLENBQUM7QUFDTE8sd0JBQUksRUFBRUksa0RBREQ7QUFFTEYsMkJBQU8sRUFBRUMsS0FBSyxDQUFDUCxRQUFOLENBQWVDO0FBRm5CLG1CQUFELENBQVI7QUFLSCxpQkFORCxNQU1PO0FBQ0hKLDBCQUFRLENBQUM7QUFDTE8sd0JBQUksRUFBRUksa0RBREQ7QUFFTEYsMkJBQU8sRUFBRTtBQUFDQywyQkFBSyxFQUFFQTtBQUFSO0FBRkosbUJBQUQsQ0FBUjtBQUlIO0FBR0osZUF2QkQ7O0FBRnNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uODc2YThiYjFkMzJkNGMzMTc1M2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBTRVRfVVNFUl9TVUNDRVNTLCBTRVRfVVNFUl9FUlJPUiwgVVBEQVRFX1VTRVIsIExPR09VVFxyXG5cclxufSBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IHtheGlvc0luc3RhbmNlfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoJy9hdXRoL3VzZXJzL21lJykudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYC9hcGkvdjEvdXNlcnMvcHJvZmlsZS8ke3Jlc3BvbnNlLmRhdGEuaWR9YCkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtzdGF0dXM6IGVycm9yLnJlc3BvbnNlLnN0YXR1cywgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9FUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7ZXJyb3I6IGVycm9yfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2VzcycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmcmVzaCcpXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPR09VVCxcclxuICAgICAgICBwYXlsb2FkOiB7fVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAoaWQsIHBhcmFtcykgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgXHJcbiAgICBheGlvc0luc3RhbmNlLnB1dChgL2FwaS92MS91c2Vycy9wcm9maWxlLyR7aWR9L2AsIHBhcmFtcylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0VUX1VTRVJfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge2Vycm9yOiBlcnJvcn1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9