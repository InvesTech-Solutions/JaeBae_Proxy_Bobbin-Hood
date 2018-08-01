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

var Description = function (_Component) {
  _inherits(Description, _Component);

  function Description(props) {
    _classCallCheck(this, Description);

    return _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).call(this, props));
  }

  _createClass(Description, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: _stylesMin2.default.descDiv },
        _react2.default.createElement(
          'div',
          { className: _stylesMin2.default.descEst },
          _react2.default.createElement(
            'svg',
            { width: '28', height: '28' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(14, 20)' },
              _react2.default.createElement('circle', { r: '7', fill: '#d7f7e7', className: _stylesMin2.default.descCircle })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.descText },
            'Estimated'
          ),
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.botText },
            this.props.estimate[this.props.estimate.length - 1]
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _stylesMin2.default.descAct },
          _react2.default.createElement(
            'svg',
            { width: '28', height: '28' },
            _react2.default.createElement(
              'g',
              { transform: 'translate(14, 20)' },
              _react2.default.createElement('circle', { r: '7', fill: '#2BD89E', className: _stylesMin2.default.descCircle })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.descText },
            'Actual'
          ),
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.botText },
            this.props.actual[this.props.estimate.length - 1]
          )
        )
      );
    }
  }]);

  return Description;
}(_react.Component);

exports.default = Description;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZWFybmluZ3NDb21wL2Rlc2NyaXB0aW9uLmpzeCJdLCJuYW1lcyI6WyJEZXNjcmlwdGlvbiIsInByb3BzIiwic3R5bGVzIiwiZGVzY0RpdiIsImRlc2NFc3QiLCJkZXNjQ2lyY2xlIiwiZGVzY1RleHQiLCJib3RUZXh0IiwiZXN0aW1hdGUiLCJsZW5ndGgiLCJkZXNjQWN0IiwiYWN0dWFsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFDSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHFIQUNYQSxLQURXO0FBRWxCOzs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXQyxvQkFBT0MsT0FBdkI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFXRCxvQkFBT0UsT0FBdkI7QUFDRTtBQUFBO0FBQUEsY0FBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2QjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLG1CQUFiO0FBQ0Usd0RBQVEsR0FBRSxHQUFWLEVBQWMsTUFBSyxTQUFuQixFQUE2QixXQUFXRixvQkFBT0csVUFBL0M7QUFERjtBQURGLFdBREY7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFXSCxvQkFBT0ksUUFBdkI7QUFBQTtBQUFBLFdBTkY7QUFTRTtBQUFBO0FBQUEsY0FBSyxXQUFXSixvQkFBT0ssT0FBdkI7QUFDRyxpQkFBS04sS0FBTCxDQUFXTyxRQUFYLENBQW9CLEtBQUtQLEtBQUwsQ0FBV08sUUFBWCxDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBakQ7QUFESDtBQVRGLFNBREY7QUFjRTtBQUFBO0FBQUEsWUFBSyxXQUFXUCxvQkFBT1EsT0FBdkI7QUFDRTtBQUFBO0FBQUEsY0FBSyxPQUFNLElBQVgsRUFBZ0IsUUFBTyxJQUF2QjtBQUNFO0FBQUE7QUFBQSxnQkFBRyxXQUFVLG1CQUFiO0FBQ0Usd0RBQVEsR0FBRSxHQUFWLEVBQWMsTUFBSyxTQUFuQixFQUE2QixXQUFXUixvQkFBT0csVUFBL0M7QUFERjtBQURGLFdBREY7QUFNRTtBQUFBO0FBQUEsY0FBSyxXQUFXSCxvQkFBT0ksUUFBdkI7QUFBQTtBQUFBLFdBTkY7QUFTRTtBQUFBO0FBQUEsY0FBSyxXQUFXSixvQkFBT0ssT0FBdkI7QUFDRyxpQkFBS04sS0FBTCxDQUFXVSxNQUFYLENBQWtCLEtBQUtWLEtBQUwsQ0FBV08sUUFBWCxDQUFvQkMsTUFBcEIsR0FBNkIsQ0FBL0M7QUFESDtBQVRGO0FBZEYsT0FERjtBQStCRDs7OztFQXJDdUJHLGdCOztrQkF3Q1haLFciLCJmaWxlIjoiZGVzY3JpcHRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uLy4uL2Rpc3QvYnVpbGQvc3R5bGVzLm1pbi5jc3MnO1xuXG5jbGFzcyBEZXNjcmlwdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjRGl2fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjRXN0fT5cbiAgICAgICAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0LCAyMClcIj5cbiAgICAgICAgICAgICAgPGNpcmNsZSByPVwiN1wiIGZpbGw9XCIjZDdmN2U3XCIgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY0NpcmNsZX0gLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlc2NUZXh0fT5cbiAgICAgICAgICBFc3RpbWF0ZWRcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvdFRleHR9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZXN0aW1hdGVbdGhpcy5wcm9wcy5lc3RpbWF0ZS5sZW5ndGggLSAxXX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY0FjdH0+XG4gICAgICAgICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIj5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNCwgMjApXCI+XG4gICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjdcIiBmaWxsPVwiIzJCRDg5RVwiIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NDaXJjbGV9IC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjVGV4dH0+XG4gICAgICAgICAgQWN0dWFsXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3RUZXh0fT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdHVhbFt0aGlzLnByb3BzLmVzdGltYXRlLmxlbmd0aCAtIDFdfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uOyJdfQ==