"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _SingleBusinessProduct = require("../SingleBusinessProduct");

var _ColumnAllowSettingPopover = require("../ColumnAllowSettingPopover");

var _CreateBusinessProduct = require("../CreateBusinessProduct");

var _BusinessSpreadSheet = require("../BusinessSpreadSheet");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var BusinessProductList = function BusinessProductList(props) {
  var categoryState = props.categoryState,
      viewMethod = props.viewMethod,
      businessState = props.businessState,
      searchValue = props.searchValue,
      errorQuantityProducts = props.errorQuantityProducts,
      handleSearchRedirect = props.handleSearchRedirect,
      handleChangeSearch = props.handleChangeSearch;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      openPopover = _useState2[0],
      setOpenPopover = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAddProduct = _useState4[0],
      setIsAddProduct = _useState4[1];

  var _useState5 = (0, _react.useState)({
    business: true,
    price: true,
    description: true
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      allowColumns = _useState6[0],
      setAllowColumns = _useState6[1];

  var optionsDefault = [{
    value: 'business',
    content: t('BUSINESS', 'Business')
  }, {
    value: 'price',
    content: t('PRICE', 'Price')
  }, {
    value: 'description',
    content: t('DESCRIPTION', 'Description')
  }];

  var handleChangeAllowColumns = function handleChangeAllowColumns(type) {
    setAllowColumns(_objectSpread(_objectSpread({}, allowColumns), {}, _defineProperty({}, type, !allowColumns[type])));
  };

  return /*#__PURE__*/_react.default.createElement(_styles.ListContent, null, viewMethod === 'list' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessProductListTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.business) && /*#__PURE__*/_react.default.createElement("th", {
    className: "business"
  }, t('BUSINESS', 'Business')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.price) && /*#__PURE__*/_react.default.createElement("th", {
    className: "price"
  }, t('PRICE', 'Price')), (allowColumns === null || allowColumns === void 0 ? void 0 : allowColumns.description) && /*#__PURE__*/_react.default.createElement("th", {
    className: "description"
  }, t('DESCRIPTION', 'Description')), /*#__PURE__*/_react.default.createElement("th", null, t('ACTIONS', 'Actions')), /*#__PURE__*/_react.default.createElement("th", {
    className: "more"
  }, /*#__PURE__*/_react.default.createElement(_ColumnAllowSettingPopover.ColumnAllowSettingPopover, {
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
  })))), categoryState.loading || businessState.loading ? _toConsumableArray(Array(30).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, categoryState.products.map(function (product, i) {
    return product.id && /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, _extends({}, props, {
      key: i,
      product: product,
      allowColumns: allowColumns,
      business: businessState === null || businessState === void 0 ? void 0 : businessState.business
    }));
  }), isAddProduct && /*#__PURE__*/_react.default.createElement(_CreateBusinessProduct.CreateBusinessProduct, _extends({}, props, {
    allowColumns: allowColumns,
    setIsAddProduct: setIsAddProduct,
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business
  })))), !businessState.loading && !isAddProduct && /*#__PURE__*/_react.default.createElement(_styles.AddProductBtn, {
    onClick: function onClick() {
      return setIsAddProduct(true);
    }
  }, t('ADD_NEW_PRODUCT', 'Add new product'))), !categoryState.loading && !businessState.loading && categoryState.products.length === 0 && !(searchValue && errorQuantityProducts || !searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.'),
    btnTitle: !searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters'),
    onClickButton: function onClickButton() {
      return !searchValue ? handleSearchRedirect() : handleChangeSearch('');
    }
  }))), viewMethod === 'spreedsheet' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ProductListSpreadContainer, null, categoryState.loading || businessState.loading ? _toConsumableArray(Array(30).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_SingleBusinessProduct.SingleBusinessProduct, {
      key: i,
      isSkeleton: true,
      viewMethod: viewMethod,
      allowColumns: allowColumns
    });
  }) : /*#__PURE__*/_react.default.createElement(_BusinessSpreadSheet.BusinessSpreadSheet, _extends({}, props, {
    business: businessState === null || businessState === void 0 ? void 0 : businessState.business
  }))), !categoryState.loading && !businessState.loading && categoryState.products.length === 0 && !(searchValue && errorQuantityProducts || !searchValue && !errorQuantityProducts) && /*#__PURE__*/_react.default.createElement(_styles.WrapperNotFound, null, /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: !searchValue ? t('ERROR_NOT_FOUND_PRODUCTS_TIME', 'No products found at this time') : t('ERROR_NOT_FOUND_PRODUCTS', 'No products found, please change filters.'),
    btnTitle: !searchValue ? t('SEARCH_REDIRECT', 'Go to Businesses') : t('CLEAR_FILTERS', 'Clear filters'),
    onClickButton: function onClickButton() {
      return !searchValue ? handleSearchRedirect() : handleChangeSearch('');
    }
  }))));
};

exports.BusinessProductList = BusinessProductList;