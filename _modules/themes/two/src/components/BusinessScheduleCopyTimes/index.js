"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessScheduleCopyTimes = void 0;

var _react = _interopRequireWildcard(require("react"));

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _MdcContentCopy = _interopRequireDefault(require("@meronex/icons/mdc/MdcContentCopy"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessScheduleCopyTimes = function BusinessScheduleCopyTimes(props) {
  var disabled = props.disabled,
      open = props.open,
      daysOfWeekIndex = props.daysOfWeekIndex,
      selectedCopyDays = props.selectedCopyDays,
      handleSelectDays = props.handleSelectDays,
      cleanSelectedCopyDays = props.cleanSelectedCopyDays;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var daysOptions = [{
    value: 0,
    content: t('SUNDAY', 'Sunday')
  }, {
    value: 1,
    content: t('MONDAY', 'Monday')
  }, {
    value: 2,
    content: t('TUESDAY', 'Tuesday')
  }, {
    value: 3,
    content: t('WEDNESDAU', 'Wednesday')
  }, {
    value: 4,
    content: t('THURSDAY', 'Thursday')
  }, {
    value: 5,
    content: t('FRIDAY', 'Friday')
  }, {
    value: 6,
    content: t('SATUDAY', 'Saturday')
  }];

  var handleClickOutside = function handleClickOutside(e) {
    var _popperElement$curren, _referenceElement$cur;

    if (!open) return;
    var outsidePopover = !((_popperElement$curren = popperElement.current) === null || _popperElement$curren === void 0 ? void 0 : _popperElement$curren.contains(e.target));
    var outsidePopoverMenu = !((_referenceElement$cur = referenceElement.current) === null || _referenceElement$cur === void 0 ? void 0 : _referenceElement$cur.contains(e.target));

    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose();
    }
  };

  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 27) {
      props.onClose && props.onClose();
    }
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('mouseup', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('mouseup', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    cleanSelectedCopyDays();
  }, [open]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    ref: referenceElement,
    disabled: disabled,
    onClick: function onClick() {
      return props.onClick(daysOfWeekIndex);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdcContentCopy.default, null)), open && /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, {
    ref: popperElement
  }, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('Copy times to')), /*#__PURE__*/_react.default.createElement(_styles.PopoverList, null, daysOptions.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles.CopyItem, {
      key: option.value,
      isChecked: selectedCopyDays.includes(option.value),
      onClick: function onClick() {
        return handleSelectDays(option.value);
      }
    }, selectedCopyDays.includes(option.value) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, option.content));
  }))));
};

exports.BusinessScheduleCopyTimes = BusinessScheduleCopyTimes;