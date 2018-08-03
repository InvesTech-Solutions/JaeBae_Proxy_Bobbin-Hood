import React, { Component } from 'react';
import YAxisTick from './yAxisTick';
import styles from './../../../dist/build/styles.min.css';

class YAxis extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={styles.ylabel}>
        {this.props.yRange.map((yTick, index)=>{
          return (
            <YAxisTick 
              yValue={yTick}
              ind={index + 1}
            />
          );
        })}
      </div>
    );
  }
}

export default YAxis;