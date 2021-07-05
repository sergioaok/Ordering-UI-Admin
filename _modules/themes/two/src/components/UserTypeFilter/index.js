"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserTypeFilter = exports.UserTypeFilterUI = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Buttons = require("../../styles/Buttons");

var _AutoScroll = require("../AutoScroll");

var _MdClose = _interopRequireDefault(require("@meronex/icons/ios/MdClose"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserTypeFilterUI = function UserTypeFilterUI(props) {
  var handleChangeUserType = props.handleChangeUserType,
      userTypes = props.userTypes,
      currentTypesSelected = props.currentTypesSelected;

  var handleChangeUserRole = function handleChangeUserRole(type) {
    handleChangeUserType && handleChangeUserType(type);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.UserTypeFilterContainer, null, /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    innerScroll: true,
    scrollId: "users_subFilter"
  }, userTypes && userTypes.length > 0 && userTypes.map(function (type) {
    return /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      key: type.value,
      color: currentTypesSelected.includes(type.value) ? 'primary' : 'secundary',
      onClick: function onClick() {
        return handleChangeUserRole(type.value);
      }
    }, type.key, currentTypesSelected.includes(type.value) && /*#__PURE__*/_react.default.createElement(_MdClose.default, null));
  }))));
};

exports.UserTypeFilterUI = UserTypeFilterUI;

var UserTypeFilter = function UserTypeFilter(props) {
  var userTypeFilterProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UserTypeFilterUI,
    userTypes: props.userTypes || [{
      key: 'Users',
      value: 3
    }, {
      key: 'Business owner',
      value: 2
    }, {
      key: 'City manager',
      value: 1
    }, {
      key: 'Administrators',
      value: 0
    }],
    defaultUserTypes: props.defaultUserTypes || [0, 1, 2, 3],
    onChangeUserType: props.handleChangeUserType
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserTypeFilter, userTypeFilterProps);
};

exports.UserTypeFilter = UserTypeFilter;