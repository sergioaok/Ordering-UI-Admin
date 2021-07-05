"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoConatiner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow-x: hidden;\n  h1 {\n    color: ", ";\n    font-size: 24px;\n  }\n  @media (min-width: 1000px) {\n    padding: 20px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InfoConatiner = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.headingColor;
});

exports.InfoConatiner = InfoConatiner;