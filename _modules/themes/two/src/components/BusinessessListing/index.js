"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessessListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _BusinessList = require("../BusinessList");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BusinessListingHeader = require("../BusinessListingHeader");

var _BusinessActiveStateFilter = require("../BusinessActiveStateFilter");

var _BusinessTypeFilter = require("../BusinessTypeFilter");

var _BsGrid = _interopRequireDefault(require("@meronex/icons/bs/BsGrid"));

var _BsViewList = _interopRequireDefault(require("@meronex/icons/bs/BsViewList"));

var _BusinessDetails = require("../BusinessDetails");

var _AddBusinessSidebar = require("../AddBusinessSidebar");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var BusinessessListingUI = function BusinessessListingUI(props) {
  var businessList = props.businessList,
      pagination = props.pagination,
      searchValue = props.searchValue,
      selectedBusinessActiveState = props.selectedBusinessActiveState,
      handleChangeBusinessActiveState = props.handleChangeBusinessActiveState,
      handleChangeBusinessType = props.handleChangeBusinessType,
      loadMoreBusinesses = props.loadMoreBusinesses,
      handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
      handleSucessAddBusiness = props.handleSucessAddBusiness,
      handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
      onSearch = props.onSearch,
      onBusinessRedirect = props.onBusinessRedirect;
  var query = new URLSearchParams((0, _reactRouterDom.useLocation)().search);

  var _useState = (0, _react.useState)('list'),
      _useState2 = _slicedToArray(_useState, 2),
      viewMethod = _useState2[0],
      setViewMethod = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openBusinessDetails = _useState4[0],
      setOpenBusinessDetails = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      detailsBusiness = _useState6[0],
      setDetailsBusiness = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      detailsBusinessId = _useState8[0],
      setDetailsBusinessId = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      openAddBusiness = _useState10[0],
      setOpenAddBusiness = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      businessTypes = _useState12[0],
      setBusinessTypes = _useState12[1];

  var handleBackRedirect = function handleBackRedirect() {
    setOpenBusinessDetails(false);
    onBusinessRedirect();
  };

  var handleOpenBusinessDetails = function handleOpenBusinessDetails(business) {
    setOpenAddBusiness(false);
    setDetailsBusiness(business);
    setDetailsBusinessId(business.id);
    setOpenBusinessDetails(true);
    onBusinessRedirect(business.id);
  };

  var handleOpenAddBusiness = function handleOpenAddBusiness() {
    var id = query.get('id');

    if (id) {
      handleBackRedirect();
    }

    setOpenAddBusiness(true);
  };

  var onhandleSuccessAddBusiness = function onhandleSuccessAddBusiness(business) {
    handleSucessAddBusiness(business);
    setOpenAddBusiness(false);
    handleOpenBusinessDetails(business);
  };

  (0, _react.useEffect)(function () {
    var id = query.get('id');
    if (id === null) setOpenBusinessDetails(false);else {
      setDetailsBusinessId(id);
      onBusinessRedirect && onBusinessRedirect(id);
      setOpenBusinessDetails(true);
    }
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListingContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessListingHeader.BusinessListingHeader, {
    searchValue: searchValue,
    onSearch: onSearch,
    handleOpenAddBusiness: handleOpenAddBusiness
  }), /*#__PURE__*/_react.default.createElement(_styles.ViewContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessActiveStateFilter.BusinessActiveStateFilter, {
    selectedBusinessActiveState: selectedBusinessActiveState,
    handleChangeBusinessActiveState: handleChangeBusinessActiveState
  }), /*#__PURE__*/_react.default.createElement(_styles.WrapperView, null, /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'card',
    onClick: function onClick() {
      return setViewMethod('card');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsGrid.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'list',
    onClick: function onClick() {
      return setViewMethod('list');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsViewList.default, null)))), /*#__PURE__*/_react.default.createElement(_BusinessTypeFilter.BusinessTypeFilter, {
    businessTypes: props.businessTypes,
    defaultBusinessType: props.defaultBusinessType,
    handleChangeBusinessType: handleChangeBusinessType,
    setBusinessTypes: setBusinessTypes
  }), /*#__PURE__*/_react.default.createElement(_BusinessList.BusinessList, {
    viewMethod: viewMethod,
    businessList: businessList,
    pagination: pagination,
    loadMoreBusinesses: loadMoreBusinesses,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    handleOpenBusinessDetails: handleOpenBusinessDetails
  })), openBusinessDetails && /*#__PURE__*/_react.default.createElement(_BusinessDetails.BusinessDetails, {
    open: openBusinessDetails // business={detailsBusiness}
    ,
    businessTypes: businessTypes,
    businessId: detailsBusinessId,
    handleSucessAddBusiness: handleSucessAddBusiness,
    handleSucessRemoveBusiness: handleSucessRemoveBusiness,
    handleSucessUpdateBusiness: handleSucessUpdateBusiness,
    setBusinessTypes: setBusinessTypes,
    onClose: function onClose() {
      return handleBackRedirect();
    }
  }), openAddBusiness && /*#__PURE__*/_react.default.createElement(_AddBusinessSidebar.AddBusinessSidebar, {
    open: openAddBusiness,
    onClose: function onClose() {
      return setOpenAddBusiness(false);
    },
    handleSucessAddBusiness: onhandleSuccessAddBusiness
  }));
};

var BusinessessListing = function BusinessessListing(props) {
  var businessListingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessessListingUI,
    asDashboard: true,
    initialPageSize: 50,
    loadMorePageSize: 10,
    isSearchByBusinessName: true,
    isSearchByBusinessEmail: true,
    isSearchByBusinessPhone: true
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DashboardBusinessList, businessListingProps);
};

exports.BusinessessListing = BusinessessListing;