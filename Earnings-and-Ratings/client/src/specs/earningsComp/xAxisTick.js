'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesMin = require('./../../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XAxisTick = function (_Component) {
  _inherits(XAxisTick, _Component);

  function XAxisTick(props) {
    _classCallCheck(this, XAxisTick);

    return _possibleConstructorReturn(this, (XAxisTick.__proto__ || Object.getPrototypeOf(XAxisTick)).call(this, props));
  }

  _createClass(XAxisTick, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: "jbx-" + this.props.ind },
        _react2.default.createElement(
          'div',
          { className: "jbx" + this.props.ind },
          this.props.xValue
        )
      );
    }
  }]);

  return XAxisTick;
}(_react.Component);

exports.default = XAxisTick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL3hBeGlzVGljay5qc3giXSwibmFtZXMiOlsiWEF4aXNUaWNrIiwicHJvcHMiLCJpbmQiLCJ4VmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVcsU0FBUyxLQUFLQSxLQUFMLENBQVdDLEdBQXJDO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVyxRQUFRLEtBQUtELEtBQUwsQ0FBV0MsR0FBbkM7QUFDRyxlQUFLRCxLQUFMLENBQVdFO0FBRGQ7QUFERixPQURGO0FBT0Q7Ozs7RUFicUJDLGdCOztrQkFnQlRKLFMiLCJmaWxlIjoieEF4aXNUaWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi8uLi9kaXN0L2J1aWxkL3N0eWxlcy5taW4uY3NzJztcblxuY2xhc3MgWEF4aXNUaWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17XCJqYngtXCIgKyB0aGlzLnByb3BzLmluZH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImpieFwiICsgdGhpcy5wcm9wcy5pbmR9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLnhWYWx1ZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBYQXhpc1RpY2s7Il19