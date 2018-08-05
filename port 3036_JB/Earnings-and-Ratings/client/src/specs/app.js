'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _earnings = require('./earningsComp/earnings');

var _earnings2 = _interopRequireDefault(_earnings);

var _summary = require('./summaryComp/summary');

var _summary2 = _interopRequireDefault(_summary);

var _stylesMin = require('./../../dist/build/styles.min.css');

var _stylesMin2 = _interopRequireDefault(_stylesMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      exampleDataLoaded: false,
      companyId: null,
      companyName: '',
      companyEstimatedEarnings: [],
      companyActualEarnings: [],
      buySummary: '',
      sellSummary: '',
      ratings: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // for now, send a request to get fake data from server
      var that = this;
      // let id = location.pathname.split('/')[1];
      var id = this.props.pId;
      setTimeout(function () {
        _jquery2.default.ajax({
          url: 'http://localhost:3004/createExample/' + id,
          type: 'GET',
          contentType: 'application/json',
          success: function success(data) {
            // once example data created, do another AJAX to get the data
            _jquery2.default.ajax({
              url: 'http://localhost:3004/getExample/' + id,
              type: 'GET',
              contentType: 'application/json',
              success: function success(data) {
                that.setState({
                  exampleDataLoaded: true,
                  companyId: JSON.parse(data.id),
                  companyName: data.name,
                  companyEstimatedEarnings: JSON.parse(data.esimated),
                  companyActualEarnings: JSON.parse(data.actual),
                  buySummary: data.bestsummary,
                  sellSummary: data.sellsummary,
                  ratings: data.raters
                });
              },
              error: function error(_error) {
                console.log('Failed to access the data base : ', _error);
              }
            });
          },
          error: function error() {}
        });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_summary2.default, {
          ratings: this.state.ratings,
          buySummary: this.state.buySummary,
          sellSummary: this.state.sellSummary
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(_earnings2.default, {
          estimatedEarnings: this.state.companyEstimatedEarnings,
          actualEarnings: this.state.companyActualEarnings
        })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5ncyIsImNvbXBhbnlBY3R1YWxFYXJuaW5ncyIsImJ1eVN1bW1hcnkiLCJzZWxsU3VtbWFyeSIsInJhdGluZ3MiLCJ0aGF0IiwiaWQiLCJwSWQiLCJzZXRUaW1lb3V0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwibmFtZSIsImVzaW1hdGVkIiwiYWN0dWFsIiwiYmVzdHN1bW1hcnkiLCJzZWxsc3VtbWFyeSIsInJhdGVycyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyx5QkFBbUIsS0FEUjtBQUVYQyxpQkFBVyxJQUZBO0FBR1hDLG1CQUFhLEVBSEY7QUFJWEMsZ0NBQTBCLEVBSmY7QUFLWEMsNkJBQXVCLEVBTFo7QUFNWEMsa0JBQVksRUFORDtBQU9YQyxtQkFBYSxFQVBGO0FBUVhDLGVBQVM7QUFSRSxLQUFiO0FBRmlCO0FBWWxCOzs7O3dDQUVtQjtBQUNsQjtBQUNBLFVBQUlDLE9BQU8sSUFBWDtBQUNBO0FBQ0EsVUFBSUMsS0FBSyxLQUFLWCxLQUFMLENBQVdZLEdBQXBCO0FBQ0FDLGlCQUFXLFlBQU07QUFDZkMseUJBQUVDLElBQUYsQ0FBTztBQUNMQyx3REFBNENMLEVBRHZDO0FBRUxNLGdCQUFNLEtBRkQ7QUFHTEMsdUJBQWEsa0JBSFI7QUFJTEMsbUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQjtBQUNBTiw2QkFBRUMsSUFBRixDQUFPO0FBQ0xDLHlEQUF5Q0wsRUFEcEM7QUFFTE0sb0JBQU0sS0FGRDtBQUdMQywyQkFBYSxrQkFIUjtBQUlMQyx1QkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCVixxQkFBS1csUUFBTCxDQUFjO0FBQ1puQixxQ0FBb0IsSUFEUjtBQUVaQyw2QkFBV21CLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS1QsRUFBaEIsQ0FGQztBQUdaUCwrQkFBYWdCLEtBQUtJLElBSE47QUFJWm5CLDRDQUEwQmlCLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS0ssUUFBaEIsQ0FKZDtBQUtabkIseUNBQXVCZ0IsS0FBS0MsS0FBTCxDQUFXSCxLQUFLTSxNQUFoQixDQUxYO0FBTVpuQiw4QkFBWWEsS0FBS08sV0FOTDtBQU9abkIsK0JBQWFZLEtBQUtRLFdBUE47QUFRWm5CLDJCQUFTVyxLQUFLUztBQVJGLGlCQUFkO0FBVUQsZUFmSTtBQWdCTEMscUJBQU8sZUFBQ0EsTUFBRCxFQUFXO0FBQ2hCQyx3QkFBUUMsR0FBUixDQUFZLG1DQUFaLEVBQWlERixNQUFqRDtBQUNEO0FBbEJJLGFBQVA7QUFvQkQsV0ExQkk7QUEyQkxBLGlCQUFPLGlCQUFNLENBRVo7QUE3QkksU0FBUDtBQThCRyxPQS9CTCxFQStCTyxDQS9CUDtBQWdDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSxzQ0FBQyxpQkFBRDtBQUNFLG1CQUFTLEtBQUs3QixLQUFMLENBQVdRLE9BRHRCO0FBRUUsc0JBQVksS0FBS1IsS0FBTCxDQUFXTSxVQUZ6QjtBQUdFLHVCQUFhLEtBQUtOLEtBQUwsQ0FBV087QUFIMUIsVUFERjtBQU1FLGlEQU5GO0FBT0Usc0NBQUMsa0JBQUQ7QUFDRSw2QkFBbUIsS0FBS1AsS0FBTCxDQUFXSSx3QkFEaEM7QUFFRSwwQkFBZ0IsS0FBS0osS0FBTCxDQUFXSztBQUY3QjtBQVBGLE9BREY7QUFhRDs7OztFQXBFZTJCLGdCQUFNQyxTOztrQkF1RVRuQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IEVhcm5pbmdzIGZyb20gJy4vZWFybmluZ3NDb21wL2Vhcm5pbmdzJztcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vc3VtbWFyeUNvbXAvc3VtbWFyeSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vZGlzdC9idWlsZC9zdHlsZXMubWluLmNzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgZXhhbXBsZURhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgY29tcGFueUlkOiBudWxsLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBbXSxcbiAgICAgIGNvbXBhbnlBY3R1YWxFYXJuaW5nczogW10sXG4gICAgICBidXlTdW1tYXJ5OiAnJyxcbiAgICAgIHNlbGxTdW1tYXJ5OiAnJyxcbiAgICAgIHJhdGluZ3M6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gZm9yIG5vdywgc2VuZCBhIHJlcXVlc3QgdG8gZ2V0IGZha2UgZGF0YSBmcm9tIHNlcnZlclxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAvLyBsZXQgaWQgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuICAgIGxldCBpZCA9IHRoaXMucHJvcHMucElkO1xuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcbiAgICAgICQuYWpheCh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwNC9jcmVhdGVFeGFtcGxlLyR7aWR9YCxcbiAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgLy8gb25jZSBleGFtcGxlIGRhdGEgY3JlYXRlZCwgZG8gYW5vdGhlciBBSkFYIHRvIGdldCB0aGUgZGF0YVxuICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjMwMDQvZ2V0RXhhbXBsZS8ke2lkfWAsXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleGFtcGxlRGF0YUxvYWRlZCA6IHRydWUsXG4gICAgICAgICAgICAgICAgY29tcGFueUlkOiBKU09OLnBhcnNlKGRhdGEuaWQpLFxuICAgICAgICAgICAgICAgIGNvbXBhbnlOYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuZXNpbWF0ZWQpLFxuICAgICAgICAgICAgICAgIGNvbXBhbnlBY3R1YWxFYXJuaW5nczogSlNPTi5wYXJzZShkYXRhLmFjdHVhbCksXG4gICAgICAgICAgICAgICAgYnV5U3VtbWFyeTogZGF0YS5iZXN0c3VtbWFyeSxcbiAgICAgICAgICAgICAgICBzZWxsU3VtbWFyeTogZGF0YS5zZWxsc3VtbWFyeSxcbiAgICAgICAgICAgICAgICByYXRpbmdzOiBkYXRhLnJhdGVyc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gYWNjZXNzIHRoZSBkYXRhIGJhc2UgOiAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcblxuICAgICAgICB9XG4gICAgfSk7IH0sIDApO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN1bW1hcnkgXG4gICAgICAgICAgcmF0aW5ncz17dGhpcy5zdGF0ZS5yYXRpbmdzfVxuICAgICAgICAgIGJ1eVN1bW1hcnk9e3RoaXMuc3RhdGUuYnV5U3VtbWFyeX1cbiAgICAgICAgICBzZWxsU3VtbWFyeT17dGhpcy5zdGF0ZS5zZWxsU3VtbWFyeX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxFYXJuaW5ncyBcbiAgICAgICAgICBlc3RpbWF0ZWRFYXJuaW5ncz17dGhpcy5zdGF0ZS5jb21wYW55RXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICAgICAgYWN0dWFsRWFybmluZ3M9e3RoaXMuc3RhdGUuY29tcGFueUFjdHVhbEVhcm5pbmdzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=