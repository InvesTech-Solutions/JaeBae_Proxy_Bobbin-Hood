import React, { Component } from 'react';
import $ from 'jquery';
import styles from './../../../dist/build/styles.min.css';

class SummaryBox extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickedReadMore.bind(this);
    this.state = {
      head : 'Summary',
      showCondensed : true
    }
  }

  componentDidMount () {
    let head;
    if(this.props.ind === 0) {
      head = 'Buy';
    } else {
      head = 'Sell';
    }
    this.setState({ 
      head : `${head} Summary`
    });
  }

  componentDidUpdate () {
    if (this.state.showCondensed) {
      $(`#fade_${this.props.ind}`).css({"overflow" : "hidden", "height" : "45px"});
      $(`#summaryBox_${this.props.ind}`).css("height", "160.56px");
      let toppx;
      if (this.props.ind === 0) {
        $(`#summaryPositionControl_1`).css("top", "0px")
        toppx = '16px'
      } else {
        toppx = '-195px'
      };
      $(`#summaryTail_${this.props.ind}`).css("top", toppx);
    } else {
      let heightDiff;
      // heightBefore = $(`#fade_${this.props.ind}`).css
      $(`#fade_${this.props.ind}`).css({"overflow" : "visible", "height" : "auto"});

      heightDiff = this.heightDiff(`#fade_${this.props.ind}`);
      console.log(heightDiff)
      this.addHeight(`#summaryBox_${this.props.ind}`, heightDiff);
      this.addTop(`#summaryTail_${this.props.ind}`, heightDiff);
      if (this.props.ind === 0) {
        this.addTop(`#summaryPositionControl_1`, `-${heightDiff}`);
      }
    }
  }

  heightDiff (identifier) {
    let after = $(identifier).css('height');
    return  (`${String(Number(after.substring(0, after.length - 2)) - 45)}px`);
  }

  addHeight (identifier, heightDiff) {
    let height = $(identifier).css("height");
    let newHeight = `${String(Number(height.substring(0, height.length - 2)) + Number(heightDiff.substring(0, heightDiff.length - 2)))}px`;
    $(identifier).css("height", newHeight);
  }

  addTop (identifier, heightDiff) {
    let top = $(identifier).css("top");
    let newTop = `${String(Number(top.substring(0, top.length - 2)) + Number(heightDiff.substring(0, heightDiff.length - 2)))}px`;
    $(identifier).css("top", newTop);
  }

  clickedReadMore (e) {
    e.preventDefault();
    this.setState({ showCondensed : !this.state.showCondensed });
  }

  // renders entire earnings section with YAxis, DataPoints, XAxis, and Descriptions as subcomponents
  render () {
    return (
      <div id={`summaryPositionControl_${this.props.ind}`}>
        <div className={styles.summaryTail} id={`summaryTail_${this.props.ind}`}>
          <svg width="24" height="20" viewBox="0 0 24 20">
            <g>
              <path  d="M6.66133815e-15,6.89249489e-14 L24,1.30957403e-12 L3.34939321,18.8768262 L3.34939321,18.8768262 C2.5341158,19.6220755 1.26905894,19.5653065 0.523809649,18.750029 C0.186851616,18.3814084 2.34087955e-13,17.9000574 2.26929586e-13,17.4006358 L6.66133815e-15,6.89249489e-14 Z"></path>
            </g>
          </svg>
        </div>
        <div id={`summaryBox_${this.props.ind}`}>
          <p className={styles.summaryHead}>{this.state.head}</p>
          <div className={styles.fade} id={`fade_${this.props.ind}`}>
            {this.props.summary}
          </div>
          <a className={styles.readMore} href='#' onClick={this.clickHandler}>
            Read More
          </a>
          <footer className={styles.summaryFooter}>
            <p>Morningstar</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default SummaryBox;