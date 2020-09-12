"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var autoStyle = {
  display: 'flex',
  flexDirection: 'column'
};

var FlexItem = function FlexItem(_ref) {
  var auto = _ref.auto,
      children = _ref.children,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$flex = _ref.flex,
      flex = _ref$flex === void 0 ? '0 1 auto' : _ref$flex,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["auto", "children", "style", "className", "flex"]);

  var defaultStyle = _objectSpread({}, style, {
    flex: flex
  });

  var defaultClassName = className;

  if (auto) {
    return _react.default.createElement("div", (0, _extends2.default)({
      style: _objectSpread({}, autoStyle, {}, defaultStyle),
      className: defaultClassName
    }, rest), children);
  }

  return _react.default.createElement("div", (0, _extends2.default)({
    style: defaultStyle,
    className: defaultClassName
  }, rest), children);
};

var _default = FlexItem;
exports.default = _default;