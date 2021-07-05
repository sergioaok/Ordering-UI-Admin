"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddBusinessSidebar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _Modal = require("../Modal");

var _Buttons = require("../../styles/Buttons");

var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));

var _AddBusinessForm = require("../AddBusinessForm");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddBusinessSidebar = function AddBusinessSidebar(props) {
  var open = props.open;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      extraOpen = _useState4[0],
      setExtraOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      itemSelected = _useState6[0],
      setItemSelected = _useState6[1];

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);

    if (!value) {
      props.onClose();
    }
  };

  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('add_business').style.width = '100vw';
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('add_business').style.width = '1000px';
        } else {
          document.getElementById('add_business').style.width = '500px';
        }
      }
    }
  };

  var handleItemSelected = function handleItemSelected(item) {
    setItemSelected(item);
    setExtraOpen(true);
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

    if (extraOpen) {
      document.getElementById('add_business').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [extraOpen]);
  return /*#__PURE__*/_react.default.createElement(_styles.BarContainer, {
    id: "add_business"
  }, /*#__PURE__*/_react.default.createElement(_AddBusinessForm.AddBusinessForm, _extends({}, props, {
    actionSidebar: actionSidebar,
    handleItemSelected: handleItemSelected
  })), extraOpen && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsExtraContent, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "5px",
    color: "secundary",
    onClick: function onClick() {
      return setExtraOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdcClose.default, null)), itemSelected === 'support' && /*#__PURE__*/_react.default.createElement("div", null, "business support"))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, itemSelected === 'support' && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: itemSelected === 'support'
  }, "business support"))));
};

exports.AddBusinessSidebar = AddBusinessSidebar;