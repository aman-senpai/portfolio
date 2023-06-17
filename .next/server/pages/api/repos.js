"use strict";
(() => {
var exports = {};
exports.id = 865;
exports.ids = [865];
exports.modules = {

/***/ 5514:
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

/***/ 4588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5514);
/* harmony import */ var _clqu_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clqu_config__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    let _ = await (await fetch("https://api.github.com/users/" + (_clqu_config__WEBPACK_IMPORTED_MODULE_0___default().githubName) + "/repos", {
        headers: {
            Authorization: "token " + (_clqu_config__WEBPACK_IMPORTED_MODULE_0___default().githubKey)
        }
    })).json();
    try {
        res.send({
            success: true,
            data: [
                ..._
            ]
        });
    } catch  {
        res.status(500).send({
            success: false,
            data: []
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4588));
module.exports = __webpack_exports__;

})();