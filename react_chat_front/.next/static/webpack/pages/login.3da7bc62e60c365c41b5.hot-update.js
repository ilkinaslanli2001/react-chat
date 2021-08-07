self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": function() { return /* binding */ axiosInstance; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "register": function() { return /* binding */ register; }
/* harmony export */ });
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var BASE_URL = 'http://127.0.0.1:8000';
var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default().create({
  baseURL: BASE_URL
});
axiosInstance.interceptors.request.use(function (config) {
  var token = localStorage.getItem('access');

  if (token) {
    config.headers['Authorization'] = 'JWT ' + token;
  }

  return config;
}, function (error) {
  Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url === "/auth/jwt/refresh/") {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');
    return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    var refreshToken = localStorage.getItem('refresh');
    return axiosInstance.post('/auth/jwt/refresh/', {
      "refresh": refreshToken
    }).then(function (res) {
      if (res.status === 200) {
        localStorage.setItem('access', res.data.access);
        axiosInstance.defaults.headers.common['Authorization'] = 'JWT ' + res.data.access;
        return axiosInstance(originalRequest);
      } else next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');
    });
  }

  return Promise.reject(error);
});
var login = /*#__PURE__*/function () {
  var _ref = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(params) {
    return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref2 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(resolve, reject) {
                return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(BASE_URL, "/auth/jwt/create/"), params).then( /*#__PURE__*/function () {
                          var _ref3 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(response) {
                            return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    localStorage.setItem('refresh', response.data.refresh);
                                    localStorage.setItem('access', response.data.access);
                                    resolve({
                                      status: response.status
                                    });

                                  case 3:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));

                          return function (_x4) {
                            return _ref3.apply(this, arguments);
                          };
                        }())["catch"](function (error) {
                          reject({
                            status: error.response.status,
                            message: error.response.data.detail
                          });
                        });

                      case 2:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x2, _x3) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function login(_x) {
    return _ref.apply(this, arguments);
  };
}();
var register = /*#__PURE__*/function () {
  var _ref4 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee6(params) {
    return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
              var _ref5 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(resolve, reject) {
                return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return axios__WEBPACK_IMPORTED_MODULE_2___default().post("".concat(BASE_URL, "/auth/users/"), params).then( /*#__PURE__*/function () {
                          var _ref6 = (0,F_react_chat_react_chat_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(response) {
                            return F_react_chat_react_chat_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    resolve({
                                      status: response.status
                                    });

                                  case 1:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4);
                          }));

                          return function (_x8) {
                            return _ref6.apply(this, arguments);
                          };
                        }())["catch"](function (error) {
                          reject({
                            status: error.response.status,
                            errors: error.response.data
                          });
                        });

                      case 2:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x6, _x7) {
                return _ref5.apply(this, arguments);
              };
            }()));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function register(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBpLmpzIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJvcmlnaW5hbFJlcXVlc3QiLCJzdGF0dXMiLCJ1cmwiLCJSb3V0ZXIiLCJfcmV0cnkiLCJyZWZyZXNoVG9rZW4iLCJwb3N0IiwidGhlbiIsInJlcyIsInNldEl0ZW0iLCJkYXRhIiwiYWNjZXNzIiwiZGVmYXVsdHMiLCJjb21tb24iLCJsb2dpbiIsInBhcmFtcyIsInJlc29sdmUiLCJyZWZyZXNoIiwibWVzc2FnZSIsImRldGFpbCIsInJlZ2lzdGVyIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBLElBQU1BLFFBQVEsR0FBRyx1QkFBakI7QUFHTyxJQUFNQyxhQUFhLEdBQUdDLG1EQUFBLENBQWE7QUFBQ0MsU0FBTyxFQUFFSDtBQUFWLENBQWIsQ0FBdEI7QUFFUEMsYUFBYSxDQUFDRyxZQUFkLENBQTJCQyxPQUEzQixDQUFtQ0MsR0FBbkMsQ0FDSSxVQUFBQyxNQUFNLEVBQUk7QUFFTixNQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixRQUFyQixDQUFkOztBQUNBLE1BQUlGLEtBQUosRUFBVztBQUNQRCxVQUFNLENBQUNJLE9BQVAsQ0FBZSxlQUFmLElBQWtDLFNBQVNILEtBQTNDO0FBQ0g7O0FBRUQsU0FBT0QsTUFBUDtBQUNILENBVEwsRUFVSSxVQUFBSyxLQUFLLEVBQUk7QUFDTEMsU0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWY7QUFDSCxDQVpMO0FBY0FYLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQlcsUUFB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LE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUNiLElBQUlsQixPQUFKO0FBQUEsd1JBQVksa0JBQU9tQixPQUFQLEVBQWdCbEIsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ1RaLGlEQUFBLFdBQWNGLFFBQWQsbUJBQXNDK0IsTUFBdEMsRUFBOENSLElBQTlDO0FBQUEsb1NBQW1ELGtCQUFNUixRQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckRpQiwyQ0FBTyxDQUFDO0FBQUNmLDRDQUFNLEVBQUVGLFFBQVEsQ0FBQ0U7QUFBbEIscUNBQUQsQ0FBUDs7QUFEcUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQW5EOztBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVHLFVBQUFMLEtBQUssRUFBSTtBQUNkRSxnQ0FBTSxDQUFDO0FBQUNHLGtDQUFNLEVBQUVMLEtBQUssQ0FBQ0csUUFBTixDQUFlRSxNQUF4QjtBQUFnQ29CLGtDQUFNLEVBQUV6QixLQUFLLENBQUNHLFFBQU4sQ0FBZVc7QUFBdkQsMkJBQUQsQ0FBTjtBQUNILHlCQUpLLENBRFM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFSVSxRQUFRO0FBQUE7QUFBQTtBQUFBLEdBQWQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uM2RhN2JjNjJlNjBjMzY1YzQxYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMCdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7YmFzZVVSTDogQkFTRV9VUkx9KVxyXG5cclxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgICBjb25maWcgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3MnKVxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBjb25maWcuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0pXVCAnICsgdG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfSxcclxuICAgIGVycm9yID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH0pO1xyXG5cclxuYXhpb3NJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlXHJcbn0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gZXJyb3IuY29uZmlnO1xyXG5cclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSAmJiBvcmlnaW5hbFJlcXVlc3QudXJsID09PVxyXG4gICAgICAgIGAvYXV0aC9qd3QvcmVmcmVzaC9gKSB7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxICYmICFvcmlnaW5hbFJlcXVlc3QuX3JldHJ5KSB7XHJcblxyXG4gICAgICAgIG9yaWdpbmFsUmVxdWVzdC5fcmV0cnkgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoJylcclxuICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZS5wb3N0KCcvYXV0aC9qd3QvcmVmcmVzaC8nLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInJlZnJlc2hcIjogcmVmcmVzaFRva2VuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2VzcycsIHJlcy5kYXRhLmFjY2VzcylcclxuICAgICAgICAgICAgICAgICAgICBheGlvc0luc3RhbmNlLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ10gPSAnSldUICcgKyByZXMuZGF0YS5hY2Nlc3M7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2Uob3JpZ2luYWxSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG59KTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRV9VUkx9L2F1dGgvand0L2NyZWF0ZS9gLCBwYXJhbXMpLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlZnJlc2gnLCByZXNwb25zZS5kYXRhLnJlZnJlc2gpXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCByZXNwb25zZS5kYXRhLmFjY2VzcylcclxuICAgICAgICAgICAgcmVzb2x2ZSh7c3RhdHVzOiByZXNwb25zZS5zdGF0dXN9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHtzdGF0dXM6IGVycm9yLnJlc3BvbnNlLnN0YXR1cywgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWx9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXIgPSBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRV9VUkx9L2F1dGgvdXNlcnMvYCwgcGFyYW1zKS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7c3RhdHVzOiByZXNwb25zZS5zdGF0dXN9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHtzdGF0dXM6IGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3JzOiBlcnJvci5yZXNwb25zZS5kYXRhfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==