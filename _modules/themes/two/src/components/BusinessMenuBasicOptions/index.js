"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenuBasicOptions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _AiFillMinusSquare = _interopRequireDefault(require("@meronex/icons/ai/AiFillMinusSquare"));

var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _BsTrash = _interopRequireDefault(require("@meronex/icons/bs/BsTrash"));

var _BiMinus = _interopRequireDefault(require("@meronex/icons/bi/BiMinus"));

var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));

var _AiFillPlusCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillPlusCircle"));

var _BusinessScheduleCopyTimes = require("../BusinessScheduleCopyTimes");

var _Confirm = require("../Confirm");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var BusinessMenuBasicOptions = function BusinessMenuBasicOptions(props) {
  var _formState$result3, _formState$result4, _formState$result4$re, _formState$result5, _formState$result5$re, _ref, _formState$changes$na, _formState$changes, _businessMenuState$me3, _formState$result10, _formState$result11, _formState$result11$r, _ref2, _formState$changes$co, _formState$changes2, _businessMenuState$me4;

  var business = props.business,
      businessMenuState = props.businessMenuState,
      formState = props.formState,
      handleChangeInput = props.handleChangeInput,
      handleCheckOrderType = props.handleCheckOrderType,
      handleCheckCategory = props.handleCheckCategory,
      handleClickCategory = props.handleClickCategory,
      handleCheckProduct = props.handleCheckProduct,
      handleUpdateBusinessMenuOption = props.handleUpdateBusinessMenuOption,
      handleAddBusinessMenuOption = props.handleAddBusinessMenuOption,
      handleChangeTime = props.handleChangeTime,
      handleAddScheduleTime = props.handleAddScheduleTime,
      handleDeleteScheduleTime = props.handleDeleteScheduleTime,
      handleScheduleTimeActiveState = props.handleScheduleTimeActiveState,
      selectedCopyDays = props.selectedCopyDays,
      handleSelectCopyTimes = props.handleSelectCopyTimes,
      cleanSelectedCopyDays = props.cleanSelectedCopyDays,
      isConflict = props.isConflict,
      setIsConflict = props.setIsConflict,
      handleChangeAddScheduleTime = props.handleChangeAddScheduleTime,
      addScheduleTime = props.addScheduleTime,
      setAddScheduleTime = props.setAddScheduleTime,
      openAddScheduleIndex = props.openAddScheduleIndex,
      setOpenAddScheduleInex = props.setOpenAddScheduleInex,
      scheduleTimes = props.scheduleTimes,
      selectedProductsIds = props.selectedProductsIds;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      openCategoryProduct = _useState2[0],
      setOpenCategoryProduct = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      isOpenCopytimes = _useState6[0],
      setIsOpenCopytimes = _useState6[1];

  var isEdit = Object.keys(businessMenuState === null || businessMenuState === void 0 ? void 0 : businessMenuState.menu).length;
  var orderTypes = [{
    value: 1,
    key: 'delivery',
    content: t('DELIVERY', 'Delivery')
  }, {
    value: 2,
    key: 'pickup',
    content: t('PICKUP', 'Pickup')
  }, {
    value: 3,
    key: 'eatin',
    content: t('EAT_IN', 'Eat in')
  }, {
    value: 4,
    key: 'curbside',
    content: t('CURBSIDE', 'Curbside')
  }, {
    value: 5,
    key: 'driver_thru',
    content: t('DRIVE_THRU', 'Drive thru')
  }];
  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tues'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thur'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];

  var handleTogglePopover = function handleTogglePopover(type) {
    setOpenCategoryProduct(_objectSpread(_objectSpread({}, openCategoryProduct), {}, _defineProperty({}, type, !openCategoryProduct[type])));
  };

  var isCheckedCategory = function isCheckedCategory(categoryId) {
    var _businessMenuState$me;

    if (!isEdit) return 'nothing';
    var businessCategory = business === null || business === void 0 ? void 0 : business.categories.find(function (category) {
      return category.id === categoryId;
    });
    var menuProducts = businessMenuState === null || businessMenuState === void 0 ? void 0 : (_businessMenuState$me = businessMenuState.menu) === null || _businessMenuState$me === void 0 ? void 0 : _businessMenuState$me.products.filter(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === categoryId;
    });
    var result = '';
    if ((businessCategory === null || businessCategory === void 0 ? void 0 : businessCategory.products.length) === menuProducts.length) result = 'all';else if (menuProducts.length) result = 'some';else result = 'nothing';
    return result;
  };

  var isCheckedProduct = function isCheckedProduct(categoryId, productId) {
    var _businessMenuState$me2;

    if (!isEdit) return false;
    var found = businessMenuState === null || businessMenuState === void 0 ? void 0 : (_businessMenuState$me2 = businessMenuState.menu) === null || _businessMenuState$me2 === void 0 ? void 0 : _businessMenuState$me2.products.find(function (product) {
      return (product === null || product === void 0 ? void 0 : product.category_id) === categoryId && product.id === productId;
    });
    return found;
  };

  var closeAlert = function closeAlert() {
    setIsConflict(false);
    setAlertState({
      open: false,
      content: []
    });
  };

  var handleOpenAddScheduleInex = function handleOpenAddScheduleInex(index) {
    var defaultTime = {
      open: {
        hour: 0,
        minute: 0
      },
      close: {
        hour: 23,
        minute: 59
      }
    };
    setAddScheduleTime(defaultTime);
    setOpenAddScheduleInex(index);
  };

  (0, _react.useEffect)(function () {
    if (!isConflict) return;
    setAlertState({
      open: true,
      content: [t('SCHEDULE_CONFLICT', 'There is an schedule conflict')]
    });
  }, [isConflict]);
  (0, _react.useEffect)(function () {
    var _formState$result, _formState$result2;

    if (!(formState === null || formState === void 0 ? void 0 : (_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.error)) return;
    setAlertState({
      open: true,
      content: formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result
    });
  }, [formState === null || formState === void 0 ? void 0 : (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.error]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessMenuBasicContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('BUSINESS_NAME', 'Business name')), /*#__PURE__*/_react.default.createElement(_Inputs.Input, {
    name: "name",
    placeholder: t('NAME', 'Name'),
    value: (formState === null || formState === void 0 ? void 0 : (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : (_formState$result4$re = _formState$result4.result) === null || _formState$result4$re === void 0 ? void 0 : _formState$result4$re.name) ? formState === null || formState === void 0 ? void 0 : (_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : (_formState$result5$re = _formState$result5.result) === null || _formState$result5$re === void 0 ? void 0 : _formState$result5$re.name : (_ref = (_formState$changes$na = formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) !== null && _formState$changes$na !== void 0 ? _formState$changes$na : businessMenuState === null || businessMenuState === void 0 ? void 0 : (_businessMenuState$me3 = businessMenuState.menu) === null || _businessMenuState$me3 === void 0 ? void 0 : _businessMenuState$me3.name) !== null && _ref !== void 0 ? _ref : '',
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, {
    isBorderBottom: true
  }, t('DELIVERY_TYPE', 'Delivery type')), orderTypes.map(function (orderType) {
    var _formState$result6, _formState$result7, _formState$changes$or, _formState$result8, _formState$result9, _formState$changes$or2;

    return /*#__PURE__*/_react.default.createElement(_styles.OrderType, {
      key: orderType.value,
      active: (formState === null || formState === void 0 ? void 0 : (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : _formState$result6.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result7 = formState.result) === null || _formState$result7 === void 0 ? void 0 : _formState$result7.result[orderType.key] : (_formState$changes$or = formState === null || formState === void 0 ? void 0 : formState.changes[orderType.key]) !== null && _formState$changes$or !== void 0 ? _formState$changes$or : businessMenuState.menu[orderType.key],
      onClick: function onClick() {
        return handleCheckOrderType(orderType.key);
      }
    }, ((formState === null || formState === void 0 ? void 0 : (_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : _formState$result8.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result9 = formState.result) === null || _formState$result9 === void 0 ? void 0 : _formState$result9.result[orderType.key] : (_formState$changes$or2 = formState === null || formState === void 0 ? void 0 : formState.changes[orderType.key]) !== null && _formState$changes$or2 !== void 0 ? _formState$changes$or2 : businessMenuState.menu[orderType.key]) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null), /*#__PURE__*/_react.default.createElement("span", null, orderType.content));
  }), /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, scheduleTimes.map(function (schedule, daysOfWeekIndex) {
    return /*#__PURE__*/_react.default.createElement(_styles.ScheduleBlock, {
      key: daysOfWeekIndex
    }, /*#__PURE__*/_react.default.createElement(_styles.ScheduleCheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
      active: schedule === null || schedule === void 0 ? void 0 : schedule.enabled,
      onClick: function onClick() {
        return handleScheduleTimeActiveState(daysOfWeekIndex);
      }
    }, (schedule === null || schedule === void 0 ? void 0 : schedule.enabled) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[daysOfWeekIndex])), /*#__PURE__*/_react.default.createElement(_styles.TimeSectionContainer, null, (schedule === null || schedule === void 0 ? void 0 : schedule.enabled) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, schedule.lapses.map(function (laps, index) {
      return /*#__PURE__*/_react.default.createElement(_styles.TimeSection, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_styles.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: laps.open.hour,
        onChange: function onChange(e) {
          return handleChangeTime(daysOfWeekIndex, true, true, index, e.target.value);
        }
      }, _toConsumableArray(Array(24)).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i < 10 ? "0".concat(i) : i);
      })), ":", /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: laps.open.minute,
        onChange: function onChange(e) {
          return handleChangeTime(daysOfWeekIndex, true, false, index, e.target.value);
        }
      }, _toConsumableArray(Array(60)).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i < 10 ? "0".concat(i) : i);
      }))), /*#__PURE__*/_react.default.createElement(_BiMinus.default, null), /*#__PURE__*/_react.default.createElement(_styles.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: laps.close.hour,
        onChange: function onChange(e) {
          return handleChangeTime(daysOfWeekIndex, false, true, index, e.target.value);
        }
      }, _toConsumableArray(Array(24)).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i < 10 ? "0".concat(i) : i);
      })), ":", /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: laps.close.minute,
        onChange: function onChange(e) {
          return handleChangeTime(daysOfWeekIndex, false, false, index, e.target.value);
        }
      }, _toConsumableArray(Array(60)).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i < 10 ? "0".concat(i) : i);
      }))), /*#__PURE__*/_react.default.createElement(_styles.DeleteButton, {
        disabled: schedule.lapses.length === 1,
        onClick: function onClick() {
          return handleDeleteScheduleTime(daysOfWeekIndex, index);
        }
      }, /*#__PURE__*/_react.default.createElement(_BsTrash.default, null)));
    }), openAddScheduleIndex === daysOfWeekIndex && /*#__PURE__*/_react.default.createElement(_styles.TimeSection, null, /*#__PURE__*/_react.default.createElement(_styles.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
      value: addScheduleTime.open.hour,
      onChange: function onChange(e) {
        return handleChangeAddScheduleTime(daysOfWeekIndex, true, true, e.target.value);
      }
    }, _toConsumableArray(Array(24)).map(function (v, i) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: i,
        value: i
      }, i < 10 ? "0".concat(i) : i);
    })), ":", /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
      value: addScheduleTime.open.minute,
      onChange: function onChange(e) {
        return handleChangeAddScheduleTime(daysOfWeekIndex, true, false, e.target.value);
      }
    }, _toConsumableArray(Array(60)).map(function (v, i) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: i,
        value: i
      }, i < 10 ? "0".concat(i) : i);
    }))), /*#__PURE__*/_react.default.createElement(_BiMinus.default, null), /*#__PURE__*/_react.default.createElement(_styles.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
      value: addScheduleTime.close.hour,
      onChange: function onChange(e) {
        return handleChangeAddScheduleTime(daysOfWeekIndex, false, true, e.target.value);
      }
    }, _toConsumableArray(Array(24)).map(function (v, i) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: i,
        value: i
      }, i < 10 ? "0".concat(i) : i);
    })), ":", /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
      value: addScheduleTime.close.minute,
      onChange: function onChange(e) {
        return handleChangeAddScheduleTime(daysOfWeekIndex, false, false, e.target.value);
      }
    }, _toConsumableArray(Array(60)).map(function (v, i) {
      return /*#__PURE__*/_react.default.createElement("option", {
        key: i,
        value: i
      }, i < 10 ? "0".concat(i) : i);
    }))), /*#__PURE__*/_react.default.createElement(_styles.AddButton, {
      onClick: function onClick() {
        return handleAddScheduleTime(daysOfWeekIndex);
      }
    }, /*#__PURE__*/_react.default.createElement(_AiFillPlusCircle.default, null)))) : /*#__PURE__*/_react.default.createElement("p", null, t('UNAVAILABLE', 'Unavailable'))), /*#__PURE__*/_react.default.createElement(_styles.ScheduleActionBlock, null, /*#__PURE__*/_react.default.createElement(_styles.AddScheduleButton, {
      disabled: !(schedule === null || schedule === void 0 ? void 0 : schedule.enabled),
      onClick: function onClick() {
        return handleOpenAddScheduleInex(daysOfWeekIndex);
      }
    }, /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null)), /*#__PURE__*/_react.default.createElement(_BusinessScheduleCopyTimes.BusinessScheduleCopyTimes, {
      disabled: !schedule.enabled,
      cleanSelectedCopyDays: cleanSelectedCopyDays,
      open: isOpenCopytimes === daysOfWeekIndex,
      daysOfWeekIndex: daysOfWeekIndex,
      onClick: setIsOpenCopytimes,
      onClose: function onClose() {
        return setIsOpenCopytimes(null);
      },
      selectedCopyDays: selectedCopyDays,
      handleSelectDays: function handleSelectDays(value) {
        return handleSelectCopyTimes(value, daysOfWeekIndex);
      }
    })));
  }))), /*#__PURE__*/_react.default.createElement(_styles.FieldName, null, t('COMMENTS', 'Comments')), /*#__PURE__*/_react.default.createElement(_Inputs.TextArea, {
    rows: 4,
    name: "comment",
    defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$result10 = formState.result) === null || _formState$result10 === void 0 ? void 0 : _formState$result10.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result11 = formState.result) === null || _formState$result11 === void 0 ? void 0 : (_formState$result11$r = _formState$result11.result) === null || _formState$result11$r === void 0 ? void 0 : _formState$result11$r.comment : (_ref2 = (_formState$changes$co = formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.comment) !== null && _formState$changes$co !== void 0 ? _formState$changes$co : businessMenuState === null || businessMenuState === void 0 ? void 0 : (_businessMenuState$me4 = businessMenuState.menu) === null || _businessMenuState$me4 === void 0 ? void 0 : _businessMenuState$me4.comment) !== null && _ref2 !== void 0 ? _ref2 : '',
    placeholder: t('WRITE_HERE', 'Write here'),
    onChange: function onChange(e) {
      return handleChangeInput(e);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.FieldName, {
    isBorderBottom: true
  }, t('PRODUCTS', 'Products')), business === null || business === void 0 ? void 0 : business.categories.map(function (category) {
    var _ref3, _ref4, _formState$changes3, _formState$changes4;

    return /*#__PURE__*/_react.default.createElement(_styles.CategoryProductsContainer, {
      key: category.id
    }, /*#__PURE__*/_react.default.createElement(_styles.BusinessCategoryContainer, {
      active: openCategoryProduct[category === null || category === void 0 ? void 0 : category.name]
    }, /*#__PURE__*/_react.default.createElement(_styles.CheckboxContainer, {
      onClick: function onClick() {
        return handleClickCategory(category.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
      active: ((_ref3 = handleCheckCategory(category.id) === 'all') !== null && _ref3 !== void 0 ? _ref3 : isCheckedCategory(category.id) === 'all') || ((_ref4 = handleCheckCategory(category.id) === 'some') !== null && _ref4 !== void 0 ? _ref4 : isCheckedCategory(category.id) === 'some')
    }, ((formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.products) ? handleCheckCategory(category.id) === 'all' : isCheckedCategory(category.id) === 'all') ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : ((formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.products) ? handleCheckCategory(category.id) === 'some' : isCheckedCategory(category.id) === 'some') ? /*#__PURE__*/_react.default.createElement(_AiFillMinusSquare.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", {
      className: "bold"
    }, category === null || category === void 0 ? void 0 : category.name)), /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
      onClick: function onClick() {
        return handleTogglePopover(category === null || category === void 0 ? void 0 : category.name);
      }
    })), openCategoryProduct[category === null || category === void 0 ? void 0 : category.name] && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, category === null || category === void 0 ? void 0 : category.products.map(function (product) {
      var _selectedProductsIds$, _selectedProductsIds$2;

      return /*#__PURE__*/_react.default.createElement(_styles.ProductContainer, {
        key: product.id,
        onClick: function onClick() {
          return handleCheckProduct(product.id);
        }
      }, /*#__PURE__*/_react.default.createElement(_styles.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
        active: (_selectedProductsIds$ = selectedProductsIds.includes(product === null || product === void 0 ? void 0 : product.id)) !== null && _selectedProductsIds$ !== void 0 ? _selectedProductsIds$ : isCheckedProduct(product === null || product === void 0 ? void 0 : product.category_id, product === null || product === void 0 ? void 0 : product.id)
      }, ((_selectedProductsIds$2 = selectedProductsIds.includes(product === null || product === void 0 ? void 0 : product.id)) !== null && _selectedProductsIds$2 !== void 0 ? _selectedProductsIds$2 : isCheckedProduct(product === null || product === void 0 ? void 0 : product.category_id, product === null || product === void 0 ? void 0 : product.id)) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("span", null, product === null || product === void 0 ? void 0 : product.name)));
    })));
  }), Object.keys(formState === null || formState === void 0 ? void 0 : formState.changes).length > 0 && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    borderRadius: "5px",
    disabled: formState.loading,
    onClick: function onClick() {
      return isEdit ? handleUpdateBusinessMenuOption() : handleAddBusinessMenuOption();
    }
  }, formState.loading ? t('LOADING', 'Loading') : isEdit ? t('UPDATE', 'Update') : t('ADD', 'Add'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('ORDERING', 'Ordering'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return closeAlert();
    },
    onAccept: function onAccept() {
      return closeAlert();
    },
    closeOnBackdrop: false
  }));
};

exports.BusinessMenuBasicOptions = BusinessMenuBasicOptions;