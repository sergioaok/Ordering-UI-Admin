"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveriesLocation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponentsAdmin = require("ordering-components-admin");

var _googleMapReact = _interopRequireWildcard(require("google-map-react"));

var _DriverMapMarkerAndInfo = require("../DriverMapMarkerAndInfo");

var _InterActOrderMarker = require("../InterActOrderMarker");

var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));

var _AutoScroll = require("../../../../../components/AutoScroll");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DeliveriesLocation = function DeliveriesLocation(props) {
  var _configState$configs, _configState$configs$, _interActionMapOrder$7, _interActionMapOrder$8, _interActionMapOrder$9, _interActionMapOrder$10, _interActionMapOrder$11, _interActionMapOrder$12, _interActionMapOrder$13, _interActionMapOrder$14, _interActionMapOrder$15, _interActionMapOrder$16, _interActionMapOrder$17, _interActionMapOrder$18, _interActionMapOrder$19, _interActionMapOrder$20, _interActionMapOrder$21;

  var driversList = props.driversList,
      interActionMapOrder = props.interActionMapOrder;

  var _useLanguage = (0, _orderingComponentsAdmin.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useConfig = (0, _orderingComponentsAdmin.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configState = _useConfig2[0];

  var googleMapsApiKey = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.google_maps_api_key) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;

  var _useState = (0, _react.useState)({
    lat: 19.4326,
    lng: -99.1332
  }),
      _useState2 = _slicedToArray(_useState, 2),
      mapCenter = _useState2[0],
      setMapCenter = _useState2[1];

  var _useState3 = (0, _react.useState)(10),
      _useState4 = _slicedToArray(_useState3, 2),
      mapZoom = _useState4[0],
      setMapZoom = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      onlineDrivers = _useState6[0],
      setOnlineDrivers = _useState6[1];

  var _useState7 = (0, _react.useState)(true),
      _useState8 = _slicedToArray(_useState7, 2),
      mapLoaded = _useState8[0],
      setMapLoaded = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      interActionOrderDriverLocation = _useState10[0],
      setInterActionOrderDriverLocation = _useState10[1];

  var defaultCenter = {
    lat: 19.4326,
    lng: -99.1332
  };
  var defaultZoom = 10;
  var mapRef = (0, _react.useRef)(null);

  var mapFit = function mapFit() {
    var _onlineDrivers = driversList.drivers.filter(function (driver) {
      return driver.enabled && driver.available && !driver.busy;
    });

    setOnlineDrivers(_onlineDrivers);
    var bounds = new window.google.maps.LatLngBounds();

    if (interActionMapOrder === null) {
      if (driversList.drivers.length === 1) {
        setMapCenter(driversList.drivers[0].location);
        setMapZoom(defaultZoom);
        return;
      }

      var _iterator = _createForOfIteratorHelper(driversList.drivers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var driver = _step.value;
          var marker = driver.location !== null ? driver.location : defaultCenter;
          var newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
          bounds.extend(newPoint);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    if (interActionMapOrder !== null) {
      var _interActionMapOrder$, _interActionMapOrder$2, _interActionMapOrder$3, _interActionMapOrder$4, _interActionMapOrder$5;

      var _marker, _newPoint;

      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$ = interActionMapOrder.business) === null || _interActionMapOrder$ === void 0 ? void 0 : _interActionMapOrder$.location) !== null ? interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$2 = interActionMapOrder.business) === null || _interActionMapOrder$2 === void 0 ? void 0 : _interActionMapOrder$2.location : defaultCenter;
      _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
      bounds.extend(_newPoint);
      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$3 = interActionMapOrder.customer) === null || _interActionMapOrder$3 === void 0 ? void 0 : _interActionMapOrder$3.location) !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$4 = interActionMapOrder.customer) === null || _interActionMapOrder$4 === void 0 ? void 0 : (_interActionMapOrder$5 = _interActionMapOrder$4.location) === null || _interActionMapOrder$5 === void 0 ? void 0 : _interActionMapOrder$5.lat) ? interActionMapOrder.customer.location : defaultCenter;
      _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
      bounds.extend(_newPoint);

      if (interActionMapOrder.driver !== null && interActionOrderDriverLocation) {
        _marker = interActionOrderDriverLocation !== null ? interActionOrderDriverLocation : defaultCenter;
        _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
        bounds.extend(_newPoint);
      }
    }

    var newBounds = {
      ne: {
        lat: bounds.getNorthEast().lat(),
        lng: bounds.getNorthEast().lng()
      },
      sw: {
        lat: bounds.getSouthWest().lat(),
        lng: bounds.getSouthWest().lng()
      }
    };
    var mapSize = {
      width: mapRef.current.clientWidth,
      height: mapRef.current.clientHeight
    };

    var _fitBounds = (0, _googleMapReact.fitBounds)(newBounds, mapSize),
        center = _fitBounds.center,
        zoom = _fitBounds.zoom;

    setMapZoom(zoom);
    setMapCenter(center);
  }; // Fit bounds on mount, and when the markers change


  (0, _react.useEffect)(function () {
    if (driversList.loading || driversList.drivers.length === 0 || mapLoaded) return;

    if (interActionMapOrder !== null) {
      var _iterator2 = _createForOfIteratorHelper(driversList.drivers),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _interActionMapOrder$6;

          var driver = _step2.value;

          if (driver.id === (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$6 = interActionMapOrder.driver) === null || _interActionMapOrder$6 === void 0 ? void 0 : _interActionMapOrder$6.id)) {
            setInterActionOrderDriverLocation(driver.location);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }

    mapFit();
  }, [driversList, interActionMapOrder, mapLoaded]);
  (0, _react.useEffect)(function () {
    if (mapLoaded || interActionOrderDriverLocation === null) return;
    mapFit();
  }, [interActionOrderDriverLocation, mapLoaded]);

  var handleMapChange = function handleMapChange(data) {
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };

  return /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
    ref: mapRef,
    className: "drivers-location"
  }, googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
    bootstrapURLKeys: {
      key: googleMapsApiKey
    },
    onGoogleApiLoaded: function onGoogleApiLoaded() {
      return setMapLoaded(false);
    },
    defaultCenter: defaultCenter,
    center: mapCenter,
    defaultZoom: defaultZoom,
    zoom: mapZoom,
    options: {
      fullscreenControl: true
    },
    className: "map",
    onChange: function onChange(data) {
      return handleMapChange(data);
    },
    yesIWantToUseGoogleMapApiInternals: true
  }, interActionMapOrder === null && driversList.drivers.length !== 0 && driversList.drivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null ? driver.location.lat : defaultCenter.lat,
      lng: driver.location !== null ? driver.location.lng : defaultCenter.lng
    });
  }), interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.business,
    lat: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$7 = interActionMapOrder.business) === null || _interActionMapOrder$7 === void 0 ? void 0 : (_interActionMapOrder$8 = _interActionMapOrder$7.location) === null || _interActionMapOrder$8 === void 0 ? void 0 : _interActionMapOrder$8.lat,
    lng: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$9 = interActionMapOrder.business) === null || _interActionMapOrder$9 === void 0 ? void 0 : (_interActionMapOrder$10 = _interActionMapOrder$9.location) === null || _interActionMapOrder$10 === void 0 ? void 0 : _interActionMapOrder$10.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$11 = interActionMapOrder.business) === null || _interActionMapOrder$11 === void 0 ? void 0 : _interActionMapOrder$11.logo
  }), interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.customer,
    lat: (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$12 = interActionMapOrder.customer) === null || _interActionMapOrder$12 === void 0 ? void 0 : (_interActionMapOrder$13 = _interActionMapOrder$12.location) === null || _interActionMapOrder$13 === void 0 ? void 0 : _interActionMapOrder$13.lat) ? interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$14 = interActionMapOrder.customer) === null || _interActionMapOrder$14 === void 0 ? void 0 : (_interActionMapOrder$15 = _interActionMapOrder$14.location) === null || _interActionMapOrder$15 === void 0 ? void 0 : _interActionMapOrder$15.lat : defaultCenter.lat,
    lng: (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$16 = interActionMapOrder.customer) === null || _interActionMapOrder$16 === void 0 ? void 0 : (_interActionMapOrder$17 = _interActionMapOrder$16.location) === null || _interActionMapOrder$17 === void 0 ? void 0 : _interActionMapOrder$17.lng) ? interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$18 = interActionMapOrder.customer) === null || _interActionMapOrder$18 === void 0 ? void 0 : (_interActionMapOrder$19 = _interActionMapOrder$18.location) === null || _interActionMapOrder$19 === void 0 ? void 0 : _interActionMapOrder$19.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$20 = interActionMapOrder.customer) === null || _interActionMapOrder$20 === void 0 ? void 0 : _interActionMapOrder$20.photo
  }), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    driver: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver,
    lat: interActionOrderDriverLocation ? interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.lat : defaultCenter.lat,
    lng: interActionOrderDriverLocation ? interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$21 = interActionMapOrder.driver) === null || _interActionMapOrder$21 === void 0 ? void 0 : _interActionMapOrder$21.photo
  })), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null && onlineDrivers.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperOnlineDrivers, null, /*#__PURE__*/_react.default.createElement("p", null, t('DRIVERS_ONLINE', 'Drivers online')), /*#__PURE__*/_react.default.createElement(_styles.OnlineDrivers, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    innerScroll: true
  }, onlineDrivers.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, onlineDrivers.map(function (driver) {
    return /*#__PURE__*/_react.default.createElement(_styles.WrapDriverInfo, {
      key: driver.id
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, null, (driver === null || driver === void 0 ? void 0 : driver.photo) ? /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
      bgimage: driver === null || driver === void 0 ? void 0 : driver.photo
    }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("p", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))));
  }))))));
};

exports.DeliveriesLocation = DeliveriesLocation;