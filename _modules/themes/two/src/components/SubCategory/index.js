"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubCategory = exports.SubCategoryUI = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _NotFoundSource = require("../../../../../components/NotFoundSource");

var _SubCategoryMenu = require("../SubCategoryMenu");

var _Buttons = require("../../../../../styles/Buttons");

var _styles = require("./styles");

var _FirstSelect = require("../../styles/Select/FirstSelect");

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

var SubCategoryUI = function SubCategoryUI(props) {
  var _subCategoryState$sub5, _subCategoryState$sub6, _subCategoryState$sub7, _subCategoryState$sub8;

  var subCategoryState = props.subCategoryState,
      saveConfiguartion = props.saveConfiguartion,
      onCloseSubCat = props.onCloseSubCat;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)('general'),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCategory = _useState2[0],
      setSelectedCategory = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      selectTypes = _useState4[0],
      setSelectedTypes = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isShowBtn = _useState8[0],
      setIsShowBtn = _useState8[1];

  var handleChangeCategory = function handleChangeCategory(index) {
    setSelectedCategory(index);
  };

  var handleConfigChange = function handleConfigChange(val) {
    setIsShowBtn(true);
    setValue(val);
  };

  var handleCheckBoxChange = function handleCheckBoxChange(evt, index) {
    setIsShowBtn(true);

    if (index) {
      var str = value.split('|');
      var position = str.indexOf(evt.target.name);
      if (position === -1 && evt.target.checked) str.push(evt.target.name);
      if (!evt.target.checked && position > 0) str.splice(position, 0);
      setValue(str.join('|'));
    } else {
      var array = _toConsumableArray(value);

      var _position = array.indexOf(evt.target.name);

      if (_position === -1 && evt.target.checked) array.push(evt.target.name);
      if (!evt.target.checked && _position > 0) array.splice(_position, 0);
      setValue(array);
    }
  };

  var submitValue = function submitValue(evt) {
    evt.preventDefault();
    var changes = {
      value: value
    };
    saveConfiguartion(changes);
  };

  (0, _react.useEffect)(function () {
    var _subCategoryState$sub, _subCategoryState$sub4;

    if (!subCategoryState.loading && ((_subCategoryState$sub = subCategoryState.subCategory) === null || _subCategoryState$sub === void 0 ? void 0 : _subCategoryState$sub.type) === 2) {
      var _subCategoryState$sub2, _subCategoryState$sub3;

      var _selectedTypes = [];
      ((_subCategoryState$sub2 = subCategoryState.subCategory) === null || _subCategoryState$sub2 === void 0 ? void 0 : _subCategoryState$sub2.options) && ((_subCategoryState$sub3 = subCategoryState.subCategory) === null || _subCategoryState$sub3 === void 0 ? void 0 : _subCategoryState$sub3.options.forEach(function (item) {
        _selectedTypes.push({
          value: item.value,
          content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, item.text)
        });
      }));
      setSelectedTypes(_selectedTypes);
    }

    if (!subCategoryState.loading && subCategoryState.subCategory) setValue((_subCategoryState$sub4 = subCategoryState.subCategory) === null || _subCategoryState$sub4 === void 0 ? void 0 : _subCategoryState$sub4.value);
  }, [subCategoryState]);

  var makeArrayBySplit = function makeArrayBySplit(string) {
    var arr = string.split('|');
    return arr;
  };

  return /*#__PURE__*/_react.default.createElement(_styles.SubCategoryContainer, null, /*#__PURE__*/_react.default.createElement(_SubCategoryMenu.SubCategoryMenu, {
    currentMenuSelected: selectedCategory,
    handleChangeMenu: handleChangeCategory
  }), !subCategoryState.error && subCategoryState.loading && /*#__PURE__*/_react.default.createElement(_styles.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 20,
    width: 50
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 40
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 200,
    width: 300
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  })), !subCategoryState.error && !subCategoryState.loading && selectedCategory === 'general' && subCategoryState.subCategory && /*#__PURE__*/_react.default.createElement(_styles.GeneralContainer, null, /*#__PURE__*/_react.default.createElement(_styles.GeneralTitle, null, /*#__PURE__*/_react.default.createElement("p", null, t('GENERAL', 'General'))), /*#__PURE__*/_react.default.createElement(_styles.GeneralDescription, null, subCategoryState.subCategory.description), /*#__PURE__*/_react.default.createElement(_styles.ImageContainer, null), /*#__PURE__*/_react.default.createElement(_styles.FormContainer, null, subCategoryState.subCategory.type === 1 && /*#__PURE__*/_react.default.createElement(_styles.FormGroupText, {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", null, t('VALUE', 'Value')), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    defaultValue: subCategoryState.subCategory.value,
    onChange: function onChange(e) {
      return handleConfigChange(e.target.value);
    },
    className: "form-control",
    placeholder: "placeholder"
  })), subCategoryState.subCategory.type === 3 && makeArrayBySplit((_subCategoryState$sub5 = subCategoryState.subCategory) === null || _subCategoryState$sub5 === void 0 ? void 0 : _subCategoryState$sub5.value).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.FormGroupWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.FormGroupCheck, {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      defaultChecked: true,
      name: item,
      onChange: function onChange(e) {
        return handleCheckBoxChange(e, true);
      }
    }), item)));
  }), subCategoryState.subCategory.type === 4 && ((_subCategoryState$sub6 = subCategoryState.subCategory) === null || _subCategoryState$sub6 === void 0 ? void 0 : _subCategoryState$sub6.value.length) > 0 && ((_subCategoryState$sub7 = subCategoryState.subCategory) === null || _subCategoryState$sub7 === void 0 ? void 0 : _subCategoryState$sub7.value.map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.FormGroupWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.FormGroupCheck, {
      className: "checkbox"
    }, /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
      type: "checkbox",
      defaultChecked: true,
      name: item,
      onChange: function onChange(e) {
        return handleCheckBoxChange(e, false);
      }
    }), item)));
  })), subCategoryState.subCategory.type === 2 && /*#__PURE__*/_react.default.createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react.default.createElement(_styles.DropDownContainer, {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement(_styles.DropDownHeader, null, /*#__PURE__*/_react.default.createElement("p", null, "DropDown"), /*#__PURE__*/_react.default.createElement(_styles.Required, null, t('REQUIRED', 'Required'))), /*#__PURE__*/_react.default.createElement(_styles.DropDownContent, null, /*#__PURE__*/_react.default.createElement(_FirstSelect.Select, {
    defaultValue: (_subCategoryState$sub8 = subCategoryState.subCategory) === null || _subCategoryState$sub8 === void 0 ? void 0 : _subCategoryState$sub8.value,
    options: selectTypes,
    className: "select",
    onChange: function onChange(typeValue) {
      return handleConfigChange(typeValue);
    }
  })))), isShowBtn && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: submitValue
  }, "Update"))), !subCategoryState.loading && subCategoryState.error && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NOT_FOUND_CONFIG', 'Sorry, we couldn\'t find the config.'),
    btnTitle: t('PROFILE_CATEGORY_REDIRECT', 'Go to Category Description'),
    onClickButton: onCloseSubCat
  }));
};

exports.SubCategoryUI = SubCategoryUI;

var SubCategory = function SubCategory(props) {
  var subCategoryProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: SubCategoryUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.SubCategory, subCategoryProps);
};

exports.SubCategory = SubCategory;