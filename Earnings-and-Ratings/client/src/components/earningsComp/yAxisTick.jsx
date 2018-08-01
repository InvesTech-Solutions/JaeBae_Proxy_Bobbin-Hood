import React, { Component } from 'react';
import styles from './../../../dist/build/styles.min.css';

class YAxisTick extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <span className={"jby-" + this.props.ind}>
        <div className={"jby" + this.props.ind}>{this.props.yValue}</div>
      </span>
    );
  }
}

export default YAxisTick;