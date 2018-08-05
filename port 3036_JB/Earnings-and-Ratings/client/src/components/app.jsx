import React from 'react';
import $ from 'jquery';
import Earnings from './earningsComp/earnings';
import Summary from './summaryComp/summary';
import styles from './../../dist/build/styles.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      exampleDataLoaded: false,
      companyId: null,
      companyName: '',
      companyEstimatedEarnings: [],
      companyActualEarnings: [],
      buySummary: '',
      sellSummary: '',
      ratings: []
    }
  }

  componentDidMount() {
    // for now, send a request to get fake data from server
    let that = this;
    // let id = location.pathname.split('/')[1];
    let id = this.props.pId;
    setTimeout(() => { 
      $.ajax({
        url: `http://ec2-34-221-97-94.us-west-2.compute.amazonaws.com:3004/createExample/${id}`,
        type: 'GET',
        contentType: 'application/json',
        success: (data) => {
          // once example data created, do another AJAX to get the data
          $.ajax({
            url: `http://ec2-34-221-97-94.us-west-2.compute.amazonaws.com:3004/getExample/${id}`,
            type: 'GET',
            contentType: 'application/json',
            success: (data) => {
              that.setState({
                exampleDataLoaded : true,
                companyId: JSON.parse(data.id),
                companyName: data.name,
                companyEstimatedEarnings: JSON.parse(data.esimated),
                companyActualEarnings: JSON.parse(data.actual),
                buySummary: data.bestsummary,
                sellSummary: data.sellsummary,
                ratings: data.raters
              });
            },
            error: (error) => {
              console.log('Failed to access the data base : ', error);
            }
          })
        },
        error: () => {

        }
    }); }, 0);
  }

  render () {
    return (
      <div>
        <Summary 
          ratings={this.state.ratings}
          buySummary={this.state.buySummary}
          sellSummary={this.state.sellSummary}
        />
        <br />
        <Earnings 
          estimatedEarnings={this.state.companyEstimatedEarnings}
          actualEarnings={this.state.companyActualEarnings}
        />
      </div>);
  }
}

export default App;
