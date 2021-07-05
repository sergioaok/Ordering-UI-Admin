"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersListingContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px;\n  box-sizing: border-box;\n  transition: all 0.5s;\n  overflow: hidden;\n  margin-top: 60px;\n\n  @media print {\n    display: none;\n  }\n\n  @media (min-width: 760px) {\n    margin-top: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UsersListingContainer = _styledComponents.default.div(_templateObject());

exports.UsersListingContainer = UsersListingContainer;