"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnAllowSettingPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _BsLayoutThreeColumns = _interopRequireDefault(require("@meronex/icons/bs/BsLayoutThreeColumns"));

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColumnAllowSettingPopover = function ColumnAllowSettingPopover(props) {
  var open = props.open,
      optionsDefault = props.optionsDefault,
      allowColumns = props.allowColumns,
      handleChangeAllowColumns = props.handleChangeAllowColumns;
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();

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
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.HeaderItem, {
    ref: referenceElement,
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement(_BsLayoutThreeColumns.default, null)), open && /*#__PURE__*/_react.default.createElement(_styles.PopoverBody, {
    ref: popperElement
  }, /*#__PURE__*/_react.default.createElement(_styles.PopoverList, null, optionsDefault.map(function (option) {
    return /*#__PURE__*/_react.default.createElement(_styles.AllowItem, {
      key: option.value,
      isChecked: allowColumns[option.value],
      onClick: function onClick() {
        return handleChangeAllowColumns(option.value);
      }
    }, allowColumns[option.value] ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, option.content));
  }))));
};

exports.ColumnAllowSettingPopover = ColumnAllowSettingPopover;