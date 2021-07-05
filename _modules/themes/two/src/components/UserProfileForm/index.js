"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileForm = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _FiCamera = _interopRequireDefault(require("@meronex/icons/fi/FiCamera"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _UserFormDetails = require("../UserFormDetails");

var _Confirm = require("../Confirm");

var _Buttons = require("../../styles/Buttons");

var _utils = require("../../../../../utils");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var UserProfileFormUI = function UserProfileFormUI(props) {
  var _formState$changes2, _props$beforeElements, _props$beforeComponen, _userState$result, _userState$result$res, _formState$changes3, _formState$changes4, _formState$changes4$r, _formState$result, _userState$result2, _userState$result2$re, _userState$result3, _userState$result3$re, _formState$changes5, _formState$changes6, _userState$result4, _userState$result4$re, _userState$result5, _userState$result5$re, _userState$result6, _userState$result6$re, _userState$result7, _userState$result7$re, _userState$result8, _userState$result8$re, _userState$result9, _userState$result9$re, _userState$result10, _userState$result10$r, _userState$result11, _props$afterComponent, _props$afterElements;

  var userData = props.userData,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      handlechangeImage = props.handlechangeImage,
      formState = props.formState,
      cleanFormState = props.cleanFormState,
      toggleIsEdit = props.toggleIsEdit,
      isHiddenAddress = props.isHiddenAddress,
      userState = props.userState;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      edit = _useState2[0],
      setEdit = _useState2[1];

  var _useState3 = (0, _react.useState)({
    open: false,
    content: []
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      alertState = _useState4[0],
      setAlertState = _useState4[1];

  var inputRef = (0, _react.useRef)(null);

  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;

      var type = files[0].type.split('/')[0];

      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }

      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }

      handlechangeImage(files[0]);
    }
  };

  var toggleEditState = function toggleEditState(val) {
    setEdit(val);
    toggleIsEdit();

    if (!val) {
      cleanFormState({
        changes: {}
      });
    }
  };

  var handleClickImage = function handleClickImage() {
    inputRef.current.click();
  };

  var closeAlert = function closeAlert() {
    setAlertState({
      open: false,
      content: []
    });
  };

  (0, _react.useEffect)(function () {
    var _formState$changes;

    if ((_formState$changes = formState.changes) === null || _formState$changes === void 0 ? void 0 : _formState$changes.photo) {
      var isImage = true;
      handleButtonUpdateClick(null, isImage);
    }
  }, [(_formState$changes2 = formState.changes) === null || _formState$changes2 === void 0 ? void 0 : _formState$changes2.photo]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.UserProfileContainer, {
    mbottom: isHiddenAddress && 25
  }, /*#__PURE__*/_react.default.createElement(_styles.UserImage, {
    className: "user-image"
  }, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    isEdit: edit,
    onClick: function onClick() {
      return handleClickImage();
    },
    isImage: (userState === null || userState === void 0 ? void 0 : (_userState$result = userState.result) === null || _userState$result === void 0 ? void 0 : (_userState$result$res = _userState$result.result) === null || _userState$result$res === void 0 ? void 0 : _userState$result$res.photo) || (formState === null || formState === void 0 ? void 0 : (_formState$changes3 = formState.changes) === null || _formState$changes3 === void 0 ? void 0 : _formState$changes3.photo) && !formState.result.error
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.ExamineClick, {
    onFiles: handleFiles,
    childRef: function childRef(e) {
      inputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: formState.loading
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : !((_formState$changes4 = formState.changes) === null || _formState$changes4 === void 0 ? void 0 : (_formState$changes4$r = _formState$changes4.result) === null || _formState$changes4$r === void 0 ? void 0 : _formState$changes4$r.photo) || ((_formState$result = formState.result) === null || _formState$result === void 0 ? void 0 : _formState$result.result) === 'Network Error' || formState.result.error ? (userState === null || userState === void 0 ? void 0 : (_userState$result2 = userState.result) === null || _userState$result2 === void 0 ? void 0 : (_userState$result2$re = _userState$result2.result) === null || _userState$result2$re === void 0 ? void 0 : _userState$result2$re.photo) ? /*#__PURE__*/_react.default.createElement("img", {
    src: userState === null || userState === void 0 ? void 0 : (_userState$result3 = userState.result) === null || _userState$result3 === void 0 ? void 0 : (_userState$result3$re = _userState$result3.result) === null || _userState$result3$re === void 0 ? void 0 : _userState$result3$re.photo,
    alt: "user image",
    width: "90px",
    height: "90px",
    loading: "lazy"
  }) : /*#__PURE__*/_react.default.createElement(_styles.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)) : (formState === null || formState === void 0 ? void 0 : (_formState$changes5 = formState.changes) === null || _formState$changes5 === void 0 ? void 0 : _formState$changes5.photo) && /*#__PURE__*/_react.default.createElement("img", {
    src: formState === null || formState === void 0 ? void 0 : (_formState$changes6 = formState.changes) === null || _formState$changes6 === void 0 ? void 0 : _formState$changes6.photo,
    alt: "user image",
    loading: "lazy"
  })))), edit && /*#__PURE__*/_react.default.createElement(_styles.Camera, null, /*#__PURE__*/_react.default.createElement(_FiCamera.default, null))), !edit && /*#__PURE__*/_react.default.createElement(_styles.SideForm, {
    className: "user-form"
  }, formState.loading ? /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 250,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 180,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 210,
    height: 25
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 40
  })) : /*#__PURE__*/_react.default.createElement(_styles.UserData, null, /*#__PURE__*/_react.default.createElement("h1", null, (userData === null || userData === void 0 ? void 0 : userData.name) || (userState === null || userState === void 0 ? void 0 : (_userState$result4 = userState.result) === null || _userState$result4 === void 0 ? void 0 : (_userState$result4$re = _userState$result4.result) === null || _userState$result4$re === void 0 ? void 0 : _userState$result4$re.name), " ", (userData === null || userData === void 0 ? void 0 : userData.lastname) || (userState === null || userState === void 0 ? void 0 : (_userState$result5 = userState.result) === null || _userState$result5 === void 0 ? void 0 : (_userState$result5$re = _userState$result5.result) === null || _userState$result5$re === void 0 ? void 0 : _userState$result5$re.lastname)), /*#__PURE__*/_react.default.createElement("p", null, (userData === null || userData === void 0 ? void 0 : userData.email) || (userState === null || userState === void 0 ? void 0 : (_userState$result6 = userState.result) === null || _userState$result6 === void 0 ? void 0 : (_userState$result6$re = _userState$result6.result) === null || _userState$result6$re === void 0 ? void 0 : _userState$result6$re.email)), ((userData === null || userData === void 0 ? void 0 : userData.cellphone) || (userState === null || userState === void 0 ? void 0 : (_userState$result7 = userState.result) === null || _userState$result7 === void 0 ? void 0 : (_userState$result7$re = _userState$result7.result) === null || _userState$result7$re === void 0 ? void 0 : _userState$result7$re.cellphone)) && /*#__PURE__*/_react.default.createElement("p", null, ((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (userState === null || userState === void 0 ? void 0 : (_userState$result8 = userState.result) === null || _userState$result8 === void 0 ? void 0 : (_userState$result8$re = _userState$result8.result) === null || _userState$result8$re === void 0 ? void 0 : _userState$result8$re.country_phone_code)) && "+".concat((userData === null || userData === void 0 ? void 0 : userData.country_phone_code) || (userState === null || userState === void 0 ? void 0 : (_userState$result9 = userState.result) === null || _userState$result9 === void 0 ? void 0 : (_userState$result9$re = _userState$result9.result) === null || _userState$result9$re === void 0 ? void 0 : _userState$result9$re.country_phone_code), " "), (userData === null || userData === void 0 ? void 0 : userData.cellphone) || (userState === null || userState === void 0 ? void 0 : (_userState$result10 = userState.result) === null || _userState$result10 === void 0 ? void 0 : (_userState$result10$r = _userState$result10.result) === null || _userState$result10$r === void 0 ? void 0 : _userState$result10$r.cellphone))))), edit && /*#__PURE__*/_react.default.createElement(_styles.WrapperForm, null, /*#__PURE__*/_react.default.createElement(_UserFormDetails.UserFormDetailsUI, _extends({}, props, {
    userData: userState === null || userState === void 0 ? void 0 : (_userState$result11 = userState.result) === null || _userState$result11 === void 0 ? void 0 : _userState$result11.result,
    onCancel: toggleEditState,
    onCloseProfile: function onCloseProfile() {
      return setEdit(false);
    },
    isHiddenAddress: isHiddenAddress
  }))), !edit && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "lightPrimary",
    borderRadius: "5px",
    onClick: function onClick() {
      return toggleEditState(true);
    }
  }, t('EDIT', 'Edit'))), /*#__PURE__*/_react.default.createElement(_Confirm.Alert, {
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

var UserProfileForm = function UserProfileForm(props) {
  var UserProfileProps = _objectSpread(_objectSpread({}, props), {}, {
    useSessionUser: false,
    UIComponent: UserProfileFormUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.UserFormDetails, UserProfileProps);
};

exports.UserProfileForm = UserProfileForm;