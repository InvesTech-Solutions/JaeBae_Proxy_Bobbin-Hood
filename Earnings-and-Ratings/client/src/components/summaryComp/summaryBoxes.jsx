import React, { Component } from 'react';
import SummaryBox from './summaryBox';
import styles from './../../../dist/build/styles.min.css';

class SummaryBoxes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate () {
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div className={styles.summaryBoxes}>
        {this.props.summaries.map((summary, index) => {
          return(  
            <SummaryBox
              summary={summary}
              ind={index}
            />
          )
        })}
      </div>
    )
  }
}

export default SummaryBoxes;