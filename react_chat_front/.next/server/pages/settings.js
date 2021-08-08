(function() {
var exports = {};
exports.id = "pages/settings";
exports.ids = ["pages/settings"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

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

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["127.0.0.1"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(img, placeholder) {
  if (placeholder === 'blur' && img) {
    const handleLoad = () => {
      if (!img.src.startsWith('data:')) {
        const p = 'decode' in img ? img.decode() : Promise.resolve();
        p.catch(() => {}).then(() => {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        });
      }
    };

    if (img.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      handleLoad();
    } else {
      img.onload = handleLoad;
    }
  }
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp']; // should match next-image-loader

        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = (0, _extends2.default)({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  }, placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url("${blurDataURL}")`
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: element => {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

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
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings.module.css */ "./pages/settings/settings.module.css");
/* harmony import */ var _settings_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_settings_module_css__WEBPACK_IMPORTED_MODULE_11__);
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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_10__);

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
      className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().container), 'glass'].join(' '),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().img_wrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_10___default()), {
            quality: 100,
            src: userData.avatar !== undefined && userData.avatar !== null ? userData.avatar : '/images/user.png',
            alt: userData.username,
            width: 120,
            height: 120,
            className: [(_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().profile_image), userData.avatar === undefined ? (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().noProfileImage) : undefined].join(' ')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().select_image),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
              onChange: onImageChange,
              type: "file",
              id: "img",
              name: "img",
              accept: "image/*"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_src_assets_svg_change_svg__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 28
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this), errors.avatar ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: ["error", (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().img_error)].join(' '),
          children: ["* ", errors.avatar[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
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
          lineNumber: 88,
          columnNumber: 17
        }, this), errors.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "error",
          children: ["* ", errors.username[0]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
          lineNumber: 92,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onSaveClick,
          children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoadingSpinner_LoadingSpinner__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 58
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "SAVE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 78
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          onClick: onLogoutClick,
          className: (_settings_module_css__WEBPACK_IMPORTED_MODULE_11___default().logoutBTN),
          children: "LOGOUT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
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
	"noProfileImage": "settings_noProfileImage__3ugbU",
	"select_image": "settings_select_image__1k5v6",
	"img_error": "settings_img_error__3K7nm",
	"unactive": "settings_unactive__2e-Fi",
	"logoutBTN": "settings_logoutBTN__2yCkv"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvRnVsbExvYWRpbmcvTG9hZGluZy5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci9Mb2FkaW5nU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XaXRoQXV0aC5qcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3BhZ2VzL3NldHRpbmdzL2luZGV4LmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9zdG9yZS9hY3Rpb25zL3NpbXBsZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL2FjdGlvbnMvdXNlckFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3N0b3JlL3R5cGVzLmpzIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvLi9jb21wb25lbnRzL0Z1bGxMb2FkaW5nL2Z1bGxMb2FkaW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIvbG9hZGluZ1NwaW5uZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vY29tcG9uZW50cy9XcmFwcGVyL3dyYXBwZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250Ly4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC8uL3NyYy9hc3NldHMvc3ZnL2NoYW5nZS5zdmciLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vcmVhY3RfY2hhdF9mcm9udC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3JlYWN0X2NoYXRfZnJvbnQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9yZWFjdF9jaGF0X2Zyb250L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJheGlvc0luc3RhbmNlIiwiYXhpb3MiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhlYWRlcnMiLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNwb25zZSIsIm9yaWdpbmFsUmVxdWVzdCIsInN0YXR1cyIsInVybCIsIlJvdXRlciIsIl9yZXRyeSIsInJlZnJlc2hUb2tlbiIsInBvc3QiLCJ0aGVuIiwicmVzIiwic2V0SXRlbSIsImRhdGEiLCJhY2Nlc3MiLCJkZWZhdWx0cyIsImNvbW1vbiIsImxvZ2luIiwicGFyYW1zIiwicmVzb2x2ZSIsInJlZnJlc2giLCJjYXRjaCIsIm1lc3NhZ2UiLCJkZXRhaWwiLCJyZWdpc3RlciIsImVycm9ycyIsIkxvYWRpbmciLCJwcm9wcyIsImNsYXNzZXMiLCJMb2FkaW5nU3Bpbm5lciIsImxvYWRlciIsIndpdGhBdXRoIiwiQ29tcG9uZW50Iiwib3B0aW9ucyIsIkF1dGhlbnRpY2F0ZWRSb3V0ZSIsIlJlYWN0IiwibG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50IiwiaXNMb2dnZWRJbiIsInNldFN0YXRlIiwicmVuZGVyIiwic3RhdGUiLCJjb25uZWN0IiwiT2JqZWN0Iiwia2V5cyIsInVzZXJSZWR1Y2VyIiwidXNlciIsImxlbmd0aCIsIldyYXBwZXIiLCJjaGlsZHJlbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIkltYWdlIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyIiwiX2V4dGVuZHMyIiwiX3JlYWN0IiwiX2hlYWQiLCJfdG9CYXNlIiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImRlZmF1bHRMb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiZGVmYXVsdCIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwid2lkdGgiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInB1c2giLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJNYXRoIiwibWluIiwid2lkdGhzIiwiZmlsdGVyIiwicyIsImtpbmQiLCJTZXQiLCJtYXAiLCJ3IiwiZmluZCIsInAiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImkiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJyZW1vdmVQbGFjZWhvbGRlciIsImltZyIsInBsYWNlaG9sZGVyIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcmVmIiwicHJpb3JpdHkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiY29uc29sZSIsIndhcm4iLCJWQUxJRF9CTFVSX0VYVCIsImlzTGF6eSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsImJvcmRlciIsIm1hcmdpbiIsImRpc3BsYXkiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJpbWdBdHRyaWJ1dGVzIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInJvbGUiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVmIiwiZWxlbWVudCIsImtleSIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsIlVSTCIsImVyciIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNhbmNlbElkbGVDYWxsYmFjayIsImlkIiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwidXNlRWZmZWN0IiwiaWRsZUNhbGxiYWNrIiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJzZXQiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInRhcmdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJJbmRleCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInNpbXBsZVJlZHVjZXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImF2YXRhciIsInNldERhdGEiLCJvblNhdmVDbGljayIsInNldExvYWRpbmciLCJ1cGRhdGVVc2VyIiwib25Mb2dvdXRDbGljayIsInNldEZ1bGxMb2FkaW5nIiwibG9nb3V0Iiwib25JbWFnZUNoYW5nZSIsImV2ZW50IiwicGljdHVyZSIsImZpbGVzIiwiY3JlYXRlT2JqZWN0VVJMIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ2YWx1ZSIsIldpdGhBdXRoIiwiaW5pdGlhbFN0YXRlIiwibG9hZGluZ1N0YXRlIiwidHlwZSIsIkxPQURJTkdfVFJVRSIsIkxPQURJTkdfRkFMU0UiLCJGVUxMX0xPQURJTkdfVFJVRSIsIkZVTExfTE9BRElOR19GQUxTRSIsInNldFVzZXIiLCJyZXN1bHQiLCJTRVRfVVNFUl9TVUNDRVNTIiwicGF5bG9hZCIsIlNFVF9VU0VSX0VSUk9SIiwicmVtb3ZlSXRlbSIsIkxPR09VVCIsIlVQREFURV9VU0VSIiwiU0VUX09USEVSX1VTRVIiLCJDTEVBUl9PVEhFUl9VU0VSIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBRUE7QUFHQSxNQUFNQSxRQUFRLEdBQUcsdUJBQWpCO0FBR08sTUFBTUMsYUFBYSxHQUFHQyxtREFBQSxDQUFhO0FBQUNDLFNBQU8sRUFBRUg7QUFBVixDQUFiLENBQXRCO0FBRVBDLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQkMsT0FBM0IsQ0FBbUNDLEdBQW5DLENBQ0lDLE1BQU0sSUFBSTtBQUVOLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFFBQXJCLENBQWQ7O0FBQ0EsTUFBSUYsS0FBSixFQUFXO0FBQ1BELFVBQU0sQ0FBQ0ksT0FBUCxDQUFlLGVBQWYsSUFBa0MsU0FBU0gsS0FBM0M7QUFDSDs7QUFFRCxTQUFPRCxNQUFQO0FBQ0gsQ0FUTCxFQVVJSyxLQUFLLElBQUk7QUFDTEMsU0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWY7QUFDSCxDQVpMO0FBY0FYLGFBQWEsQ0FBQ0csWUFBZCxD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Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cDovLzEyNy4wLjAuMTo4MDAwJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtiYXNlVVJMOiBCQVNFX1VSTH0pXHJcblxyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShcclxuICAgIGNvbmZpZyA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2VzcycpXHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSAnSldUICcgKyB0b2tlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9LFxyXG4gICAgZXJyb3IgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVqZWN0KGVycm9yKVxyXG4gICAgfSk7XHJcblxyXG5heGlvc0luc3RhbmNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2VcclxufSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWc7XHJcblxyXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxICYmIG9yaWdpbmFsUmVxdWVzdC51cmwgPT09XHJcbiAgICAgICAgYC9hdXRoL2p3dC9yZWZyZXNoL2ApIHtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgIW9yaWdpbmFsUmVxdWVzdC5fcmV0cnkpIHtcclxuXHJcbiAgICAgICAgb3JpZ2luYWxSZXF1ZXN0Ll9yZXRyeSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2gnKVxyXG4gICAgICAgIHJldHVybiBheGlvc0luc3RhbmNlLnBvc3QoJy9hdXRoL2p3dC9yZWZyZXNoLycsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwicmVmcmVzaFwiOiByZWZyZXNoVG9rZW5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzJywgcmVzLmRhdGEuYWNjZXNzKVxyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zSW5zdGFuY2UuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXSA9ICdKV1QgJyArIHJlcy5kYXRhLmFjY2VzcztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3NJbnN0YW5jZShvcmlnaW5hbFJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vYXV0aC9qd3QvY3JlYXRlL2AsIHBhcmFtcykudGhlbihhc3luYyByZXNwb25zZSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVmcmVzaCcsIHJlc3BvbnNlLmRhdGEucmVmcmVzaClcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY2VzcycsIHJlc3BvbnNlLmRhdGEuYWNjZXNzKVxyXG4gICAgICAgICAgICByZXNvbHZlKHtzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c30pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZWplY3Qoe3N0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBtZXNzYWdlOiBlcnJvci5yZXNwb25zZS5kYXRhLmRldGFpbH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IGFzeW5jIChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vYXV0aC91c2Vycy9gLCBwYXJhbXMpLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHtzdGF0dXM6IHJlc3BvbnNlLnN0YXR1c30pXHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICByZWplY3Qoe3N0YXR1czogZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvcnM6IGVycm9yLnJlc3BvbnNlLmRhdGF9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL2Z1bGxMb2FkaW5nLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi4vTG9hZGluZ1NwaW5uZXIvTG9hZGluZ1NwaW5uZXJcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmcocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxMb2FkaW5nU3Bpbm5lci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2xvYWRpbmdTcGlubmVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdTcGlubmVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkZXJ9Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyOyIsImltcG9ydCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vRnVsbExvYWRpbmcvTG9hZGluZ1wiO1xyXG5pbXBvcnQgUm91dGVyLCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgd2l0aEF1dGggPSAoQ29tcG9uZW50ID0gbnVsbCwgb3B0aW9ucyA9IHt9KSA9PiB7XHJcbiAgICBjbGFzcyBBdXRoZW50aWNhdGVkUm91dGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgICAgIHN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcigpIHtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPExvYWRpbmcvPjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnRoaXMucHJvcHN9IC8+O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29ubmVjdCgoc3RhdGUpID0+IChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlzTG9nZ2VkSW46IE9iamVjdC5rZXlzKHN0YXRlLnVzZXJSZWR1Y2VyLnVzZXIpLmxlbmd0aCA+IDBcclxuICAgICAgICB9KSkoQXV0aGVudGljYXRlZFJvdXRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi93cmFwcGVyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFdyYXBwZXIoe2NoaWxkcmVufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W2NsYXNzZXMud3JhcHBlcl19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXI7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD1JbWFnZTt2YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfaGVhZD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvaGVhZFwiKSk7dmFyIF90b0Jhc2U9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0XCIpO3ZhciBfaW1hZ2VDb25maWc9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWdcIik7dmFyIF91c2VJbnRlcnNlY3Rpb249cmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtpZih0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpeztnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEPXRydWU7fWNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTPVsnbGF6eScsJ2VhZ2VyJyx1bmRlZmluZWRdO2NvbnN0IGxvYWRlcnM9bmV3IE1hcChbWydpbWdpeCcsaW1naXhMb2FkZXJdLFsnY2xvdWRpbmFyeScsY2xvdWRpbmFyeUxvYWRlcl0sWydha2FtYWknLGFrYW1haUxvYWRlcl0sWydkZWZhdWx0JyxkZWZhdWx0TG9hZGVyXV0pO2NvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVM9WydmaWxsJywnZml4ZWQnLCdpbnRyaW5zaWMnLCdyZXNwb25zaXZlJyx1bmRlZmluZWRdO2Z1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpe3JldHVybiBzcmMuZGVmYXVsdCE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKXtyZXR1cm4gc3JjLnNyYyE9PXVuZGVmaW5lZDt9ZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKXtyZXR1cm4gdHlwZW9mIHNyYz09PSdvYmplY3QnJiYoaXNTdGF0aWNSZXF1aXJlKHNyYyl8fGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO31jb25zdHtkZXZpY2VTaXplczpjb25maWdEZXZpY2VTaXplcyxpbWFnZVNpemVzOmNvbmZpZ0ltYWdlU2l6ZXMsbG9hZGVyOmNvbmZpZ0xvYWRlcixwYXRoOmNvbmZpZ1BhdGgsZG9tYWluczpjb25maWdEb21haW5zfT1wcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUU3x8X2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDsvLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzPVsuLi5jb25maWdEZXZpY2VTaXplcywuLi5jb25maWdJbWFnZVNpemVzXTtjb25maWdEZXZpY2VTaXplcy5zb3J0KChhLGIpPT5hLWIpO2FsbFNpemVzLnNvcnQoKGEsYik9PmEtYik7ZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLGxheW91dCxzaXplcyl7aWYoc2l6ZXMmJihsYXlvdXQ9PT0nZmlsbCd8fGxheW91dD09PSdyZXNwb25zaXZlJykpey8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG5jb25zdCB2aWV3cG9ydFdpZHRoUmU9LyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7Y29uc3QgcGVyY2VudFNpemVzPVtdO2ZvcihsZXQgbWF0Y2g7bWF0Y2g9dmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpO21hdGNoKXtwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO31pZihwZXJjZW50U2l6ZXMubGVuZ3RoKXtjb25zdCBzbWFsbGVzdFJhdGlvPU1hdGgubWluKC4uLnBlcmNlbnRTaXplcykqMC4wMTtyZXR1cm57d2lkdGhzOmFsbFNpemVzLmZpbHRlcihzPT5zPj1jb25maWdEZXZpY2VTaXplc1swXSpzbWFsbGVzdFJhdGlvKSxraW5kOid3J307fXJldHVybnt3aWR0aHM6YWxsU2l6ZXMsa2luZDondyd9O31pZih0eXBlb2Ygd2lkdGghPT0nbnVtYmVyJ3x8bGF5b3V0PT09J2ZpbGwnfHxsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpe3JldHVybnt3aWR0aHM6Y29uZmlnRGV2aWNlU2l6ZXMsa2luZDondyd9O31jb25zdCB3aWR0aHM9Wy4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbi8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4vLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbi8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbi8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuW3dpZHRoLHdpZHRoKjIvKiwgd2lkdGggKiAzKi9dLm1hcCh3PT5hbGxTaXplcy5maW5kKHA9PnA+PXcpfHxhbGxTaXplc1thbGxTaXplcy5sZW5ndGgtMV0pKV07cmV0dXJue3dpZHRocyxraW5kOid4J307fWZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGgscXVhbGl0eSxzaXplcyxsb2FkZXJ9KXtpZih1bm9wdGltaXplZCl7cmV0dXJue3NyYyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07fWNvbnN0e3dpZHRocyxraW5kfT1nZXRXaWR0aHMod2lkdGgsbGF5b3V0LHNpemVzKTtjb25zdCBsYXN0PXdpZHRocy5sZW5ndGgtMTtyZXR1cm57c2l6ZXM6IXNpemVzJiZraW5kPT09J3cnPycxMDB2dyc6c2l6ZXMsc3JjU2V0OndpZHRocy5tYXAoKHcsaSk9PmAke2xvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d30pfSAke2tpbmQ9PT0ndyc/dzppKzF9JHtraW5kfWApLmpvaW4oJywgJyksLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbi8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbi8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbi8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4vLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbi8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94Llxuc3JjOmxvYWRlcih7c3JjLHF1YWxpdHksd2lkdGg6d2lkdGhzW2xhc3RdfSl9O31mdW5jdGlvbiBnZXRJbnQoeCl7aWYodHlwZW9mIHg9PT0nbnVtYmVyJyl7cmV0dXJuIHg7fWlmKHR5cGVvZiB4PT09J3N0cmluZycpe3JldHVybiBwYXJzZUludCh4LDEwKTt9cmV0dXJuIHVuZGVmaW5lZDt9ZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKXtjb25zdCBsb2FkPWxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7aWYobG9hZCl7cmV0dXJuIGxvYWQoKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb290OmNvbmZpZ1BhdGh9LGxvYWRlclByb3BzKSk7fXRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTt9Ly8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIHJlbW92ZVBsYWNlaG9sZGVyKGltZyxwbGFjZWhvbGRlcil7aWYocGxhY2Vob2xkZXI9PT0nYmx1cicmJmltZyl7Y29uc3QgaGFuZGxlTG9hZD0oKT0+e2lmKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpe2NvbnN0IHA9J2RlY29kZSdpbiBpbWc/aW1nLmRlY29kZSgpOlByb21pc2UucmVzb2x2ZSgpO3AuY2F0Y2goKCk9Pnt9KS50aGVuKCgpPT57aW1nLnN0eWxlLmZpbHRlcj0nbm9uZSc7aW1nLnN0eWxlLmJhY2tncm91bmRTaXplPSdub25lJztpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlPSdub25lJzt9KTt9fTtpZihpbWcuY29tcGxldGUpey8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbmhhbmRsZUxvYWQoKTt9ZWxzZXtpbWcub25sb2FkPWhhbmRsZUxvYWQ7fX19ZnVuY3Rpb24gSW1hZ2UoX3JlZil7bGV0e3NyYyxzaXplcyx1bm9wdGltaXplZD1mYWxzZSxwcmlvcml0eT1mYWxzZSxsb2FkaW5nLGNsYXNzTmFtZSxxdWFsaXR5LHdpZHRoLGhlaWdodCxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb24sbG9hZGVyPWRlZmF1bHRJbWFnZUxvYWRlcixwbGFjZWhvbGRlcj0nZW1wdHknLGJsdXJEYXRhVVJMfT1fcmVmLGFsbD0oMCxfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZixbXCJzcmNcIixcInNpemVzXCIsXCJ1bm9wdGltaXplZFwiLFwicHJpb3JpdHlcIixcImxvYWRpbmdcIixcImNsYXNzTmFtZVwiLFwicXVhbGl0eVwiLFwid2lkdGhcIixcImhlaWdodFwiLFwib2JqZWN0Rml0XCIsXCJvYmplY3RQb3NpdGlvblwiLFwibG9hZGVyXCIsXCJwbGFjZWhvbGRlclwiLFwiYmx1ckRhdGFVUkxcIl0pO2xldCByZXN0PWFsbDtsZXQgbGF5b3V0PXNpemVzPydyZXNwb25zaXZlJzonaW50cmluc2ljJztpZignbGF5b3V0J2luIHJlc3Qpey8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG5pZihyZXN0LmxheW91dClsYXlvdXQ9cmVzdC5sYXlvdXQ7Ly8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuZGVsZXRlIHJlc3RbJ2xheW91dCddO31sZXQgc3RhdGljU3JjPScnO2lmKGlzU3RhdGljSW1wb3J0KHNyYykpe2NvbnN0IHN0YXRpY0ltYWdlRGF0YT1pc1N0YXRpY1JlcXVpcmUoc3JjKT9zcmMuZGVmYXVsdDpzcmM7aWYoIXN0YXRpY0ltYWdlRGF0YS5zcmMpe3Rocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9Ymx1ckRhdGFVUkw9Ymx1ckRhdGFVUkx8fHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtzdGF0aWNTcmM9c3RhdGljSW1hZ2VEYXRhLnNyYztpZighbGF5b3V0fHxsYXlvdXQhPT0nZmlsbCcpe2hlaWdodD1oZWlnaHR8fHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7d2lkdGg9d2lkdGh8fHN0YXRpY0ltYWdlRGF0YS53aWR0aDtpZighc3RhdGljSW1hZ2VEYXRhLmhlaWdodHx8IXN0YXRpY0ltYWdlRGF0YS53aWR0aCl7dGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTt9fX1zcmM9dHlwZW9mIHNyYz09PSdzdHJpbmcnP3NyYzpzdGF0aWNTcmM7Y29uc3Qgd2lkdGhJbnQ9Z2V0SW50KHdpZHRoKTtjb25zdCBoZWlnaHRJbnQ9Z2V0SW50KGhlaWdodCk7Y29uc3QgcXVhbGl0eUludD1nZXRJbnQocXVhbGl0eSk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2lmKCFzcmMpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHt3aWR0aCxoZWlnaHQscXVhbGl0eX0pfWApO31pZighVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO31pZih0eXBlb2Ygd2lkdGhJbnQhPT0ndW5kZWZpbmVkJyYmaXNOYU4od2lkdGhJbnQpfHx0eXBlb2YgaGVpZ2h0SW50IT09J3VuZGVmaW5lZCcmJmlzTmFOKGhlaWdodEludCkpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO31pZighVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpe3Rocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7fWlmKHByaW9yaXR5JiZsb2FkaW5nPT09J2xhenknKXt0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7fWlmKHBsYWNlaG9sZGVyPT09J2JsdXInKXtpZihsYXlvdXQhPT0nZmlsbCcmJih3aWR0aEludHx8MCkqKGhlaWdodEludHx8MCk8MTYwMCl7Y29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTt9aWYoIWJsdXJEYXRhVVJMKXtjb25zdCBWQUxJRF9CTFVSX0VYVD1bJ2pwZWcnLCdwbmcnLCd3ZWJwJ107Ly8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG50aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTt9fX1sZXQgaXNMYXp5PSFwcmlvcml0eSYmKGxvYWRpbmc9PT0nbGF6eSd8fHR5cGVvZiBsb2FkaW5nPT09J3VuZGVmaW5lZCcpO2lmKHNyYyYmc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6Jykpey8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG51bm9wdGltaXplZD10cnVlO2lzTGF6eT1mYWxzZTt9Y29uc3Rbc2V0UmVmLGlzSW50ZXJzZWN0ZWRdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnLGRpc2FibGVkOiFpc0xhenl9KTtjb25zdCBpc1Zpc2libGU9IWlzTGF6eXx8aXNJbnRlcnNlY3RlZDtsZXQgd3JhcHBlclN0eWxlO2xldCBzaXplclN0eWxlO2xldCBzaXplclN2ZztsZXQgaW1nU3R5bGU9KDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcscGFkZGluZzowLGJvcmRlcjonbm9uZScsbWFyZ2luOidhdXRvJyxkaXNwbGF5OidibG9jaycsd2lkdGg6MCxoZWlnaHQ6MCxtaW5XaWR0aDonMTAwJScsbWF4V2lkdGg6JzEwMCUnLG1pbkhlaWdodDonMTAwJScsbWF4SGVpZ2h0OicxMDAlJyxvYmplY3RGaXQsb2JqZWN0UG9zaXRpb259LHBsYWNlaG9sZGVyPT09J2JsdXInP3tmaWx0ZXI6J2JsdXIoMjBweCknLGJhY2tncm91bmRTaXplOidjb3ZlcicsYmFja2dyb3VuZEltYWdlOmB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWB9OnVuZGVmaW5lZCk7aWYodHlwZW9mIHdpZHRoSW50IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBoZWlnaHRJbnQhPT0ndW5kZWZpbmVkJyYmbGF5b3V0IT09J2ZpbGwnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG5jb25zdCBxdW90aWVudD1oZWlnaHRJbnQvd2lkdGhJbnQ7Y29uc3QgcGFkZGluZ1RvcD1pc05hTihxdW90aWVudCk/JzEwMCUnOmAke3F1b3RpZW50KjEwMH0lYDtpZihsYXlvdXQ9PT0ncmVzcG9uc2l2ZScpey8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjoncmVsYXRpdmUnLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O3NpemVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxib3hTaXppbmc6J2JvcmRlci1ib3gnLHBhZGRpbmdUb3B9O31lbHNlIGlmKGxheW91dD09PSdpbnRyaW5zaWMnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsbWF4V2lkdGg6JzEwMCUnLG92ZXJmbG93OidoaWRkZW4nLHBvc2l0aW9uOidyZWxhdGl2ZScsYm94U2l6aW5nOidib3JkZXItYm94JyxtYXJnaW46MH07c2l6ZXJTdHlsZT17Ym94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidibG9jaycsbWF4V2lkdGg6JzEwMCUnfTtzaXplclN2Zz1gPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDt9ZWxzZSBpZihsYXlvdXQ9PT0nZml4ZWQnKXsvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbndyYXBwZXJTdHlsZT17b3ZlcmZsb3c6J2hpZGRlbicsYm94U2l6aW5nOidib3JkZXItYm94JyxkaXNwbGF5OidpbmxpbmUtYmxvY2snLHBvc2l0aW9uOidyZWxhdGl2ZScsd2lkdGg6d2lkdGhJbnQsaGVpZ2h0OmhlaWdodEludH07fX1lbHNlIGlmKHR5cGVvZiB3aWR0aEludD09PSd1bmRlZmluZWQnJiZ0eXBlb2YgaGVpZ2h0SW50PT09J3VuZGVmaW5lZCcmJmxheW91dD09PSdmaWxsJyl7Ly8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG53cmFwcGVyU3R5bGU9e2Rpc3BsYXk6J2Jsb2NrJyxvdmVyZmxvdzonaGlkZGVuJyxwb3NpdGlvbjonYWJzb2x1dGUnLHRvcDowLGxlZnQ6MCxib3R0b206MCxyaWdodDowLGJveFNpemluZzonYm9yZGVyLWJveCcsbWFyZ2luOjB9O31lbHNley8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO319bGV0IGltZ0F0dHJpYnV0ZXM9e3NyYzonZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxzcmNTZXQ6dW5kZWZpbmVkLHNpemVzOnVuZGVmaW5lZH07aWYoaXNWaXNpYmxlKXtpbWdBdHRyaWJ1dGVzPWdlbmVyYXRlSW1nQXR0cnMoe3NyYyx1bm9wdGltaXplZCxsYXlvdXQsd2lkdGg6d2lkdGhJbnQscXVhbGl0eTpxdWFsaXR5SW50LHNpemVzLGxvYWRlcn0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTp3cmFwcGVyU3R5bGV9LHNpemVyU3R5bGU/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7c3R5bGU6c2l6ZXJTdHlsZX0sc2l6ZXJTdmc/LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIix7c3R5bGU6e21heFdpZHRoOicxMDAlJyxkaXNwbGF5OidibG9jaycsbWFyZ2luOjAsYm9yZGVyOidub25lJyxwYWRkaW5nOjB9LGFsdDpcIlwiLFwiYXJpYS1oaWRkZW5cIjp0cnVlLHJvbGU6XCJwcmVzZW50YXRpb25cIixzcmM6YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCxfdG9CYXNlLnRvQmFzZTY0KShzaXplclN2Zyl9YH0pOm51bGwpOm51bGwsIWlzVmlzaWJsZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIixPYmplY3QuYXNzaWduKHt9LHJlc3QsZ2VuZXJhdGVJbWdBdHRycyh7c3JjLHVub3B0aW1pemVkLGxheW91dCx3aWR0aDp3aWR0aEludCxxdWFsaXR5OnF1YWxpdHlJbnQsc2l6ZXMsbG9hZGVyfSkse2RlY29kaW5nOlwiYXN5bmNcIixzdHlsZTppbWdTdHlsZSxjbGFzc05hbWU6Y2xhc3NOYW1lfSkpKSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLE9iamVjdC5hc3NpZ24oe30scmVzdCxpbWdBdHRyaWJ1dGVzLHtkZWNvZGluZzpcImFzeW5jXCIsY2xhc3NOYW1lOmNsYXNzTmFtZSxyZWY6ZWxlbWVudD0+e3NldFJlZihlbGVtZW50KTtyZW1vdmVQbGFjZWhvbGRlcihlbGVtZW50LHBsYWNlaG9sZGVyKTt9LHN0eWxlOmltZ1N0eWxlfSkpLHByaW9yaXR5Py8qI19fUFVSRV9fKi8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4vLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4vL1xuLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OidfX25pbWctJytpbWdBdHRyaWJ1dGVzLnNyYytpbWdBdHRyaWJ1dGVzLnNyY1NldCtpbWdBdHRyaWJ1dGVzLnNpemVzLHJlbDpcInByZWxvYWRcIixhczpcImltYWdlXCIsaHJlZjppbWdBdHRyaWJ1dGVzLnNyY1NldD91bmRlZmluZWQ6aW1nQXR0cmlidXRlcy5zcmMvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc3Jjc2V0OmltZ0F0dHJpYnV0ZXMuc3JjU2V0Ly8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuLGltYWdlc2l6ZXM6aW1nQXR0cmlidXRlcy5zaXplc30pKTpudWxsKTt9Ly9CVUlMVCBJTiBMT0FERVJTXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKXtyZXR1cm4gc3JjWzBdPT09Jy8nP3NyYy5zbGljZSgxKTpzcmM7fWZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7Ly8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG5jb25zdCBwYXJhbXM9WydhdXRvPWZvcm1hdCcsJ2ZpdD1tYXgnLCd3PScrd2lkdGhdO2xldCBwYXJhbXNTdHJpbmc9Jyc7aWYocXVhbGl0eSl7cGFyYW1zLnB1c2goJ3E9JytxdWFsaXR5KTt9aWYocGFyYW1zLmxlbmd0aCl7cGFyYW1zU3RyaW5nPSc/JytwYXJhbXMuam9pbignJicpO31yZXR1cm5gJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YDt9ZnVuY3Rpb24gYWthbWFpTG9hZGVyKHtyb290LHNyYyx3aWR0aH0pe3JldHVybmAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7fWZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe3Jvb3Qsc3JjLHdpZHRoLHF1YWxpdHl9KXsvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuY29uc3QgcGFyYW1zPVsnZl9hdXRvJywnY19saW1pdCcsJ3dfJyt3aWR0aCwncV8nKyhxdWFsaXR5fHwnYXV0bycpXTtsZXQgcGFyYW1zU3RyaW5nPXBhcmFtcy5qb2luKCcsJykrJy8nO3JldHVybmAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO31mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtyb290LHNyYyx3aWR0aCxxdWFsaXR5fSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG1pc3NpbmdWYWx1ZXM9W107Ly8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG5pZighc3JjKW1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7aWYoIXdpZHRoKW1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtpZihtaXNzaW5nVmFsdWVzLmxlbmd0aD4wKXt0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7c3JjLHdpZHRoLHF1YWxpdHl9KX1gKTt9aWYoc3JjLnN0YXJ0c1dpdGgoJy8vJykpe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7fWlmKCFzcmMuc3RhcnRzV2l0aCgnLycpJiZjb25maWdEb21haW5zKXtsZXQgcGFyc2VkU3JjO3RyeXtwYXJzZWRTcmM9bmV3IFVSTChzcmMpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTt9aWYoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gK2BTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7fX19cmV0dXJuYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHl8fDc1fWA7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi9zZXR0aW5ncy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7bG9nb3V0LCB1cGRhdGVVc2VyfSBmcm9tIFwiLi4vLi4vc3RvcmUvYWN0aW9ucy91c2VyQWN0aW9uc1wiO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXJcIjtcclxuaW1wb3J0IENoYW5nZUxvZ28gZnJvbSAnLi4vLi4vc3JjL2Fzc2V0cy9zdmcvY2hhbmdlLnN2ZydcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHtzZXRGdWxsTG9hZGluZywgc2V0TG9hZGluZ30gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2ltcGxlQWN0aW9uc1wiO1xyXG5pbXBvcnQgV2l0aEF1dGggZnJvbSAnLi4vLi4vY29tcG9uZW50cy9XaXRoQXV0aCdcclxuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdTcGlubmVyL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gICAgY29uc3Qge3VzZXIsIGVycm9yc30gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyUmVkdWNlcilcclxuICAgIGNvbnN0IHtsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnNpbXBsZVJlZHVjZXIpXHJcbiAgICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwiXCIsXHJcbiAgICAgICAgYXZhdGFyOiBudWxsXHJcbiAgICB9KVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBzZXREYXRhKCkge1xyXG4gICAgICAgICAgICBzZXRVc2VyRGF0YSh7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogdXNlci5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXIuYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldERhdGEoKVxyXG4gICAgfSwgW3VzZXJdKVxyXG5cclxuXHJcbiAgICBjb25zdCBvblNhdmVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB2YXIgcGFyYW1zID0ge31cclxuICAgICAgICBpZiAodXNlci51c2VybmFtZSAhPT0gdXNlckRhdGEudXNlcm5hbWUpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXIuc3RhdHVzICE9PSB1c2VyRGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnN0YXR1cyA9IHVzZXJEYXRhLnN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlci5hdmF0YXIgIT09IHVzZXJEYXRhLmF2YXRhcikge1xyXG4gICAgICAgICAgICBwYXJhbXMuYXZhdGFyID0gdXNlckRhdGEuYXZhdGFyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgcGFyYW1zLnVzZXJuYW1lID0gdXNlckRhdGEudXNlcm5hbWVcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2goc2V0TG9hZGluZyh0cnVlKSlcclxuICAgICAgICAgICAgYXdhaXQgZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyLmlkLCBwYXJhbXMpKVxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChzZXRMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkxvZ291dENsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKHRydWUpKVxyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGxvZ291dCgpKVxyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKHNldEZ1bGxMb2FkaW5nKGZhbHNlKSlcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW1hZ2VDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBwaWN0dXJlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXHJcbiAgICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCBhdmF0YXI6IFVSTC5jcmVhdGVPYmplY3RVUkwocGljdHVyZSl9KVxyXG4gICAgICAgIGxldCBmb3JtX2RhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBhd2FpdCBmb3JtX2RhdGEuYXBwZW5kKCdhdmF0YXInLCBwaWN0dXJlKTtcclxuICAgICAgICBhd2FpdCBmb3JtX2RhdGEuYXBwZW5kKCd1c2VybmFtZScsIHVzZXJEYXRhLnVzZXJuYW1lKTtcclxuICAgICAgICBhd2FpdCBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIuaWQsIGZvcm1fZGF0YSkpXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcmV0dXJuIDxXcmFwcGVyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjbGFzc2VzLmNvbnRhaW5lciwgJ2dsYXNzJ10uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltZ193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgcXVhbGl0eT17MTAwfSAgc3JjPXt1c2VyRGF0YS5hdmF0YXIgIT09IHVuZGVmaW5lZCYmdXNlckRhdGEuYXZhdGFyICE9PSBudWxsID8gdXNlckRhdGEuYXZhdGFyIDogJy9pbWFnZXMvdXNlci5wbmcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXJEYXRhLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY2xhc3Nlcy5wcm9maWxlX2ltYWdlLCB1c2VyRGF0YS5hdmF0YXIgPT09IHVuZGVmaW5lZCA/IGNsYXNzZXMubm9Qcm9maWxlSW1hZ2UgOiB1bmRlZmluZWRdLmpvaW4oJyAnKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlbGVjdF9pbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZT17b25JbWFnZUNoYW5nZX0gdHlwZT1cImZpbGVcIiBpZD1cImltZ1wiIG5hbWU9XCJpbWdcIiBhY2NlcHQ9XCJpbWFnZS8qXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aT48Q2hhbmdlTG9nby8+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLmF2YXRhciA/XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtbXCJlcnJvclwiLCBjbGFzc2VzLmltZ19lcnJvcl0uam9pbignICcpfT4qIHtlcnJvcnMuYXZhdGFyWzBdfTwvc3Bhbj4gOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3VzZXJEYXRhLnVzZXJuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckRhdGEoey4uLnVzZXJEYXRhLCB1c2VybmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICAgICAgICAgIH19IHBsYWNlaG9sZGVyPXsnVXNlcm5hbWUnfS8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLnVzZXJuYW1lID8gPHNwYW4gY2xhc3NOYW1lPXtcImVycm9yXCJ9Pioge2Vycm9ycy51c2VybmFtZVswXX08L3NwYW4+IDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VyRGF0YS5zdGF0dXN9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YSh7Li4udXNlckRhdGEsIHN0YXR1czogZXZlbnQudGFyZ2V0LnZhbHVlfSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9eydTdGF0dXMnfS8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uU2F2ZUNsaWNrfT57bG9hZGluZyA/IDxMb2FkaW5nU3Bpbm5lci8+IDogPHNwYW4+U0FWRTwvc3Bhbj59PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uTG9nb3V0Q2xpY2t9IGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvdXRCVE59PkxPR09VVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvV3JhcHBlcj5cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaXRoQXV0aChJbmRleCk7IiwiaW1wb3J0IHtcclxuICAgIEZVTExfTE9BRElOR19GQUxTRSxcclxuICAgIEZVTExfTE9BRElOR19UUlVFLFxyXG4gICAgTE9BRElOR19GQUxTRSxcclxuICAgIExPQURJTkdfVFJVRSxcclxuXHJcbn0gZnJvbSAnLi4vdHlwZXMnXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nID0gKGxvYWRpbmdTdGF0ZSkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBsb2FkaW5nU3RhdGUgPyBMT0FESU5HX1RSVUUgOiBMT0FESU5HX0ZBTFNFLFxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgY29uc3Qgc2V0RnVsbExvYWRpbmcgPSAobG9hZGluZ1N0YXRlKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IGxvYWRpbmdTdGF0ZSA/IEZVTExfTE9BRElOR19UUlVFIDogRlVMTF9MT0FESU5HX0ZBTFNFLFxyXG4gICAgfSlcclxufSIsImltcG9ydCB7XHJcbiAgICBTRVRfVVNFUl9TVUNDRVNTLCBTRVRfVVNFUl9FUlJPUiwgVVBEQVRFX1VTRVIsIExPR09VVFxyXG5cclxufSBmcm9tICcuLi90eXBlcydcclxuaW1wb3J0IHtheGlvc0luc3RhbmNlfSBmcm9tIFwiLi4vLi4vYXBpXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSAoKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcblxyXG4gICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoJy9hdXRoL3VzZXJzL21lJykudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcclxuXHJcbiAgICAgICAgYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoYC9hcGkvdjEvdXNlcnMvcHJvZmlsZS8ke3Jlc3BvbnNlLmRhdGEuaWR9YCkudGhlbihhc3luYyAocmVzdWx0KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcmVzdWx0LmRhdGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9VU0VSX0VSUk9SLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtzdGF0dXM6IGVycm9yLnJlc3BvbnNlLnN0YXR1cywgbWVzc2FnZTogZXJyb3IucmVzcG9uc2UuZGF0YS5kZXRhaWx9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9FUlJPUixcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7ZXJyb3I6IGVycm9yfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICApXHJcblxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2VzcycpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncmVmcmVzaCcpXHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPR09VVCxcclxuICAgICAgICBwYXlsb2FkOiB7fVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAoaWQsIHBhcmFtcykgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG5cclxuICAgIGF4aW9zSW5zdGFuY2UucHV0KGAvYXBpL3YxL3VzZXJzL3Byb2ZpbGUvJHtpZH0vYCwgcGFyYW1zKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0VUX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcblxyXG4gICAgICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTRVRfVVNFUl9FUlJPUixcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU0VUX1VTRVJfRVJST1IsXHJcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7ZXJyb3I6IGVycm9yfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSlcclxufSIsImV4cG9ydCBjb25zdCBMT0FESU5HX1RSVUUgPSAnTE9BRElOR19UUlVFJ1xyXG5leHBvcnQgY29uc3QgTE9BRElOR19GQUxTRSA9ICdMT0FESU5HX0ZBTFNFJ1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfU1VDQ0VTUyA9ICdTRVRfVVNFUl9TVUNDRVNTJ1xyXG5leHBvcnQgY29uc3QgU0VUX1VTRVJfRVJST1IgPSAnU0VUX1VTRVJfRVJST1InXHJcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xyXG5leHBvcnQgY29uc3QgRlVMTF9MT0FESU5HX1RSVUUgPSAnRlVMTF9MT0FESU5HX1RSVUUnXHJcbmV4cG9ydCBjb25zdCBGVUxMX0xPQURJTkdfRkFMU0UgPSAnRlVMTF9MT0FESU5HX0ZBTFNFJ1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1VTRVIgPSAnVVBEQVRFX1VTRVInXHJcbmV4cG9ydCBjb25zdCBTRVRfT1RIRVJfVVNFUiA9ICdTRVRfT1RIRVJfVVNFUidcclxuZXhwb3J0IGNvbnN0IENMRUFSX09USEVSX1VTRVIgPSAnQ0xFQVJfT1RIRVJfVVNFUidcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcImZ1bGxMb2FkaW5nX3dyYXBwZXJfXzFDVl90XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkZXJcIjogXCJsb2FkaW5nU3Bpbm5lcl9sb2FkZXJfXzNvWjViXCIsXG5cdFwic3BpblwiOiBcImxvYWRpbmdTcGlubmVyX3NwaW5fXzMzZFg5XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ3cmFwcGVyXCI6IFwid3JhcHBlcl93cmFwcGVyX19yMzRIcFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIndyYXBwZXJfY29udGFpbmVyX19HLUNNTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwid3JhcHBlclwiOiBcInNldHRpbmdzX3dyYXBwZXJfX20xMzVLXCIsXG5cdFwiY29udGFpbmVyXCI6IFwic2V0dGluZ3NfY29udGFpbmVyX18xZVRTdFwiLFxuXHRcImJsb2NrXCI6IFwic2V0dGluZ3NfYmxvY2tfX2Q2VjNOXCIsXG5cdFwicGFzc3dvcmRDb250YWluZXJcIjogXCJzZXR0aW5nc19wYXNzd29yZENvbnRhaW5lcl9fMXlZTnBcIixcblx0XCJpbWdfd3JhcHBlclwiOiBcInNldHRpbmdzX2ltZ193cmFwcGVyX18zcFhlQ1wiLFxuXHRcIm5vUHJvZmlsZUltYWdlXCI6IFwic2V0dGluZ3Nfbm9Qcm9maWxlSW1hZ2VfXzN1Z2JVXCIsXG5cdFwic2VsZWN0X2ltYWdlXCI6IFwic2V0dGluZ3Nfc2VsZWN0X2ltYWdlX18xazV2NlwiLFxuXHRcImltZ19lcnJvclwiOiBcInNldHRpbmdzX2ltZ19lcnJvcl9fM0s3bm1cIixcblx0XCJ1bmFjdGl2ZVwiOiBcInNldHRpbmdzX3VuYWN0aXZlX18yZS1GaVwiLFxuXHRcImxvZ291dEJUTlwiOiBcInNldHRpbmdzX2xvZ291dEJUTl9fMnlDa3ZcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5mdW5jdGlvbiBDaGFuZ2UgKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIixwcm9wcyxSZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtcImRcIjpcIm0zMzEuMjczNDM4IDE3NWgtMTAuNTY2NDA3Yy0uNjE3MTg3IDAtMS4xODM1OTMtLjM2MzI4MS0xLjQzNzUtLjkyNTc4MWwtMi42NTYyNS01Ljc4NTE1N2MtNi43NTc4MTItMTQuNzI2NTYyLTIxLjU5Mzc1LTI0LjI0MjE4Ny0zNy43OTY4NzUtMjQuMjQyMTg3aC0zOS45MjU3ODFjLTE2LjIwMzEyNSAwLTMxLjAzOTA2MyA5LjUxNTYyNS0zNy43OTI5NjkgMjQuMjM4MjgxbC0yLjY1NjI1IDUuNzg5MDYzYy0uMjU3ODEyLjU2MjUtLjgyNDIxOC45MjU3ODEtMS40NDE0MDYuOTI1NzgxaC0xMi4yNjk1MzFjLTIzLjU2MjUgMC00Mi43MzA0NjkgMTkuMTY3OTY5LTQyLjczMDQ2OSA0Mi43MjY1NjJ2ODkuNWMwIDIzLjU2MjUgMTkuMTY3OTY5IDQyLjcyNjU2MyA0Mi43MjY1NjIgNDIuNzI2NTYzaDE0Ni41NDY4NzZjMjMuNTU4NTkzIDAgNDIuNzI2NTYyLTE5LjE2NDA2MyA0Mi43MjY1NjItNDIuNzI2NTYzdi04OS41YzAtMjMuNTU4NTkzLTE5LjE2Nzk2OS00Mi43MjY1NjItNDIuNzI2NTYyLTQyLjcyNjU2MnptMi43MjY1NjIgMTMyLjIyNjU2MmMwIDEuNTAzOTA3LTEuMjIyNjU2IDIuNzI2NTYzLTIuNzI2NTYyIDIuNzI2NTYzaC0xNDYuNTQ2ODc2Yy0xLjUwMzkwNiAwLTIuNzI2NTYyLTEuMjIyNjU2LTIuNzI2NTYyLTIuNzI2NTYzdi04OS41YzAtMS41MDM5MDYgMS4yMjI2NTYtMi43MjY1NjIgMi43MjY1NjItMi43MjY1NjJoMTIuMjY5NTMyYzE2LjIwMzEyNSAwIDMxLjAzOTA2Mi05LjUxNTYyNSAzNy43OTY4NzUtMjQuMjQyMTg4bDIuNjU2MjUtNS43ODkwNjJjLjI1NzgxMi0uNTYyNS44MjAzMTItLjkyMTg3NSAxLjQ0MTQwNi0uOTIxODc1aDM5LjkyNTc4MWMuNjE3MTg4IDAgMS4xNzk2ODguMzU5Mzc1IDEuNDM3NS45MjE4NzVsMi42NTYyNSA1Ljc5Mjk2OWM2Ljc2MTcxOSAxNC43MjI2NTYgMjEuNTkzNzUgMjQuMjM4MjgxIDM3Ljc5Njg3NSAyNC4yMzgyODFoMTAuNTY2NDA3YzEuNTAzOTA2IDAgMi43MjY1NjIgMS4yMjI2NTYgMi43MjY1NjIgMi43MjY1NjJ6bS00Ni01MS4yMjY1NjJjMCAxNi41NzAzMTItMTMuNDI5Njg4IDMwLTMwIDMwcy0zMC0xMy40Mjk2ODgtMzAtMzAgMTMuNDI5Njg4LTMwIDMwLTMwIDMwIDEzLjQyOTY4OCAzMCAzMHptMjI0LTE3MHY1MGMwIDI3LjU3MDMxMi0yMi40Mjk2ODggNTAtNTAgNTBoLTUwYy0xMS4wNDY4NzUgMC0yMC04Ljk1MzEyNS0yMC0yMHM4Ljk1MzEyNS0yMCAyMC0yMGgyOS45Mzc1Yy0zOC41ODIwMzEtNjUuMDgyMDMxLTEwOS4yMDcwMzEtMTA2LTE4NS45Mzc1LTEwNi0xMS4wNDY4NzUgMC0yMC04Ljk1MzEyNS0yMC0yMHM4Ljk1MzEyNS0yMCAyMC0yMGM1MC4yMzA0NjkgMCA5OC44NjMyODEgMTQuNTQ2ODc1IDE0MC42NDA2MjUgNDIuMDYyNSAzMC40MTQwNjMgMjAuMDMxMjUgNTYuMDExNzE5IDQ2LjA4MjAzMSA3NS4zNTkzNzUgNzYuNDU3MDMxdi0zMi41MTk1MzFjMC0xMS4wNDY4NzUgOC45NTMxMjUtMjAgMjAtMjBzMjAgOC45NTMxMjUgMjAgMjB6bS0yMjQuOTQ1MzEyIDQwNC45NTMxMjVjLjQ2MDkzNyAxMS4wMzUxNTYtOC4xMDkzNzYgMjAuMzU1NDY5LTE5LjE0ODQzOCAyMC44MTY0MDYtMy42MjEwOTQuMTUyMzQ0LTcuMjkyOTY5LjIzMDQ2OS0xMC45MDYyNS4yMzA0NjktNTAuMDE5NTMxIDAtOTguNDgwNDY5LTE0LjQzMzU5NC0xNDAuMTQ4NDM4LTQxLjczODI4MS0zMS4xNDg0MzctMjAuNDEwMTU3LTU3LjI4MTI1LTQ3LjE0ODQzOC03Ni44NTE1NjItNzguMzc1djM0LjExMzI4MWMwIDExLjA0Njg3NS04Ljk1MzEyNSAyMC0yMCAyMHMtMjAtOC45NTMxMjUtMjAtMjB2LTUwYzAtMjcuNTcwMzEyIDIyLjQyOTY4OC01MCA1MC01MGg1MGMxMS4wNDY4NzUgMCAyMCA4Ljk1MzEyNSAyMCAyMHMtOC45NTMxMjUgMjAtMjAgMjBoLTI4LjkyOTY4OGMzOC41ODk4NDQgNjUuMDU0Njg4IDEwOS4yOTI5NjkgMTA2IDE4NS45Mjk2ODggMTA2IDMuMDU4NTk0IDAgNi4xNjc5NjktLjA2NjQwNiA5LjIzODI4MS0uMTkxNDA2IDExLjA0Mjk2OS0uNDY4NzUgMjAuMzU1NDY5IDguMTA5Mzc1IDIwLjgxNjQwNyAxOS4xNDQ1MzF6bS0yODcuMDU0Njg4LTIzNC45NTMxMjVjMC0xMS4wNDY4NzUgOC45NTMxMjUtMjAgMjAtMjBzMjAgOC45NTMxMjUgMjAgMjAtOC45NTMxMjUgMjAtMjAgMjAtMjAtOC45NTMxMjUtMjAtMjB6bTExLTczYzAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwLTguOTUzMTI1IDIwLTIwIDIwLTIwLTguOTUzMTI1LTIwLTIwem0zNC02NmMwLTExLjA0Njg3NSA4Ljk1MzEyNS0yMCAyMC0yMHMyMCA4Ljk1MzEyNSAyMCAyMC04Ljk1MzEyNSAyMC0yMCAyMC0yMC04Ljk1MzEyNS0yMC0yMHptNTItNTJjMC0xMS4wNDY4NzUgOC45NTMxMjUtMjAgMjAtMjBzMjAgOC45NTMxMjUgMjAgMjAtOC45NTMxMjUgMjAtMjAgMjAtMjAtOC45NTMxMjUtMjAtMjB6bTY2LTM0YzAtMTEuMDQ2ODc1IDguOTUzMTI1LTIwIDIwLTIwczIwIDguOTUzMTI1IDIwIDIwLTguOTUzMTI1IDIwLTIwIDIwLTIwLTguOTUzMTI1LTIwLTIwem0zNDkgMjI1YzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMCA4Ljk1MzEyNS0yMCAyMC0yMCAyMCA4Ljk1MzEyNSAyMCAyMHptLTExIDcxYzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMCA4Ljk1MzEyNS0yMCAyMC0yMCAyMCA4Ljk1MzEyNSAyMCAyMHptLTMyIDY0YzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMCA4Ljk1MzEyNS0yMCAyMC0yMCAyMCA4Ljk1MzEyNSAyMCAyMHptLTQ5IDUyYzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMCA4Ljk1MzEyNS0yMCAyMC0yMCAyMCA4Ljk1MzEyNSAyMCAyMHptLTYzIDM1YzAgMTEuMDQ2ODc1LTguOTUzMTI1IDIwLTIwIDIwcy0yMC04Ljk1MzEyNS0yMC0yMCA4Ljk1MzEyNS0yMCAyMC0yMCAyMCA4Ljk1MzEyNSAyMCAyMHptMCAwXCJ9KSk7XG59XG5cbkNoYW5nZS5kZWZhdWx0UHJvcHMgPSB7XCJoZWlnaHRcIjpcIjUxMnB0XCIsXCJ2aWV3Qm94XCI6XCIwIDAgNTEyIDUxMlwiLFwid2lkdGhcIjpcIjUxMnB0XCJ9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoYW5nZTtcblxuQ2hhbmdlLmRlZmF1bHQgPSBDaGFuZ2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=