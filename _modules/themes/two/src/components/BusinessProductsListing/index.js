"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsListing = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BusinessCategoryEdit = require("../BusinessCategoryEdit");

var _SearchBar = require("../SearchBar");

var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));

var _BsViewList = _interopRequireDefault(require("@meronex/icons/bs/BsViewList"));

var _BsTable = _interopRequireDefault(require("@meronex/icons/bs/BsTable"));

var _BusinessProductsCategories = require("../BusinessProductsCategories");

var _BusinessProductList = require("../BusinessProductList");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BusinessProductsListingUI = function BusinessProductsListingUI(props) {
  var _businessState$busine, _businessState$busine2;

  var categorySelected = props.categorySelected,
      searchValue = props.searchValue,
      handleChangeCategory = props.handleChangeCategory,
      handleChangeSearch = props.handleChangeSearch,
      featuredProducts = props.featuredProducts,
      businessState = props.businessState,
      onProductRedirect = props.onProductRedirect,
      slug = props.slug,
      categoryId = props.categoryId;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)('list'),
      _useState2 = _slicedToArray(_useState, 2),
      viewMethod = _useState2[0],
      setViewMethod = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    category: null
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      categoryToEdit = _useState4[0],
      setCategoryToEdit = _useState4[1];

  (0, _react.useEffect)(function () {
    if (categoryId) {
      setCategoryToEdit(_objectSpread(_objectSpread({}, categoryToEdit), {}, {
        open: true
      }));
    }
  }, [categoryId]);

  var handleOpenCategoryDetails = function handleOpenCategoryDetails(category) {
    if ((category === null || category === void 0 ? void 0 : category.id) === null) return;
    onProductRedirect && onProductRedirect({
      slug: slug,
      category: category === null || category === void 0 ? void 0 : category.id,
      product: null
    });
    setCategoryToEdit({
      open: true,
      category: _objectSpread({}, category)
    });
  };

  var handleCloseEdit = function handleCloseEdit() {
    onProductRedirect && onProductRedirect({
      slug: slug,
      category: null,
      product: null
    });
    setCategoryToEdit({
      open: false,
      category: null
    });
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryProductsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderContainer, null, /*#__PURE__*/_react.default.createElement("div", null, businessState.loading ? /*#__PURE__*/_react.default.createElement("h1", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 200,
    height: 30
  })) : (businessState === null || businessState === void 0 ? void 0 : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.name) && /*#__PURE__*/_react.default.createElement("h1", null, businessState === null || businessState === void 0 ? void 0 : (_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.name)), /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    isCustomLayout: true,
    search: searchValue,
    onSearch: handleChangeSearch,
    placeholder: t('SEARCH', 'Search')
  })), /*#__PURE__*/_react.default.createElement(_styles.CategoryProductsContent, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryListContainer, null, /*#__PURE__*/_react.default.createElement(_BusinessProductsCategories.BusinessProductsCategories, _extends({}, props, {
    businessState: businessState,
    categorySelected: categorySelected,
    onClickCategory: handleChangeCategory,
    featured: featuredProducts,
    handleOpenCategoryDetails: handleOpenCategoryDetails
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductListContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ProductHeader, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("h1", null, (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.name) || t('ALL', 'All')), /*#__PURE__*/_react.default.createElement(_styles.AddButton, {
    onClick: function onClick() {
      return handleOpenCategoryDetails(categorySelected);
    }
  }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null))), /*#__PURE__*/_react.default.createElement(_styles.ActionIconList, null, /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'list',
    onClick: function onClick() {
      return setViewMethod('list');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsViewList.default, null)), /*#__PURE__*/_react.default.createElement(_styles.ViewMethodButton, {
    active: viewMethod === 'spreedsheet',
    onClick: function onClick() {
      return setViewMethod('spreedsheet');
    }
  }, /*#__PURE__*/_react.default.createElement(_BsTable.default, null)))), /*#__PURE__*/_react.default.createElement(_BusinessProductList.BusinessProductList, _extends({}, props, {
    viewMethod: viewMethod
  }))))), (categoryToEdit === null || categoryToEdit === void 0 ? void 0 : categoryToEdit.open) && /*#__PURE__*/_react.default.createElement(_BusinessCategoryEdit.BusinessCategoryEdit, _extends({}, props, {
    open: categoryToEdit === null || categoryToEdit === void 0 ? void 0 : categoryToEdit.open,
    onClose: handleCloseEdit,
    category: categoryToEdit === null || categoryToEdit === void 0 ? void 0 : categoryToEdit.category,
    businessState: businessState
  })));
};

var BusinessProductsListing = function BusinessProductsListing(props) {
  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isInitialRender = _useState6[0],
      setIsInitialRender = _useState6[1];

  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsListingUI,
    isInitialRender: isInitialRender,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessProductsListing, businessProductslistingProps);
};

exports.BusinessProductsListing = BusinessProductsListing;