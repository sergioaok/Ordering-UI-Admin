"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = exports.ToggleSwitchContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s;\n  border-radius: 15px;\n\n  &:before {\n    position: absolute;\n    content: \"\";\n    height: 13px;\n    width: 13px;\n    left: 2px;\n    bottom: 2px;\n    background-color: white;\n    -webkit-transition: .4s;\n    transition: .4s;\n    border-radius: 50%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 17px;\n\n  input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n\n    &:checked + span {\n      background-color: ", ";\n    }\n    &:focus + span {\n      box-shadow: 0 0 1px ", ";\n    }\n    &:checked + span:before {\n      -webkit-transform: translateX(15px);\n      -ms-transform: translateX(15px);\n      transform: translateX(15px);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ToggleSwitchContainer = _styledComponents.default.label(_templateObject(), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ToggleSwitchContainer = ToggleSwitchContainer;

var Slider = _styledComponents.default.span(_templateObject2());

exports.Slider = Slider;