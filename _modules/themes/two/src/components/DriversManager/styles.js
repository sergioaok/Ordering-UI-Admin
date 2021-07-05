"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DriversContent = exports.DriversContainer = exports.DriversHeader = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  transition: all 0.5s;\n  padding: 20px;\n  box-sizing: border-box;\n  margin-top: 60px;\n\n  @media (min-width: 760px) {\n    margin-top: 0px;\n  }\n\n  @media print {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  h1 {\n    flex: 1;\n    color: ", ";\n    font-size: 24px;\n    font-weight: 500;\n    margin: 0px;\n    text-transform: capitalize;\n  }\n\n  > div {\n    margin-top: 20px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n\n    > div {\n      margin-top: 0px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DriversHeader = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.headingColor;
});

exports.DriversHeader = DriversHeader;

var DriversContainer = _styledComponents.default.div(_templateObject2());

exports.DriversContainer = DriversContainer;

var DriversContent = _styledComponents.default.div(_templateObject3());

exports.DriversContent = DriversContent;