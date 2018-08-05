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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2Vhcm5pbmdzLmpzeCJdLCJuYW1lcyI6WyJFYXJuaW5ncyIsInByb3BzIiwic3RhdGUiLCJ5UmFuZ2UiLCJ4RGF0ZXMiLCJjb250cm9sIiwiZmlsdGVyZWQiLCJlc3RpbWF0ZWRFYXJuaW5ncyIsImNvbmNhdCIsImFjdHVhbEVhcm5pbmdzIiwiZmlsdGVyIiwiZWxlbWVudCIsImRhdGVzIiwiaW5OdW1iZXJzIiwibWFwIiwiTnVtYmVyIiwic3Vic3RyaW5nIiwibWluIiwiTWF0aCIsIm1heCIsImludGVydmFsIiwieUFycmF5IiwiU3RyaW5nIiwibGVuZ3RoIiwiaW5kZXhPZiIsInNldFN0YXRlIiwic3R5bGVzIiwiZWFybmluZ3NDb21wb25lbnQiLCJoZWFkIiwiY2hhcnREaXYiLCJjaGFydENvbnRhaW5lciIsImlubmVyQ2hhcnRDb250YWluZXIiLCJheGVzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsUTs7O0FBQ0osb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVMsRUFERTtBQUVYQyxjQUFTLEVBRkU7QUFHWEMsZUFBVTtBQUhDLEtBQWI7QUFGaUI7QUFPbEI7Ozs7eUNBRXFCO0FBQ3BCO0FBQ0EsVUFBSUMsV0FBVyxLQUFLTCxLQUFMLENBQVdNLGlCQUFYLENBQTZCQyxNQUE3QixDQUFvQyxLQUFLUCxLQUFMLENBQVdRLGNBQS9DLEVBQStEQyxNQUEvRCxDQUFzRSxVQUFDQyxPQUFELEVBQWE7QUFDaEcsZUFBT0EsUUFBUSxDQUFSLE1BQWUsR0FBdEI7QUFDRCxPQUZjLENBQWY7QUFHQSxVQUFJQyxRQUFRLEtBQUtYLEtBQUwsQ0FBV00saUJBQVgsQ0FBNkJHLE1BQTdCLENBQW9DLFVBQUNDLE9BQUQsRUFBYTtBQUMzRCxlQUFPQSxRQUFRLENBQVIsTUFBZSxHQUF0QjtBQUNELE9BRlcsQ0FBWjtBQUdBLFVBQUlFLFlBQVlQLFNBQVNRLEdBQVQsQ0FBYSxVQUFDSCxPQUFELEVBQWE7QUFDeEMsZUFBT0ksT0FBT0osUUFBUUssU0FBUixDQUFrQixDQUFsQixDQUFQLENBQVA7QUFDRCxPQUZlLENBQWhCO0FBR0EsVUFBSUMsTUFBTUMsS0FBS0QsR0FBTCxnQ0FBWUosU0FBWixFQUFWO0FBQ0EsVUFBSU0sTUFBTUQsS0FBS0MsR0FBTCxnQ0FBWU4sU0FBWixFQUFWO0FBQ0EsVUFBSU8sV0FBVyxDQUFDRCxNQUFNRixHQUFQLElBQWMsQ0FBN0I7QUFDQSxVQUFJSSxTQUFTLENBQUNDLE9BQU9MLEdBQVAsQ0FBRCxFQUFjSyxPQUFPTCxNQUFNRyxRQUFiLENBQWQsRUFBc0NFLE9BQU9MLE1BQU0sSUFBSUcsUUFBakIsQ0FBdEMsRUFBa0VFLE9BQU9ILEdBQVAsQ0FBbEUsQ0FBYjtBQUNBRSxlQUFTQSxPQUFPUCxHQUFQLENBQVcsVUFBQ0gsT0FBRCxFQUFhO0FBQy9CLFlBQUdBLFFBQVFBLFFBQVFZLE1BQVIsR0FBaUIsQ0FBekIsTUFBZ0MsR0FBbkMsRUFBd0M7QUFDdEMsaUJBQU8sTUFBTVosT0FBYjtBQUNEO0FBQ0QsWUFBSUEsUUFBUUEsUUFBUVksTUFBUixHQUFpQixDQUF6QixNQUFnQyxHQUFwQyxFQUF5QztBQUN2QyxpQkFBTyxNQUFNWixPQUFOLEdBQWdCLEdBQXZCO0FBQ0Q7QUFDRCxZQUFJQSxRQUFRYSxPQUFSLENBQWdCLEdBQWhCLE1BQXlCLENBQUMsQ0FBOUIsRUFBaUM7QUFDL0IsaUJBQU8sTUFBTWIsUUFBUUssU0FBUixDQUFrQixDQUFsQixFQUFxQkwsUUFBUWEsT0FBUixDQUFnQixHQUFoQixJQUF1QixDQUE1QyxDQUFiO0FBQ0Q7QUFDRCxlQUFPLE1BQU1iLE9BQU4sR0FBZ0IsS0FBdkI7QUFDRCxPQVhRLENBQVQ7QUFZQTtBQUNBLFVBQUcsS0FBS1QsS0FBTCxDQUFXRyxPQUFYLEtBQXVCLEtBQTFCLEVBQWlDO0FBQy9CLGFBQUtvQixRQUFMLENBQWMsRUFBQ3RCLFFBQVNrQixNQUFWLEVBQWtCakIsUUFBU1EsS0FBM0IsRUFBa0NQLFNBQVUsSUFBNUMsRUFBZDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFTLElBQUlxQixvQkFBT0MsaUJBQXBCO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBV0Qsb0JBQU9FLElBQTFCO0FBQUE7QUFBQSxTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBV0Ysb0JBQU9HLFFBQXZCO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBV0gsb0JBQU9JLGNBQXZCO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVdKLG9CQUFPSyxtQkFBdkI7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBV0wsb0JBQU9NLElBQXZCO0FBQ0UsOENBQUMsZUFBRDtBQUNFLDBCQUFRLEtBQUs5QixLQUFMLENBQVdDO0FBRHJCLGtCQURGO0FBSUUsOENBQUMsb0JBQUQ7QUFDRSw0QkFBVSxLQUFLRixLQUFMLENBQVdNLGlCQUR2QjtBQUVFLDBCQUFRLEtBQUtOLEtBQUwsQ0FBV1EsY0FGckI7QUFHRSwwQkFBUSxLQUFLUCxLQUFMLENBQVdDO0FBSHJCLGtCQUpGO0FBU0UsOENBQUMsZUFBRDtBQUNFLHlCQUFPLEtBQUtELEtBQUwsQ0FBV0U7QUFEcEI7QUFURjtBQURGO0FBREY7QUFERixTQUpGO0FBdUJFLHNDQUFDLHFCQUFEO0FBQ0Usb0JBQVUsS0FBS0gsS0FBTCxDQUFXTSxpQkFEdkI7QUFFRSxrQkFBUSxLQUFLTixLQUFMLENBQVdRO0FBRnJCO0FBdkJGLE9BREY7QUE4QkQ7Ozs7RUEzRW9Cd0IsZ0I7O2tCQThFUmpDLFEiLCJmaWxlIjoiZWFybmluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFhBeGlzIGZyb20gJy4veEF4aXMnO1xuaW1wb3J0IFlBeGlzIGZyb20gJy4veUF4aXMnO1xuaW1wb3J0IERhdGFQb2ludHMgZnJvbSAnLi9kYXRhUG9pbnRzJztcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL2Rlc2NyaXB0aW9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi8uLi9kaXN0L2J1aWxkL3N0eWxlcy5taW4uY3NzJztcblxuY2xhc3MgRWFybmluZ3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgeVJhbmdlIDogW10sXG4gICAgICB4RGF0ZXMgOiBbXSxcbiAgICAgIGNvbnRyb2wgOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgLy8gcHJvY2VzcyBkYXRhIHRvIGNyZWF0ZSBhcnJheXMgdXNlZCBmb3IgeS1heGlzIChtaW4gdG8gbWF4LCBsZW5ndGggb2YgNCkgYW5kIHgtYXhpcyAocXVhcnRlcmxpZXMpXG4gICAgbGV0IGZpbHRlcmVkID0gdGhpcy5wcm9wcy5lc3RpbWF0ZWRFYXJuaW5ncy5jb25jYXQodGhpcy5wcm9wcy5hY3R1YWxFYXJuaW5ncykuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO1xuICAgIH0pO1xuICAgIGxldCBkYXRlcyA9IHRoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3MuZmlsdGVyKChlbGVtZW50KSA9PiB7XG4gICAgICByZXR1cm4gZWxlbWVudFswXSAhPT0gJyQnO1xuICAgIH0pO1xuICAgIGxldCBpbk51bWJlcnMgPSBmaWx0ZXJlZC5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBOdW1iZXIoZWxlbWVudC5zdWJzdHJpbmcoMSkpO1xuICAgIH0pO1xuICAgIGxldCBtaW4gPSBNYXRoLm1pbiguLi5pbk51bWJlcnMpO1xuICAgIGxldCBtYXggPSBNYXRoLm1heCguLi5pbk51bWJlcnMpO1xuICAgIGxldCBpbnRlcnZhbCA9IChtYXggLSBtaW4pIC8gMztcbiAgICBsZXQgeUFycmF5ID0gW1N0cmluZyhtaW4pLCBTdHJpbmcobWluICsgaW50ZXJ2YWwpLCBTdHJpbmcobWluICsgMiAqIGludGVydmFsKSwgU3RyaW5nKG1heCldO1xuICAgIHlBcnJheSA9IHlBcnJheS5tYXAoKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmKGVsZW1lbnRbZWxlbWVudC5sZW5ndGggLSAzXSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50O1xuICAgICAgfSBcbiAgICAgIGlmIChlbGVtZW50W2VsZW1lbnQubGVuZ3RoIC0gMl0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gJyQnICsgZWxlbWVudCArICcwJztcbiAgICAgIH07XG4gICAgICBpZiAoZWxlbWVudC5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiAnJCcgKyBlbGVtZW50LnN1YnN0cmluZygwLCBlbGVtZW50LmluZGV4T2YoJy4nKSArIDMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICckJyArIGVsZW1lbnQgKyAnLjAwJ1xuICAgIH0pO1xuICAgIC8vIHNldCBhIGNvbnRyb2xsZXIgdG8gcHJldmVudCBpbmZpbml0ZSBsb29waW5nIG9mIHNldFN0YXRlXG4gICAgaWYodGhpcy5zdGF0ZS5jb250cm9sID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7eVJhbmdlIDogeUFycmF5LCB4RGF0ZXMgOiBkYXRlcywgY29udHJvbCA6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICAvLyByZW5kZXJzIGVudGlyZSBlYXJuaW5ncyBzZWN0aW9uIHdpdGggWUF4aXMsIERhdGFQb2ludHMsIFhBeGlzLCBhbmQgRGVzY3JpcHRpb25zIGFzIHN1YmNvbXBvbmVudHNcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gaWQ9e3N0eWxlcy5lYXJuaW5nc0NvbXBvbmVudH0+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XG4gICAgICAgIEVhcm5pbmdzXG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0RGl2fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXJ0Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJDaGFydENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXhlc30+XG4gICAgICAgICAgICAgICAgPFlBeGlzIFxuICAgICAgICAgICAgICAgICAgeVJhbmdlPXt0aGlzLnN0YXRlLnlSYW5nZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxEYXRhUG9pbnRzIFxuICAgICAgICAgICAgICAgICAgZXN0aW1hdGU9e3RoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICAgICAgICAgICAgICBhY3R1YWw9e3RoaXMucHJvcHMuYWN0dWFsRWFybmluZ3N9XG4gICAgICAgICAgICAgICAgICB5UmFuZ2U9e3RoaXMuc3RhdGUueVJhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFhBeGlzIFxuICAgICAgICAgICAgICAgICAgZGF0ZXM9e3RoaXMuc3RhdGUueERhdGVzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGVzY3JpcHRpb24gXG4gICAgICAgICAgZXN0aW1hdGU9e3RoaXMucHJvcHMuZXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICAgICAgYWN0dWFsPXt0aGlzLnByb3BzLmFjdHVhbEVhcm5pbmdzfVxuICAgICAgICAvPiBcbiAgICAgIDwvc2VjdGlvbj5cbiAgICApIFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVhcm5pbmdzOyJdfQ==