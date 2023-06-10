"use strict";
(() => {
var exports = {};
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 6270:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 9149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/users/[id]/posts/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./utils/database.js
var database = __webpack_require__(2573);
// EXTERNAL MODULE: ./models/prompt.js
var models_prompt = __webpack_require__(1011);
;// CONCATENATED MODULE: ./app/api/users/[id]/posts/route.js


const GET = async (req, { params  })=>{
    try {
        await database/* connectToDB */.P;
        const prompts = await models_prompt/* default.find */.Z.find({
            creator: params.id
        }).populate("creator");
        return new Response(JSON.stringify(prompts), {
            status: 200
        });
    } catch (error) {
        return new Response("Failed to fetch all prompts", {
            status: 500
        });
    }
    ;
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&name=app%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute.js&appDir=C%3A%5CUsers%5Cmelcodxb%5CDesktop%5CWeb%20Apps%5Csrc%5Cnutrify%5Capp&appPaths=%2Fapi%2Fusers%2F%5Bid%5D%2Fposts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/users/[id]/posts",
    resolvedPagePath: "C:\\Users\\melcodxb\\Desktop\\Web Apps\\src\\nutrify\\app\\api\\users\\[id]\\posts\\route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/users/[id]/posts/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [683,981,676], () => (__webpack_exec__(9149)));
module.exports = __webpack_exports__;

})();