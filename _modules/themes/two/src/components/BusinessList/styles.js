"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessCardContainer = exports.WrapperPagination = exports.BusinessListTable = exports.BusinessListContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 10px);\n  min-width: 900px;\n  color: ", ";\n  transition: all 0.3s;\n\n  td, th {\n    padding: 10px 0;\n  }\n\n  th.business,\n  td.business {\n    width: 30%;\n  }\n\n  thead {\n    tr {\n      th {\n        position: sticky;\n        top: 0px;\n        z-index: 100;\n        background: #FFF;\n        border-bottom: 1px solid #B1BCCC;\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-height: calc(100vh - 380px);\n  overflow: auto;\n\n  @media (min-width: 768px) {\n    max-height: calc(100vh - 280px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BusinessListContainer = _styledComponents.default.div(_templateObject());

exports.BusinessListContainer = BusinessListContainer;

var BusinessListTable = _styledComponents.default.table(_templateObject2(), function (props) {
  var _props$theme$colors;

  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.headingColor;
});

exports.BusinessListTable = BusinessListTable;

var WrapperPagination = _styledComponents.default.div(_templateObject3());

exports.WrapperPagination = WrapperPagination;

var BusinessCardContainer = _styledComponents.default.div(_templateObject4());

exports.BusinessCardContainer = BusinessCardContainer;