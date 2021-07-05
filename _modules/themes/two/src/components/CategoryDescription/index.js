"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryDescription = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _Modal = require("../Modal");

var _SubCategory = require("../SubCategory");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _Buttons = require("../../styles/Buttons");

var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));

var _BsLifePreserver = _interopRequireDefault(require("@meronex/icons/bs/BsLifePreserver"));

var _MdcPlayCircle = _interopRequireDefault(require("@meronex/icons/mdc/MdcPlayCircle"));

var _BsArrowRight = _interopRequireDefault(require("@meronex/icons/bs/BsArrowRight"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CategoryDescriptionUI = function CategoryDescriptionUI(props) {
  var open = props.open,
      onClose = props.onClose,
      configId = props.configId,
      onBasicSettingsRedirect = props.onBasicSettingsRedirect;
  var _props$category = props.category,
      category = _props$category.category,
      loading = _props$category.loading;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      extraInfoOpen = _useState4[0],
      setExtraInfoOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      extraSubCatOpen = _useState6[0],
      setExtraSubCatOpen = _useState6[1];

  (0, _react.useEffect)(function () {
    if (configId) setExtraSubCatOpen(true);
  }, [configId]);

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);

    if (!value) {
      props.onClose();
    }
  };

  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('catDescription').style.width = '100vw';
      } else {
        if ((extraInfoOpen || extraSubCatOpen) && width >= 1000) {
          document.getElementById('catDescription').style.width = '1000px';
        } else {
          document.getElementById('catDescription').style.width = '500px';
        }
      }
    }
  };

  (0, _react.useEffect)(function () {
    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;

    if (extraInfoOpen || extraSubCatOpen) {
      document.getElementById('catDescription').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [extraInfoOpen, extraSubCatOpen]);

  var handleClose = function handleClose() {
    onClose();
    setIsMenuOpen(false);
    var vid = document.getElementById('categoryVideo');
    if (vid) vid.pause();
  };

  var playVideo = function playVideo() {
    var vid = document.getElementById('categoryVideo');
    vid.play();
  };

  var handleExtraOpen = function handleExtraOpen(isMoreInfo) {
    if (isMoreInfo) {
      setExtraInfoOpen(true);
      setExtraSubCatOpen(false);
    } else {
      setExtraInfoOpen(false);
      setExtraSubCatOpen(true);
      onBasicSettingsRedirect({
        category: category.id,
        config: category.id
      });
    }
  };

  var onCloseSubCat = function onCloseSubCat() {
    setExtraSubCatOpen(false);
    onBasicSettingsRedirect({
      category: category.id,
      config: null
    });
  };

  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "catDescription"
  }, /*#__PURE__*/_react.default.createElement(_styles.DescriptionContent, null, /*#__PURE__*/_react.default.createElement(_styles.DescriptionHeader, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderIcons, null, /*#__PURE__*/_react.default.createElement(_BsLifePreserver.default, null), /*#__PURE__*/_react.default.createElement(_MdcClose.default, {
    onClick: handleClose
  }))), loading && /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 150
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20
  })), !loading && category && Object.keys(category).length > 0 && /*#__PURE__*/_react.default.createElement(_styles.Content, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryName, null, /*#__PURE__*/_react.default.createElement("p", null, category.name)), /*#__PURE__*/_react.default.createElement(_styles.Description, null, category === null || category === void 0 ? void 0 : category.description), (category === null || category === void 0 ? void 0 : category.support_url) && /*#__PURE__*/_react.default.createElement(_styles.MoreInfo, {
    onClick: function onClick() {
      return handleExtraOpen(true);
    }
  }, t('MORE_INFO', 'More info')), /*#__PURE__*/_react.default.createElement(_styles.VideoContainer, null, /*#__PURE__*/_react.default.createElement(_MdcPlayCircle.default, {
    onClick: playVideo
  }), /*#__PURE__*/_react.default.createElement("video", {
    muted: true,
    id: "categoryVideo",
    className: "w-100 custom-video",
    playsInline: true
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: category.video,
    type: "video/mp4"
  }), /*#__PURE__*/_react.default.createElement("source", {
    src: category.video,
    type: "video/webm"
  }))), /*#__PURE__*/_react.default.createElement(_styles.AllSetting, {
    onClick: function onClick() {
      return handleExtraOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, t('ALL_SETTINGS', 'All settings')), /*#__PURE__*/_react.default.createElement(_BsArrowRight.default, null)))), extraInfoOpen && category.support_url && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_styles.CategoryDescriptionExtraContent, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "5px",
    color: "secundary",
    onClick: function onClick() {
      return setExtraInfoOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdcClose.default, null)), /*#__PURE__*/_react.default.createElement(_styles.IframeWrapper, null, /*#__PURE__*/_react.default.createElement("iframe", {
    src: category.support_url,
    style: {
      width: '100%',
      height: '100%'
    }
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    height: "90vh",
    open: true,
    onClose: function onClose() {
      return setExtraInfoOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IframeWrapper, null, /*#__PURE__*/_react.default.createElement("iframe", {
    src: category.support_url,
    style: {
      width: '100%',
      height: '100%'
    }
  }))))), extraSubCatOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_styles.CategoryDescriptionExtraContent, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "5px",
    color: "secundary",
    onClick: onCloseSubCat
  }, /*#__PURE__*/_react.default.createElement(_MdcClose.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SubCategoryWrapper, null, /*#__PURE__*/_react.default.createElement(_SubCategory.SubCategory, {
    categoryId: category === null || category === void 0 ? void 0 : category.id,
    onCloseSubCat: onCloseSubCat,
    configId: configId
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "70%",
    height: "90vh",
    open: true,
    onClose: onCloseSubCat
  }, /*#__PURE__*/_react.default.createElement(_styles.SubCategoryWrapper, null, /*#__PURE__*/_react.default.createElement(_SubCategory.SubCategory, {
    categoryId: category === null || category === void 0 ? void 0 : category.id,
    onCloseSubCat: onCloseSubCat,
    configId: configId
  }))))), extraInfoOpen && !category.support_url && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_SUPPORTURL', 'Sorry, we couldn\'t find the support url.'),
    btnTitle: t('PROFILE_CATEGORY_REDIRECT', 'Go to Category'),
    onClickButton: handleClose
  }));
};

var CategoryDescription = function CategoryDescription(props) {
  var categoryDescroptionProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: CategoryDescriptionUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.CategoryDescription, categoryDescroptionProps);
};

exports.CategoryDescription = CategoryDescription;