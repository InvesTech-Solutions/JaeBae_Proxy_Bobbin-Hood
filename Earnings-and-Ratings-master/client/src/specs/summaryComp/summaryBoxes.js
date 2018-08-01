'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _summaryBox = require('./summaryBox');

var _summaryBox2 = _interopRequireDefault(_summaryBox);

var _stylesMin = require('./../../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SummaryBoxes = function (_Component) {
  _inherits(SummaryBoxes, _Component);

  function SummaryBoxes(props) {
    _classCallCheck(this, SummaryBoxes);

    return _possibleConstructorReturn(this, (SummaryBoxes.__proto__ || Object.getPrototypeOf(SummaryBoxes)).call(this, props));
  }

  _createClass(SummaryBoxes, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _stylesMin2.default.summaryBoxes },
        this.props.summaries.map(function (summary, index) {
          return _react2.default.createElement(_summaryBox2.default, {
            summary: summary,
            ind: index
          });
        })
      );
    }
  }]);

  return SummaryBoxes;
}(_react.Component);

exports.default = SummaryBoxes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeUJveGVzLmpzeCJdLCJuYW1lcyI6WyJTdW1tYXJ5Qm94ZXMiLCJwcm9wcyIsInN0eWxlcyIsInN1bW1hcnlCb3hlcyIsInN1bW1hcmllcyIsIm1hcCIsInN1bW1hcnkiLCJpbmRleCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxZOzs7QUFDSix3QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNYQSxLQURXO0FBRWxCOzs7O3lDQUVxQixDQUNyQjs7QUFFRDs7Ozs2QkFDVTtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBV0Msb0JBQU9DLFlBQXZCO0FBQ0csYUFBS0YsS0FBTCxDQUFXRyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixVQUFDQyxPQUFELEVBQVVDLEtBQVYsRUFBb0I7QUFDNUMsaUJBQ0UsOEJBQUMsb0JBQUQ7QUFDRSxxQkFBU0QsT0FEWDtBQUVFLGlCQUFLQztBQUZQLFlBREY7QUFNRCxTQVBBO0FBREgsT0FERjtBQVlEOzs7O0VBdEJ3QkMsZ0I7O2tCQXlCWlIsWSIsImZpbGUiOiJzdW1tYXJ5Qm94ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN1bW1hcnlCb3ggZnJvbSAnLi9zdW1tYXJ5Qm94JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi8uLi9kaXN0L2J1aWxkL3N0eWxlcy5taW4uY3NzJztcblxuY2xhc3MgU3VtbWFyeUJveGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICB9XG5cbiAgLy8gcmVuZGVycyBlbnRpcmUgZWFybmluZ3Mgc2VjdGlvbiB3aXRoIFlBeGlzLCBEYXRhUG9pbnRzLCBYQXhpcywgYW5kIERlc2NyaXB0aW9ucyBhcyBzdWJjb21wb25lbnRzXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3VtbWFyeUJveGVzfT5cbiAgICAgICAge3RoaXMucHJvcHMuc3VtbWFyaWVzLm1hcCgoc3VtbWFyeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4oICBcbiAgICAgICAgICAgIDxTdW1tYXJ5Qm94XG4gICAgICAgICAgICAgIHN1bW1hcnk9e3N1bW1hcnl9XG4gICAgICAgICAgICAgIGluZD17aW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VtbWFyeUJveGVzOyJdfQ==