import React from 'react';
import { removeFeature } from '../actions'
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux'

const AddedFeatures = props => {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default connect((state) => {
  return {
    features: state.car.features
  }
},
  { removeFeature }
)(AddedFeatures);;
