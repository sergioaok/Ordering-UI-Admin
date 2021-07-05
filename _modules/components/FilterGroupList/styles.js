"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperRow = exports.FilterGroupListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100% !important;\n  justify-content: space-between;\n\n  & > div {\n    width: 48%;\n\n    & > div {\n      &: first-child {\n        height: 65px;\n      }\n    }\n  }\n\n  .date-filter-container {\n    z-index: 100;\n  }\n\n  > input {\n    width: 48%;\n    height: 65px;\n    color: #000;\n    box-sizing: border-box;\n    padding: 0 20px;\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n    -moz-appearance: textfield;\n  }\n\n  @media (max-width: 1300px) {\n    flex-direction: column;\n    row-gap: 30px;\n    & > div {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  row-gap: 50px;\n\n  & > div {\n    width: 48%;\n\n    & > div {\n      &: first-child {\n        height: 65px;\n      }\n    }\n  }\n\n  @media (max-width: 1300px) {\n    row-gap: 30px;\n  }\n\n  @media (max-width: 576px) {\n    flex-direction: column;\n    row-gap: 30px;\n    & > div {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FilterGroupListContainer = _styledComponents.default.div(_templateObject());

exports.FilterGroupListContainer = FilterGroupListContainer;

var WrapperRow = _styledComponents.default.div(_templateObject2());

exports.WrapperRow = WrapperRow;