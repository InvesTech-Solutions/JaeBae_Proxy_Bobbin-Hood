import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import styles from './../../dist/build/styles.min.css';

class EarningsRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }

  render () {
    return (<div>
     <App pId={this.props.pId}/>
    </div>);
  }
}
console.log('gruntingthis')
window.EarningsRatings = EarningsRatings;