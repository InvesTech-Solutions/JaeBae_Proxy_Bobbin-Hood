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

var PercentBar = function (_Component) {
  _inherits(PercentBar, _Component);

  function PercentBar(props) {
    _classCallCheck(this, PercentBar);

    var _this = _possibleConstructorReturn(this, (PercentBar.__proto__ || Object.getPrototypeOf(PercentBar)).call(this, props));

    _this.state = {
      percent: '',
      rounded: '',
      trigger: false
    };
    return _this;
  }

  _createClass(PercentBar, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var percent = this.props.count / this.props.total * 100 + '%';
      var rounded = Math.round(100 * this.props.count / this.props.total) + '%';
      if (this.state.trigger === false && this.props.total > 0) {
        this.setState({ percent: percent, rounded: rounded, trigger: true });
      };
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _stylesMin2.default.barRow },
        _react2.default.createElement(
          'div',
          { className: _stylesMin2.default.barSuggestion },
          this.props.suggestion
        ),
        _react2.default.createElement(
          'div',
          { className: _stylesMin2.default.barContain },
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.percInBarContain, style: { left: this.state.percent } },
            _react2.default.createElement(
              'span',
              { className: 'percInBar' },
              this.state.rounded
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.wholeBar },
            _react2.default.createElement('div', { className: _stylesMin2.default.coloredBar, style: { width: this.state.percent } })
          )
        )
      );
    }
  }]);

  return PercentBar;
}(_react.Component);

exports.default = PercentBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvcGVyY2VudEJhci5qc3giXSwibmFtZXMiOlsiUGVyY2VudEJhciIsInByb3BzIiwic3RhdGUiLCJwZXJjZW50Iiwicm91bmRlZCIsInRyaWdnZXIiLCJjb3VudCIsInRvdGFsIiwiTWF0aCIsInJvdW5kIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJiYXJSb3ciLCJiYXJTdWdnZXN0aW9uIiwic3VnZ2VzdGlvbiIsImJhckNvbnRhaW4iLCJwZXJjSW5CYXJDb250YWluIiwibGVmdCIsIndob2xlQmFyIiwiY29sb3JlZEJhciIsIndpZHRoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxVOzs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZUFBVSxFQURDO0FBRVhDLGVBQVUsRUFGQztBQUdYQyxlQUFVO0FBSEMsS0FBYjtBQUZpQjtBQU9sQjs7Ozt5Q0FFcUI7QUFDcEIsVUFBSUYsVUFBYyxLQUFLRixLQUFMLENBQVdLLEtBQVgsR0FBbUIsS0FBS0wsS0FBTCxDQUFXTSxLQUEvQixHQUF3QyxHQUFyRCxNQUFKO0FBQ0EsVUFBSUgsVUFBYUksS0FBS0MsS0FBTCxDQUFXLE1BQU0sS0FBS1IsS0FBTCxDQUFXSyxLQUFqQixHQUF5QixLQUFLTCxLQUFMLENBQVdNLEtBQS9DLENBQWIsTUFBSjtBQUNBLFVBQUksS0FBS0wsS0FBTCxDQUFXRyxPQUFYLEtBQXVCLEtBQXZCLElBQWdDLEtBQUtKLEtBQUwsQ0FBV00sS0FBWCxHQUFtQixDQUF2RCxFQUEwRDtBQUN4RCxhQUFLRyxRQUFMLENBQWMsRUFBRVAsU0FBU0EsT0FBWCxFQUFvQkMsU0FBU0EsT0FBN0IsRUFBc0NDLFNBQVMsSUFBL0MsRUFBZDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVdNLG9CQUFPQyxNQUF2QjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVdELG9CQUFPRSxhQUF2QjtBQUNHLGVBQUtaLEtBQUwsQ0FBV2E7QUFEZCxTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBV0gsb0JBQU9JLFVBQXZCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBV0osb0JBQU9LLGdCQUF2QixFQUF5QyxPQUFPLEVBQUNDLE1BQU0sS0FBS2YsS0FBTCxDQUFXQyxPQUFsQixFQUFoRDtBQUNFO0FBQUE7QUFBQSxnQkFBTSxXQUFVLFdBQWhCO0FBQTZCLG1CQUFLRCxLQUFMLENBQVdFO0FBQXhDO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVdPLG9CQUFPTyxRQUF2QjtBQUNFLG1EQUFLLFdBQVdQLG9CQUFPUSxVQUF2QixFQUFtQyxPQUFPLEVBQUNDLE9BQU8sS0FBS2xCLEtBQUwsQ0FBV0MsT0FBbkIsRUFBMUM7QUFERjtBQUpGO0FBSkYsT0FERjtBQWVEOzs7O0VBbkNzQmtCLGdCOztrQkFzQ1ZyQixVIiwiZmlsZSI6InBlcmNlbnRCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uLy4uL2Rpc3QvYnVpbGQvc3R5bGVzLm1pbi5jc3MnO1xuXG5jbGFzcyBQZXJjZW50QmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBlcmNlbnQgOiAnJyxcbiAgICAgIHJvdW5kZWQgOiAnJyxcbiAgICAgIHRyaWdnZXIgOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgbGV0IHBlcmNlbnQgPSBgJHsodGhpcy5wcm9wcy5jb3VudCAvIHRoaXMucHJvcHMudG90YWwpICogMTAwfSVgO1xuICAgIGxldCByb3VuZGVkID0gYCR7TWF0aC5yb3VuZCgxMDAgKiB0aGlzLnByb3BzLmNvdW50IC8gdGhpcy5wcm9wcy50b3RhbCl9JWA7XG4gICAgaWYgKHRoaXMuc3RhdGUudHJpZ2dlciA9PT0gZmFsc2UgJiYgdGhpcy5wcm9wcy50b3RhbCA+IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwZXJjZW50OiBwZXJjZW50LCByb3VuZGVkOiByb3VuZGVkLCB0cmlnZ2VyOiB0cnVlIH0pXG4gICAgfTtcbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhclJvd30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyU3VnZ2VzdGlvbn0+XG4gICAgICAgICAge3RoaXMucHJvcHMuc3VnZ2VzdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFyQ29udGFpbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wZXJjSW5CYXJDb250YWlufSBzdHlsZT17e2xlZnQ6IHRoaXMuc3RhdGUucGVyY2VudH19PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwZXJjSW5CYXInPnt0aGlzLnN0YXRlLnJvdW5kZWR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2hvbGVCYXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb2xvcmVkQmFyfSBzdHlsZT17e3dpZHRoOiB0aGlzLnN0YXRlLnBlcmNlbnR9fT48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyY2VudEJhcjsiXX0=