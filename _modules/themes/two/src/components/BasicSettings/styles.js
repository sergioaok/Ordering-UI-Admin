"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentWrapper = exports.Title = exports.BasicSettingsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  .category {\n    transition: all 0.3s;\n    border-radius: 20px;\n    cursor: pointer;\n    &:hover {\n      background: #eae9f1;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 20px;\n  color: #344050;\n  margin-top: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: hidden;\n  margin-top: 60px;\n\n  @media print {\n    display: none;\n  }\n\n  @media (min-width: 760px) {\n    margin-top: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BasicSettingsContainer = _styledComponents.default.div(_templateObject());

exports.BasicSettingsContainer = BasicSettingsContainer;

var Title = _styledComponents.default.h1(_templateObject2());

exports.Title = Title;

var ContentWrapper = _styledComponents.default.div(_templateObject3());

exports.ContentWrapper = ContentWrapper;