import React, { Component } from 'react';
import XAxis from './xAxis';
import YAxis from './yAxis';
import DataPoints from './dataPoints';
import Description from './description';
import styles from './../../../dist/build/styles.min.css';

class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yRange : [],
      xDates : [],
      control : false
    }
  }

  componentDidUpdate () {
    // process data to create arrays used for y-axis (min to max, length of 4) and x-axis (quarterlies)
    let filtered = this.props.estimatedEarnings.concat(this.props.actualEarnings).filter((element) => {
      return element[0] === '$';
    });
    let dates = this.props.estimatedEarnings.filter((element) => {
      return element[0] !== '$';
    });
    let inNumbers = filtered.map((element) => {
      return Number(element.substring(1));
    });
    let min = Math.min(...inNumbers);
    let max = Math.max(...inNumbers);
    let interval = (max - min) / 3;
    let yArray = [String(min), String(min + interval), String(min + 2 * interval), String(max)];
    yArray = yArray.map((element) => {
      if(element[element.length - 3] === '.') {
        return '$' + element;
      } 
      if (element[element.length - 2] === '.') {
        return '$' + element + '0';
      };
      if (element.indexOf('.') !== -1) {
        return '$' + element.substring(0, element.indexOf('.') + 3);
      }
      return '$' + element + '.00'
    });
    // set a controller to prevent infinite looping of setState
    if(this.state.control === false) {
      this.setState({yRange : yArray, xDates : dates, control : true});
    }
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <section id={styles.earningsComponent}>
        <header className={styles.head}>
        Earnings
        </header>
        <div className={styles.chartDiv}>
          <div className={styles.chartContainer}>
            <div className={styles.innerChartContainer}>
              <div className={styles.axes}>
                <YAxis 
                  yRange={this.state.yRange}
                />
                <DataPoints 
                  estimate={this.props.estimatedEarnings}
                  actual={this.props.actualEarnings}
                  yRange={this.state.yRange}
                />
                <XAxis 
                  dates={this.state.xDates}
                />
              </div>
            </div>
          </div>
        </div>
        <Description 
          estimate={this.props.estimatedEarnings}
          actual={this.props.actualEarnings}
        /> 
      </section>
    ) 
  }
}

export default Earnings;