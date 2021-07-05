"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrdersSearch = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  img {\n    position: absolute;\n    top: 13px;\n    left: 14px;\n  }\n\n  input {\n    width: 250px;\n    border: 1px solid #1C202E;\n    border-radius: 22px;\n    outline: none;\n    padding: 10px 8px;\n    padding-left: 40px;\n    font-size: 15px;\n\n    &::placeholder {\n      color: #909BA9;\n    }\n  }\n\n  @media (max-width: 1200px) {\n    flex: 1;\n\n    input {\n      width: 100%;\n      box-sizing: border-box;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrdersSearch = _styledComponents.default.div(_templateObject());

exports.OrdersSearch = OrdersSearch;