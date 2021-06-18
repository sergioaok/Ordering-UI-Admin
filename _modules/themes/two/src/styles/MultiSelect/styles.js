"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckBox = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});

exports.CheckBox = CheckBox;