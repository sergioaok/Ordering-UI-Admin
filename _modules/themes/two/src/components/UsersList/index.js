"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersList = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _RiCheckboxBlankLine = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxBlankLine"));

var _RiCheckboxFill = _interopRequireDefault(require("@meronex/icons/ri/RiCheckboxFill"));

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));

var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));

var _Switch = require("../../styles/Switch");

var _UserActionSelector = require("../UserActionSelector");

var _UserTypeSelector = require("../UserTypeSelector");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var UsersList = function UsersList(props) {
  var usersList = props.usersList,
      paginationDetail = props.paginationDetail,
      paginationProps = props.paginationProps,
      getUsers = props.getUsers,
      handleChangeUserType = props.handleChangeUserType,
      handleChangeActiveUser = props.handleChangeActiveUser,
      handleDeleteUser = props.handleDeleteUser,
      selectedUsers = props.selectedUsers,
      handleSelectedUsers = props.handleSelectedUsers,
      handleOpenUserDetails = props.handleOpenUserDetails;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var getUserType = function getUserType(type) {
    var userTypes = [{
      key: 0,
      value: t('ADMINISTRATOR', 'Administrator')
    }, {
      key: 1,
      value: t('CITY_MANAGER', 'City manager')
    }, {
      key: 2,
      value: t('BUSINESS_OWNER', 'Business owner')
    }, {
      key: 3,
      value: t('USER', 'User')
    }];
    var objectStatus = userTypes.find(function (o) {
      return o.key === type;
    });
    return objectStatus && objectStatus;
  };

  var prevNextPage = function prevNextPage(isNextPage) {
    getUsers && getUsers(false, isNextPage);
  };

  var onChangeUserDetails = function onChangeUserDetails(e, user) {
    var isInvalid = e.target.closest('.user_checkbox') || e.target.closest('.user_type_selector') || e.target.closest('.user_enable_control') || e.target.closest('.user_action');
    if (isInvalid) return;
    handleOpenUserDetails(user);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.UsersConatiner, null, /*#__PURE__*/_react.default.createElement(_styles.UserTableWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.UsersTable, null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, t('USER', 'User')), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 2
  }, t('DETAILS', 'Details')), /*#__PURE__*/_react.default.createElement("th", {
    colSpan: 2
  }, t('ACTION', 'Action')))), usersList.loading ? _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: i
    }, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20,
      height: 20
    })), /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, {
      isSkeleton: true
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 45,
      height: 45
    })), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserTypeWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      style: {
        marginBottom: '10px'
      }
    }), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserEnableWrapper, null, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 50
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 20
    }))));
  }) : usersList === null || usersList === void 0 ? void 0 : usersList.users.map(function (user) {
    var _getUserType;

    return /*#__PURE__*/_react.default.createElement("tbody", {
      key: user.id
    }, /*#__PURE__*/_react.default.createElement("tr", {
      onClick: function onClick(e) {
        return onChangeUserDetails(e, user);
      }
    }, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserMainInfo, null, /*#__PURE__*/_react.default.createElement(_styles.CheckBoxWrapper, {
      className: "user_checkbox",
      onClick: function onClick() {
        return handleSelectedUsers(user.id);
      }
    }, selectedUsers.includes(user.id) ? /*#__PURE__*/_react.default.createElement(_RiCheckboxFill.default, null) : /*#__PURE__*/_react.default.createElement(_RiCheckboxBlankLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles.WrapperImage, null, (user === null || user === void 0 ? void 0 : user.photo) ? /*#__PURE__*/_react.default.createElement(_styles.Image, {
      bgimage: user === null || user === void 0 ? void 0 : user.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, user.name, " ", user === null || user === void 0 ? void 0 : user.lastname), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.email)))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.InfoBlock, null, /*#__PURE__*/_react.default.createElement("p", {
      className: "bold"
    }, t('PHONE')), /*#__PURE__*/_react.default.createElement("p", null, user === null || user === void 0 ? void 0 : user.cellphone))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserTypeWrapper, {
      className: "user_type_selector"
    }, /*#__PURE__*/_react.default.createElement(_UserTypeSelector.UserTypeSelector, {
      userId: user.id,
      defaultUserType: user === null || user === void 0 ? void 0 : user.level,
      handleChangeUserType: handleChangeUserType
    }), /*#__PURE__*/_react.default.createElement("p", null, (_getUserType = getUserType(user === null || user === void 0 ? void 0 : user.level)) === null || _getUserType === void 0 ? void 0 : _getUserType.value))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.UserEnableWrapper, {
      className: "user_enable_control"
    }, /*#__PURE__*/_react.default.createElement("span", null, t('ENABLE', 'Enable')), /*#__PURE__*/_react.default.createElement(UserActiveControlSwitch, {
      userId: user.id,
      defaultChecked: user === null || user === void 0 ? void 0 : user.enabled,
      handleChangeActiveUser: handleChangeActiveUser
    }))), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_styles.WrapperUserActionSelector, {
      className: "user_action"
    }, /*#__PURE__*/_react.default.createElement(_UserActionSelector.UserActionSelector, {
      user: user,
      handleDeleteUser: handleDeleteUser,
      handleOpenUserDetails: handleOpenUserDetails
    })))));
  }))), (usersList === null || usersList === void 0 ? void 0 : usersList.users.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperPageState, null, "".concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.from, " - ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.to, " of ").concat(paginationDetail === null || paginationDetail === void 0 ? void 0 : paginationDetail.total)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) === 1 || usersList.loading,
    onClick: function onClick() {
      return prevNextPage(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: usersList.loading || (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.currentPage) || (paginationProps === null || paginationProps === void 0 ? void 0 : paginationProps.totalPages) === 1,
    onClick: function onClick() {
      return prevNextPage(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null)))));
};

exports.UsersList = UsersList;

var UserActiveControlSwitch = function UserActiveControlSwitch(props) {
  var defaultChecked = props.defaultChecked,
      userId = props.userId,
      handleChangeActiveUser = props.handleChangeActiveUser;

  var onChangeActiveUser = function onChangeActiveUser(enabled) {
    handleChangeActiveUser({
      id: userId,
      enabled: enabled
    });
  };

  return /*#__PURE__*/_react.default.createElement(_Switch.Switch, {
    defaultChecked: defaultChecked,
    onChange: onChangeActiveUser
  });
};