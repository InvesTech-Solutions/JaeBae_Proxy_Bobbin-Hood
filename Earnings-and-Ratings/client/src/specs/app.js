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
        url: '/createExample',
        type: 'GET',
        contentType: 'application/json',
        success: function success(data) {
          // once example data created, do another AJAX to get the data
          _jquery2.default.ajax({
            url: '/getExample',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiZXhhbXBsZURhdGFMb2FkZWQiLCJjb21wYW55SWQiLCJjb21wYW55TmFtZSIsImNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5ncyIsImNvbXBhbnlBY3R1YWxFYXJuaW5ncyIsImJ1eVN1bW1hcnkiLCJzZWxsU3VtbWFyeSIsInJhdGluZ3MiLCJ0aGF0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZGF0YSIsInNldFN0YXRlIiwiSlNPTiIsInBhcnNlIiwiaWQiLCJuYW1lIiwiZXNpbWF0ZWQiLCJhY3R1YWwiLCJiZXN0c3VtbWFyeSIsInNlbGxzdW1tYXJ5IiwicmF0ZXJzIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHlCQUFtQixLQURSO0FBRVhDLGlCQUFXLElBRkE7QUFHWEMsbUJBQWEsRUFIRjtBQUlYQyxnQ0FBMEIsRUFKZjtBQUtYQyw2QkFBdUIsRUFMWjtBQU1YQyxrQkFBWSxFQU5EO0FBT1hDLG1CQUFhLEVBUEY7QUFRWEMsZUFBUztBQVJFLEtBQWI7QUFGaUI7QUFZbEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0EsVUFBSUMsT0FBTyxJQUFYO0FBQ0FDLHVCQUFFQyxJQUFGLENBQU87QUFDTEMsYUFBSyxnQkFEQTtBQUVMQyxjQUFNLEtBRkQ7QUFHTEMscUJBQWEsa0JBSFI7QUFJTEMsaUJBQVMsaUJBQUNDLElBQUQsRUFBVTtBQUNqQjtBQUNBTiwyQkFBRUMsSUFBRixDQUFPO0FBQ0xDLGlCQUFLLGFBREE7QUFFTEMsa0JBQU0sS0FGRDtBQUdMQyx5QkFBYSxrQkFIUjtBQUlMQyxxQkFBUyxpQkFBQ0MsSUFBRCxFQUFVO0FBQ2pCUCxtQkFBS1EsUUFBTCxDQUFjO0FBQ1poQixtQ0FBb0IsSUFEUjtBQUVaQywyQkFBV2dCLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS0ksRUFBaEIsQ0FGQztBQUdaakIsNkJBQWFhLEtBQUtLLElBSE47QUFJWmpCLDBDQUEwQmMsS0FBS0MsS0FBTCxDQUFXSCxLQUFLTSxRQUFoQixDQUpkO0FBS1pqQix1Q0FBdUJhLEtBQUtDLEtBQUwsQ0FBV0gsS0FBS08sTUFBaEIsQ0FMWDtBQU1aakIsNEJBQVlVLEtBQUtRLFdBTkw7QUFPWmpCLDZCQUFhUyxLQUFLUyxXQVBOO0FBUVpqQix5QkFBU1EsS0FBS1U7QUFSRixlQUFkO0FBVUQsYUFmSTtBQWdCTEMsbUJBQU8sZUFBQ0EsTUFBRCxFQUFXO0FBQ2hCQyxzQkFBUUMsR0FBUixDQUFZLG1DQUFaLEVBQWlERixNQUFqRDtBQUNEO0FBbEJJLFdBQVA7QUFxQkQsU0EzQkk7QUE0QkxBLGVBQU8saUJBQU0sQ0FFWjtBQTlCSSxPQUFQO0FBZ0NEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFLHNDQUFDLGlCQUFEO0FBQ0UsbUJBQVMsS0FBSzNCLEtBQUwsQ0FBV1EsT0FEdEI7QUFFRSxzQkFBWSxLQUFLUixLQUFMLENBQVdNLFVBRnpCO0FBR0UsdUJBQWEsS0FBS04sS0FBTCxDQUFXTztBQUgxQixVQURGO0FBTUUsaURBTkY7QUFPRSxzQ0FBQyxrQkFBRDtBQUNFLDZCQUFtQixLQUFLUCxLQUFMLENBQVdJLHdCQURoQztBQUVFLDBCQUFnQixLQUFLSixLQUFMLENBQVdLO0FBRjdCO0FBUEYsT0FERjtBQWFEOzs7O0VBbEVleUIsZ0JBQU1DLFM7O2tCQXFFVGpDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgRWFybmluZ3MgZnJvbSAnLi9lYXJuaW5nc0NvbXAvZWFybmluZ3MnO1xuaW1wb3J0IFN1bW1hcnkgZnJvbSAnLi9zdW1tYXJ5Q29tcC9zdW1tYXJ5JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi8uLi8uLi9kaXN0L2J1aWxkL3N0eWxlcy5taW4uY3NzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgXG4gICAgICBleGFtcGxlRGF0YUxvYWRlZDogZmFsc2UsXG4gICAgICBjb21wYW55SWQ6IG51bGwsXG4gICAgICBjb21wYW55TmFtZTogJycsXG4gICAgICBjb21wYW55RXN0aW1hdGVkRWFybmluZ3M6IFtdLFxuICAgICAgY29tcGFueUFjdHVhbEVhcm5pbmdzOiBbXSxcbiAgICAgIGJ1eVN1bW1hcnk6ICcnLFxuICAgICAgc2VsbFN1bW1hcnk6ICcnLFxuICAgICAgcmF0aW5nczogW11cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBmb3Igbm93LCBzZW5kIGEgcmVxdWVzdCB0byBnZXQgZmFrZSBkYXRhIGZyb20gc2VydmVyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICQuYWpheCh7XG4gICAgICB1cmw6ICcvY3JlYXRlRXhhbXBsZScsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICAvLyBvbmNlIGV4YW1wbGUgZGF0YSBjcmVhdGVkLCBkbyBhbm90aGVyIEFKQVggdG8gZ2V0IHRoZSBkYXRhXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdXJsOiAnL2dldEV4YW1wbGUnLFxuICAgICAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoYXQuc2V0U3RhdGUoeyBcbiAgICAgICAgICAgICAgZXhhbXBsZURhdGFMb2FkZWQgOiB0cnVlLFxuICAgICAgICAgICAgICBjb21wYW55SWQ6IEpTT04ucGFyc2UoZGF0YS5pZCksXG4gICAgICAgICAgICAgIGNvbXBhbnlOYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgIGNvbXBhbnlFc3RpbWF0ZWRFYXJuaW5nczogSlNPTi5wYXJzZShkYXRhLmVzaW1hdGVkKSxcbiAgICAgICAgICAgICAgY29tcGFueUFjdHVhbEVhcm5pbmdzOiBKU09OLnBhcnNlKGRhdGEuYWN0dWFsKSxcbiAgICAgICAgICAgICAgYnV5U3VtbWFyeTogZGF0YS5iZXN0c3VtbWFyeSxcbiAgICAgICAgICAgICAgc2VsbFN1bW1hcnk6IGRhdGEuc2VsbHN1bW1hcnksXG4gICAgICAgICAgICAgIHJhdGluZ3M6IGRhdGEucmF0ZXJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gYWNjZXNzIHRoZSBkYXRhIGJhc2UgOiAnLCBlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICB9LFxuICAgICAgZXJyb3I6ICgpID0+IHtcblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFN1bW1hcnkgXG4gICAgICAgICAgcmF0aW5ncz17dGhpcy5zdGF0ZS5yYXRpbmdzfVxuICAgICAgICAgIGJ1eVN1bW1hcnk9e3RoaXMuc3RhdGUuYnV5U3VtbWFyeX1cbiAgICAgICAgICBzZWxsU3VtbWFyeT17dGhpcy5zdGF0ZS5zZWxsU3VtbWFyeX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxFYXJuaW5ncyBcbiAgICAgICAgICBlc3RpbWF0ZWRFYXJuaW5ncz17dGhpcy5zdGF0ZS5jb21wYW55RXN0aW1hdGVkRWFybmluZ3N9XG4gICAgICAgICAgYWN0dWFsRWFybmluZ3M9e3RoaXMuc3RhdGUuY29tcGFueUFjdHVhbEVhcm5pbmdzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=