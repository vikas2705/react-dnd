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

/***/ "(app-pages-browser)/./src/components/DraggableStructure.tsx":
/*!***********************************************!*\
  !*** ./src/components/DraggableStructure.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DraggableStructure: function() { return /* binding */ DraggableStructure; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/hooks/useDrop/useDrop.js\");\n/* harmony import */ var _SortableAccordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortableAccordion */ \"(app-pages-browser)/./src/components/SortableAccordion.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst DraggableStructure = (param)=>{\n    let { structure } = param;\n    _s();\n    const [restructured, setRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedOg, setExpandedOg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [expandedRestructured, setExpandedRestructured] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex justify-between \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h4\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontWeight: \"bold\",\n                                paddingTop: \"12px\"\n                            },\n                            children: \"Table of contents\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pt-5\",\n                            children: structure === null || structure === void 0 ? void 0 : structure.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                    heading: heading,\n                                    expanded: expandedOg,\n                                    isDraggable: true,\n                                    setExpanded: setExpandedOg,\n                                    setAllHeadings: setRestructured,\n                                    isDroppable: false\n                                }, index, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[65%] \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            variant: \"h5\",\n                            sx: {\n                                textAlign: \"center\",\n                                fontStyle: \"italic\",\n                                paddingBottom: \"16px\",\n                                paddingTop: \"4px\"\n                            },\n                            children: \"Drag and drop headings here\"\n                        }, void 0, false, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                border: \"2px dashed #ccc\",\n                                padding: \"16px\",\n                                borderRadius: \"8px\",\n                                paddingTop: \"16px\"\n                            },\n                            children: [\n                                restructured.map((heading, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SortableAccordion__WEBPACK_IMPORTED_MODULE_2__.SortableAccordion, {\n                                                heading: heading,\n                                                expanded: expandedRestructured,\n                                                isDraggable: true,\n                                                setExpanded: setExpandedRestructured,\n                                                setAllHeadings: setRestructured,\n                                                isDroppable: true\n                                            }, index, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                                setAllHeadings: setRestructured,\n                                                showInfo: restructured.length === 0,\n                                                allHeadings: restructured,\n                                                short: true,\n                                                dropIndex: index + 1\n                                            }, void 0, false, {\n                                                fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true)),\n                                restructured.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DroppableContainer, {\n                                    setAllHeadings: setRestructured,\n                                    showInfo: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, undefined) : null\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DraggableStructure, \"c3PxwuBQ++k/50MG709aYSdQbDs=\");\n_c = DraggableStructure;\nconst DroppableContainer = (param)=>{\n    let { setAllHeadings, showInfo, allHeadings, short, dropIndex } = param;\n    _s1();\n    const [{ isOver }, drop] = (0,react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop)({\n        accept: \"HEADING\",\n        drop: (draggedItem)=>{\n            setAllHeadings((prev)=>{\n                if (showInfo || !(allHeadings === null || allHeadings === void 0 ? void 0 : allHeadings.find((h)=>h.randomKey === draggedItem.randomKey))) {\n                    const newHeadings = [\n                        ...prev,\n                        draggedItem\n                    ];\n                    return newHeadings;\n                } else {\n                    const newHeadings = [\n                        ...prev\n                    ];\n                    const draggedIndex = newHeadings.findIndex((h)=>h.randomKey === draggedItem.randomKey);\n                    newHeadings.splice(draggedIndex, 1);\n                    if (dropIndex !== undefined) {\n                        newHeadings.splice(dropIndex, 0, draggedItem);\n                    } else {\n                        newHeadings.push(draggedItem);\n                    }\n                    return newHeadings;\n                }\n            });\n        },\n        collect: (monitor)=>({\n                isOver: monitor.isOver()\n            })\n    });\n    const dropRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    drop(dropRef);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        ref: dropRef,\n        sx: {\n            height: short ? \"10px\" : \"100px\",\n            backgroundColor: isOver ? \"lightGreen\" : \"white\",\n            borderRadius: \"8px\",\n            marginTop: \"8px\",\n            display: \"flex\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            transition: \"background-color 0.3s\",\n            boxShadow: isOver ? \"0px 4px 8px rgba(0,0,0,0.2)\" : \"none\"\n        },\n        children: !showInfo ? undefined : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            variant: \"body2\",\n            sx: {\n                color: \"gray\"\n            },\n            children: \"Drop here to start rearranging\"\n        }, void 0, false, {\n            fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n            lineNumber: 147,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/deependra/Desktop/ract6 /reactDnd/src/components/DraggableStructure.tsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(DroppableContainer, \"kptFXlWE+TpNM97QpVqNJoqGO08=\", false, function() {\n    return [\n        react_dnd__WEBPACK_IMPORTED_MODULE_5__.useDrop\n    ];\n});\n_c1 = DroppableContainer;\nvar _c, _c1;\n$RefreshReg$(_c, \"DraggableStructure\");\n$RefreshReg$(_c1, \"DroppableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0RyYWdnYWJsZVN0cnVjdHVyZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUVoQjtBQUNuQjtBQUNvQjtBQVFoRCxNQUFNTSxxQkFBbUQ7UUFBQyxFQUMvREMsU0FBUyxFQUNWOztJQUNDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFZLEVBQUU7SUFDOUQsTUFBTSxDQUFDUyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFXLEVBQUU7SUFDekQsTUFBTSxDQUFDVyxzQkFBc0JDLHdCQUF3QixHQUFHWiwrQ0FBUUEsQ0FBVyxFQUFFO0lBRzdFLHFCQUNFLDhEQUFDYTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVDLFlBQVk7Z0NBQVFDLFlBQVc7NEJBQU87c0NBQUc7Ozs7OztzQ0FHN0YsOERBQUNOOzRCQUFJQyxXQUFVO3NDQUNkUixzQkFBQUEsZ0NBQUFBLFVBQVdjLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDeEIsOERBQUNsQixpRUFBaUJBO29DQUVoQmlCLFNBQVNBO29DQUNURSxVQUFVZDtvQ0FDVmUsV0FBVztvQ0FDWEMsYUFBYWY7b0NBQ2JnQixnQkFBZ0JsQjtvQ0FDaEJtQixhQUFhO21DQU5STDs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFXWCw4REFBQ1Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDWiwwRkFBVUE7NEJBQUNhLFNBQVE7NEJBQUtDLElBQUk7Z0NBQUVDLFdBQVc7Z0NBQVVXLFdBQVc7Z0NBQVVDLGVBQWM7Z0NBQVNWLFlBQVc7NEJBQU07c0NBQUc7Ozs7OztzQ0FLcEgsOERBQUNsQiwwRkFBR0E7NEJBQUNlLElBQUk7Z0NBQUVjLFFBQVE7Z0NBQW1CQyxTQUFTO2dDQUFRQyxjQUFjO2dDQUFRYixZQUFXOzRCQUFPOztnQ0FDNUZaLGFBQWFhLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDMUI7OzBEQUNFLDhEQUFDbEIsaUVBQWlCQTtnREFFaEJpQixTQUFTQTtnREFDVEUsVUFBVVo7Z0RBQ1ZhLGFBQWE7Z0RBQ2JDLGFBQWFiO2dEQUNiYyxnQkFBZ0JsQjtnREFDaEJtQixhQUFhOytDQU5STDs7Ozs7MERBUVAsOERBQUNXO2dEQUNDUCxnQkFBZ0JsQjtnREFDaEIwQixVQUFVM0IsYUFBYTRCLE1BQU0sS0FBSztnREFDbENDLGFBQWE3QjtnREFDYjhCLEtBQUs7Z0RBQ0xDLFdBQVdoQixRQUFROzs7Ozs7OztnQ0FNeEJmLGFBQWE0QixNQUFNLEtBQUssa0JBQ3ZCLDhEQUFDRjtvQ0FBbUJQLGdCQUFnQmxCO29DQUFpQjBCLFFBQVE7Ozs7O2dEQUMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCLEVBQUM7R0FuRVk3QjtLQUFBQTtBQXNFYixNQUFNNEIscUJBTUQ7UUFBQyxFQUFFUCxjQUFjLEVBQUVRLFFBQVEsRUFBRUUsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRTs7SUFDL0QsTUFBTSxDQUFDLEVBQUVDLE1BQU0sRUFBRSxFQUFFQyxLQUFLLEdBQUdyQyxrREFBT0EsQ0FBQztRQUNqQ3NDLFFBQVE7UUFDUkQsTUFBTSxDQUFDRTtZQUNMaEIsZUFBZSxDQUFDaUI7Z0JBQ2QsSUFDRVQsWUFDQSxFQUFDRSx3QkFBQUEsa0NBQUFBLFlBQWFRLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxTQUFTLEtBQUtKLFlBQVlJLFNBQVMsSUFDL0Q7b0JBQ0EsTUFBTUMsY0FBYzsyQkFBSUo7d0JBQU1EO3FCQUFZO29CQUMxQyxPQUFPSztnQkFDVCxPQUFPO29CQUNMLE1BQU1BLGNBQWM7MkJBQUlKO3FCQUFLO29CQUM3QixNQUFNSyxlQUFlRCxZQUFZRSxTQUFTLENBQ3hDLENBQUNKLElBQU1BLEVBQUVDLFNBQVMsS0FBS0osWUFBWUksU0FBUztvQkFJOUNDLFlBQVlHLE1BQU0sQ0FBQ0YsY0FBYztvQkFDakMsSUFBSVYsY0FBY2EsV0FBVzt3QkFDM0JKLFlBQVlHLE1BQU0sQ0FBQ1osV0FBVyxHQUFHSTtvQkFDbkMsT0FBTzt3QkFDTEssWUFBWUssSUFBSSxDQUFDVjtvQkFDbkI7b0JBR0EsT0FBT0s7Z0JBQ1Q7WUFDRjtRQUNGO1FBQ0FNLFNBQVMsQ0FBQ0MsVUFBYTtnQkFDckJmLFFBQVFlLFFBQVFmLE1BQU07WUFDeEI7SUFDRjtJQUdBLE1BQU1nQixVQUFVeEQsNkNBQU1BLENBQUM7SUFHdkJ5QyxLQUFLZTtJQUdMLHFCQUNFLDhEQUFDdEQsMEZBQUdBO1FBQ0Z1RCxLQUFLRDtRQUNMdkMsSUFBSTtZQUNGeUMsUUFBUXBCLFFBQVEsU0FBUztZQUN6QnFCLGlCQUFpQm5CLFNBQVMsZUFBZTtZQUN6Q1AsY0FBYztZQUNkMkIsV0FBVztZQUNYQyxTQUFTO1lBQ1RDLGdCQUFnQjtZQUNoQkMsWUFBWTtZQUNaQyxZQUFZO1lBQ1pDLFdBQVd6QixTQUFTLGdDQUFnQztRQUN0RDtrQkFFQyxDQUFDTCxXQUFXaUIsMEJBQ1gsOERBQUNqRCwwRkFBVUE7WUFBQ2EsU0FBUTtZQUFRQyxJQUFJO2dCQUFFaUQsT0FBTztZQUFPO3NCQUFHOzs7Ozs7Ozs7OztBQU0zRDtJQXRFTWhDOztRQU91QjlCLDhDQUFPQTs7O01BUDlCOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlU3RydWN0dXJlLnRzeD80OTE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpc3BhdGNoLCBGQywgU2V0U3RhdGVBY3Rpb24sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgSGVhZGluZyB9IGZyb20gXCIuLi91dGlscy9wYXJzZURvY3VtZW50XCJcbmltcG9ydCB7IEJveCwgR3JpZDIsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSBcInJlYWN0LWRuZFwiXG5pbXBvcnQgeyBTb3J0YWJsZUFjY29yZGlvbiB9IGZyb20gXCIuL1NvcnRhYmxlQWNjb3JkaW9uXCJcblxuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdnYWJsZUhlYWRpbmcgZXh0ZW5kcyBIZWFkaW5nIHtcbiAgcGFyZW50Pzogc3RyaW5nIHwgbnVsbCAvLyBUbyBrZWVwIHRyYWNrIG9mIHRoZSBwYXJlbnQgaGVhZGluZyBmb3IgbmVzdGVkIHN0cnVjdHVyZXNcbn1cblxuXG5leHBvcnQgY29uc3QgRHJhZ2dhYmxlU3RydWN0dXJlOiBGQzx7IHN0cnVjdHVyZTogSGVhZGluZ1tdIH0+ID0gKHtcbiAgc3RydWN0dXJlLFxufSkgPT4ge1xuICBjb25zdCBbcmVzdHJ1Y3R1cmVkLCBzZXRSZXN0cnVjdHVyZWRdID0gdXNlU3RhdGU8SGVhZGluZ1tdPihbXSlcbiAgY29uc3QgW2V4cGFuZGVkT2csIHNldEV4cGFuZGVkT2ddID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKVxuICBjb25zdCBbZXhwYW5kZWRSZXN0cnVjdHVyZWQsIHNldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gXCIgPlxuICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgc3g9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiwgcGFkZGluZ1RvcDpcIjEycHhcIiB9fT5cbiAgICAgICAgICAgIFRhYmxlIG9mIGNvbnRlbnRzXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNVwiPlxuICAgICAgICAgIHtzdHJ1Y3R1cmU/Lm1hcCgoaGVhZGluZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTb3J0YWJsZUFjY29yZGlvblxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBoZWFkaW5nPXtoZWFkaW5nfVxuICAgICAgICAgICAgICBleHBhbmRlZD17ZXhwYW5kZWRPZ31cbiAgICAgICAgICAgICAgaXNEcmFnZ2FibGVcbiAgICAgICAgICAgICAgc2V0RXhwYW5kZWQ9e3NldEV4cGFuZGVkT2d9XG4gICAgICAgICAgICAgIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9XG4gICAgICAgICAgICAgIGlzRHJvcHBhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzY1JV0gXCIgID5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBzeD17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIsIGZvbnRTdHlsZTogXCJpdGFsaWNcIiwgcGFkZGluZ0JvdHRvbTpcIjE2cHhcIiAsIHBhZGRpbmdUb3A6XCI0cHhcIiB9fT5cbiAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgaGVhZGluZ3MgaGVyZVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cblxuXG4gICAgICAgICAgPEJveCBzeD17eyBib3JkZXI6IFwiMnB4IGRhc2hlZCAjY2NjXCIsIHBhZGRpbmc6IFwiMTZweFwiLCBib3JkZXJSYWRpdXM6IFwiOHB4XCIgLCBwYWRkaW5nVG9wOlwiMTZweFwiIH19PlxuICAgICAgICAgICAge3Jlc3RydWN0dXJlZC5tYXAoKGhlYWRpbmcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlQWNjb3JkaW9uXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkPXtleHBhbmRlZFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIGlzRHJhZ2dhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQ9e3NldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkfVxuICAgICAgICAgICAgICAgICAgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIGlzRHJvcHBhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERyb3BwYWJsZUNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgc2V0QWxsSGVhZGluZ3M9e3NldFJlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNob3dJbmZvPXtyZXN0cnVjdHVyZWQubGVuZ3RoID09PSAwfVxuICAgICAgICAgICAgICAgICAgYWxsSGVhZGluZ3M9e3Jlc3RydWN0dXJlZH1cbiAgICAgICAgICAgICAgICAgIHNob3J0XG4gICAgICAgICAgICAgICAgICBkcm9wSW5kZXg9e2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkpfVxuXG5cbiAgICAgICAgICAgIHtyZXN0cnVjdHVyZWQubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgICAgICA8RHJvcHBhYmxlQ29udGFpbmVyIHNldEFsbEhlYWRpbmdzPXtzZXRSZXN0cnVjdHVyZWR9IHNob3dJbmZvIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IERyb3BwYWJsZUNvbnRhaW5lcjogRkM8e1xuICBzZXRBbGxIZWFkaW5nczogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248RHJhZ2dhYmxlSGVhZGluZ1tdPj5cbiAgc2hvd0luZm86IGJvb2xlYW5cbiAgYWxsSGVhZGluZ3M/OiBEcmFnZ2FibGVIZWFkaW5nW11cbiAgc2hvcnQ/OiBib29sZWFuXG4gIGRyb3BJbmRleD86IG51bWJlclxufT4gPSAoeyBzZXRBbGxIZWFkaW5ncywgc2hvd0luZm8sIGFsbEhlYWRpbmdzLCBzaG9ydCwgZHJvcEluZGV4IH0pID0+IHtcbiAgY29uc3QgW3sgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCh7XG4gICAgYWNjZXB0OiBcIkhFQURJTkdcIixcbiAgICBkcm9wOiAoZHJhZ2dlZEl0ZW06IERyYWdnYWJsZUhlYWRpbmcpID0+IHtcbiAgICAgIHNldEFsbEhlYWRpbmdzKChwcmV2KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzaG93SW5mbyB8fFxuICAgICAgICAgICFhbGxIZWFkaW5ncz8uZmluZCgoaCkgPT4gaC5yYW5kb21LZXkgPT09IGRyYWdnZWRJdGVtLnJhbmRvbUtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVhZGluZ3MgPSBbLi4ucHJldiwgZHJhZ2dlZEl0ZW1dXG4gICAgICAgICAgcmV0dXJuIG5ld0hlYWRpbmdzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgbmV3SGVhZGluZ3MgPSBbLi4ucHJldl1cbiAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBuZXdIZWFkaW5ncy5maW5kSW5kZXgoXG4gICAgICAgICAgICAoaCkgPT4gaC5yYW5kb21LZXkgPT09IGRyYWdnZWRJdGVtLnJhbmRvbUtleVxuICAgICAgICAgIClcblxuXG4gICAgICAgICAgbmV3SGVhZGluZ3Muc3BsaWNlKGRyYWdnZWRJbmRleCwgMSlcbiAgICAgICAgICBpZiAoZHJvcEluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG5ld0hlYWRpbmdzLnNwbGljZShkcm9wSW5kZXgsIDAsIGRyYWdnZWRJdGVtKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdIZWFkaW5ncy5wdXNoKGRyYWdnZWRJdGVtKVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgcmV0dXJuIG5ld0hlYWRpbmdzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcbiAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcbiAgICB9KSxcbiAgfSlcblxuXG4gIGNvbnN0IGRyb3BSZWYgPSB1c2VSZWYobnVsbClcblxuXG4gIGRyb3AoZHJvcFJlZilcblxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcmVmPXtkcm9wUmVmfVxuICAgICAgc3g9e3tcbiAgICAgICAgaGVpZ2h0OiBzaG9ydCA/IFwiMTBweFwiIDogXCIxMDBweFwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzT3ZlciA/IFwibGlnaHRHcmVlblwiIDogXCJ3aGl0ZVwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgIG1hcmdpblRvcDogXCI4cHhcIixcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB0cmFuc2l0aW9uOiBcImJhY2tncm91bmQtY29sb3IgMC4zc1wiLFxuICAgICAgICBib3hTaGFkb3c6IGlzT3ZlciA/IFwiMHB4IDRweCA4cHggcmdiYSgwLDAsMCwwLjIpXCIgOiBcIm5vbmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgeyFzaG93SW5mbyA/IHVuZGVmaW5lZCA6IChcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgY29sb3I6IFwiZ3JheVwiIH19PlxuICAgICAgICAgIERyb3AgaGVyZSB0byBzdGFydCByZWFycmFuZ2luZ1xuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJCb3giLCJUeXBvZ3JhcGh5IiwidXNlRHJvcCIsIlNvcnRhYmxlQWNjb3JkaW9uIiwiRHJhZ2dhYmxlU3RydWN0dXJlIiwic3RydWN0dXJlIiwicmVzdHJ1Y3R1cmVkIiwic2V0UmVzdHJ1Y3R1cmVkIiwiZXhwYW5kZWRPZyIsInNldEV4cGFuZGVkT2ciLCJleHBhbmRlZFJlc3RydWN0dXJlZCIsInNldEV4cGFuZGVkUmVzdHJ1Y3R1cmVkIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudCIsInN4IiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsInBhZGRpbmdUb3AiLCJtYXAiLCJoZWFkaW5nIiwiaW5kZXgiLCJleHBhbmRlZCIsImlzRHJhZ2dhYmxlIiwic2V0RXhwYW5kZWQiLCJzZXRBbGxIZWFkaW5ncyIsImlzRHJvcHBhYmxlIiwiZm9udFN0eWxlIiwicGFkZGluZ0JvdHRvbSIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJEcm9wcGFibGVDb250YWluZXIiLCJzaG93SW5mbyIsImxlbmd0aCIsImFsbEhlYWRpbmdzIiwic2hvcnQiLCJkcm9wSW5kZXgiLCJpc092ZXIiLCJkcm9wIiwiYWNjZXB0IiwiZHJhZ2dlZEl0ZW0iLCJwcmV2IiwiZmluZCIsImgiLCJyYW5kb21LZXkiLCJuZXdIZWFkaW5ncyIsImRyYWdnZWRJbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsInVuZGVmaW5lZCIsInB1c2giLCJjb2xsZWN0IiwibW9uaXRvciIsImRyb3BSZWYiLCJyZWYiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/DraggableStructure.tsx\n"));

/***/ })

});