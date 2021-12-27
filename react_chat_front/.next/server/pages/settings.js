(() => {
var exports = {};
exports.id = "pages/settings";
exports.ids = ["pages/settings"];
exports.modules = {

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "axiosInstance": () => (/* binding */ axiosInstance),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "register": () => (/* binding */ register)
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fullLoading.module.css */ "./components/FullLoading/fullLoading.module.css");
/* harmony import */ var _fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\FullLoading\\Loading.js";





function Loading() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_fullLoading_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./components/InfoBox/InfoBox.js":
/*!***************************************!*\
  !*** ./components/InfoBox/InfoBox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _infobox_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./infobox.module.css */ "./components/InfoBox/infobox.module.css");
/* harmony import */ var _infobox_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_infobox_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\InfoBox\\InfoBox.js";







function InfoBox({
  type = _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS
}) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      dispatch((0,_store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_3__.setInfoBox)(0));
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_infobox_module_css__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_infobox_module_css__WEBPACK_IMPORTED_MODULE_5___default().toast),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
        className: type === _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS ? (_infobox_module_css__WEBPACK_IMPORTED_MODULE_5___default().success) : (_infobox_module_css__WEBPACK_IMPORTED_MODULE_5___default().error),
        children: type === _constants__WEBPACK_IMPORTED_MODULE_1__.SUCCESS ? "successfully saved" : "something went wrong"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoBox);

/***/ }),

/***/ "./components/LoadingSpinner/LoadingSpinner.js":
/*!*****************************************************!*\
  !*** ./components/LoadingSpinner/LoadingSpinner.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingSpinner.module.css */ "./components/LoadingSpinner/loadingSpinner.module.css");
/* harmony import */ var _loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\LoadingSpinner\\LoadingSpinner.js";




function LoadingSpinner() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_loadingSpinner_module_css__WEBPACK_IMPORTED_MODULE_2___default().loader)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);

/***/ }),

/***/ "./components/WithAuth.js":
/*!********************************!*\
  !*** ./components/WithAuth.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FullLoading_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullLoading/Loading */ "./components/FullLoading/Loading.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\WithAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const withAuth = (Component = null, options = {}) => {
  class AuthenticatedRoute extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
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
        next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/login");
      }
    }

    render() {
      if (this.state.loading) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_FullLoading_Loading__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 24
        }, this);
      }

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, this.props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }, this);
    }

  }

  return (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(state => ({
    isLoggedIn: Object.keys(state.userReducer.user).length > 0
  }))(AuthenticatedRoute);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withAuth);

/***/ }),

/***/ "./components/Wrapper/Wrapper.js":
/*!***************************************!*\
  !*** ./components/Wrapper/Wrapper.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wrapper_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapper.module.css */ "./components/Wrapper/wrapper.module.css");
/* harmony import */ var _wrapper_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wrapper_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FullLoading_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FullLoading/Loading */ "./components/FullLoading/Loading.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\components\\Wrapper\\Wrapper.js";






function Wrapper({
  children
}) {
  const {
    full_loading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.simpleReducer);
  return full_loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_FullLoading_Loading__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_wrapper_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_wrapper_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 38
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USER": () => (/* binding */ USER),
/* harmony export */   "OTHER": () => (/* binding */ OTHER),
/* harmony export */   "MESSAGE": () => (/* binding */ MESSAGE),
/* harmony export */   "SEARCH": () => (/* binding */ SEARCH),
/* harmony export */   "SUCCESS": () => (/* binding */ SUCCESS),
/* harmony export */   "ERROR": () => (/* binding */ ERROR)
/* harmony export */ });
const USER = 1;
const OTHER = 2;
const MESSAGE = 1;
const SEARCH = 2;
const SUCCESS = 1;
const ERROR = 2;

/***/ }),

/***/ "./pages/settings/index.js":
/*!*********************************!*\
  !*** ./pages/settings/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings.module.css */ "./pages/settings/settings.module.css");
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_settings_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_actions_userActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/actions/userActions */ "./store/actions/userActions.js");
/* harmony import */ var _components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Wrapper/Wrapper */ "./components/Wrapper/Wrapper.js");
/* harmony import */ var _src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/assets/svg/change.svg */ "./src/assets/svg/change.svg");
/* harmony import */ var _src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_WithAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/WithAuth */ "./components/WithAuth.js");
/* harmony import */ var _components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LoadingSpinner/LoadingSpinner */ "./components/LoadingSpinner/LoadingSpinner.js");
/* harmony import */ var _components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/InfoBox/InfoBox */ "./components/InfoBox/InfoBox.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var _store_actions_simpleActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/actions/simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Ilkin\\Documents\\GitHub\\react-chat\\react_chat_front\\pages\\settings\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function Index(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const {
    user,
    errors
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.userReducer);
  const {
    loading,
    info_box_type
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.simpleReducer);
  const {
    0: userData,
    1: setUserData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    username: "",
    password: "",
    status: "",
    avatar: null
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    async function setData() {
      setUserData({
        username: user.username,
        status: user.status !== null ? user.status : "",
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
      await dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_2__.updateUser)(user.id, params));
    }
  };

  const onLogoutClick = async () => {
    await dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_2__.logout)());
  };

  const onImageChange = async event => {
    const picture = event.target.files[0];
    setUserData(_objectSpread(_objectSpread({}, userData), {}, {
      avatar: URL.createObjectURL(picture)
    }));
    let form_data = new FormData();
    await form_data.append('avatar', picture);
    await form_data.append('username', userData.username);
    await dispatch((0,_store_actions_userActions__WEBPACK_IMPORTED_MODULE_2__.updateUser)(user.id, form_data));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Wrapper_Wrapper__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
      children: [info_box_type !== 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_InfoBox_InfoBox__WEBPACK_IMPORTED_MODULE_7__.default, {
        type: info_box_type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 34
      }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().container), 'glass'].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().img_wrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("img", {
            src: userData.avatar !== null ? userData.avatar : '/images/user.png',
            alt: userData.username,
            className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().profile_image), userData.avatar === undefined ? (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().noProfileImage) : undefined].join(' ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().select_image),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
              onChange: onImageChange,
              type: "file",
              id: "img",
              name: "img",
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("i", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 17
        }, this), errors.avatar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
          className: ["error", (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().img_error)].join(' '),
          children: ["* ", errors.avatar[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
          value: userData.username,
          onChange: event => {
            setUserData(_objectSpread(_objectSpread({}, userData), {}, {
              username: event.target.value
            }));
          },
          placeholder: 'Username'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this), errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
          className: "error",
          children: ["* ", errors.username[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 36
        }, this) : undefined, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("input", {
          value: userData.status,
          onChange: event => {
            setUserData(_objectSpread(_objectSpread({}, userData), {}, {
              status: event.target.value
            }));
          },
          placeholder: 'Status'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          onClick: onSaveClick,
          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 58
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("span", {
            children: "SAVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 78
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("button", {
          onClick: onLogoutClick,
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().logoutBTN),
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 12
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_components_WithAuth__WEBPACK_IMPORTED_MODULE_5__.default)(Index));

/***/ }),

/***/ "./store/actions/simpleActions.js":
/*!****************************************!*\
  !*** ./store/actions/simpleActions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setLoading": () => (/* binding */ setLoading),
/* harmony export */   "setFullLoading": () => (/* binding */ setFullLoading),
/* harmony export */   "setInfoBox": () => (/* binding */ setInfoBox)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");

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
const setInfoBox = type => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_INFO_BOX,
    payload: type
  });
};

/***/ }),

/***/ "./store/actions/userActions.js":
/*!**************************************!*\
  !*** ./store/actions/userActions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUser": () => (/* binding */ setUser),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "updateUser": () => (/* binding */ updateUser)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api */ "./api.js");
/* harmony import */ var _simpleActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simpleActions */ "./store/actions/simpleActions.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./constants.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





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
  dispatch((0,_simpleActions__WEBPACK_IMPORTED_MODULE_2__.setFullLoading)(true));
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__.LOGOUT,
    payload: {}
  });
  await next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/login');
  dispatch((0,_simpleActions__WEBPACK_IMPORTED_MODULE_2__.setFullLoading)(false));
}; // DOM — это независящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML

const updateUser = (id, params) => async dispatch => {
  dispatch((0,_simpleActions__WEBPACK_IMPORTED_MODULE_2__.setLoading)(true));
  await _api__WEBPACK_IMPORTED_MODULE_1__.axiosInstance.put(`/api/v1/users/profile/${id}/`, params).then(response => {
    dispatch((0,_simpleActions__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
    dispatch((0,_simpleActions__WEBPACK_IMPORTED_MODULE_2__.setInfoBox)(_constants__WEBPACK_IMPORTED_MODULE_3__.SUCCESS));
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__.SET_USER_SUCCESS,
      payload: response.data
    });
  }).catch(error => {
    dispatch((0,_simpleActions__WEBPACK_IMPORTED_MODULE_2__.setLoading)(false));
    dispatch((0,_simpleActions__WEBPACK_IMPORTED_MODULE_2__.setInfoBox)(_constants__WEBPACK_IMPORTED_MODULE_3__.ERROR));

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOADING_TRUE": () => (/* binding */ LOADING_TRUE),
/* harmony export */   "LOADING_FALSE": () => (/* binding */ LOADING_FALSE),
/* harmony export */   "SET_USER_SUCCESS": () => (/* binding */ SET_USER_SUCCESS),
/* harmony export */   "SET_USER_ERROR": () => (/* binding */ SET_USER_ERROR),
/* harmony export */   "LOGOUT": () => (/* binding */ LOGOUT),
/* harmony export */   "FULL_LOADING_TRUE": () => (/* binding */ FULL_LOADING_TRUE),
/* harmony export */   "FULL_LOADING_FALSE": () => (/* binding */ FULL_LOADING_FALSE),
/* harmony export */   "UPDATE_USER": () => (/* binding */ UPDATE_USER),
/* harmony export */   "SET_OTHER_USER": () => (/* binding */ SET_OTHER_USER),
/* harmony export */   "CLEAR_OTHER_USER": () => (/* binding */ CLEAR_OTHER_USER),
/* harmony export */   "SET_INFO_BOX": () => (/* binding */ SET_INFO_BOX)
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
const SET_INFO_BOX = 'SET_INFO_BOX';

/***/ }),

/***/ "./components/FullLoading/fullLoading.module.css":
/*!*******************************************************!*\
  !*** ./components/FullLoading/fullLoading.module.css ***!
  \*******************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "fullLoading_wrapper__1CV_t"
};


/***/ }),

/***/ "./components/InfoBox/infobox.module.css":
/*!***********************************************!*\
  !*** ./components/InfoBox/infobox.module.css ***!
  \***********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "infobox_wrapper__3ECNO",
	"fadeIn": "infobox_fadeIn__30iZk",
	"toast": "infobox_toast__1WcHc",
	"success": "infobox_success__1j22s",
	"error": "infobox_error__2-VSt"
};


/***/ }),

/***/ "./components/LoadingSpinner/loadingSpinner.module.css":
/*!*************************************************************!*\
  !*** ./components/LoadingSpinner/loadingSpinner.module.css ***!
  \*************************************************************/
/***/ ((module) => {

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
/***/ ((module) => {

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
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "settings_wrapper__m135K",
	"profile_image": "settings_profile_image__ooeRu",
	"container": "settings_container__1eTSt",
	"block": "settings_block__d6V3N",
	"passwordContainer": "settings_passwordContainer__1yYNp",
	"img_wrapper": "settings_img_wrapper__3pXeC",
	"noProfileImage": "settings_noProfileImage__3ugbU",
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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/settings/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxNQUFNRSxNQUFNLEdBQUcsUUFBZjtBQUNBLE1BQU1YLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1ELGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLE1BQU1XLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1PLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNZixZQUFZLEdBQUcsY0FBckI7Ozs7Ozs7Ozs7QUNWUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBLFlBQVksbUJBQU8sQ0FBQyxvQkFBTzs7QUFFM0I7QUFDQSx1RUFBdUUsdTVGQUF1NUY7QUFDOTlGOztBQUVBLHVCQUF1Qjs7QUFFdkI7O0FBRUE7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2FwaS5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9GdWxsTG9hZGluZy9Mb2FkaW5nLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL0luZm9Cb3gvSW5mb0JveC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XaXRoQXV0aC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL2FjdGlvbnMvc2ltcGxlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vc3RvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvRnVsbExvYWRpbmcvZnVsbExvYWRpbmcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9JbmZvQm94L2luZm9ib3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9sb2FkaW5nU3Bpbm5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL1dyYXBwZXIvd3JhcHBlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUuY3NzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zcmMvYXNzZXRzL3N2Zy9jaGFuZ2Uuc3ZnIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjgwMDAnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe2Jhc2VVUkw6IEJBU0VfVVJMfSlcclxuXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxyXG4gICAgY29uZmlnID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzJylcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uZmlnLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9ICdKV1QgJyArIHRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0sXHJcbiAgICBlcnJvciA9PiB7XHJcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpXHJcbiAgICB9KTtcclxuXHJcbmF4aW9zSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZVxyXG59LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIGNvbnN0IG9yaWdpbmFsUmVxdWVzdCA9IGVycm9yLmNvbmZpZztcclxuXHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgb3JpZ2luYWxSZXF1ZXN0LnVybCA9PT1cclxuICAgICAgICBgL2F1dGgvand0L3JlZnJlc2gvYCkge1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSAmJiAhb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSkge1xyXG5cclxuICAgICAgICBvcmlnaW5hbFJlcXVlc3QuX3JldHJ5ID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaCcpXHJcbiAgICAgICAgcmV0dXJuIGF4aW9zSW5zdGFuY2UucG9zdCgnL2F1dGgvand0L3JlZnJlc2gvJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJyZWZyZXNoXCI6IHJlZnJlc2hUb2tlblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3MnLCByZXMuZGF0YS5hY2Nlc3MpXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3NJbnN0YW5jZS5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gJ0pXVCAnICsgcmVzLmRhdGEuYWNjZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlKG9yaWdpbmFsUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0VfVVJMfS9hdXRoL2p3dC9jcmVhdGUvYCwgcGFyYW1zKS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoJywgcmVzcG9uc2UuZGF0YS5yZWZyZXNoKVxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgcmVzcG9uc2UuZGF0YS5hY2Nlc3MpXHJcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogcmVzcG9uc2Uuc3RhdHVzfSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7c3RhdHVzOiBlcnJvci5yZXNwb25zZS5zdGF0dXMsIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlLmRhdGEuZGV0YWlsfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0VfVVJMfS9hdXRoL3VzZXJzL2AsIHBhcmFtcykudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoe3N0YXR1czogcmVzcG9uc2Uuc3RhdHVzfSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7c3RhdHVzOiBlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yczogZXJyb3IucmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vZnVsbExvYWRpbmcubW9kdWxlLmNzcydcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lclwiO1xyXG5cclxuZnVuY3Rpb24gTG9hZGluZygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9pbmZvYm94Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHtTVUNDRVNTLCBFUlJPUn0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZXRJbmZvQm94fSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBJbmZvQm94KHt0eXBlID0gU1VDQ0VTU30pIHtcclxuICAgIGNvbnN0ICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SW5mb0JveCgwKSlcclxuICAgICAgICB9LDEwMDApXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9hc3R9PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXt0eXBlID09PSBTVUNDRVNTID8gY2xhc3Nlcy5zdWNjZXNzIDogY2xhc3Nlcy5lcnJvcn0+e3R5cGUgPT09IFNVQ0NFU1MgPyBcInN1Y2Nlc3NmdWxseSBzYXZlZFwiIDogXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wifTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvQm94OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvYWRpbmdTcGlubmVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTcGlubmVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyOyIsImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vRnVsbExvYWRpbmcvTG9hZGluZ1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgd2l0aEF1dGggPSAoQ29tcG9uZW50ID0gbnVsbCwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjbGFzcyBBdXRoZW50aWNhdGVkUm91dGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExvYWRpbmcvPjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29ubmVjdCgoc3RhdGUpID0+IChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpLmxlbmd0aCA+IDBcclxuICAgICAgICB9KSkoQXV0aGVudGljYXRlZFJvdXRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi93cmFwcGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9GdWxsTG9hZGluZy9Mb2FkaW5nXCI7XHJcblxyXG5mdW5jdGlvbiBXcmFwcGVyKHtjaGlsZHJlbn0pIHtcclxuXHJcbiAgICBjb25zdCB7ZnVsbF9sb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNpbXBsZVJlZHVjZXIpXHJcbiAgICByZXR1cm4gZnVsbF9sb2FkaW5nPzxMb2FkaW5nIC8+OiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7IiwiZXhwb3J0IGNvbnN0IFVTRVIgPSAxXHJcbmV4cG9ydCBjb25zdCBPVEhFUiA9IDJcclxuZXhwb3J0IGNvbnN0IE1FU1NBR0UgPSAxXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0ggPSAyXHJcbmV4cG9ydCBjb25zdCBTVUNDRVNTID0gMVxyXG5leHBvcnQgY29uc3QgRVJST1IgPSAyIiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL3NldHRpbmdzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtsb2dvdXQsIHVwZGF0ZVVzZXJ9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3VzZXJBY3Rpb25zXCI7XHJcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlclwiO1xyXG5pbXBvcnQgQ2hhbmdlTG9nbyBmcm9tICcuLi8uLi9zcmMvYXNzZXRzL3N2Zy9jaGFuZ2Uuc3ZnJ1xyXG5pbXBvcnQgV2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaXRoQXV0aCdcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBJbmZvQm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0luZm9Cb3gvSW5mb0JveFwiO1xyXG5pbXBvcnQge1NVQ0NFU1N9IGZyb20gJy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHtzZXRJbmZvQm94fSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zaW1wbGVBY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgICBjb25zdCB7dXNlciwgZXJyb3JzfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXJSZWR1Y2VyKVxyXG4gICAgY29uc3Qge2xvYWRpbmcsaW5mb19ib3hfdHlwZX0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5zaW1wbGVSZWR1Y2VyKVxyXG4gICAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICAgIGF2YXRhcjogbnVsbFxyXG4gICAgfSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHNldERhdGEoKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJEYXRhKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB1c2VyLnN0YXR1cyAhPT0gbnVsbCA/IHVzZXIuc3RhdHVzIDogXCJcIixcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlci5hdmF0YXIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0RGF0YSgpXHJcbiAgICB9LCBbdXNlcl0pXHJcbiAgICBjb25zdCBvblNhdmVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgcGFyYW1zID0ge31cclxuICAgICAgICBpZiAodXNlci51c2VybmFtZSAhPT0gdXNlckRhdGEudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIuc3RhdHVzICE9PSB1c2VyRGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnN0YXR1cyA9IHVzZXJEYXRhLnN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5hdmF0YXIgIT09IHVzZXJEYXRhLmF2YXRhcikge1xyXG4gICAgICAgICAgICBwYXJhbXMuYXZhdGFyID0gdXNlckRhdGEuYXZhdGFyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyLmlkLCBwYXJhbXMpKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvZ291dENsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25JbWFnZUNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBpY3R1cmUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cclxuICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIGF2YXRhcjogVVJMLmNyZWF0ZU9iamVjdFVSTChwaWN0dXJlKX0pXHJcbiAgICAgICAgbGV0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGF3YWl0IGZvcm1fZGF0YS5hcHBlbmQoJ2F2YXRhcicsIHBpY3R1cmUpO1xyXG4gICAgICAgIGF3YWl0IGZvcm1fZGF0YS5hcHBlbmQoJ3VzZXJuYW1lJywgdXNlckRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHVwZGF0ZVVzZXIodXNlci5pZCwgZm9ybV9kYXRhKSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFdyYXBwZXI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICB7aW5mb19ib3hfdHlwZSE9PTAgPyA8SW5mb0JveCB0eXBlPXtpbmZvX2JveF90eXBlfS8+OnVuZGVmaW5lZH1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmNvbnRhaW5lciwgJ2dsYXNzJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlckRhdGEuYXZhdGFyICE9PSBudWxsID8gdXNlckRhdGEuYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyRGF0YS51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W2NsYXNzZXMucHJvZmlsZV9pbWFnZSwgdXNlckRhdGEuYXZhdGFyID09PSB1bmRlZmluZWQgPyBjbGFzc2VzLm5vUHJvZmlsZUltYWdlIDogdW5kZWZpbmVkXS5qb2luKCcgJyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWxlY3RfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e29uSW1hZ2VDaGFuZ2V9IHR5cGU9XCJmaWxlXCIgaWQ9XCJpbWdcIiBuYW1lPVwiaW1nXCIgYWNjZXB0PVwiaW1hZ2UvKlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGk+PENoYW5nZUxvZ28vPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5hdmF0YXIgP1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17W1wiZXJyb3JcIiwgY2xhc3Nlcy5pbWdfZXJyb3JdLmpvaW4oJyAnKX0+KiB7ZXJyb3JzLmF2YXRhclswXX08L3NwYW4+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VyRGF0YS51c2VybmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJEYXRhKHsuLi51c2VyRGF0YSwgdXNlcm5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICB9fSBwbGFjZWhvbGRlcj17J1VzZXJuYW1lJ30vPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy51c2VybmFtZSA/IDxzcGFuIGNsYXNzTmFtZT17XCJlcnJvclwifT4qIHtlcnJvcnMudXNlcm5hbWVbMF19PC9zcGFuPiA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlckRhdGEuc3RhdHVzfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCBzdGF0dXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXsnU3RhdHVzJ30vPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblNhdmVDbGlja30+e2xvYWRpbmcgPyA8TG9hZGluZ1NwaW5uZXIvPiA6IDxzcGFuPlNBVkU8L3NwYW4+fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkxvZ291dENsaWNrfSBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0QlROfT5MT0dPVVQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L1dyYXBwZXI+XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2l0aEF1dGgoSW5kZXgpOyIsImltcG9ydCB7XHJcbiAgICBGVUxMX0xPQURJTkdfRkFMU0UsXHJcbiAgICBGVUxMX0xPQURJTkdfVFJVRSxcclxuICAgIExPQURJTkdfRkFMU0UsXHJcbiAgICBMT0FESU5HX1RSVUUsIFNFVF9JTkZPX0JPWCxcclxuXHJcbn0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKGxvYWRpbmdTdGF0ZSkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBsb2FkaW5nU3RhdGUgPyBMT0FESU5HX1RSVUUgOiBMT0FESU5HX0ZBTFNFLFxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgY29uc3Qgc2V0RnVsbExvYWRpbmcgPSAobG9hZGluZ1N0YXRlKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGxvYWRpbmdTdGF0ZSA/IEZVTExfTE9BRElOR19UUlVFIDogRlVMTF9MT0FESU5HX0ZBTFNFLFxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgY29uc3Qgc2V0SW5mb0JveCA9ICh0eXBlKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFNFVF9JTkZPX0JPWCxcclxuICAgICAgICBwYXlsb2FkOnR5cGVcclxuICAgIH0pXHJcbn0iLCJpbXBvcnQge1xyXG4gICAgU0VUX1VTRVJfU1VDQ0VTUywgU0VUX1VTRVJfRVJST1IsIFVQREFURV9VU0VSLCBMT0dPVVRcclxuXHJcbn0gZnJvbSAnLi4vdHlwZXMnXHJcbmltcG9ydCB7YXhpb3NJbnN0YW5jZX0gZnJvbSBcIi4uLy4uL2FwaVwiO1xyXG5pbXBvcnQge3NldEZ1bGxMb2FkaW5nLCBzZXRJbmZvQm94LCBzZXRMb2FkaW5nfSBmcm9tIFwiLi9zaW1wbGVBY3Rpb25zXCI7XHJcbmltcG9ydCB7U1VDQ0VTUyxFUlJPUn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoJy9hdXRoL3VzZXJzL21lJykudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYC9hcGkvdjEvdXNlcnMvcHJvZmlsZS8ke3Jlc3BvbnNlLmRhdGEuaWR9YCkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtzdGF0dXM6IGVycm9yLnJlc3BvbnNlLnN0YXR1cywgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9FUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7ZXJyb3I6IGVycm9yfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0RnVsbExvYWRpbmcodHJ1ZSkpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzJylcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyZWZyZXNoJylcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9HT1VULFxyXG4gICAgICAgIHBheWxvYWQ6IHt9XHJcbiAgICB9KVxyXG4gICAgYXdhaXQgUm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICBkaXNwYXRjaChzZXRGdWxsTG9hZGluZyhmYWxzZSkpXHJcbn1cclxuLy8gRE9NIOKAlCDRjdGC0L4g0L3QtdC30LDQstC40YHRj9GJ0LjQuSDQvtGCINC/0LvQsNGC0YTQvtGA0LzRiyDQuCDRj9C30YvQutCwINC/0YDQvtCz0YDQsNC80LzQvdGL0Lkg0LjQvdGC0LXRgNGE0LXQudGBLCDQv9C+0LfQstC+0LvRj9GO0YnQuNC5INC/0YDQvtCz0YDQsNC80LzQsNC8INC4INGB0LrRgNC40L/RgtCw0Lwg0L/QvtC70YPRh9C40YLRjCDQtNC+0YHRgtGD0L8g0Log0YHQvtC00LXRgNC20LjQvNC+0LzRgyBIVE1MXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKGlkLCBwYXJhbXMpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHNldExvYWRpbmcodHJ1ZSkpXHJcbiAgICBhd2FpdCBheGlvc0luc3RhbmNlLnB1dChgL2FwaS92MS91c2Vycy9wcm9maWxlLyR7aWR9L2AsIHBhcmFtcylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhmYWxzZSkpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldEluZm9Cb3goU1VDQ0VTUykpXHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICAgICAgZGlzcGF0Y2goc2V0SW5mb0JveChFUlJPUikpXHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtlcnJvcjogZXJyb3J9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IExPQURJTkdfVFJVRSA9ICdMT0FESU5HX1RSVUUnXHJcbmV4cG9ydCBjb25zdCBMT0FESU5HX0ZBTFNFID0gJ0xPQURJTkdfRkFMU0UnXHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUl9TVUNDRVNTID0gJ1NFVF9VU0VSX1NVQ0NFU1MnXHJcbmV4cG9ydCBjb25zdCBTRVRfVVNFUl9FUlJPUiA9ICdTRVRfVVNFUl9FUlJPUidcclxuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnXHJcbmV4cG9ydCBjb25zdCBGVUxMX0xPQURJTkdfVFJVRSA9ICdGVUxMX0xPQURJTkdfVFJVRSdcclxuZXhwb3J0IGNvbnN0IEZVTExfTE9BRElOR19GQUxTRSA9ICdGVUxMX0xPQURJTkdfRkFMU0UnXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfVVNFUiA9ICdVUERBVEVfVVNFUidcclxuZXhwb3J0IGNvbnN0IFNFVF9PVEhFUl9VU0VSID0gJ1NFVF9PVEhFUl9VU0VSJ1xyXG5leHBvcnQgY29uc3QgQ0xFQVJfT1RIRVJfVVNFUiA9ICdDTEVBUl9PVEhFUl9VU0VSJ1xyXG5leHBvcnQgY29uc3QgU0VUX0lORk9fQk9YID0gJ1NFVF9JTkZPX0JPWCdcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImZ1bGxMb2FkaW5nX3dyYXBwZXJfXzFDVl90XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwiaW5mb2JveF93cmFwcGVyX18zRUNOT1wiLFxuXHRcImZhZGVJblwiOiBcImluZm9ib3hfZmFkZUluX18zMGlaa1wiLFxuXHRcInRvYXN0XCI6IFwiaW5mb2JveF90b2FzdF9fMVdjSGNcIixcblx0XCJzdWNjZXNzXCI6IFwiaW5mb2JveF9zdWNjZXNzX18xajIyc1wiLFxuXHRcImVycm9yXCI6IFwiaW5mb2JveF9lcnJvcl9fMi1WU3RcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlclwiOiBcImxvYWRpbmdTcGlubmVyX2xvYWRlcl9fM29aNWJcIixcblx0XCJzcGluXCI6IFwibG9hZGluZ1NwaW5uZXJfc3Bpbl9fMzNkWDlcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyYXBwZXJcIjogXCJ3cmFwcGVyX3dyYXBwZXJfX3IzNEhwXCIsXG5cdFwiY29udGFpbmVyXCI6IFwid3JhcHBlcl9jb250YWluZXJfX0ctQ01NXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwic2V0dGluZ3Nfd3JhcHBlcl9fbTEzNUtcIixcblx0XCJwcm9maWxlX2ltYWdlXCI6IFwic2V0dGluZ3NfcHJvZmlsZV9pbWFnZV9fb29lUnVcIixcblx0XCJjb250YWluZXJcIjogXCJzZXR0aW5nc19jb250YWluZXJfXzFlVFN0XCIsXG5cdFwiYmxvY2tcIjogXCJzZXR0aW5nc19ibG9ja19fZDZWM05cIixcblx0XCJwYXNzd29yZENvbnRhaW5lclwiOiBcInNldHRpbmdzX3Bhc3N3b3JkQ29udGFpbmVyX18xeVlOcFwiLFxuXHRcImltZ193cmFwcGVyXCI6IFwic2V0dGluZ3NfaW1nX3dyYXBwZXJfXzNwWGVDXCIsXG5cdFwibm9Qcm9maWxlSW1hZ2VcIjogXCJzZXR0aW5nc19ub1Byb2ZpbGVJbWFnZV9fM3VnYlVcIixcblx0XCJzZWxlY3RfaW1hZ2VcIjogXCJzZXR0aW5nc19zZWxlY3RfaW1hZ2VfXzFrNXY2XCIsXG5cdFwiaW1nX2Vycm9yXCI6IFwic2V0dGluZ3NfaW1nX2Vycm9yX18zSzdubVwiLFxuXHRcInVuYWN0aXZlXCI6IFwic2V0dGluZ3NfdW5hY3RpdmVfXzJlLUZpXCIsXG5cdFwibG9nb3V0QlROXCI6IFwic2V0dGluZ3NfbG9nb3V0QlROX18yeUNrdlwiXG59O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gQ2hhbmdlIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIscHJvcHMsUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIix7XCJkXCI6XCJtMzMxLjI3MzQzOCAxNzVoLTEwLjU2NjQwN2MtLjYxNzE4NyAwLTEuMTgzNTkzLS4zNjMyODEtMS40Mzc1LS45MjU3ODFsLTIuNjU2MjUtNS43ODUxNTdjLTYuNzU3ODEyLTE0LjcyNjU2Mi0yMS41OTM3NS0yNC4yNDIxODctMzcuNzk2ODc1LTI0LjI0MjE4N2gtMzkuOTI1NzgxYy0xNi4yMDMxMjUgMC0zMS4wMzkwNjMgOS41MTU2MjUtMzcuNzkyOTY5IDI0LjIzODI4MWwtMi42NTYyNSA1Ljc4OTA2M2MtLjI1NzgxMi41NjI1LS44MjQyMTguOTI1NzgxLTEuNDQxNDA2LjkyNTc4MWgtMTIuMjY5NTMxYy0yMy41NjI1IDAtNDIuNzMwNDY5IDE5LjE2Nzk2OS00Mi43MzA0NjkgNDIuNzI2NTYydjg5LjVjMCAyMy41NjI1IDE5LjE2Nzk2OSA0Mi43MjY1NjMgNDIuNzI2NTYyIDQyLjcyNjU2M2gxNDYuNTQ2ODc2YzIzLjU1ODU5MyAwIDQyLjcyNjU2Mi0xOS4xNjQwNjMgNDIuNzI2NTYyLTQyLjcyNjU2M3YtODkuNWMwLTIzLjU1ODU5My0xOS4xNjc5NjktNDIuNzI2NTYyLTQyLjcyNjU2Mi00Mi43MjY1NjJ6bTIuNzI2NTYyIDEzMi4yMjY1NjJjMCAxLjUwMzkwNy0xLjIyMjY1NiAyLjcyNjU2My0yLjcyNjU2MiAyLjcyNjU2M2gtMTQ2LjU0Njg3NmMtMS41MDM5MDYgMC0yLjcyNjU2Mi0xLjIyMjY1Ni0yLjcyNjU2Mi0yLjcyNjU2M3YtODkuNWMwLTEuNTAzOTA2IDEuMjIyNjU2LTIuNzI2NTYyIDIuNzI2NTYyLTIuNzI2NTYyaDEyLjI2OTUzMmMxNi4yMDMxMjUgMCAzMS4wMzkwNjItOS41MTU2MjUgMzcuNzk2ODc1LTI0LjI0MjE4OGwyLjY1NjI1LTUuNzg5MDYyYy4yNTc4MTItLjU2MjUuODIwMzEyLS45MjE4NzUgMS40NDE0MDYtLjkyMTg3NWgzOS45MjU3ODFjLjYxNzE4OCAwIDEuMTc5Njg4LjM1OTM3NSAxLjQzNzUuOTIxODc1bDIuNjU2MjUgNS43OTI5NjljNi43NjE3MTkgMTQuNzIyNjU2IDIxLjU5Mzc1IDI0LjIzODI4MSAzNy43OTY4NzUgMjQuMjM4MjgxaDEwLjU2NjQwN2MxLjUwMzkwNiAwIDIuNzI2NTYyIDEuMjIyNjU2IDIuNzI2NTYyIDIuNzI2NTYyem0tNDYtNTEuMjI2NTYyYzAgMTYuNTcwMzEyLTEzLjQyOTY4OCAzMC0zMCAzMHMtMzAtMTMuNDI5Njg4LTMwLTMwIDEzLjQyOTY4OC0zMCAzMC0zMCAzMCAxMy40Mjk2ODggMzAgMzB6bTIyNC0xNzB2NTBjMCAyNy41NzAzMTItMjIuNDI5Njg4IDUwLTUwIDUwaC01MGMtMTEuMDQ2ODc1IDAtMjAtOC45NTMxMjUtMjAtMjBzOC45NTMxMjUtMjAgMjAtMjBoMjkuOTM3NWMtMzguNTgyMDMxLTY1LjA4MjAzMS0xMDkuMjA3MDMxLTEwNi0xODUuOTM3NS0xMDYtMTEuMDQ2ODc1IDAtMjAtOC45NTMxMjUtMjAtMjBzOC45NTMxMjUtMjAgMjAtMjBjNTAuMjMwNDY5IDAgOTguODYzMjgxIDE0LjU0Njg3NSAxNDAuNjQwNjI1IDQyLjA2MjUgMzAuNDE0MDYzIDIwLjAzMTI1IDU2LjAxMTcxOSA0Ni4wODIwMzEgNzUuMzU5Mzc1IDc2LjQ1NzAzMXYtMzIuNTE5NTMxYzAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwem0tMjI0Ljk0NTMxMiA0MDQuOTUzMTI1Yy40NjA5MzcgMTEuMDM1MTU2LTguMTA5Mzc2IDIwLjM1NTQ2OS0xOS4xNDg0MzggMjAuODE2NDA2LTMuNjIxMDk0LjE1MjM0NC03LjI5Mjk2OS4yMzA0NjktMTAuOTA2MjUuMjMwNDY5LTUwLjAxOTUzMSAwLTk4LjQ4MDQ2OS0xNC40MzM1OTQtMTQwLjE0ODQzOC00MS43MzgyODEtMzEuMTQ4NDM3LTIwLjQxMDE1Ny01Ny4yODEyNS00Ny4xNDg0MzgtNzYuODUxNTYyLTc4LjM3NXYzNC4xMTMyODFjMCAxMS4wNDY4NzUtOC45NTMxMjUgMjAtMjAgMjBzLTIwLTguOTUzMTI1LTIwLTIwdi01MGMwLTI3LjU3MDMxMiAyMi40Mjk2ODgtNTAgNTAtNTBoNTBjMTEuMDQ2ODc1IDAgMjAgOC45NTMxMjUgMjAgMjBzLTguOTUzMTI1IDIwLTIwIDIwaC0yOC45Mjk2ODhjMzguNTg5ODQ0IDY1LjA1NDY4OCAxMDkuMjkyOTY5IDEwNiAxODUuOTI5Njg4IDEwNiAzLjA1ODU5NCAwIDYuMTY3OTY5LS4wNjY0MDYgOS4yMzgyODEtLjE5MTQwNiAxMS4wNDI5NjktLjQ2ODc1IDIwLjM1NTQ2OSA4LjEwOTM3NSAyMC44MTY0MDcgMTkuMTQ0NTMxem0tMjg3LjA1NDY4OC0yMzQuOTUzMTI1YzAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwLTguOTUzMTI1IDIwLTIwIDIwLTIwLTguOTUzMTI1LTIwLTIwem0xMS03M2MwLTExLjA0Njg3NSA4Ljk1MzEyNS0yMCAyMC0yMHMyMCA4Ljk1MzEyNSAyMCAyMC04Ljk1MzEyNSAyMC0yMCAyMC0yMC04Ljk1MzEyNS0yMC0yMHptMzQtNjZjMC0xMS4wNDY4NzUgOC45NTMxMjUtMjAgMjAtMjBzMjAgOC45NTMxMjUgMjAgMjAtOC45NTMxMjUgMjAtMjAgMjAtMjAtOC45NTMxMjUtMjAtMjB6bTUyLTUyYzAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwLTguOTUzMTI1IDIwLTIwIDIwLTIwLTguOTUzMTI1LTIwLTIwem02Ni0zNGMwLTExLjA0Njg3NSA4Ljk1MzEyNS0yMCAyMC0yMHMyMCA4Ljk1MzEyNSAyMCAyMC04Ljk1MzEyNSAyMC0yMCAyMC0yMC04Ljk1MzEyNS0yMC0yMHptMzQ5IDIyNWMwIDExLjA0Njg3NS04Ljk1MzEyNSAyMC0yMCAyMHMtMjAtOC45NTMxMjUtMjAtMjAgOC45NTMxMjUtMjAgMjAtMjAgMjAgOC45NTMxMjUgMjAgMjB6bS0xMSA3MWMwIDExLjA0Njg3NS04Ljk1MzEyNSAyMC0yMCAyMHMtMjAtOC45NTMxMjUtMjAtMjAgOC45NTMxMjUtMjAgMjAtMjAgMjAgOC45NTMxMjUgMjAgMjB6bS0zMiA2NGMwIDExLjA0Njg3NS04Ljk1MzEyNSAyMC0yMCAyMHMtMjAtOC45NTMxMjUtMjAtMjAgOC45NTMxMjUtMjAgMjAtMjAgMjAgOC45NTMxMjUgMjAgMjB6bS00OSA1MmMwIDExLjA0Njg3NS04Ljk1MzEyNSAyMC0yMCAyMHMtMjAtOC45NTMxMjUtMjAtMjAgOC45NTMxMjUtMjAgMjAtMjAgMjAgOC45NTMxMjUgMjAgMjB6bS02MyAzNWMwIDExLjA0Njg3NS04Ljk1MzEyNSAyMC0yMCAyMHMtMjAtOC45NTMxMjUtMjAtMjAgOC45NTMxMjUtMjAgMjAtMjAgMjAgOC45NTMxMjUgMjAgMjB6bTAgMFwifSkpO1xufVxuXG5DaGFuZ2UuZGVmYXVsdFByb3BzID0ge1wiaGVpZ2h0XCI6XCI1MTJwdFwiLFwidmlld0JveFwiOlwiMCAwIDUxMiA1MTJcIixcIndpZHRoXCI6XCI1MTJwdFwifTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGFuZ2U7XG5cbkNoYW5nZS5kZWZhdWx0ID0gQ2hhbmdlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJheGlvcyIsIlJvdXRlciIsIkJBU0VfVVJMIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGVhZGVycyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwib3JpZ2luYWxSZXF1ZXN0Iiwic3RhdHVzIiwidXJsIiwicHVzaCIsIl9yZXRyeSIsInJlZnJlc2hUb2tlbiIsInBvc3QiLCJ0aGVuIiwicmVzIiwic2V0SXRlbSIsImRhdGEiLCJhY2Nlc3MiLCJkZWZhdWx0cyIsImNvbW1vbiIsImxvZ2luIiwicGFyYW1zIiwicmVzb2x2ZSIsInJlZnJlc2giLCJjYXRjaCIsIm1lc3NhZ2UiLCJkZXRhaWwiLCJyZWdpc3RlciIsImVycm9ycyIsIlJlYWN0IiwiY2xhc3NlcyIsIkxvYWRpbmdTcGlubmVyIiwiTG9hZGluZyIsIndyYXBwZXIiLCJ1c2VFZmZlY3QiLCJTVUNDRVNTIiwiRVJST1IiLCJ1c2VEaXNwYXRjaCIsInNldEluZm9Cb3giLCJJbmZvQm94IiwidHlwZSIsImRpc3BhdGNoIiwic2V0VGltZW91dCIsInRvYXN0Iiwic3VjY2VzcyIsImxvYWRlciIsInVzZUNvbnRleHQiLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsImNvbm5lY3QiLCJ3aXRoQXV0aCIsIkNvbXBvbmVudCIsIm9wdGlvbnMiLCJBdXRoZW50aWNhdGVkUm91dGUiLCJsb2FkaW5nIiwiY29tcG9uZW50RGlkTW91bnQiLCJwcm9wcyIsImlzTG9nZ2VkSW4iLCJzZXRTdGF0ZSIsInJlbmRlciIsInN0YXRlIiwiT2JqZWN0Iiwia2V5cyIsInVzZXJSZWR1Y2VyIiwidXNlciIsImxlbmd0aCIsIldyYXBwZXIiLCJjaGlsZHJlbiIsImZ1bGxfbG9hZGluZyIsInNpbXBsZVJlZHVjZXIiLCJjb250YWluZXIiLCJVU0VSIiwiT1RIRVIiLCJNRVNTQUdFIiwiU0VBUkNIIiwidXNlU3RhdGUiLCJsb2dvdXQiLCJ1cGRhdGVVc2VyIiwiQ2hhbmdlTG9nbyIsIldpdGhBdXRoIiwiSW5kZXgiLCJpbmZvX2JveF90eXBlIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJhdmF0YXIiLCJzZXREYXRhIiwib25TYXZlQ2xpY2siLCJpZCIsIm9uTG9nb3V0Q2xpY2siLCJvbkltYWdlQ2hhbmdlIiwiZXZlbnQiLCJwaWN0dXJlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmb3JtX2RhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVuZGVmaW5lZCIsImpvaW4iLCJpbWdfd3JhcHBlciIsInByb2ZpbGVfaW1hZ2UiLCJub1Byb2ZpbGVJbWFnZSIsInNlbGVjdF9pbWFnZSIsImltZ19lcnJvciIsInZhbHVlIiwibG9nb3V0QlROIiwiRlVMTF9MT0FESU5HX0ZBTFNFIiwiRlVMTF9MT0FESU5HX1RSVUUiLCJMT0FESU5HX0ZBTFNFIiwiTE9BRElOR19UUlVFIiwiU0VUX0lORk9fQk9YIiwic2V0TG9hZGluZyIsImxvYWRpbmdTdGF0ZSIsInNldEZ1bGxMb2FkaW5nIiwicGF5bG9hZCIsIlNFVF9VU0VSX1NVQ0NFU1MiLCJTRVRfVVNFUl9FUlJPUiIsIlVQREFURV9VU0VSIiwiTE9HT1VUIiwic2V0VXNlciIsImdldCIsInJlc3VsdCIsInJlbW92ZUl0ZW0iLCJwdXQiLCJTRVRfT1RIRVJfVVNFUiIsIkNMRUFSX09USEVSX1VTRVIiXSwic291cmNlUm9vdCI6IiJ9