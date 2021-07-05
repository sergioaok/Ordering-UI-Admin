"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessPaymentMethods = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _reactBootstrap = require("react-bootstrap");

var _styledComponents = require("styled-components");

var _SpinnerLoader = require("../SpinnerLoader");

var _PaymentOptionStripeDirect = require("../PaymentOptionStripeDirect");

var _PaymethodOptionPaypalExpress = require("../PaymethodOptionPaypalExpress");

var _PaymethodOptionStripeRedirect = require("../PaymethodOptionStripeRedirect");

var _PaymethodOptionStripeConnect = require("../PaymethodOptionStripeConnect");

var _Modal = require("../Modal");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessPaymentMethodsUI = function BusinessPaymentMethodsUI(props) {
  var business = props.business,
      businessPaymethodsState = props.businessPaymethodsState,
      paymethodsList = props.paymethodsList,
      handleClickPayment = props.handleClickPayment,
      handleDeleteBusinessPaymethodOption = props.handleDeleteBusinessPaymethodOption,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      actionState = props.actionState,
      changesState = props.changesState,
      cleanChangesState = props.cleanChangesState,
      handleChangeSandbox = props.handleChangeSandbox,
      handleChangeInput = props.handleChangeInput,
      handleSaveClick = props.handleSaveClick,
      handleStripeConnect = props.handleStripeConnect,
      handleChangeStripeInput = props.handleChangeStripeInput,
      handleStripeSave = props.handleStripeSave;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var theme = (0, _styledComponents.useTheme)();

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEdit = _useState2[0],
      setIsEdit = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedBusinessPaymethod = _useState4[0],
      setSelectedBusinessPaymethod = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedPaymethodGateway = _useState6[0],
      setSelectedPaymethodGateway = _useState6[1];

  var ActionIcon = /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null);

  var editablePaymethods = ['stripe_direct', 'paypal_express', 'stripe_redirect', 'stripe_connect'];

  var isCheckEnableSate = function isCheckEnableSate(id) {
    var found = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === id;
    });
    var valid = false;

    if (found) {
      valid = found.enabled;
    }

    return valid;
  };

  var isCheckFoundBusinessPaymethod = function isCheckFoundBusinessPaymethod(id) {
    var found = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === id;
    });
    return found;
  };

  var handleOpenEdit = function handleOpenEdit(paymethodId, paymethodGateway) {
    setSelectedPaymethodGateway(paymethodGateway);
    var businessPaymethod = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === paymethodId;
    });
    setSelectedBusinessPaymethod(businessPaymethod);
    setIsEdit(true);
    setIsExtendExtraOpen(true);
  };

  var handleCloseEdit = function handleCloseEdit() {
    setIsExtendExtraOpen(false);
    setIsEdit(false);
  };

  (0, _react.useEffect)(function () {
    if (!selectedBusinessPaymethod) return;
    var updatedPaymethod = businessPaymethodsState.paymethods.find(function (paymethod) {
      return paymethod.paymethod_id === selectedBusinessPaymethod.paymethod_id;
    });
    setSelectedBusinessPaymethod(updatedPaymethod);
  }, [businessPaymethodsState === null || businessPaymethodsState === void 0 ? void 0 : businessPaymethodsState.paymethods, selectedBusinessPaymethod]);
  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, null, actionState.loading && /*#__PURE__*/_react.default.createElement(_styles.WrapperSpinnerLoader, null, /*#__PURE__*/_react.default.createElement(_SpinnerLoader.SpinnerLoader, null)), /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodsContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('PAYMETHODS', 'Payment methods')), paymethodsList.loading || businessPaymethodsState.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.PaymethodOptionContainer, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.PaymethodOption, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 15,
      height: 15
    }), /*#__PURE__*/_react.default.createElement(_styles.PaymethodName, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 24
    }))));
  }) : /*#__PURE__*/_react.default.createElement(_styles.PaymethodListWrapper, null, paymethodsList.paymethods.map(function (paymethod) {
    return /*#__PURE__*/_react.default.createElement(_styles.PaymethodOptionContainer, {
      key: paymethod.id
    }, /*#__PURE__*/_react.default.createElement(_styles.PaymethodOption, {
      onClick: function onClick() {
        return handleClickPayment(paymethod.id);
      }
    }, isCheckEnableSate(paymethod.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, {
      className: "fill"
    }) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement(_styles.PaymethodName, null, paymethod === null || paymethod === void 0 ? void 0 : paymethod.name)), isCheckFoundBusinessPaymethod(paymethod.id) && /*#__PURE__*/_react.default.createElement(_styles.DropDownWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'left' : 'right',
      title: ActionIcon,
      id: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, editablePaymethods.includes(paymethod.gateway) && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenEdit(paymethod.id, paymethod.gateway);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return console.log('custom');
      }
    }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteBusinessPaymethodOption(paymethod.id);
      }
    }, t('DELETE', 'Delete')))));
  }))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEdit && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, selectedPaymethodGateway === 'stripe_direct' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripeDirect.PaymentOptionStripeDirect, {
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick
  }), selectedPaymethodGateway === 'paypal_express' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionPaypalExpress.PaymethodOptionPaypalExpress, {
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick
  }), selectedPaymethodGateway === 'stripe_redirect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeRedirect.PaymethodOptionStripeRedirect, {
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick
  }), selectedPaymethodGateway === 'stripe_connect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeConnect.PaymethodOptionStripeConnect, {
    open: isEdit,
    business: business,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleStripeConnect: handleStripeConnect,
    handleChangeStripeInput: handleChangeStripeInput,
    handleStripeSave: handleStripeSave
  }))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isEdit && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    }
  }, selectedPaymethodGateway === 'stripe_direct' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripeDirect.PaymentOptionStripeDirect, {
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick
  }), selectedPaymethodGateway === 'paypal_express' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionPaypalExpress.PaymethodOptionPaypalExpress, {
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick
  }), selectedPaymethodGateway === 'stripe_redirect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeRedirect.PaymethodOptionStripeRedirect, {
    open: isEdit,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleChangeSandbox: handleChangeSandbox,
    handleChangeInput: handleChangeInput,
    handleSaveClick: handleSaveClick
  }), selectedPaymethodGateway === 'stripe_connect' && /*#__PURE__*/_react.default.createElement(_PaymethodOptionStripeConnect.PaymethodOptionStripeConnect, {
    open: isEdit,
    business: business,
    onClose: function onClose() {
      return handleCloseEdit();
    },
    businessPaymethod: selectedBusinessPaymethod,
    changesState: changesState,
    cleanChangesState: cleanChangesState,
    actionState: actionState,
    handleStripeConnect: handleStripeConnect,
    handleChangeStripeInput: handleChangeStripeInput,
    handleStripeSave: handleStripeSave
  })))));
};

var BusinessPaymentMethods = function BusinessPaymentMethods(props) {
  var businessPaymethodProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessPaymentMethodsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessPaymethods, businessPaymethodProps);
};

exports.BusinessPaymentMethods = BusinessPaymentMethods;