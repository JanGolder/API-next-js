"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPage\": function() { return /* binding */ getStaticPage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\n\n\n\nfunction MeetupDetails() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        image: \"https://media.istockphoto.com/id/1283481772/pl/zdj%C4%99cie/panorama-gdyni-wyj%C4%99ta-z-powietrza-jesieni%C4%85.jpg?s=612x612&w=0&k=20&c=ODLBdF1GxRr2nCS-b4P8mJyvihmJsT757wfOEZzKWYY=\",\n        title: \"A First Meetup\",\n        address: \"Some address 5, Some City\",\n        description: \"This is a first meetup!\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jan\\\\Documents\\\\Programowanie\\\\Kursy\\\\React - Maximilian Schwarzmuller\\\\Next js\\\\main-project\\\\API-next-js\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = MeetupDetails;\nfunction getStaticPage(context) {\n    return _getStaticPage.apply(this, arguments);\n}\nfunction _getStaticPage() {\n    _getStaticPage = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function(context) {\n        var meetupId;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            meetupId = context.params.meetupId;\n            console.log(meetupId);\n            return [\n                2,\n                {\n                    props: {\n                        meetupData: {\n                            image: \"https://media.istockphoto.com/id/1283481772/pl/zdj%C4%99cie/panorama-gdyni-wyj%C4%99ta-z-powietrza-jesieni%C4%85.jpg?s=612x612&w=0&k=20&c=ODLBdF1GxRr2nCS-b4P8mJyvihmJsT757wfOEZzKWYY=\",\n                            id: meetupId,\n                            title: \"A First Meetup\",\n                            address: \"Some address 5, Some City\",\n                            description: \"This is a first meetup!\"\n                        }\n                    }\n                }\n            ];\n        });\n    });\n    return _getStaticPage.apply(this, arguments);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUFpQztBQUNnQztBQUVqRSxTQUFTRSxhQUFhLEdBQUc7SUFDdkIscUJBQ0UsOERBQUNELHdFQUFZO1FBQ1hFLEtBQUssRUFBQyx3TEFBd0w7UUFDOUxDLEtBQUssRUFBQyxnQkFBZ0I7UUFDdEJDLE9BQU8sRUFBQywyQkFBMkI7UUFDbkNDLFdBQVcsRUFBQyx5QkFBeUI7Ozs7O1lBQ3JDLENBQ0Y7QUFDSixDQUFDO0FBVFFKLEtBQUFBLGFBQWE7QUFXZixTQUFlSyxhQUFhLENBQUNDLE9BQU87V0FBckJELGNBQWE7Q0FnQmxDO1NBaEJxQkEsY0FBYTtJQUFiQSxjQUFhLEdBQTVCLDZGQUE2QkMsT0FBTyxFQUFDO1lBR3BDQyxRQUFROztZQUFSQSxRQUFRLEdBQUdELE9BQU8sQ0FBQ0UsTUFBTSxDQUFDRCxRQUFRLENBQUM7WUFDekNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUMsQ0FBQztZQUN0Qjs7Z0JBQU87b0JBQ0xJLEtBQUssRUFBQzt3QkFDSkMsVUFBVSxFQUFDOzRCQUNUWCxLQUFLLEVBQUMsd0xBQXdMOzRCQUM5TFksRUFBRSxFQUFDTixRQUFROzRCQUNYTCxLQUFLLEVBQUMsZ0JBQWdCOzRCQUN0QkMsT0FBTyxFQUFDLDJCQUEyQjs0QkFDbkNDLFdBQVcsRUFBQyx5QkFBeUI7eUJBQ3RDO3FCQUNGO2lCQUNGO2NBQUE7O0lBQ0gsQ0FBQztXQWhCcUJDLGNBQWE7O0FBa0JuQywrREFBZUwsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanM/OGZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldHVwRGV0YWlsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsXCI7XHJcblxyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVldHVwRGV0YWlsXHJcbiAgICAgIGltYWdlPVwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvMTI4MzQ4MTc3Mi9wbC96ZGolQzQlOTljaWUvcGFub3JhbWEtZ2R5bmktd3lqJUM0JTk5dGEtei1wb3dpZXRyemEtamVzaWVuaSVDNCU4NS5qcGc/cz02MTJ4NjEyJnc9MCZrPTIwJmM9T0RMQmRGMUd4UnIybkNTLWI0UDhtSnl2aWhtSnNUNzU3d2ZPRVp6S1dZWT1cIlxyXG4gICAgICB0aXRsZT1cIkEgRmlyc3QgTWVldHVwXCJcclxuICAgICAgYWRkcmVzcz1cIlNvbWUgYWRkcmVzcyA1LCBTb21lIENpdHlcIlxyXG4gICAgICBkZXNjcmlwdGlvbj1cIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCJcclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhZ2UoY29udGV4dCl7XHJcbiAgLy8gZmV0Y2ggZGF0YSBmb3IgYSBzaW5nbGUgbWVldHVwXHJcblxyXG4gIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbiAgY29uc29sZS5sb2cobWVldHVwSWQpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczp7XHJcbiAgICAgIG1lZXR1cERhdGE6e1xyXG4gICAgICAgIGltYWdlOlwiaHR0cHM6Ly9tZWRpYS5pc3RvY2twaG90by5jb20vaWQvMTI4MzQ4MTc3Mi9wbC96ZGolQzQlOTljaWUvcGFub3JhbWEtZ2R5bmktd3lqJUM0JTk5dGEtei1wb3dpZXRyemEtamVzaWVuaSVDNCU4NS5qcGc/cz02MTJ4NjEyJnc9MCZrPTIwJmM9T0RMQmRGMUd4UnIybkNTLWI0UDhtSnl2aWhtSnNUNzU3d2ZPRVp6S1dZWT1cIixcclxuICAgICAgICBpZDptZWV0dXBJZCxcclxuICAgICAgICB0aXRsZTpcIkEgRmlyc3QgTWVldHVwXCIsXHJcbiAgICAgICAgYWRkcmVzczpcIlNvbWUgYWRkcmVzcyA1LCBTb21lIENpdHlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIlRoaXMgaXMgYSBmaXJzdCBtZWV0dXAhXCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVldHVwRGV0YWlscztcclxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwiTWVldHVwRGV0YWlsIiwiTWVldHVwRGV0YWlscyIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJnZXRTdGF0aWNQYWdlIiwiY29udGV4dCIsIm1lZXR1cElkIiwicGFyYW1zIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwibWVldHVwRGF0YSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});