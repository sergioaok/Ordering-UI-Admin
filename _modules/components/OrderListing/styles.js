"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapSkeltonCell = exports.WrapperOrderListContent = exports.InnerOrderListContent = exports.SkeletonText = exports.SkeletonBlock = exports.SkeletonCell = exports.SkeletonCard = exports.SkeletonOrder = exports.OrderStatusTitle = exports.InnerNoneOrdersContainer = exports.WrapperNoneOrders = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    row-gap: 10px;\n    align-items: flex-start;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n        overflow: initial;\n        max-height: initial;\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    padding: 5px;\n    margin-bottom: 40px;\n\n    ", "\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n        text-align: right;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    text-align: left\n    ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    column-gap: 5px\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n      flex-direction: column;\n      margin-bottom: 0px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n    padding: 15px 10px;\n    box-shadow: 0px 0px 3px #00000029;\n    border-radius: 6px;\n    ", "\n    align-items: flex-start;\n\n    & > div {\n        &:first-child {\n            padding-top: 40px;\n        }\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    width: auto;\n    margin: 0 auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    font-size: 20px;\n    color: ", ";\n    margin-top: 10px;\n    margin-bottom: 10px;\n    font-weight: 500;\n    padding: 0 5px;\n\n    .rotate {\n        transform: rotate(-90deg);\n    }\n    .collapse_icon {\n        transition: transform 0.3s ease;\n        padding: 5px;\n        cursor: pointer;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    padding: 10px 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        img {\n            width: 150px;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    overflow: auto;\n\n    img {\n        width: 250px;\n    }\n\n    ", "    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WrapperNoneOrders = _styledComponents.default.div(_templateObject(), function (_ref) {
  var small = _ref.small;
  return small && (0, _styledComponents.css)(_templateObject2());
});

exports.WrapperNoneOrders = WrapperNoneOrders;

var InnerNoneOrdersContainer = _styledComponents.default.div(_templateObject3());

exports.InnerNoneOrdersContainer = InnerNoneOrdersContainer;

var OrderStatusTitle = _styledComponents.default.p(_templateObject4(), function (_ref2) {
  var _theme$colors;

  var theme = _ref2.theme;
  return (theme === null || theme === void 0 ? void 0 : (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.textBlackContrast) || '#000';
});

exports.OrderStatusTitle = OrderStatusTitle;

var SkeletonOrder = _styledComponents.default.div(_templateObject5());

exports.SkeletonOrder = SkeletonOrder;

var SkeletonCard = _styledComponents.default.div(_templateObject6(), function (_ref3) {
  var small = _ref3.small;
  return small && (0, _styledComponents.css)(_templateObject7());
});

exports.SkeletonCard = SkeletonCard;

var SkeletonCell = _styledComponents.default.div(_templateObject8());

exports.SkeletonCell = SkeletonCell;

var SkeletonBlock = _styledComponents.default.div(_templateObject9());

exports.SkeletonBlock = SkeletonBlock;

var SkeletonText = _styledComponents.default.div(_templateObject10(), function (props) {
  var _props$theme;

  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject11());
});

exports.SkeletonText = SkeletonText;

var InnerOrderListContent = _styledComponents.default.div(_templateObject12(), function (_ref4) {
  var small = _ref4.small;
  return small && (0, _styledComponents.css)(_templateObject13());
});

exports.InnerOrderListContent = InnerOrderListContent;

var WrapperOrderListContent = _styledComponents.default.div(_templateObject14());

exports.WrapperOrderListContent = WrapperOrderListContent;

var WrapSkeltonCell = _styledComponents.default.div(_templateObject15());

exports.WrapSkeltonCell = WrapSkeltonCell;