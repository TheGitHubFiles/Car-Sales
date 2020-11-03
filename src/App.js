import React from 'react';
import { connect } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log(props)

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

export default connect((state) => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice

  }
},
  {}
)(App);

