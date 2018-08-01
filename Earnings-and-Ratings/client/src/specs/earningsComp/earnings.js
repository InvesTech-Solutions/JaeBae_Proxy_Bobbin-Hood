'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _xAxis = require('./xAxis');

var _xAxis2 = _interopRequireDefault(_xAxis);

var _yAxis = require('./yAxis');

var _yAxis2 = _interopRequireDefault(_yAxis);

var _dataPoints = require('./dataPoints');

var _dataPoints2 = _interopRequireDefault(_dataPoints);

var _description = require('./description');

var _description2 = _interopRequireDefault(_description);

var _stylesMin = require('./../../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Earnings = function (_Component) {
  _inherits(Earnings, _Component);

  function Earnings(props) {
    _classCallCheck(this, Earnings);

    var _this = _possibleConstructorReturn(this, (Earnings.__proto__ || Object.getPrototypeOf(Earnings)).call(this, props));

    _this.state = {
      yRange: [],
      xDates: [],
      control: false
    };
    return _this;
  }

  _createClass(Earnings, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // process data to create arrays used for y-axis (min to max, length of 4) and x-axis (quarterlies)
      console.log(_stylesMin2.default);
      var filtered = this.props.estimatedEarnings.concat(this.props.actualEarnings).filter(function (element) {
        return element[0] === '$';
      });
      var dates = this.props.estimatedEarnings.filter(function (element) {
        return element[0] !== '$';
      });
      var inNumbers = filtered.map(function (element) {
        return Number(element.substring(1));
      });
      var min = Math.min.apply(Math, _toConsumableArray(inNumbers));
      var max = Math.max.apply(Math, _toConsumableArray(inNumbers));
      var interval = (max - min) / 3;
      var yArray = [String(min), String(min + interval), String(min + 2 * interval), String(max)];
      yArray = yArray.map(function (element) {
        if (element[element.length - 3] === '.') {
          return '$' + element;
        }
        if (element[element.length - 2] === '.') {
          return '$' + element + '0';
        };
        if (element.indexOf('.') !== -1) {
          return '$' + element.substring(0, element.indexOf('.') + 3);
        }
        return '$' + element + '.00';
      });
      // set a controller to prevent infinite looping of setState
      if (this.state.control === false) {
        this.setState({ yRange: yArray, xDates: dates, control: true });
      }
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: _stylesMin2.default.earningsComponent },
        _react2.default.createElement(
          'header',
          { className: _stylesMin2.default.head },
          'Earnings'
        ),
        _react2.default.createElement(
          'div',
          { className: _stylesMin2.default.chartDiv },
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.chartContainer },
            _react2.default.createElement(
              'div',
              { className: _stylesMin2.default.innerChartContainer },
              _react2.default.createElement(
                'div',
                { className: _stylesMin2.default.axes },
                _react2.default.createElement(_yAxis2.default, {
                  yRange: this.state.yRange
                }),
                _react2.default.createElement(_dataPoints2.default, {
                  estimate: this.props.estimatedEarnings,
                  actual: this.props.actualEarnings,
                  yRange: this.state.yRange
                }),
                _react2.default.createElement(_xAxis2.default, {
                  dates: this.state.xDates
                })
              )
            )
          )
        ),
        _react2.default.createElement(_description2.default, {
          estimate: this.props.estimatedEarnings,
          actual: this.props.actualEarnings
        })
      );
    }
  }]);

  return Earnings;
}(_react.Component);

exports.default = Earnings;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2Vhcm5pbmdzLmpzeCJdLCJuYW1lcyI6WyJFYXJuaW5ncyIsInByb3BzIiwic3RhdGUiLCJ5UmFuZ2UiLCJ4RGF0ZXMiLCJjb250cm9sIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImZpbHRlcmVkIiwiZXN0aW1hdGVkRWFybmluZ3MiLCJjb25jYXQiLCJhY3R1YWxFYXJuaW5ncyIsImZpbHRlciIsImVsZW1lbnQiLCJkYXRlcyIsImluTnVtYmVycyIsIm1hcCIsIk51bWJlciIsInN1YnN0cmluZyIsIm1pbiIsIk1hdGgiLCJtYXgiLCJpbnRlcnZhbCIsInlBcnJheSIsIlN0cmluZyIsImxlbmd0aCIsImluZGV4T2YiLCJzZXRTdGF0ZSIsImVhcm5pbmdzQ29tcG9uZW50IiwiaGVhZCIsImNoYXJ0RGl2IiwiY2hhcnRDb250YWluZXIiLCJpbm5lckNoYXJ0Q29udGFpbmVyIiwiYXhlcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFTLEVBREU7QUFFWEMsY0FBUyxFQUZFO0FBR1hDLGVBQVU7QUFIQyxLQUFiO0FBRmlCO0FBT2xCOzs7O3lDQUVxQjtBQUNwQjtBQUNBQyxjQUFRQyxHQUFSLENBQVlDLG1CQUFaO0FBQ0EsVUFBSUMsV0FBVyxLQUFLUixLQUFMLENBQVdTLGlCQUFYLENBQTZCQyxNQUE3QixDQUFvQyxLQUFLVixLQUFMLENBQVdXLGNBQS9DLEVBQStEQyxNQUEvRCxDQUFzRSxVQUFDQyxPQUFELEVBQWE7QUFDaEcsZUFBT0EsUUFBUSxDQUFSLE1BQWUsR0FBdEI7QUFDRCxPQUZjLENBQWY7QUFHQSxVQUFJQyxR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bXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBYQXhpcyBmcm9tICcuL3hBeGlzJztcbmltcG9ydCBZQXhpcyBmcm9tICcuL3lBeGlzJztcbmltcG9ydCBEYXRhUG9pbnRzIGZyb20gJy4vZGF0YVBvaW50cyc7XG5pbXBvcnQgRGVzY3JpcHRpb24gZnJvbSAnLi9kZXNjcmlwdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vLi4vZGlzdC9idWlsZC9zdHlsZXMubWluLmNzcyc7XG5cbmNsYXNzIEVhcm5pbmdzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHlSYW5nZSA6IFtdLFxuICAgICAgeERhdGVzIDogW10sXG4gICAgICBjb250cm9sIDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIC8vIHByb2Nlc3MgZGF0YSB0byBjcmVhdGUgYXJyYXlzIHVzZWQgZm9yIHktYXhpcyAobWluIHRvIG1heCwgbGVuZ3RoIG9mIDQpIGFuZCB4LWF4aXMgKHF1YXJ0ZXJsaWVzKVxuICAgIGNvbnNvbGUubG9nKHN0eWxlcylcbiAgICBsZXQgZmlsdGVyZWQgPSB0aGlzLnByb3BzLmVzdGltYXRlZEVhcm5pbmdzLmNvbmNhdCh0aGlzLnByb3BzLmFjdHVhbEVhcm5pbmdzKS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50WzBdID09PSAnJCc7XG4gICAgfSk7XG4gICAgbGV0IGRhdGVzID0gdGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5ncy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50WzBdICE9PSAnJCc7XG4gICAgfSk7XG4gICAgbGV0IGluTnVtYmVycyA9IGZpbHRlcmVkLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIE51bWJlcihlbGVtZW50LnN1YnN0cmluZygxKSk7XG4gICAgfSk7XG4gICAgbGV0IG1pbiA9IE1hdGgubWluKC4uLmluTnVtYmVycyk7XG4gICAgbGV0IG1heCA9IE1hdGgubWF4KC4uLmluTnVtYmVycyk7XG4gICAgbGV0IGludGVydmFsID0gKG1heCAtIG1pbikgLyAzO1xuICAgIGxldCB5QXJyYXkgPSBbU3RyaW5nKG1pbiksIFN0cmluZyhtaW4gKyBpbnRlcnZhbCksIFN0cmluZyhtaW4gKyAyICogaW50ZXJ2YWwpLCBTdHJpbmcobWF4KV07XG4gICAgeUFycmF5ID0geUFycmF5Lm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYoZWxlbWVudFtlbGVtZW50Lmxlbmd0aCAtIDNdID09PSAnLicpIHtcbiAgICAgICAgcmV0dXJuICckJyArIGVsZW1lbnQ7XG4gICAgICB9IFxuICAgICAgaWYgKGVsZW1lbnRbZWxlbWVudC5sZW5ndGggLSAyXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50ICsgJzAnO1xuICAgICAgfTtcbiAgICAgIGlmIChlbGVtZW50LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICckJyArIGVsZW1lbnQuc3Vic3RyaW5nKDAsIGVsZW1lbnQuaW5kZXhPZignLicpICsgMyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyQnICsgZWxlbWVudCArICcuMDAnXG4gICAgfSk7XG4gICAgLy8gc2V0IGEgY29udHJvbGxlciB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Bpbmcgb2Ygc2V0U3RhdGVcbiAgICBpZih0aGlzLnN0YXRlLmNvbnRyb2wgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt5UmFuZ2UgOiB5QXJyYXksIHhEYXRlcyA6IGRhdGVzLCBjb250cm9sIDogdHJ1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvbiBpZD17c3R5bGVzLmVhcm5pbmdzQ29tcG9uZW50fT5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cbiAgICAgICAgRWFybmluZ3NcbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnREaXZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhcnRDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckNoYXJ0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5heGVzfT5cbiAgICAgICAgICAgICAgICA8WUF4aXMgXG4gICAgICAgICAgICAgICAgICB5UmFuZ2U9e3RoaXMuc3RhdGUueVJhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPERhdGFQb2ludHMgXG4gICAgICAgICAgICAgICAgICBlc3RpbWF0ZT17dGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5nc31cbiAgICAgICAgICAgICAgICAgIGFjdHVhbD17dGhpcy5wcm9wcy5hY3R1YWxFYXJuaW5nc31cbiAgICAgICAgICAgICAgICAgIHlSYW5nZT17dGhpcy5zdGF0ZS55UmFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8WEF4aXMgXG4gICAgICAgICAgICAgICAgICBkYXRlcz17dGhpcy5zdGF0ZS54RGF0ZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEZXNjcmlwdGlvbiBcbiAgICAgICAgICBlc3RpbWF0ZT17dGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5nc31cbiAgICAgICAgICBhY3R1YWw9e3RoaXMucHJvcHMuYWN0dWFsRWFybmluZ3N9XG4gICAgICAgIC8+IFxuICAgICAgPC9zZWN0aW9uPlxuICAgICkgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWFybmluZ3M7Il19