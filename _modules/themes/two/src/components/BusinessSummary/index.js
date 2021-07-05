"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSummary = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));

var _BsChevronRight = _interopRequireDefault(require("@meronex/icons/bs/BsChevronRight"));

var _BsLifePreserver = _interopRequireDefault(require("@meronex/icons/bs/BsLifePreserver"));

var _Switch = require("../../styles/Switch");

var _Buttons = require("../../styles/Buttons");

var _styledComponents = require("styled-components");

var _BusinessFormDetails = require("../BusinessFormDetails");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessSummary = function BusinessSummary(props) {
  var _businessState$busine, _businessState$busine2, _businessState$busine3, _businessState$busine4, _theme$images, _theme$images$dummies, _businessState$busine5, _businessState$busine6;

  var businessState = props.businessState,
      actionSidebar = props.actionSidebar,
      handleChangeActiveBusiness = props.handleChangeActiveBusiness,
      selectedItem = props.selectedItem,
      handleSelectedItem = props.handleSelectedItem,
      handleSucessUpdateBusiness = props.handleSucessUpdateBusiness;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      optimizeImage = _useUtils2[0].optimizeImage;

  var theme = (0, _styledComponents.useTheme)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEdit = _useState2[0],
      setIsEdit = _useState2[1];

  var businessConfigs = [{
    key: 'information',
    value: t('INFORMATION', 'Information')
  }, {
    key: 'schedule',
    value: t('SCHEDULE', 'Schedule')
  }, {
    key: 'menu',
    value: t('MENU', 'Menu')
  }, {
    key: 'delivery_zones',
    value: t('DELIVERY_ZONES', 'Delivery zones')
  }, {
    key: 'payment_methods',
    value: t('PAYMENS_METHODS', 'Payment methods')
  }, {
    key: 'custom_fields',
    value: t('CUSTOM_FIELDS', 'Custom fields')
  }, {
    key: 'personalization',
    value: t('PERSONALIZATION', 'Personalization')
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DetailsHeader, null, /*#__PURE__*/_react.default.createElement(_styles.LeftHeader, null, (businessState === null || businessState === void 0 ? void 0 : businessState.loading) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100
  })) : /*#__PURE__*/_react.default.createElement(_styles.BusinessName, null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.name), (businessState === null || businessState === void 0 ? void 0 : businessState.loading) ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 50
  }) : /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.enabled,
    onChange: handleChangeActiveBusiness
  })), /*#__PURE__*/_react.default.createElement(_styles.RightHeader, null, /*#__PURE__*/_react.default.createElement(_styles.SupportButton, {
    onClick: function onClick() {
      return handleSelectedItem('support');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsLifePreserver.default, null)), /*#__PURE__*/_react.default.createElement(_styles.CloseButton, {
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdcClose.default, null)))), !isEdit ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (businessState === null || businessState === void 0 ? void 0 : businessState.loading) ? /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    isSkeleton: true
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 60,
    height: 60
  }))) : /*#__PURE__*/_react.default.createElement(_styles.BusinessHeader, {
    bgimage: optimizeImage(businessState === null || businessState === void 0 ? void 0 : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.header, 'h_400,c_limit')
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessLogo, {
    bgimage: optimizeImage((businessState === null || businessState === void 0 ? void 0 : (_businessState$busine4 = businessState.business) === null || _businessState$busine4 === void 0 ? void 0 : _businessState$busine4.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$dummies = _theme$images.dummies) === null || _theme$images$dummies === void 0 ? void 0 : _theme$images$dummies.businessLogo), 'h_200,c_limit')
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessDetailsContent, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "lightPrimary",
    borderRadius: "5px"
  }, t('CATEGORIES_AND_PRODUCTS', 'Categories & products')), /*#__PURE__*/_react.default.createElement(_styles.BusinessDescription, null, (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine5 = businessState.business) === null || _businessState$busine5 === void 0 ? void 0 : _businessState$busine5.loading) ? /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 50
  }) : businessState === null || businessState === void 0 ? void 0 : (_businessState$busine6 = businessState.business) === null || _businessState$busine6 === void 0 ? void 0 : _businessState$busine6.description), /*#__PURE__*/_react.default.createElement(_styles.BusinessConfigsContainer, null, businessConfigs.map(function (config) {
    return /*#__PURE__*/_react.default.createElement(_styles.BusinessConfigItem, {
      key: config.key,
      active: selectedItem === config.key,
      onClick: function onClick() {
        return handleSelectedItem(config.key);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, config.value), /*#__PURE__*/_react.default.createElement(_BsChevronRight.default, null));
  })), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secundary",
    borderRadius: "5px",
    disabled: businessState.loading,
    onClick: function onClick() {
      return setIsEdit(true);
    }
  }, t('EDIT', 'Edit')))) : /*#__PURE__*/_react.default.createElement(_BusinessFormDetails.BusinessFormDetails, {
    business: businessState.business,
    onCancel: function onCancel() {
      return setIsEdit(false);
    },
    handleSuccessUpdate: handleSucessUpdateBusiness
  })));
};

exports.BusinessSummary = BusinessSummary;