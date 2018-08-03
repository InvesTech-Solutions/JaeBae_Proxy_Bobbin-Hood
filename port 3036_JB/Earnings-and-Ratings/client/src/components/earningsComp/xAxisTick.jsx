import React, { Component } from 'react';
import styles from './../../../dist/build/styles.min.css';

class XAxisTick extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <span className={"jbx-" + this.props.ind}>
        <div className={"jbx" + this.props.ind}>
          {this.props.xValue}
        </div>
      </span>
    );
  }
}

export default XAxisTick;