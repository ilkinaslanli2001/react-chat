(function() {
var exports = {};
exports.id = "pages/settings";
exports.ids = ["pages/settings"];
exports.modules = {

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": function() { return /* binding */ axiosInstance; },
/* harmony export */   "login": function() { return /* binding */ login; },
/* harmony export */   "register": function() { return /* binding */ register; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


const BASE_URL = 'http://127.0.0.1:8000';
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: BASE_URL
});
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('access');

  if (token) {
    config.headers['Authorization'] = 'JWT ' + token;
  }

  return config;
}, error => {
  Promise.reject(error);
});
axiosInstance.interceptors.response.use(response => {
  return response;
}, function (error) {
  const originalRequest = error.config;

  if (error.response.status === 401 && originalRequest.url === `/auth/jwt/refresh/`) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
    return Promise.reject(error);
  }

  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const refreshToken = localStorage.getItem('refresh');
    return axiosInstance.post('/auth/jwt/refresh/', {
      "refresh": refreshToken
    }).then(res => {
      if (res.status === 200) {
        localStorage.setItem('access', res.data.access);
        axiosInstance.defaults.headers.common['Authorization'] = 'JWT ' + res.data.access;
        return axiosInstance(originalRequest);
      } else next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
    });
  }

  return Promise.reject(error);
});
const login = async params => {
  return new Promise(async (resolve, reject) => {
    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/auth/jwt/create/`, params).then(async response => {
      localStorage.setItem('refresh', response.data.refresh);
      localStorage.setItem('access', response.data.access);
      resolve({
        status: response.status
      });
    }).catch(error => {
      reject({
        status: error.response.status,
        message: error.response.data.detail
      });
    });
  });
};
const register = async params => {
  return new Promise(async (resolve, reject) => {
    await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE_URL}/auth/users/`, params).then(async response => {
      resolve({
        status: response.status
      });
    }).catch(error => {
      reject({
        status: error.response.status,
        errors: error.response.data
      });
    });
  });
};

/***/ }),

/***/ "./components/FullLoading/Loading.js":
/*!*******************************************!*\
  !*** ./components/FullLoading/Loading.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullLoading.module.css */ "./components/FullLoading/fullLoading.module.css");
/* harmony import */ var _fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\FullLoading\\Loading.js";




function Loading(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/LoadingSpinner/LoadingSpinner.js":
/*!*****************************************************!*\
  !*** ./components/LoadingSpinner/LoadingSpinner.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingSpinner.module.css */ "./components/LoadingSpinner/loadingSpinner.module.css");
/* harmony import */ var _loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\LoadingSpinner\\LoadingSpinner.js";



function LoadingSpinner() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().loader)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./components/WithAuth.js":
/*!********************************!*\
  !*** ./components/WithAuth.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FullLoading_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FullLoading/Loading */ "./components/FullLoading/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\WithAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const withAuth = (Component = null, options = {}) => {
  class AuthenticatedRoute extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", {
        loading: true
      });
    }

    componentDidMount() {
      if (this.props.isLoggedIn) {
        this.setState({
          loading: false
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push("/login");
      }
    }

    render() {
      if (this.state.loading) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FullLoading_Loading__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 24
        }, this);
      }

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, this.props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, this);
    }

  }

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(state => ({
    isLoggedIn: Object.keys(state.userReducer.user).length > 0
  }))(AuthenticatedRoute);
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

/***/ }),

/***/ "./components/Wrapper/Wrapper.js":
/*!***************************************!*\
  !*** ./components/Wrapper/Wrapper.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wrapper_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrapper.module.css */ "./components/Wrapper/wrapper.module.css");
/* harmony import */ var _wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\react-chat\\react_chat_front\\components\\Wrapper\\Wrapper.js";



function Wrapper({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: [(_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper)],
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_wrapper_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Wrapper);

/***/ }),

/***/ "./pages/settings/index.js":
/*!*********************************!*\
  !*** ./pages/settings/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.module.css */ "./pages/settings/settings.module.css");
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_settings_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/userActions */ "./store/actions/userActions.js");
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/assets/svg/change.svg */ "./src/assets/svg/change.svg");
/* harmony import */ var _src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/WithAuth */ "./components/WithAuth.js");
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");

var _jsxFileName = "F:\\react-chat\\react_chat_front\\pages\\settings\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Index(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const {
    user,
    errors
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.userReducer);
  const {
    loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.simpleReducer);
  const {
    0: userData,
    1: setUserData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    username: "",
    password: "",
    status: "",
    avatar: null
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    async function setData() {
      setUserData({
        username: user.username,
        status: user.status,
        avatar: user.avatar,
        password: ""
      });
    }

    setData();
  }, [user]);

  const onSaveClick = async () => {
    var params = {};

    if (user.username !== userData.username) {
      params.username = userData.username;
    }

    if (user.status !== userData.status) {
      params.status = userData.status;
    }

    if (user.avatar !== userData.avatar) {
      params.avatar = userData.avatar;
    }

    if (Object.keys(params).length !== 0) {
      params.username = userData.username;
      await dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_7__.setLoading)(true));
      await dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.updateUser)(user.id, params));
      await dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_7__.setLoading)(false));
    }
  };

  const onLogoutClick = async () => {
    await dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_7__.setFullLoading)(true));
    await dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.logout)());
    await dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_7__.setFullLoading)(false));
    next_router__WEBPACK_IMPORTED_MODULE_6___default().push('/login');
  };

  const onImageChange = async event => {
    const picture = event.target.files[0];
    setUserData(_objectSpread(_objectSpread({}, userData), {}, {
      avatar: URL.createObjectURL(picture)
    }));
    let form_data = new FormData();
    await form_data.append('avatar', picture);
    await form_data.append('username', userData.username);
    await dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_3__.updateUser)(user.id, form_data));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().container), 'glass'].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().img_wrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: userData.username,
            className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().profileImage), userData.avatar === null ? (_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().noProfileImage) : undefined].join(' '),
            src: userData.avatar !== null ? userData.avatar : '/images/user.png'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().select_image),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: onImageChange,
              type: "file",
              id: "img",
              name: "img",
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this), errors.avatar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: ["error", (_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().img_error)].join(' '),
          children: ["* ", errors.avatar[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          value: userData.username,
          onChange: event => {
            setUserData(_objectSpread(_objectSpread({}, userData), {}, {
              username: event.target.value
            }));
          },
          placeholder: 'Username'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 17
        }, this), errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: ["* ", errors.username[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 36
        }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          value: userData.status,
          onChange: event => {
            setUserData(_objectSpread(_objectSpread({}, userData), {}, {
              status: event.target.value
            }));
          },
          placeholder: 'Status'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onSaveClick,
          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 58
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SAVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 78
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onLogoutClick,
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_10___default().logoutBTN),
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 12
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_8__.default)(Index));

/***/ }),

/***/ "./store/actions/simpleActions.js":
/*!****************************************!*\
  !*** ./store/actions/simpleActions.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLoading": function() { return /* binding */ setLoading; },
/* harmony export */   "setFullLoading": function() { return /* binding */ setFullLoading; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");

const initialState = {
  loading: false
};
const setLoading = loadingState => async dispatch => {
  dispatch({
    type: loadingState ? _types__WEBPACK_IMPORTED_MODULE_0__.LOADING_TRUE : _types__WEBPACK_IMPORTED_MODULE_0__.LOADING_FALSE
  });
};
const setFullLoading = loadingState => async dispatch => {
  dispatch({
    type: loadingState ? _types__WEBPACK_IMPORTED_MODULE_0__.FULL_LOADING_TRUE : _types__WEBPACK_IMPORTED_MODULE_0__.FULL_LOADING_FALSE
  });
};

/***/ }),

/***/ "./store/actions/userActions.js":
/*!**************************************!*\
  !*** ./store/actions/userActions.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUser": function() { return /* binding */ setUser; },
/* harmony export */   "logout": function() { return /* binding */ logout; },
/* harmony export */   "updateUser": function() { return /* binding */ updateUser; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./api.js");


const setUser = () => async dispatch => {
  await _api__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.get('/auth/users/me').then(async response => {
    await _api__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.get(`/api/v1/users/profile/${response.data.id}`).then(async result => {
      await dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_SUCCESS,
        payload: result.data
      });
    });
  }).catch(error => {
    if (error.response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_ERROR,
        payload: {
          status: error.response.status,
          message: error.response.data.detail
        }
      });
    } else {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_ERROR,
        payload: {
          error: error
        }
      });
    }
  });
};
const logout = () => async dispatch => {
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT,
    payload: {}
  });
};
const updateUser = (id, params) => async dispatch => {
  _api__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.put(`/api/v1/users/profile/${id}/`, params).then(response => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_SUCCESS,
      payload: response.data
    });
  }).catch(error => {
    if (error.response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_ERROR,
        payload: error.response.data
      });
    } else {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_ERROR,
        payload: {
          error: error
        }
      });
    }
  });
};

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOADING_TRUE": function() { return /* binding */ LOADING_TRUE; },
/* harmony export */   "LOADING_FALSE": function() { return /* binding */ LOADING_FALSE; },
/* harmony export */   "SET_USER_SUCCESS": function() { return /* binding */ SET_USER_SUCCESS; },
/* harmony export */   "SET_USER_ERROR": function() { return /* binding */ SET_USER_ERROR; },
/* harmony export */   "LOGOUT": function() { return /* binding */ LOGOUT; },
/* harmony export */   "FULL_LOADING_TRUE": function() { return /* binding */ FULL_LOADING_TRUE; },
/* harmony export */   "FULL_LOADING_FALSE": function() { return /* binding */ FULL_LOADING_FALSE; },
/* harmony export */   "UPDATE_USER": function() { return /* binding */ UPDATE_USER; },
/* harmony export */   "SET_OTHER_USER": function() { return /* binding */ SET_OTHER_USER; },
/* harmony export */   "CLEAR_OTHER_USER": function() { return /* binding */ CLEAR_OTHER_USER; }
/* harmony export */ });
const LOADING_TRUE = 'LOADING_TRUE';
const LOADING_FALSE = 'LOADING_FALSE';
const SET_USER_SUCCESS = 'SET_USER_SUCCESS';
const SET_USER_ERROR = 'SET_USER_ERROR';
const LOGOUT = 'LOGOUT';
const FULL_LOADING_TRUE = 'FULL_LOADING_TRUE';
const FULL_LOADING_FALSE = 'FULL_LOADING_FALSE';
const UPDATE_USER = 'UPDATE_USER';
const SET_OTHER_USER = 'SET_OTHER_USER';
const CLEAR_OTHER_USER = 'CLEAR_OTHER_USER';

/***/ }),

/***/ "./components/FullLoading/fullLoading.module.css":
/*!*******************************************************!*\
  !*** ./components/FullLoading/fullLoading.module.css ***!
  \*******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "fullLoading_wrapper__1CV_t"
};


/***/ }),

/***/ "./components/LoadingSpinner/loadingSpinner.module.css":
/*!*************************************************************!*\
  !*** ./components/LoadingSpinner/loadingSpinner.module.css ***!
  \*************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"loader": "loadingSpinner_loader__3oZ5b",
	"spin": "loadingSpinner_spin__33dX9"
};


/***/ }),

/***/ "./components/Wrapper/wrapper.module.css":
/*!***********************************************!*\
  !*** ./components/Wrapper/wrapper.module.css ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "wrapper_wrapper__r34Hp",
	"container": "wrapper_container__G-CMM"
};


/***/ }),

/***/ "./pages/settings/settings.module.css":
/*!********************************************!*\
  !*** ./pages/settings/settings.module.css ***!
  \********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"wrapper": "settings_wrapper__m135K",
	"container": "settings_container__1eTSt",
	"block": "settings_block__d6V3N",
	"passwordContainer": "settings_passwordContainer__1yYNp",
	"img_wrapper": "settings_img_wrapper__3pXeC",
	"select_image": "settings_select_image__1k5v6",
	"img_error": "settings_img_error__3K7nm",
	"unactive": "settings_unactive__2e-Fi",
	"logoutBTN": "settings_logoutBTN__2yCkv"
};


/***/ }),

/***/ "./src/assets/svg/change.svg":
/*!***********************************!*\
  !*** ./src/assets/svg/change.svg ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var React = __webpack_require__(/*! react */ "react");

function Change (props) {
    return React.createElement("svg",props,React.createElement("path",{"d":"m331.273438 175h-10.566407c-.617187 0-1.183593-.363281-1.4375-.925781l-2.65625-5.785157c-6.757812-14.726562-21.59375-24.242187-37.796875-24.242187h-39.925781c-16.203125 0-31.039063 9.515625-37.792969 24.238281l-2.65625 5.789063c-.257812.5625-.824218.925781-1.441406.925781h-12.269531c-23.5625 0-42.730469 19.167969-42.730469 42.726562v89.5c0 23.5625 19.167969 42.726563 42.726562 42.726563h146.546876c23.558593 0 42.726562-19.164063 42.726562-42.726563v-89.5c0-23.558593-19.167969-42.726562-42.726562-42.726562zm2.726562 132.226562c0 1.503907-1.222656 2.726563-2.726562 2.726563h-146.546876c-1.503906 0-2.726562-1.222656-2.726562-2.726563v-89.5c0-1.503906 1.222656-2.726562 2.726562-2.726562h12.269532c16.203125 0 31.039062-9.515625 37.796875-24.242188l2.65625-5.789062c.257812-.5625.820312-.921875 1.441406-.921875h39.925781c.617188 0 1.179688.359375 1.4375.921875l2.65625 5.792969c6.761719 14.722656 21.59375 24.238281 37.796875 24.238281h10.566407c1.503906 0 2.726562 1.222656 2.726562 2.726562zm-46-51.226562c0 16.570312-13.429688 30-30 30s-30-13.429688-30-30 13.429688-30 30-30 30 13.429688 30 30zm224-170v50c0 27.570312-22.429688 50-50 50h-50c-11.046875 0-20-8.953125-20-20s8.953125-20 20-20h29.9375c-38.582031-65.082031-109.207031-106-185.9375-106-11.046875 0-20-8.953125-20-20s8.953125-20 20-20c50.230469 0 98.863281 14.546875 140.640625 42.0625 30.414063 20.03125 56.011719 46.082031 75.359375 76.457031v-32.519531c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm-224.945312 404.953125c.460937 11.035156-8.109376 20.355469-19.148438 20.816406-3.621094.152344-7.292969.230469-10.90625.230469-50.019531 0-98.480469-14.433594-140.148438-41.738281-31.148437-20.410157-57.28125-47.148438-76.851562-78.375v34.113281c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-50c0-27.570312 22.429688-50 50-50h50c11.046875 0 20 8.953125 20 20s-8.953125 20-20 20h-28.929688c38.589844 65.054688 109.292969 106 185.929688 106 3.058594 0 6.167969-.066406 9.238281-.191406 11.042969-.46875 20.355469 8.109375 20.816407 19.144531zm-287.054688-234.953125c0-11.046875 8.953125-20 20-20s20 8.953125 20 20-8.953125 20-20 20-20-8.953125-20-20zm11-73c0-11.046875 8.953125-20 20-20s20 8.953125 20 20-8.953125 20-20 20-20-8.953125-20-20zm34-66c0-11.046875 8.953125-20 20-20s20 8.953125 20 20-8.953125 20-20 20-20-8.953125-20-20zm52-52c0-11.046875 8.953125-20 20-20s20 8.953125 20 20-8.953125 20-20 20-20-8.953125-20-20zm66-34c0-11.046875 8.953125-20 20-20s20 8.953125 20 20-8.953125 20-20 20-20-8.953125-20-20zm349 225c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20 8.953125-20 20-20 20 8.953125 20 20zm-11 71c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20 8.953125-20 20-20 20 8.953125 20 20zm-32 64c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20 8.953125-20 20-20 20 8.953125 20 20zm-49 52c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20 8.953125-20 20-20 20 8.953125 20 20zm-63 35c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20 8.953125-20 20-20 20 8.953125 20 20zm0 0"}));
}

Change.defaultProps = {"height":"512pt","viewBox":"0 0 512 512","width":"512pt"};

module.exports = Change;

Change.default = Change;


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/settings/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vYXBpLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL0Z1bGxMb2FkaW5nL0xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvV2l0aEF1dGguanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9wYWdlcy9zZXR0aW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zdG9yZS90eXBlcy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9GdWxsTG9hZGluZy9mdWxsTG9hZGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL2xvYWRpbmdTcGlubmVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvV3JhcHBlci93cmFwcGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3NyYy9hc3NldHMvc3ZnL2NoYW5nZS5zdmciLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiYmFzZVVSTCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwiZXJyb3IiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJvcmlnaW5hbFJlcXVlc3QiLCJzdGF0dXMiLCJ1cmwiLCJSb3V0ZXIiLCJfcmV0cnkiLCJyZWZyZXNoVG9rZW4iLCJwb3N0IiwidGhlbiIsInJlcyIsInNldEl0ZW0iLCJkYXRhIiwiYWNjZXNzIiwiZGVmYXVsdHMiLCJjb21tb24iLCJsb2dpbiIsInBhcmFtcyIsInJlc29sdmUiLCJyZWZyZXNoIiwiY2F0Y2giLCJtZXNzYWdlIiwiZGV0YWlsIiwicmVnaXN0ZXIiLCJlcnJvcnMiLCJMb2FkaW5nIiwicHJvcHMiLCJjbGFzc2VzIiwiTG9hZGluZ1NwaW5uZXIiLCJsb2FkZXIiLCJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJBdXRoZW50aWNhdGVkUm91dGUiLCJSZWFjdCIsImxvYWRpbmciLCJjb21wb25lbnREaWRNb3VudCIsImlzTG9nZ2VkSW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwiY29ubmVjdCIsIk9iamVjdCIsImtleXMiLCJ1c2VyUmVkdWNlciIsInVzZXIiLCJsZW5ndGgiLCJXcmFwcGVyIiwiY2hpbGRyZW4iLCJJbmRleCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNpbXBsZVJlZHVjZXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiYXZhdGFyIiwidXNlRWZmZWN0Iiwic2V0RGF0YSIsIm9uU2F2ZUNsaWNrIiwic2V0TG9hZGluZyIsInVwZGF0ZVVzZXIiLCJpZCIsIm9uTG9nb3V0Q2xpY2siLCJzZXRGdWxsTG9hZGluZyIsImxvZ291dCIsIm9uSW1hZ2VDaGFuZ2UiLCJldmVudCIsInBpY3R1cmUiLCJ0YXJnZXQiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZvcm1fZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiam9pbiIsInVuZGVmaW5lZCIsInZhbHVlIiwiV2l0aEF1dGgiLCJpbml0aWFsU3RhdGUiLCJsb2FkaW5nU3RhdGUiLCJ0eXBlIiwiTE9BRElOR19UUlVFIiwiTE9BRElOR19GQUxTRSIsIkZVTExfTE9BRElOR19UUlVFIiwiRlVMTF9MT0FESU5HX0ZBTFNFIiwic2V0VXNlciIsInJlc3VsdCIsIlNFVF9VU0VSX1NVQ0NFU1MiLCJwYXlsb2FkIiwiU0VUX1VTRVJfRVJST1IiLCJyZW1vdmVJdGVtIiwiTE9HT1VUIiwiVVBEQVRFX1VTRVIiLCJTRVRfT1RIRVJfVVNFUiIsIkNMRUFSX09USEVSX1VTRVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUdBLE1BQU1BLFFBQVEsR0FBRyx1QkFBakI7QUFHTyxNQUFNQyxhQUFhLEdBQUdDLG1EQUFBLENBQWE7QUFBQ0MsU0FBTyxFQUFFSDtBQUFWLENBQWIsQ0FBdEI7QUFFUEMsYUFBYSxDQUFDRyxZQUFkLENBQTJCQyxPQUEzQixDQUFtQ0MsR0FBbkMsQ0FDSUMsTUFBTSxJQUFJO0FBRU4sUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIs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QkFBTzs7QUFFM0I7QUFDQSx1RUFBdUUsdTVGQUF1NUY7QUFDOTlGOztBQUVBLHVCQUF1Qjs7QUFFdkI7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1ZBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtiYXNlVVJMOiBCQVNFX1VSTH0pXHJcblxyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgIGNvbmZpZyA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2VzcycpXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnSldUICcgKyB0b2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9LFxyXG4gICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfSk7XHJcblxyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxufSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWc7XHJcblxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxICYmIG9yaWdpbmFsUmVxdWVzdC51cmwgPT09XHJcbiAgICAgICAgYC9hdXRoL2p3dC9yZWZyZXNoL2ApIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgIW9yaWdpbmFsUmVxdWVzdC5fcmV0cnkpIHtcclxuXHJcbiAgICAgICAgb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2gnKVxyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLnBvc3QoJy9hdXRoL2p3dC9yZWZyZXNoLycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVmcmVzaFwiOiByZWZyZXNoVG9rZW5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgcmVzLmRhdGEuYWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zSW5zdGFuY2UuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdKV1QgJyArIHJlcy5kYXRhLmFjY2VzcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZShvcmlnaW5hbFJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vYXV0aC9qd3QvY3JlYXRlL2AsIHBhcmFtcykudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaCcsIHJlc3BvbnNlLmRhdGEucmVmcmVzaClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2VzcycsIHJlc3BvbnNlLmRhdGEuYWNjZXNzKVxyXG4gICAgICAgICAgICByZXNvbHZlKHtzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c30pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZWplY3Qoe3N0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBtZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vYXV0aC91c2Vycy9gLCBwYXJhbXMpLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c30pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZWplY3Qoe3N0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvcnM6IGVycm9yLnJlc3BvbnNlLmRhdGF9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2Z1bGxMb2FkaW5nLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvYWRpbmdTcGlubmVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTcGlubmVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyOyIsImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vRnVsbExvYWRpbmcvTG9hZGluZ1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgd2l0aEF1dGggPSAoQ29tcG9uZW50ID0gbnVsbCwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjbGFzcyBBdXRoZW50aWNhdGVkUm91dGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExvYWRpbmcvPjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29ubmVjdCgoc3RhdGUpID0+IChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpLmxlbmd0aCA+IDBcclxuICAgICAgICB9KSkoQXV0aGVudGljYXRlZFJvdXRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi93cmFwcGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFdyYXBwZXIoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMud3JhcHBlcl19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3NldHRpbmdzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2dvdXQsIHVwZGF0ZVVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlclwiO1xyXG5pbXBvcnQgQ2hhbmdlTG9nbyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9jaGFuZ2Uuc3ZnJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQge3NldEZ1bGxMb2FkaW5nLCBzZXRMb2FkaW5nfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCBXaXRoQXV0aCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1dpdGhBdXRoJ1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCB7dXNlciwgZXJyb3JzfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmd9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuc2ltcGxlUmVkdWNlcilcclxuICAgIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICBhdmF0YXI6IG51bGxcclxuICAgIH0pXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldERhdGEoKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJEYXRhKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB1c2VyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0RGF0YSgpXHJcbiAgICB9LCBbdXNlcl0pXHJcblxyXG5cclxuICAgIGNvbnN0IG9uU2F2ZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7fVxyXG4gICAgICAgIGlmICh1c2VyLnVzZXJuYW1lICE9PSB1c2VyRGF0YS51c2VybmFtZSkge1xyXG4gICAgICAgICAgICBwYXJhbXMudXNlcm5hbWUgPSB1c2VyRGF0YS51c2VybmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5zdGF0dXMgIT09IHVzZXJEYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgICBwYXJhbXMuc3RhdHVzID0gdXNlckRhdGEuc3RhdHVzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyLmF2YXRhciAhPT0gdXNlckRhdGEuYXZhdGFyKSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5hdmF0YXIgPSB1c2VyRGF0YS5hdmF0YXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICBwYXJhbXMudXNlcm5hbWUgPSB1c2VyRGF0YS51c2VybmFtZVxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChzZXRMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIuaWQsIHBhcmFtcykpXHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uTG9nb3V0Q2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0RnVsbExvYWRpbmcodHJ1ZSkpXHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2gobG9nb3V0KCkpXHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0RnVsbExvYWRpbmcoZmFsc2UpKVxyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25JbWFnZUNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBpY3R1cmUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIGF2YXRhcjogVVJMLmNyZWF0ZU9iamVjdFVSTChwaWN0dXJlKX0pXHJcbiAgICAgICAgbGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGF3YWl0IGZvcm1fZGF0YS5hcHBlbmQoJ2F2YXRhcicsIHBpY3R1cmUpO1xyXG4gICAgICAgIGF3YWl0IGZvcm1fZGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlckRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHVwZGF0ZVVzZXIodXNlci5pZCwgZm9ybV9kYXRhKSlcclxuICAgIH1cclxuICAgIHJldHVybiA8V3JhcHBlcj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY2xhc3Nlcy5jb250YWluZXIsICdnbGFzcyddLmpvaW4oJyAnKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdfd3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e3VzZXJEYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY2xhc3Nlcy5wcm9maWxlSW1hZ2UsIHVzZXJEYXRhLmF2YXRhciA9PT0gbnVsbCA/IGNsYXNzZXMubm9Qcm9maWxlSW1hZ2UgOiB1bmRlZmluZWRdLmpvaW4oJyAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dXNlckRhdGEuYXZhdGFyICE9PSBudWxsID8gdXNlckRhdGEuYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc2VsZWN0X2ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtvbkltYWdlQ2hhbmdlfSB0eXBlPVwiZmlsZVwiIGlkPVwiaW1nXCIgbmFtZT1cImltZ1wiIGFjY2VwdD1cImltYWdlLypcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpPjxDaGFuZ2VMb2dvLz48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMuYXZhdGFyID9cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1tcImVycm9yXCIsIGNsYXNzZXMuaW1nX2Vycm9yXS5qb2luKCcgJyl9Pioge2Vycm9ycy5hdmF0YXJbMF19PC9zcGFuPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlckRhdGEudXNlcm5hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIHVzZXJuYW1lOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgfX0gcGxhY2Vob2xkZXI9eydVc2VybmFtZSd9Lz5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgPyA8c3BhbiBjbGFzc05hbWU9e1wiZXJyb3JcIn0+KiB7ZXJyb3JzLnVzZXJuYW1lWzBdfTwvc3Bhbj4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJEYXRhLnN0YXR1c30gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgc3RhdHVzOiBldmVudC50YXJnZXQudmFsdWV9KVxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J1N0YXR1cyd9Lz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25TYXZlQ2xpY2t9Pntsb2FkaW5nID8gPExvYWRpbmdTcGlubmVyLz4gOiA8c3Bhbj5TQVZFPC9zcGFuPn08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Mb2dvdXRDbGlja30gY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ291dEJUTn0+TE9HT1VUPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9XcmFwcGVyPlxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpdGhBdXRoKEluZGV4KTsiLCJpbXBvcnQge1xyXG4gICAgRlVMTF9MT0FESU5HX0ZBTFNFLFxyXG4gICAgRlVMTF9MT0FESU5HX1RSVUUsXHJcbiAgICBMT0FESU5HX0ZBTFNFLFxyXG4gICAgTE9BRElOR19UUlVFLFxyXG5cclxufSBmcm9tICcuLi90eXBlcydcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmcgPSAobG9hZGluZ1N0YXRlKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGxvYWRpbmdTdGF0ZSA/IExPQURJTkdfVFJVRSA6IExPQURJTkdfRkFMU0UsXHJcbiAgICB9KVxyXG59XHJcbmV4cG9ydCBjb25zdCBzZXRGdWxsTG9hZGluZyA9IChsb2FkaW5nU3RhdGUpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogbG9hZGluZ1N0YXRlID8gRlVMTF9MT0FESU5HX1RSVUUgOiBGVUxMX0xPQURJTkdfRkFMU0UsXHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IHtcclxuICAgIFNFVF9VU0VSX1NVQ0NFU1MsIFNFVF9VU0VSX0VSUk9SLCBVUERBVEVfVVNFUiwgTE9HT1VUXHJcblxyXG59IGZyb20gJy4uL3R5cGVzJ1xyXG5pbXBvcnQge2F4aW9zSW5zdGFuY2V9IGZyb20gXCIuLi8uLi9hcGlcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VXNlciA9ICgpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuXHJcbiAgICBhd2FpdCBheGlvc0luc3RhbmNlLmdldCgnL2F1dGgvdXNlcnMvbWUnKS50aGVuKGFzeW5jIChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICBhd2FpdCBheGlvc0luc3RhbmNlLmdldChgL2FwaS92MS91c2Vycy9wcm9maWxlLyR7cmVzcG9uc2UuZGF0YS5pZH1gKS50aGVuKGFzeW5jIChyZXN1bHQpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGF3YWl0IGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHQuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogU0VUX1VTRVJfRVJST1IsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDoge3N0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBtZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtlcnJvcjogZXJyb3J9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIClcclxuXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZyZXNoJylcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9HT1VULFxyXG4gICAgICAgIHBheWxvYWQ6IHt9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChpZCwgcGFyYW1zKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgYXhpb3NJbnN0YW5jZS5wdXQoYC9hcGkvdjEvdXNlcnMvcHJvZmlsZS8ke2lkfS9gLCBwYXJhbXMpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogZXJyb3IucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtlcnJvcjogZXJyb3J9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IExPQURJTkdfVFJVRSA9ICdMT0FESU5HX1RSVUUnXHJcbmV4cG9ydCBjb25zdCBMT0FESU5HX0ZBTFNFID0gJ0xPQURJTkdfRkFMU0UnXHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUl9TVUNDRVNTID0gJ1NFVF9VU0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUl9FUlJPUiA9ICdTRVRfVVNFUl9FUlJPUidcclxuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnXHJcbmV4cG9ydCBjb25zdCBGVUxMX0xPQURJTkdfVFJVRSA9ICdGVUxMX0xPQURJTkdfVFJVRSdcclxuZXhwb3J0IGNvbnN0IEZVTExfTE9BRElOR19GQUxTRSA9ICdGVUxMX0xPQURJTkdfRkFMU0UnXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUiA9ICdVUERBVEVfVVNFUidcclxuZXhwb3J0IGNvbnN0IFNFVF9PVEhFUl9VU0VSID0gJ1NFVF9PVEhFUl9VU0VSJ1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfT1RIRVJfVVNFUiA9ICdDTEVBUl9PVEhFUl9VU0VSJ1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiZnVsbExvYWRpbmdfd3JhcHBlcl9fMUNWX3RcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlclwiOiBcImxvYWRpbmdTcGlubmVyX2xvYWRlcl9fM29aNWJcIixcblx0XCJzcGluXCI6IFwibG9hZGluZ1NwaW5uZXJfc3Bpbl9fMzNkWDlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJ3cmFwcGVyX3dyYXBwZXJfX3IzNEhwXCIsXG5cdFwiY29udGFpbmVyXCI6IFwid3JhcHBlcl9jb250YWluZXJfX0ctQ01NXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic2V0dGluZ3Nfd3JhcHBlcl9fbTEzNUtcIixcblx0XCJjb250YWluZXJcIjogXCJzZXR0aW5nc19jb250YWluZXJfXzFlVFN0XCIsXG5cdFwiYmxvY2tcIjogXCJzZXR0aW5nc19ibG9ja19fZDZWM05cIixcblx0XCJwYXNzd29yZENvbnRhaW5lclwiOiBcInNldHRpbmdzX3Bhc3N3b3JkQ29udGFpbmVyX18xeVlOcFwiLFxuXHRcImltZ193cmFwcGVyXCI6IFwic2V0dGluZ3NfaW1nX3dyYXBwZXJfXzNwWGVDXCIsXG5cdFwic2VsZWN0X2ltYWdlXCI6IFwic2V0dGluZ3Nfc2VsZWN0X2ltYWdlX18xazV2NlwiLFxuXHRcImltZ19lcnJvclwiOiBcInNldHRpbmdzX2ltZ19lcnJvcl9fM0s3bm1cIixcblx0XCJ1bmFjdGl2ZVwiOiBcInNldHRpbmdzX3VuYWN0aXZlX18yZS1GaVwiLFxuXHRcImxvZ291dEJUTlwiOiBcInNldHRpbmdzX2xvZ291dEJUTl9fMnlDa3ZcIlxufTtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIENoYW5nZSAocHJvcHMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLHByb3BzLFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse1wiZFwiOlwibTMzMS4yNzM0MzggMTc1aC0xMC41NjY0MDdjLS42MTcxODcgMC0xLjE4MzU5My0uMzYzMjgxLTEuNDM3NS0uOTI1NzgxbC0yLjY1NjI1LTUuNzg1MTU3Yy02Ljc1NzgxMi0xNC43MjY1NjItMjEuNTkzNzUtMjQuMjQyMTg3LTM3Ljc5Njg3NS0yNC4yNDIxODdoLTM5LjkyNTc4MWMtMTYuMjAzMTI1IDAtMzEuMDM5MDYzIDkuNTE1NjI1LTM3Ljc5Mjk2OSAyNC4yMzgyODFsLTIuNjU2MjUgNS43ODkwNjNjLS4yNTc4MTIuNTYyNS0uODI0MjE4LjkyNTc4MS0xLjQ0MTQwNi45MjU3ODFoLTEyLjI2OTUzMWMtMjMuNTYyNSAwLTQyLjczMDQ2OSAxOS4xNjc5NjktNDIuNzMwNDY5IDQyLjcyNjU2MnY4OS41YzAgMjMuNTYyNSAxOS4xNjc5NjkgNDIuNzI2NTYzIDQyLjcyNjU2MiA0Mi43MjY1NjNoMTQ2LjU0Njg3NmMyMy41NTg1OTMgMCA0Mi43MjY1NjItMTkuMTY0MDYzIDQyLjcyNjU2Mi00Mi43MjY1NjN2LTg5LjVjMC0yMy41NTg1OTMtMTkuMTY3OTY5LTQyLjcyNjU2Mi00Mi43MjY1NjItNDIuNzI2NTYyem0yLjcyNjU2MiAxMzIuMjI2NTYyYzAgMS41MDM5MDctMS4yMjI2NTYgMi43MjY1NjMtMi43MjY1NjIgMi43MjY1NjNoLTE0Ni41NDY4NzZjLTEuNTAzOTA2IDAtMi43MjY1NjItMS4yMjI2NTYtMi43MjY1NjItMi43MjY1NjN2LTg5LjVjMC0xLjUwMzkwNiAxLjIyMjY1Ni0yLjcyNjU2MiAyLjcyNjU2Mi0yLjcyNjU2MmgxMi4yNjk1MzJjMTYuMjAzMTI1IDAgMzEuMDM5MDYyLTkuNTE1NjI1IDM3Ljc5Njg3NS0yNC4yNDIxODhsMi42NTYyNS01Ljc4OTA2MmMuMjU3ODEyLS41NjI1LjgyMDMxMi0uOTIxODc1IDEuNDQxNDA2LS45MjE4NzVoMzkuOTI1NzgxYy42MTcxODggMCAxLjE3OTY4OC4zNTkzNzUgMS40Mzc1LjkyMTg3NWwyLjY1NjI1IDUuNzkyOTY5YzYuNzYxNzE5IDE0LjcyMjY1NiAyMS41OTM3NSAyNC4yMzgyODEgMzcuNzk2ODc1IDI0LjIzODI4MWgxMC41NjY0MDdjMS41MDM5MDYgMCAyLjcyNjU2MiAxLjIyMjY1NiAyLjcyNjU2MiAyLjcyNjU2MnptLTQ2LTUxLjIyNjU2MmMwIDE2LjU3MDMxMi0xMy40Mjk2ODggMzAtMzAgMzBzLTMwLTEzLjQyOTY4OC0zMC0zMCAxMy40Mjk2ODgtMzAgMzAtMzAgMzAgMTMuNDI5Njg4IDMwIDMwem0yMjQtMTcwdjUwYzAgMjcuNTcwMzEyLTIyLjQyOTY4OCA1MC01MCA1MGgtNTBjLTExLjA0Njg3NSAwLTIwLTguOTUzMTI1LTIwLTIwczguOTUzMTI1LTIwIDIwLTIwaDI5LjkzNzVjLTM4LjU4MjAzMS02NS4wODIwMzEtMTA5LjIwNzAzMS0xMDYtMTg1LjkzNzUtMTA2LTExLjA0Njg3NSAwLTIwLTguOTUzMTI1LTIwLTIwczguOTUzMTI1LTIwIDIwLTIwYzUwLjIzMDQ2OSAwIDk4Ljg2MzI4MSAxNC41NDY4NzUgMTQwLjY0MDYyNSA0Mi4wNjI1IDMwLjQxNDA2MyAyMC4wMzEyNSA1Ni4wMTE3MTkgNDYuMDgyMDMxIDc1LjM1OTM3NSA3Ni40NTcwMzF2LTMyLjUxOTUzMWMwLTExLjA0Njg3NSA4Ljk1MzEyNS0yMCAyMC0yMHMyMCA4Ljk1MzEyNSAyMCAyMHptLTIyNC45NDUzMTIgNDA0Ljk1MzEyNWMuNDYwOTM3IDExLjAzNTE1Ni04LjEwOTM3NiAyMC4zNTU0NjktMTkuMTQ4NDM4IDIwLjgxNjQwNi0zLjYyMTA5NC4xNTIzNDQtNy4yOTI5NjkuMjMwNDY5LTEwLjkwNjI1LjIzMDQ2OS01MC4wMTk1MzEgMC05OC40ODA0NjktMTQuNDMzNTk0LTE0MC4xNDg0MzgtNDEuNzM4MjgxLTMxLjE0ODQzNy0yMC40MTAxNTctNTcuMjgxMjUtNDcuMTQ4NDM4LTc2Ljg1MTU2Mi03OC4zNzV2MzQuMTEzMjgxYzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMHYtNTBjMC0yNy41NzAzMTIgMjIuNDI5Njg4LTUwIDUwLTUwaDUwYzExLjA0Njg3NSAwIDIwIDguOTUzMTI1IDIwIDIwcy04Ljk1MzEyNSAyMC0yMCAyMGgtMjguOTI5Njg4YzM4LjU4OTg0NCA2NS4wNTQ2ODggMTA5LjI5Mjk2OSAxMDYgMTg1LjkyOTY4OCAxMDYgMy4wNTg1OTQgMCA2LjE2Nzk2OS0uMDY2NDA2IDkuMjM4MjgxLS4xOTE0MDYgMTEuMDQyOTY5LS40Njg3NSAyMC4zNTU0NjkgOC4xMDkzNzUgMjAuODE2NDA3IDE5LjE0NDUzMXptLTI4Ny4wNTQ2ODgtMjM0Ljk1MzEyNWMwLTExLjA0Njg3NSA4Ljk1MzEyNS0yMCAyMC0yMHMyMCA4Ljk1MzEyNSAyMCAyMC04Ljk1MzEyNSAyMC0yMCAyMC0yMC04Ljk1MzEyNS0yMC0yMHptMTEtNzNjMC0xMS4wNDY4NzUgOC45NTMxMjUtMjAgMjAtMjBzMjAgOC45NTMxMjUgMjAgMjAtOC45NTMxMjUgMjAtMjAgMjAtMjAtOC45NTMxMjUtMjAtMjB6bTM0LTY2YzAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwLTguOTUzMTI1IDIwLTIwIDIwLTIwLTguOTUzMTI1LTIwLTIwem01Mi01MmMwLTExLjA0Njg3NSA4Ljk1MzEyNS0yMCAyMC0yMHMyMCA4Ljk1MzEyNSAyMCAyMC04Ljk1MzEyNSAyMC0yMCAyMC0yMC04Ljk1MzEyNS0yMC0yMHptNjYtMzRjMC0xMS4wNDY4NzUgOC45NTMxMjUtMjAgMjAtMjBzMjAgOC45NTMxMjUgMjAgMjAtOC45NTMxMjUgMjAtMjAgMjAtMjAtOC45NTMxMjUtMjAtMjB6bTM0OSAyMjVjMCAxMS4wNDY4NzUtOC45NTMxMjUgMjAtMjAgMjBzLTIwLTguOTUzMTI1LTIwLTIwIDguOTUzMTI1LTIwIDIwLTIwIDIwIDguOTUzMTI1IDIwIDIwem0tMTEgNzFjMCAxMS4wNDY4NzUtOC45NTMxMjUgMjAtMjAgMjBzLTIwLTguOTUzMTI1LTIwLTIwIDguOTUzMTI1LTIwIDIwLTIwIDIwIDguOTUzMTI1IDIwIDIwem0tMzIgNjRjMCAxMS4wNDY4NzUtOC45NTMxMjUgMjAtMjAgMjBzLTIwLTguOTUzMTI1LTIwLTIwIDguOTUzMTI1LTIwIDIwLTIwIDIwIDguOTUzMTI1IDIwIDIwem0tNDkgNTJjMCAxMS4wNDY4NzUtOC45NTMxMjUgMjAtMjAgMjBzLTIwLTguOTUzMTI1LTIwLTIwIDguOTUzMTI1LTIwIDIwLTIwIDIwIDguOTUzMTI1IDIwIDIwem0tNjMgMzVjMCAxMS4wNDY4NzUtOC45NTMxMjUgMjAtMjAgMjBzLTIwLTguOTUzMTI1LTIwLTIwIDguOTUzMTI1LTIwIDIwLTIwIDIwIDguOTUzMTI1IDIwIDIwem0wIDBcIn0pKTtcbn1cblxuQ2hhbmdlLmRlZmF1bHRQcm9wcyA9IHtcImhlaWdodFwiOlwiNTEycHRcIixcInZpZXdCb3hcIjpcIjAgMCA1MTIgNTEyXCIsXCJ3aWR0aFwiOlwiNTEycHRcIn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhbmdlO1xuXG5DaGFuZ2UuZGVmYXVsdCA9IENoYW5nZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=