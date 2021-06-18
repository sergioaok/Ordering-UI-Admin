"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserActionSelector = exports.WrapperPageState = exports.PageButton = exports.WrapperPagination = exports.UserEnableWrapper = exports.UserTypeWrapper = exports.InfoBlock = exports.CheckBoxWrapper = exports.UserMainInfo = exports.Image = exports.WrapperImage = exports.UsersTable = exports.UserTableWrapper = exports.UsersConatiner = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UsersConatiner = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n"])));

exports.UsersConatiner = UsersConatiner;

var UserTableWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 380px);\n  overflow: auto;\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 280px);\n  }\n"])));

exports.UserTableWrapper = UserTableWrapper;

var UsersTable = _styledComponents.default.table(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n  color: ", ";\n\n  td, th {\n    padding: 10px 0;\n    &:first-child {\n      width: 30%;\n    }\n    &:nth-child(2) {\n      width: 20%;\n    }\n\n    &:nth-child(4),\n    &:nth-child(5) {\n      width: 10%;\n    }\n  }\n\n  thead {\n    tr {\n      th {\n        position: sticky;\n        top: 0px;\n        z-index: 100;\n        background: #FFF;\n        border-bottom: 1px solid #B1BCCC;\n      }\n    }\n  }\n\n  tbody {\n    border-bottom: 1px solid #E9ECEF;\n    cursor: pointer;\n  }\n"])), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.UsersTable = UsersTable;

var WrapperImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  max-width: 45px;\n  max-height: 45px;\n  height: 45px;\n  width: 45px;\n  ", "\n  border-radius: 10px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 7px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n\n  ", "\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return !isSkeleton && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    border: 1px solid #E3E3E3;\n  "])));
}, function (props) {
  var _props$theme;

  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
});

exports.WrapperImage = WrapperImage;

var ImageStyled = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 10px;\n"])));

var Image = function Image(props) {
  return /*#__PURE__*/_react.default.createElement(ImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.Image = Image;

var UserMainInfo = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"])));

exports.UserMainInfo = UserMainInfo;

var CheckBoxWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  ", "\n  svg {\n    font-size: 24px;\n    color: ", ";\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;

  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n  "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n  "])));
}, function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.headingColor;
}, function (_ref2) {
  var isChecked = _ref2.isChecked;
  return isChecked && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      color: ", ";\n    "])), function (props) {
    var _props$theme$colors3;

    return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.primary;
  });
});

exports.CheckBoxWrapper = CheckBoxWrapper;

var InfoBlock = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  p {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n  }\n  p.bold {\n    margin: 0px;\n    font-size: 14px;\n    font-weight: 600;\n  }\n"])));

exports.InfoBlock = InfoBlock;

var UserTypeWrapper = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: fit-content;\n  > div {\n    display: flex;\n\n    .select {\n      border: none;\n      padding: 0px;\n\n      > div {\n        padding: 0px;\n      }\n    }\n\n    .list {\n      .options {\n        border: 1px solid #E9ECEF;\n        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n        border-radius: 8px;\n      }\n    }\n  }\n  p {\n    margin: 5px 0 0 0;\n    font-size: 12px;\n  }\n"])));

exports.UserTypeWrapper = UserTypeWrapper;

var UserEnableWrapper = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n\n  span {\n    font-size: 14px;\n\n    ", "\n  }\n"])), function (props) {
  var _props$theme3;

  return (_props$theme3 = props.theme) !== null && _props$theme3 !== void 0 && _props$theme3.rtl ? (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "])));
});

exports.UserEnableWrapper = UserEnableWrapper;

var WrapperPagination = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-top: 20px;\n"])));

exports.WrapperPagination = WrapperPagination;

var PageButton = _styledComponents.default.button(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  outline: none;\n  border: 1px solid #00000029;\n  border-radius: 100%;\n  background: transparent;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin: 0 5px;\n\n  &:active {\n    background: #1c202e;\n    color: #fff;\n  }\n  &:disabled {\n    cursor: no-drop;\n    pointer-events: none;\n  }\n"])));

exports.PageButton = PageButton;

var WrapperPageState = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  min-width: 140px;\n"])));

exports.WrapperPageState = WrapperPageState;

var WrapperUserActionSelector = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n"])));

exports.WrapperUserActionSelector = WrapperUserActionSelector;