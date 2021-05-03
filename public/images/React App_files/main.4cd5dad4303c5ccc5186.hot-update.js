webpackHotUpdate("main",{

/***/ "./src/Pages/BoardCanvas.js":
/*!**********************************!*\
  !*** ./src/Pages/BoardCanvas.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Components_DecoButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/DecoButton */ "./src/Components/DecoButton.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/si */ "./node_modules/react-icons/si/index.esm.js");
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bi */ "./node_modules/react-icons/bi/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions */ "./src/store/actions/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/songhee/Documents/project/marpple-frontend/src/Pages/BoardCanvas.js",
    _s = __webpack_require__.$Refresh$.signature();












function BoardCanvas(props) {
  _s();

  console.log("omyyyddL:", props);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const colorStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(store => store.colorReducer);
  const fontStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(store => store.fontReducer);
  const modalStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(store => store.modalReducer);
  const bImageStore = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(store => store.bImageReducer);
  const canvasPhone = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null); // const img = useRef(null);

  const canvasCover = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const canvasFont = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const canvasResult = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const context = canvasPhone.current.getContext("2d"); // const image = img.current;

    const imgSrc = "/images/phone_white.png";
    const img = new Image();
    img.src = imgSrc; // canvasPhone.current.height = img.height;
    // canvasPhone.current.width = img.width;

    img.onload = () => {
      canvasPhone.current.height = img.height;
      canvasPhone.current.width = img.width;
      context.drawImage(img, 0, 0, img.width, img.height);
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (modalStore) {
      fnPrint();
    }
  }, [modalStore]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log("bImageStore", bImageStore);
    const context2 = canvasCover.current.getContext("2d"); // const imgData = context2.getImageData(0, 0, 860, 860);

    const imgCover = new Image();
    imgCover.src = bImageStore;

    imgCover.onload = () => {
      context2.drawImage(imgCover, 0, 0);
    };
  }, [bImageStore]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const context2 = canvasCover.current.getContext("2d");
    const imgSrc_cover = "/images/phone_cover.png";
    const imgCover = new Image();
    imgCover.src = imgSrc_cover;

    imgCover.onload = () => {
      fnDrawImage(imgCover, canvasCover, context2, handleClickColor);
    };
  }, [colorStore]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const context = canvasFont.current.getContext("2d");
    context.clearRect(0, 0, canvasFont.current.width, canvasFont.current.height);
    context.fillStyle = "#" + fontStore.txtColor;
    const fontStyle = "bold italic " + fontStore.size + "pt " + fontStore.font;
    context.font = fontStyle;
    context.fillText(fontStore.text, 280, 500);
  }, [fontStore]);

  const handleClickColor = () => {
    const context2 = canvasCover.current.getContext("2d");
    let rgbArr = hexToRgb(props.selColor);
    const imgData = context2.getImageData(0, 0, 860, 860);

    for (let i = 0; i < imgData.data.length; i += 4) {
      if (imgData.data[i + 3] !== 0) {
        imgData.data[i] = rgbArr[0];
        imgData.data[i + 1] = rgbArr[1];
        imgData.data[i + 2] = rgbArr[2];
        imgData.data[i + 3] = imgData.data[i + 3];
      }
    }

    context2.putImageData(imgData, 0, 0);
    console.log(canvasCover.current.toDataURL()); // fnDrawText(props.seleTxtColor);
  };

  function hexToRgb(hex) {
    /* rgb로 각각 분리해서 배열에 담기. */
    var rgb = 3 === hex.length ? hex.match(/[a-f\d]/gi) : hex.match(/[a-f\d]{2}/gi);
    rgb.forEach(function (str, x, arr) {
      /* rgb 각각의 헥사값이 한자리일 경우, 두자리로 변경하기. */
      if (str.length === 1) str = str + str;
      /* 10진수로 변환하기. */

      arr[x] = parseInt(str, 16);
    });
    return rgb;
  }

  const fnDrawImage = (img, canvas, context, callback) => {
    console.log("fnDrawImage()", img, canvas, context);
    canvas.current.height = img.height;
    canvas.current.width = img.width;
    context.drawImage(img, 0, 0, img.width, img.height);
    callback();
  };

  const fnDrawText = color => {
    const context2 = canvasFont.current.getContext("2d");
    context2.fillStyle = "#" + color;
    const fontStyle = "bold italic " + fontStore.size + "pt " + fontStore.font;
    context2.font = fontStyle;
    console.log("context2.font: ", context2.font);
    context2.fillText(fontStore.text, 280, 500);
  };

  const fnPrint = () => {
    const img1 = new Image();
    const img2 = new Image();
    const context3 = canvasResult.current.getContext("2d");
    const context4 = canvasCover.current.getContext("2d"); // img1.src = canvasPhone.current.toDataURL("image/png", 0.5);

    img1.src = canvasPhone.current.toDataURL("image/png", 0.5);
    img2.src = canvasCover.current.toDataURL("image/png", 0.5);

    img1.onload = function () {
      context3.drawImage(img1, 0, 0); // console.log(canvasResult.current.toDataURL("image/png", 0.5));

      img2.onload = () => {
        context3.drawImage(img2, 0, 0);
        dispatch(Object(_store_actions__WEBPACK_IMPORTED_MODULE_8__["setFinalCover"])(canvasResult.current.toDataURL("image/png", 0.5)));
      };
    }; // const img3 = canvasResult.current.toDataURL("image/png", 0.5);
    // return "hello";

  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CanvasContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(CanvasWrap, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Canvas, {
        ref: canvasPhone,
        height: "860px",
        width: "860px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Canvas, {
        ref: canvasCover,
        height: "860px",
        width: "860px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Canvas, {
        ref: canvasFont,
        height: "860px",
        width: "860px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(Canvas, {
        className: "hide",
        ref: canvasResult,
        height: "860px",
        width: "860px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(DecoButtons, {
      children: Buttons.map(button => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_Components_DecoButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: button.id,
        iconImg: button.iconImg,
        name: button.name
      }, button.id, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 5
  }, this);
}

_s(BoardCanvas, "cb35iSjTgNNqXiBwAjWAJ8478lQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"]];
});

_c = BoardCanvas;
/* harmony default export */ __webpack_exports__["default"] = (BoardCanvas);
const CanvasContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
`;
_c2 = CanvasContainer;
const CanvasWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 550px;
  height: 550px;
  position: relative;
`;
_c3 = CanvasWrap;
const DecoButtons = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 80px;
  width: 50px;
  height: 100%;
`;
_c4 = DecoButtons;
const Canvas = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.5s ease-in-out;
  &.hide {
    display: none;
  }
`;
_c5 = Canvas;
const Buttons = [{
  id: 1,
  iconImg: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_si__WEBPACK_IMPORTED_MODULE_5__["SiAdobephonegap"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 234,
    columnNumber: 21
  }, undefined),
  name: "색상변경"
}, {
  id: 2,
  iconImg: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__["BsUpload"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 235,
    columnNumber: 21
  }, undefined),
  name: "이미지업로드"
}, {
  id: 3,
  iconImg: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdTextFields"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 236,
    columnNumber: 21
  }, undefined),
  name: "텍스트"
}, {
  id: 4,
  iconImg: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_6__["BiSticker"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 237,
    columnNumber: 21
  }, undefined),
  name: "스티커"
}];

var _c, _c2, _c3, _c4, _c5;

__webpack_require__.$Refresh$.register(_c, "BoardCanvas");
__webpack_require__.$Refresh$.register(_c2, "CanvasContainer");
__webpack_require__.$Refresh$.register(_c3, "CanvasWrap");
__webpack_require__.$Refresh$.register(_c4, "DecoButtons");
__webpack_require__.$Refresh$.register(_c5, "Canvas");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.4cd5dad4303c5ccc5186.hot-update.js.map