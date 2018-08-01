import React, { Component } from 'react';
import styles from './../../../dist/build/styles.min.css';

class Description extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className={styles.descDiv}>
        <div className={styles.descEst}>
          <svg width="28" height="28">
            <g transform="translate(14, 20)">
              <circle r="7" fill="#d7f7e7" className={styles.descCircle} />
            </g>
          </svg>
          <div className={styles.descText}>
          Estimated
          </div>
          <div className={styles.botText}>
            {this.props.estimate[this.props.estimate.length - 1]}
          </div>
        </div>
        <div className={styles.descAct}>
          <svg width="28" height="28">
            <g transform="translate(14, 20)">
              <circle r="7" fill="#2BD89E" className={styles.descCircle} />
            </g>
          </svg>
          <div className={styles.descText}>
          Actual
          </div>
          <div className={styles.botText}>
            {this.props.actual[this.props.estimate.length - 1]}
          </div>

        </div>
      </div>
    )
  }
}

export default Description;