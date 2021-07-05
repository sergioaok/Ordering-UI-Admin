"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessSchedule = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _BsTrash = _interopRequireDefault(require("@meronex/icons/bs/BsTrash"));

var _BiMinus = _interopRequireDefault(require("@meronex/icons/bi/BiMinus"));

var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));

var _AiFillPlusCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillPlusCircle"));

var _Confirm = require("../Confirm");

var _BusinessScheduleCopyTimes = require("../BusinessScheduleCopyTimes");

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

var BusinessScheduleUI = function BusinessScheduleUI(props) {
  var formState = props.formState,
      business = props.business,
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
      setOpenAddScheduleInex = props.setOpenAddScheduleInex;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      isOpenCopytimes = _useState2[0],
      setIsOpenCopytimes = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var daysOfWeek = [t('SUNDAY_ABBREVIATION', 'Sun'), t('MONDAY_ABBREVIATION', 'Mon'), t('TUESDAY_ABBREVIATION', 'Tues'), t('WEDNESDAY_ABBREVIATION', 'Wed'), t('THURSDAY_ABBREVIATION', 'Thur'), t('FRIDAY_ABBREVIATION', 'Fri'), t('SATURDAY_ABBREVIATION', 'Sat')];

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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ScheduleContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('SCHEDULE', 'Schedule')), /*#__PURE__*/_react.default.createElement(_styles.ScheduleSection, null, business === null || business === void 0 ? void 0 : business.schedule.map(function (schedule, daysOfWeekIndex) {
    return /*#__PURE__*/_react.default.createElement(_styles.ScheduleBlock, {
      key: daysOfWeekIndex
    }, /*#__PURE__*/_react.default.createElement(_styles.CheckboxContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
      active: schedule === null || schedule === void 0 ? void 0 : schedule.enabled,
      onClick: function onClick() {
        return handleScheduleTimeActiveState(daysOfWeekIndex);
      }
    }, (schedule === null || schedule === void 0 ? void 0 : schedule.enabled) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement("h4", null, daysOfWeek[daysOfWeekIndex])), /*#__PURE__*/_react.default.createElement(_styles.TimeSectionContainer, null, (schedule === null || schedule === void 0 ? void 0 : schedule.enabled) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, schedule.lapses.map(function (laps, index) {
      var _formState$result, _formState$result2, _formState$result2$re, _formState$changes, _formState$changes2, _formState$changes2$s, _formState$changes2$s2, _formState$result3, _formState$result4, _formState$result4$re, _formState$changes3, _formState$changes4, _formState$changes4$s, _formState$changes4$s2, _formState$result5, _formState$result6, _formState$result6$re, _formState$changes5, _formState$changes6, _formState$changes6$s, _formState$changes6$s2, _formState$result7, _formState$result8, _formState$result8$re, _formState$changes7, _formState$changes8, _formState$changes8$s, _formState$changes8$s2;

      return /*#__PURE__*/_react.default.createElement(_styles.TimeSection, {
        key: index
      }, /*#__PURE__*/_react.default.createElement(_styles.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: (formState === null || formState === void 0 ? void 0 : (_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : (_formState$result2$re = _formState$result2.result) === null || _formState$result2$re === void 0 ? void 0 : _formState$result2$re.schedule[daysOfWeekIndex].lapses[index].open.hour : (formState === null || formState === void 0 ? void 0 : (_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.schedule) ? formState === null || formState === void 0 ? void 0 : (_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : (_formState$changes2$s = _formState$changes2.schedule[daysOfWeekIndex]) === null || _formState$changes2$s === void 0 ? void 0 : (_formState$changes2$s2 = _formState$changes2$s.lapses[index]) === null || _formState$changes2$s2 === void 0 ? void 0 : _formState$changes2$s2.open.hour : laps.open.hour,
        onChange: function onChange(e) {
          return handleChangeTime(daysOfWeekIndex, true, true, index, e.target.value);
        }
      }, _toConsumableArray(Array(24)).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i < 10 ? "0".concat(i) : i);
      })), ":", /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: (formState === null || formState === void 0 ? void 0 : (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : (_formState$result4$re = _formState$result4.result) === null || _formState$result4$re === void 0 ? void 0 : _formState$result4$re.schedule[daysOfWeekIndex].lapses[index].open.minute : (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.schedule) ? formState === null || formState === void 0 ? void 0 : (_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : (_formState$changes4$s = _formState$changes4.schedule[daysOfWeekIndex]) === null || _formState$changes4$s === void 0 ? void 0 : (_formState$changes4$s2 = _formState$changes4$s.lapses[index]) === null || _formState$changes4$s2 === void 0 ? void 0 : _formState$changes4$s2.open.minute : laps.open.minute,
        onChange: function onChange(e) {
          return handleChangeTime(daysOfWeekIndex, true, false, index, e.target.value);
        }
      }, _toConsumableArray(Array(60)).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i < 10 ? "0".concat(i) : i);
      }))), /*#__PURE__*/_react.default.createElement(_BiMinus.default, null), /*#__PURE__*/_react.default.createElement(_styles.TimeSelectContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: (formState === null || formState === void 0 ? void 0 : (_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : (_formState$result6$re = _formState$result6.result) === null || _formState$result6$re === void 0 ? void 0 : _formState$result6$re.schedule[daysOfWeekIndex].lapses[index].close.hour : (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.schedule) ? formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : (_formState$changes6$s = _formState$changes6.schedule[daysOfWeekIndex]) === null || _formState$changes6$s === void 0 ? void 0 : (_formState$changes6$s2 = _formState$changes6$s.lapses[index]) === null || _formState$changes6$s2 === void 0 ? void 0 : _formState$changes6$s2.close.hour : laps.close.hour,
        onChange: function onChange(e) {
          return handleChangeTime(daysOfWeekIndex, false, true, index, e.target.value);
        }
      }, _toConsumableArray(Array(24)).map(function (v, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i < 10 ? "0".concat(i) : i);
      })), ":", /*#__PURE__*/_react.default.createElement(_styles.TimeSelect, {
        value: (formState === null || formState === void 0 ? void 0 : (_formState$result7 = formState.result) === null || _formState$result7 === void 0 ? void 0 : _formState$result7.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : (_formState$result8$re = _formState$result8.result) === null || _formState$result8$re === void 0 ? void 0 : _formState$result8$re.schedule[daysOfWeekIndex].lapses[index].close.minute : (formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.schedule) ? formState === null || formState === void 0 ? void 0 : (_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : (_formState$changes8$s = _formState$changes8.schedule[daysOfWeekIndex]) === null || _formState$changes8$s === void 0 ? void 0 : (_formState$changes8$s2 = _formState$changes8$s.lapses[index]) === null || _formState$changes8$s2 === void 0 ? void 0 : _formState$changes8$s2.close.minute : laps.close.minute,
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
      disabled: !(schedule === null || schedule === void 0 ? void 0 : schedule.enabled),
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
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

var BusinessSchedule = function BusinessSchedule(props) {
  var businessScheduleProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessScheduleUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessSchedule, businessScheduleProps);
};

exports.BusinessSchedule = BusinessSchedule;