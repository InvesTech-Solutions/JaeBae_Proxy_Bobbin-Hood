'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tag = require('./tag');

var _tag2 = _interopRequireDefault(_tag);

var _percentBars = require('./percentBars');

var _percentBars2 = _interopRequireDefault(_percentBars);

var _summaryBoxes = require('./summaryBoxes');

var _summaryBoxes2 = _interopRequireDefault(_summaryBoxes);

var _stylesMin = require('./../../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Summary = function (_Component) {
  _inherits(Summary, _Component);

  function Summary(props) {
    _classCallCheck(this, Summary);

    var _this = _possibleConstructorReturn(this, (Summary.__proto__ || Object.getPrototypeOf(Summary)).call(this, props));

    _this.state = {
      buyPerc: null,
      totalRaters: null,
      trigger: false
    };
    return _this;
  }

  _createClass(Summary, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var buyCount = 0;
      this.props.ratings.forEach(function (element) {
        if (element === 'Buy') {
          buyCount++;
        };
      });
      var raterCount = this.props.ratings.length;
      if (!this.state.trigger) {
        this.setState({
          buyPerc: Math.round(buyCount / raterCount * 100),
          totalRaters: raterCount,
          trigger: true
        });
      }
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'summaryComponent' },
        _react2.default.createElement(
          'header',
          { className: 'tagHead' },
          'Analyst Ratings'
        ),
        _react2.default.createElement(_tag2.default, {
          percent: this.state.buyPerc,
          total: this.state.totalRaters
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_percentBars2.default, {
            ratings: this.props.ratings
          }),
          _react2.default.createElement(_summaryBoxes2.default, {
            summaries: [this.props.buySummary, this.props.sellSummary]
          })
        )
      );
    }
  }]);

  return Summary;
}(_react.Component);

exports.default = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeS5qc3giXSwibmFtZXMiOlsiU3VtbWFyeSIsInByb3BzIiwic3RhdGUiLCJidXlQZXJjIiwidG90YWxSYXRlcnMiLCJ0cmlnZ2VyIiwiYnV5Q291bnQiLCJyYXRpbmdzIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJyYXRlckNvdW50IiwibGVuZ3RoIiwic2V0U3RhdGUiLCJNYXRoIiwicm91bmQiLCJidXlTdW1tYXJ5Iiwic2VsbFN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFVLElBREM7QUFFWEMsbUJBQWMsSUFGSDtBQUdYQyxlQUFVO0FBSEMsS0FBYjtBQUZpQjtBQU9sQjs7Ozt5Q0FFcUI7QUFDcEIsVUFBSUMsV0FBVyxDQUFmO0FBQ0EsV0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CQyxPQUFuQixDQUEyQixVQUFDQyxPQUFELEVBQWE7QUFDdEMsWUFBSUEsWUFBWSxLQUFoQixFQUF1QjtBQUNyQkg7QUFDRDtBQUNGLE9BSkQ7QUFLQSxVQUFJSSxhQUFhLEtBQUtULEtBQUwsQ0FBV00sT0FBWCxDQUFtQkksTUFBcEM7QUFDQSxVQUFJLENBQUMsS0FBS1QsS0FBTCxDQUFXRyxPQUFoQixFQUF5QjtBQUN2QixhQUFLTyxRQUFMLENBQWM7QUFDWlQsbUJBQVVVLEtBQUtDLEtBQUwsQ0FBWVIsV0FBV0ksVUFBWixHQUEwQixHQUFyQyxDQURFO0FBRVpOLHVCQUFjTSxVQUZGO0FBR1pMLG1CQUFVO0FBSEUsU0FBZDtBQUtEO0FBQ0Y7O0FBRUQ7Ozs7NkJBQ1U7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFTLElBQUcsa0JBQVo7QUFDRTtBQUFBO0FBQUEsWUFBUSxXQUFVLFNBQWxCO0FBQUE7QUFBQSxTQURGO0FBSUUsc0NBQUMsYUFBRDtBQUNFLG1CQUFTLEtBQUtILEtBQUwsQ0FBV0MsT0FEdEI7QUFFRSxpQkFBTyxLQUFLRCxLQUFMLENBQVdFO0FBRnBCLFVBSkY7QUFRRTtBQUFBO0FBQUE7QUFDRSx3Q0FBQyxxQkFBRDtBQUNFLHFCQUFTLEtBQUtILEtBQUwsQ0FBV007QUFEdEIsWUFERjtBQUlFLHdDQUFDLHNCQUFEO0FBQ0UsdUJBQVcsQ0FBQyxLQUFLTixLQUFMLENBQVdjLFVBQVosRUFBd0IsS0FBS2QsS0FBTCxDQUFXZSxXQUFuQztBQURiO0FBSkY7QUFSRixPQURGO0FBbUJEOzs7O0VBaERtQkMsZ0I7O2tCQW1EUGpCLE8iLCJmaWxlIjoic3VtbWFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGFnIGZyb20gJy4vdGFnJztcbmltcG9ydCBQZXJjZW50QmFycyBmcm9tICcuL3BlcmNlbnRCYXJzJztcbmltcG9ydCBTdW1tYXJ5Qm94ZXMgZnJvbSAnLi9zdW1tYXJ5Qm94ZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uLy4uL2Rpc3QvYnVpbGQvc3R5bGVzLm1pbi5jc3MnO1xuXG5jbGFzcyBTdW1tYXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJ1eVBlcmMgOiBudWxsLFxuICAgICAgdG90YWxSYXRlcnMgOiBudWxsLFxuICAgICAgdHJpZ2dlciA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlICgpIHtcbiAgICBsZXQgYnV5Q291bnQgPSAwO1xuICAgIHRoaXMucHJvcHMucmF0aW5ncy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gJ0J1eScpIHtcbiAgICAgICAgYnV5Q291bnQrK1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBsZXQgcmF0ZXJDb3VudCA9IHRoaXMucHJvcHMucmF0aW5ncy5sZW5ndGg7XG4gICAgaWYgKCF0aGlzLnN0YXRlLnRyaWdnZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBcbiAgICAgICAgYnV5UGVyYyA6IE1hdGgucm91bmQoKGJ1eUNvdW50IC8gcmF0ZXJDb3VudCkgKiAxMDApLFxuICAgICAgICB0b3RhbFJhdGVycyA6IHJhdGVyQ291bnQsXG4gICAgICAgIHRyaWdnZXIgOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyByZW5kZXJzIGVudGlyZSBlYXJuaW5ncyBzZWN0aW9uIHdpdGggWUF4aXMsIERhdGFQb2ludHMsIFhBeGlzLCBhbmQgRGVzY3JpcHRpb25zIGFzIHN1YmNvbXBvbmVudHNcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gaWQ9XCJzdW1tYXJ5Q29tcG9uZW50XCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwidGFnSGVhZFwiPlxuICAgICAgICAgIEFuYWx5c3QgUmF0aW5nc1xuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPFRhZ1xuICAgICAgICAgIHBlcmNlbnQ9e3RoaXMuc3RhdGUuYnV5UGVyY31cbiAgICAgICAgICB0b3RhbD17dGhpcy5zdGF0ZS50b3RhbFJhdGVyc31cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8UGVyY2VudEJhcnNcbiAgICAgICAgICAgIHJhdGluZ3M9e3RoaXMucHJvcHMucmF0aW5nc31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTdW1tYXJ5Qm94ZXNcbiAgICAgICAgICAgIHN1bW1hcmllcz17W3RoaXMucHJvcHMuYnV5U3VtbWFyeSwgdGhpcy5wcm9wcy5zZWxsU3VtbWFyeV19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnk7Il19