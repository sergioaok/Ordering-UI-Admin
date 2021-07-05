"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuOptions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _BusinessMenuShare = require("../BusinessMenuShare");

var _BusinessMenuBasicOptions = require("../BusinessMenuBasicOptions");

var _AutoScroll = require("../AutoScroll");

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

var BusinessMenuOptionsUI = function BusinessMenuOptionsUI(props) {
  var open = props.open,
      onClose = props.onClose,
      menu = props.menu,
      business = props.business,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)('basic'),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedMenuOption = _useState4[0],
      setSelectedMenuOption = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openShareMenu = _useState6[0],
      setOpenShareMenu = _useState6[1];

  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }

    setIsMenuOpen(value);
    document.getElementById('menu_options').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('menu_options').style.width = '100%';
      } else {
        document.getElementById('menu_options').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "menu_options"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('MENU_SETTINGS', 'Menu settings')), /*#__PURE__*/_react.default.createElement(_styles.ActionBlock, null, /*#__PURE__*/_react.default.createElement(_BusinessMenuShare.BusinessMenuShare, {
    open: openShareMenu,
    menu: menu,
    business: business,
    onClick: function onClick() {
      return setOpenShareMenu(true);
    },
    onClose: function onClose() {
      return setOpenShareMenu(false);
    },
    handleUpdateBusinessState: handleUpdateBusinessState
  }), /*#__PURE__*/_react.default.createElement(_MdcClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.TabContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TabInnerContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    innerScroll: true,
    scrollId: "menu_options"
  }, /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedMenuOption === 'basic',
    onClick: function onClick() {
      return setSelectedMenuOption('basic');
    }
  }, t('BASIC', 'Basic')), /*#__PURE__*/_react.default.createElement(_styles.Tab, {
    active: selectedMenuOption === 'enterprise',
    onClick: function onClick() {
      return setSelectedMenuOption('enterprise');
    }
  }, t('ENTERPRISE', 'Enterprise'))))), selectedMenuOption === 'basic' && /*#__PURE__*/_react.default.createElement(_BusinessMenuBasicOptions.BusinessMenuBasicOptions, props));
};

var BusinessMenuOptions = function BusinessMenuOptions(props) {
  var businessMenuOptionFormProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessMenuOptionsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessMenuOptions, businessMenuOptionFormProps);
};

exports.BusinessMenuOptions = BusinessMenuOptions;