import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
const ItemContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>BuyItem</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
