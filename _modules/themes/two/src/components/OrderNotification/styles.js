"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  row-gap: 15px;\n  p {\n    text-align: center;\n    font-size: 20px;\n    margin: 0px;\n\n    span {\n      color: ", ";\n      font-weight: 600;\n    }\n  }\n  animation: fadeIn 200ms;\n\n  @keyframes fadeIn {\n    from {\n      transform: scale(2);\n    }\n  \n    to {\n      transform: scale(1);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ModalContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.colors.primary;
});

exports.ModalContainer = ModalContainer;