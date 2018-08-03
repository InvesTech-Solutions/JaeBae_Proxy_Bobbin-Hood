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

var DataPoint = function (_Component) {
  _inherits(DataPoint, _Component);

  function DataPoint(props) {
    _classCallCheck(this, DataPoint);

    return _possibleConstructorReturn(this, (DataPoint.__proto__ || Object.getPrototypeOf(DataPoint)).call(this, props));
  }

  _createClass(DataPoint, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement(
          'g',
          { transform: "translate(" + 560 * (this.props.ind - 1) / 6 + ", " + (120 - 120 * (this.props.estimatePoint - Number(this.props.yRange[0].substring(1))) / (Number(this.props.yRange[3].substring(1)) - Number(this.props.yRange[0].substring(1)))) + ")" },
          _react2.default.createElement('circle', { r: '7', fill: '#d7f7e7', className: "dataPoint" + this.props.ind + ', estCircle' })
        ),
        _react2.default.createElement(
          'g',
          { transform: "translate(" + 560 * (this.props.ind - 1) / 6 + ", " + (120 - 120 * (this.props.actualPoint - Number(this.props.yRange[0].substring(1))) / (Number(this.props.yRange[3].substring(1)) - Number(this.props.yRange[0].substring(1)))) + ")" },
          _react2.default.createElement('circle', { r: '7', fill: '#4fc189', className: "dataPoint" + this.props.ind + ', actCircle' })
        )
      );
    }
  }]);

  return DataPoint;
}(_react.Component);

exports.default = DataPoint;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2RhdGFQb2ludC5qc3giXSwibmFtZXMiOlsiRGF0YVBvaW50IiwicHJvcHMiLCJpbmQiLCJlc3RpbWF0ZVBvaW50IiwiTnVtYmVyIiwieVJhbmdlIiwic3Vic3RyaW5nIiwiYWN0dWFsUG9pbnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1hBLEtBRFc7QUFFbEI7Ozs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFHLFdBQVcsZUFBZ0IsT0FBTyxLQUFLQSxLQUFMLENBQVdDLEdBQVgsR0FBaUIsQ0FBeEIsSUFBNkIsQ0FBN0MsR0FBa0QsSUFBbEQsSUFBMEQsTUFBTSxPQUFPLEtBQUtELEtBQUwsQ0FBV0UsYUFBWCxHQUEyQkMsT0FBTyxLQUFLSCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLFNBQXJCLENBQStCLENBQS9CLENBQVAsQ0FBbEMsS0FBOEVGLE9BQU8sS0FBS0gsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxTQUFyQixDQUErQixDQUEvQixDQUFQLElBQTRDRixPQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxDQUExSCxDQUFoRSxJQUF3TyxHQUF0UDtBQUNFLG9EQUFRLEdBQUUsR0FBVixFQUFjLE1BQUssU0FBbkIsRUFBNkIsV0FBVyxjQUFjLEtBQUtMLEtBQUwsQ0FBV0MsR0FBekIsR0FBK0IsYUFBdkU7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUcsV0FBVyxlQUFnQixPQUFPLEtBQUtELEtBQUwsQ0FBV0MsR0FBWCxHQUFpQixDQUF4QixJQUE2QixDQUE3QyxHQUFrRCxJQUFsRCxJQUEwRCxNQUFNLE9BQU8sS0FBS0QsS0FBTCxDQUFXTSxXQUFYLEdBQXlCSCxPQUFPLEtBQUtILEtBQUwsQ0FBV0ksTUFBWCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsQ0FBK0IsQ0FBL0IsQ0FBUCxDQUFoQyxLQUE0RUYsT0FBTyxLQUFLSCxLQUFMLENBQVdJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLFNBQXJCLENBQStCLENBQS9CLENBQVAsSUFBNENGLE9BQU8sS0FBS0gsS0FBTCxDQUFXSSxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxTQUFyQixDQUErQixDQUEvQixDQUFQLENBQXhILENBQWhFLElBQXNPLEdBQXBQO0FBQ0Usb0RBQVEsR0FBRSxHQUFWLEVBQWMsTUFBSyxTQUFuQixFQUE2QixXQUFXLGNBQWMsS0FBS0wsS0FBTCxDQUFXQyxHQUF6QixHQUErQixhQUF2RTtBQURGO0FBSkYsT0FERjtBQVVEOzs7O0VBaEJxQk0sZ0I7O2tCQW1CVFIsUyIsImZpbGUiOiJkYXRhUG9pbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uLy4uL2Rpc3QvYnVpbGQvc3R5bGVzLm1pbi5jc3MnO1xuXG5jbGFzcyBEYXRhUG9pbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGc+XG4gICAgICAgIDxnIHRyYW5zZm9ybT17XCJ0cmFuc2xhdGUoXCIgKyAoNTYwICogKHRoaXMucHJvcHMuaW5kIC0gMSkgLyA2KSArIFwiLCBcIiArICgxMjAgLSAxMjAgKiAodGhpcy5wcm9wcy5lc3RpbWF0ZVBvaW50IC0gTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzBdLnN1YnN0cmluZygxKSkpLyhOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbM10uc3Vic3RyaW5nKDEpKSAtIE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVswXS5zdWJzdHJpbmcoMSkpKSkgKyBcIilcIn0+XG4gICAgICAgICAgPGNpcmNsZSByPVwiN1wiIGZpbGw9XCIjZDdmN2U3XCIgY2xhc3NOYW1lPXtcImRhdGFQb2ludFwiICsgdGhpcy5wcm9wcy5pbmQgKyAnLCBlc3RDaXJjbGUnfSAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT17XCJ0cmFuc2xhdGUoXCIgKyAoNTYwICogKHRoaXMucHJvcHMuaW5kIC0gMSkgLyA2KSArIFwiLCBcIiArICgxMjAgLSAxMjAgKiAodGhpcy5wcm9wcy5hY3R1YWxQb2ludCAtIE51bWJlcih0aGlzLnByb3BzLnlSYW5nZVswXS5zdWJzdHJpbmcoMSkpKS8oTnVtYmVyKHRoaXMucHJvcHMueVJhbmdlWzNdLnN1YnN0cmluZygxKSkgLSBOdW1iZXIodGhpcy5wcm9wcy55UmFuZ2VbMF0uc3Vic3RyaW5nKDEpKSkpICsgXCIpXCJ9PlxuICAgICAgICAgIDxjaXJjbGUgcj1cIjdcIiBmaWxsPVwiIzRmYzE4OVwiIGNsYXNzTmFtZT17XCJkYXRhUG9pbnRcIiArIHRoaXMucHJvcHMuaW5kICsgJywgYWN0Q2lyY2xlJ30gLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhUG9pbnQ7Il19