import React, { Component } from 'react';
import DataPoint from './dataPoint';
import styles from './../../../dist/build/styles.min.css';

class DataPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estimate : [],
      actual : [],
      trigger : false
    }
  }

  componentDidUpdate () {
    if (this.state.trigger === false) {
      this.setState({
        estimate : this.props.estimate.filter((element) => {return element[0] === '$';}),
        actual : this.props.actual.filter((element) => {return element[0] === '$';}), 
        trigger : true
      });
    }
  }

  render () {
    return (
      <svg className={styles.xs} width="560" height="120">
        {this.state.estimate.map((data, index) => {
          return (
            <DataPoint
              estimatePoint={Number(data.substring(1))}
              actualPoint={Number(this.state.actual[index].substring(1))}
              yRange={this.props.yRange}
              ind={index + 1}
            />
          );
        })}
      </svg>
    );
  }
}

export default DataPoints;