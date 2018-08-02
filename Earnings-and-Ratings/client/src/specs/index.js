'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./app.jsx');

var _app2 = _interopRequireDefault(_app);

var _stylesMin = require('./../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EarningsRatings = function (_React$Component) {
  _inherits(EarningsRatings, _React$Component);

  function EarningsRatings(props) {
    _classCallCheck(this, EarningsRatings);

    var _this = _possibleConstructorReturn(this, (EarningsRatings.__proto__ || Object.getPrototypeOf(EarningsRatings)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(EarningsRatings, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_app2.default, null)
      );
    }
  }]);

  return EarningsRatings;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(EarningsRatings), document.getElementById('EarningsRatings'));
window.EarningsRatings = EarningsRatings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkVhcm5pbmdzUmF0aW5ncyIsInByb3BzIiwic3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLGU7OztBQUNKLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYSxFQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVTO0FBQ1IsYUFBUTtBQUFBO0FBQUE7QUFDUCxzQ0FBQyxhQUFEO0FBRE8sT0FBUjtBQUdEOzs7O0VBWjJCQyxnQkFBTUMsUzs7QUFlcENDLG1CQUFTQyxNQUFULENBQWdCSCxnQkFBTUksYUFBTixDQUFvQlAsZUFBcEIsQ0FBaEIsRUFBc0RRLFNBQVNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXREO0FBQ0FDLE9BQU9WLGVBQVAsR0FBeUJBLGVBQXpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5qc3gnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uL2Rpc3QvYnVpbGQvc3R5bGVzLm1pbi5jc3MnO1xuXG5jbGFzcyBFYXJuaW5nc1JhdGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBcblxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICA8QXBwLz5cbiAgICA8L2Rpdj4pXG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRWFybmluZ3NSYXRpbmdzKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0Vhcm5pbmdzUmF0aW5ncycpKVxud2luZG93LkVhcm5pbmdzUmF0aW5ncyA9IEVhcm5pbmdzUmF0aW5nczsiXX0=