"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymethodOptionStripeRedirect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _MdcClose = _interopRequireDefault(require("@meronex/icons/mdc/MdcClose"));

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

var PaymethodOptionStripeRedirect = function PaymethodOptionStripeRedirect(props) {
  var _changesState$data, _changesState$data2, _businessPaymethod$da, _changesState$data3, _changesState$data4, _businessPaymethod$da2, _changesState$data_sa, _changesState$data_sa2, _businessPaymethod$da3, _changesState$data_sa3, _changesState$data_sa4, _businessPaymethod$da4;

  var open = props.open,
      onClose = props.onClose,
      changesState = props.changesState,
      cleanChangesState = props.cleanChangesState,
      actionState = props.actionState,
      handleChangeSandbox = props.handleChangeSandbox,
      handleChangeInput = props.handleChangeInput,
      handleSaveClick = props.handleSaveClick,
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
    document.getElementById('stripe_redirect').style.width = value ? width > 1000 ? '500px' : '100%' : '0';
  };

  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width < 1000) {
        document.getElementById('stripe_redirect').style.width = '100%';
      } else {
        document.getElementById('stripe_redirect').style.width = '500px';
      }
    }
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    cleanChangesState({
      sandbox: businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sandbox
    });
  }, [businessPaymethod === null || businessPaymethod === void 0 ? void 0 : businessPaymethod.sandbox]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    id: "stripe_redirect"
  }, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('STRIPE_REDIRECT', 'Stripe redirect')), /*#__PURE__*/_react.default.createElement(_styles.CloseButton, null, /*#__PURE__*/_react.default.createElement(_MdcClose.default, {
    onClick: function onClick() {
      return onClose();
    }
  }))), /*#__PURE__*/_react.default.createElement(_styles.SandboxWrapper, {
    onClick: function onClick() {
      return handleChangeSandbox();
    }
  }, (changesState === null || changesState === void 0 ? void 0 : changesState.sandbox) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
    className: "fill"
  }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('SANDBOX', 'Sandbox'))), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('PUBLISHABLE_KEY', 'Publishable key')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "publishable",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data = changesState.data) === null || _changesState$data === void 0 ? void 0 : _changesState$data.publishable) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data2 = changesState.data) === null || _changesState$data2 === void 0 ? void 0 : _changesState$data2.publishable : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da = businessPaymethod.data) === null || _businessPaymethod$da === void 0 ? void 0 : _businessPaymethod$da.publishable,
    placeholder: t('PUBLISHABLE_KEY', 'Publishable key'),
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('SECRET_KEY', 'Secret key')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "secret",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data3 = changesState.data) === null || _changesState$data3 === void 0 ? void 0 : _changesState$data3.secret) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data4 = changesState.data) === null || _changesState$data4 === void 0 ? void 0 : _changesState$data4.secret : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da2 = businessPaymethod.data) === null || _businessPaymethod$da2 === void 0 ? void 0 : _businessPaymethod$da2.secret,
    placeholder: t('SECRET_KEY', 'Secret key'),
    onChange: function onChange(e) {
      return handleChangeInput(e, false);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('PUBLISHABLE_KEY', 'Publishable key'), " (", t('SANDBOX', 'Sandbox'), ")"), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "publishable",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data_sa = changesState.data_sandbox) === null || _changesState$data_sa === void 0 ? void 0 : _changesState$data_sa.publishable) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data_sa2 = changesState.data_sandbox) === null || _changesState$data_sa2 === void 0 ? void 0 : _changesState$data_sa2.publishable : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da3 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da3 === void 0 ? void 0 : _businessPaymethod$da3.publishable,
    placeholder: "".concat(t('PUBLISHABLE_KEY', 'Publishable key'), " (").concat(t('SANDBOX', 'Sandbox'), ")"),
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('SECRECT_KEY', 'Secret key'), " (", t('SANDBOX', 'Sandbox'), ")"), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "secret",
    defaultValue: (changesState === null || changesState === void 0 ? void 0 : (_changesState$data_sa3 = changesState.data_sandbox) === null || _changesState$data_sa3 === void 0 ? void 0 : _changesState$data_sa3.secret) ? changesState === null || changesState === void 0 ? void 0 : (_changesState$data_sa4 = changesState.data_sandbox) === null || _changesState$data_sa4 === void 0 ? void 0 : _changesState$data_sa4.secret : businessPaymethod === null || businessPaymethod === void 0 ? void 0 : (_businessPaymethod$da4 = businessPaymethod.data_sandbox) === null || _businessPaymethod$da4 === void 0 ? void 0 : _businessPaymethod$da4.secret,
    placeholder: "".concat(t('SECRECT_KEY', 'Secret key'), " (").concat(t('SANDBOX', 'Sandbox'), ")"),
    onChange: function onChange(e) {
      return handleChangeInput(e, true);
    }
  }), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    borderRadius: "5px",
    color: "primary",
    disabled: actionState.loading || Object.keys(changesState).length === 0,
    onClick: function onClick() {
      return handleSaveClick(businessPaymethod.id);
    }
  }, actionState.loading ? t('LOADING', 'Loading') : t('SAVE', 'Save')));
};

exports.PaymethodOptionStripeRedirect = PaymethodOptionStripeRedirect;