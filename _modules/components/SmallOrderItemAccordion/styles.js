"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapIndicator = exports.TimeAgo = exports.MoreDetailsButton = exports.OrderLabelItem = exports.UnreadMessageIndicator = exports.WrapperDriverSelector = exports.WrapperOrderStatus = exports.CustomerContent = exports.DriverInfo = exports.CustomerInfo = exports.DeliveryName = exports.DeliveryIcon = exports.DeliveryType = exports.DeliveryInfo = exports.BusinessContent = exports.BusinessInfo = exports.AccordionImage = exports.WrapperAccordionImage = exports.WrapperInfo = exports.OrderItemContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 600;\n  text-align: right;\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: ", " !important;\n  text-decoration: underline;\n  cursor: pointer;\n  font-weight: 600;\n\n  &:hover {\n    color: ", " !important;\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 5px;\n  font-size: 12px;\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: #fff;\n  padding: 0px 3px;\n  border-radius: 12px;\n  min-width: 12px;\n  font-size: 12px;\n  text-align: center;\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  > div {\n    width: 100%;\n    > div {\n      padding: 0 10px;\n    }\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 10px;\n  > div {\n    width: 100%;\n    border-color: ", ";\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  p {\n    color: #000;\n    margin: 0px;\n    white-space: nowrap;\n    max-width: 80px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    &:first-child {\n      font-size: 11px;\n      font-weight: 500;\n    }\n    &:last-child {\n      font-size: 8px;\n    }\n  }\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 8px;\n  width: 48%;\n  font-size: 11px;\n  box-sizing: border-box;\n\n  > div {\n    width: 100%;\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  column-gap: 8px;\n  border: 1px solid;\n  border-color: #1c202e;\n  border-radius: 28px;\n  align-items: center;\n  padding: 5px 10px;\n  width: 48%;\n  box-sizing: border-box;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px;\n  color: #343434;\n  font-size: 12px;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  width: 14px;\n  height: 14px;\n  display: flex;\n\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 5px;\n  justify-content: flex-end;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  p {\n    color: #343434;\n    font-size: 12px;\n    margin: 0px;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  h1 {\n    color: #000000;\n    font-size: 14px;\n    margin: 0px;\n    line-height: 13px;\n  }\n  p {\n    color: #000000;\n    font-size: 12px;\n    margin: 0px;\n    max-width: 90px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  column-gap: 8px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: contain;\n  object-fit: cover;\n  background-position: center;\n  border-radius: 5px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    width: 25px;\n    height: 25px;\n    border-radius: 5px;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  max-width: 50px;\n  max-height: 50px;\n  height: 50px;\n  width: 50px;\n  border: 1px solid #e3e3e3;\n  border-radius: 5px;\n  margin: 0px;\n\n  ", "\n\n  svg {\n    width: 100%;\n    height: 100%;\n    padding: 3px;\n    box-sizing: border-box;\n    border-radius: 50%;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 1px solid #F2F2F2;\n    border-top: 1px solid #F2F2F2;\n    margin: 5px 0;\n    padding: 10px 0;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0px;\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    cursor: initial;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      background: #e8e8e8;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      background: #e8e8e8;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    ", "\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-left: 5px solid;\n  border-color: ", ";\n  padding: 10px;\n  border-bottom: 1px solid #F2F2F2;\n  width: 100%;\n  box-sizing: border-box;\n  cursor: pointer;\n  ", "\n  ", "\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderItemContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var filterColor = _ref.filterColor;
  return filterColor || '#0E9B55';
}, function (_ref2) {
  var deliveryUI = _ref2.deliveryUI;
  return deliveryUI && (0, _styledComponents.css)(_templateObject2(), function (_ref3) {
    var deliveryUIActive = _ref3.deliveryUIActive;
    return deliveryUIActive && (0, _styledComponents.css)(_templateObject3());
  });
}, function (_ref4) {
  var messageUI = _ref4.messageUI;
  return messageUI && (0, _styledComponents.css)(_templateObject4(), function (_ref5) {
    var messageUIActive = _ref5.messageUIActive;
    return messageUIActive && (0, _styledComponents.css)(_templateObject5());
  });
}, function (_ref6) {
  var isOrdersListView = _ref6.isOrdersListView;
  return isOrdersListView && (0, _styledComponents.css)(_templateObject6());
});

exports.OrderItemContainer = OrderItemContainer;

var WrapperInfo = _styledComponents.default.div(_templateObject7(), function (_ref7) {
  var border = _ref7.border;
  return border && (0, _styledComponents.css)(_templateObject8());
});

exports.WrapperInfo = WrapperInfo;

var WrapperAccordionImage = _styledComponents.default.div(_templateObject9(), function (_ref8) {
  var small = _ref8.small;
  return small && (0, _styledComponents.css)(_templateObject10());
});

exports.WrapperAccordionImage = WrapperAccordionImage;

var AccordionImageStyled = _styledComponents.default.div(_templateObject11());

var AccordionImage = function AccordionImage(props) {
  return /*#__PURE__*/_react.default.createElement(AccordionImageStyled, _extends({}, props, {
    style: {
      backgroundImage: "url(".concat(props.bgimage, ")")
    }
  }), props.children);
};

exports.AccordionImage = AccordionImage;

var BusinessInfo = _styledComponents.default.div(_templateObject12());

exports.BusinessInfo = BusinessInfo;

var BusinessContent = _styledComponents.default.div(_templateObject13());

exports.BusinessContent = BusinessContent;

var DeliveryInfo = _styledComponents.default.div(_templateObject14());

exports.DeliveryInfo = DeliveryInfo;

var DeliveryType = _styledComponents.default.div(_templateObject15());

exports.DeliveryType = DeliveryType;

var DeliveryIcon = _styledComponents.default.div(_templateObject16());

exports.DeliveryIcon = DeliveryIcon;

var DeliveryName = _styledComponents.default.p(_templateObject17());

exports.DeliveryName = DeliveryName;

var CustomerInfo = _styledComponents.default.div(_templateObject18());

exports.CustomerInfo = CustomerInfo;

var DriverInfo = _styledComponents.default.div(_templateObject19());

exports.DriverInfo = DriverInfo;

var CustomerContent = _styledComponents.default.div(_templateObject20());

exports.CustomerContent = CustomerContent;

var WrapperOrderStatus = _styledComponents.default.div(_templateObject21(), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.WrapperOrderStatus = WrapperOrderStatus;

var WrapperDriverSelector = _styledComponents.default.div(_templateObject22());

exports.WrapperDriverSelector = WrapperDriverSelector;

var UnreadMessageIndicator = _styledComponents.default.span(_templateObject23(), function (props) {
  return props.theme.colors.btnDarkBlue;
});

exports.UnreadMessageIndicator = UnreadMessageIndicator;

var OrderLabelItem = _styledComponents.default.div(_templateObject24());

exports.OrderLabelItem = OrderLabelItem;

var MoreDetailsButton = _styledComponents.default.p(_templateObject25(), function (props) {
  return props.theme.colors.btnDarkBlue;
}, function (props) {
  return (0, _polished.darken)(0.07, props.theme.colors.btnDarkBlue);
});

exports.MoreDetailsButton = MoreDetailsButton;

var TimeAgo = _styledComponents.default.p(_templateObject26());

exports.TimeAgo = TimeAgo;

var WrapIndicator = _styledComponents.default.div(_templateObject27());

exports.WrapIndicator = WrapIndicator;