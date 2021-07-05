"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderContentHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _SearchBar = require("../SearchBar");

var _Modal = require("../Modal");

var _OrdersDashboardSwitch = require("../OrdersDashboardSwitch");

var _FilterGroupList = require("../FilterGroupList");

var _DeadlineSettingInterface = require("../DeadlineSettingInterface");

var _MdcFilterOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOutline"));

var _MdcFilterOff = _interopRequireDefault(require("@meronex/icons/mdc/MdcFilterOff"));

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

var OrderContentHeader = function OrderContentHeader(props) {
  var activeSwitch = props.activeSwitch,
      handleChangeSearch = props.handleChangeSearch,
      searchValue = props.searchValue,
      driverGroupList = props.driverGroupList,
      driversList = props.driversList,
      paymethodsList = props.paymethodsList,
      businessesList = props.businessesList,
      filterValues = props.filterValues,
      handleChangeFilterValues = props.handleChangeFilterValues,
      handleSwitch = props.handleSwitch;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      filterModalOpen = _useState2[0],
      setFilterModalOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      filterApplied = _useState4[0],
      setFilterApplied = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      deadlineSettingModalOpen = _useState6[0],
      setDeadlineSettingModalOpen = _useState6[1]; // const [deadlineType, setDeadlineType] = useState(0)
  // const handleChangeDeadlineType = (deadlineType) => {
  //   setDeadlineType(deadlineType)
  //   if (deadlineType === 4) {
  //     setDeadlineSettingModalOpen(true)
  //   }
  // }


  var handleDeadlineSetting = function handleDeadlineSetting() {
    setDeadlineSettingModalOpen(false);
  };

  var handleCloseFilterModal = function handleCloseFilterModal() {
    setFilterModalOpen(false);
  };

  var closeModal = function closeModal(e) {
    if (e.code === 'Escape') setFilterModalOpen(false);
  };

  (0, _react.useEffect)(function () {
    var _filterApplied = false;

    if (Object.keys(filterValues).length === 0) {
      _filterApplied = false;
    } else {
      _filterApplied = filterValues.businessIds.length > 0 || filterValues.cityIds.length > 0 || filterValues.deliveryEndDatetime !== null || filterValues.deliveryFromDatetime !== null || filterValues.deliveryTypes.length > 0 || filterValues.driverIds.length > 0 || filterValues.paymethodIds.length > 0 || filterValues.statuses.length > 0;
    }

    setFilterApplied(_filterApplied);
  }, [filterValues]);
  (0, _react.useEffect)(function () {
    if (!filterModalOpen) return;
    document.addEventListener('keydown', closeModal);
    return function () {
      return document.removeEventListener('keydown', closeModal);
    };
  }, [filterModalOpen]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.OrderContentHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderSection, null, /*#__PURE__*/_react.default.createElement(_styles.HeaderTitle, null, (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.orders) && t('ORDERS', 'orders'), (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.deliveries) && t('DASHBOARD', 'Dashboard'), (activeSwitch === null || activeSwitch === void 0 ? void 0 : activeSwitch.messages) && t('MESSAGES', 'Messages')), /*#__PURE__*/_react.default.createElement(_styles.WrapperHeaderRightSection, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboardSwitch.OrdersDashboardSwitch, {
    activeSwitch: activeSwitch,
    handleSwitch: handleSwitch
  }))), /*#__PURE__*/_react.default.createElement(_styles.TopRightSection, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperSearchAndFilter, null, /*#__PURE__*/_react.default.createElement(_SearchBar.SearchBar, {
    onSearch: handleChangeSearch,
    search: searchValue,
    placeholder: t('SEARCH', 'Search')
  }), /*#__PURE__*/_react.default.createElement(_styles.FilterButton, {
    onClick: function onClick() {
      return setFilterModalOpen(true);
    },
    name: "filter-btn"
  }, filterApplied ? /*#__PURE__*/_react.default.createElement(_MdcFilterOutline.default, null) : /*#__PURE__*/_react.default.createElement(_MdcFilterOff.default, null))), /*#__PURE__*/_react.default.createElement(_styles.WrapperDeadlineAndSwitch, null, /*#__PURE__*/_react.default.createElement(_OrdersDashboardSwitch.OrdersDashboardSwitch, {
    activeSwitch: activeSwitch,
    handleSwitch: handleSwitch
  })))), /*#__PURE__*/_react.default.createElement(_FilterGroupList.FilterGroupList, {
    open: filterModalOpen,
    handleCloseFilterModal: handleCloseFilterModal,
    driverGroupList: driverGroupList,
    driversList: driversList,
    paymethodsList: paymethodsList,
    businessesList: businessesList,
    handleChangeFilterValues: handleChangeFilterValues
  }), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('SETTINGS', 'Settings'),
    width: "50%",
    padding: "30px",
    open: deadlineSettingModalOpen,
    onClose: function onClose() {
      return setDeadlineSettingModalOpen(false);
    },
    acceptText: t('ACCEPT', 'Accept'),
    onAccept: function onAccept() {
      return handleDeadlineSetting();
    }
  }, /*#__PURE__*/_react.default.createElement(_DeadlineSettingInterface.DeadlineSettingInterface, null)));
};

exports.OrderContentHeader = OrderContentHeader;