"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("../components/Header");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { SideMenu } from '../components/SideMenu'
var AdminLayout = function AdminLayout(props) {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Header.Header, null), /*#__PURE__*/_react.default.createElement(_styles.AdminMainContainer, null, props.children));
};

exports.AdminLayout = AdminLayout;