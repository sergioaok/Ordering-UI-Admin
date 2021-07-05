"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverBody = exports.HeaderItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  z-index: 1001;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  border-radius: 7.6px;\n  border-style: solid;\n  border-color: #1C202E;\n  border: 1px solid #CCC;\n  padding: 7px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderItem = _styledComponents.default.div(_templateObject());

exports.HeaderItem = HeaderItem;

var PopoverBody = _styledComponents.default.div(_templateObject2());

exports.PopoverBody = PopoverBody;