"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorText = exports.WrapperCheckPassword = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  color: #ef1962;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 15px;\n\n  h3 {\n    font-size: 32px;\n    margin: 0px;\n  }\n\n  p {\n    margin: 0px;\n  }\n\n  input {\n    outline: none;\n    font-size: 16px;\n\n    border: 1px dashed rgba(20, 20, 20, 0.2);\n\n    &:focus {\n      border: 1px dashed #ef1962;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperCheckPassword = _styledComponents.default.div(_templateObject());

exports.WrapperCheckPassword = WrapperCheckPassword;

var ErrorText = _styledComponents.default.div(_templateObject2());

exports.ErrorText = ErrorText;