"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetailsUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactHookForm = require("react-hook-form");

var _libphonenumberJs = _interopRequireDefault(require("libphonenumber-js"));

var _styles = require("./styles");

var _Inputs = require("../../styles/Inputs");

var _Buttons = require("../../styles/Buttons");

var _Select = require("../../styles/Select");

var _ToggleSwitch = require("../../styles/ToggleSwitch");

var _InputPhoneNumber = require("../InputPhoneNumber");

var _Confirm = require("../Confirm");

var _utils = require("../../utils");

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UserFormDetailsUI = function UserFormDetailsUI(props) {
  var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _props$beforeElements, _props$beforeComponen, _props$beforeMidEleme, _props$beforeMidCompo, _validationFields$fie11, _formState$result9, _formState$result10, _formState$result10$r, _ref4, _formState$changes$le, _formState$changes6, _props$afterMidElemen, _props$afterMidCompon, _formState$result11, _formState$result12, _formState$result12$r, _ref5, _formState$changes$en, _formState$changes7, _props$afterComponent, _props$afterElements;

  var isEdit = props.isEdit,
      formState = props.formState,
      showField = props.showField,
      cleanFormState = props.cleanFormState,
      isRequiredField = props.isRequiredField,
      validationFields = props.validationFields,
      handleChangeInput = props.handleChangeInput,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      isCheckout = props.isCheckout,
      userData = props.userData,
      isCustomerMode = props.isCustomerMode,
      setFormState = props.setFormState,
      deleteUser = props.deleteUser;
  var formMethods = (0, _reactHookForm.useForm)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      userSession = _useSession2[0].user;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      isValidPhoneNumber = _useState2[0],
      setIsValidPhoneNumber = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userPhoneNumber = _useState4[0],
      setUserPhoneNumber = _useState4[1];

  var _useState5 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      alertState = _useState6[0],
      setAlertState = _useState6[1];

  var _useCustomer = (0, _orderingComponentsAdmin.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      setUserCustomer = _useCustomer2[1].setUserCustomer;

  var emailInput = (0, _react.useRef)(null);
  var selectTypes = [{
    value: 3,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('USERS', 'Users'))
  }, {
    value: 2,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('BUSINESS_OWNER', 'Business owner'))
  }, {
    value: 1,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('CITY_MANAGER', 'City manager'))
  }, {
    value: 0,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, t('ADMINTRATORS', 'Admintrators'))
  }];
  var user = userData || userSession;

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
    cleanFormState && cleanFormState({
      result: {
        error: false
      }
    });
  };

  var showInputPhoneNumber = (_validationFields$fie = validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie2 = validationFields.fields) === null || _validationFields$fie2 === void 0 ? void 0 : (_validationFields$fie3 = _validationFields$fie2.checkout) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.cellphone) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4.enabled) !== null && _validationFields$fie !== void 0 ? _validationFields$fie : false;

  var setUserCellPhone = function setUserCellPhone() {
    var isEdit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (userPhoneNumber && !userPhoneNumber.includes('null') && !isEdit) {
      setUserPhoneNumber(userPhoneNumber);
      return;
    }

    if (user === null || user === void 0 ? void 0 : user.cellphone) {
      var _formState$changes, _formState$changes2;

      var phone = null;

      if (formState.result.error && ((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.cellphone) && ((_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.country_phone_code)) {
        var _formState$changes3, _formState$changes4;

        phone = "+".concat((_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.country_phone_code, " ").concat((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : _formState$changes4.cellphone);
        setUserPhoneNumber(phone);
        return;
      }

      if (user === null || user === void 0 ? void 0 : user.country_phone_code) {
        phone = "+".concat(user === null || user === void 0 ? void 0 : user.country_phone_code, " ").concat(user === null || user === void 0 ? void 0 : user.cellphone);
      } else {
        phone = user === null || user === void 0 ? void 0 : user.cellphone;
      }

      setUserPhoneNumber(phone);
      return;
    }

    setUserPhoneNumber((user === null || user === void 0 ? void 0 : user.cellphone) || '');
  };

  var onSubmit = function onSubmit() {
    var _validationFields$fie5, _validationFields$fie6, _validationFields$fie7, _validationFields$fie8, _validationFields$fie9, _validationFields$fie10;

    var isPhoneNumberValid = userPhoneNumber ? isValidPhoneNumber : true;

    if (!userPhoneNumber && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : (_validationFields$fie6 = _validationFields$fie5.checkout) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6.cellphone) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.enabled) && (validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie8 = validationFields.fields) === null || _validationFields$fie8 === void 0 ? void 0 : (_validationFields$fie9 = _validationFields$fie8.checkout) === null || _validationFields$fie9 === void 0 ? void 0 : (_validationFields$fie10 = _validationFields$fie9.cellphone) === null || _validationFields$fie10 === void 0 ? void 0 : _validationFields$fie10.required)) {
      setAlertState({
        open: true,
        content: [t('VALIDATION_ERROR_MOBILE_PHONE_REQUIRED', 'The field Phone Number is required.')]
      });
      return;
    }

    if (!isPhoneNumberValid && userPhoneNumber) {
      if (user === null || user === void 0 ? void 0 : user.country_phone_code) {
        setAlertState({
          open: true,
          content: [t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid')]
        });
        return;
      }

      setAlertState({
        open: true,
        content: [t('INVALID_ERROR_COUNTRY_CODE_PHONE_NUMBER', 'The country code of the phone number is invalid')]
      });
      return;
    }

    if (Object.keys(formState.changes).length > 0 && isPhoneNumberValid) {
      var changes = null;

      if ((user === null || user === void 0 ? void 0 : user.cellphone) && !userPhoneNumber) {
        changes = {
          country_phone_code: '',
          cellphone: ''
        };
      }

      if (isCustomerMode) {
        setUserCustomer(formState.result.result, true);
      }

      handleButtonUpdateClick(changes);
    }
  };

  var handleChangePhoneNumber = function handleChangePhoneNumber(number, isValid) {
    setUserPhoneNumber(number);
    var phoneNumberParser = null;
    var phoneNumber = {
      country_phone_code: {
        name: 'country_phone_code',
        value: ''
      },
      cellphone: {
        name: 'cellphone',
        value: ''
      }
    };

    if (isValid) {
      phoneNumberParser = (0, _libphonenumberJs.default)(number);
    }

    if (phoneNumberParser) {
      phoneNumber = {
        country_phone_code: {
          name: 'country_phone_code',
          value: phoneNumberParser.countryCallingCode
        },
        cellphone: {
          name: 'cellphone',
          value: phoneNumberParser.nationalNumber
        }
      };
    }

    handleChangeInput(phoneNumber, true);
  };

  var handleChangeInputEmail = function handleChangeInputEmail(e) {
    handleChangeInput({
      target: {
        name: 'email',
        value: e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '')
      }
    });
    formMethods.setValue('email', e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, ''));
    emailInput.current.value = e.target.value.toLowerCase().replace(/[&,()%";:ç?<>{}\\[\]\s]/g, '');
  };

  (0, _react.useEffect)(function () {
    if (Object.keys(formMethods.errors).length > 0) {
      var content = Object.values(formMethods.errors).map(function (error) {
        return error.message;
      });

      if (!isValidPhoneNumber && userPhoneNumber) {
        content.push(t('INVALID_ERROR_PHONE_NUMBER', 'The Phone Number field is invalid.'));
      }

      setAlertState({
        open: true,
        content: content
      });
    }
  }, [formMethods.errors]);
  (0, _react.useEffect)(function () {
    var _formState$result;

    if (!(formState === null || formState === void 0 ? void 0 : formState.loading) && (formState === null || formState === void 0 ? void 0 : (_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.error)) {
      var _formState$result2;

      setAlertState({
        open: true,
        content: ((_formState$result2 = formState.result) === null || _formState$result2 === void 0 ? void 0 : _formState$result2.result) || [t('ERROR', 'Error')]
      });
    }
  }, [formState === null || formState === void 0 ? void 0 : formState.loading]);
  (0, _react.useEffect)(function () {
    if ((user || !isEdit) && !(formState === null || formState === void 0 ? void 0 : formState.loading)) {
      setUserCellPhone();

      if (!isEdit && !(formState === null || formState === void 0 ? void 0 : formState.loading)) {
        cleanFormState && cleanFormState({
          changes: {}
        });
        setUserCellPhone(true);
      }
    }
  }, [user, isEdit]);
  (0, _react.useEffect)(function () {
    if (!validationFields.loading && emailInput.current) {
      var _formState$result3, _formState$result4, _formState$result4$re, _ref, _formState$changes$em, _formState$changes5;

      formMethods.setValue('email', (formState === null || formState === void 0 ? void 0 : (_formState$result3 = formState.result) === null || _formState$result3 === void 0 ? void 0 : _formState$result3.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result4 = formState.result) === null || _formState$result4 === void 0 ? void 0 : (_formState$result4$re = _formState$result4.result) === null || _formState$result4$re === void 0 ? void 0 : _formState$result4$re.email : (_ref = (_formState$changes$em = formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.email) !== null && _formState$changes$em !== void 0 ? _formState$changes$em : user && (user === null || user === void 0 ? void 0 : user.email)) !== null && _ref !== void 0 ? _ref : '');
    }
  }, [validationFields, emailInput.current]);
  (0, _react.useEffect)(function () {
    formMethods.register('email', {
      required: isRequiredField('email') ? t('VALIDATION_ERROR_EMAIL_REQUIRED', 'The field Email is required').replace('_attribute_', t('EMAIL', 'Email')) : null,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t('INVALID_ERROR_EMAIL', 'Invalid email address').replace('_attribute_', t('EMAIL', 'Email'))
      }
    });
  }, [formMethods]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.FormInput, {
    onSubmit: formMethods.handleSubmit(onSubmit),
    isCheckout: isCheckout
  }, !(validationFields === null || validationFields === void 0 ? void 0 : validationFields.loading) ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeMidEleme = props.beforeMidElements) === null || _props$beforeMidEleme === void 0 ? void 0 : _props$beforeMidEleme.map(function (BeforeMidElements, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeMidElements);
  }), (_props$beforeMidCompo = props.beforeMidComponents) === null || _props$beforeMidCompo === void 0 ? void 0 : _props$beforeMidCompo.map(function (BeforeMidComponents, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeMidComponents, _extends({
      key: i
    }, props));
  }), (0, _utils.sortInputFields)({
    values: validationFields === null || validationFields === void 0 ? void 0 : (_validationFields$fie11 = validationFields.fields) === null || _validationFields$fie11 === void 0 ? void 0 : _validationFields$fie11.checkout
  }).map(function (field) {
    var _formState$result5, _formState$result6, _ref2, _formState$changes$fi, _formState$result7, _formState$result8, _ref3, _formState$changes$fi2;

    return showField && showField(field.code) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: field.id
    }, field.code === 'email' ? /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, field.name), /*#__PURE__*/_react.default.createElement(_Inputs.RectangleInput, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$result5 = formState.result) === null || _formState$result5 === void 0 ? void 0 : _formState$result5.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result6 = formState.result) === null || _formState$result6 === void 0 ? void 0 : _formState$result6.result[field.code] : (_ref2 = (_formState$changes$fi = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi !== void 0 ? _formState$changes$fi : user && user[field.code]) !== null && _ref2 !== void 0 ? _ref2 : '',
      onChange: handleChangeInputEmail,
      ref: function ref(e) {
        emailInput.current = e;
      },
      autoComplete: "off"
    })) : /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, field.name), /*#__PURE__*/_react.default.createElement(_Inputs.RectangleInput, {
      key: field.id,
      type: field.type,
      name: field.code,
      className: "form",
      disabled: !isEdit,
      placeholder: t(field.code.toUpperCase(), field === null || field === void 0 ? void 0 : field.name),
      defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$result7 = formState.result) === null || _formState$result7 === void 0 ? void 0 : _formState$result7.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result8 = formState.result) === null || _formState$result8 === void 0 ? void 0 : _formState$result8.result[field.code] : (_ref3 = (_formState$changes$fi2 = formState === null || formState === void 0 ? void 0 : formState.changes[field.code]) !== null && _formState$changes$fi2 !== void 0 ? _formState$changes$fi2 : user && user[field.code]) !== null && _ref3 !== void 0 ? _ref3 : '',
      onChange: handleChangeInput,
      ref: formMethods.register({
        required: isRequiredField(field.code) ? t("VALIDATION_ERROR_".concat(field.code.toUpperCase(), "_REQUIRED"), "".concat(field === null || field === void 0 ? void 0 : field.name, " is required")).replace('_attribute_', t(field === null || field === void 0 ? void 0 : field.name, field.code)) : null
      }),
      autoComplete: "off"
    })));
  }), !isCheckout && /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('PASSWORD', 'Password')), /*#__PURE__*/_react.default.createElement(_Inputs.RectangleInput, {
    type: "password",
    name: "password",
    className: "form",
    placeholder: t('FRONT_VISUALS_PASSWORD', 'Password'),
    onChange: handleChangeInput,
    ref: formMethods.register({
      required: isRequiredField('password') ? t('VALIDATION_ERROR_PASSWORD_REQUIRED', 'The field Password is required').replace('_attribute_', t('PASSWORD', 'Password')) : null,
      minLength: {
        value: 8,
        message: t('VALIDATION_ERROR_PASSWORD_MIN_STRING', 'The Password must be at least 8 characters.').replace('_attribute_', t('PASSWORD', 'Password')).replace('_min_', 8)
      }
    })
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('TYPE', 'Type')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    defaultValue: (formState === null || formState === void 0 ? void 0 : (_formState$result9 = formState.result) === null || _formState$result9 === void 0 ? void 0 : _formState$result9.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result10 = formState.result) === null || _formState$result10 === void 0 ? void 0 : (_formState$result10$r = _formState$result10.result) === null || _formState$result10$r === void 0 ? void 0 : _formState$result10$r.level : (_ref4 = (_formState$changes$le = formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.level) !== null && _formState$changes$le !== void 0 ? _formState$changes$le : user && (user === null || user === void 0 ? void 0 : user.level)) !== null && _ref4 !== void 0 ? _ref4 : '',
    options: selectTypes,
    className: "rectangle-select",
    onChange: function onChange(typeValue) {
      return setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
          'level': typeValue
        })
      }));
    }
  })), !!showInputPhoneNumber && /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('PHONE', 'Phone')), /*#__PURE__*/_react.default.createElement(_InputPhoneNumber.InputPhoneNumber, {
    user: user,
    value: userPhoneNumber,
    setValue: handleChangePhoneNumber,
    handleIsValid: setIsValidPhoneNumber
  })), /*#__PURE__*/_react.default.createElement(_styles.InputWrapper, {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.Label, null, t('USER_NOTES', 'User notes')), /*#__PURE__*/_react.default.createElement(_Inputs.RectTextArea, {
    style: {
      width: '100%'
    },
    placeholder: t('WRITE_NOTES', 'Write notes')
  })), (_props$afterMidElemen = props.afterMidElements) === null || _props$afterMidElemen === void 0 ? void 0 : _props$afterMidElemen.map(function (MidElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, MidElement);
  }), (_props$afterMidCompon = props.afterMidComponents) === null || _props$afterMidCompon === void 0 ? void 0 : _props$afterMidCompon.map(function (MidComponent, i) {
    return /*#__PURE__*/_react.default.createElement(MidComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.ActionsForm, null, /*#__PURE__*/_react.default.createElement(_ToggleSwitch.ToggleSwitch, {
    defaultChecked: (formState === null || formState === void 0 ? void 0 : (_formState$result11 = formState.result) === null || _formState$result11 === void 0 ? void 0 : _formState$result11.result) ? formState === null || formState === void 0 ? void 0 : (_formState$result12 = formState.result) === null || _formState$result12 === void 0 ? void 0 : (_formState$result12$r = _formState$result12.result) === null || _formState$result12$r === void 0 ? void 0 : _formState$result12$r.enabled : (_ref5 = (_formState$changes$en = formState === null || formState === void 0 ? void 0 : (_formState$changes7 = formState.changes) === null || _formState$changes7 === void 0 ? void 0 : _formState$changes7.enabled) !== null && _formState$changes$en !== void 0 ? _formState$changes$en : user && (user === null || user === void 0 ? void 0 : user.enabled)) !== null && _ref5 !== void 0 ? _ref5 : false,
    onChange: function onChange(enabled) {
      return setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState === null || formState === void 0 ? void 0 : formState.changes), {}, {
          'enabled': enabled
        })
      }));
    }
  }), /*#__PURE__*/_react.default.createElement(_Buttons.RectButton, {
    outline: true,
    type: "button",
    color: "primary",
    disabled: formState.loading,
    onClick: function onClick() {
      return deleteUser();
    }
  }, t('DELETE', 'Delete')), /*#__PURE__*/_react.default.createElement(_Buttons.RectButton, {
    type: "submit",
    color: "primary",
    disabled: formState.loading
  }, formState.loading ? t('UPDATING', 'Updating...') : t('SAVE', 'Save')))) : /*#__PURE__*/_react.default.createElement(_styles.SkeletonForm, null, _toConsumableArray(Array(6)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      key: i
    });
  }))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
    title: t('PROFILE', 'Profile'),
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
  }), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.UserFormDetailsUI = UserFormDetailsUI;