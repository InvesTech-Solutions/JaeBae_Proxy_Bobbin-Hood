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

var YAxisTick = function (_Component) {
  _inherits(YAxisTick, _Component);

  function YAxisTick(props) {
    _classCallCheck(this, YAxisTick);

    return _possibleConstructorReturn(this, (YAxisTick.__proto__ || Object.getPrototypeOf(YAxisTick)).call(this, props));
  }

  _createClass(YAxisTick, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: "jby-" + this.props.ind },
        _react2.default.createElement(
          'div',
          { className: "jby" + this.props.ind },
          this.props.yValue
        )
      );
    }
  }]);

  return YAxisTick;
}(_react.Component);

exports.default = YAxisTick;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL3lBeGlzVGljay5qc3giXSwibmFtZXMiOlsiWUF4aXNUaWNrIiwicHJvcHMiLCJpbmQiLCJ5VmFsdWUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVcsU0FBUyxLQUFLQSxLQUFMLENBQVdDLEdBQXJDO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVyxRQUFRLEtBQUtELEtBQUwsQ0FBV0MsR0FBbkM7QUFBeUMsZUFBS0QsS0FBTCxDQUFXRTtBQUFwRDtBQURGLE9BREY7QUFLRDs7OztFQVhxQkMsZ0I7O2tCQWNUSixTIiwiZmlsZSI6InlBeGlzVGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vLi4vZGlzdC9idWlsZC9zdHlsZXMubWluLmNzcyc7XG5cbmNsYXNzIFlBeGlzVGljayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtcImpieS1cIiArIHRoaXMucHJvcHMuaW5kfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiamJ5XCIgKyB0aGlzLnByb3BzLmluZH0+e3RoaXMucHJvcHMueVZhbHVlfTwvZGl2PlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWUF4aXNUaWNrOyJdfQ==