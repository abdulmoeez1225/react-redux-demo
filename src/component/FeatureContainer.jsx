import React from "react";
import { connect } from "react-redux";
import { buyFeature } from "../redux";
const FeatureContainer = (props) => {
  return (
    <div>
      <h2>Number of Features -{props.numOfFeature}</h2>
      <button onClick={props.buyFeature}>Buy IceCream</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfFeature: state.feature.numOfFeature,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyFeature: () => dispatch(buyFeature()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FeatureContainer);
