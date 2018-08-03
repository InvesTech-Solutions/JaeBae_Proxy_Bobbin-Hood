'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _stylesMin = require('./../../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SummaryBox = function (_Component) {
  _inherits(SummaryBox, _Component);

  function SummaryBox(props) {
    _classCallCheck(this, SummaryBox);

    var _this = _possibleConstructorReturn(this, (SummaryBox.__proto__ || Object.getPrototypeOf(SummaryBox)).call(this, props));

    _this.clickHandler = _this.clickedReadMore.bind(_this);
    _this.state = {
      head: 'Summary',
      showCondensed: true
    };
    return _this;
  }

  _createClass(SummaryBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var head = void 0;
      if (this.props.ind === 0) {
        head = 'Buy';
      } else {
        head = 'Sell';
      }
      this.setState({
        head: head + ' Summary'
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.showCondensed) {
        (0, _jquery2.default)('#fade_' + this.props.ind).css({ "overflow": "hidden", "height": "45px" });
        (0, _jquery2.default)('#summaryBox_' + this.props.ind).css("height", "160.56px");
        var toppx = void 0;
        if (this.props.ind === 0) {
          (0, _jquery2.default)('#summaryPositionControl_1').css("top", "0px");
          toppx = '16px';
        } else {
          toppx = '-195px';
        };
        (0, _jquery2.default)('#summaryTail_' + this.props.ind).css("top", toppx);
      } else {
        var heightDiff = void 0;
        // heightBefore = $(`#fade_${this.props.ind}`).css
        (0, _jquery2.default)('#fade_' + this.props.ind).css({ "overflow": "visible", "height": "auto" });

        heightDiff = this.heightDiff('#fade_' + this.props.ind);
        console.log(heightDiff);
        this.addHeight('#summaryBox_' + this.props.ind, heightDiff);
        this.addTop('#summaryTail_' + this.props.ind, heightDiff);
        if (this.props.ind === 0) {
          this.addTop('#summaryPositionControl_1', '-' + heightDiff);
        }
      }
    }
  }, {
    key: 'heightDiff',
    value: function heightDiff(identifier) {
      var after = (0, _jquery2.default)(identifier).css('height');
      return String(Number(after.substring(0, after.length - 2)) - 45) + 'px';
    }
  }, {
    key: 'addHeight',
    value: function addHeight(identifier, heightDiff) {
      var height = (0, _jquery2.default)(identifier).css("height");
      var newHeight = String(Number(height.substring(0, height.length - 2)) + Number(heightDiff.substring(0, heightDiff.length - 2))) + 'px';
      (0, _jquery2.default)(identifier).css("height", newHeight);
    }
  }, {
    key: 'addTop',
    value: function addTop(identifier, heightDiff) {
      var top = (0, _jquery2.default)(identifier).css("top");
      var newTop = String(Number(top.substring(0, top.length - 2)) + Number(heightDiff.substring(0, heightDiff.length - 2))) + 'px';
      (0, _jquery2.default)(identifier).css("top", newTop);
    }
  }, {
    key: 'clickedReadMore',
    value: function clickedReadMore(e) {
      e.preventDefault();
      this.setState({ showCondensed: !this.state.showCondensed });
    }

    // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'summaryPositionControl_' + this.props.ind },
        _react2.default.createElement(
          'div',
          { className: _stylesMin2.default.summaryTail, id: 'summaryTail_' + this.props.ind },
          _react2.default.createElement(
            'svg',
            { width: '24', height: '20', viewBox: '0 0 24 20' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', { d: 'M6.66133815e-15,6.89249489e-14 L24,1.30957403e-12 L3.34939321,18.8768262 L3.34939321,18.8768262 C2.5341158,19.6220755 1.26905894,19.5653065 0.523809649,18.750029 C0.186851616,18.3814084 2.34087955e-13,17.9000574 2.26929586e-13,17.4006358 L6.66133815e-15,6.89249489e-14 Z' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'summaryBox_' + this.props.ind },
          _react2.default.createElement(
            'p',
            { className: _stylesMin2.default.summaryHead },
            this.state.head
          ),
          _react2.default.createElement(
            'div',
            { className: _stylesMin2.default.fade, id: 'fade_' + this.props.ind },
            this.props.summary
          ),
          _react2.default.createElement(
            'a',
            { className: _stylesMin2.default.readMore, href: '#', onClick: this.clickHandler },
            'Read More'
          ),
          _react2.default.createElement(
            'footer',
            { className: _stylesMin2.default.summaryFooter },
            _react2.default.createElement(
              'p',
              null,
              'Morningstar'
            )
          )
        )
      );
    }
  }]);

  return SummaryBox;
}(_react.Component);

exports.default = SummaryBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc3VtbWFyeUNvbXAvc3VtbWFyeUJveC5qc3giXSwibmFtZXMiOlsiU3VtbWFyeUJveCIsInByb3BzIiwiY2xpY2tIYW5kbGVyIiwiY2xpY2tlZFJlYWRNb3JlIiwiYmluZCIsInN0YXRlIiwiaGVhZCIsInNob3dDb25kZW5zZWQiLCJpbmQiLCJzZXRTdGF0ZSIsImNzcyIsInRvcHB4IiwiaGVpZ2h0RGlmZiIsImNvbnNvbGUiLCJsb2ciLCJhZGRIZWlnaHQiLCJhZGRUb3AiLCJpZGVudGlmaWVyIiwiYWZ0ZXIiLCJTdHJpbmciLCJOdW1iZXIiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJoZWlnaHQiLCJuZXdIZWlnaHQiLCJ0b3AiLCJuZXdUb3AiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdHlsZXMiLCJzdW1tYXJ5VGFpbCIsInN1bW1hcnlIZWFkIiwiZmFkZSIsInN1bW1hcnkiLCJyZWFkTW9yZSIsInN1bW1hcnlGb290ZXIiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUEsVTs7O0FBQ0osc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsWUFBTCxHQUFvQixNQUFLQyxlQUFMLENBQXFCQyxJQUFyQixPQUFwQjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFPLFNBREk7QUFFWEMscUJBQWdCO0FBRkwsS0FBYjtBQUhpQjtBQU9sQjs7Ozt3Q0FFb0I7QUFDbkIsVUFBSUQsYUFBSjtBQUNBLFVBQUcsS0FBS0wsS0FBTCxDQUFXTyxHQUFYLEtBQW1CLENBQXRCLEVBQXlCO0FBQ3ZCRixlQUFPLEtBQVA7QUFDRCxPQUZELE1BRU87QUFDTEEsZUFBTyxNQUFQO0FBQ0Q7QUFDRCxXQUFLRyxRQUFMLENBQWM7QUFDWkgsY0FBVUEsSUFBVjtBQURZLE9BQWQ7QUFHRDs7O3lDQUVxQjtBQUNwQixVQUFJLEtBQUtELEtBQUwsQ0FBV0UsYUFBZixFQUE4QjtBQUM1Qix5Q0FBVyxLQUFLTixLQUFMLENBQVdPLEdBQXRCLEVBQTZCRSxHQUE3QixDQUFpQyxFQUFDLFlBQWEsUUFBZCxFQUF3QixVQUFXLE1BQW5DLEVBQWpDO0FBQ0EsK0NBQWlCLEtBQUtULEtBQUwsQ0FBV08sR0FBNUIsRUFBbUNFLEdBQW5DLENBQXVDLFFBQXZDLEVBQWlELFVBQWpEO0FBQ0EsWUFBSUMsY0FBSjtBQUNBLFlBQUksS0FBS1YsS0FBTCxDQUFXTyxHQUFYLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLDZEQUErQkUsR0FBL0IsQ0FBbUMsS0FBbkMsRUFBMEMsS0FBMUM7QUFDQUMsa0JBQVEsTUFBUjtBQUNELFNBSEQsTUFHTztBQUNMQSxrQkFBUSxRQUFSO0FBQ0Q7QUFDRCxnREFBa0IsS0FBS1YsS0FBTCxDQUFXTyxHQUE3QixFQUFvQ0UsR0FBcEMsQ0FBd0MsS0FBeEMsRUFBK0NDLEtBQS9DO0FBQ0QsT0FYRCxNQVdPO0FBQ0wsWUFBSUMsbUJBQUo7QUFDQTtBQUNBLHlDQUFXLEtBQUtYLEtBQUwsQ0FBV08sR0FBdEIsRUFBNkJFLEdBQTdCLENBQWlDLEVBQUMsWUFBYSxTQUFkLEVBQXlCLFVBQVcsTUFBcEMsRUFBakM7O0FBRUFFLHFCQUFhLEtBQUtBLFVBQUwsWUFBeUIsS0FBS1gsS0FBTCxDQUFXTyxHQUFwQyxDQUFiO0FBQ0FLLGdCQUFRQyxHQUFSLENBQVlGLFVBQVo7QUFDQSxhQUFLRyxTQUFMLGtCQUE4QixLQUFLZCxLQUFMLENBQVdPLEdBQXpDLEVBQWdESSxVQUFoRDtBQUNBLGFBQUtJLE1BQUwsbUJBQTRCLEtBQUtmLEtBQUwsQ0FBV08sR0FBdkMsRUFBOENJLFVBQTlDO0FBQ0EsWUFBSSxLQUFLWCxLQUFMLENBQVdPLEdBQVgsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsZUFBS1EsTUFBTCxvQ0FBNkNKLFVBQTdDO0FBQ0Q7QUFDRjtBQUNGOzs7K0JBRVdLLFUsRUFBWTtBQUN0QixVQUFJQyxRQUFRLHNCQUFFRCxVQUFGLEVBQWNQLEdBQWQsQ0FBa0IsUUFBbEIsQ0FBWjtBQUNBLGFBQVlTLE9BQU9DLE9BQU9GLE1BQU1HLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUJILE1BQU1JLE1BQU4sR0FBZSxDQUFsQyxDQUFQLElBQStDLEVBQXRELENBQVo7QUFDRDs7OzhCQUVVTCxVLEVBQVlMLFUsRUFBWTtBQUNqQyxVQUFJVyxTQUFTLHNCQUFFTixVQUFGLEVBQWNQLEdBQWQsQ0FBa0IsUUFBbEIsQ0FBYjtBQUNBLFVBQUljLFlBQWVMLE9BQU9DLE9BQU9HLE9BQU9GLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0JFLE9BQU9ELE1BQVAsR0FBZ0IsQ0FBcEMsQ0FBUCxJQUFpREYsT0FBT1IsV0FBV1MsU0FBWCxDQUFxQixDQUFyQixFQUF3QlQsV0FBV1UsTUFBWCxHQUFvQixDQUE1QyxDQUFQLENBQXhELENBQWYsT0FBSjtBQUNBLDRCQUFFTCxVQUFGLEVBQWNQLEdBQWQsQ0FBa0IsUUFBbEIsRUFBNEJjLFNBQTVCO0FBQ0Q7OzsyQkFFT1AsVSxFQUFZTCxVLEVBQVk7QUFDOUIsVUFBSWEsTUFBTSxzQkFBRVIsVUFBRixFQUFjUCxHQUFkLENBQWtCLEtBQWxCLENBQVY7QUFDQSxVQUFJZ0IsU0FBWVAsT0FBT0MsT0FBT0ssSUFBSUosU0FBSixDQUFjLENBQWQsRUFBaUJJLElBQUlILE1BQUosR0FBYSxDQUE5QixDQUFQLElBQTJDRixPQUFPUixXQUFXUyxTQUFYLENBQXFCLENBQXJCLEVBQXdCVCxXQUFXVSxNQUFYLEdBQW9CLENBQTVDLENBQVAsQ0FBbEQsQ0FBWixPQUFKO0FBQ0EsNEJBQUVMLFVBQUYsRUFBY1AsR0FBZCxDQUFrQixLQUFsQixFQUF5QmdCLE1BQXpCO0FBQ0Q7OztvQ0FFZ0JDLEMsRUFBRztBQUNsQkEsUUFBRUMsY0FBRjtBQUNBLFdBQUtuQixRQUFMLENBQWMsRUFBRUYsZUFBZ0IsQ0FBQyxLQUFLRixLQUFMLENBQVdFLGFBQTlCLEVBQWQ7QUFDRDs7QUFFRDs7Ozs2QkFDVTtBQUNSLGFBQ0U7QUFBQTtBQUFBLFVBQUssZ0NBQThCLEtBQUtOLEtBQUwsQ0FBV08sR0FBOUM7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFXcUIsb0JBQU9DLFdBQXZCLEVBQW9DLHFCQUFtQixLQUFLN0IsS0FBTCxDQUFXTyxHQUFsRTtBQUNFO0FBQUE7QUFBQSxjQUFLLE9BQU0sSUFBWCxFQUFnQixRQUFPLElBQXZCLEVBQTRCLFNBQVEsV0FBcEM7QUFDRTtBQUFBO0FBQUE7QUFDRSxzREFBTyxHQUFFLGdSQUFUO0FBREY7QUFERjtBQURGLFNBREY7QUFRRTtBQUFBO0FBQUEsWUFBSyxvQkFBa0IsS0FBS1AsS0FBTCxDQUFXTyxHQUFsQztBQUNFO0FBQUE7QUFBQSxjQUFHLFdBQVdxQixvQkFBT0UsV0FBckI7QUFBbUMsaUJBQUsxQixLQUFMLENBQVdDO0FBQTlDLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFXdUIsb0JBQU9HLElBQXZCLEVBQTZCLGNBQVksS0FBSy9CLEtBQUwsQ0FBV08sR0FBcEQ7QUFDRyxpQkFBS1AsS0FBTCxDQUFXZ0M7QUFEZCxXQUZGO0FBS0U7QUFBQTtBQUFBLGNBQUcsV0FBV0osb0JBQU9LLFFBQXJCLEVBQStCLE1BQUssR0FBcEMsRUFBd0MsU0FBUyxLQUFLaEMsWUFBdEQ7QUFBQTtBQUFBLFdBTEY7QUFRRTtBQUFBO0FBQUEsY0FBUSxXQUFXMkIsb0JBQU9NLGFBQTFCO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBUkY7QUFSRixPQURGO0FBdUJEOzs7O0VBaEdzQkMsZ0I7O2tCQW1HVnBDLFUiLCJmaWxlIjoic3VtbWFyeUJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLy4uLy4uLy4uL2Rpc3QvYnVpbGQvc3R5bGVzLm1pbi5jc3MnO1xuXG5jbGFzcyBTdW1tYXJ5Qm94IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5jbGlja0hhbmRsZXIgPSB0aGlzLmNsaWNrZWRSZWFkTW9yZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBoZWFkIDogJ1N1bW1hcnknLFxuICAgICAgc2hvd0NvbmRlbnNlZCA6IHRydWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgbGV0IGhlYWQ7XG4gICAgaWYodGhpcy5wcm9wcy5pbmQgPT09IDApIHtcbiAgICAgIGhlYWQgPSAnQnV5JztcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZCA9ICdTZWxsJztcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFxuICAgICAgaGVhZCA6IGAke2hlYWR9IFN1bW1hcnlgXG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLnNob3dDb25kZW5zZWQpIHtcbiAgICAgICQoYCNmYWRlXyR7dGhpcy5wcm9wcy5pbmR9YCkuY3NzKHtcIm92ZXJmbG93XCIgOiBcImhpZGRlblwiLCBcImhlaWdodFwiIDogXCI0NXB4XCJ9KTtcbiAgICAgICQoYCNzdW1tYXJ5Qm94XyR7dGhpcy5wcm9wcy5pbmR9YCkuY3NzKFwiaGVpZ2h0XCIsIFwiMTYwLjU2cHhcIik7XG4gICAgICBsZXQgdG9wcHg7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbmQgPT09IDApIHtcbiAgICAgICAgJChgI3N1bW1hcnlQb3NpdGlvbkNvbnRyb2xfMWApLmNzcyhcInRvcFwiLCBcIjBweFwiKVxuICAgICAgICB0b3BweCA9ICcxNnB4J1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9wcHggPSAnLTE5NXB4J1xuICAgICAgfTtcbiAgICAgICQoYCNzdW1tYXJ5VGFpbF8ke3RoaXMucHJvcHMuaW5kfWApLmNzcyhcInRvcFwiLCB0b3BweCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBoZWlnaHREaWZmO1xuICAgICAgLy8gaGVpZ2h0QmVmb3JlID0gJChgI2ZhZGVfJHt0aGlzLnByb3BzLmluZH1gKS5jc3NcbiAgICAgICQoYCNmYWRlXyR7dGhpcy5wcm9wcy5pbmR9YCkuY3NzKHtcIm92ZXJmbG93XCIgOiBcInZpc2libGVcIiwgXCJoZWlnaHRcIiA6IFwiYXV0b1wifSk7XG5cbiAgICAgIGhlaWdodERpZmYgPSB0aGlzLmhlaWdodERpZmYoYCNmYWRlXyR7dGhpcy5wcm9wcy5pbmR9YCk7XG4gICAgICBjb25zb2xlLmxvZyhoZWlnaHREaWZmKVxuICAgICAgdGhpcy5hZGRIZWlnaHQoYCNzdW1tYXJ5Qm94XyR7dGhpcy5wcm9wcy5pbmR9YCwgaGVpZ2h0RGlmZik7XG4gICAgICB0aGlzLmFkZFRvcChgI3N1bW1hcnlUYWlsXyR7dGhpcy5wcm9wcy5pbmR9YCwgaGVpZ2h0RGlmZik7XG4gICAgICBpZiAodGhpcy5wcm9wcy5pbmQgPT09IDApIHtcbiAgICAgICAgdGhpcy5hZGRUb3AoYCNzdW1tYXJ5UG9zaXRpb25Db250cm9sXzFgLCBgLSR7aGVpZ2h0RGlmZn1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoZWlnaHREaWZmIChpZGVudGlmaWVyKSB7XG4gICAgbGV0IGFmdGVyID0gJChpZGVudGlmaWVyKS5jc3MoJ2hlaWdodCcpO1xuICAgIHJldHVybiAgKGAke1N0cmluZyhOdW1iZXIoYWZ0ZXIuc3Vic3RyaW5nKDAsIGFmdGVyLmxlbmd0aCAtIDIpKSAtIDQ1KX1weGApO1xuICB9XG5cbiAgYWRkSGVpZ2h0IChpZGVudGlmaWVyLCBoZWlnaHREaWZmKSB7XG4gICAgbGV0IGhlaWdodCA9ICQoaWRlbnRpZmllcikuY3NzKFwiaGVpZ2h0XCIpO1xuICAgIGxldCBuZXdIZWlnaHQgPSBgJHtTdHJpbmcoTnVtYmVyKGhlaWdodC5zdWJzdHJpbmcoMCwgaGVpZ2h0Lmxlbmd0aCAtIDIpKSArIE51bWJlcihoZWlnaHREaWZmLnN1YnN0cmluZygwLCBoZWlnaHREaWZmLmxlbmd0aCAtIDIpKSl9cHhgO1xuICAgICQoaWRlbnRpZmllcikuY3NzKFwiaGVpZ2h0XCIsIG5ld0hlaWdodCk7XG4gIH1cblxuICBhZGRUb3AgKGlkZW50aWZpZXIsIGhlaWdodERpZmYpIHtcbiAgICBsZXQgdG9wID0gJChpZGVudGlmaWVyKS5jc3MoXCJ0b3BcIik7XG4gICAgbGV0IG5ld1RvcCA9IGAke1N0cmluZyhOdW1iZXIodG9wLnN1YnN0cmluZygwLCB0b3AubGVuZ3RoIC0gMikpICsgTnVtYmVyKGhlaWdodERpZmYuc3Vic3RyaW5nKDAsIGhlaWdodERpZmYubGVuZ3RoIC0gMikpKX1weGA7XG4gICAgJChpZGVudGlmaWVyKS5jc3MoXCJ0b3BcIiwgbmV3VG9wKTtcbiAgfVxuXG4gIGNsaWNrZWRSZWFkTW9yZSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbmRlbnNlZCA6ICF0aGlzLnN0YXRlLnNob3dDb25kZW5zZWQgfSk7XG4gIH1cblxuICAvLyByZW5kZXJzIGVudGlyZSBlYXJuaW5ncyBzZWN0aW9uIHdpdGggWUF4aXMsIERhdGFQb2ludHMsIFhBeGlzLCBhbmQgRGVzY3JpcHRpb25zIGFzIHN1YmNvbXBvbmVudHNcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17YHN1bW1hcnlQb3NpdGlvbkNvbnRyb2xfJHt0aGlzLnByb3BzLmluZH1gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5VGFpbH0gaWQ9e2BzdW1tYXJ5VGFpbF8ke3RoaXMucHJvcHMuaW5kfWB9PlxuICAgICAgICAgIDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyNCAyMFwiPlxuICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxwYXRoICBkPVwiTTYuNjYxMzM4MTVlLTE1LDYuODkyNDk0ODllLTE0IEwyNCwxLjMwOTU3NDAzZS0xMiBMMy4zNDkzOTMyMSwxOC44NzY4MjYyIEwzLjM0OTM5MzIxLDE4Ljg3NjgyNjIgQzIuNTM0MTE1OCwxOS42MjIwNzU1IDEuMjY5MDU4OTQsMTkuNTY1MzA2NSAwLjUyMzgwOTY0OSwxOC43NTAwMjkgQzAuMTg2ODUxNjE2LDE4LjM4MTQwODQgMi4zNDA4Nzk1NWUtMTMsMTcuOTAwMDU3NCAyLjI2OTI5NTg2ZS0xMywxNy40MDA2MzU4IEw2LjY2MTMzODE1ZS0xNSw2Ljg5MjQ5NDg5ZS0xNCBaXCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD17YHN1bW1hcnlCb3hfJHt0aGlzLnByb3BzLmluZH1gfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5zdW1tYXJ5SGVhZH0+e3RoaXMuc3RhdGUuaGVhZH08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mYWRlfSBpZD17YGZhZGVfJHt0aGlzLnByb3BzLmluZH1gfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN1bW1hcnl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMucmVhZE1vcmV9IGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAgICAgIFJlYWQgTW9yZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLnN1bW1hcnlGb290ZXJ9PlxuICAgICAgICAgICAgPHA+TW9ybmluZ3N0YXI8L3A+XG4gICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1bW1hcnlCb3g7Il19