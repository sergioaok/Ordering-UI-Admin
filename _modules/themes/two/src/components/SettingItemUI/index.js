"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingItemUI = void 0;

var _react = _interopRequireDefault(require("react"));

var _FiSettings = _interopRequireDefault(require("@meronex/icons/fi/FiSettings"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SettingItemUI = function SettingItemUI(props) {
  var category = props.category,
      isSkeleton = props.isSkeleton;
  return /*#__PURE__*/_react.default.createElement(_styles.SettingItemContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 24,
    height: 24
  }) : category.image ? /*#__PURE__*/_react.default.createElement("img", {
    src: category.image
  }) : /*#__PURE__*/_react.default.createElement(_FiSettings.default, null)), /*#__PURE__*/_react.default.createElement(_styles.SettingItemContent, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null) : /*#__PURE__*/_react.default.createElement(_styles.TitleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, category === null || category === void 0 ? void 0 : category.name)), isSkeleton ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null) : /*#__PURE__*/_react.default.createElement(_styles.SettingItemDescription, null, category === null || category === void 0 ? void 0 : category.description)));
};

exports.SettingItemUI = SettingItemUI;