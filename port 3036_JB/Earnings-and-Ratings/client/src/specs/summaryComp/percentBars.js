'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _percentBar = require('./percentBar');

var _percentBar2 = _interopRequireDefault(_percentBar);

var _stylesMin = require('./../../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PercentBars = function (_Component) {
  _inherits(PercentBars, _Component);

  function PercentBars(props) {
    _classCallCheck(this, PercentBars);

    var _this = _possibleConstructorReturn(this, (PercentBars.__proto__ || Object.getPrototypeOf(PercentBars)).call(this, props));

    _this.state = {
      suggestions: ['Buy', 'Hold', 'Sell'],
      counts: [],
      trigger: false
    };
    return _this;
  }

  _createClass(PercentBars, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var buyCount = this.props.ratings.reduce(function (accum, element) {
        if (element === 'Buy') {
          return accum + 1;
        }
        return accum;
      }, 0);

      var holdCount = this.props.ratings.reduce(function (accum, element) {
        if (element === 'Hold') {
          return accum + 1;
        }
        return accum;
      }, 0);

      var sellCount = this.props.ratings.reduce(function (accum, element) {
        if (element === 'Sell') {
          return accum + 1;
        }
        return accum;
      }, 0);

      var length = this.props.ratings.length;

      if (this.state.trigger === false) {
        this.setState({ counts: [buyCount, holdCount, sellCount], total: length, trigger: true });
      };
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: _stylesMin2.default.bars },
        this.state.suggestions.map(function (suggestion, index) {
          return _react2.default.createElement(_percentBar2.default, {
            suggestion: suggestion,
            count: _this2.state.counts[index],
            total: _this2.state.total
          });
        })
      );
    }
  }]);

  return PercentBars;
}(_react.Component);

exports.default = PercentBars;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvcGVyY2VudEJhcnMuanN4Il0sIm5hbWVzIjpbIlBlcmNlbnRCYXJzIiwicHJvcHMiLCJzdGF0ZSIsInN1Z2dlc3Rpb25zIiwiY291bnRzIiwidHJpZ2dlciIsImJ1eUNvdW50IiwicmF0aW5ncyIsInJlZHVjZSIsImFjY3VtIiwiZWxlbWVudCIsImhvbGRDb3VudCIsInNlbGxDb3VudCIsImxlbmd0aCIsInNldFN0YXRlIiwidG90YWwiLCJzdHlsZXMiLCJiYXJzIiwibWFwIiwic3VnZ2VzdGlvbiIsImluZGV4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLFc7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE1BQWhCLENBREY7QUFFWEMsY0FBUSxFQUZHO0FBR1hDLGVBQVM7QUFIRSxLQUFiO0FBRmlCO0FBT2xCOzs7O3lDQUVxQjtBQUNwQixVQUFJQyxXQUFXLEtBQUtMLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQzNELFlBQUlBLFlBQVksS0FBaEIsRUFBdUI7QUFDckIsaUJBQU9ELFFBQVEsQ0FBZjtBQUNEO0FBQ0QsZUFBT0EsS0FBUDtBQUNELE9BTGMsRUFLWixDQUxZLENBQWY7O0FBT0EsVUFBSUUsWUFBWSxLQUFLVixLQUFMLENBQVdNLE9BQVgsQ0FBbUJDLE1BQW5CLENBQTBCLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUM1RCxZQUFJQSxZQUFZLE1BQWhCLEVBQXdCO0FBQ3RCLGlCQUFPRCxRQUFRLENBQWY7QUFDRDtBQUNELGVBQU9BLEtBQVA7QUFDRCxPQUxlLEVBS2IsQ0FMYSxDQUFoQjs7QUFPQSxVQUFJRyxZQUFZLEtBQUtYLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkMsTUFBbkIsQ0FBMEIsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQzVELFlBQUlBLFlBQVksTUFBaEIsRUFBd0I7QUFDdEIsaUJBQU9ELFFBQVEsQ0FBZjtBQUNEO0FBQ0QsZUFBT0EsS0FBUDtBQUNELE9BTGUsRUFLYixDQUxhLENBQWhCOztBQU9BLFVBQUlJLFNBQVMsS0FBS1osS0FBTCxDQUFXTSxPQUFYLENBQW1CTSxNQUFoQzs7QUFFQSxVQUFJLEtBQUtYLEtBQUwsQ0FBV0csT0FBWCxLQUF1QixLQUEzQixFQUFrQztBQUNoQyxhQUFLUyxRQUFMLENBQWMsRUFBRVYsUUFBUSxDQUFDRSxRQUFELEVBQVdLLFNBQVgsRUFBc0JDLFNBQXRCLENBQVYsRUFBNENHLE9BQU9GLE1BQW5ELEVBQTJEUixTQUFTLElBQXBFLEVBQWQ7QUFDRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQUE7O0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXVyxvQkFBT0MsSUFBdkI7QUFDRyxhQUFLZixLQUFMLENBQVdDLFdBQVgsQ0FBdUJlLEdBQXZCLENBQTJCLFVBQUNDLFVBQUQsRUFBYUMsS0FBYixFQUF1QjtBQUNqRCxpQkFDRSw4QkFBQyxvQkFBRDtBQUNFLHdCQUFZRCxVQURkO0FBRUUsbUJBQU8sT0FBS2pCLEtBQUwsQ0FBV0UsTUFBWCxDQUFrQmdCLEtBQWxCLENBRlQ7QUFHRSxtQkFBTyxPQUFLbEIsS0FBTCxDQUFXYTtBQUhwQixZQURGO0FBT0QsU0FSQTtBQURILE9BREY7QUFhRDs7OztFQXREdUJNLGdCOztrQkF5RFhyQixXIiwiZmlsZSI6InBlcmNlbnRCYXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQZXJjZW50QmFyIGZyb20gJy4vcGVyY2VudEJhcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vLi4vZGlzdC9idWlsZC9zdHlsZXMubWluLmNzcyc7XG5cbmNsYXNzIFBlcmNlbnRCYXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN1Z2dlc3Rpb25zOiBbJ0J1eScsICdIb2xkJywgJ1NlbGwnXSxcbiAgICAgIGNvdW50czogW10sXG4gICAgICB0cmlnZ2VyOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgbGV0IGJ1eUNvdW50ID0gdGhpcy5wcm9wcy5yYXRpbmdzLnJlZHVjZSgoYWNjdW0sIGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSAnQnV5Jykge1xuICAgICAgICByZXR1cm4gYWNjdW0gKyAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtO1xuICAgIH0sIDApO1xuXG4gICAgbGV0IGhvbGRDb3VudCA9IHRoaXMucHJvcHMucmF0aW5ncy5yZWR1Y2UoKGFjY3VtLCBlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudCA9PT0gJ0hvbGQnKSB7XG4gICAgICAgIHJldHVybiBhY2N1bSArIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjdW07XG4gICAgfSwgMCk7XG5cbiAgICBsZXQgc2VsbENvdW50ID0gdGhpcy5wcm9wcy5yYXRpbmdzLnJlZHVjZSgoYWNjdW0sIGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ID09PSAnU2VsbCcpIHtcbiAgICAgICAgcmV0dXJuIGFjY3VtICsgMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2N1bTtcbiAgICB9LCAwKTtcblxuICAgIGxldCBsZW5ndGggPSB0aGlzLnByb3BzLnJhdGluZ3MubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUudHJpZ2dlciA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb3VudHM6IFtidXlDb3VudCwgaG9sZENvdW50LCBzZWxsQ291bnRdLCB0b3RhbDogbGVuZ3RoLCB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH07XG4gIH1cblxuICAvLyByZW5kZXJzIGVudGlyZSBlYXJuaW5ncyBzZWN0aW9uIHdpdGggWUF4aXMsIERhdGFQb2ludHMsIFhBeGlzLCBhbmQgRGVzY3JpcHRpb25zIGFzIHN1YmNvbXBvbmVudHNcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYXJzfT5cbiAgICAgICAge3RoaXMuc3RhdGUuc3VnZ2VzdGlvbnMubWFwKChzdWdnZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGVyY2VudEJhclxuICAgICAgICAgICAgICBzdWdnZXN0aW9uPXtzdWdnZXN0aW9ufVxuICAgICAgICAgICAgICBjb3VudD17dGhpcy5zdGF0ZS5jb3VudHNbaW5kZXhdfVxuICAgICAgICAgICAgICB0b3RhbD17dGhpcy5zdGF0ZS50b3RhbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyY2VudEJhcnM7Il19