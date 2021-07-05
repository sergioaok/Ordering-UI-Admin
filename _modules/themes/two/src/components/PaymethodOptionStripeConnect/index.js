"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymethodOptionStripeConnect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));

var _BilStripe = _interopRequireDefault(require("@meronex/icons/bi/BilStripe"));

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

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

var PaymethodOptionStripeConnect = function PaymethodOptionStripeConnect(props) {
  var _changesState$data, _changesState$data2, _businessPaymethod$da, _changesState$data3, _changesState$data4, _businessPaymethod$da2, _changesState$data5, _changesState$data6, _businessPaymethod$da3, _changesState$data_sa, _changesState$data_sa2, _businessPaymethod$da4;

  var business = props.business,
      open = props.open,
      onClose = props.onClose,
      changesState = props.changesState,
      cleanChangesState = props.cleanChangesState,
      actionState = props.actionState,
      handleStripeConnect = props.handleStripeConnect,
      handleChangeStripeInput = props.handleChangeStripeInput,
      handleStripeSave = props.handleStripeSave,
      businessPaymethod = props.businessPaymethod;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var actionSidebar = function actionSidebar(value) {
    if (!value) {
      props.onClose();
    }

    setIsMenuOpen(value);
    document.getElementById('stripe_connect').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('stripe_connect').style.width = '100%';
      } else {
        document.getElementById('stripe_connect').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    cleanChangesState({});
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "stripe_connect"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('STRIPE_CONNECT', 'Stripe connect')), /*#__PURE__*/_react.default.createElement(_styles.CloseButton, null, /*#__PURE__*/_react.default.createElement(_MdcClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.StripeConnectButton, {
    onClick: function onClick() {
      return handleStripeConnect();
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_BilStripe.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('CONNECT_WITH_STRIPE', 'Connect with stripe'))), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('ACCESS_TOKEN_ID', 'Access token ID')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "token",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data = changesState.data) === null || _changesState$data === void 0 ? void 0 : _changesState$data.token) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data2 = changesState.data) === null || _changesState$data2 === void 0 ? void 0 : _changesState$data2.token : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da = businessPaymethod.data) === null || _businessPaymethod$da === void 0 ? void 0 : _businessPaymethod$da.token,
    placeholder: t('ACCESS_TOKEN_ID', 'Access token ID'),
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('PUBLISHABLE_KEY', 'Publishable key')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "publishable",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data3 = changesState.data) === null || _changesState$data3 === void 0 ? void 0 : _changesState$data3.publishable) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data4 = changesState.data) === null || _changesState$data4 === void 0 ? void 0 : _changesState$data4.publishable : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da2 = businessPaymethod.data) === null || _businessPaymethod$da2 === void 0 ? void 0 : _businessPaymethod$da2.publishable,
    placeholder: t('PUBLISHABLE_KEY', 'Publishable key'),
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('ID_USER', 'User ID')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "user",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data5 = changesState.data) === null || _changesState$data5 === void 0 ? void 0 : _changesState$data5.user) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data6 = changesState.data) === null || _changesState$data6 === void 0 ? void 0 : _changesState$data6.user : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da3 = businessPaymethod.data) === null || _businessPaymethod$da3 === void 0 ? void 0 : _businessPaymethod$da3.user,
    placeholder: t('ID_USER', 'User ID'),
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('REFRESH_TOKEN', 'Refresh token')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "refresh_token",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data_sa = changesState.data_sandbox) === null || _changesState$data_sa === void 0 ? void 0 : _changesState$data_sa.refresh_token) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data_sa2 = changesState.data_sandbox) === null || _changesState$data_sa2 === void 0 ? void 0 : _changesState$data_sa2.refresh_token : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da4 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da4 === void 0 ? void 0 : _businessPaymethod$da4.refresh_token,
    placeholder: t('REFRESH_TOKEN', 'Refresh token'),
    disabled: true
  }), /*#__PURE__*/_react.default.createElement(_styles.InputGroup, null, /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('FIXED_FEE', 'Fixed fee')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "number",
    name: "fixed_usage_fee",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : changesState.fixed_usage_fee) ? changesState === null || changesState === void 0 ? void 0 : changesState.fixed_usage_fee : business === null || business === void 0 ? void 0 : business.fixed_usage_fee,
    placeholder: t('FIXED_FEE', 'Fixed fee'),
    onChange: function onChange(e) {
      return handleChangeStripeInput(e);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('PERCENTAGE_FEE', 'Percentage fee')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    type: "number",
    name: "percentage_usage_fee",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : changesState.percentage_usage_fee) ? changesState === null || changesState === void 0 ? void 0 : changesState.percentage_usage_fee : business === null || business === void 0 ? void 0 : business.percentage_usage_fee,
    placeholder: t('PERCENTAGE_FEE', 'Percentage fee'),
    onChange: function onChange(e) {
      return handleChangeStripeInput(e);
    }
  }))), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "5px",
    color: "primary",
    disabled: actionState.loading || Object.keys(changesState).length === 0,
    onClick: function onClick() {
      return handleStripeSave(businessPaymethod.id);
    }
  }, actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')));
};

exports.PaymethodOptionStripeConnect = PaymethodOptionStripeConnect;