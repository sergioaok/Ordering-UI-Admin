"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDetails = exports.BusinessDetailsUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

var _BusinessSummary = require("../BusinessSummary");

var _BusinessSupport = require("../BusinessSupport");

var _BusinessInformation = require("../BusinessInformation");

var _BusinessSchedule = require("../BusinessSchedule");

var _BusinessMenu = require("../BusinessMenu");

var _BusinessDeliveryZone = require("../BusinessDeliveryZone");

var _BusinessPaymentMethods = require("../BusinessPaymentMethods");

var _BusinessCustomFields = require("../BusinessCustomFields");

var _MoreSidebarLayout = require("../MoreSidebarLayout");

var _styles = require("./styles");

var _Personalization = require("../Personalization");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessDetailsUI = function BusinessDetailsUI(props) {
  var _businessState$busine;

  var open = props.open,
      businessId = props.businessId,
      businessState = props.businessState,
      handleChangeActiveBusiness = props.handleChangeActiveBusiness,
      handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
      handleDeleteBusinessOwner = props.handleDeleteBusinessOwner,
      handleAddBusinessOwner = props.handleAddBusinessOwner,
      businessTypes = props.businessTypes,
      formState = props.formState,
      setFormState = props.setFormState,
      handleUpdateBusinessClick = props.handleUpdateBusinessClick,
      setBusinessTypes = props.setBusinessTypes,
      handleSuccessAddBusinessItem = props.handleSuccessAddBusinessItem,
      handleSuccessDeleteBusinessItem = props.handleSuccessDeleteBusinessItem,
      handleUpdateBusinessState = props.handleUpdateBusinessState;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuOpen = _useState2[0],
      setIsMenuOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      extraOpen = _useState4[0],
      setExtraOpen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isExtendExtraOpen = _useState6[0],
      setIsExtendExtraOpen = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selectedItem = _useState8[0],
      setSelectedItem = _useState8[1];

  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);

    if (!value) {
      props.onClose();
    }
  };

  var toggleMainContent = function toggleMainContent() {
    if (isMenuOpen) {
      if (width <= 500) {
        document.getElementById('business_details_bar').style.width = '100vw';
      } else {
        if (extraOpen && width >= 1000) {
          document.getElementById('business_details_bar').style.width = '1000px';
        } else {
          document.getElementById('business_details_bar').style.width = '500px';
        }
      }
    }
  };

  var handleSelectedItem = function handleSelectedItem(item) {
    setIsExtendExtraOpen(false);
    setSelectedItem(item);
    setExtraOpen(true);
  };

  var handleCloseExtraOpen = function handleCloseExtraOpen() {
    setIsExtendExtraOpen(false);
    setExtraOpen(false);
    setSelectedItem(null);
  };

  (0, _react.useEffect)(function () {
    if (width > 1000) {
      setIsExtendExtraOpen(false);
    }

    toggleMainContent();
  }, [width]);
  (0, _react.useEffect)(function () {
    if (!open) return;
    actionSidebar(true);
  }, [open]);
  (0, _react.useEffect)(function () {
    if (width < 1000) return;

    if (extraOpen) {
      document.getElementById('business_details_bar').style.width = '1000px';
    } else {
      toggleMainContent();
    }
  }, [extraOpen]);
  (0, _react.useEffect)(function () {
    setExtraOpen(false);
    setIsExtendExtraOpen(false);
  }, [businessId]);
  return /*#__PURE__*/_react.default.createElement(_styles.BarContainer, {
    id: "business_details_bar"
  }, (!isExtendExtraOpen || width < 1000) && /*#__PURE__*/_react.default.createElement(_BusinessSummary.BusinessSummary, {
    businessState: businessState,
    handleChangeActiveBusiness: handleChangeActiveBusiness,
    actionSidebar: actionSidebar,
    selectedItem: selectedItem,
    handleSelectedItem: handleSelectedItem,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness
  }), extraOpen && /*#__PURE__*/_react.default.createElement(_MoreSidebarLayout.MoreSidebarLayout, {
    isExtendExtraOpen: isExtendExtraOpen,
    onClose: handleCloseExtraOpen
  }, selectedItem === 'support' && /*#__PURE__*/_react.default.createElement(_BusinessSupport.BusinessSupport, {
    businessState: businessState
  }), selectedItem === 'information' && /*#__PURE__*/_react.default.createElement(_BusinessInformation.BusinessInformation, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleDeleteBusinessOwner: handleDeleteBusinessOwner,
    handleAddBusinessOwner: handleAddBusinessOwner,
    formState: formState,
    setFormState: setFormState,
    businessTypes: businessTypes,
    handleUpdateBusinessClick: handleUpdateBusinessClick,
    setBusinessTypes: setBusinessTypes,
    handleSuccessAddBusinessItem: handleSuccessAddBusinessItem,
    handleSuccessDeleteBusinessItem: handleSuccessDeleteBusinessItem
  }), selectedItem === 'schedule' && /*#__PURE__*/_react.default.createElement(_BusinessSchedule.BusinessSchedule, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessBusinessScheduleUpdate: handleUpdateBusinessState
  }), selectedItem === 'menu' && /*#__PURE__*/_react.default.createElement(_BusinessMenu.BusinessMenu, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    handleSuccessBusinessMenu: handleUpdateBusinessState,
    setIsExtendExtraOpen: setIsExtendExtraOpen
  }), selectedItem === 'delivery_zones' && /*#__PURE__*/_react.default.createElement(_BusinessDeliveryZone.BusinessDeliveryZone, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    onClose: function onClose() {
      return setIsExtendExtraOpen(false);
    },
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'payment_methods' && /*#__PURE__*/_react.default.createElement(_BusinessPaymentMethods.BusinessPaymentMethods, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business,
    setIsExtendExtraOpen: setIsExtendExtraOpen,
    handleSuccessUpdate: handleUpdateBusinessState
  }), selectedItem === 'custom_fields' && /*#__PURE__*/_react.default.createElement(_BusinessCustomFields.BusinessCustomFields, {
    businessId: businessState === null || businessState === void 0 ? void 0 : businessState.business.id,
    metafields: businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.metafields,
    handleSuccessAddMetaFields: function handleSuccessAddMetaFields(result) {
      return handleSuccessAddBusinessItem('metafields', result);
    },
    handleSuccessDeleteBusinessMetaFields: function handleSuccessDeleteBusinessMetaFields(id) {
      return handleSuccessDeleteBusinessItem('metafields', id);
    }
  }), selectedItem === 'personalization' && /*#__PURE__*/_react.default.createElement(_Personalization.Personalization, {
    isShowTitle: true
  })));
};

exports.BusinessDetailsUI = BusinessDetailsUI;

var BusinessDetails = function BusinessDetails(props) {
  var businessDetailsProps = _objectSpread(_objectSpread({}, props), {}, {
    asDashboard: true,
    UIComponent: BusinessDetailsUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDetails, businessDetailsProps);
};

exports.BusinessDetails = BusinessDetails;