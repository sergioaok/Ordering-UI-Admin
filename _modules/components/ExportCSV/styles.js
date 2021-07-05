"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = exports.PopoverContainer = exports.WrapperExportButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 3px 20px;\n  white-space: nowrap;\n  cursor: pointer;\n  &:hover {\n    background-color: #F2F2F2;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0px;\n  margin-top: 5px;\n  padding: 5px 0;\n  background-color: #fff;\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperExportButton = _styledComponents.default.div(_templateObject());

exports.WrapperExportButton = WrapperExportButton;

var PopoverContainer = _styledComponents.default.div(_templateObject2());

exports.PopoverContainer = PopoverContainer;

var Item = _styledComponents.default.div(_templateObject3());

exports.Item = Item;