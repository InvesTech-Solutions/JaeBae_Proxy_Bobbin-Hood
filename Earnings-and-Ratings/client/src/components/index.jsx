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
     <App/>
    </div>)
  }
}

ReactDOM.render(React.createElement(EarningsRatings), document.getElementById('EarningsRatings'))
window.EarningsRatings = EarningsRatings;