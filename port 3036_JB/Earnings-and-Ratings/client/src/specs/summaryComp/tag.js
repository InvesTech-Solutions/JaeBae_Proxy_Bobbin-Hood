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

var Tag = function (_Component) {
  _inherits(Tag, _Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));

    _this.state = {
      percent: '',
      total: '',
      trigger: false
    };
    return _this;
  }

  _createClass(Tag, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ trigger: false });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var total = this.props.total;
      var percent = this.props.percent;
      if (this.state.trigger === false && total !== null && percent !== null) {
        this.setState({ percent: percent + '%', total: 'of ' + total + ' ratings', trigger: true });
      }
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: _stylesMin2.default.tagContainer },
        _react2.default.createElement(
          'div',
          { id: _stylesMin2.default.tagCircle, className: _stylesMin2.default.circleBase },
          _react2.default.createElement(
            'h2',
            { className: _stylesMin2.default.tagContentHead },
            _react2.default.createElement(
              'svg',
              { width: '20', height: '20', viewBox: '0 0 20 20', id: _stylesMin2.default.tagSvg },
              _react2.default.createElement(
                'g',
                { fill: '#4fc189', 'fill-rule': 'evenodd', transform: 'translate(-4 -4)' },
                _react2.default.createElement('path', { id: 'tag-a', d: 'M20.99975,8 C20.44775,8 19.99975,7.552 19.99975,7 C19.99975,6.448 20.44775,6 20.99975,6 C21.55175,6 21.99975,6.448 21.99975,7 C21.99975,7.552 21.55175,8 20.99975,8 M21.99975,4 L14.82775,4 C14.29775,4 13.78875,4.21 13.41375,4.585 L4.58575,13.414 C3.80475,14.195 3.80475,15.461 4.58575,16.242 L11.75675,23.414 C12.53775,24.195 13.80475,24.195 14.58575,23.414 L23.41375,14.586 C23.78875,14.211 23.99975,13.702 23.99975,13.172 L23.99975,6 C23.99975,4.896 23.10375,4 21.99975,4' })
              )
            ),
            '\u2009',
            this.state.percent
          ),
          _react2.default.createElement(
            'p',
            { className: _stylesMin2.default.tagContentPara },
            this.state.total
          )
        )
      );
    }
  }]);

  return Tag;
}(_react.Component);

exports.default = Tag;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvdGFnLmpzeCJdLCJuYW1lcyI6WyJUYWciLCJwcm9wcyIsInN0YXRlIiwicGVyY2VudCIsInRvdGFsIiwidHJpZ2dlciIsInNldFN0YXRlIiwic3R5bGVzIiwidGFnQ29udGFpbmVyIiwidGFnQ2lyY2xlIiwiY2lyY2xlQmFzZSIsInRhZ0NvbnRlbnRIZWFkIiwidGFnU3ZnIiwidGFnQ29udGVudFBhcmEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsRUFERTtBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZUFBUztBQUhFLEtBQWI7QUFGaUI7QUFPbEI7Ozs7d0NBRW9CO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYyxFQUFFRCxTQUFTLEtBQVgsRUFBZDtBQUNEOzs7eUNBRXFCO0FBQ3BCLFVBQUlELFFBQVEsS0FBS0gsS0FBTCxDQUFXRyxLQUF2QjtBQUNBLFVBQUlELFVBQVUsS0FBS0YsS0FBTCxDQUFXRSxPQUF6QjtBQUNBLFVBQUksS0FBS0QsS0FBTCxDQUFXRyxPQUFYLEtBQXVCLEtBQXZCLElBQWdDRCxVQUFVLElBQTFDLElBQWtERCxZQUFZLElBQWxFLEVBQXdFO0FBQ3RFLGFBQUtHLFFBQUwsQ0FBYyxFQUFFSCxTQUFVQSxVQUFVLEdBQXRCLEVBQTJCQyxlQUFjQSxLQUFkLGFBQTNCLEVBQTBEQyxTQUFTLElBQW5FLEVBQWQ7QUFDRDtBQUNGOztBQUVEOzs7OzZCQUNVO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxJQUFJRSxvQkFBT0MsWUFBaEI7QUFDRTtBQUFBO0FBQUEsWUFBSyxJQUFJRCxvQkFBT0UsU0FBaEIsRUFBMkIsV0FBV0Ysb0JBQU9HLFVBQTdDO0FBQ0U7QUFBQTtBQUFBLGNBQUksV0FBV0gsb0JBQU9JLGNBQXRCO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLE9BQU0sSUFBWCxFQUFnQixRQUFPLElBQXZCLEVBQTRCLFNBQVEsV0FBcEMsRUFBZ0QsSUFBSUosb0JBQU9LLE1BQTNEO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQUssU0FBUixFQUFrQixhQUFVLFNBQTVCLEVBQXNDLFdBQVUsa0JBQWhEO0FBQ0Usd0RBQU0sSUFBRyxPQUFULEVBQWlCLEdBQUUsMGRBQW5CO0FBREY7QUFERixhQURGO0FBQUE7QUFPRyxpQkFBS1YsS0FBTCxDQUFXQztBQVBkLFdBREY7QUFVRTtBQUFBO0FBQUEsY0FBRyxXQUFXSSxvQkFBT00sY0FBckI7QUFDRyxpQkFBS1gsS0FBTCxDQUFXRTtBQURkO0FBVkY7QUFERixPQURGO0FBa0JEOzs7O0VBMUNlVSxnQjs7a0JBNkNIZCxHIiwiZmlsZSI6InRhZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vLi4vZGlzdC9idWlsZC9zdHlsZXMubWluLmNzcyc7XG5cbmNsYXNzIFRhZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwZXJjZW50OiAnJyxcbiAgICAgIHRvdGFsOiAnJyxcbiAgICAgIHRyaWdnZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdHJpZ2dlcjogZmFsc2UgfSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSAoKSB7XG4gICAgbGV0IHRvdGFsID0gdGhpcy5wcm9wcy50b3RhbDtcbiAgICBsZXQgcGVyY2VudCA9IHRoaXMucHJvcHMucGVyY2VudDtcbiAgICBpZiAodGhpcy5zdGF0ZS50cmlnZ2VyID09PSBmYWxzZSAmJiB0b3RhbCAhPT0gbnVsbCAmJiBwZXJjZW50ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgcGVyY2VudCA6IHBlcmNlbnQgKyAnJScsIHRvdGFsIDogYG9mICR7dG90YWx9IHJhdGluZ3NgLCB0cmlnZ2VyOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJlbmRlcnMgZW50aXJlIGVhcm5pbmdzIHNlY3Rpb24gd2l0aCBZQXhpcywgRGF0YVBvaW50cywgWEF4aXMsIGFuZCBEZXNjcmlwdGlvbnMgYXMgc3ViY29tcG9uZW50c1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMudGFnQ29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnRhZ0NpcmNsZX0gY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlQmFzZX0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRhZ0NvbnRlbnRIZWFkfT5cbiAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGlkPXtzdHlsZXMudGFnU3ZnfT5cbiAgICAgICAgICAgICAgPGcgZmlsbD1cIiM0ZmMxODlcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00IC00KVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGlkPVwidGFnLWFcIiBkPVwiTTIwLjk5OTc1LDggQzIwLjQ0Nzc1LDggMTkuOTk5NzUsNy41NTIgMTkuOTk5NzUsNyBDMTkuOTk5NzUsNi40NDggMjAuNDQ3NzUsNiAyMC45OTk3NSw2IEMyMS41NTE3NSw2IDIxLjk5OTc1LDYuNDQ4IDIxLjk5OTc1LDcgQzIxLjk5OTc1LDcuNTUyIDIxLjU1MTc1LDggMjAuOTk5NzUsOCBNMjEuOTk5NzUsNCBMMTQuODI3NzUsNCBDMTQuMjk3NzUsNCAxMy43ODg3NSw0LjIxIDEzLjQxMzc1LDQuNTg1IEw0LjU4NTc1LDEzLjQxNCBDMy44MDQ3NSwxNC4xOTUgMy44MDQ3NSwxNS40NjEgNC41ODU3NSwxNi4yNDIgTDExLjc1Njc1LDIzLjQxNCBDMTIuNTM3NzUsMjQuMTk1IDEzLjgwNDc1LDI0LjE5NSAxNC41ODU3NSwyMy40MTQgTDIzLjQxMzc1LDE0LjU4NiBDMjMuNzg4NzUsMTQuMjExIDIzLjk5OTc1LDEzLjcwMiAyMy45OTk3NSwxMy4xNzIgTDIzLjk5OTc1LDYgQzIzLjk5OTc1LDQuODk2IDIzLjEwMzc1LDQgMjEuOTk5NzUsNFwiPjwvcGF0aD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAmdGhpbnNwO1xuICAgICAgICAgICAge3RoaXMuc3RhdGUucGVyY2VudH1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRhZ0NvbnRlbnRQYXJhfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvdGFsfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnOyJdfQ==