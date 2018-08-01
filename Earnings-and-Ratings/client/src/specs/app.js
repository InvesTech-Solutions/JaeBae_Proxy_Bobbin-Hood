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
      _jquery2.default.ajax({
        url: 'http://localhost:3036/createExample',
        type: 'GET',
        contentType: 'application/json',
        success: function success(data) {
          // once example data created, do another AJAX to get the data
          _jquery2.default.ajax({
            url: 'http://localhost:3036/getExample',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5ncyIsImNvbXBhbnlBY3R1YWxFYXJuaW5ncyIsImJ1eVN1bW1hcnkiLCJzZWxsU3VtbWFyeSIsInJhdGluZ3MiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJuYW1lIiwiZXNpbWF0ZWQiLCJhY3R1YWwiLCJiZXN0c3VtbWFyeSIsInNlbGxzdW1tYXJ5IiwicmF0ZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHlCQUFtQixLQURSO0FBRVhDLGlCQUFXLElBRkE7QUFHWEMsbUJBQWEsRUFIRjtBQUlYQyxnQ0FBMEIsRUFKZjtBQUtYQyw2QkFBdUIsRUFMWjtBQU1YQyxrQkFBWSxFQU5EO0FBT1hDLG1CQUFhLEVBUEY7QUFRWEMsZUFBUztBQVJFLEtBQWI7QUFGaUI7QUFZbEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLHVCQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxxQ0FEQTtBQUVMQyxjQUFNLEtBRkQ7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQjtBQUNBTiwyQkFBRUMsSUFBRixDQUFPO0FBQ0xDLGlCQUFLLGtDQURBO0FBRUxDLGtCQUFNLEtBRkQ7QUFHTEMseUJBQWEsa0JBSFI7QUFJTEMscUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQlAsbUJBQUtRLFFBQUwsQ0FBYztBQUNaaEIsbUNBQW9CLElBRFI7QUFFWkMsMkJBQVdnQixLQUFLQyxLQUFMLENBQVdILEtBQUtJLEVBQWhCLENBRkM7QUFHWmpCLDZCQUFhYSxLQUFLSyxJQUhOO0FBSVpqQiwwQ0FBMEJjLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS00sUUFBaEIsQ0FKZDtBQUtaakIsdUNBQXVCYSxLQUFLQyxLQUFMLENBQVdILEtBQUtPLE1BQWhCLENBTFg7QUFNWmpCLDRCQUFZVSxLQUFLUSxXQU5MO0FBT1pqQiw2QkFBYVMsS0FBS1MsV0FQTjtBQVFaakIseUJBQVNRLEtBQUtVO0FBUkYsZUFBZDtBQVVELGFBZkk7QUFnQkxDLG1CQUFPLGVBQUNBLE1BQUQsRUFBVztBQUNoQkMsc0JBQVFDLEdBQVIsQ0FBWSxtQ0FBWixFQUFpREYsTUFBakQ7QUFDRDtBQWxCSSxXQUFQO0FBcUJELFNBM0JJO0FBNEJMQSxlQUFPLGlCQUFNLENBRVo7QUE5QkksT0FBUDtBQWdDRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSxzQ0FBQyxpQkFBRDtBQUNFLG1CQUFTLEtBQUszQixLQUFMLENBQVdRLE9BRHRCO0FBRUUsc0JBQVksS0FBS1IsS0FBTCxDQUFXTSxVQUZ6QjtBQUdFLHVCQUFhLEtBQUtOLEtBQUwsQ0FBV087QUFIMUIsVUFERjtBQU1FLGlEQU5GO0FBT0Usc0NBQUMsa0JBQUQ7QUFDRSw2QkFBbUIsS0FBS1AsS0FBTCxDQUFXSSx3QkFEaEM7QUFFRSwwQkFBZ0IsS0FBS0osS0FBTCxDQUFXSztBQUY3QjtBQVBGLE9BREY7QUFhRDs7OztFQWxFZXlCLGdCQUFNQyxTOztrQkFxRVRqQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IEVhcm5pbmdzIGZyb20gJy4vZWFybmluZ3NDb21wL2Vhcm5pbmdzJztcbmltcG9ydCBTdW1tYXJ5IGZyb20gJy4vc3VtbWFyeUNvbXAvc3VtbWFyeSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vLi4vZGlzdC9idWlsZC9zdHlsZXMubWluLmNzcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IFxuICAgICAgZXhhbXBsZURhdGFMb2FkZWQ6IGZhbHNlLFxuICAgICAgY29tcGFueUlkOiBudWxsLFxuICAgICAgY29tcGFueU5hbWU6ICcnLFxuICAgICAgY29tcGFueUVzdGltYXRlZEVhcm5pbmdzOiBbXSxcbiAgICAgIGNvbXBhbnlBY3R1YWxFYXJuaW5nczogW10sXG4gICAgICBidXlTdW1tYXJ5OiAnJyxcbiAgICAgIHNlbGxTdW1tYXJ5OiAnJyxcbiAgICAgIHJhdGluZ3M6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gZm9yIG5vdywgc2VuZCBhIHJlcXVlc3QgdG8gZ2V0IGZha2UgZGF0YSBmcm9tIHNlcnZlclxuICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDM2L2NyZWF0ZUV4YW1wbGUnLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgLy8gb25jZSBleGFtcGxlIGRhdGEgY3JlYXRlZCwgZG8gYW5vdGhlciBBSkFYIHRvIGdldCB0aGUgZGF0YVxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAzNi9nZXRFeGFtcGxlJyxcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGF0LnNldFN0YXRlKHsgXG4gICAgICAgICAgICAgIGV4YW1wbGVEYXRhTG9hZGVkIDogdHJ1ZSxcbiAgICAgICAgICAgICAgY29tcGFueUlkOiBKU09OLnBhcnNlKGRhdGEuaWQpLFxuICAgICAgICAgICAgICBjb21wYW55TmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgICBjb21wYW55RXN0aW1hdGVkRWFybmluZ3M6IEpTT04ucGFyc2UoZGF0YS5lc2ltYXRlZCksXG4gICAgICAgICAgICAgIGNvbXBhbnlBY3R1YWxFYXJuaW5nczogSlNPTi5wYXJzZShkYXRhLmFjdHVhbCksXG4gICAgICAgICAgICAgIGJ1eVN1bW1hcnk6IGRhdGEuYmVzdHN1bW1hcnksXG4gICAgICAgICAgICAgIHNlbGxTdW1tYXJ5OiBkYXRhLnNlbGxzdW1tYXJ5LFxuICAgICAgICAgICAgICByYXRpbmdzOiBkYXRhLnJhdGVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGFjY2VzcyB0aGUgZGF0YSBiYXNlIDogJywgZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgfSxcbiAgICAgIGVycm9yOiAoKSA9PiB7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxTdW1tYXJ5IFxuICAgICAgICAgIHJhdGluZ3M9e3RoaXMuc3RhdGUucmF0aW5nc31cbiAgICAgICAgICBidXlTdW1tYXJ5PXt0aGlzLnN0YXRlLmJ1eVN1bW1hcnl9XG4gICAgICAgICAgc2VsbFN1bW1hcnk9e3RoaXMuc3RhdGUuc2VsbFN1bW1hcnl9XG4gICAgICAgIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8RWFybmluZ3MgXG4gICAgICAgICAgZXN0aW1hdGVkRWFybmluZ3M9e3RoaXMuc3RhdGUuY29tcGFueUVzdGltYXRlZEVhcm5pbmdzfVxuICAgICAgICAgIGFjdHVhbEVhcm5pbmdzPXt0aGlzLnN0YXRlLmNvbXBhbnlBY3R1YWxFYXJuaW5nc31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2Pik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl19