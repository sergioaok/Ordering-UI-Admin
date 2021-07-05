"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLink = exports.OrderDetailsHeaderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding: 5px;\n  margin: 0 5px;\n\n  \n  &:hover {\n    background-color: ", ";\n    border-radius: 5px;\n  }\n  \n  svg {\n    color: ", ";\n    font-size: 24px;\n  }\n  &.close {\n    svg {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column-reverse;\n\n  > div:first-child {\n    color: ", ";\n    width: 100%;\n    h1 {\n      font-size: 24px;\n      margin: 0px;\n      font-weight: 700;\n    }\n\n    p {\n      font-size: 14px;\n      margin: 0px;\n    }\n  }\n\n  > div:not(:first-child) {\n    display: flex;\n    width: 100%;\n    justify-content: flex-end;\n    margin-bottom: 20px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    > div:not(:first-child) {\n      margin-bottom: 0px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderDetailsHeaderContainer = _styledComponents.default.div(_templateObject(), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.OrderDetailsHeaderContainer = OrderDetailsHeaderContainer;

var ButtonLink = _styledComponents.default.div(_templateObject2(), function (props) {
  var _props$theme$colors2;

  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.secundary;
}, function (props) {
  var _props$theme$colors3;

  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.secundaryContrast;
}, function (props) {
  var _props$theme$colors4;

  return (_props$theme$colors4 = props.theme.colors) === null || _props$theme$colors4 === void 0 ? void 0 : _props$theme$colors4.headingColor;
});

exports.ButtonLink = ButtonLink;