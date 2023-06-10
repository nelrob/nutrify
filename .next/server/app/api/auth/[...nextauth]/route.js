"use strict";
(() => {
var exports = {};
exports.id = 912;
exports.ids = [912];
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

/***/ 9491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 3685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 5687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 3477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 9796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 1949:
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

// NAMESPACE OBJECT: ./app/api/auth/[...nextauth]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (handler),
  "POST": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(4279);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(9311);
// EXTERNAL MODULE: ./utils/database.js
var database = __webpack_require__(2573);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
;// CONCATENATED MODULE: ./models/user.js

const UserSchema = new external_mongoose_.Schema({
    email: {
        type: String,
        unique: [
            true,
            "Email already exists!"
        ],
        required: [
            true,
            "Email is required!"
        ]
    },
    username: {
        type: String,
        required: [
            true,
            "Email is required!"
        ]
    },
    image: {
        type: String
    }
});
const User = external_mongoose_.models.User || (0,external_mongoose_.model)("User", UserSchema);
/* harmony default export */ const user = (User);

;// CONCATENATED MODULE: ./app/api/auth/[...nextauth]/route.js




// Establish database connection
(0,database/* connectToDB */.P)();
const handler = next_auth_default()({
    providers: [
        (0,google/* default */.Z)({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    // Optional: Define additional callbacks
    callbacks: {
        // Session callback
        async session ({ session  }) {
            const sessionUser = await user.findOne({
                email: session.user.email
            });
            session.user.id = sessionUser.id.toString();
            return session;
        },
        async signIn ({ profile  }) {
            // Check if a user already exists
            const userExists = await user.findOne({
                email: profile.email
            });
            if (!userExists) {
                await user.create({
                    email: profile.email,
                    username: profile.name.replace(/ /g, "").toLowerCase(),
                    image: profile.picture
                });
            }
            return true; // Allow sign in
        }
    }
});


;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cmelcodxb%5CDesktop%5CWeb%20Apps%5Csrc%5Cnutrify%5Capp&appPaths=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/auth/[...nextauth]",
    resolvedPagePath: "C:\\Users\\melcodxb\\Desktop\\Web Apps\\src\\nutrify\\app\\api\\auth\\[...nextauth]\\route.js",
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

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ }),

/***/ 2573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ connectToDB)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

let isConnected = false; // track connection status 
const connectToDB = async ()=>{
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set("strictQuery", true);
    try {
        const { connection  } = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
            dbName: "share_post"
        });
        isConnected = true;
        console.log("Mongodb is connected to", connection.host);
    } catch (error) {
        console.log(error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [683,981,68], () => (__webpack_exec__(1949)));
module.exports = __webpack_exports__;

})();