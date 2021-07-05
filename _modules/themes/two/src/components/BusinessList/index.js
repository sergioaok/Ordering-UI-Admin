"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _PaginationButton = require("../PaginationButton");

var _styles = require("./styles");

var _SingleBusiness = require("../SingleBusiness");

var _ColumnAllowSettingPopover = require("../ColumnAllowSettingPopover");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessList = function BusinessList(props) {
  var viewMethod = props.viewMethod,
      businessList = props.businessList,
      pagination = props.pagination,
      loadMoreBusinesses = props.loadMoreBusinesses,
      handleSucessRemoveBusiness = props.handleSucessRemoveBusiness,
      handleSucessAddBusiness = props.handleSucessAddBusiness,
      handleSucessUpdateBusiness = props.handleSucessUpdateBusiness,
      handleOpenBusinessDetails = props.handleOpenBusinessDetails;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openPopover = _useState2[0],
      setOpenPopover = _useState2[1];

  var _useState3 = (0, _react.useState)({
    business: true,
    deliveryFee: true,
    distance: true,
    deliveryTime: true
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      allowColumns = _useState4[0],
      setAllowColumns = _useState4[1];

  var optionsDefault = [{
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'deliveryFee',
    content: t('DELIVERY_FEE', 'Delivery fee')
  }, {
    value: 'distance',
    content: t('DISTANCE', 'Distance')
  }, {
    value: 'deliveryTime',
    content: t('DELIVERY TIME', 'Delivery time')
  }];

  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  }; // Change page


  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var _useState7 = (0, _react.useState)(10),
      _useState8 = _slicedToArray(_useState7, 1),
      businessesPerPage = _useState8[0]; // Get current orders


  var indexOfLastPost = currentPage * businessesPerPage;
  var indexOfFirstPost = indexOfLastPost - businessesPerPage;

  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      currentBusinessess = _useState10[0],
      setCurrentBusinessess = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      totalPages = _useState12[0],
      setTotalPages = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      totalBusinesses = _useState14[0],
      setTotalBusinesses = _useState14[1]; // Change page


  var prevPaginate = function prevPaginate() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  var nextPaginate = function nextPaginate() {
    if (currentPage !== totalPages) {
      if (businessList.businesses.length < businessesPerPage * currentPage + 1) {
        loadMoreBusinesses();
      }

      setCurrentPage(currentPage + 1);
    }
  };

  (0, _react.useEffect)(function () {
    if (businessList.loading) return;

    var _totalPages;

    if (pagination === null || pagination === void 0 ? void 0 : pagination.total) {
      _totalPages = Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / businessesPerPage);
    } else if (businessList.businesses.length > 0) {
      _totalPages = Math.ceil(businessList.businesses.length / businessesPerPage);
    }

    var _currentBusinessess = businessList.businesses.slice(indexOfFirstPost, indexOfLastPost);

    setTotalBusinesses(pagination === null || pagination === void 0 ? void 0 : pagination.total);
    setTotalPages(_totalPages);
    setCurrentBusinessess(_currentBusinessess);
  }, [businessList, currentPage, pagination]);
  var handleScroll = (0, _react.useCallback)(function () {
    var _document$documentEle, _document$documentEle2;

    var innerHeightScrolltop = window.innerHeight + ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) + 10;
    var badScrollPosition = innerHeightScrolltop < ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.offsetHeight);
    var hasMore = !(pagination.to === pagination.total);
    if (badScrollPosition || businessList.loading || !hasMore) return;
    loadMoreBusinesses();
  }, [businessList, pagination]);
  (0, _react.useEffect)(function () {
    if (viewMethod !== 'card') return;
    window.addEventListener('scroll', handleScroll);
    return function () {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, viewMethod]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessListTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("th", {
    className: "business"
  }, t('BUSINESS', 'Business')), ((allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.deliveryFee) || (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.distance) || (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.deliveryTime)) && /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 3
  }, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')), /*#__PURE__*/_react.default.createElement("th", null, /*#__PURE__*/_react.default.createElement(_ColumnAllowSettingPopover.ColumnAllowSettingPopover, {
    open: openPopover,
    allowColumns: allowColumns,
    optionsDefault: optionsDefault,
    onClick: function onClick() {
      return setOpenPopover(!openPopover);
    },
    onClose: function onClose() {
      return setOpenPopover(false);
    },
    handleChangeAllowColumns: handleChangeAllowColumns
  })))), businessList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : currentBusinessess.map(function (business) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: business.id,
      viewMethod: viewMethod,
      allowColumns: allowColumns,
      businessId: business.id,
      business: business,
      handleSucessRemoveBusiness: handleSucessRemoveBusiness,
      handleSucessAddBusiness: handleSucessAddBusiness,
      handleSucessUpdateBusiness: handleSucessUpdateBusiness,
      handleOpenBusinessDetails: handleOpenBusinessDetails
    });
  }))), pagination && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, !businessList.loading && totalPages > 0 && /*#__PURE__*/_react.default.createElement(_PaginationButton.PaginationButton, {
    pageSize: businessesPerPage,
    total: totalBusinesses,
    currentPage: currentPage,
    totalPages: totalPages,
    prevPaginate: prevPaginate,
    nextPaginate: nextPaginate
  }))), viewMethod === 'card' && /*#__PURE__*/_react.default.createElement(_styles.BusinessCardContainer, null, businessList.loading ? _toConsumableArray(Array(30).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : businessList.businesses.map(function (business) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusiness.SingleBusiness, {
      key: business.id,
      viewMethod: viewMethod,
      allowColumns: allowColumns,
      businessId: business.id,
      business: business,
      handleSucessRemoveBusiness: handleSucessRemoveBusiness,
      handleSucessAddBusiness: handleSucessAddBusiness,
      handleSucessUpdateBusiness: handleSucessUpdateBusiness,
      handleOpenBusinessDetails: handleOpenBusinessDetails
    });
  })));
};

exports.BusinessList = BusinessList;