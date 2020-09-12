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

require("./index.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var autoStyle = {
  display: 'flex',
  flex: 1
};

var Flex = function Flex(props) {
  var auto = props.auto,
      _props$align = props.align,
      align = _props$align === void 0 ? 'center' : _props$align,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'space-between' : _props$justify,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["auto", "align", "justify", "style", "className", "children"]);

  var defaultStyle = _objectSpread({}, style, {
    alignItems: align,
    justifyContent: justify
  });

  var defaultClassName = "Zele-Layout-flex ".concat(className);

  if (auto) {
    return _react.default.createElement("div", (0, _extends2.default)({
      style: autoStyle,
      className: defaultClassName
    }, rest), _react.default.Children.map(children, function (child) {
      return _react.default.cloneElement(child, {
        auto: auto
      });
    }));
  }

  return _react.default.createElement("div", (0, _extends2.default)({
    style: defaultStyle,
    className: defaultClassName
  }, rest), children);
};

var _default = Flex;
exports.default = _default;