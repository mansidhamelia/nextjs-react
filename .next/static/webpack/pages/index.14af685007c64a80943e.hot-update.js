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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    columnNumber: 5
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQjtBQUNJQyxJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZ0JBRlg7QUFHSUMsT0FBSyxFQUFFLG1jQUhYO0FBSUlDLFNBQU8sRUFBRSxjQUpiO0FBS0lDLGFBQVcsRUFBRTtBQUxqQixDQURrQixFQVFsQjtBQUNJSixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsaUJBRlg7QUFHSUMsT0FBSyxFQUFFLG1nQkFIWDtBQUlJQyxTQUFPLEVBQUUsc0JBSmI7QUFLSUMsYUFBVyxFQUFFO0FBTGpCLENBUmtCLENBQXRCOztBQWtCQSxTQUFTQyxJQUFULEdBQWdCO0FBQ1osc0JBQ0EscUVBQUMsaUVBQUQ7QUFBQSwyQkFDSSxxRUFBQyxzRUFBRDtBQUFZLGFBQU8sRUFBRU47QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQUlIOztLQUxRTSxJO0FBT01BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE0YWY2ODUwMDdjNjRhODA5NDNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVldHVwTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9MYXlvdXQnXHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTEnLFxyXG4gICAgICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9pbWdyZXM/aW1ndXJsPWh0dHBzJTNBJTJGJTJGaW1hZ2VzLnVuc3BsYXNoLmNvbSUyRnBob3RvLTE0Nzc5NTk4NTg2MTctNjdmODVjZjRmMWRmJTNGaXhsaWIlM0RyYi00LjAuMyUyNml4aWQlM0RNM3d4TWpBM2ZEQjhNSHh6WldGeVkyaDhNbng4WTJsMGVYeGxibnd3Zkh3d2ZIeDhNQSUyNTNEJTI1M0QlMjZ3JTNEMTAwMCUyNnElM0Q4MCZ0Ym5pZD16RHZQbi1RZjZBSU91TSZ2ZXQ9MTJhaFVLRXdqQTFJSzI2SjNfQWhVeUFqUUlIVHVfQWxNUU15Z0FlZ1VJQVJEZ0FRLi5pJmltZ3JlZnVybD1odHRwcyUzQSUyRiUyRnVuc3BsYXNoLmNvbSUyRnMlMkZwaG90b3MlMkZjaXR5JmRvY2lkPUlnUGRBZFhfNlViQ3VNJnc9MTAwMCZoPTYxNSZxPWNpdHklMjBpbWFnZSZ2ZWQ9MmFoVUtFd2pBMUlLMjZKM19BaFV5QWpRSUhUdV9BbE1RTXlnQWVnVUlBUkRnQVEnLFxyXG4gICAgICAgIGFkZHJlc3M6ICcxMTUgc3QsIGNpdHknLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnbTInLFxyXG4gICAgICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vaW1ncmVzP2ltZ3VybD1odHRwcyUzQSUyRiUyRnVwbG9hZC53aWtpbWVkaWEub3JnJTJGd2lraXBlZGlhJTJGY29tbW9ucyUyRnRodW1iJTJGMCUyRjA1JTJGVmlld19vZl9FbXBpcmVfU3RhdGVfQnVpbGRpbmdfZnJvbV9Sb2NrZWZlbGxlcl9DZW50ZXJfTmV3X1lvcmtfQ2l0eV9kbGx1LmpwZyUyRjgwMHB4LVZpZXdfb2ZfRW1waXJlX1N0YXRlX0J1aWxkaW5nX2Zyb21fUm9ja2VmZWxsZXJfQ2VudGVyX05ld19Zb3JrX0NpdHlfZGxsdS5qcGcmdGJuaWQ9cWljdXhzVzRKVEZsYU0mdmV0PTEyYWhVS0V3akExSUsyNkozX0FoVXlBalFJSFR1X0FsTVFNeWdCZWdVSUFSRGlBUS4uaSZpbWdyZWZ1cmw9aHR0cHMlM0ElMkYlMkZlbi53aWtpcGVkaWEub3JnJTJGd2lraSUyRkdsb2JhbF9jaXR5JmRvY2lkPURoRWVaZG12clE1bDFNJnc9ODAwJmg9NjAxJnE9Y2l0eSUyMGltYWdlJnZlZD0yYWhVS0V3akExSUsyNkozX0FoVXlBalFJSFR1X0FsTVFNeWdCZWdVSUFSRGlBUScsXHJcbiAgICAgICAgYWRkcmVzczogJzExNiBzdCwgMjU4IDE0NyBjaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzZWNvbmQgbWVldHVwISdcclxuXHJcbiAgICB9XHJcbl1cclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e0RVTU1ZX01FRVRVUFN9IC8+XHJcbiAgICA8L0xheW91dD4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9