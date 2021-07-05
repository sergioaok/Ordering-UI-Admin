"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarMenu = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _LogoutButton = require("../LogoutButton");

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _styledComponents = require("styled-components");

var _orderingComponentsAdmin = require("ordering-components-admin");

var _useWindowSize = require("../../../../../hooks/useWindowSize");

var _reactBootstrap = require("react-bootstrap");

var _styles = require("./styles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SidebarMenu = function SidebarMenu(props) {
  var _theme$images, _theme$images$logos, _theme$images2, _theme$images2$logos, _theme$images3, _theme$images3$logos, _theme$images4, _theme$images4$logos, _sessionState$user, _sessionState$user2, _sessionState$user3;

  var location = (0, _reactRouterDom.useLocation)();
  var theme = (0, _styledComponents.useTheme)();

  var _useEvent = (0, _orderingComponentsAdmin.useEvent)(),
      _useEvent2 = _slicedToArray(_useEvent, 1),
      events = _useEvent2[0];

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponentsAdmin.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 1),
      sessionState = _useSession2[0];

  var windowSize = (0, _useWindowSize.useWindowSize)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isCollapse = _useState2[0],
      setIsCollapse = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      menuOpen = _useState4[0],
      setMenuOpen = _useState4[1];

  var ordersSubMenus = [{
    id: 1,
    title: t('ORDERS_MANAGER', 'Orders manager'),
    pageName: 'orders'
  }, {
    id: 2,
    title: t('DELIVERIES_DASHBOARD', 'Deliveries dashboard'),
    pageName: 'deliveries'
  }, {
    id: 3,
    title: t('DRIVERS_DASHBOARD', 'Drivers Dashboard'),
    pageName: 'drivers'
  }];
  var storesSubMenus = [{
    id: 1,
    title: t('STORES_LIST', 'Stores list'),
    pageName: 'businesses'
  }, {
    id: 2,
    title: t('DELIVERY_ZONES', 'Delivery zones'),
    pageName: 'delivery_zones'
  }, {
    id: 3,
    title: t('COUPONS', 'Coupons'),
    pageName: 'coupons'
  }, {
    id: 4,
    title: t('DISCOUNTS', 'Discounts'),
    pageName: 'discounts'
  }, {
    id: 5,
    title: t('BUSINESS_SCHEDULE', 'Business schedule'),
    pageName: 'business_schedule'
  }, {
    id: 6,
    title: t('TAXES', 'Taxes'),
    pageName: 'taxes'
  }, {
    id: 7,
    title: t('PAYMENT_METHODS', 'Payment methods'),
    pageName: 'payment_methods'
  }, {
    id: 8,
    title: t('PERSONALIZATION', 'Personalization'),
    pageName: 'personalization'
  }];
  var settingsSubMenus = [{
    id: 1,
    title: t('BASIC_SETTINGS', 'Basic settings'),
    pageName: 'basicSettings'
  }, {
    id: 2,
    title: t('OPERATION_SETTINGS', 'Operation settings'),
    pageName: 'operationSettings'
  }];

  var handleGoToPage = function handleGoToPage(data) {
    setMenuOpen(false);
    events.emit('go_to_page', data);
  };

  (0, _react.useEffect)(function () {
    if (windowSize.width >= 760 || !isCollapse) return;
    setIsCollapse(false);
  }, [windowSize.width]);
  (0, _react.useEffect)(function () {
    if (menuOpen) {
      document.getElementById('side_bar').style.width = '100vw';
    } else {
      document.getElementById('side_bar').style.width = '0px';
    }
  }, [menuOpen]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, windowSize.width < 760 && /*#__PURE__*/_react.default.createElement(_styles.Header, null, !menuOpen && /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    onClick: function onClick() {
      return setMenuOpen(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.List, null)), /*#__PURE__*/_react.default.createElement(_styles.LogoWrap, {
    className: "d-flex justify-content-center align-items-center",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'home'
      });
    }
  }, isCollapse ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$logos = _theme$images.logos) === null || _theme$images$logos === void 0 ? void 0 : _theme$images$logos.isotype,
    fluid: true,
    width: "35px",
    height: "45px"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images2 = theme.images) === null || _theme$images2 === void 0 ? void 0 : (_theme$images2$logos = _theme$images2.logos) === null || _theme$images2$logos === void 0 ? void 0 : _theme$images2$logos.logotype,
    fluid: true,
    width: "150px",
    height: "45px"
  }))), /*#__PURE__*/_react.default.createElement(_styles.SidebarContainer, {
    id: "side_bar",
    isCollapse: isCollapse
  }, /*#__PURE__*/_react.default.createElement(_styles.SidebarInnerContainer, {
    className: "d-flex flex-column"
  }, windowSize.width >= 760 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.CollapseButton, {
    className: "position-absolute bg-white p-1",
    onClick: function onClick() {
      return setIsCollapse(!isCollapse);
    },
    isCollapse: isCollapse
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowBarLeft, null)), /*#__PURE__*/_react.default.createElement(_styles.LogoWrap, {
    className: "d-flex justify-content-center align-items-center",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'home'
      });
    }
  }, isCollapse ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images3 = theme.images) === null || _theme$images3 === void 0 ? void 0 : (_theme$images3$logos = _theme$images3.logos) === null || _theme$images3$logos === void 0 ? void 0 : _theme$images3$logos.isotype,
    fluid: true,
    width: "35px",
    height: "45px"
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: theme === null || theme === void 0 ? void 0 : (_theme$images4 = theme.images) === null || _theme$images4 === void 0 ? void 0 : (_theme$images4$logos = _theme$images4.logos) === null || _theme$images4$logos === void 0 ? void 0 : _theme$images4$logos.logotype,
    fluid: true,
    width: "150px",
    height: "45px"
  }))) : /*#__PURE__*/_react.default.createElement(_styles.MenuClose, null, /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    isClose: true,
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null))), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    className: "d-flex flex-column justify-content-between p-1 pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "0"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.HouseDoor, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('HOME', 'Home')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "1",
    active: location.pathname === '/orders' || location.pathname === '/deliveries' || location.pathname === '/drivers'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ListCheck, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "1"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, ordersSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "2"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Chat, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('MESSAGES', 'Messages')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "3",
    active: location.pathname === '/businesses'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Shop, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('STORES', 'Stores'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "3"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, storesSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  })))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "4",
    page: "users",
    handleGoToPage: handleGoToPage,
    active: location.pathname === '/users'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.People, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('USERS', 'Users')))), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.BarChartLine, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('ANALYTICS', 'Analytics')))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion, null, /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(ContextAwareToggle, {
    eventKey: "5",
    active: location.pathname === '/basicSettings' || location.pathname === '/operationSettings'
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Gear, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('SETTINGS', 'Settings'))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Accordion.Collapse, {
    eventKey: "5"
  }, /*#__PURE__*/_react.default.createElement(_styles.MenuContent, null, settingsSubMenus.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubMenu, {
      key: item.id,
      active: location.pathname.includes(item.pageName),
      onClick: function onClick() {
        return handleGoToPage({
          page: item.pageName
        });
      }
    }, item.title);
  }))))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center",
    variant: location.pathname === '/support' && 'primary',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'support'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Headset, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, t('SUPPORT', 'Support'))))), /*#__PURE__*/_react.default.createElement(_styles.UserInfo, {
    id: "user_info",
    className: "d-flex flex-column px-1"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    className: "d-flex align-items-center m-1",
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    },
    variant: location.pathname === '/profile' && 'primary'
  }, (sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.photo) ? /*#__PURE__*/_react.default.createElement(_reactBootstrap.Image, {
    src: sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.photo,
    width: "30px",
    height: "30px",
    roundedCircle: true
  }) : /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PersonFill, null), !isCollapse && /*#__PURE__*/_react.default.createElement("span", {
    className: "mx-2"
  }, sessionState === null || sessionState === void 0 ? void 0 : (_sessionState$user3 = sessionState.user) === null || _sessionState$user3 === void 0 ? void 0 : _sessionState$user3.name)), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
    isCollapse: isCollapse
  })))));
};

exports.SidebarMenu = SidebarMenu;

var ContextAwareToggle = function ContextAwareToggle(_ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      callback = _ref.callback,
      page = _ref.page,
      handleGoToPage = _ref.handleGoToPage,
      active = _ref.active;
  var currentEventKey = (0, _react.useContext)(_reactBootstrap.AccordionContext);
  var decoratedOnClick = (0, _reactBootstrap.useAccordionToggle)(eventKey, function () {
    return callback && callback(eventKey);
  });
  var isCurrentEventKey = currentEventKey === eventKey;

  var handleButtonClick = function handleButtonClick() {
    if (page) {
      handleGoToPage({
        page: page
      });
    }

    decoratedOnClick();
  };

  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: active ? 'primary' : isCurrentEventKey && 'light',
    onClick: handleButtonClick
  }, children);
};