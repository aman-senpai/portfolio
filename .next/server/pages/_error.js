"use strict";
(() => {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 3561:
/***/ ((module) => {


module.exports = {
    name: "Aman Senpai",
    version: "3.0.0",
    githubName: "aman-senpai",
    githubKey: "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",
    email: "jemscollin1@gmail.com",
    errors: {
        404: "This page could not be found.",
        500: "An error occurred while processing your request."
    }
};


/***/ }),

/***/ 3652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3561);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_clqu_config__WEBPACK_IMPORTED_MODULE_1__);


function Error({ statusCode  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center justify-center py-56",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white",
                children: statusCode
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "text-2xl text-gray-500 dark:text-gray-500",
                children: (_clqu_config__WEBPACK_IMPORTED_MODULE_1___default().errors)?.[statusCode] || "Something went wrong..."
            })
        ]
    });
};
Error.getInitialProps = ({ res , err  })=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
};


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3652));
module.exports = __webpack_exports__;

})();