"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/utils/parseDocument.ts":
/*!************************************!*\
  !*** ./src/utils/parseDocument.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   parseDocument: function() { return /* binding */ parseDocument; }\n/* harmony export */ });\nconst parseDocument = (text)=>{\n    const lines = text.split(\"\\n\");\n    const structure = [];\n    let currentH1;\n    let currentH2;\n    let currentH3;\n    // console.log({ lines })\n    lines.forEach((line)=>{\n        if (line === \"\") return;\n        if (line.startsWith(\"###\")) {\n            var _currentH2_subheadings;\n            currentH3 = {\n                type: \"h3\",\n                title: line.replace(\"###\", \"\").trim(),\n                randomKey: (Math.random() * 100).toString()\n            };\n            currentH2 === null || currentH2 === void 0 ? void 0 : (_currentH2_subheadings = currentH2.subheadings) === null || _currentH2_subheadings === void 0 ? void 0 : _currentH2_subheadings.push(currentH3);\n        } else if (line.startsWith(\"##\")) {\n            var _currentH1_subheadings;\n            currentH2 = {\n                type: \"h2\",\n                title: line.replace(\"##\", \"\").trim(),\n                subheadings: [],\n                randomKey: (Math.random() * 100).toString()\n            };\n            currentH1 === null || currentH1 === void 0 ? void 0 : (_currentH1_subheadings = currentH1.subheadings) === null || _currentH1_subheadings === void 0 ? void 0 : _currentH1_subheadings.push(currentH2);\n        } else if (line.startsWith(\"#\")) {\n            currentH1 = {\n                type: \"h1\",\n                title: line.replace(\"#\", \"\").trim(),\n                subheadings: [],\n                randomKey: (Math.random() * 100).toString()\n            };\n            structure.push(currentH1);\n        } else {\n            // console.log({ line, currentH1, currentH2, currentH3 })\n            if (currentH3) currentH3.content = line;\n            else if (currentH2) currentH2.content = line;\n            else if (currentH1) currentH1.content = line;\n        }\n    });\n    // console.log({ structure })\n    return structure;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy91dGlscy9wYXJzZURvY3VtZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFRTyxNQUFNQSxnQkFBZ0IsQ0FBQ0M7SUFDNUIsTUFBTUMsUUFBUUQsS0FBS0UsS0FBSyxDQUFDO0lBQ3pCLE1BQU1DLFlBQXVCLEVBQUU7SUFDL0IsSUFBSUM7SUFDSixJQUFJQztJQUNKLElBQUlDO0lBRUoseUJBQXlCO0lBRXpCTCxNQUFNTSxPQUFPLENBQUMsQ0FBQ0M7UUFDYixJQUFJQSxTQUFTLElBQUk7UUFDakIsSUFBSUEsS0FBS0MsVUFBVSxDQUFDLFFBQVE7Z0JBTTFCSjtZQUxBQyxZQUFZO2dCQUNWSSxNQUFNO2dCQUNOQyxPQUFPSCxLQUFLSSxPQUFPLENBQUMsT0FBTyxJQUFJQyxJQUFJO2dCQUNuQ0MsV0FBVyxDQUFDQyxLQUFLQyxNQUFNLEtBQUssR0FBRSxFQUFHQyxRQUFRO1lBQzNDO1lBQ0FaLHNCQUFBQSxpQ0FBQUEseUJBQUFBLFVBQVdhLFdBQVcsY0FBdEJiLDZDQUFBQSx1QkFBd0JjLElBQUksQ0FBQ2I7UUFDL0IsT0FBTyxJQUFJRSxLQUFLQyxVQUFVLENBQUMsT0FBTztnQkFPaENMO1lBTkFDLFlBQVk7Z0JBQ1ZLLE1BQU07Z0JBQ05DLE9BQU9ILEtBQUtJLE9BQU8sQ0FBQyxNQUFNLElBQUlDLElBQUk7Z0JBQ2xDSyxhQUFhLEVBQUU7Z0JBQ2ZKLFdBQVcsQ0FBQ0MsS0FBS0MsTUFBTSxLQUFLLEdBQUUsRUFBR0MsUUFBUTtZQUMzQztZQUNBYixzQkFBQUEsaUNBQUFBLHlCQUFBQSxVQUFXYyxXQUFXLGNBQXRCZCw2Q0FBQUEsdUJBQXdCZSxJQUFJLENBQUNkO1FBQy9CLE9BQU8sSUFBSUcsS0FBS0MsVUFBVSxDQUFDLE1BQU07WUFDL0JMLFlBQVk7Z0JBQ1ZNLE1BQU07Z0JBQ05DLE9BQU9ILEtBQUtJLE9BQU8sQ0FBQyxLQUFLLElBQUlDLElBQUk7Z0JBQ2pDSyxhQUFhLEVBQUU7Z0JBQ2ZKLFdBQVcsQ0FBQ0MsS0FBS0MsTUFBTSxLQUFLLEdBQUUsRUFBR0MsUUFBUTtZQUMzQztZQUNBZCxVQUFVZ0IsSUFBSSxDQUFDZjtRQUNqQixPQUFPO1lBQ0wseURBQXlEO1lBQ3pELElBQUlFLFdBQVdBLFVBQVVjLE9BQU8sR0FBR1o7aUJBQzlCLElBQUlILFdBQVdBLFVBQVVlLE9BQU8sR0FBR1o7aUJBQ25DLElBQUlKLFdBQVdBLFVBQVVnQixPQUFPLEdBQUdaO1FBQzFDO0lBQ0Y7SUFDQSw2QkFBNkI7SUFDN0IsT0FBT0w7QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9wYXJzZURvY3VtZW50LnRzPzU5NWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBIZWFkaW5nIHtcbiAgdHlwZTogXCJoMVwiIHwgXCJoMlwiIHwgXCJoM1wiXG4gIHRpdGxlOiBzdHJpbmdcbiAgc3ViaGVhZGluZ3M/OiBIZWFkaW5nW11cbiAgY29udGVudD86IHN0cmluZ1xuICByYW5kb21LZXk6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgcGFyc2VEb2N1bWVudCA9ICh0ZXh0OiBzdHJpbmcpOiBIZWFkaW5nW10gPT4ge1xuICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoXCJcXG5cIilcbiAgY29uc3Qgc3RydWN0dXJlOiBIZWFkaW5nW10gPSBbXVxuICBsZXQgY3VycmVudEgxOiBIZWFkaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBjdXJyZW50SDI6IEhlYWRpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGN1cnJlbnRIMzogSGVhZGluZyB8IHVuZGVmaW5lZFxuXG4gIC8vIGNvbnNvbGUubG9nKHsgbGluZXMgfSlcblxuICBsaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgaWYgKGxpbmUgPT09IFwiXCIpIHJldHVyblxuICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCIjIyNcIikpIHtcbiAgICAgIGN1cnJlbnRIMyA9IHtcbiAgICAgICAgdHlwZTogXCJoM1wiLFxuICAgICAgICB0aXRsZTogbGluZS5yZXBsYWNlKFwiIyMjXCIsIFwiXCIpLnRyaW0oKSxcbiAgICAgICAgcmFuZG9tS2V5OiAoTWF0aC5yYW5kb20oKSAqIDEwMCkudG9TdHJpbmcoKSxcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRIMj8uc3ViaGVhZGluZ3M/LnB1c2goY3VycmVudEgzKVxuICAgIH0gZWxzZSBpZiAobGluZS5zdGFydHNXaXRoKFwiIyNcIikpIHtcbiAgICAgIGN1cnJlbnRIMiA9IHtcbiAgICAgICAgdHlwZTogXCJoMlwiLFxuICAgICAgICB0aXRsZTogbGluZS5yZXBsYWNlKFwiIyNcIiwgXCJcIikudHJpbSgpLFxuICAgICAgICBzdWJoZWFkaW5nczogW10sXG4gICAgICAgIHJhbmRvbUtleTogKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCksXG4gICAgICB9XG4gICAgICBjdXJyZW50SDE/LnN1YmhlYWRpbmdzPy5wdXNoKGN1cnJlbnRIMilcbiAgICB9IGVsc2UgaWYgKGxpbmUuc3RhcnRzV2l0aChcIiNcIikpIHtcbiAgICAgIGN1cnJlbnRIMSA9IHtcbiAgICAgICAgdHlwZTogXCJoMVwiLFxuICAgICAgICB0aXRsZTogbGluZS5yZXBsYWNlKFwiI1wiLCBcIlwiKS50cmltKCksXG4gICAgICAgIHN1YmhlYWRpbmdzOiBbXSxcbiAgICAgICAgcmFuZG9tS2V5OiAoTWF0aC5yYW5kb20oKSAqIDEwMCkudG9TdHJpbmcoKSxcbiAgICAgIH1cbiAgICAgIHN0cnVjdHVyZS5wdXNoKGN1cnJlbnRIMSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coeyBsaW5lLCBjdXJyZW50SDEsIGN1cnJlbnRIMiwgY3VycmVudEgzIH0pXG4gICAgICBpZiAoY3VycmVudEgzKSBjdXJyZW50SDMuY29udGVudCA9IGxpbmVcbiAgICAgIGVsc2UgaWYgKGN1cnJlbnRIMikgY3VycmVudEgyLmNvbnRlbnQgPSBsaW5lXG4gICAgICBlbHNlIGlmIChjdXJyZW50SDEpIGN1cnJlbnRIMS5jb250ZW50ID0gbGluZVxuICAgIH1cbiAgfSlcbiAgLy8gY29uc29sZS5sb2coeyBzdHJ1Y3R1cmUgfSlcbiAgcmV0dXJuIHN0cnVjdHVyZVxufVxuIl0sIm5hbWVzIjpbInBhcnNlRG9jdW1lbnQiLCJ0ZXh0IiwibGluZXMiLCJzcGxpdCIsInN0cnVjdHVyZSIsImN1cnJlbnRIMSIsImN1cnJlbnRIMiIsImN1cnJlbnRIMyIsImZvckVhY2giLCJsaW5lIiwic3RhcnRzV2l0aCIsInR5cGUiLCJ0aXRsZSIsInJlcGxhY2UiLCJ0cmltIiwicmFuZG9tS2V5IiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3ViaGVhZGluZ3MiLCJwdXNoIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/utils/parseDocument.ts\n"));

/***/ })

});