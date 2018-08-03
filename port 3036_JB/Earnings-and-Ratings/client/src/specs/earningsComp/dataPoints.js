'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dataPoint = require('./dataPoint');

var _dataPoint2 = _interopRequireDefault(_dataPoint);

var _stylesMin = require('./../../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataPoints = function (_Component) {
  _inherits(DataPoints, _Component);

  function DataPoints(props) {
    _classCallCheck(this, DataPoints);

    var _this = _possibleConstructorReturn(this, (DataPoints.__proto__ || Object.getPrototypeOf(DataPoints)).call(this, props));

    _this.state = {
      estimate: [],
      actual: [],
      trigger: false
    };
    return _this;
  }

  _createClass(DataPoints, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.trigger === false) {
        this.setState({
          estimate: this.props.estimate.filter(function (element) {
            return element[0] === '$';
          }),
          actual: this.props.actual.filter(function (element) {
            return element[0] === '$';
          }),
          trigger: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'svg',
        { className: _stylesMin2.default.xs, width: '560', height: '120' },
        this.state.estimate.map(function (data, index) {
          return _react2.default.createElement(_dataPoint2.default, {
            estimatePoint: Number(data.substring(1)),
            actualPoint: Number(_this2.state.actual[index].substring(1)),
            yRange: _this2.props.yRange,
            ind: index + 1
          });
        })
      );
    }
  }]);

  return DataPoints;
}(_react.Component);

exports.default = DataPoints;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2RhdGFQb2ludHMuanN4Il0sIm5hbWVzIjpbIkRhdGFQb2ludHMiLCJwcm9wcyIsInN0YXRlIiwiZXN0aW1hdGUiLCJhY3R1YWwiLCJ0cmlnZ2VyIiwic2V0U3RhdGUiLCJmaWx0ZXIiLCJlbGVtZW50Iiwic3R5bGVzIiwieHMiLCJtYXAiLCJkYXRhIiwiaW5kZXgiLCJOdW1iZXIiLCJzdWJzdHJpbmciLCJ5UmFuZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFXLEVBREE7QUFFWEMsY0FBUyxFQUZFO0FBR1hDLGVBQVU7QUFIQyxLQUFiO0FBRmlCO0FBT2xCOzs7O3lDQUVxQjtBQUNwQixVQUFJLEtBQUtILEtBQUwsQ0FBV0csT0FBWCxLQUF1QixLQUEzQixFQUFrQztBQUNoQyxhQUFLQyxRQUFMLENBQWM7QUFDWkgsb0JBQVcsS0FBS0YsS0FBTCxDQUFXRSxRQUFYLENBQW9CSSxNQUFwQixDQUEyQixVQUFDQyxPQUFELEVBQWE7QUFBQyxtQkFBT0EsUUFBUSxDQUFSLE1BQWUsR0FBdEI7QUFBMkIsV0FBcEUsQ0FEQztBQUVaSixrQkFBUyxLQUFLSCxLQUFMLENBQVdHLE1BQVgsQ0FBa0JHLE1BQWxCLENBQXlCLFVBQUNDLE9BQUQsRUFBYTtBQUFDLG1CQUFPQSxRQUFRLENBQVIsTUFBZSxHQUF0QjtBQUEyQixXQUFsRSxDQUZHO0FBR1pILG1CQUFVO0FBSEUsU0FBZDtBQUtEO0FBQ0Y7Ozs2QkFFUztBQUFBOztBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0ksb0JBQU9DLEVBQXZCLEVBQTJCLE9BQU0sS0FBakMsRUFBdUMsUUFBTyxLQUE5QztBQUNHLGFBQUtSLEtBQUwsQ0FBV0MsUUFBWCxDQUFvQlEsR0FBcEIsQ0FBd0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3hDLGlCQUNFLDhCQUFDLG1CQUFEO0FBQ0UsMkJBQWVDLE9BQU9GLEtBQUtHLFNBQUwsQ0FBZSxDQUFmLENBQVAsQ0FEakI7QUFFRSx5QkFBYUQsT0FBTyxPQUFLWixLQUFMLENBQVdFLE1BQVgsQ0FBa0JTLEtBQWxCLEVBQXlCRSxTQUF6QixDQUFtQyxDQUFuQyxDQUFQLENBRmY7QUFHRSxvQkFBUSxPQUFLZCxLQUFMLENBQVdlLE1BSHJCO0FBSUUsaUJBQUtILFFBQVE7QUFKZixZQURGO0FBUUQsU0FUQTtBQURILE9BREY7QUFjRDs7OztFQW5Dc0JJLGdCOztrQkFzQ1ZqQixVIiwiZmlsZSI6ImRhdGFQb2ludHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERhdGFQb2ludCBmcm9tICcuL2RhdGFQb2ludCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vLi4vZGlzdC9idWlsZC9zdHlsZXMubWluLmNzcyc7XG5cbmNsYXNzIERhdGFQb2ludHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXN0aW1hdGUgOiBbXSxcbiAgICAgIGFjdHVhbCA6IFtdLFxuICAgICAgdHJpZ2dlciA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50cmlnZ2VyID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVzdGltYXRlIDogdGhpcy5wcm9wcy5lc3RpbWF0ZS5maWx0ZXIoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO30pLFxuICAgICAgICBhY3R1YWwgOiB0aGlzLnByb3BzLmFjdHVhbC5maWx0ZXIoKGVsZW1lbnQpID0+IHtyZXR1cm4gZWxlbWVudFswXSA9PT0gJyQnO30pLCBcbiAgICAgICAgdHJpZ2dlciA6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzdmcgY2xhc3NOYW1lPXtzdHlsZXMueHN9IHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMTIwXCI+XG4gICAgICAgIHt0aGlzLnN0YXRlLmVzdGltYXRlLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERhdGFQb2ludFxuICAgICAgICAgICAgICBlc3RpbWF0ZVBvaW50PXtOdW1iZXIoZGF0YS5zdWJzdHJpbmcoMSkpfVxuICAgICAgICAgICAgICBhY3R1YWxQb2ludD17TnVtYmVyKHRoaXMuc3RhdGUuYWN0dWFsW2luZGV4XS5zdWJzdHJpbmcoMSkpfVxuICAgICAgICAgICAgICB5UmFuZ2U9e3RoaXMucHJvcHMueVJhbmdlfVxuICAgICAgICAgICAgICBpbmQ9e2luZGV4ICsgMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3N2Zz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFQb2ludHM7Il19