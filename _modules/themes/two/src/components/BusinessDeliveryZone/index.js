"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessDeliveryZone = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _AiFillPlusCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillPlusCircle"));

var _Switch = require("../../styles/Switch");

var _styledComponents = require("styled-components");

var _reactBootstrap = require("react-bootstrap");

var _BusinessDeliveryZoneSetting = require("../BusinessDeliveryZoneSetting");

var _Confirm = require("../Confirm");

var _reactHookForm = require("react-hook-form");

var _Modal = require("../Modal");

var _useWindowSize2 = require("../../../../../hooks/useWindowSize");

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

var BusinessDeliveryZoneUI = function BusinessDeliveryZoneUI(props) {
  var _businessDeliveryZone;

  var business = props.business,
      formState = props.formState,
      businessDeliveryZonesState = props.businessDeliveryZonesState,
      handleChangeInput = props.handleChangeInput,
      handleChangeActiveState = props.handleChangeActiveState,
      handleDeleteBusinessDeliveryZone = props.handleDeleteBusinessDeliveryZone,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      errors = props.errors,
      setErrors = props.setErrors,
      cleanErrors = props.cleanErrors,
      handleZoneType = props.handleZoneType,
      handleChangeZoneData = props.handleChangeZoneData,
      isEdit = props.isEdit,
      setIsEdit = props.setIsEdit,
      openAddDeliveryZone = props.openAddDeliveryZone,
      setOpenAddDeliveryZone = props.setOpenAddDeliveryZone,
      isAddValid = props.isAddValid,
      setIsAddValid = props.setIsAddValid,
      handleUpdateBusinessDeliveryZone = props.handleUpdateBusinessDeliveryZone,
      handleAddBusinessDeliveryZone = props.handleAddBusinessDeliveryZone;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useUtils = (0, _orderingComponentsAdmin.useUtils)(),
      _useUtils2 = _slicedToArray(_useUtils, 1),
      parseNumber = _useUtils2[0].parseNumber;

  var theme = (0, _styledComponents.useTheme)();

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      curZone = _useState2[0],
      setCurZone = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var formMethods = (0, _reactHookForm.useForm)();

  var ActionIcon = /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null);

  var handleOpenSetting = function handleOpenSetting(zone) {
    var _formState$changes, _formState$changes2, _formState$changes3;

    if (((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.name) === '' || ((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.minimum) === '' || ((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.price) === '') {
      var _formState$changes4, _formState$changes5, _formState$changes6;

      setErrors({
        name: ((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.name) === '',
        minimum: ((_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.minimum) === '',
        price: ((_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.price) === ''
      });
    } else {
      if (Object.keys(zone).length) {
        setIsEdit(true);
        setIsExtendExtraOpen(true);
      }

      setCurZone(zone);
    }
  };

  var handleCloseOption = function handleCloseOption() {
    setIsEdit(false);
    setIsAddValid(false);
    setIsExtendExtraOpen(false);
  };

  var closeAlert = function closeAlert() {
    cleanErrors();
    setAlertState({
      open: false,
      content: []
    });
  };

  var onSubmit = function onSubmit() {
    setIsExtendExtraOpen(true);
    setIsAddValid(true);
  };

  (0, _react.useEffect)(function () {
    if (openAddDeliveryZone) {
      setIsExtendExtraOpen(false);
      setIsEdit(false);
    }
  }, [openAddDeliveryZone]);
  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });
      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    if (openAddDeliveryZone && !isAddValid) return;

    if (Object.keys(errors).length) {
      var errorContent = [];
      if (errors === null || errors === void 0 ? void 0 : errors.name) errorContent.push(t('NAME_REQUIRED', 'The name is required.'));
      if (errors === null || errors === void 0 ? void 0 : errors.minimum) errorContent.push(t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.'));
      if (errors === null || errors === void 0 ? void 0 : errors.price) errorContent.push(t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.'));

      if (errorContent.length) {
        setAlertState({
          open: true,
          content: errorContent
        });
      }
    }
  }, [errors, isAddValid]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ZoneContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('DELIVERY_ZONE', 'Delivery zones')), /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DeliveryZonesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryZoneWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.ZoneName, null, t('NAME', 'Name')), /*#__PURE__*/_react.default.createElement(_styles.ZoneMin, null, t('MIN', 'Min')), /*#__PURE__*/_react.default.createElement(_styles.ZonePrice, null, t('PRICE', 'Price')), /*#__PURE__*/_react.default.createElement(_styles.ZoneActions, null, t('ACTIONS', 'Actions'))), businessDeliveryZonesState === null || businessDeliveryZonesState === void 0 ? void 0 : (_businessDeliveryZone = businessDeliveryZonesState.zones) === null || _businessDeliveryZone === void 0 ? void 0 : _businessDeliveryZone.map(function (zone) {
    var _zone$name, _formState$result, _formState$result$res, _formState$result2, _formState$result2$re, _formState$changes7, _formState$changes8, _parseNumber, _formState$result3, _formState$result3$re, _formState$result4, _formState$result4$re, _formState$changes9, _formState$changes10, _parseNumber2;

    return /*#__PURE__*/_react.default.createElement(_styles.DeliveryZoneWrapper, {
      key: zone.id
    }, /*#__PURE__*/_react.default.createElement(_styles.ZoneName, null, /*#__PURE__*/_react.default.createElement("input", {
      name: "name",
      defaultValue: (_zone$name = zone === null || zone === void 0 ? void 0 : zone.name) !== null && _zone$name !== void 0 ? _zone$name : '',
      onChange: function onChange(e) {
        return handleChangeInput(e, zone.id);
      },
      disabled: isEdit
    })), /*#__PURE__*/_react.default.createElement(_styles.ZoneMin, null, /*#__PURE__*/_react.default.createElement("input", {
      name: "minimum",
      type: "number",
      defaultValue: ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : (_formState$result$res = _formState$result.result) === null || _formState$result$res === void 0 ? void 0 : _formState$result$res.minimum) ? (_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : (_formState$result2$re = _formState$result2.result) === null || _formState$result2$re === void 0 ? void 0 : _formState$result2$re.minimum : (formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.minimum) ? parseNumber((_formState$changes8 = formState.changes) === null || _formState$changes8 === void 0 ? void 0 : _formState$changes8.minimum, {
        separator: '.'
      }) : (_parseNumber = parseNumber(zone === null || zone === void 0 ? void 0 : zone.minimum, {
        separator: '.'
      })) !== null && _parseNumber !== void 0 ? _parseNumber : '',
      onChange: function onChange(e) {
        return handleChangeInput(e, zone.id);
      },
      disabled: isEdit
    })), /*#__PURE__*/_react.default.createElement(_styles.ZonePrice, null, /*#__PURE__*/_react.default.createElement("input", {
      name: "price",
      type: "number",
      defaultValue: ((_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : (_formState$result3$re = _formState$result3.result) === null || _formState$result3$re === void 0 ? void 0 : _formState$result3$re.price) ? (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : (_formState$result4$re = _formState$result4.result) === null || _formState$result4$re === void 0 ? void 0 : _formState$result4$re.price : ((_formState$changes9 = formState.changes) === null || _formState$changes9 === void 0 ? void 0 : _formState$changes9.price) ? parseNumber((_formState$changes10 = formState.changes) === null || _formState$changes10 === void 0 ? void 0 : _formState$changes10.price, {
        separator: '.'
      }) : (_parseNumber2 = parseNumber(zone === null || zone === void 0 ? void 0 : zone.price, {
        separator: '.'
      })) !== null && _parseNumber2 !== void 0 ? _parseNumber2 : '',
      onChange: function onChange(e) {
        return handleChangeInput(e, zone.id);
      },
      disabled: isEdit
    })), /*#__PURE__*/_react.default.createElement(_styles.ZoneActions, null, /*#__PURE__*/_react.default.createElement(_styles.EnableWrapper, {
      className: "business_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
      defaultChecked: zone === null || zone === void 0 ? void 0 : zone.enabled,
      onChange: function onChange() {
        return handleChangeActiveState(zone.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.DropDownWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'left' : 'right',
      title: ActionIcon,
      id: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenSetting(zone);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteBusinessDeliveryZone(zone.id);
      }
    }, t('DELETE', 'Delete'))))));
  })), !openAddDeliveryZone ? /*#__PURE__*/_react.default.createElement(_styles.AddDeliveryZoneButton, {
    onClick: function onClick() {
      return setOpenAddDeliveryZone(true);
    }
  }, t('ADD_DELIVERY_ZONE', 'Add delivery zone')) : /*#__PURE__*/_react.default.createElement(_styles.DeliveryZoneFormWrapper, {
    onSubmit: formMethods.handleSubmit(onSubmit)
  }, /*#__PURE__*/_react.default.createElement(_styles.ZoneName, null, /*#__PURE__*/_react.default.createElement("input", {
    name: "name",
    placeholder: t('ZONE_NAME', 'Zone name'),
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    },
    ref: formMethods.register({
      required: t('NAME_REQUIRED', 'The name is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.ZoneMin, null, /*#__PURE__*/_react.default.createElement("input", {
    name: "minimum",
    type: "number",
    placeholder: t('MIN', 'Min'),
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    },
    ref: formMethods.register({
      required: t('MINIMUN_PURCHASED_REQUIRED', 'The minimum purchase is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.ZonePrice, null, /*#__PURE__*/_react.default.createElement("input", {
    name: "price",
    type: "number",
    placeholder: t('PRICE', 'Price'),
    onChange: function onChange(e) {
      return handleChangeInput(e, null);
    },
    ref: formMethods.register({
      required: t('DELIVERY_PRICE_REQUIRED', 'The delivery price is required.')
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.ZoneActions, null, /*#__PURE__*/_react.default.createElement(_styles.AddButton, {
    type: "submit",
    onClick: function onClick() {
      return handleOpenSetting({});
    }
  }, /*#__PURE__*/_react.default.createElement(_AiFillPlusCircle.default, null), " ", /*#__PURE__*/_react.default.createElement("span", null, t('ADD', 'Add')))))), (isEdit || isAddValid) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, width >= 1000 ? /*#__PURE__*/_react.default.createElement(_BusinessDeliveryZoneSetting.BusinessDeliveryZoneSetting, {
    open: isEdit || isAddValid,
    isAddValid: isAddValid,
    onClose: function onClose() {
      return handleCloseOption();
    },
    zone: curZone,
    business: business,
    handleZoneType: handleZoneType,
    handleChangeZoneData: handleChangeZoneData,
    handleUpdateBusinessDeliveryZone: handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone: handleAddBusinessDeliveryZone
  }) : /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    open: isEdit || isAddValid,
    onClose: function onClose() {
      return handleCloseOption();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessDeliveryZoneSetting.BusinessDeliveryZoneSetting, {
    open: isEdit || isAddValid,
    isAddValid: isAddValid,
    onClose: function onClose() {
      return handleCloseOption();
    },
    zone: curZone,
    business: business,
    handleZoneType: handleZoneType,
    handleChangeZoneData: handleChangeZoneData,
    handleUpdateBusinessDeliveryZone: handleUpdateBusinessDeliveryZone,
    handleAddBusinessDeliveryZone: handleAddBusinessDeliveryZone
  })))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

var BusinessDeliveryZone = function BusinessDeliveryZone(props) {
  var businessDeliveryZoneProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessDeliveryZoneUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessDeliveryZone, businessDeliveryZoneProps);
};

exports.BusinessDeliveryZone = BusinessDeliveryZone;