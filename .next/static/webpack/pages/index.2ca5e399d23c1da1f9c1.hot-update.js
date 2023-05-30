webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");

var _jsxFileName = "D:\\project_work\\react\\nextjs-project\\pages\\index.js";


var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'A First Meetup',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1477959858617-67f85cf4f1df%3Fixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%253D%253D%26w%3D1000%26q%3D80&tbnid=zDvPn-Qf6AIOuM&vet=12ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygAegUIARDgAQ..i&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcity&docid=IgPdAdX_6UbCuM&w=1000&h=615&q=city%20image&ved=2ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygAegUIARDgAQ',
  address: '115 st, city',
  description: 'This is a first meetup!'
}, {
  id: 'm2',
  title: 'A Second Meetup',
  image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F05%2FView_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg%2F800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg&tbnid=qicuxsW4JTFlaM&vet=12ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygBegUIARDiAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGlobal_city&docid=DhEeZdmvrQ5l1M&w=800&h=601&q=city%20image&ved=2ahUKEwjA1IK26J3_AhUyAjQIHTu_AlMQMygBegUIARDiAQ',
  address: '116 st, 258 147 city',
  description: 'This is a second meetup!'
}];

function Home() {
  return;

  /*#__PURE__*/
  Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      meetups: DUMMY_MEETUPS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 6
  }, this);
}

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFLG1jQUhYO0FBSUlDLFNBQU8sRUFBRSxjQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQURrQixFQVFsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsaUJBRlg7QUFHSUMsT0FBSyxFQUFFLG1nQkFIWDtBQUlJQyxTQUFPLEVBQUUsc0JBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBUmtCLENBQXRCOztBQWtCQSxTQUFTQyxJQUFULEdBQWdCO0FBQ1o7O0FBQ0E7QUFBQyx1RUFBQyxpRUFBRDtBQUFBLDJCQUNHLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFTjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFEO0FBR0g7O0tBTFFNLEk7QUFPTUEsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmNhNWUzOTlkMjNjMWRhMWY5YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dCdcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMScsXHJcbiAgICAgICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3d3dy5nb29nbGUuY29tL2ltZ3Jlcz9pbWd1cmw9aHR0cHMlM0ElMkYlMkZpbWFnZXMudW5zcGxhc2guY29tJTJGcGhvdG8tMTQ3Nzk1OTg1ODYxNy02N2Y4NWNmNGYxZGYlM0ZpeGxpYiUzRHJiLTQuMC4zJTI2aXhpZCUzRE0zd3hNakEzZkRCOE1IeHpaV0Z5WTJoOE1ueDhZMmwwZVh4bGJud3dmSHd3Zkh4OE1BJTI1M0QlMjUzRCUyNnclM0QxMDAwJTI2cSUzRDgwJnRibmlkPXpEdlBuLVFmNkFJT3VNJnZldD0xMmFoVUtFd2pBMUlLMjZKM19BaFV5QWpRSUhUdV9BbE1RTXlnQWVnVUlBUkRnQVEuLmkmaW1ncmVmdXJsPWh0dHBzJTNBJTJGJTJGdW5zcGxhc2guY29tJTJGcyUyRnBob3RvcyUyRmNpdHkmZG9jaWQ9SWdQZEFkWF82VWJDdU0mdz0xMDAwJmg9NjE1JnE9Y2l0eSUyMGltYWdlJnZlZD0yYWhVS0V3akExSUsyNkozX0FoVXlBalFJSFR1X0FsTVFNeWdBZWdVSUFSRGdBUScsXHJcbiAgICAgICAgYWRkcmVzczogJzExNSBzdCwgY2l0eScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgbWVldHVwISdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgdGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWdyZXM/aW1ndXJsPWh0dHBzJTNBJTJGJTJGdXBsb2FkLndpa2ltZWRpYS5vcmclMkZ3aWtpcGVkaWElMkZjb21tb25zJTJGdGh1bWIlMkYwJTJGMDUlMkZWaWV3X29mX0VtcGlyZV9TdGF0ZV9CdWlsZGluZ19mcm9tX1JvY2tlZmVsbGVyX0NlbnRlcl9OZXdfWW9ya19DaXR5X2RsbHUuanBnJTJGODAwcHgtVmlld19vZl9FbXBpcmVfU3RhdGVfQnVpbGRpbmdfZnJvbV9Sb2NrZWZlbGxlcl9DZW50ZXJfTmV3X1lvcmtfQ2l0eV9kbGx1LmpwZyZ0Ym5pZD1xaWN1eHNXNEpURmxhTSZ2ZXQ9MTJhaFVLRXdqQTFJSzI2SjNfQWhVeUFqUUlIVHVfQWxNUU15Z0JlZ1VJQVJEaUFRLi5pJmltZ3JlZnVybD1odHRwcyUzQSUyRiUyRmVuLndpa2lwZWRpYS5vcmclMkZ3aWtpJTJGR2xvYmFsX2NpdHkmZG9jaWQ9RGhFZVpkbXZyUTVsMU0mdz04MDAmaD02MDEmcT1jaXR5JTIwaW1hZ2UmdmVkPTJhaFVLRXdqQTFJSzI2SjNfQWhVeUFqUUlIVHVfQWxNUU15Z0JlZ1VJQVJEaUFRJyxcclxuICAgICAgICBhZGRyZXNzOiAnMTE2IHN0LCAyNTggMTQ3IGNpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAhJ1xyXG5cclxuICAgIH1cclxuXVxyXG5cclxuZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVyblxyXG4gICAgKDxMYXlvdXQ+XHJcbiAgICAgICAgPE1lZXR1cExpc3QgbWVldHVwcz17RFVNTVlfTUVFVFVQU30gLz5cclxuICAgIDwvTGF5b3V0PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=