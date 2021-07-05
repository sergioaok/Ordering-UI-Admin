"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _Switch = require("../../styles/Switch");

var _reactBootstrap = require("react-bootstrap");

var _FiMoreVertical = _interopRequireDefault(require("@meronex/icons/fi/FiMoreVertical"));

var _BsPlusSquare = _interopRequireDefault(require("@meronex/icons/bs/BsPlusSquare"));

var _styledComponents = require("styled-components");

var _BusinessMenuOptions = require("../BusinessMenuOptions");

var _BusinessMenuCustomFields = require("../BusinessMenuCustomFields");

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

var BusinessMenuUI = function BusinessMenuUI(props) {
  var business = props.business,
      setIsExtendExtraOpen = props.setIsExtendExtraOpen,
      businessMenusState = props.businessMenusState,
      handleChangeBusinessMenuActiveState = props.handleChangeBusinessMenuActiveState,
      handleDeleteBusinessMenu = props.handleDeleteBusinessMenu,
      handleSuccessBusinessMenu = props.handleSuccessBusinessMenu;
  var theme = (0, _styledComponents.useTheme)();

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      currentMenu = _useState4[0],
      setCurrentMenu = _useState4[1];

  var ActionIcon = /*#__PURE__*/_react.default.createElement(_FiMoreVertical.default, null);

  var handleOpenOptions = function handleOpenOptions(name, menu) {
    setCurrentMenu(menu);
    setIsExtendExtraOpen(true);
    setShowOption(name);
  };

  var handleCloseOption = function handleCloseOption() {
    setShowOption(null);
    setIsExtendExtraOpen(false);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.MainContainer, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('MENU', 'Menu')), /*#__PURE__*/_react.default.createElement(_BsPlusSquare.default, {
    onClick: function onClick() {
      return handleOpenOptions('option', {});
    }
  })), businessMenusState === null || businessMenusState === void 0 ? void 0 : businessMenusState.menus.map(function (menu) {
    return /*#__PURE__*/_react.default.createElement(_styles.MeunItem, {
      key: menu.id
    }, /*#__PURE__*/_react.default.createElement(_styles.MenuName, null, menu === null || menu === void 0 ? void 0 : menu.name), /*#__PURE__*/_react.default.createElement(_styles.EnableWrapper, {
      className: "business_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
      defaultChecked: menu === null || menu === void 0 ? void 0 : menu.enabled,
      onChange: function onChange() {
        return handleChangeBusinessMenuActiveState(menu === null || menu === void 0 ? void 0 : menu.id);
      }
    })), /*#__PURE__*/_react.default.createElement(_styles.ActionsWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.DropdownButton, {
      menuAlign: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'left' : 'right',
      title: ActionIcon,
      id: (theme === null || theme === void 0 ? void 0 : theme.rtl) ? 'dropdown-menu-align-left' : 'dropdown-menu-align-right'
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenOptions('option', menu);
      }
    }, t('EDIT', 'Edit')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleOpenOptions('customFields', menu);
      }
    }, t('CUSTOM_FIELDS', 'Custom fields')), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Dropdown.Item, {
      onClick: function onClick() {
        return handleDeleteBusinessMenu(menu.id);
      }
    }, t('DELETE', 'Delete')))));
  }), /*#__PURE__*/_react.default.createElement(_styles.AddMenuButton, {
    onClick: function onClick() {
      return handleOpenOptions('option', {});
    }
  }, t('ADD_MENU', 'Add menu'))), width >= 1000 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showOption === 'option' && /*#__PURE__*/_react.default.createElement(_BusinessMenuOptions.BusinessMenuOptions, {
    open: showOption === 'option',
    business: business,
    menu: currentMenu,
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleUpdateBusinessState: handleSuccessBusinessMenu
  }), showOption === 'customFields' && /*#__PURE__*/_react.default.createElement(_BusinessMenuCustomFields.BusinessMenuCustomFields, {
    open: showOption === 'option',
    onClose: function onClose() {
      return handleCloseOption();
    },
    businessId: business === null || business === void 0 ? void 0 : business.id,
    menuId: currentMenu.id
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showOption === 'option' && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    open: showOption === 'option',
    onClose: function onClose() {
      return handleCloseOption();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessMenuOptions.BusinessMenuOptions, {
    open: showOption === 'option',
    business: business,
    menu: currentMenu,
    onClose: function onClose() {
      return handleCloseOption();
    },
    handleUpdateBusinessState: handleSuccessBusinessMenu
  })), showOption === 'customFields' && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "80%",
    open: showOption === 'customFields',
    onClose: function onClose() {
      return handleCloseOption();
    }
  }, /*#__PURE__*/_react.default.createElement(_BusinessMenuCustomFields.BusinessMenuCustomFields, {
    open: showOption === 'option',
    onClose: function onClose() {
      return handleCloseOption();
    },
    businessId: business === null || business === void 0 ? void 0 : business.id,
    menuId: currentMenu.id
  }))));
};

var BusinessMenu = function BusinessMenu(props) {
  var businessMenuProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessMenuUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponentsAdmin.BusinessMenu, businessMenuProps);
};

exports.BusinessMenu = BusinessMenu;